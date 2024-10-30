const fs = require("fs");
const path = require("path");

const iconsDir = path.resolve(__dirname, "../assets/icons/weatherIconsPNG");
const iconMap = {};

fs.readdirSync(iconsDir).forEach(file => {
  const iconName = path.parse(file).name; // Extract name without extension
  iconMap[iconName] = `require("../assets/icons/weatherIconsPNG/${file}")`;
});

// Write to iconMap.js
const outputPath = path.resolve(__dirname, "../utils/iconMap.js");
const iconMapContent = `export const iconMap = { ${Object.entries(iconMap).map(
  ([key, value]) => `\n  "${key}": ${value}`
)}\n};\n`;

fs.writeFileSync(outputPath, iconMapContent, "utf8");
console.log("Icon map generated successfully.");