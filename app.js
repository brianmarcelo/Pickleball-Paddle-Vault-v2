// ── STATE ─────────────────────────────────────────────────────
let collection=[],collData={},reports=[],customPaddles=[];
let customRating=0,customPhotoData=null;
let activeBrandFilter='All',searchQuery='',currentView='browse';
let f_y='All',f_g='All',f_s='All',f_sort='Newest';
let v_y='All',v_g='All',v_s='All',v_sort='Newest';
let saveTimer=null,currentUser=null,isGuest=false;

// ── IMAGE DB (IndexedDB + compression) ───────────────────────
// Photos compressed to max 800px JPEG 75% quality — saves space locally.
let imageDB=null;
function openIDB(){return new Promise(r=>{const q=indexedDB.open('PVImg',1);q.onupgradeneeded=e=>e.target.result.createObjectStore('photos');q.onsuccess=e=>{imageDB=e.target.result;r(imageDB);};q.onerror=()=>r(null);});}
async function saveImg(k,d){if(!imageDB)return;return new Promise(r=>{const t=imageDB.transaction('photos','readwrite');t.objectStore('photos').put(d,k);t.oncomplete=()=>r(true);t.onerror=()=>r(false);});}
async function loadImg(k){if(!imageDB||!k)return null;return new Promise(r=>{const t=imageDB.transaction('photos','readonly');const q=t.objectStore('photos').get(k);q.onsuccess=()=>r(q.result||null);q.onerror=()=>r(null);});}
async function delImg(k){if(!imageDB||!k)return;return new Promise(r=>{const t=imageDB.transaction('photos','readwrite');t.objectStore('photos').delete(k);t.oncomplete=()=>r();});}
function imgKey(id){return`pv_${currentUser?currentUser.uid:'guest'}_${id}`;}
function compressImage(dataURL){return new Promise(res=>{const img=new Image();img.onload=()=>{const MAX=800;let w=img.width,h=img.height;if(w>MAX||h>MAX){if(w>h){h=Math.round(h*MAX/w);w=MAX;}else{w=Math.round(w*MAX/h);h=MAX;}}const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);res(c.toDataURL('image/jpeg',0.75));};img.src=dataURL;});}

// ── AUTH ──────────────────────────────────────────────────────
function swTab(t){
  document.getElementById('tab-login').classList.toggle('active',t==='login');
  document.getElementById('tab-signup').classList.toggle('active',t==='signup');
  document.getElementById('form-login').style.display=t==='login'?'block':'none';
  document.getElementById('form-signup').style.display=t==='signup'?'block':'none';
  document.getElementById('lerr').textContent='';document.getElementById('serr').textContent='';
}
async function signInWithGoogle(){try{await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());}catch(e){document.getElementById('lerr').textContent=authErr(e.code);}}
async function doSignIn(){
  const e=document.getElementById('le').value.trim(),p=document.getElementById('lp').value;
  document.getElementById('lerr').textContent='';
  if(!e||!p){document.getElementById('lerr').textContent='Please enter email and password.';return;}
  try{await auth.signInWithEmailAndPassword(e,p);}catch(err){document.getElementById('lerr').textContent=authErr(err.code);}
}
async function doSignUp(){
  const n=document.getElementById('sn2').value.trim(),e=document.getElementById('se').value.trim(),p=document.getElementById('sp').value;
  document.getElementById('serr').textContent='';
  if(!n||!e||!p){document.getElementById('serr').textContent='All fields required.';return;}
  if(p.length<6){document.getElementById('serr').textContent='Password must be at least 6 characters.';return;}
  try{const c=await auth.createUserWithEmailAndPassword(e,p);await c.user.updateProfile({displayName:n});}catch(err){document.getElementById('serr').textContent=authErr(err.code);}
}
function guestIn(){isGuest=true;currentUser=null;showApp('Guest');}
function doSignOut(){if(isGuest){isGuest=false;currentUser=null;collection=[];collData={};reports=[];customPaddles=[];document.getElementById('main-app').style.display='none';document.getElementById('auth-screen').style.display='flex';return;}auth.signOut();}
auth.onAuthStateChanged(u=>{if(u){isGuest=false;currentUser=u;showApp(u.displayName||u.email.split('@')[0]);loadData();}else if(!isGuest){document.getElementById('auth-screen').style.display='flex';document.getElementById('main-app').style.display='none';}});
function showApp(n){document.getElementById('auth-screen').style.display='none';document.getElementById('main-app').style.display='block';document.getElementById('greet').textContent=`Hi, ${n}`;init();}
function authErr(c){
  const m={
    'auth/user-not-found':'No account found with that email.',
    'auth/wrong-password':'Incorrect password.',
    'auth/invalid-credential':'Incorrect email or password.',
    'auth/email-already-in-use':'An account with that email already exists.',
    'auth/invalid-email':'Please enter a valid email address.',
    'auth/too-many-requests':'Too many attempts. Please try again later.',
    'auth/popup-closed-by-user':'Sign-in popup was closed.',
    'auth/network-request-failed':'Network error. Check your connection.',
    'auth/operation-not-allowed':'Google sign-in is not enabled in Firebase console.',
    'auth/user-disabled':'This account has been disabled.'
  };
  return m[c]||`Auth Error: ${c}. Please ensure Google Sign-In is enabled and your domain is authorized in Firebase console.`;
}
document.addEventListener('keydown',e=>{if(e.key!=='Enter')return;if(document.getElementById('auth-screen').style.display==='none')return;document.getElementById('form-login').style.display!=='none'?doSignIn():doSignUp();});

