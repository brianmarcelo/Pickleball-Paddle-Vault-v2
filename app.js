// ══════════════════════════════════════════════════════════════
//  APP.JS  —  Main logic, Firestore cloud save, local image cache
// ══════════════════════════════════════════════════════════════

let collection    = [];
let collData      = {};   // { paddleId: { rating, notes, photoKey } }
let reports       = [];
let customPaddles = [];
let customRating  = 0;
let customPhotoData = null;  // base64 for preview only
let activeBrandFilter = 'CRBN';  // DEFAULT: CRBN shown first
let searchQuery   = '';
let currentView   = 'browse';
let saveTimer     = null;

// ══════════════════════════════════════════════════════════════
//  LOCAL IMAGE CACHE  (IndexedDB — persists on phone/browser)
//  Photos are stored locally by key, never sent to Firestore
//  (keeps cloud storage free and fast)
// ══════════════════════════════════════════════════════════════
const IMAGE_DB_NAME = 'PaddleVaultImages';
const IMAGE_DB_VER  = 1;
const IMAGE_STORE   = 'photos';
let imageDB = null;

function openImageDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IMAGE_DB_NAME, IMAGE_DB_VER);
    req.onupgradeneeded = e => {
      e.target.result.createObjectStore(IMAGE_STORE);
    };
    req.onsuccess = e => { imageDB = e.target.result; resolve(imageDB); };
    req.onerror   = e => { console.warn('ImageDB open error', e); resolve(null); };
  });
}

async function saveImage(key, base64) {
  if (!imageDB) return;
  return new Promise(resolve => {
    const tx    = imageDB.transaction(IMAGE_STORE, 'readwrite');
    const store = tx.objectStore(IMAGE_STORE);
    store.put(base64, key);
    tx.oncomplete = () => resolve(true);
    tx.onerror    = () => resolve(false);
  });
}

async function loadImage(key) {
  if (!imageDB || !key) return null;
  return new Promise(resolve => {
    const tx    = imageDB.transaction(IMAGE_STORE, 'readonly');
    const store = tx.objectStore(IMAGE_STORE);
    const req   = store.get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror   = () => resolve(null);
  });
}

async function deleteImage(key) {
  if (!imageDB || !key) return;
  return new Promise(resolve => {
    const tx    = imageDB.transaction(IMAGE_STORE, 'readwrite');
    const store = tx.objectStore(IMAGE_STORE);
    store.delete(key);
    tx.oncomplete = () => resolve();
  });
}

function makeImageKey(paddleId) {
  const uid = currentUser ? currentUser.uid : 'guest';
  return `photo_${uid}_${paddleId}`;
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════
async function init() {
  await openImageDB();
  populateBrandFilters();
  populateSelects();
  renderPaddles();
  updateStats();
}

// ══════════════════════════════════════════════════════════════
//  CLOUD / LOCAL PERSISTENCE
// ══════════════════════════════════════════════════════════════
async function loadUserData() {
  if (isGuest) {
    collection    = JSON.parse(localStorage.getItem('pv_collection') || '[]');
    collData      = JSON.parse(localStorage.getItem('pv_coll_data')  || '{}');
    reports       = JSON.parse(localStorage.getItem('pv_reports')    || '[]');
    customPaddles = JSON.parse(localStorage.getItem('pv_custom')     || '[]');
    updateStats();
    if (currentView === 'collection') renderCollection();
    if (currentView === 'browse')     renderPaddles();
    return;
  }
  try {
    const uid  = currentUser.uid;
    const snap = await db.collection('users').doc(uid).get();
    if (snap.exists) {
      const d = snap.data();
      collection    = d.collection    || [];
      collData      = d.collData      || {};
      reports       = d.reports       || [];
      customPaddles = d.customPaddles || [];
    }
    updateStats();
    if (currentView === 'collection') renderCollection();
    if (currentView === 'browse')     renderPaddles();
  } catch(e) {
    console.warn('Firestore load failed, using localStorage', e);
    collection    = JSON.parse(localStorage.getItem('pv_collection') || '[]');
    collData      = JSON.parse(localStorage.getItem('pv_coll_data')  || '{}');
    reports       = JSON.parse(localStorage.getItem('pv_reports')    || '[]');
    customPaddles = JSON.parse(localStorage.getItem('pv_custom')     || '[]');
    updateStats();
  }
}

async function saveUserData() {
  // Always mirror to localStorage
  localStorage.setItem('pv_collection', JSON.stringify(collection));
  localStorage.setItem('pv_coll_data',  JSON.stringify(collData));
  localStorage.setItem('pv_reports',    JSON.stringify(reports));
  localStorage.setItem('pv_custom',     JSON.stringify(customPaddles));
  if (isGuest || !currentUser) return;

  // Debounce Firestore saves 800ms
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try {
      await db.collection('users').doc(currentUser.uid).set(
        { collection, collData, reports, customPaddles,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp() },
        { merge: true }
      );
    } catch(e) {
      console.error('Firestore save error', e);
    }
  }, 800);
}

