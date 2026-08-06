dataSetVersion = "custom"; // Define the custom dataset
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group Type",
    key: "type",
    tooltip: "Sort by group type",
    checked: false,
    sub: [
      { key: "kpop-boy", name: "K-Pop Boy Groups", checked: false },
      { key: "kpop-girl", name: "K-Pop Girl Groups", checked: true },
      { key: "global", name: "Global / Other Groups", checked: true }
    ]
  },
  {
    name: "Select specific groups to sort",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
      // K-Pop Boy Groups
      { name: "BTS", key: "BTS", type: ["kpop-boy"], tooltip: "Debuted 2013" },
      // K-Pop Girl Groups 
      { name: "NewJeans", key: "NewJeans", type: ["kpop-girl"], tooltip: "Debuted 2022" },
      { name: "aespa", key: "aespa", type: ["kpop-girl"], tooltip: "Debuted 2020" },
      // Global / Other
      { name: "XG", key: "XG", type: ["global"], tooltip: "Xtraordinary Girls, Global Group" },
      { name: "KATSEYE", key: "KATSEYE", type: ["global"], tooltip: "HYBE x Geffen Global Girl Group" },
      { name: "GIRLSET", key: "GIRLSET", type: ["global"], tooltip: "Custom Group" }
    ]
  }
];

// Placeholder image URL generator for testing
const getImg = (name) => `https://placehold.co/300x300/e2e8f0/1e293b?text=${encodeURIComponent(name)}`;

dataSet[dataSetVersion].characterData = [
  // --- XG ---
  { name: "XG Jurin", img: getImg("Jurin"), opts: { group: ["XG"], type: ["global"] } },
  { name: "XG Chisa", img: getImg("Chisa"), opts: { group: ["XG"], type: ["global"] } },
  { name: "XG Hinata", img: getImg("Hinata"), opts: { group: ["XG"], type: ["global"] } },
  { name: "XG Juria", img: getImg("Juria"), opts: { group: ["XG"], type: ["global"] } },
  { name: "XG Cocona", img: getImg("Cocona"), opts: { group: ["XG"], type: ["global"] } },
  { name: "XG Maya", img: getImg("Maya"), opts: { group: ["XG"], type: ["global"] } },
  { name: "XG Harvey", img: getImg("Harvey"), opts: { group: ["XG"], type: ["global"] } },

  // --- KATSEYE ---
  { name: "KATSEYE Sophia", img: getImg("Sophia"), opts: { group: ["KATSEYE"], type: ["global"] } },
  { name: "KATSEYE Manon", img: getImg("Manon"), opts: { group: ["KATSEYE"], type: ["global"] } },
  { name: "KATSEYE Daniela", img: getImg("Daniela"), opts: { group: ["KATSEYE"], type: ["global"] } },
  { name: "KATSEYE Lara", img: getImg("Lara"), opts: { group: ["KATSEYE"], type: ["global"] } },
  { name: "KATSEYE Megan", img: getImg("Megan"), opts: { group: ["KATSEYE"], type: ["global"] } },
  { name: "KATSEYE Yoonchae", img: getImg("Yoonchae"), opts: { group: ["KATSEYE"], type: ["global"] } },

  // --- GIRLSET ---
  // (Assuming names, placeholder)
  { name: "GIRLSET Member 1", img: getImg("Member 1"), opts: { group: ["GIRLSET"], type: ["global"] } },
  { name: "GIRLSET Member 2", img: getImg("Member 2"), opts: { group: ["GIRLSET"], type: ["global"] } },
  { name: "GIRLSET Member 3", img: getImg("Member 3"), opts: { group: ["GIRLSET"], type: ["global"] } },

  // --- NewJeans ---
  { name: "NewJeans Minji", img: getImg("Minji"), opts: { group: ["NewJeans"], type: ["kpop-girl"] } },
  { name: "NewJeans Hanni", img: getImg("Hanni"), opts: { group: ["NewJeans"], type: ["kpop-girl"] } },
  { name: "NewJeans Danielle", img: getImg("Danielle"), opts: { group: ["NewJeans"], type: ["kpop-girl"] } },
  { name: "NewJeans Haerin", img: getImg("Haerin"), opts: { group: ["NewJeans"], type: ["kpop-girl"] } },
  { name: "NewJeans Hyein", img: getImg("Hyein"), opts: { group: ["NewJeans"], type: ["kpop-girl"] } },

  // --- aespa ---
  { name: "aespa Karina", img: getImg("Karina"), opts: { group: ["aespa"], type: ["kpop-girl"] } },
  { name: "aespa Giselle", img: getImg("Giselle"), opts: { group: ["aespa"], type: ["kpop-girl"] } },
  { name: "aespa Winter", img: getImg("Winter"), opts: { group: ["aespa"], type: ["kpop-girl"] } },
  { name: "aespa Ningning", img: getImg("Ningning"), opts: { group: ["aespa"], type: ["kpop-girl"] } },

  // --- BTS ---
  { name: "BTS RM", img: getImg("RM"), opts: { group: ["BTS"], type: ["kpop-boy"] } },
  { name: "BTS Jin", img: getImg("Jin"), opts: { group: ["BTS"], type: ["kpop-boy"] } },
  { name: "BTS Suga", img: getImg("Suga"), opts: { group: ["BTS"], type: ["kpop-boy"] } },
  { name: "BTS J-Hope", img: getImg("J-Hope"), opts: { group: ["BTS"], type: ["kpop-boy"] } },
  { name: "BTS Jimin", img: getImg("Jimin"), opts: { group: ["BTS"], type: ["kpop-boy"] } },
  { name: "BTS V", img: getImg("V"), opts: { group: ["BTS"], type: ["kpop-boy"] } },
  { name: "BTS Jungkook", img: getImg("Jungkook"), opts: { group: ["BTS"], type: ["kpop-boy"] } },
];
