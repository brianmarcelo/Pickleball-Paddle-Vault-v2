# 🏓 Paddle Vault V3 — Ultimate Pickleball Collection Tracker

**1,750+ paddles · 123 verified real brands · 2010–2026 · Google Login · Mobile-First UI · Monolithic Architecture**

---

## ✨ Version 3.0 — The "Monolith" Update

Paddle Vault V3 has been completely re-engineered as a **high-performance, single-file application**. All CSS, JavaScript, and data are now contained within a single `index.html` file for zero-latency loading and seamless deployment to GitHub Pages.

### 📱 New Mobile-First Features
*   **Swipe-to-Dismiss**: Premium vertical swipe-to-dismiss gestures for all modals (iPhone style) with spring-physics and haptic-ready interactions.
*   **Duplicate Management**: Track multiple units of the same paddle. Added a "Quantity" selector that updates your vault stats automatically.
*   **Multi-Photo Support**: Dynamically unlocking additional photo slots when you own more than 1 unit of a paddle.
*   **Glassmorphism UI**: A beautiful, premium dark-mode aesthetic with blurred backgrounds, vibrant gradients, and micro-animations.
*   **Full-Screen Expand**: Full-screen photo viewer with pinch-to-zoom and cross-device scaling.

---

## 📁 File Structure

```
Pickleball-Paddle-Vault-V3/
├── index.html                 # The entire application (HTML, CSS, JS, Data)
├── .gitignore                 # Standard git exclusions
└── README.md                  # This file
```

---

## 🔧 Firebase Setup (Mandatory for Cloud Sync)

To enable Google Login and your data to sync across devices, you must link your own Firebase project:

### 1. Create Project
1. Go to [Firebase Console](https://console.firebase.google.com).
2. Create a new project (e.g., `paddle-vault-v3`).
3. Click **`</>`** (Web) to register an app.
4. **Copy the `firebaseConfig` object** and paste it into the `firebaseConfig` variable inside `index.html` (around line 2300).

### 2. Enable Authentication
1. Go to **Authentication** → **Sign-in method**.
2. Enable **Email/Password**.
3. Enable **Google** (add your support email).
4. **Authorized Domains**: Ensure `brianmarcelo.github.io` and `localhost` are added.

### 3. Enable Firestore
1. Go to **Firestore Database** → **Create database**.
2. Start in **test mode** or set rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## 🗃️ The Database (1,750+ Entries)

The database is cross-referenced with official manufacturer logs and the USAP Approved list. It spans **16 years of sport history**:

*   **Pioneer Era (2010–2017)**: Iconic models like the **Pickleball Inc. Champion**, **Pro-Lite Magnum**, and the first-ever **Selkirk 20P-XL**.
*   **Evolution (2018–2022)**: The rise of raw carbon and thermoforming. **CRBN 1X**, **Selkirk Vanguard**, **Legacy Pro**, and the **Franklin Ben Johns Signature**.
*   **Modern Era (2023–2026)**: Gen 3 and Gen 4 tech. **Joola Perseus/Mod-TA**, **Six Zero Ruby/Coral**, **11SIX24 Hurache-X**, and **Friday Aura (Gen 4 Foam Core)**.

### Verified Brands Include:
Selkirk, JOOLA, CRBN, Gearbox, Engage, Franklin, Onix, Paddletek, Luzz, Six Zero, Vatic Pro, Ronbus, Volair, Bread & Butter, Ace, ElevenZero, Chorus, ProKennex, Babolat, Head, Wilson, Prince, Vulcan, Gamma, and **100+ more**.

---

## 📸 Photo Storage & Privacy

Photos are stored locally in your browser's **IndexedDB** — not in the cloud.
*   ✅ **Device-Only**: Your photos stay on your device and won't sync to other devices (privacy-first).
*   ✅ **Persistence**: Photos remain even if you refresh or update the app.
*   ⚠️ **Caution**: Clearing your browser cache/data will remove local photos. Ratings, notes, and collection data will still sync via the cloud.

---

## 🚀 Deployment

The app is built for **GitHub Pages**. Just push your `index.html` to a public repository and enable Pages in the settings:
1. `github.com/your-username/your-repo/settings/pages`
2. Source: **main** branch → `/root`
3. Hit Save.

---

### Created by **Brian Marcelo**
[brianmarcelo@gmail.com](mailto:brianmarcelo@gmail.com)
*Aiming to archive every flagship pickleball paddle from 2010 to the present.*
