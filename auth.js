// ══════════════════════════════════════════════════════════════
//  AUTH.JS  —  Email/Password + Google Login + Guest Mode
// ══════════════════════════════════════════════════════════════

let currentUser = null;
let isGuest = false;

// ── Tab switcher ──────────────────────────────────────────────
function switchAuthTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
  document.getElementById('form-login').style.display  = tab === 'login'  ? 'block' : 'none';
  document.getElementById('form-signup').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('login-error').textContent  = '';
  document.getElementById('signup-error').textContent = '';
}

// ── Google Sign In ────────────────────────────────────────────
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    // onAuthStateChanged handles the rest
  } catch(e) {
    document.getElementById('login-error').textContent = friendlyAuthError(e.code);
  }
}

// ── Email Sign In ─────────────────────────────────────────────
async function signIn() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-error');
  errEl.textContent = '';
  if (!email || !pass) { errEl.textContent = 'Please enter email and password.'; return; }
  try {
    await auth.signInWithEmailAndPassword(email, pass);
  } catch(e) {
    errEl.textContent = friendlyAuthError(e.code);
  }
}

// ── Email Sign Up ─────────────────────────────────────────────
async function signUp() {
  const name  = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass  = document.getElementById('signup-pass').value;
  const errEl = document.getElementById('signup-error');
  errEl.textContent = '';
  if (!name || !email || !pass) { errEl.textContent = 'All fields required.'; return; }
  if (pass.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; return; }
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({ displayName: name });
    currentUser = auth.currentUser;
    showApp(name);
    loadUserData();
  } catch(e) {
    errEl.textContent = friendlyAuthError(e.code);
  }
}

// ── Guest mode ────────────────────────────────────────────────
function signInGuest() {
  isGuest = true;
  currentUser = null;
  showApp('Guest');
}

// ── Sign Out ──────────────────────────────────────────────────
function signOut() {
  if (isGuest) {
    isGuest = false;
    currentUser = null;
    collection = []; collData = {}; reports = []; customPaddles = [];
    document.getElementById('main-app').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
    return;
  }
  auth.signOut();
}

// ── Firebase auth state listener ──────────────────────────────
auth.onAuthStateChanged(user => {
  if (user) {
    isGuest = false;
    currentUser = user;
    showApp(user.displayName || user.email.split('@')[0]);
    loadUserData();
  } else if (!isGuest) {
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('main-app').style.display = 'none';
  }
});

// ── Show/hide screens ──────────────────────────────────────────
function showApp(name) {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('main-app').style.display = 'block';
  document.getElementById('user-greeting').textContent = `Hi, ${name}`;
  init();
}

// ── Friendly error messages ────────────────────────────────────
function friendlyAuthError(code) {
  const map = {
    'auth/user-not-found':         'No account found with that email.',
    'auth/wrong-password':         'Incorrect password.',
    'auth/email-already-in-use':   'An account with that email already exists.',
    'auth/invalid-email':          'Please enter a valid email address.',
    'auth/too-many-requests':      'Too many attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Check your connection.',
    'auth/popup-closed-by-user':   'Sign-in popup was closed. Please try again.',
    'auth/cancelled-popup-request':'Sign-in cancelled.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}

// ── Enter key to submit ────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (document.getElementById('auth-screen').style.display === 'none') return;
  const loginVisible = document.getElementById('form-login').style.display !== 'none';
  if (loginVisible) signIn(); else signUp();
});