// ══════════════════════════════════════════════════════════════
//  VIEWS
// ══════════════════════════════════════════════════════════════
function showView(name) {
  currentView = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.getElementById('nav-'  + name).classList.add('active');
  ['browse','collection','add','report'].forEach((v, i) => {
    if (v === name) document.querySelectorAll('.nav-tab')[i]?.classList.add('active');
  });
  if (name === 'collection') renderCollection();
  if (name === 'report')     renderReports();
  if (name === 'browse')     renderPaddles();
}

// ══════════════════════════════════════════════════════════════
//  BRAND FILTERS  (CRBN is the default active filter)
// ══════════════════════════════════════════════════════════════
function populateBrandFilters() {
  const wrap = document.getElementById('brand-filters');
  // "All" chip first
  const allChip = document.createElement('div');
  allChip.className = 'filter-chip';
  allChip.textContent = 'All';
  allChip.onclick = () => setBrandFilter('All', allChip);
  wrap.appendChild(allChip);

  [...new Set(PADDLES.map(p => p.brand))].sort().forEach(b => {
    const c = document.createElement('div');
    c.className = 'filter-chip' + (b === 'CRBN' ? ' active' : '');
    c.textContent = b;
    c.onclick = () => setBrandFilter(b, c);
    wrap.appendChild(c);
    if (b === 'CRBN') {
      // scroll to CRBN chip on load
      setTimeout(() => c.scrollIntoView({ inline: 'center', behavior: 'smooth' }), 300);
    }
  });
}

function populateSelects() {
  ['custom-brand','report-brand'].forEach(id => {
    const s = document.getElementById(id);
    BRANDS.forEach(b => {
      const o = document.createElement('option');
      o.value = b; o.textContent = b; s.appendChild(o);
    });
  });
  ['custom-year','report-year'].forEach(id => {
    const s = document.getElementById(id);
    for (let y = 2026; y >= 2015; y--) {
      const o = document.createElement('option');
      o.value = y; o.textContent = y; s.appendChild(o);
    }
  });
}

function setBrandFilter(b, el) {
  activeBrandFilter = b;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderPaddles();
}

function filterPaddles(q) { searchQuery = q.toLowerCase(); renderPaddles(); }

function getAllPaddles() {
  return [
    ...PADDLES,
    ...customPaddles.map((p, i) => ({ ...p, id: 'custom_' + i, tags: ['Custom'] }))
  ];
}

// ══════════════════════════════════════════════════════════════
//  RENDER
// ══════════════════════════════════════════════════════════════
function renderPaddles() {
  const list = document.getElementById('paddle-list');
  let p = getAllPaddles();
  if (activeBrandFilter !== 'All') p = p.filter(x => x.brand === activeBrandFilter);
  if (searchQuery) p = p.filter(x =>
    x.brand.toLowerCase().includes(searchQuery) ||
    x.model.toLowerCase().includes(searchQuery) ||
    (x.tags  || []).some(t => t.toLowerCase().includes(searchQuery)) ||
    (x.shape || '').toLowerCase().includes(searchQuery)
  );
  if (!p.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-text">No paddles found</div></div>`;
    return;
  }
  list.innerHTML = p.map(x => paddleCardHTML(x)).join('');
  // Async-load cached photos for visible cards
  p.forEach(x => {
    const cd = collData[x.id];
    if (cd?.photoKey) loadAndShowPhoto(x.id, cd.photoKey);
  });
}

