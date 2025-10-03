
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "src", "app");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (p.endsWith(".tsx") || p.endsWith(".jsx")) out.push(p);
  }
  return out;
}

function isStaticRoute(filePath) {
  const parts = path.dirname(filePath).split(path.sep);
  return !parts.some((seg) => seg.startsWith("[") && seg.endsWith("]"));
}

function content(file) {
  return fs.readFileSync(file, "utf8");
}

function fail(msg) {
  console.error("❌ Preflight:", msg);
  process.exit(1);
}

// 1) themeColor inside metadata
function checkThemeColorInMetadata(file) {
  const c = content(file);
  if (c.includes("export const metadata") && c.match(/themeColor\s*:/)) {
    fail(`themeColor found in metadata export: ${file}. Move it to 'export const viewport'.`);
  }
}

// 2) static routes using params
function checkStaticParams(file) {
  if (!isStaticRoute(file)) return;
  const c = content(file);
  const usesParams =
    /\bfunction\s+\w+\s*\(\s*\{\s*params\s*:/.test(c) ||
    /\(\s*\{\s*params\s*\}\s*:\s*\{/.test(c) ||
    /\bparams\./.test(c);
  if (usesParams) {
    fail(`Static route uses 'params': ${file}. Remove from signature and usage.`);
  }
}

// 3) client components must have 'use client' AND default export
function checkClientComponents(file) {
  const c = content(file);
  if (c.startsWith("'use client'") || c.startsWith('"use client"')) {
    if (!/\bexport\s+default\b/.test(c)) {
      fail(`Client component missing default export: ${file}`);
    }
  }
}

// 4) layout must have metadataBase in metadata and themeColor in viewport
function checkLayout() {
  const candidates = ["layout.tsx", "layout.jsx"].map((f) => path.join(APP, f));
  const layout = candidates.find((f) => fs.existsSync(f));
  if (!layout) return; // skip if non-standard
  const c = content(layout);
  if (!/export\s+const\s+metadata/.test(c) || !/metadataBase\s*:\s*new URL\(/.test(c)) {
    fail(`Root layout missing metadataBase in metadata: ${layout}`);
  }
  if (/themeColor\s*:/.test(c) && /export\s+const\s+metadata/.test(c)) {
    fail(`Root layout has themeColor inside metadata (belongs in viewport): ${layout}`);
  }
  if (!/export\s+const\s+viewport\s*=/.test(c)) {
    fail(`Root layout missing 'export const viewport = { themeColor: ... }': ${layout}`);
  }
}

console.log("🔎 Running preflight checks...");
checkLayout();
for (const file of walk(APP)) {
  checkThemeColorInMetadata(file);
  checkStaticParams(file);
  checkClientComponents(file);
}
console.log("✅ Preflight checks passed.");
