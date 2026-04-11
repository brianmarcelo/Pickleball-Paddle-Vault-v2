/**
 * Pickleball Paddle Database (db.js) - Unified Data
 */

const PADDLES = [
  { id: 1, brand: "1050 Pickleball", model: "Alat", year: 2024, surface: "T700 Carbon Fiber", shape: "Hybrid", tags: ["Raw Carbon Fiber", "High Control"] },
  { id: 2, brand: "1050 Pickleball", model: "Anat", year: 2024, surface: "T700 Carbon Fiber", shape: "Hybrid", tags: ["Raw Carbon Fiber", "Power"] },
  { id: 3, brand: "2.0 Pickleball", model: "2.0 Pickleball Paddle", year: 2020, surface: "Graphite", shape: "Standard", tags: ["Classic", "Beginner"] },
  { id: 4, brand: "737 Pickleball", model: "A-10", year: 2022, surface: "Fiberglass", shape: "Standard", tags: ["Entry Level"] },
  { id: 5, brand: "737 Pickleball", model: "F-14 Phantom", year: 2022, surface: "Carbon Fiber", shape: "Elongated", tags: ["Power"] },
  { id: 6, brand: "808 Pickleball", model: "808 Pickleball Paddle", year: 2021, surface: "Composite", shape: "Standard", tags: ["Local Brand"] },
  { id: 7, brand: "A1 Pickleball", model: "The A1", year: 2021, surface: "Graphite", shape: "Standard", tags: ["Control"] },
  { id: 8, brand: "A1 Pickleball", model: "The A1 Elite", year: 2022, surface: "Carbon Fiber", shape: "Elongated", tags: ["Professional"] },
  { id: 9, brand: "AARP", model: "AARP", year: 2018, surface: "Composite", shape: "Standard", tags: ["Promo"] },
  { id: 10, brand: "Ace Pickleball", model: "Ace Club", year: 2023, surface: "Carbon Fiber", shape: "Standard", tags: ["Club Series"] },
  // ... (truncating for brevity, I will use the actual 24k line db.js)
  { id: 2070, brand: "Zce Pickleball", model: "Zce Paddle", year: 2024, surface: "Carbon Fiber", shape: "Standard", tags: ["New Release"] }
];

const BRANDS = [...new Set(PADDLES.map(p => p.brand))].sort();
