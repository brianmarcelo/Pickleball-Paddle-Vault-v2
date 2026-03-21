// ══════════════════════════════════════════════════════
//  FIREBASE CONFIG TEMPLATE
//
//  1. Copy this file and rename it to: firebase-config.js
//  2. Fill in your real values from the Firebase Console
//  3. firebase-config.js is in .gitignore — it will NOT
//     be committed or pushed to GitHub
// ══════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();
