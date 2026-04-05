# 🏓 Pickleball Paddle Vault V3

The most comprehensive, open-source pickleball paddle archive on the internet. A single-file, mobile-first web application that catalogs **1,540+ verified paddle models** spanning **133 brands** and **21 years of pickleball history** (2005–2026).

---

## ✨ Features

### 📦 Massive Verified Database
- **1,540+ paddles** from 133 unique manufacturers — from wood-era pioneers to Gen 4 thermoformed carbon
- Covers every major brand: **JOOLA, Selkirk, CRBN, Gearbox, Paddletek, Six Zero, Vatic Pro, Ronbus, Franklin, Engage, HEAD, Babolat, Wilson**, and 120+ more
- Includes budget/retail house brands: **Monarch** (Dick's), **PBPRO** (Bass Pro), **SLK by Selkirk** (Costco), **EastPoint** (Walmart), **Recess** (Target), **Spalding**, and Amazon favorites
- Historical legacy paddles from **Pickle-Ball Inc**, **Pro-Lite**, **Manta**, **Topp**, and more dating back to 2005

### 🔍 Smart Search & Filtering
- Real-time search by paddle name, brand, tags, and surface material
- Filter by brand with an alphabetical brand picker
- Sort by newest, oldest, or alphabetical order
- Instant results with zero latency (everything runs client-side)

### ⭐ Personal Vault (Collection)
- Save paddles to your personal "My Vault" collection
- Add custom notes and personal ratings to any paddle
- Persistent storage via `localStorage` (works offline)
- Optional Firebase/Firestore sync for cross-device access

### ➕ Add Missing/New Paddles
- Manually input paddles that are missing from the database
- Full specification entry: length, width, grip dimensions, static/swing/twist weight
- Designed for **professional testers** and enthusiasts who need to track unreleased or prototype models

### 📊 Technical Specifications
- **Dimensions:** Length, Width, Grip Length, Grip Circumference
- **Weight Metrics:** Static Weight, Swing Weight, Twist Weight
- All spec fields are **click-to-edit** in the detail modal — testers can input their own measured values
- Edited specs persist per-paddle in your local collection

### 📱 Mobile-First & Offline
- Fully responsive design optimized for phones (PWA-ready)
- Works completely offline — save the HTML file or create a home screen shortcut
- No build tools, no dependencies, no server required
- Single `index.html` file for maximum portability

---

## 🚀 Getting Started

### Option 1: Just Open It
```
Open index.html in any modern browser. That's it.
```

### Option 2: Mobile Home Screen Shortcut
1. Open `index.html` in Safari (iOS) or Chrome (Android)
2. Tap **Share → Add to Home Screen**
3. The app will function like a native app with offline support

### Option 3: Host It
Upload `index.html` to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

---

## 📐 Database Schema

Each paddle entry in the `PADDLES` array follows this structure:

```javascript
{
  id: 1,                          // Unique identifier
  brand: "CRBN",                  // Manufacturer name
  model: "CRBN 1X Power Series",  // Official model name
  year: 2023,                     // Release year
  surface: "T700 Carbon",         // Face material
  shape: "Elongated",             // Paddle shape
  tags: ["Gen 2", "Power"],       // Searchable tags
  // Optional technical specs:
  len: 16.5,                      // Paddle length (inches)
  wid: 7.5,                       // Paddle width (inches)
  hLen: 5.5,                      // Handle/grip length (inches)
  hCirc: 4.25,                    // Handle circumference (inches)
  stWt: 8.0,                      // Static weight (oz)
  swWt: 124,                      // Swing weight
  twWt: 6.18,                     // Twist weight
  source: "https://..."           // Citation URL (if applicable)
}
```

---

## 📊 Database Coverage

| Era | Years | Paddles | Description |
|---|---|---|---|
| 🪵 Wood Era | 2005–2009 | ~2 | Pickle-Ball Inc Diller, Pro-Lite Magnum |
| 🏗️ Composite Era | 2010–2015 | ~60 | Graphite/fiberglass revolution |
| ⚡ Carbon Fiber Era | 2016–2021 | ~210 | Raw carbon fiber emergence |
| 🔥 Thermoforming Era | 2022–2023 | ~370 | Carbon Gen 2/3 explosion |
| 🚀 Modern Era | 2024–2026 | ~900 | Gen 3/4 foam-injected, TruFoam, void cores |

### Top 10 Brands by Coverage

| Brand | Paddles |
|---|---|
| Selkirk | 130 |
| JOOLA | 100 |
| Engage | 58 |
| Gearbox | 54 |
| Paddletek | 53 |
| Franklin | 47 |
| Six Zero | 41 |
| Proton | 41 |
| PROLITE | 37 |
| Vatic Pro | 35 |

---

## 🔬 For Paddle Testers

This app was designed with professional paddle testers in mind:

- **Click any spec value** in the paddle detail modal to edit it with your own measurements
- **Swing Weight** and **Twist Weight** fields are included natively — metrics that most manufacturer websites don't publish
- Your edited values are saved locally and won't be overwritten by database updates
- Use the **"Add New"** tab to log unreleased paddles, prototypes, or custom builds

---

## 🛠️ Tech Stack

- **Pure HTML/CSS/JavaScript** — no frameworks, no build step
- **Firebase** (optional) — for authentication and Firestore cloud sync
- **localStorage** — for offline-first data persistence
- **Single file architecture** — the entire app is one `index.html` for easy distribution

---

## 📋 Data Sources & Accuracy

All paddle data has been verified against primary sources including:

- Official manufacturer websites (crbnpickleball.com, selkirk.com, joolausa.com, etc.)
- USA Pickleball Approved Equipment List (usapickleball.org)
- UPA Approved Paddle List
- Independent testing labs: Pickleball Effect, John Kew, Matt's Pickleball
- Major retailers: Pickleball Central, JustPaddles, Amazon, Dick's, Bass Pro, Target, Walmart, Costco

**Accuracy Policy:** All entries must be traceable to a real product. Hallucinated or unverifiable models are immediately removed. Swing/twist weight values without lab data are displayed as "N/A" rather than estimated.

---

## 🤝 Contributing

Found a missing paddle or incorrect data? You have two options:

1. **In-App:** Use the built-in **🚩 Report** tab to flag issues
2. **GitHub:** Open an issue or submit a PR with the corrected paddle data

---

## 📄 License

MIT License — Free to use, modify, and distribute.

---

## 👤 Author

**Brian Marcelo**  
📧 brianmarcelo@gmail.com

---

*Archiving every pickleball paddle from 2005 to the present.*
