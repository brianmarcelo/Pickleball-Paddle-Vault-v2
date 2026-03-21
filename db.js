// ══════════════════════════════════════════════════════════════════════════
//  PADDLE VAULT DATABASE  v5  —  2016–2026  —  800+ paddles  —  55+ brands
// ══════════════════════════════════════════════════════════════════════════

const PADDLES = [

// ─── CRBN — COMPLETE LINEUP (shown first / default brand) ──────────────────
// Original / Classic (2021)
{id:1,  brand:"CRBN", model:"CRBN¹ Classic Elongated Long Handle",    year:2021, surface:"T700 Carbon",  shape:"Elongated",  tags:["Classic","Spin","Long Handle"]},
{id:2,  brand:"CRBN", model:"CRBN² Classic Square",                   year:2021, surface:"T700 Carbon",  shape:"Widebody",   tags:["Classic","Spin","Widebody"]},
{id:3,  brand:"CRBN", model:"CRBN³ Classic Elongated Short Handle",   year:2021, surface:"T700 Carbon",  shape:"Elongated",  tags:["Classic","Control","Short Handle"]},
// X Series / Gen-3 Thermoformed (2023)
{id:4,  brand:"CRBN", model:"CRBN¹ X Series Elongated Long Handle",   year:2023, surface:"T700 Carbon",  shape:"Elongated",  tags:["Power","Thermoformed","Long Handle"]},
{id:5,  brand:"CRBN", model:"CRBN² X Series Square",                  year:2023, surface:"T700 Carbon",  shape:"Widebody",   tags:["Power","Thermoformed","Widebody"]},
{id:6,  brand:"CRBN", model:"CRBN³ X Series Elongated Short Handle",  year:2023, surface:"T700 Carbon",  shape:"Elongated",  tags:["Control","Thermoformed","Short Handle"]},
{id:7,  brand:"CRBN", model:"Thomas Wilson Signature X Series",       year:2024, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","Signature","Thermoformed"]},
// TruFoam GENESIS Gen-4 (2024)
{id:8,  brand:"CRBN", model:"CRBN¹ TruFoam Genesis Elongated LH",    year:2024, surface:"T700 Carbon",  shape:"Elongated",  tags:["Foam Core","Gen-4","Floating Core"]},
{id:9,  brand:"CRBN", model:"CRBN² TruFoam Genesis Square",           year:2024, surface:"T700 Carbon",  shape:"Widebody",   tags:["Foam Core","Gen-4","Floating Core","Widebody"]},
{id:10, brand:"CRBN", model:"CRBN³ TruFoam Genesis Elongated SH",    year:2024, surface:"T700 Carbon",  shape:"Elongated",  tags:["Foam Core","Gen-4","Floating Core","Popular"]},
{id:11, brand:"CRBN", model:"CRBN⁴ TruFoam Genesis Hybrid AeroCurve",year:2024, surface:"T700 Carbon",  shape:"Hybrid",     tags:["Foam Core","Gen-4","Hybrid Shape"]},
// TruFoam WAVES Gen-4 (2025)
{id:12, brand:"CRBN", model:"CRBN¹ TruFoam Waves Elongated LH",      year:2025, surface:"T700 Carbon",  shape:"Elongated",  tags:["Foam Core","Gen-4","Wave Core","Power","New"]},
{id:13, brand:"CRBN", model:"CRBN² TruFoam Waves Square",             year:2025, surface:"T700 Carbon",  shape:"Widebody",   tags:["Foam Core","Gen-4","Wave Core","Power","New"]},
{id:14, brand:"CRBN", model:"CRBN³ TruFoam Waves Elongated SH",      year:2025, surface:"T700 Carbon",  shape:"Elongated",  tags:["Foam Core","Gen-4","Wave Core","Top Rated","#1 Spin","New"]},
{id:15, brand:"CRBN", model:"CRBN⁴ TruFoam Waves Hybrid AeroCurve",  year:2025, surface:"T700 Carbon",  shape:"Hybrid",     tags:["Foam Core","Gen-4","Wave Core","Hybrid Shape","New"]},
// TruFoam BARRAGE Gen-4 (2025) — Void Core / pop
{id:16, brand:"CRBN", model:"CRBN¹ TruFoam Barrage Elongated LH",    year:2025, surface:"T700 Carbon",  shape:"Elongated",  tags:["Foam Core","Gen-4","Void Core","Power","Pop","New"]},
{id:17, brand:"CRBN", model:"CRBN² TruFoam Barrage Square",           year:2025, surface:"T700 Carbon",  shape:"Widebody",   tags:["Foam Core","Gen-4","Void Core","Power","Pop","New"]},
{id:18, brand:"CRBN", model:"CRBN³ TruFoam Barrage Elongated SH",    year:2025, surface:"T700 Carbon",  shape:"Elongated",  tags:["Foam Core","Gen-4","Void Core","Power","Pop","New"]},
{id:19, brand:"CRBN", model:"CRBN⁴ TruFoam Barrage Hybrid AeroCurve",year:2025, surface:"T700 Carbon",  shape:"Hybrid",     tags:["Foam Core","Gen-4","Void Core","Power","Pop","New"]},

// ─── JOOLA ─────────────────────────────────────────────────────────────────
{id:30, brand:"JOOLA", model:"Ben Johns Hyperion CFS 14mm",           year:2022, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","Control","Signature"]},
{id:31, brand:"JOOLA", model:"Ben Johns Hyperion CFS 16mm",           year:2022, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","Power","Signature"]},
{id:32, brand:"JOOLA", model:"Ben Johns Hyperion CGS 14mm",           year:2022, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","Spin"]},
{id:33, brand:"JOOLA", model:"Ben Johns Perseus 14mm",                year:2023, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","Control","Signature"]},
{id:34, brand:"JOOLA", model:"Ben Johns Perseus 16mm",                year:2023, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","All-Court"]},
{id:35, brand:"JOOLA", model:"Ben Johns Perseus Pro IV 14mm",         year:2024, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","Top Rated","Signature"]},
{id:36, brand:"JOOLA", model:"Ben Johns Perseus Pro IV 16mm",         year:2024, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","Top Rated","Best Overall"]},
{id:37, brand:"JOOLA", model:"Collin Johns Scorpeus CFS 14mm",        year:2023, surface:"T700 Carbon",  shape:"Widebody",   tags:["Pro","Signature","Spin"]},
{id:38, brand:"JOOLA", model:"Collin Johns Scorpeus CFS 16mm",        year:2023, surface:"T700 Carbon",  shape:"Widebody",   tags:["Pro","Signature"]},
{id:39, brand:"JOOLA", model:"Anna Bright Scorpeus 14mm",             year:2024, surface:"T700 Carbon",  shape:"Widebody",   tags:["Pro","Signature","Spin"]},
{id:40, brand:"JOOLA", model:"Tyson McGuffin Scorpeus 14mm",          year:2024, surface:"T700 Carbon",  shape:"Widebody",   tags:["Pro","Signature","Power"]},
{id:41, brand:"JOOLA", model:"Scorpeus CGS 14mm",                     year:2024, surface:"T700 Carbon",  shape:"Widebody",   tags:["Spin","Thermoformed"]},
{id:42, brand:"JOOLA", model:"Simone Jardim Hyperion 14mm",           year:2023, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","Signature"]},
{id:43, brand:"JOOLA", model:"Timo Loll Hyperion 14mm",               year:2024, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","Signature"]},
{id:44, brand:"JOOLA", model:"Kosmos 14mm",                           year:2025, surface:"T700 Carbon",  shape:"Hybrid",     tags:["Hybrid Shape","New"]},
{id:45, brand:"JOOLA", model:"Kosmos 16mm",                           year:2025, surface:"T700 Carbon",  shape:"Hybrid",     tags:["Hybrid Shape","Control","New"]},
{id:46, brand:"JOOLA", model:"Tyson McGuffin Kosmos 14mm",            year:2025, surface:"T700 Carbon",  shape:"Hybrid",     tags:["Pro","Signature","Hybrid Shape","New"]},
{id:47, brand:"JOOLA", model:"Pro V Standard 14mm",                   year:2025, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","KineticFrame","Foam","New"]},
{id:48, brand:"JOOLA", model:"Pro V Elongated 14mm",                  year:2025, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","KineticFrame","Foam","New"]},
{id:49, brand:"JOOLA", model:"Perseus 3S 14mm",                       year:2025, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","UPA-A","New"]},
{id:50, brand:"JOOLA", model:"Perseus 3S 16mm",                       year:2025, surface:"T700 Carbon",  shape:"Elongated",  tags:["Pro","UPA-A","New"]},
{id:51, brand:"JOOLA", model:"Scorpeus 3S 14mm",                      year:2025, surface:"T700 Carbon",  shape:"Widebody",   tags:["Pro","UPA-A","New"]},
{id:52, brand:"JOOLA", model:"Agassi 3S 14mm",                        year:2025, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","UPA-A","Signature","New"]},
{id:53, brand:"JOOLA", model:"Andre Agassi Pro IV 16mm",              year:2026, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","Signature","Foam","New 2026","Top Rated"]},
{id:54, brand:"JOOLA", model:"Ben Johns Hyperion CAS 14mm",           year:2024, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","Signature","Thermoformed"]},
{id:55, brand:"JOOLA", model:"Vision II CGS 14mm",                    year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range"]},
{id:56, brand:"JOOLA", model:"Vision II CGS 16mm",                    year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range"]},
// JOOLA Vision Heat line (2025) — intermediate series
{id:57, brand:"JOOLA", model:"Heat Vision Perseus 14mm",              year:2025, surface:"Carbon Fiber", shape:"Elongated",  tags:["Mid-range","New"]},
{id:58, brand:"JOOLA", model:"Heat Vision Perseus 16mm",              year:2025, surface:"Carbon Fiber", shape:"Elongated",  tags:["Mid-range","New"]},
{id:59, brand:"JOOLA", model:"Heat Vision Scorpeus 14mm",             year:2025, surface:"Carbon Fiber", shape:"Widebody",   tags:["Mid-range","New"]},
{id:60, brand:"JOOLA", model:"Heat Vision Agassi 14mm",               year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range","New"]},
// JOOLA Double Vision (entry level 2025)
{id:61, brand:"JOOLA", model:"Double Vision Perseus",                 year:2025, surface:"Fiberglass",   shape:"Elongated",  tags:["Beginner","Value","New"]},
{id:62, brand:"JOOLA", model:"Double Vision Scorpeus",                year:2025, surface:"Fiberglass",   shape:"Widebody",   tags:["Beginner","Value","New"]},
{id:63, brand:"JOOLA", model:"Essentials",                            year:2022, surface:"Fiberglass",   shape:"Standard",   tags:["Beginner","Value"]},
{id:64, brand:"JOOLA", model:"Ben Johns Magnus 14mm",                 year:2025, surface:"T700 Carbon",  shape:"Standard",   tags:["Pro","High Grit","New"]},
// JOOLA Radius (table-tennis-inspired shape)
{id:65, brand:"JOOLA", model:"Radius CFS 14mm",                       year:2023, surface:"T700 Carbon",  shape:"Round",      tags:["TT Shape","Spin","Unique"]},
{id:66, brand:"JOOLA", model:"Radius CGS 14mm",                       year:2023, surface:"T700 Carbon",  shape:"Round",      tags:["TT Shape","Control","Unique"]},
// JOOLA Solaire (widebody)
{id:67, brand:"JOOLA", model:"Solaire CFS 14mm",                      year:2023, surface:"T700 Carbon",  shape:"Widebody",   tags:["Widebody","Power"]},
{id:68, brand:"JOOLA", model:"Solaire CGS 14mm",                      year:2023, surface:"T700 Carbon",  shape:"Widebody",   tags:["Widebody","Spin"]},

// ─── SELKIRK MAIN LINE ──────────────────────────────────────────────────────
{id:80, brand:"Selkirk", model:"Neo FiberFlex Standard",              year:2016, surface:"FiberFlex",    shape:"Standard",   tags:["Classic","Beginner"]},
{id:81, brand:"Selkirk", model:"Latitude FiberFlex Elongated",        year:2016, surface:"FiberFlex",    shape:"Elongated",  tags:["Classic","Elongated"]},
{id:82, brand:"Selkirk", model:"Prime Epic X5 FiberFlex",             year:2016, surface:"FiberFlex",    shape:"Standard",   tags:["Classic"]},
{id:83, brand:"Selkirk", model:"Attain Series Standard",              year:2016, surface:"FiberFlex",    shape:"Standard",   tags:["Classic","Beginner"]},
{id:84, brand:"Selkirk", model:"AMPED Epic S2 FiberFlex",             year:2017, surface:"FiberFlex",    shape:"Standard",   tags:["Classic","First 14mm"]},
{id:85, brand:"Selkirk", model:"AMPED S2 FiberFlex",                  year:2018, surface:"FiberFlex",    shape:"Standard",   tags:["Classic"]},
{id:86, brand:"Selkirk", model:"AMPED Invikta FiberFlex",             year:2018, surface:"FiberFlex",    shape:"Elongated",  tags:["Classic","Elongated"]},
{id:87, brand:"Selkirk", model:"AMPED Maxima FiberFlex",              year:2018, surface:"FiberFlex",    shape:"Widebody",   tags:["Classic","Widebody"]},
{id:88, brand:"Selkirk", model:"AMPED Omni FiberFlex",                year:2018, surface:"FiberFlex",    shape:"Standard",   tags:["Classic","Large Sweet Spot"]},
{id:89, brand:"Selkirk", model:"AMPED 30P Epic",                      year:2019, surface:"FiberFlex",    shape:"Standard",   tags:["Classic"]},
{id:90, brand:"Selkirk", model:"AMPED 30P Invikta",                   year:2019, surface:"FiberFlex",    shape:"Elongated",  tags:["Classic","Elongated"]},
{id:91, brand:"Selkirk", model:"AMPED Control Epic",                  year:2023, surface:"InfiniGrit",   shape:"Standard",   tags:["Control","Spin"]},
{id:92, brand:"Selkirk", model:"AMPED Control Invikta",               year:2023, surface:"InfiniGrit",   shape:"Elongated",  tags:["Control","Elongated"]},
{id:93, brand:"Selkirk", model:"LUXX Control Air Epic 16mm",          year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Control"]},
{id:94, brand:"Selkirk", model:"LUXX Control Air Invikta 16mm",       year:2022, surface:"Carbon Fiber", shape:"Elongated",  tags:["Pro","Spin"]},
{id:95, brand:"Selkirk", model:"LUXX Power Air Invikta 14mm",         year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Pro","Power","Spin"]},
{id:96, brand:"Selkirk", model:"Vanguard Power Air Epic 14mm",        year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Power"]},
{id:97, brand:"Selkirk", model:"Vanguard Power Air Invikta 14mm",     year:2022, surface:"Carbon Fiber", shape:"Elongated",  tags:["Pro","Power","Spin"]},
{id:98, brand:"Selkirk", model:"Vanguard Control Invikta 16mm",       year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Control","USA Made"]},
{id:99, brand:"Selkirk", model:"Vanguard Hybrid Invikta 16mm",        year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Hybrid"]},
{id:100,brand:"Selkirk", model:"Vanguard Pro Invikta 14mm",           year:2025, surface:"Raw Carbon",   shape:"Elongated",  tags:["Pro","New"]},
{id:101,brand:"Selkirk", model:"Vanguard 2.0 Invikta 16mm",           year:2021, surface:"FiberFlex",    shape:"Elongated",  tags:["Mid-range","Elongated"]},
{id:102,brand:"Selkirk", model:"Vanguard 2.0 Maxima 16mm",            year:2021, surface:"FiberFlex",    shape:"Widebody",   tags:["Mid-range","Widebody"]},
// SELKIRK LABS
{id:103,brand:"Selkirk", model:"LABS Project 002",                    year:2022, surface:"InfiniGrit",   shape:"Standard",   tags:["LABS","Collector","Edgeless"]},
{id:104,brand:"Selkirk", model:"LABS Project 003",                    year:2022, surface:"InfiniGrit",   shape:"Elongated",  tags:["LABS","Collector","Elongated"]},
{id:105,brand:"Selkirk", model:"LABS Project 005",                    year:2023, surface:"InfiniGrit",   shape:"Standard",   tags:["LABS","Carbon Fiber"]},
{id:106,brand:"Selkirk", model:"LABS Project 006 Tour Epic",          year:2023, surface:"InfiniGrit",   shape:"Standard",   tags:["Pro","USA Made","LABS"]},
{id:107,brand:"Selkirk", model:"LABS Project 006 Invikta",            year:2023, surface:"InfiniGrit",   shape:"Elongated",  tags:["Pro","USA Made","LABS","Edgeless"]},
{id:108,brand:"Selkirk", model:"LABS Project 007 10mm",               year:2024, surface:"InfiniGrit",   shape:"Elongated",  tags:["Pro","LABS","Titanium Mesh","Power"]},
{id:109,brand:"Selkirk", model:"LABS Project 007 14mm",               year:2024, surface:"InfiniGrit",   shape:"Elongated",  tags:["Pro","LABS","Titanium Mesh","Control"]},
{id:110,brand:"Selkirk", model:"LABS Project 008 10mm",               year:2025, surface:"InfiniGrit",   shape:"Elongated",  tags:["Pro","LABS","PureFoam Core","Power","New"]},
{id:111,brand:"Selkirk", model:"LABS Project 008 13mm",               year:2025, surface:"InfiniGrit",   shape:"Elongated",  tags:["Pro","LABS","PureFoam Core","Hybrid","New"]},
{id:112,brand:"Selkirk", model:"LABS Project 008 16mm",               year:2025, surface:"InfiniGrit",   shape:"Elongated",  tags:["Pro","LABS","PureFoam Core","Control","New"]},
{id:113,brand:"Selkirk", model:"LABS Boomstik Elongated",             year:2025, surface:"BoomCore CF",  shape:"Elongated",  tags:["Pro","LABS","Foam","Power","Top Rated","New"]},
{id:114,brand:"Selkirk", model:"LABS Boomstik Widebody",              year:2025, surface:"BoomCore CF",  shape:"Widebody",   tags:["Pro","LABS","Foam","Power","New"]},
// SELKIRK SLK
{id:115,brand:"Selkirk", model:"SLK Halo Power XL",                   year:2023, surface:"Raw Carbon",   shape:"Elongated",  tags:["Spin","Value"]},
{id:116,brand:"Selkirk", model:"SLK Halo Control Max",                year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Value"]},
{id:117,brand:"Selkirk", model:"SLK Halo Power Max",                  year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Value"]},
{id:118,brand:"Selkirk", model:"SLK Halo Control XL",                 year:2023, surface:"Raw Carbon",   shape:"Elongated",  tags:["Control","Value","Elongated"]},
{id:119,brand:"Selkirk", model:"SLK Parris Todd Halo Control XL",     year:2025, surface:"Raw Carbon",   shape:"Elongated",  tags:["Signature","Value","New"]},
{id:120,brand:"Selkirk", model:"SLK EVO Power 2.0",                   year:2022, surface:"Fiberglass",   shape:"Standard",   tags:["Mid-range"]},
{id:121,brand:"Selkirk", model:"SLK EVO Control 2.0",                 year:2022, surface:"Fiberglass",   shape:"Standard",   tags:["Mid-range","Control"]},
{id:122,brand:"Selkirk", model:"SLK Omega Max",                       year:2021, surface:"Fiberglass",   shape:"Standard",   tags:["Mid-range"]},
{id:123,brand:"Selkirk", model:"SLK Neo 2.0",                         year:2024, surface:"Fiberglass",   shape:"Standard",   tags:["Beginner","Value"]},
{id:124,brand:"Selkirk", model:"SLK Geo Standard 14mm",               year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Hybrid Shape","New"]},
{id:125,brand:"Selkirk", model:"SLK Geo Elongated 14mm",              year:2025, surface:"Raw Carbon",   shape:"Elongated",  tags:["Hybrid Shape","New"]},
{id:126,brand:"Selkirk", model:"SLK Dauntless 14mm",                  year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","New"]},
{id:127,brand:"Selkirk", model:"SLK Valkyrie 14mm",                   year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","New"]},
{id:128,brand:"Selkirk", model:"SLK Illusion 14mm",                   year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Mid-range"]},
{id:129,brand:"Selkirk", model:"SLK ERA Carbon 14mm",                 year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Mid-range","Value"]},
{id:130,brand:"Selkirk", model:"SLK Latitude Elongated",              year:2021, surface:"Fiberglass",   shape:"Elongated",  tags:["Mid-range","Elongated"]},
{id:131,brand:"Selkirk", model:"SLK Titan Pro",                       year:2020, surface:"Fiberglass",   shape:"Standard",   tags:["Mid-range"]},
{id:132,brand:"Selkirk", model:"Sport Invikta FiberFlex",             year:2019, surface:"FiberFlex",    shape:"Elongated",  tags:["Classic","Elongated"]},
{id:133,brand:"Selkirk", model:"Sport 30P Epic FiberFlex",            year:2020, surface:"FiberFlex",    shape:"Standard",   tags:["Mid-range"]},

// ─── ENGAGE ──────────────────────────────────────────────────────────────────
{id:140,brand:"Engage", model:"Encore 14",                            year:2016, surface:"Textured",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:141,brand:"Engage", model:"Conquest",                             year:2017, surface:"Textured",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:142,brand:"Engage", model:"Elite Pro",                            year:2018, surface:"Textured",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:143,brand:"Engage", model:"Poach Advantage",                      year:2019, surface:"Textured",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:144,brand:"Engage", model:"Encore Pro Standard",                  year:2019, surface:"Textured",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:145,brand:"Engage", model:"Encore Pro Elongated",                 year:2019, surface:"Textured",     shape:"Elongated",  tags:["Classic","USA Made","Elongated"]},
{id:146,brand:"Engage", model:"Encore MX 6.0",                        year:2020, surface:"Textured",     shape:"Standard",   tags:["USA Made","Mid-range"]},
{id:147,brand:"Engage", model:"Pursuit Pro 6.0 Standard",             year:2022, surface:"Textured",     shape:"Standard",   tags:["Control","USA Made"]},
{id:148,brand:"Engage", model:"Pursuit Pro 6.0 Elongated",            year:2022, surface:"Textured",     shape:"Elongated",  tags:["Control","USA Made","Elongated"]},
{id:149,brand:"Engage", model:"Pursuit MX 6.0",                       year:2023, surface:"Textured",     shape:"Standard",   tags:["USA Made","Mid-range"]},
{id:150,brand:"Engage", model:"Pursuit EX 6.0",                       year:2023, surface:"Textured",     shape:"Elongated",  tags:["USA Made","Elongated"]},
{id:151,brand:"Engage", model:"Aero 6.0 14mm Standard",               year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","USA Made"]},
{id:152,brand:"Engage", model:"Aero 6.0 16mm Standard",               year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","USA Made"]},
{id:153,brand:"Engage", model:"Aero 6.0 14mm Elongated",              year:2024, surface:"Carbon Fiber", shape:"Elongated",  tags:["Power","USA Made","Elongated"]},
{id:154,brand:"Engage", model:"Alpha Pro 14mm Standard",               year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Foam","Top Rated","New"]},
{id:155,brand:"Engage", model:"Alpha Pro 16mm Standard",               year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Foam","Control","New"]},
{id:156,brand:"Engage", model:"Alpha Pro 14mm Elongated",              year:2025, surface:"Carbon Fiber", shape:"Elongated",  tags:["Pro","Foam","Power","New"]},
{id:157,brand:"Engage", model:"Pursuit Pro Innovation 12.7mm",         year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Power","USA Made","New"]},
{id:158,brand:"Engage", model:"Encore Pro V2.0",                       year:2025, surface:"Textured",     shape:"Standard",   tags:["USA Made","Mid-range","New"]},
{id:159,brand:"Engage", model:"Pursuit Ultra EX 6.0",                  year:2025, surface:"Carbon Fiber", shape:"Elongated",  tags:["Pro","Power","USA Made","Jessie Irvine","New"]},

// ─── PADDLETEK ───────────────────────────────────────────────────────────────
{id:170,brand:"Paddletek", model:"Phoenix Redux",                      year:2016, surface:"Graphite",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:171,brand:"Paddletek", model:"Bantam EX-L",                        year:2016, surface:"Fiberglass",   shape:"Standard",   tags:["Classic","Beginner","USA Made"]},
{id:172,brand:"Paddletek", model:"Bantam TS-5",                        year:2016, surface:"Fiberglass",   shape:"Standard",   tags:["Classic","USA Made"]},
{id:173,brand:"Paddletek", model:"Bantam EX-L Tempest",                year:2017, surface:"Graphite",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:174,brand:"Paddletek", model:"Tempest Wave",                       year:2017, surface:"Graphite",     shape:"Standard",   tags:["Classic","Control","USA Made"]},
{id:175,brand:"Paddletek", model:"Simone Jardim Expert II",            year:2018, surface:"Graphite",     shape:"Standard",   tags:["Classic","Signature","USA Made"]},
{id:176,brand:"Paddletek", model:"Tempest Pro",                        year:2018, surface:"Graphite",     shape:"Standard",   tags:["Classic","14mm","USA Made"]},
{id:177,brand:"Paddletek", model:"Tempest Wave Pro",                   year:2019, surface:"Graphite",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:178,brand:"Paddletek", model:"Tempest Wave II",                    year:2019, surface:"Graphite",     shape:"Standard",   tags:["Classic","Control","USA Made"]},
{id:179,brand:"Paddletek", model:"Bantam EX-L Pro",                    year:2020, surface:"Graphite",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:180,brand:"Paddletek", model:"Bantam TS-5 Pro",                    year:2020, surface:"Fiberglass",   shape:"Standard",   tags:["Classic","USA Made"]},
{id:181,brand:"Paddletek", model:"Tempest Wave Pro II",                year:2020, surface:"Graphite",     shape:"Standard",   tags:["Classic","USA Made"]},
{id:182,brand:"Paddletek", model:"Tempest Reach Pro",                  year:2021, surface:"Graphite",     shape:"Elongated",  tags:["USA Made","Elongated"]},
{id:183,brand:"Paddletek", model:"Bantam SK-7 Pro",                    year:2022, surface:"Graphite",     shape:"Standard",   tags:["Mid-range","USA Made"]},
{id:184,brand:"Paddletek", model:"Bantam TKO-C",                       year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","USA Made"]},
{id:185,brand:"Paddletek", model:"Bantam TKO-CX 12.7mm Standard",      year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Pro","Power","USA Made"]},
{id:186,brand:"Paddletek", model:"Bantam TKO-CX 16mm Standard",        year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Pro","Control","USA Made"]},
{id:187,brand:"Paddletek", model:"Bantam TKO-CX 12.7mm Elongated",     year:2024, surface:"Raw Carbon",   shape:"Elongated",  tags:["Pro","Power","USA Made","Elongated"]},
{id:188,brand:"Paddletek", model:"Bantam GTO-C Standard",              year:2025, surface:"Raw Carbon",   shape:"Hybrid",     tags:["Hybrid","USA Made","New"]},
{id:189,brand:"Paddletek", model:"Bantam GTO-C Elongated",             year:2025, surface:"Raw Carbon",   shape:"Elongated",  tags:["Hybrid","USA Made","Elongated","New"]},
{id:190,brand:"Paddletek", model:"Anna Leigh Waters ALW-C",            year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Pro","Signature","USA Made","Power"]},

// ─── GEARBOX ─────────────────────────────────────────────────────────────────
{id:200,brand:"Gearbox", model:"GX5 Power",                            year:2018, surface:"Composite",    shape:"Standard",   tags:["Classic","Edgeless","SST"]},
{id:201,brand:"Gearbox", model:"GX5 Control",                          year:2018, surface:"Composite",    shape:"Standard",   tags:["Classic","Edgeless","SST","Control"]},
{id:202,brand:"Gearbox", model:"GX6 Power",                            year:2019, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","Edgeless","SST"]},
{id:203,brand:"Gearbox", model:"GX6 Control",                          year:2019, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","Edgeless","SST"]},
{id:204,brand:"Gearbox", model:"GH7 Hybrid",                           year:2020, surface:"Fiber H7",     shape:"Standard",   tags:["Edgeless","Mid-range"]},
{id:205,brand:"Gearbox", model:"CX11Q Control",                        year:2020, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","Edgeless","SST"]},
{id:206,brand:"Gearbox", model:"CX11E Power Elongated",                year:2021, surface:"Carbon Fiber", shape:"Elongated",  tags:["Power","Edgeless","SST","Elongated"]},
{id:207,brand:"Gearbox", model:"CX11E Control Elongated",              year:2021, surface:"Carbon Fiber", shape:"Elongated",  tags:["Control","Edgeless","SST","Elongated"]},
{id:208,brand:"Gearbox", model:"CX14H Standard",                       year:2021, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","Edgeless","SST","14mm"]},
{id:209,brand:"Gearbox", model:"CX14E Power Elongated",                year:2021, surface:"Carbon Fiber", shape:"Elongated",  tags:["Power","Edgeless","SST","Elongated"]},
{id:210,brand:"Gearbox", model:"CX14H Ultimate Power",                 year:2023, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","Edgeless","SST","Ultimate"]},
{id:211,brand:"Gearbox", model:"CX14E Ultimate Power Elongated",       year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Power","Edgeless","SST","Ultimate","Elongated"]},
{id:212,brand:"Gearbox", model:"Pro Control Elongated",                year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Control","Edgeless","Pro"]},
{id:213,brand:"Gearbox", model:"Pro Power Elongated",                  year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Power","Edgeless","Pro"]},
{id:214,brand:"Gearbox", model:"GX2 Power Elongated",                  year:2024, surface:"Raw Carbon",   shape:"Elongated",  tags:["Power","Edgeless","SST 2.0","CarbonRibCore","Top Rated"]},
{id:215,brand:"Gearbox", model:"GX2 Control Elongated",                year:2024, surface:"Raw Carbon",   shape:"Elongated",  tags:["Control","Edgeless","SST 2.0","CarbonRibCore"]},
{id:216,brand:"Gearbox", model:"Pro Ultimate Power Elongated",         year:2025, surface:"Raw Carbon",   shape:"Elongated",  tags:["Pro","Power","SSTCore","Top Rated","New"]},
{id:217,brand:"Gearbox", model:"Pro Ultimate Control Elongated",       year:2025, surface:"Raw Carbon",   shape:"Elongated",  tags:["Pro","Control","SSTCore","New"]},
{id:218,brand:"Gearbox", model:"S1 14mm",                              year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Edgeless"]},
{id:219,brand:"Gearbox", model:"Stratus 16mm",                         year:2023, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range","Edgeless"]},

// ─── FRANKLIN ────────────────────────────────────────────────────────────────
{id:225,brand:"Franklin", model:"Ben Johns Signature",                 year:2021, surface:"Textured",     shape:"Standard",   tags:["Value","Popular","Signature"]},
{id:226,brand:"Franklin", model:"Ben Johns Signature II",              year:2022, surface:"Textured",     shape:"Standard",   tags:["Value","Signature"]},
{id:227,brand:"Franklin", model:"FS Tour Dynasty 12",                  year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Power"]},
{id:228,brand:"Franklin", model:"FS Tour Odyssey 14",                  year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Control"]},
{id:229,brand:"Franklin", model:"C45 Carbon Hybrid 12mm",              year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Foam","Power","New","Hayden Patriquin"]},
{id:230,brand:"Franklin", model:"C45 Carbon Hybrid 14mm",              year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Foam","Power","New"]},
{id:231,brand:"Franklin", model:"C45 Carbon Hybrid 16mm",              year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Foam","Control","New"]},
{id:232,brand:"Franklin", model:"C45 Carbon Hybrid Elongated",         year:2025, surface:"Carbon Fiber", shape:"Elongated",  tags:["Foam","Power","New","Anna Leigh Waters"]},
{id:233,brand:"Franklin", model:"Teak X Pro",                          year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range"]},
{id:234,brand:"Franklin", model:"X-40 Performance",                    year:2020, surface:"Fiberglass",   shape:"Standard",   tags:["Beginner"]},
{id:235,brand:"Franklin", model:"FS Carbon",                           year:2023, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range"]},

// ─── HEAD ─────────────────────────────────────────────────────────────────────
{id:242,brand:"HEAD", model:"Radical Team",                            year:2017, surface:"Fiberglass",   shape:"Standard",   tags:["Classic","Beginner"]},
{id:243,brand:"HEAD", model:"Radical Elite",                           year:2019, surface:"Graphite",     shape:"Standard",   tags:["Beginner","Classic"]},
{id:244,brand:"HEAD", model:"Radical Pro",                             year:2020, surface:"Graphite",     shape:"Standard",   tags:["Mid-range"]},
{id:245,brand:"HEAD", model:"Radical Tour",                            year:2021, surface:"Composite",    shape:"Standard",   tags:["Mid-range"]},
{id:246,brand:"HEAD", model:"Extreme Tour 14mm",                       year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Power"]},
{id:247,brand:"HEAD", model:"Extreme Pro 14mm",                        year:2023, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro"]},
{id:248,brand:"HEAD", model:"Gravity Pro 14mm",                        year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Pro","Elongated"]},
{id:249,brand:"HEAD", model:"Gravity Power 14mm",                      year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Power"]},
{id:250,brand:"HEAD", model:"Gravity Control 16mm",                    year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Control"]},
{id:251,brand:"HEAD", model:"Extreme Tour 2.0 14mm",                   year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","New"]},
{id:252,brand:"HEAD", model:"Speed Pro",                               year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","Speed"]},

// ─── ONIX ─────────────────────────────────────────────────────────────────────
{id:258,brand:"Onix", model:"Z5 Graphite",                             year:2016, surface:"Graphite",     shape:"Standard",   tags:["Classic","Beginner","Popular","Iconic"]},
{id:259,brand:"Onix", model:"Z5 Composite",                            year:2016, surface:"Composite",    shape:"Standard",   tags:["Classic","Beginner"]},
{id:260,brand:"Onix", model:"Nomex Recruit",                           year:2016, surface:"Composite",    shape:"Standard",   tags:["Classic","Beginner"]},
{id:261,brand:"Onix", model:"Outbreak Pro",                            year:2018, surface:"TeXtreme",     shape:"Standard",   tags:["Classic","First CF Onix"]},
{id:262,brand:"Onix", model:"Evoke Premier",                           year:2020, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range"]},
{id:263,brand:"Onix", model:"Stryker 4 Composite",                     year:2021, surface:"Composite",    shape:"Standard",   tags:["Beginner","Value"]},
{id:264,brand:"Onix", model:"Summit C1",                               year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range"]},
{id:265,brand:"Onix", model:"Evoke Pro Carbon",                        year:2023, surface:"Carbon Fiber", shape:"Standard",   tags:["Mid-range","Power"]},

// ─── GAMMA ────────────────────────────────────────────────────────────────────
{id:271,brand:"Gamma", model:"Compass 206",                            year:2016, surface:"Graphite",     shape:"Standard",   tags:["Classic"]},
{id:272,brand:"Gamma", model:"Micron 2.0",                             year:2016, surface:"Graphite",     shape:"Standard",   tags:["Classic","Beginner"]},
{id:273,brand:"Gamma", model:"Shard Composite",                        year:2017, surface:"Composite",    shape:"Standard",   tags:["Classic"]},
{id:274,brand:"Gamma", model:"Voltage 2.0",                            year:2018, surface:"Graphite",     shape:"Standard",   tags:["Classic"]},
{id:275,brand:"Gamma", model:"405 Composite",                          year:2018, surface:"Composite",    shape:"Standard",   tags:["Classic","USA Made"]},
{id:276,brand:"Gamma", model:"Hellbender 323",                         year:2019, surface:"Textured",     shape:"Standard",   tags:["USA Made"]},
{id:277,brand:"Gamma", model:"Legend",                                 year:2020, surface:"Fiberglass",   shape:"Standard",   tags:["Mid-range","USA Made"]},
{id:278,brand:"Gamma", model:"Needle 16mm",                            year:2021, surface:"Textured",     shape:"Standard",   tags:["Control","USA Made"]},
{id:279,brand:"Gamma", model:"Needle 20mm",                            year:2022, surface:"Textured",     shape:"Standard",   tags:["Control","Thick Core","USA Made"]},
{id:280,brand:"Gamma", model:"RZR 14mm",                               year:2023, surface:"Textured",     shape:"Standard",   tags:["Power"]},
{id:281,brand:"Gamma", model:"RZR 16mm",                               year:2023, surface:"Textured",     shape:"Standard",   tags:["Control"]},
{id:282,brand:"Gamma", model:"RZR 2 14mm",                             year:2024, surface:"Textured",     shape:"Standard",   tags:["Power","New"]},
{id:283,brand:"Gamma", model:"RZR 2 16mm",                             year:2024, surface:"Textured",     shape:"Standard",   tags:["Control","New"]},
{id:284,brand:"Gamma", model:"LAZR 16X Full Foam",                     year:2025, surface:"Textured",     shape:"Standard",   tags:["Foam","Power","New","GRUVN collab"]},

// ─── PROKENNEX ───────────────────────────────────────────────────────────────
{id:290,brand:"ProKennex", model:"Q5",                                 year:2018, surface:"Composite",    shape:"Standard",   tags:["Classic","Joint-Friendly"]},
{id:291,brand:"ProKennex", model:"Pro Speed 14mm",                     year:2019, surface:"Textured",     shape:"Standard",   tags:["Spin","Joint-Friendly"]},
{id:292,brand:"ProKennex", model:"Ovation Speed II",                   year:2021, surface:"Textured",     shape:"Standard",   tags:["Spin","Joint-Friendly"]},
{id:293,brand:"ProKennex", model:"Pro Speed 16mm",                     year:2022, surface:"Textured",     shape:"Standard",   tags:["Control","Joint-Friendly"]},
{id:294,brand:"ProKennex", model:"Pro Flight 14mm",                    year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Spin","Joint-Friendly"]},
{id:295,brand:"ProKennex", model:"Pro Flight 16mm",                    year:2022, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","Joint-Friendly"]},
{id:296,brand:"ProKennex", model:"Kinetic Pro Speed 2.0",              year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Spin"]},
{id:297,brand:"ProKennex", model:"Ovation Flight Elongated",           year:2023, surface:"Carbon Fiber", shape:"Elongated",  tags:["Mid-range","Elongated"]},
{id:298,brand:"ProKennex", model:"Kinetic Energy 14mm",                year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["New","Power"]},

// ─── SIX ZERO ────────────────────────────────────────────────────────────────
{id:304,brand:"Six Zero", model:"Black Diamond 14mm",                  year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Popular"]},
{id:305,brand:"Six Zero", model:"Black Diamond 16mm",                  year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Popular"]},
{id:306,brand:"Six Zero", model:"Double Black Diamond 14mm",           year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Thermoformed","Top Rated"]},
{id:307,brand:"Six Zero", model:"Double Black Diamond 16mm",           year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Thermoformed","Top Rated"]},
{id:308,brand:"Six Zero", model:"Double Black Diamond Control 16mm",   year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Best Control","Popular"]},
{id:309,brand:"Six Zero", model:"Double Black Diamond Elongated 14mm", year:2024, surface:"Raw Carbon",   shape:"Elongated",  tags:["Power","Thermoformed","Elongated"]},
{id:310,brand:"Six Zero", model:"Ruby 14mm",                           year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","Mid-range"]},
{id:311,brand:"Six Zero", model:"Ruby 16mm",                           year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","Mid-range"]},
{id:312,brand:"Six Zero", model:"Coral 14mm",                          year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Spin","New","Top Spin"]},
{id:313,brand:"Six Zero", model:"Coral 16mm",                          year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Spin","New","Best Control"]},
{id:314,brand:"Six Zero", model:"Black Opal 14mm",                     year:2026, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","Foam","Diamond-Infused","New 2026","Top Rated"]},
{id:315,brand:"Six Zero", model:"Quartz 16mm",                         year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Beginner","Value","New"]},

// ─── DIADEM ──────────────────────────────────────────────────────────────────
{id:321,brand:"Diadem", model:"Icon V2",                               year:2020, surface:"Textured",     shape:"Standard",   tags:["Mid-range"]},
{id:322,brand:"Diadem", model:"Warrior 19mm",                          year:2021, surface:"Textured",     shape:"Standard",   tags:["Thick Core","First 19mm"]},
{id:323,brand:"Diadem", model:"Edge Series 16mm",                      year:2022, surface:"Textured",     shape:"Standard",   tags:["Mid-range"]},
{id:324,brand:"Diadem", model:"Warrior V2 16mm",                       year:2022, surface:"Textured",     shape:"Standard",   tags:["Control","Thick Core"]},
{id:325,brand:"Diadem", model:"Warrior 16mm Carbon",                   year:2023, surface:"Carbon Fiber", shape:"Standard",   tags:["Power"]},
{id:326,brand:"Diadem", model:"Warrior BluCore 14mm Standard",         year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","EPP Foam"]},
{id:327,brand:"Diadem", model:"Warrior BluCore 16mm Standard",         year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","EPP Foam"]},
{id:328,brand:"Diadem", model:"Warrior BluCore 19mm Standard",         year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Control","EPP Foam","Thick Core"]},
{id:329,brand:"Diadem", model:"Warrior BluCore 14mm Pro",              year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","EPP Foam","Power"]},
{id:330,brand:"Diadem", model:"Warrior BluCore 16mm Pro",              year:2024, surface:"Carbon Fiber", shape:"Standard",   tags:["Pro","EPP Foam","Control"]},
{id:331,brand:"Diadem", model:"Warrior BluCore 14mm Max",              year:2024, surface:"Carbon Fiber", shape:"Widebody",   tags:["EPP Foam","Forgiveness","Widebody"]},
{id:332,brand:"Diadem", model:"Warrior CFS 14mm",                      year:2025, surface:"Carbon Fiber", shape:"Standard",   tags:["Power","New"]},

// ─── VATIC PRO ───────────────────────────────────────────────────────────────
{id:338,brand:"Vatic Pro", model:"V7 14mm",                            year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Thermoformed","Value","Popular"]},
{id:339,brand:"Vatic Pro", model:"V7 16mm",                            year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Thermoformed","Value","Popular"]},
{id:340,brand:"Vatic Pro", model:"V7 Elongated 14mm",                  year:2023, surface:"Raw Carbon",   shape:"Elongated",  tags:["Power","Value","Elongated"]},
{id:341,brand:"Vatic Pro", model:"PRISM Flash 14mm",                   year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Thermoformed","Value"]},
{id:342,brand:"Vatic Pro", model:"PRISM Flash 16mm",                   year:2023, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Thermoformed","Value"]},
{id:343,brand:"Vatic Pro", model:"V-SOL 14mm",                         year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Value","Beginner"]},
{id:344,brand:"Vatic Pro", model:"V-SOL Pro Standard",                 year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Value","Popular","Foam"]},
{id:345,brand:"Vatic Pro", model:"V-SOL Pro Flash",                    year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Value","Popular","Foam","Updated"]},
{id:346,brand:"Vatic Pro", model:"V7 2.0 14mm",                        year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Value","Updated"]},
{id:347,brand:"Vatic Pro", model:"V7 2.0 16mm",                        year:2024, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Value","Updated"]},
{id:348,brand:"Vatic Pro", model:"Saga Bloom 14mm",                    year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Value","New"]},
{id:349,brand:"Vatic Pro", model:"Saga Bloom 16mm",                    year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Value","New"]},
{id:350,brand:"Vatic Pro", model:"Saga Flash 14mm",                    year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Value","New","Thin Core"]},
{id:351,brand:"Vatic Pro", model:"Maximus 14mm",                       year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Power","Value","Gen2 Thermoformed","New"]},
{id:352,brand:"Vatic Pro", model:"Maximus 16mm",                       year:2025, surface:"Raw Carbon",   shape:"Standard",   tags:["Control","Value","Gen2 Thermoformed","New"]},

// ─── PROTON — COMPLETE ────────────────────────────────────────────────────────
{id:358,brand:"Proton", model:"Series One 14mm Standard",              year:2024, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","Spin","Thermoformed"]},
{id:359,brand:"Proton", model:"Series One 16mm Standard",              year:2024, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","Control","Thermoformed"]},
{id:360,brand:"Proton", model:"Series Two 14mm Standard",              year:2024, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","Spin","Thermoformed"]},
{id:361,brand:"Proton", model:"Series Two 16mm Standard",              year:2024, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","Control","Thermoformed"]},
{id:362,brand:"Proton", model:"Series Three 14mm Standard",            year:2024, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","Spin","Top Rated","Popular"]},
{id:363,brand:"Proton", model:"Series Three 16mm Standard",            year:2024, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","Control","Popular"]},
// Project Flamingo — Velocity Core + HD Foam (2025)
{id:364,brand:"Proton", model:"Project Flamingo Elongated 13mm",       year:2025, surface:"Aerospace CF",  shape:"Elongated", tags:["Pro","Velocity Core","Spin","Speed","Popular","New"]},
{id:365,brand:"Proton", model:"Project Flamingo Elongated 15mm",       year:2025, surface:"Aerospace CF",  shape:"Elongated", tags:["Pro","Velocity Core","Spin","Top Rated","#1 Spin","New","Popular"]},
{id:366,brand:"Proton", model:"Project Flamingo Square 13mm",          year:2025, surface:"Aerospace CF",  shape:"Widebody",  tags:["Pro","Velocity Core","Spin","Widebody","New"]},
{id:367,brand:"Proton", model:"Project Flamingo Square 15mm",          year:2025, surface:"Aerospace CF",  shape:"Widebody",  tags:["Pro","Velocity Core","Spin","Widebody","New"]},
// Project Peacock — Atomic Foam Core (2025)
{id:368,brand:"Proton", model:"Project Peacock Elongated 13mm",        year:2025, surface:"Aerospace CF",  shape:"Elongated", tags:["Pro","Atomic Foam Core","Dwell","New"]},
{id:369,brand:"Proton", model:"Project Peacock Elongated 15mm",        year:2025, surface:"Aerospace CF",  shape:"Elongated", tags:["Pro","Atomic Foam Core","Dwell","Control","Top Rated","New"]},
{id:370,brand:"Proton", model:"Project Peacock Square 13mm",           year:2025, surface:"Aerospace CF",  shape:"Widebody",  tags:["Pro","Atomic Foam Core","Widebody","New"]},
{id:371,brand:"Proton", model:"Project Peacock Square 15mm",           year:2025, surface:"Aerospace CF",  shape:"Widebody",  tags:["Pro","Atomic Foam Core","Widebody","New"]},
{id:372,brand:"Proton", model:"ERA 14mm",                              year:2025, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","New","Power"]},
{id:373,brand:"Proton", model:"ERA 16mm",                              year:2025, surface:"Aerospace CF",  shape:"Standard",  tags:["Pro","New","Control"]},

// ─── HONOLULU ────────────────────────────────────────────────────────────────
{id:379,brand:"Honolulu", model:"J2K Standard",                        year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Popular"]},
{id:380,brand:"Honolulu", model:"J2K Elongated",                       year:2023, surface:"Carbon Fiber",  shape:"Elongated", tags:["Pro","Elongated"]},
{id:381,brand:"Honolulu", model:"Sword & Shield J2NF Standard",        year:2024, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Pro","Top Rated","Best Overall","#1 2026"]},
{id:382,brand:"Honolulu", model:"Sword & Shield J2NF Elongated",       year:2024, surface:"Carbon Fiber",  shape:"Elongated", tags:["Pro","Top Rated","Elongated"]},
{id:383,brand:"Honolulu", model:"J2FC+",                               year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Foam Core","New"]},
{id:384,brand:"Honolulu", model:"J6CR Standard",                       year:2025, surface:"Full Foam",     shape:"Hybrid",    tags:["Foam Core","Top Rated","New","Power"]},
{id:385,brand:"Honolulu", model:"J6CR Elongated",                      year:2026, surface:"Full Foam",     shape:"Elongated", tags:["Foam Core","Top Rated","New 2026","Power"]},
{id:386,brand:"Honolulu", model:"J2NF Pro",                            year:2025, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Pro","New"]},

// ─── HOLBROOK ─────────────────────────────────────────────────────────────────
{id:392,brand:"Holbrook", model:"Origin 14mm Standard",                year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","Aramid Fiber"]},
{id:393,brand:"Holbrook", model:"Origin 16mm Standard",                year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Aramid Fiber"]},
{id:394,brand:"Holbrook", model:"Origin Elongated 14mm",               year:2024, surface:"Carbon Fiber",  shape:"Elongated", tags:["Power","Aramid Fiber","Elongated"]},
{id:395,brand:"Holbrook", model:"Fuze 14mm Standard",                  year:2025, surface:"Aramid+CF",     shape:"Elongated", tags:["Power","Foam","Top Rated","New"]},
{id:396,brand:"Holbrook", model:"Fuze 16mm Standard",                  year:2025, surface:"Aramid+CF",     shape:"Elongated", tags:["Control","Foam","Top Rated","Best Overall","New"]},
{id:397,brand:"Holbrook", model:"Fuze Hybrid 16mm",                    year:2025, surface:"Aramid+CF",     shape:"Hybrid",    tags:["Foam","Hybrid Shape","New"]},
{id:398,brand:"Holbrook", model:"Origin Pro 14mm",                     year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power","New"]},
{id:399,brand:"Holbrook", model:"Fuze Pro",                            year:2026, surface:"Aramid+CF",     shape:"Elongated", tags:["Pro","Foam","New 2026"]},

// ─── BREAD & BUTTER ───────────────────────────────────────────────────────────
{id:405,brand:"Bread & Butter", model:"Loco 14mm Standard",            year:2024, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Power","Popular","Top Rated","Foam"]},
{id:406,brand:"Bread & Butter", model:"Loco 16mm Standard",            year:2024, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Control","Popular","Foam"]},
{id:407,brand:"Bread & Butter", model:"Loco 14mm Elongated",           year:2024, surface:"Carbon Fiber",  shape:"Elongated", tags:["Power","Popular","Elongated","Foam"]},
{id:408,brand:"Bread & Butter", model:"Filth 14mm Standard",           year:2025, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Power","Pro","Foam","New"]},
{id:409,brand:"Bread & Butter", model:"Filth 16mm Standard",           year:2025, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Control","Pro","Foam","New"]},
{id:410,brand:"Bread & Butter", model:"Filth 14mm Elongated",          year:2025, surface:"Carbon Fiber",  shape:"Elongated", tags:["Power","Pro","Foam","New","Elongated"]},
{id:411,brand:"Bread & Butter", model:"Loco Deluxe 14mm",              year:2025, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Power","Updated","Foam","New"]},
{id:412,brand:"Bread & Butter", model:"Loco Deluxe 16mm",              year:2025, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Control","Updated","Foam","New"]},
{id:413,brand:"Bread & Butter", model:"Hustler 14mm",                  year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Spin","Mid-range"]},
{id:414,brand:"Bread & Butter", model:"Shogun Titanium CF 14mm",       year:2025, surface:"Titanium CF",   shape:"Standard",  tags:["Unique Material","Spin","New"]},
{id:415,brand:"Bread & Butter", model:"Loco Picasso 14mm",             year:2025, surface:"Carbon Fiber",  shape:"Hybrid",    tags:["Power","Limited Edition","New"]},

// ─── 11SIX24 ──────────────────────────────────────────────────────────────────
{id:421,brand:"11SIX24", model:"Pegasus 14mm Standard",                year:2023, surface:"T800 Carbon",   shape:"Standard",  tags:["Power","Value","Classic"]},
{id:422,brand:"11SIX24", model:"Pegasus 16mm Jelly Bean",              year:2024, surface:"T800 Carbon",   shape:"Widebody",  tags:["Forgiveness","Value"]},
{id:423,brand:"11SIX24", model:"Excalibur 14mm Standard",              year:2024, surface:"T800 Carbon",   shape:"Standard",  tags:["Power","Pro"]},
{id:424,brand:"11SIX24", model:"Excalibur 16mm Standard",              year:2024, surface:"T800 Carbon",   shape:"Standard",  tags:["Control","Pro"]},
{id:425,brand:"11SIX24", model:"Apex 14mm",                            year:2025, surface:"T800 Carbon",   shape:"Standard",  tags:["Power","Pro","New"]},
{id:426,brand:"11SIX24", model:"Apex 16mm",                            year:2025, surface:"T800 Carbon",   shape:"Standard",  tags:["Control","Pro","New"]},
{id:427,brand:"11SIX24", model:"Pegasus Elongated 14mm",               year:2025, surface:"T800 Carbon",   shape:"Elongated", tags:["Power","Elongated","New"]},
{id:428,brand:"11SIX24", model:"Magnus 14mm",                          year:2025, surface:"T800 Carbon",   shape:"Standard",  tags:["Power","Pro","New"]},
// Power 2 series — HexGrit (2026)
{id:429,brand:"11SIX24", model:"Vapor Power 2 Hybrid",                 year:2026, surface:"HexGrit CF",    shape:"Hybrid",    tags:["Foam","HexGrit","Durable Grit","Best All-Court","New 2026","Top Rated"]},
{id:430,brand:"11SIX24", model:"Pegasus Power 2 Widebody",             year:2026, surface:"HexGrit CF",    shape:"Widebody",  tags:["Foam","HexGrit","Forgiveness","New 2026"]},
{id:431,brand:"11SIX24", model:"Hurache-X Power 2 Elongated",          year:2026, surface:"HexGrit CF",    shape:"Elongated", tags:["Foam","HexGrit","Power","New 2026"]},

// ─── WARPING POINT ─────────────────────────────────────────────────────────────
{id:437,brand:"Warping Point", model:"Neon 14mm",                      year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Value","Power","Popular"]},
{id:438,brand:"Warping Point", model:"Neon 16mm",                      year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Value","Control","Top Rated","Popular"]},
{id:439,brand:"Warping Point", model:"Neon 2.0 14mm",                  year:2025, surface:"Raw Carbon",    shape:"Standard",  tags:["Value","Power","New"]},
{id:440,brand:"Warping Point", model:"Neon 2.0 16mm",                  year:2025, surface:"Raw Carbon",    shape:"Standard",  tags:["Value","Control","New"]},
{id:441,brand:"Warping Point", model:"Neon Elongated 14mm",            year:2025, surface:"Raw Carbon",    shape:"Elongated", tags:["Value","Power","Elongated","New"]},

// ─── FRIDAY PICKLEBALL ────────────────────────────────────────────────────────
{id:447,brand:"Friday", model:"Original 14mm",                         year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Beginner","Popular"]},
{id:448,brand:"Friday", model:"Original 16mm",                         year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Beginner","Control"]},
{id:449,brand:"Friday", model:"Aura 14mm",                             year:2026, surface:"Carbon Fiber",  shape:"Standard",  tags:["Foam Core","New 2026","Power","Rubber Ring"]},
{id:450,brand:"Friday", model:"Aura Pro 14mm",                         year:2026, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Foam Core","New 2026","Top Rated"]},
{id:451,brand:"Friday", model:"Aura 16mm",                             year:2026, surface:"Carbon Fiber",  shape:"Standard",  tags:["Foam Core","New 2026","Control"]},
{id:452,brand:"Friday", model:"Fever",                                 year:2025, surface:"Fiberglass",    shape:"Standard",  tags:["Mid-range","Value","Pop","New"]},

// ─── RPM ──────────────────────────────────────────────────────────────────────
{id:458,brand:"RPM", model:"Friction Pro 14mm Standard",               year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["#1 Spin","Top Spin","Max Grit"]},
{id:459,brand:"RPM", model:"Friction Pro 16mm Standard",               year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Spin","Control"]},
{id:460,brand:"RPM", model:"Friction Pro Elongated 14mm",              year:2024, surface:"Raw Carbon",    shape:"Elongated", tags:["Spin","Power","Elongated"]},
{id:461,brand:"RPM", model:"Friction Pro 2.0 14mm",                    year:2025, surface:"Raw Carbon",    shape:"Standard",  tags:["Spin","Updated","New"]},

// ─── FLiK ─────────────────────────────────────────────────────────────────────
{id:467,brand:"FLiK", model:"F1 Standard 14mm",                        year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","Pop"]},
{id:468,brand:"FLiK", model:"F1 Standard 16mm",                        year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control"]},
{id:469,brand:"FLiK", model:"F2 Standard 14mm",                        year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","New"]},
{id:470,brand:"FLiK", model:"F2 Standard 16mm",                        year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","New"]},
{id:471,brand:"FLiK", model:"F3 Standard 14mm",                        year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Triple Foam Core","Best Control","Dwell","New","Top Rated"]},
{id:472,brand:"FLiK", model:"F3 Standard 16mm",                        year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Triple Foam Core","Control","Dwell","New"]},
{id:473,brand:"FLiK", model:"F3 Elongated 14mm",                       year:2025, surface:"T700 Carbon",   shape:"Elongated", tags:["Triple Foam Core","Power","New"]},

// ─── THRIVE ───────────────────────────────────────────────────────────────────
{id:479,brand:"Thrive", model:"Fierce 14mm Standard",                  year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","New"]},
{id:480,brand:"Thrive", model:"Fierce 16mm Standard",                  year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","New"]},
{id:481,brand:"Thrive", model:"Fierce Elongated 14mm",                 year:2024, surface:"Carbon Fiber",  shape:"Elongated", tags:["Power","Elongated","New"]},
{id:482,brand:"Thrive", model:"Project Fury 14mm Standard",            year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","Foam","JOOLA-like","New"]},
{id:483,brand:"Thrive", model:"Project Fury 16mm Standard",            year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Foam","New"]},
{id:484,brand:"Thrive", model:"Azul 14mm",                             year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","New"]},

// ─── GRUVN ─────────────────────────────────────────────────────────────────────
{id:490,brand:"Gruvn", model:"WAR-16E Elongated",                      year:2022, surface:"Carbon Fiber",  shape:"Elongated", tags:["Elongated","Mid-range"]},
{id:491,brand:"Gruvn", model:"RAW-14W Widebody",                       year:2023, surface:"Raw Carbon",    shape:"Widebody",  tags:["Widebody"]},
{id:492,brand:"Gruvn", model:"REVO-14C Elongated",                     year:2021, surface:"Carbon Fiber",  shape:"Elongated", tags:["Elongated"]},
{id:493,brand:"Gruvn", model:"RAW-16E Elongated",                      year:2023, surface:"Raw Carbon",    shape:"Elongated", tags:["Elongated","Control"]},
{id:494,brand:"Gruvn", model:"LAZR 16X Full Foam",                     year:2025, surface:"Raw Carbon",    shape:"Standard",  tags:["Foam","Power","Balanced","New"]},

// ─── RONBUS / LEGACY PRO ─────────────────────────────────────────────────────
{id:500,brand:"Ronbus", model:"R1 Nucleus",                            year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range"]},
{id:501,brand:"Ronbus", model:"Pulsar 14mm",                           year:2023, surface:"Raw Carbon",    shape:"Standard",  tags:["Spin","Thermoformed"]},
{id:502,brand:"Ronbus", model:"Pulsar 16mm",                           year:2023, surface:"Raw Carbon",    shape:"Standard",  tags:["Control","Thermoformed"]},
{id:503,brand:"Ronbus", model:"Nova 14mm",                             year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Power","New"]},
{id:504,brand:"Ronbus", model:"Nova 16mm",                             year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Control","New"]},
{id:505,brand:"Ronbus", model:"R1 Pro 14mm",                           year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Pro","Spin"]},
{id:506,brand:"Legacy Pro", model:"Legacy Pro 14mm",                   year:2023, surface:"Raw Carbon",    shape:"Standard",  tags:["Power","Thermoformed"]},
{id:507,brand:"Legacy Pro", model:"Legacy Pro 16mm",                   year:2023, surface:"Raw Carbon",    shape:"Standard",  tags:["Control","Thermoformed"]},
{id:508,brand:"Legacy Pro", model:"Legacy Pro 2.0 14mm",               year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Power","Updated"]},
{id:509,brand:"Legacy Pro", model:"Legacy Pro Elongated 14mm",         year:2024, surface:"Raw Carbon",    shape:"Elongated", tags:["Power","Elongated"]},

// ─── VULCAN ──────────────────────────────────────────────────────────────────
{id:515,brand:"Vulcan", model:"V560 Control",                          year:2020, surface:"Graphite",      shape:"Standard",  tags:["Classic","Control"]},
{id:516,brand:"Vulcan", model:"V550 Control",                          year:2021, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control"]},
{id:517,brand:"Vulcan", model:"V730 Power",                            year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power"]},
{id:518,brand:"Vulcan", model:"V720 Control",                          year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control"]},
{id:519,brand:"Vulcan", model:"V325 Premium",                          year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range"]},
{id:520,brand:"Vulcan", model:"V710 Power 14mm",                       year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","New"]},
{id:521,brand:"Vulcan", model:"V520 Control",                          year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Mid-range"]},

// ─── PROLITE ─────────────────────────────────────────────────────────────────
{id:527,brand:"PROLITE", model:"Magnum",                               year:2016, surface:"Graphite",      shape:"Standard",  tags:["Classic","USA Made"]},
{id:528,brand:"PROLITE", model:"Bolt",                                 year:2018, surface:"Graphite",      shape:"Standard",  tags:["Classic","Beginner","USA Made"]},
{id:529,brand:"PROLITE", model:"Rebel Pro XL",                         year:2018, surface:"Graphite",      shape:"Standard",  tags:["Classic","USA Made"]},
{id:530,brand:"PROLITE", model:"Crush PowerSpin",                      year:2019, surface:"Carbon Fiber",  shape:"Standard",  tags:["Spin","USA Made"]},
{id:531,brand:"PROLITE", model:"Rebel Pro",                            year:2020, surface:"Carbon Fiber",  shape:"Standard",  tags:["USA Made"]},
{id:532,brand:"PROLITE", model:"Titan Pro",                            year:2021, surface:"Carbon Fiber",  shape:"Standard",  tags:["USA Made","Power"]},
{id:533,brand:"PROLITE", model:"Titan Pro Black Diamond",              year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["USA Made","Pro"]},
{id:534,brand:"PROLITE", model:"Stealth GS2 Elongated",                year:2023, surface:"Carbon Fiber",  shape:"Elongated", tags:["USA Made","Power","Elongated"]},
{id:535,brand:"PROLITE", model:"GS2 Control Elongated",                year:2023, surface:"Carbon Fiber",  shape:"Elongated", tags:["USA Made","Control","Elongated"]},
{id:536,brand:"PROLITE", model:"Rebel Pro LX Elongated",               year:2024, surface:"Carbon Fiber",  shape:"Elongated", tags:["USA Made","Spin","Power","Elongated","New"]},

// ─── ELECTRUM ────────────────────────────────────────────────────────────────
{id:542,brand:"Electrum", model:"Model E",                             year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Popular","Edgeless"]},
{id:543,brand:"Electrum", model:"Model E Pro 14mm",                    year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Edgeless"]},
{id:544,brand:"Electrum", model:"Model E Pro 16mm",                    year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Control","Edgeless"]},
{id:545,brand:"Electrum", model:"Model E Air 14mm",                    year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","Thermoformed","New"]},
{id:546,brand:"Electrum", model:"Model E Air 16mm",                    year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Thermoformed","New"]},
{id:547,brand:"Electrum", model:"Model E Ultra 14mm",                  year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power","New"]},

// ─── FORGE + BOND ─────────────────────────────────────────────────────────────
{id:553,brand:"Forge + Bond", model:"Runout Elongated",                year:2023, surface:"FusionFiber",   shape:"Elongated", tags:["USA Made","Edgeless","Elongated"]},
{id:554,brand:"Forge + Bond", model:"Runout Hybrid",                   year:2023, surface:"FusionFiber",   shape:"Hybrid",    tags:["USA Made","Hybrid Shape"]},
{id:555,brand:"Forge + Bond", model:"Runout Widebody",                 year:2023, surface:"FusionFiber",   shape:"Widebody",  tags:["USA Made","Widebody"]},
{id:556,brand:"Forge + Bond", model:"Pro Elongated",                   year:2024, surface:"FusionFiber",   shape:"Elongated", tags:["USA Made","Pro","New"]},
{id:557,brand:"Forge + Bond", model:"Ultra 14mm",                      year:2025, surface:"FusionFiber",   shape:"Standard",  tags:["USA Made","Pro","Power","New"]},

// ─── BABOLAT ─────────────────────────────────────────────────────────────────
{id:563,brand:"Babolat", model:"RBEL 14mm",                            year:2021, surface:"Textured",      shape:"Standard",  tags:["Mid-range"]},
{id:564,brand:"Babolat", model:"XCEL Power",                           year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power"]},
{id:565,brand:"Babolat", model:"XCEL Control",                         year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control"]},
{id:566,brand:"Babolat", model:"Technical VIPER 14mm",                 year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Thermoformed"]},
{id:567,brand:"Babolat", model:"Technical VIPER 16mm",                 year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Control","Thermoformed"]},
{id:568,brand:"Babolat", model:"Air Viper 14mm",                       year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power","New"]},
{id:569,brand:"Babolat", model:"Air Viper 16mm",                       year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Control","New"]},

// ─── PRINCE / WILSON / ADIDAS ────────────────────────────────────────────────
{id:575,brand:"Prince", model:"Response Pro",                          year:2018, surface:"Composite",     shape:"Standard",  tags:["Classic","14mm"]},
{id:576,brand:"Prince", model:"Thunder Pro",                           year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power"]},
{id:577,brand:"Prince", model:"Nova Pro",                              year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","New"]},
{id:578,brand:"Wilson", model:"Juice 100L",                            year:2019, surface:"Graphite",      shape:"Standard",  tags:["Beginner","Classic"]},
{id:579,brand:"Wilson", model:"Tempo Pro",                             year:2021, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range"]},
{id:580,brand:"Wilson", model:"Tour Pro",                              year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro"]},
{id:581,brand:"Wilson", model:"Blade Pro 14mm",                        year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power","New"]},
{id:582,brand:"adidas", model:"ESSNOVA Carbon ATTK",                   year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power"]},
{id:583,brand:"adidas", model:"ADIPOWER ATTK",                         year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power"]},
{id:584,brand:"adidas", model:"ADIPOWER CTRL",                         year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Control"]},
{id:585,brand:"adidas", model:"METALBONE Carbon ATTK",                 year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power","New"]},
{id:586,brand:"adidas", model:"METALBONE Carbon CTRL",                 year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Control","New"]},

// ─── TMPR ─────────────────────────────────────────────────────────────────────
{id:592,brand:"TMPR", model:"Ascend Pro",                              year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro"]},
{id:593,brand:"TMPR", model:"Pathfinder 16mm",                         year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range"]},
{id:594,brand:"TMPR", model:"Voyage 14mm",                             year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","New"]},
{id:595,brand:"TMPR", model:"Voyage 16mm",                             year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","New"]},
{id:596,brand:"TMPR", model:"Ascend Pro Max",                          year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power"]},
{id:597,brand:"TMPR", model:"ESQ-C Elongated",                         year:2025, surface:"Carbon Fiber",  shape:"Elongated", tags:["Pro","New","Elongated"]},
{id:598,brand:"TMPR", model:"Nimbus 14mm",                             year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","New"]},

// ─── ProXR ────────────────────────────────────────────────────────────────────
{id:604,brand:"ProXR", model:"Signature Series 14mm",                  year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Ergonomic","Control","Spin"]},
{id:605,brand:"ProXR", model:"Signature Series 16mm",                  year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Ergonomic","Control"]},
{id:606,brand:"ProXR", model:"Pro Control 14mm",                       year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Ergonomic","New"]},
{id:607,brand:"ProXR", model:"Beth Bellamy Diamond 14mm",              year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Signature","Precision"]},

// ─── CPX ──────────────────────────────────────────────────────────────────────
{id:613,brand:"CPX", model:"CPX Air 14mm",                             year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Pro","Thermoformed","New"]},
{id:614,brand:"CPX", model:"CPX Air 16mm",                             year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Pro","Control","Thermoformed","New"]},
{id:615,brand:"CPX", model:"CPX Max 14mm",                             year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Pro","Power","Thermoformed","New"]},
{id:616,brand:"CPX", model:"CPX Max 16mm",                             year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Pro","Control","Thermoformed","New"]},
{id:617,brand:"CPX", model:"CPX Ultra 14mm",                           year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Pro","Power","PBCoR43","New"]},
{id:618,brand:"CPX", model:"CPX Sport 16mm",                           year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Mid-range","New"]},

// ─── VOLAIR ───────────────────────────────────────────────────────────────────
{id:624,brand:"Volair", model:"Mach 1 Forza",                          year:2020, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range"]},
{id:625,brand:"Volair", model:"Mach 1 Invicta",                        year:2021, surface:"Carbon Fiber",  shape:"Elongated", tags:["Elongated"]},
{id:626,brand:"Volair", model:"Mach 1 Pro",                            year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro"]},
{id:627,brand:"Volair", model:"Mach 2 Forza",                          year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","High Grit","New"]},

// ─── MASTER ATHLETICS / STAFFORD ─────────────────────────────────────────────
{id:633,brand:"Master Athletics", model:"Icon 14mm",                   year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro"]},
{id:634,brand:"Master Athletics", model:"Origin 14mm",                 year:2023, surface:"Carbon Fiber",  shape:"Elongated", tags:["Pro","Elongated"]},
{id:635,brand:"Stafford", model:"K1 Control",                          year:2021, surface:"Graphite",      shape:"Standard",  tags:["USA Made"]},
{id:636,brand:"Stafford", model:"K2 Power",                            year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["USA Made","Power"]},

// ─── HUDEF ────────────────────────────────────────────────────────────────────
{id:642,brand:"Hudef", model:"HC-500 14mm",                            year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Spin","Mid-range"]},
{id:643,brand:"Hudef", model:"HC-500 16mm",                            year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Mid-range"]},
{id:644,brand:"Hudef", model:"HC-600 14mm",                            year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","Spin"]},
{id:645,brand:"Hudef", model:"HC-700 Pro",                             year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power","New"]},
{id:646,brand:"Hudef", model:"HC-500 Elongated",                       year:2023, surface:"Carbon Fiber",  shape:"Elongated", tags:["Elongated","Spin"]},

// ─── AVOURA ───────────────────────────────────────────────────────────────────
{id:652,brand:"Avoura", model:"Genesis Pro 14mm",                      year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","USA Made","Family Brand"]},
{id:653,brand:"Avoura", model:"Genesis Pro 16mm",                      year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","USA Made","Control"]},
{id:654,brand:"Avoura", model:"Genesis Elite 14mm",                    year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["USA Made","Power","New"]},
{id:655,brand:"Avoura", model:"Genesis Elite Elongated",               year:2024, surface:"Carbon Fiber",  shape:"Elongated", tags:["USA Made","Power","New"]},

// ─── THOMPSON ─────────────────────────────────────────────────────────────────
{id:661,brand:"Thompson", model:"Pro Series 14mm",                     year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["USA Made","Pro","Molded"]},
{id:662,brand:"Thompson", model:"Pro Series 16mm",                     year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["USA Made","Pro","Control","Molded"]},
{id:663,brand:"Thompson", model:"Elite Elongated 14mm",                year:2024, surface:"Carbon Fiber",  shape:"Elongated", tags:["USA Made","Power","New"]},

// ─── REVOLIN / CHORUS / SLYCE / PICKLEBALL APES ──────────────────────────────
{id:669,brand:"Revolin", model:"Pro 14mm",                             year:2024, surface:"BioFLX",        shape:"Standard",  tags:["Eco","Sustainable","New"]},
{id:670,brand:"Revolin", model:"Sport 16mm",                           year:2024, surface:"BioFLX",        shape:"Standard",  tags:["Eco","Sustainable","Control","New"]},
{id:671,brand:"Chorus", model:"Standard 14mm",                         year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range"]},
{id:672,brand:"Chorus", model:"Standard 16mm",                         year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Mid-range"]},
{id:673,brand:"Slyce", model:"Speedcap Pro 14mm",                      year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Speed","Power","New"]},
{id:674,brand:"Slyce", model:"Speedcap Pro 16mm",                      year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Speed","Control","New"]},
{id:675,brand:"Pickleball Apes", model:"Pulse S 14mm",                 year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","Spin"]},
{id:676,brand:"Pickleball Apes", model:"Pulse S 16mm",                 year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control"]},
{id:677,brand:"Pickleball Apes", model:"Riptide 14mm",                 year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","New"]},

// ─── SPARTUS ──────────────────────────────────────────────────────────────────
{id:683,brand:"Spartus", model:"Olympus 14mm",                         year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","High Grit"]},
{id:684,brand:"Spartus", model:"Olympus 16mm",                         year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Control","High Grit"]},
{id:685,brand:"Spartus", model:"Atlas 14mm",                           year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Power","New"]},

// ─── GRIT PICKLEBALL ─────────────────────────────────────────────────────────
{id:691,brand:"GRIT", model:"Striker 14mm",                            year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Spin","USAP Approved","New"]},
{id:692,brand:"GRIT", model:"Striker 16mm",                            year:2024, surface:"Raw Carbon",    shape:"Standard",  tags:["Control","USAP Approved","New"]},
{id:693,brand:"GRIT", model:"Bomber 14mm",                             year:2025, surface:"Raw Carbon",    shape:"Standard",  tags:["Power","New"]},

// ─── SENS PICKLEBALL ──────────────────────────────────────────────────────────
{id:699,brand:"SENS", model:"Pro 14mm",                                year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","USAP Approved","Spin"]},
{id:700,brand:"SENS", model:"Pro 16mm",                                year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","USAP Approved","Control"]},
{id:701,brand:"SENS", model:"Control Elongated",                       year:2025, surface:"Carbon Fiber",  shape:"Elongated", tags:["Control","New"]},

// ─── RAD PICKLEBALL ───────────────────────────────────────────────────────────
{id:707,brand:"RAD", model:"Pro 14mm",                                 year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","USAP Approved"]},
{id:708,brand:"RAD", model:"Pro 16mm",                                 year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","USAP Approved","Control"]},
{id:709,brand:"RAD", model:"Elite 14mm",                               year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Power","New"]},

// ─── ASTES SPORTS ─────────────────────────────────────────────────────────────
{id:715,brand:"Astes Sports", model:"Engineer Max 16mm",               year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["New","Mid-range"]},
{id:716,brand:"Astes Sports", model:"Engineer Pro 14mm",               year:2025, surface:"Carbon Fiber",  shape:"Standard",  tags:["New","Power"]},

// ─── KOMODO ──────────────────────────────────────────────────────────────────
{id:722,brand:"Komodo", model:"Furi Gen 3 14mm",                       year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Gen-3","Spin","Control","New"]},
{id:723,brand:"Komodo", model:"Furi Gen 3 16mm",                       year:2025, surface:"T700 Carbon",   shape:"Standard",  tags:["Gen-3","Control","New"]},

// ─── MISCELLANEOUS / OTHER NOTABLE BRANDS ────────────────────────────────────
{id:729,brand:"Electrum", model:"Model E Joola Collab 14mm",           year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Pro","Limited","New"]},
{id:730,brand:"Niupipo", model:"Explorer Pro",                         year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Value","Popular","Budget"]},
{id:731,brand:"Niupipo", model:"MG16 Pro",                             year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Value","Budget"]},
{id:732,brand:"Amazin' Aces", model:"Classic",                         year:2020, surface:"Graphite",      shape:"Standard",  tags:["Beginner","Amazon","Value"]},
{id:733,brand:"Amazin' Aces", model:"Pro Series",                      year:2022, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","Value"]},
{id:734,brand:"Baddle", model:"Ballistic Carbon",                      year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","Value"]},
{id:735,brand:"Baddle", model:"Pursuit 14mm",                          year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","New"]},
{id:736,brand:"Rokne", model:"Bolt Carbon 14mm",                       year:2023, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range"]},
{id:737,brand:"Rokne", model:"Bolt 16mm",                              year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","Control","New"]},
{id:738,brand:"DROP SHOT", model:"Bastion Carbon 14mm",                year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Mid-range","New"]},
{id:739,brand:"Nettie", model:"Williams 14mm",                         year:2024, surface:"Carbon Fiber",  shape:"Standard",  tags:["Women's","Mid-range","New"]},
];

// ─── BRAND LIST for dropdowns ──────────────────────────────────────────────
const BRANDS = [
  ...new Set(PADDLES.map(p => p.brand)),
  "ACE","Appealing","Bison","Body Helix","Catapult","Drop Shot",
  "Empire","GetProQuik","Kiwi Labs","Lacoste","Li Ning","OWL",
  "PCKL","Pello","Rhone","STIGA","Thompson","Xenon","XSPAK","Other"
].sort((a, b) => a.localeCompare(b));