// ── DATA ──────────────────────────────────────────────────────
async function loadData(){
  if(isGuest){collection=JSON.parse(localStorage.getItem('pv_c')||'[]');collData=JSON.parse(localStorage.getItem('pv_d')||'{}');reports=JSON.parse(localStorage.getItem('pv_r')||'[]');customPaddles=JSON.parse(localStorage.getItem('pv_cp')||'[]');updateStats();if(currentView==='collection')renderColl();if(currentView==='browse')renderP();return;}
  try{const s=await db.collection('users').doc(currentUser.uid).get();if(s.exists){const d=s.data();collection=d.collection||[];collData=d.collData||{};reports=d.reports||[];customPaddles=d.customPaddles||[];}updateStats();if(currentView==='collection')renderColl();if(currentView==='browse')renderP();}
  catch(e){console.warn('Firestore load failed',e);collection=JSON.parse(localStorage.getItem('pv_c')||'[]');collData=JSON.parse(localStorage.getItem('pv_d')||'{}');reports=JSON.parse(localStorage.getItem('pv_r')||'[]');customPaddles=JSON.parse(localStorage.getItem('pv_cp')||'[]');updateStats();}
}
async function saveData(){
  localStorage.setItem('pv_c',JSON.stringify(collection));localStorage.setItem('pv_d',JSON.stringify(collData));localStorage.setItem('pv_r',JSON.stringify(reports));localStorage.setItem('pv_cp',JSON.stringify(customPaddles));
  if(isGuest||!currentUser)return;
  clearTimeout(saveTimer);
  saveTimer=setTimeout(async()=>{try{await db.collection('users').doc(currentUser.uid).set({collection,collData,reports,customPaddles,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});}catch(e){console.error('Firestore save error',e);}},800);
}

// ── INIT ──────────────────────────────────────────────────────
async function init(){await openIDB();buildFilters();buildSelects();renderP();updateStats();}

