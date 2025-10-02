import fs from "fs";
import path from "path";
const root = process.cwd();
const cjsConfig = path.join(root, "next.config.cjs");
const jsConfig = path.join(root, "next.config.js");
const mjsConfig = path.join(root, "next.config.mjs");
[jsConfig, mjsConfig].forEach(file => {
  if (fs.existsSync(file)) {
    console.warn(`⚠️ Removing rogue config: ${file}`);
    fs.rmSync(file);
  }
});
if (!fs.existsSync(cjsConfig)) {
  console.warn("⚠️ Restoring safe next.config.cjs");
  fs.writeFileSync(cjsConfig, `
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" }
    ]
  }
};
module.exports = config;
`.trim() + "\n");
}