async function loadAndShowPhoto(paddleId, photoKey) {
  const img = document.querySelector(`[data-photo-target="${paddleId}"]`);
  if (!img) return;
  const src = await loadImage(photoKey);
  if (src) { img.src = src; img.style.display = 'block'; }
}

function paddleCardHTML(p) {
  const inColl = collection.includes(p.id);
  const cd     = collData[p.id];
  return `<div class="paddle-card" onclick="openDetail(${JSON.stringify(p.id)})">
    <div class="paddle-card-header">
      <div class="paddle-thumb">
        ${cd?.photoKey
          ? `<img data-photo-target="${p.id}" style="display:none;width:100%;height:100%;object-fit:cover;" src="">`
          : `<svg width="20" height="28" viewBox="0 0 44 44" fill="none">
               <path d="M17 2 C11.5 2 7 6.2 7 12 C7 18.5 10 24 17 26 C24 24 27 18.5 27 12 C27 6.2 22.5 2 17 2 Z" fill="white" opacity="0.65"/>
               <path d="M13.5 26 Q13 28.5 14 29.5 L14 43 Q15.5 44.5 17 44.5 Q18.5 44.5 20 43 L20 29.5 Q21 28.5 20.5 26 Z" fill="rgba(196,220,251,0.75)"/>
             </svg>`
        }
      </div>
      <div class="paddle-info">
        <div class="paddle-brand">${p.brand}</div>
        <div class="paddle-name">${p.model}</div>
        <div class="paddle-year">${p.year}${p.surface ? ' · ' + p.surface : ''}${p.shape ? ' · ' + p.shape : ''}</div>
        <div class="paddle-stars">${starsHTML(cd?.rating || 0)}</div>
      </div>
      ${inColl ? '<span class="in-collection-badge">✓ Vault</span>' : ''}
    </div>
    <div>${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    ${cd?.notes ? `<div class="paddle-note">"${cd.notes}"</div>` : ''}
  </div>`;
}

function starsHTML(r) {
  let h = '';
  for (let i = 1; i <= 5; i++) h += `<span class="star ${i <= r ? 'filled' : ''}">★</span>`;
  return h;
}