function buildFilters(){
  const sel=document.getElementById('brand-filters-sel');
  sel.innerHTML='<option value="All">All Brands ('+allP().length+')</option>';
  [...new Set(PADDLES.map(p=>p.brand))].sort().forEach(b=>{
    const count=allP().filter(x=>x.brand===b).length;
    const o=document.createElement('option');
    o.value=b;o.textContent=b+' ('+count+')';
    sel.appendChild(o);
  });
}
function buildSelects(){
  ['cb','rb'].forEach(id=>{const s=document.getElementById(id);if(!s)return;s.innerHTML='<option value="">Select brand…</option>';BRANDS.forEach(b=>{const o=document.createElement('option');o.value=b;o.textContent=b;s.appendChild(o);});});
  ['cy','ry'].forEach(id=>{const s=document.getElementById(id);if(!s)return;s.innerHTML='<option value="">Select year…</option>';for(let y=2026;y>=2014;y--){const o=document.createElement('option');o.value=y;o.textContent=y;s.appendChild(o);}});
  ['filter-year','v-filter-year'].forEach(id=>{const s=document.getElementById(id);if(!s)return;s.innerHTML='<option value="All">All Years</option>';const years=new Set(allP().map(x=>x.year));[...years].sort((a,b)=>b-a).forEach(y=>{const o=document.createElement('option');o.value=y;o.textContent=y;s.appendChild(o);});});
}
function showView(n){
  currentView=n;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.bb2').forEach(b=>b.classList.remove('active'));
  const target = document.getElementById('view-'+n);
  if(target) target.classList.add('active');
  const nav = document.getElementById('nav-'+n);
  if(nav) nav.classList.add('active');
  ['browse','collection','add','report'].forEach((v,i)=>{if(v===n)document.querySelectorAll('.ntab')[i]?.classList.add('active');});
  if(n==='collection')renderColl();if(n==='report')renderRep();if(n==='browse'){clearTimeout(_fTimer);renderP();}
}
function setBFSel(val){activeBrandFilter=val;renderP();}
function setFilter(type,val,ctx='b'){
  if(ctx==='b'){
    if(type==='year')f_y=val;if(type==='gen')f_g=val;if(type==='shape')f_s=val;if(type==='sort')f_sort=val;
    renderP();
  } else {
    if(type==='year')v_y=val;if(type==='gen')v_g=val;if(type==='shape')v_s=val;if(type==='sort')v_sort=val;
    renderColl();
  }
}
let _fTimer;function filterP(q){searchQuery=q.toLowerCase();clearTimeout(_fTimer);_fTimer=setTimeout(renderP,150);}
let _allPCache=null;
function allP(){
  if(_allPCache&&!customPaddles.length)return _allPCache;
  const raw=[...PADDLES,...customPaddles.map((p,i)=>({...p,id:'c'+i,tags:[...(p.tags||[]),'Custom']}))];
  // Grouping similar within brand, desc years first
  raw.sort((a,b)=>{
    if(a.brand!==b.brand) return a.brand==='CRBN'?-1:b.brand==='CRBN'?1:a.brand.localeCompare(b.brand);
    if(a.year!==b.year) return b.year-a.year;
    return a.model.localeCompare(b.model);
  });
  if(!customPaddles.length)_allPCache=raw;
  return raw;
}
function getFiltered(list,y,g,s,srt){
  let r=[...list];
  if(y!=='All') r=r.filter(x=>String(x.year)===y);
  if(g!=='All') r=r.filter(x=>(x.tags||[]).includes(g));
  if(s!=='All') r=r.filter(x=>x.shape===s);
  
  if(srt==='Newest') r.sort((a,b)=>{
    if(b.year!==a.year) return b.year-a.year;
    if(a.brand!==b.brand) return a.brand.localeCompare(b.brand);
    return a.model.localeCompare(b.model);
  });
  else if(srt==='Oldest') r.sort((a,b)=>a.year-b.year||a.brand.localeCompare(b.brand));
  else if(srt==='Brand') r.sort((a,b)=>a.brand.localeCompare(b.brand)||b.year-a.year);
  else if(srt==='Rating') r.sort((a,b)=>(collData[b.id]?.rating||0)-(collData[a.id]?.rating||0)||b.year-a.year);
  return r;
}
function invalidateCache(){_allPCache=null;}

