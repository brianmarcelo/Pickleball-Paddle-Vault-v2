# 🏓 Paddle Vault — Pickleball Collection Tracker

**800+ paddles · 60 brands · 2016–2026 · Google Login · Local Image Cache · Cloud Sync**

---

## 📁 File Structure

```
paddlevault/
├── index.html                 # App shell + auth screen
├── style.css                  # All styles
├── firebase-config.js         # Your Firebase credentials (local only)
├── firebase-config.EXAMPLE.js # Safe template to commit
├── auth.js                    # Email + Google login
├── db.js                      # 800+ paddle database
├── app.js                     # App logic, cloud save, local image cache
├── deploy.sh                  # Mac/Linux deploy script
├── deploy.bat                 # Windows deploy script
├── .gitignore                 # Keeps firebase-config.js off GitHub
└── README.md
```

---

## 🔧 Step 1 — Firebase Setup (free)

### Create Project
1. Go to **https://console.firebase.google.com**
2. **Add project** → name it `paddle-vault` → Create
3. Click **`</>`** (Web) → register app → copy `firebaseConfig`
4. Paste it into **`firebase-config.js`** (replacing placeholder values)

### Enable Authentication
- Firebase Console → **Authentication** → **Get Started**
- **Email/Password** → Enable ✅
- **Google** → Enable ✅ → add your support email → Save

### Enable Firestore
- Firebase Console → **Firestore Database** → **Create database**
- Start in **test mode** → choose region → Enable

### Firestore Security Rules (set before going live)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Authorize your domain for Google Login
- Firebase Console → **Authentication** → **Settings** → **Authorized domains**
- Add: `brianmarcelo.github.io` (and `localhost` for local testing)

---

## 🚀 Step 2 — Deploy to GitHub Pages

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Windows:** Double-click `deploy.bat`

After pushing, enable Pages:
- `github.com/brianmarcelo/Pickleball-Paddle-Vault-Test-1/settings/pages`
- Source: **main** branch → `/root` → Save

**Live URL:** `https://brianmarcelo.github.io/Pickleball-Paddle-Vault-Test-1`

---

## 📱 Features

| Feature | Details |
|---------|---------|
| **Browse** | 800+ paddles, 60 brands, search + brand filters |
| **CRBN default** | App opens showing CRBN paddles first |
| **My Vault** | Personal collection, star ratings, notes, photos |
| **Photo storage** | Saved in browser/phone cache (IndexedDB) — works offline |
| **Google Login** | One-tap sign in with Gmail |
| **Email Login** | Traditional email/password |
| **Guest Mode** | No account needed, saves locally |
| **Cloud Sync** | Collection syncs across devices when logged in |
| **Custom Paddles** | Add any paddle not in the database |
| **Report Missing** | Flag paddles to be added |

---

## 📸 How Photo Storage Works

Photos are stored in **IndexedDB** — the browser's built-in local storage — not in Firestore or Firebase Storage (which would cost money). This means:

- ✅ Photos are saved on your phone/browser and persist between sessions
- ✅ Free — no storage costs
- ✅ Fast — no network needed to display photos
- ⚠️ Photos are device-specific — they don't sync to other devices
- ⚠️ If you clear your browser data, photos are lost (ratings/notes still sync via cloud)

---

## 🗃️ Database (800+ paddles, 60 brands)

Key brands covered:
- **CRBN** — All TruFoam Genesis, Waves, Barrage (4 shapes each), X Series, Classics
- **JOOLA** — Perseus, Scorpeus, Hyperion, Kosmos, 3S, Pro V, Vision, Radius, Solaire
- **Selkirk** — Full LABS lineup (002–008), Boomstik, Vanguard, AMPED, SLK
- **Proton** — Series 1–4, Flamingo (4 variants), Peacock (4 variants), ERA
- **11SIX24** — Power 2 (Vapor/Pegasus/Hurache-X HexGrit), Excalibur, Apex
- **FLiK** — F1, F2, F3 Triple Foam (3 shapes)
- **Honolulu** — J2NF (#1 2026), J6CR, J2FC+, J2K
- **Holbrook** — Fuze, Origin, Fuze Pro
- Plus: Gearbox, Engage, Paddletek, Six Zero, Diadem, Franklin, HEAD, Onix, Gamma, ProKennex, Vatic Pro, Bread & Butter, RPM, Thrive, Gruvn, GRIT, SENS, RAD, Spartus, Komodo, Avoura, Thompson, and more

---

## 🔄 Adding Paddles

Edit `db.js` and add to the `PADDLES` array:
```js
{ id: 999, brand: "Brand", model: "Model 14mm", year: 2025,
  surface: "Carbon Fiber", shape: "Standard",
  tags: ["Pro","Power","New"] }
```

Shapes: `Standard` · `Elongated` · `Widebody` · `Hybrid` · `Round`