async function renderCollection() {
  const list = document.getElementById('collection-list');
  if (!collection.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🏓</div><div class="empty-text">Your vault is empty.<br>Browse paddles and add them!</div></div>`;
    return;
  }
  const all  = getAllPaddles();
  list.innerHTML = collection.map(id => {
    const p = all.find(x => x.id == id);
    return p ? paddleCardHTML(p) : '';
  }).join('');
  // Load cached photos
  collection.forEach(id => {
    const cd = collData[id];
    if (cd?.photoKey) loadAndShowPhoto(id, cd.photoKey);
  });
}

function updateStats() {
  document.getElementById('stat-collection').textContent = collection.length;
  const all = getAllPaddles();
  document.getElementById('stat-total').textContent  = all.length;
  document.getElementById('stat-brands').textContent = new Set(all.map(p => p.brand)).size;
  const ratings = collection.map(id => collData[id]?.rating).filter(r => r > 0);
  document.getElementById('stat-avg').textContent = ratings.length
    ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : '—';
}

// ══════════════════════════════════════════════════════════════
//  DETAIL MODAL  (with local photo cache)
// ══════════════════════════════════════════════════════════════
async function openDetail(paddleId) {
  const p = getAllPaddles().find(x => x.id == paddleId);
  if (!p) return;
  const inColl  = collection.includes(paddleId);
  const cd      = collData[paddleId] || { rating: 0, notes: '', photoKey: null };
  window._mR    = cd.rating;
  window._mPhotoKey  = cd.photoKey || null;
  window._mNewPhoto  = null;  // base64 of a newly selected photo

  // Load cached photo for modal preview
  let photoSrc = null;
  if (cd.photoKey) photoSrc = await loadImage(cd.photoKey);

  const thumbHTML = photoSrc
    ? `<img src="${photoSrc}" style="width:100%;height:100%;object-fit:cover;">`
    : `<svg width="28" height="40" viewBox="0 0 44 44" fill="none">
         <path d="M17 2 C11.5 2 7 6.2 7 12 C7 18.5 10 24 17 26 C24 24 27 18.5 27 12 C27 6.2 22.5 2 17 2 Z" fill="white" opacity="0.75"/>
         <path d="M13.5 26 Q13 28.5 14 29.5 L14 43 Q15.5 44.5 17 44.5 Q18.5 44.5 20 43 L20 29.5 Q21 28.5 20.5 26 Z" fill="rgba(116,176,245,0.8)"/>
       </svg>`;

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-title">${p.model}</div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <div class="paddle-thumb" style="width:66px;height:66px;border-radius:12px;">${thumbHTML}</div>
      <div>
        <div class="paddle-brand" style="font-size:12px;">${p.brand}</div>
        <div style="font-size:14px;font-weight:600;color:var(--text-main);margin-top:2px;">${p.year}${p.surface ? ' · ' + p.surface : ''}</div>
        ${p.shape ? `<div style="font-size:11px;color:var(--text-soft);margin-top:1px;">${p.shape} shape</div>` : ''}
        <div>${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>
    <hr style="border:none;border-top:1px solid var(--card-border);margin:13px 0;">
    <div class="form-group">
      <label>Your Rating</label>
      <div class="star-input" id="modal-stars">
        ${[1,2,3,4,5].map(i => `<button class="star-btn ${i <= cd.rating ? 'active' : ''}" onclick="setMR(${JSON.stringify(paddleId)},${i})">★</button>`).join('')}
      </div>
    </div>
    <div class="form-group">
      <label>Notes</label>
      <textarea id="modal-notes" placeholder="Your thoughts…">${cd.notes || ''}</textarea>
    </div>
    <div class="form-group">
      <label>Photo <span style="font-size:10px;color:var(--text-soft);font-weight:400;text-transform:none;">(saved locally on this device)</span></label>
      <label class="photo-upload" for="modal-photo-input">
        <input type="file" id="modal-photo-input" accept="image/*" onchange="prevMPhoto(this)">
        <div class="photo-upload-icon">📷</div>
        <div class="photo-upload-text">Tap to upload your paddle photo</div>
        ${photoSrc ? `<img src="${photoSrc}" class="photo-preview" id="modal-photo-preview">` : '<img class="photo-preview" id="modal-photo-preview" style="display:none">'}
      </label>
    </div>
    <button class="primary-btn" onclick="saveMD(${JSON.stringify(paddleId)},${inColl})">
      ${inColl ? '💾 Save Changes' : '+ Add to My Vault'}
    </button>
    ${inColl ? `<button class="secondary-btn" style="color:#dc2626;border-color:#fca5a5;" onclick="remVault(${JSON.stringify(paddleId)})">Remove from Vault</button>` : ''}
  `;
  document.getElementById('detail-modal').classList.add('open');
}

function setMR(pid, val) {
  window._mR = val;
  document.querySelectorAll('#modal-stars .star-btn').forEach((b, i) => b.classList.toggle('active', i < val));
}

function prevMPhoto(input) {
  const f = input.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = e => {
    window._mNewPhoto = e.target.result;
    const img = document.getElementById('modal-photo-preview');
    if (img) { img.src = e.target.result; img.style.display = 'block'; }
  };
  reader.readAsDataURL(f);
}

async function saveMD(paddleId, wasInColl) {
  const notes = document.getElementById('modal-notes').value;

  // Save new photo to IndexedDB if one was selected
  let photoKey = collData[paddleId]?.photoKey || null;
  if (window._mNewPhoto) {
    photoKey = makeImageKey(paddleId);
    await saveImage(photoKey, window._mNewPhoto);
  }

  collData[paddleId] = { rating: window._mR || 0, notes, photoKey };
  if (!wasInColl) collection.push(paddleId);

  updateStats();
  closeModal();
  await saveUserData();
  showToast(wasInColl ? '💾 Changes saved' : '🏓 Added to your Vault!');
  if (currentView === 'collection') renderCollection();
  if (currentView === 'browse')     renderPaddles();
}

async function remVault(paddleId) {
  collection = collection.filter(id => id != paddleId);
  // Clean up stored photo
  if (collData[paddleId]?.photoKey) await deleteImage(collData[paddleId].photoKey);
  delete collData[paddleId];
  updateStats();
  closeModal();
  await saveUserData();
  showToast('Removed from Vault');
  if (currentView === 'collection') renderCollection();
  if (currentView === 'browse')     renderPaddles();
}

function closeModal() { document.getElementById('detail-modal').classList.remove('open'); }
document.getElementById('detail-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ══════════════════════════════════════════════════════════════
//  ADD CUSTOM PADDLE
// ══════════════════════════════════════════════════════════════
function setRating(val) {
  customRating = val;
  document.querySelectorAll('#custom-stars .star-btn').forEach((b, i) => b.classList.toggle('active', i < val));
}

function onCustomBrandChange() {
  document.getElementById('custom-other-brand-wrap').style.display =
    document.getElementById('custom-brand').value === 'Other' ? 'block' : 'none';
}

function onReportBrandChange() {
  document.getElementById('report-other-brand-wrap').style.display =
    document.getElementById('report-brand').value === 'Other' ? 'block' : 'none';
}

function previewPhoto(input) {
  const f = input.files[0]; if (!f) return;
  const reader = new FileReader();
  reader.onload = e => {
    customPhotoData = e.target.result;
    const img = document.getElementById('photo-preview-img');
    img.src = e.target.result; img.style.display = 'block';
  };
  reader.readAsDataURL(f);
}

async function saveCustomPaddle() {
  const brand = document.getElementById('custom-brand').value;
  const ob    = document.getElementById('custom-other-brand').value;
  const model = document.getElementById('custom-model').value.trim();
  const year  = document.getElementById('custom-year').value;
  const notes = document.getElementById('custom-notes').value.trim();
  const fb = brand === 'Other' ? ob.trim() : brand;
  if (!fb || !model) { showToast('⚠️ Brand and model required'); return; }

  customPaddles.push({
    brand: fb, model, year: parseInt(year) || 2024,
    surface: 'Custom', notes, rating: customRating
  });
  const pid = 'custom_' + (customPaddles.length - 1);
  collection.push(pid);

  // Save photo locally
  let photoKey = null;
  if (customPhotoData) {
    photoKey = makeImageKey(pid);
    await saveImage(photoKey, customPhotoData);
  }
  collData[pid] = { rating: customRating, notes, photoKey };

  updateStats();
  clearCustomForm();
  await saveUserData();
  showToast('🎉 Paddle saved to your Vault!');
  showView('collection');
}

function clearCustomForm() {
  ['custom-brand','custom-model','custom-year','custom-notes','custom-other-brand']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('custom-other-brand-wrap').style.display = 'none';
  document.getElementById('photo-preview-img').style.display = 'none';
  document.getElementById('custom-photo-input').value = '';
  customRating = 0; customPhotoData = null;
  document.querySelectorAll('#custom-stars .star-btn').forEach(b => b.classList.remove('active'));
}

// ══════════════════════════════════════════════════════════════
//  REPORTS
// ══════════════════════════════════════════════════════════════
async function submitReport() {
  const brand   = document.getElementById('report-brand').value;
  const ob      = document.getElementById('report-other-brand').value;
  const model   = document.getElementById('report-model').value.trim();
  const year    = document.getElementById('report-year').value;
  const details = document.getElementById('report-details').value.trim();
  const fb = brand === 'Other' ? ob.trim() : brand;
  if (!fb || !model) { showToast('⚠️ Brand and model required'); return; }
  reports.push({ brand: fb, model, year, details, date: new Date().toLocaleDateString() });
  ['report-brand','report-model','report-year','report-details','report-other-brand']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('report-other-brand-wrap').style.display = 'none';
  await saveUserData();
  showToast('✓ Report submitted. Thank you!');
  renderReports();
}

function renderReports() {
  const list = document.getElementById('reports-list');
  if (!reports.length) { list.innerHTML = ''; return; }
  list.innerHTML = `<div class="section-title" style="margin-top:8px;">YOUR REPORTS</div>` +
    reports.map(r => `<div class="paddle-card" style="cursor:default;">
      <div class="paddle-brand">${r.brand}</div>
      <div class="paddle-name">${r.model}</div>
      <div class="paddle-year">${r.year ? r.year + ' · ' : ''}Reported ${r.date}</div>
      ${r.details ? `<div class="paddle-note">${r.details}</div>` : ''}
    </div>`).join('');
}

// ══════════════════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2300);
}