function renderP(){
  const l=document.getElementById('paddle-list');
  let p=allP();
  if(activeBrandFilter!=='All')p=p.filter(x=>x.brand===activeBrandFilter);
  if(searchQuery){const q=searchQuery;p=p.filter(x=>x.brand.toLowerCase().includes(q)||x.model.toLowerCase().includes(q)||(x.tags||[]).some(t=>t.toLowerCase().includes(q))||String(x.year).includes(q));}
  p=getFiltered(p,f_y,f_g,f_s,f_sort);
  const ce=document.getElementById('browse-count'); if(ce) ce.innerHTML=`<strong>${p.length}</strong> verified paddles`;
  if(!p.length){l.innerHTML='<div class="es"><div class="ei">🔍</div><div class="et">No paddles match these filters</div></div>';return;}
  l.innerHTML=p.map(x=>pCard(x)).join('');
  p.forEach(x=>{const d=collData[x.id];if(d?.photoKey)loadAndShow(x.id,d.photoKey);});
}
async function loadAndShow(id,k){const imgs=document.querySelectorAll(`[data-pt="${id}"]`);if(!imgs.length)return;const s=await loadImg(k);if(s){imgs.forEach(img=>{img.src=s;img.style.display='block';}); }}
function pCard(p){
  const ic=collection.includes(p.id),d=collData[p.id];
  return`<div class="pc" onclick="openD(${JSON.stringify(p.id)})"><div class="pch">
    <div class="pt">${d?.photoKey?`<img data-pt="${p.id}" style="display:none;width:100%;height:100%;object-fit:cover;" src="">`:
      `<svg width="100%" height="100%" viewBox="0 0 24 44" fill="none" preserveAspectRatio="xMidYMid meet"><g transform="translate(-2.95,3.58) rotate(15,12,24)"><ellipse cx="12" cy="9" rx="10.7" ry="13.2" fill="#0d2954" opacity="0.55"/><ellipse cx="12" cy="9" rx="9.5" ry="12" fill="#111111" opacity="0.5"/><rect x="8.2" y="21.5" width="7.6" height="18.5" rx="2.2" fill="#0d2954" opacity="0.6"/></g></svg>`}</div>
    <div class="pi"><div class="pb2">${p.brand}</div><div class="pn">${p.unreleased?'<span style="color:#ef4444;font-size:11px;margin-right:4px;">(Unreleased)</span>':''}${p.model}</div>
      <div class="py">${p.year}${p.surface?' · '+p.surface:''}${p.shape?' · '+p.shape:''}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:2px;">
        <div class="pst">${stars(d?.rating||0)}</div>
        ${p.source?`<a href="${p.source}" target="_blank" onclick="event.stopPropagation()" style="font-size:10px;color:var(--bb);text-decoration:none;display:flex;align-items:center;gap:3px;opacity:0.8;font-weight:600;letter-spacing:0.3px;">📜 Source</a>`:''}
      </div>
      ${d?.qty && d.qty > 1 ? `<span class="tag-qty">x${d.qty}</span>`:''}</div>
    ${ic?'<span class="vbdg">✓ Vault</span>':''}</div>
    <div>${p.unreleased?`<span class="tag" style="background:#fef08a;color:#92400e;border-color:#fde047;">UNRELEASED</span>`:''}${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    ${d?.notes?`<div class="pnote">"${d.notes}"</div>`:''}</div>`;
}
function stars(r){let h='';for(let i=1;i<=5;i++)h+=`<span class="star ${i<=r?'filled':''}">★</span>`;return h;}
async function renderColl(){
  const l=document.getElementById('collection-list');
  if(!collection.length){l.innerHTML=`<div class="es"><div class="ei"><svg width="44" height="44" viewBox="0 0 44 44" fill="none"><g transform="translate(-2.95,3.58) rotate(15,12,24)"><ellipse cx="12" cy="9" rx="10.7" ry="13.2" fill="#0d2954"/><ellipse cx="12" cy="9" rx="9.5" ry="12" fill="#111111"/><rect x="8.2" y="21.5" width="7.6" height="18.5" rx="2.2" fill="#0d2954"/></g><circle cx="35" cy="9" r="7" fill="#fbbf24"/><circle cx="32.8" cy="6.8" r="1.7" fill="rgba(255,255,255,0.22)"/><circle cx="35" cy="3.2" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="38.4" cy="4.8" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="40.1" cy="8.8" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="38.4" cy="12.9" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="35" cy="14.8" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="31.6" cy="12.9" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="29.9" cy="8.8" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="31.6" cy="4.8" r="0.95" fill="rgba(120,60,0,0.55)"/><circle cx="35" cy="9" r="0.85" fill="rgba(120,60,0,0.48)"/></svg></div><div class="et">Your vault is empty.<br>Browse paddles and add them!</div></div>`;return;}
  const all=allP();
  let list=collection.map(id=>all.find(x=>x.id==id)).filter(Boolean);
  list=getFiltered(list,v_y,v_g,v_s,v_sort);
  if(!list.length){l.innerHTML='<div class="es"><div class="ei">🔍</div><div class="et">No paddles in your vault match these filters</div></div>';return;}
  l.innerHTML=list.map(p=>pCard(p)).join('');
  list.forEach(p=>{if(collData[p.id]?.photoKey)loadAndShow(p.id,collData[p.id].photoKey);});
}
function closeStatM(){document.getElementById('stat-modal').classList.remove('open');}

