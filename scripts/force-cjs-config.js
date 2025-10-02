// scripts/force-cjs-config.js
import fs from "fs";
import path from "path";

const root = process.cwd();
const cjsConfig = path.join(root, "next.config.cjs");
const jsConfig = path.join(root, "next.config.js");
const mjsConfig = path.join(root, "next.config.mjs");

// If Firebase Studio tries to overwrite next.config.js, nuke it.
if (fs.existsSync(jsConfig)) {
  console.warn("⚠️  Detected next.config.js — removing to enforce .cjs config");
  fs.rmSync(jsConfig);
}

// If Firebase Studio tries to overwrite next.config.mjs, nuke it too.
if (fs.existsSync(mjsConfig)) {
  console.warn("⚠️  Detected next.config.mjs — removing to enforce .cjs config");
  fs.rmSync(mjsConfig);
}

// If next.config.cjs doesn’t exist, restore it.
if (!fs.existsSync(cjsConfig)) {
  console.warn("⚠️  Missing next.config.cjs — recreating default safe config");
  fs.writeFileSync(
    cjsConfig,
    `
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
export default config;
    `.trim() + "\n"
  );
}
