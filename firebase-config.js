// ── FIREBASE CONFIG ───────────────────────────────────────────
// Restricted to Paddle Vault production domains in Google Cloud Console
const firebaseConfig = {
  apiKey: "AIzaSyDt5HokiZrAOR1_u9rHtlS9yoMdkuzwI4A",
  authDomain: "paddle-vault-v2.firebaseapp.com",
  projectId: "paddle-vault-v2",
  storageBucket: "paddle-vault-v2.firebasestorage.app",
  messagingSenderId: "164950492923",
  appId: "1:164950492923:web:a81aac5339fc80fe2a125e"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