function showStatView(type){
  const all=allP();
  let html='';
  if(type==='all'){
    html='<div class="mt">ALL PADDLES ('+all.length+')</div>';
    const brands=[...new Set(all.map(p=>p.brand))].sort();
    brands.forEach(b=>{
      const bp=all.filter(p=>p.brand===b);
      html+='<div class="sectit" style="font-size:13px;margin:14px 0 4px;">'+b+' ('+bp.length+')</div>';
      bp.forEach(p=>{
        const pid=typeof p.id==='number'?p.id:'"'+p.id+'"';
        html+='<div class="sv-item" data-action="paddle" data-pid="'+p.id+'" style="padding:7px 0;border-bottom:1px solid var(--cbr);cursor:pointer;">'
          +'<div style="font-size:13px;font-weight:600;color:var(--tm);">'+p.model+'</div>'
          +'<div style="font-size:11px;color:var(--tf);">'+p.year+(p.surface?' · '+p.surface:'')+'</div>'
          +'</div>';
      });
    });
  } else if(type==='brands'){
    const brands=[...new Set(all.map(p=>p.brand))].sort();
    html='<div class="mt">ALL BRANDS ('+brands.length+')</div>';
    brands.forEach(b=>{
      const count=all.filter(p=>p.brand===b).length;
      const inVault=collection.filter(id=>all.find(p=>p.id==id&&p.brand===b)).length;
      html+='<div class="sv-item" data-action="brand" data-brand="'+b+'" style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--cbr);cursor:pointer;">'
        +'<div><div style="font-size:14px;font-weight:600;color:var(--tm);">'+b+'</div>'
        +'<div style="font-size:11px;color:var(--tf);">'+count+' paddle'+(count!==1?'s':'')+(inVault?' · '+inVault+' in your vault':'')+'</div></div>'
        +'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.3;flex-shrink:0;"><polyline points="9 18 15 12 9 6"/></svg>'
        +'</div>';
    });
  } else if(type==='ratings'){
    const rated=collection.map(id=>{const p=all.find(x=>x.id==id);const d=collData[id];return p&&d&&d.rating>0?{p,d}:null;}).filter(Boolean).sort((a,b)=>b.d.rating-a.d.rating);
    const unrated=collection.map(id=>{const p=all.find(x=>x.id==id);const d=collData[id];return p&&(!d||!d.rating)?p:null;}).filter(Boolean);
    html='<div class="mt">RATINGS</div>';
    if(!collection.length){
      html+='<div class="es"><div class="ei">⭐</div><div class="et">Add paddles to your vault<br>and rate them to see rankings.</div></div>';
    } else {
      if(rated.length){
        rated.forEach(({p,d})=>{
          html+='<div class="sv-item" data-action="paddle" data-pid="'+p.id+'" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--cbr);cursor:pointer;">'
            +'<div style="font-size:20px;font-weight:700;color:var(--bb);width:24px;text-align:center;flex-shrink:0;">'+d.rating+'</div>'
            +'<div style="flex:1;min-width:0;">'
            +'<div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--bb);font-weight:700;">'+p.brand+'</div>'
            +'<div style="font-size:13px;font-weight:600;color:var(--tm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+p.model+'</div>'
            +'<div style="font-size:12px;color:#f59e0b;">'+['','★','★★','★★★','★★★★','★★★★★'][d.rating]+'</div>'
            +'</div></div>';
        });
      }
      if(unrated.length){
        html+='<div style="font-size:11px;color:var(--tf);text-transform:uppercase;letter-spacing:1px;margin:14px 0 6px;">Unrated ('+unrated.length+')</div>';
        unrated.forEach(p=>{
          html+='<div class="sv-item" data-action="paddle" data-pid="'+p.id+'" style="padding:8px 0;border-bottom:1px solid var(--cbr);cursor:pointer;">'
            +'<div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--bb);font-weight:700;">'+p.brand+'</div>'
            +'<div style="font-size:13px;font-weight:600;color:var(--tm);">'+p.model+'</div>'
            +'</div>';
        });
      }
    }
  }
  const smc=document.getElementById('smc');
  smc.innerHTML=html;
  // Delegated click handler — no inline onclick needed
  smc.querySelectorAll('.sv-item').forEach(el=>{
    el.addEventListener('click',()=>{
      const action=el.dataset.action;
      if(action==='paddle'){
        const pid=isNaN(el.dataset.pid)?el.dataset.pid:Number(el.dataset.pid);
        closeStatM();setTimeout(()=>openD(pid),220);
      } else if(action==='brand'){
        closeStatM();
        setTimeout(()=>{setBFByName(el.dataset.brand);showView('browse');},220);
      }
    });
  });
  document.getElementById('stat-modal').classList.add('open');
}

function setBFByName(b){
  activeBrandFilter=b;
  const sel=document.getElementById('brand-filters-sel');
  if(sel)sel.value=b;
  renderP();
}

function updateStats(){
  document.getElementById('sc0').textContent=collection.length;
  const all=allP();document.getElementById('sc1').textContent=all.length;document.getElementById('sc2').textContent=new Set(all.map(p=>p.brand)).size;
  const r=collection.map(id=>collData[id]?.rating).filter(x=>x>0);
  document.getElementById('sc3').textContent=r.length?(r.reduce((a,b)=>a+b,0)/r.length).toFixed(1):'—';
}

// ── DETAIL MODAL ──────────────────────────────────────────────
async function openD(pid){
  const p=allP().find(x=>x.id==pid);if(!p)return;
  const ic=collection.includes(pid),d=collData[pid]||{rating:0,notes:'',photoKey:null,qty:1,extraPhotoKeys:[]};
  window._mR=d.rating;window._mPK=d.photoKey||null;window._mNP=null;
  window._mQTY=d.qty||1;window._mExtraPKs=d.extraPhotoKeys||[];window._mExtraNPs={};
  window._mStats=d.cStats||{};
  let src=null;if(d.photoKey)src=await loadImg(d.photoKey);
  const th=src?`<img src="${src}" onclick="expandPhoto('${src}')" style="width:100%;height:100%;object-fit:cover;cursor:zoom-in;" title="Tap to expand">`:`<svg width="100%" height="100%" viewBox="0 0 24 44" fill="none" preserveAspectRatio="xMidYMid meet"><g transform="translate(-2.95,3.58) rotate(15,12,24)"><ellipse cx="12" cy="9" rx="10.7" ry="13.2" fill="#0d2954" opacity="0.65"/><ellipse cx="12" cy="9" rx="9.5" ry="12" fill="#111111" opacity="0.65"/><rect x="8.2" y="21.5" width="7.6" height="18.5" rx="2.2" fill="#0d2954" opacity="0.7"/></g></svg>`;
  document.getElementById('mc').innerHTML=`
    <div class="mt">${p.model}</div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <div class="pt" style="width:66px;height:66px;border-radius:12px;">${th}</div>
      <div><div class="pb2" style="font-size:12px;">${p.brand}</div>
        <div style="font-size:14px;font-weight:600;color:var(--tm);margin-top:2px;">${p.year}${p.surface?' · '+p.surface:''}</div>
        ${p.shape?`<div style="font-size:11px;color:var(--tf);margin-top:1px;">${p.shape} shape</div>`:''}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:11px;color:var(--tm);margin-top:3px;margin-bottom:4px;">
          <div><b title="Click value to edit">Length:</b> <span class="edt-stat" contenteditable="true" onblur="window._mStats.len=this.innerText.replace(/[^\\d.]/g,'')">${d.cStats?.len||p.len||'—'}</span>"</div>
          <div><b title="Click value to edit">Width:</b> <span class="edt-stat" contenteditable="true" onblur="window._mStats.wid=this.innerText.replace(/[^\\d.]/g,'')">${d.cStats?.wid||p.wid||'—'}</span>"</div>
          <div><b title="Click value to edit">Grip Len:</b> <span class="edt-stat" contenteditable="true" onblur="window._mStats.hLen=this.innerText.replace(/[^\\d.]/g,'')">${d.cStats?.hLen||p.hLen||'—'}</span>"</div>
          <div><b title="Click value to edit">Grip Circ:</b> <span class="edt-stat" contenteditable="true" onblur="window._mStats.hCirc=this.innerText.replace(/[^\\d.]/g,'')">${d.cStats?.hCirc||p.hCirc||'—'}</span>"</div>
          <div><b title="Click value to edit">Static Wt:</b> <span class="edt-stat" contenteditable="true" onblur="window._mStats.stWt=this.innerText.replace(/[^\\d.]/g,'')">${d.cStats?.stWt||p.stWt||'—'}</span> oz</div>
          <div><b title="Click value to edit">Swing Wt:</b> <span class="edt-stat" contenteditable="true" onblur="window._mStats.swWt=this.innerText.replace(/[^\\d.]/g,'')">${d.cStats?.swWt||p.swWt||'—'}</span></div>
          <div><b title="Click value to edit">Twist Wt:</b> <span class="edt-stat" contenteditable="true" onblur="window._mStats.twWt=this.innerText.replace(/[^\\d.]/g,'')">${d.cStats?.twWt||p.twWt||'—'}</span></div>
        </div>
        <div>${p.unreleased?`<span class="tag" style="background:#fef08a;color:#92400e;border-color:#fde047;">UNRELEASED</span>`:''}${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div></div></div>
    
    <div class="qty-row"><div style="font-size:12px;font-weight:600;color:var(--tm);flex:1;">Number Owned</div><div class="qty-ctrl">
      <button class="qty-btn" onclick="modQ(-1)">-</button><div class="qty-val" id="mqty">${window._mQTY}</div><button class="qty-btn" onclick="modQ(1)">+</button></div></div>

    <div class="fg"><label>Your Rating</label><div class="stri" id="mstars">
      ${[1,2,3,4,5].map(i=>`<button class="strbtn ${i<=d.rating?'active':''}" onclick="setMR(${JSON.stringify(pid)},${i})">★</button>`).join('')}</div></div>
    <div class="fg"><label>Notes</label><textarea id="mnotes" placeholder="Your thoughts…">${d.notes||''}</textarea></div>
    <div class="fg"><label>Primary Photo <span style="font-size:10px;color:var(--tf);font-weight:400;text-transform:none;">(saves to device only, won't sync to other devices)</span></label>
      <label class="pu" for="mpf"><input type="file" id="mpf" accept="image/*" onchange="prevMP(this)">
      <div class="puico">📷</div><div class="putxt">Upload main photo</div>
      ${src?`<img src="${src}" class="pprev" id="mpprev" onclick="expandPhoto('${src}')" style="cursor:zoom-in;">`:'<img class="pprev" id="mpprev" style="display:none;cursor:zoom-in;" onclick="expandPhoto(this.src)">'}</label></div>
    
    <div id="extra-photos-sect" style="${window._mQTY>1?'':'display:none'}">
       <div style="font-size:12px;font-weight:600;color:var(--tm);margin:18px 0 8px;">Additional Unit Photos</div>
       <div class="ep-grid" id="ep-grid"></div>
    </div>

    <button class="pbtn" onclick="saveMD(${JSON.stringify(pid)},${ic})">${ic?'💾 Save Changes':'+ Add to My Vault'}</button>
    ${ic?`<button class="sbtn" style="color:#dc2626;border-color:#fca5a5;" onclick="remV(${JSON.stringify(pid)})">Remove from Vault</button>`:''}
  `;
  renderEP(pid);
  document.getElementById('modal').classList.add('open');
}
function modQ(v){const n=Math.max(1,Math.min(5,window._mQTY+v));window._mQTY=n;const el=document.getElementById('mqty');if(el)el.textContent=n;const s=document.getElementById('extra-photos-sect');if(s)s.style.display=n>1?'block':'none';renderEP();}
async function renderEP(pid){
  const g=document.getElementById('ep-grid');if(!g)return;let h='';
  for(let i=0;i<window._mQTY-1;i++){
    const k=window._mExtraPKs[i];let src=window._mExtraNPs[i]||null;
    if(k&&!src)src=await loadImg(k);
    h+=`<div class="ep-box">${src?`<img src="${src}" onclick="expandPhoto('${src}')"><button class="ep-del" onclick="delEP(${i})">×</button>`:`<label><input type="file" style="display:none" onchange="prevEP(this,${i})">📷</label>`}</div>`;
  }
  g.innerHTML=h;
}
function prevEP(inp,idx){const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=async e=>{const c=await compressImage(e.target.result);window._mExtraNPs[idx]=c;renderEP();};r.readAsDataURL(f);}
function delEP(idx){if(window._mExtraPKs[idx])window._mExtraPKs[idx]=null;delete window._mExtraNPs[idx];renderEP();}

function setMR(pid,v){window._mR=v;document.querySelectorAll('#mstars .strbtn').forEach((b,i)=>b.classList.toggle('active',i<v));}
function prevMP(inp){const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=async e=>{const compressed=await compressImage(e.target.result);window._mNP=compressed;const i=document.getElementById('mpprev');if(i){i.src=compressed;i.style.display='block';}};r.readAsDataURL(f);}
async function saveMD(pid,was){
  const n=document.getElementById('mnotes').value;
  let k=collData[pid]?.photoKey||null;
  if(window._mNP){k=imgKey(pid);await saveImg(k,window._mNP);}
  const eks=[];
  for(let i=0;i<window._mQTY-1;i++){
    let ek=window._mExtraPKs[i];
    if(window._mExtraNPs[i]){ek=imgKey(pid)+'_e'+i;await saveImg(ek,window._mExtraNPs[i]);}
    if(ek)eks.push(ek);
  }
  collData[pid]={rating:window._mR||0,notes:n,photoKey:k,qty:window._mQTY,extraPhotoKeys:eks,cStats:window._mStats||{}};
  if(!was)collection.push(pid);
  updateStats();closeM();await saveData();showT(was?'💾 Changes saved':'Added to Vault');
  if(currentView==='collection')renderColl();if(currentView==='browse')renderP();
}
async function remV(pid){
  collection=collection.filter(id=>id!=pid);
  if(collData[pid]?.photoKey)await delImg(collData[pid].photoKey);delete collData[pid];
  updateStats();closeM();await saveData();showT('Removed from Vault');
  if(currentView==='collection')renderColl();if(currentView==='browse')renderP();
}
function closeM(){document.getElementById('modal').classList.remove('open');}
function expandPhoto(src){if(!src)return;const exp=document.getElementById('photo-exp');document.getElementById('exp-img').src=src;exp.classList.add('open');}
function closeExp(){document.getElementById('photo-exp').classList.remove('open');}
document.getElementById('modal').addEventListener('click',function(e){if(e.target===this)closeM();});
document.getElementById('stat-modal').addEventListener('click',function(e){if(e.target===this)closeStatM();});

function initSwipe(id, fn) {
  const el = document.getElementById(id), md = el.querySelector('.md');
  let sY = 0, cY = 0, drg = false;
  el.addEventListener('touchstart', e => { if (e.target.closest('.mh') || md.scrollTop <= 0) { sY = e.touches[0].clientY; drg = true; md.style.transition = 'none'; } });
  el.addEventListener('touchmove', e => { if (!drg) return; cY = e.touches[0].clientY - sY; if (cY > 0) { md.style.transform = `translateY(${cY}px)`; e.preventDefault(); } else { drg=false; md.style.transform=''; md.style.transition=''; } }, {passive:false});
  el.addEventListener('touchend', () => { if (!drg) return; drg = false; md.style.transition = ''; md.style.transform = ''; if (cY > 120) fn(); cY = 0; });
}
initSwipe('modal', closeM);
initSwipe('stat-modal', closeStatM);

// ── CUSTOM ────────────────────────────────────────────────────
function setR(v){customRating=v;document.querySelectorAll('#custom-stars .strbtn').forEach((b,i)=>b.classList.toggle('active',i<v));}
function onCB(){
  const v=document.getElementById('cb').value;
  document.getElementById('cb-other').style.display=v==='Other'?'block':'none';
  if(v==='Other')setTimeout(()=>document.getElementById('cbo').focus(),50);
}
function onRB(){document.getElementById('rb-other').style.display=document.getElementById('rb').value==='Other'?'block':'none';}
function prevPhoto(inp){const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=async e=>{const compressed=await compressImage(e.target.result);customPhotoData=compressed;const i=document.getElementById('cprev');i.src=compressed;i.style.display='block';};r.readAsDataURL(f);}
async function saveCustom(){const brand=document.getElementById('cb').value,ob=document.getElementById('cbo').value.trim();const model=document.getElementById('cm').value.trim(),year=document.getElementById('cy').value;const notes=document.getElementById('cn').value.trim(),tagsRaw=document.getElementById('ct').value.trim();const fb=brand==='Other'?ob:brand;if(!fb){showT('⚠️ Select or enter a brand');return;}if(!model){showT('⚠️ Model name required');return;}if(brand==='Other'&&fb){const sel=document.getElementById('cb');if(![...sel.options].some(o=>o.value===fb)){const o=document.createElement('option');o.value=fb;o.textContent=fb;const oth=[...sel.options].find(x=>x.value==='Other');sel.insertBefore(o,oth);}}const tags=tagsRaw?tagsRaw.split(',').map(t=>t.trim()).filter(Boolean):['Missing/New'];
let ln=document.getElementById('cspecl').value,wd=document.getElementById('cspecw').value,st=document.getElementById('cspecst').value,sw=document.getElementById('cspecsw').value,tw=document.getElementById('cspectw').value;
customPaddles.push({brand:fb,model,year:parseInt(year)||2024,surface:'Custom',notes,rating:customRating,tags,len:ln,wid:wd,stWt:st,swWt:sw,twWt:tw});const pid='c'+(customPaddles.length-1);collection.push(pid);let k=null;if(customPhotoData){k=imgKey(pid);await saveImg(k,customPhotoData);}collData[pid]={rating:customRating,notes,photoKey:k};invalidateCache();updateStats();clearCustom();await saveData();showT('🎉 '+fb+' — '+model+' saved!');showView('collection');}
function clearCustom(){['cb','cm','cy','cn','cbo','ct','cspecl','cspecw','cspecst','cspecsw','cspectw'].forEach(id=>document.getElementById(id).value='');document.getElementById('cb-other').style.display='none';document.getElementById('cprev').style.display='none';document.getElementById('cpf').value='';customRating=0;customPhotoData=null;document.querySelectorAll('#custom-stars .strbtn').forEach(b=>b.classList.remove('active'));}

// ── REPORTS ───────────────────────────────────────────────────
async function submitReport(){
  const brand=document.getElementById('rb').value,ob=document.getElementById('rbo').value;
  const model=document.getElementById('rm').value.trim(),year=document.getElementById('ry').value;
  const details=document.getElementById('rd').value.trim();
  const fb=brand==='Other'?ob.trim():brand;
  if(!fb||!model){showT('⚠️ Brand and model required');return;}
  
  const report = {brand:fb,model,year,details,date:new Date().toLocaleDateString()};
  reports.push(report);
  
  const subject = encodeURIComponent(`Missing Paddle Report: ${fb} ${model}`);
  const body = encodeURIComponent(`I found a missing paddle for the Vault:\n\nBrand: ${fb}\nModel: ${model}\nYear: ${year}\nDetails: ${details}\n\nReported on: ${report.date}\nUser: ${currentUser ? currentUser.displayName || currentUser.email : 'Guest'}`);
  window.location.href = `mailto:brianmarcelo@gmail.com?subject=${subject}&body=${body}`;

  ['rb','rm','ry','rd','rbo'].forEach(id=>document.getElementById(id).value='');document.getElementById('rb-other').style.display='none';
  await saveData();showT('✓ Report submitted & Email drafted. Thank you!');renderRep();
}
function renderRep(){
  const l=document.getElementById('reports-list');
  if(!reports.length){l.innerHTML='';return;}
  l.innerHTML=`<div class="sectit" style="margin-top:8px;">YOUR REPORTS</div>`+reports.map(r=>`<div class="pc" style="cursor:default;"><div class="pb2">${r.brand}</div><div class="pn">${r.model}</div><div class="py">${r.year?r.year+' · ':''}Reported ${r.date}</div>${r.details?`<div class="pnote">${r.details}</div>`:''}</div>`).join('');
}

// ── TOAST ─────────────────────────────────────────────────────
let tTimer;
function showT(msg){const t=document.getElementById('toast');t.innerHTML=msg;t.classList.add('show');clearTimeout(tTimer);tTimer=setTimeout(()=>t.classList.remove('show'),2300);}
