// scripts/preflight.cjs
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "src", "app");

function fail(msg) { console.error('❌ Preflight:', msg); process.exit(1); }
function warn(msg) { console.warn('⚠️ Preflight Warning:', msg); }
function ok(msg)   { console.log('✅', msg); }
function content(f){ return fs.readFileSync(f, 'utf8'); }
function exists(p) { return fs.existsSync(p); }

// --- SANITIZE TSCONFIG (BOM, comments, trailing commas) ----------------------
function sanitizeTsconfig() {
  const tsconfigPath = path.join(ROOT, 'tsconfig.json');
  if (!exists(tsconfigPath)) {
    warn(`tsconfig.json not found at ${tsconfigPath}. Skipping tsconfig checks.`);
    return;
  }
  const original = content(tsconfigPath);
  let raw = original;
  // Remove UTF-8 BOM
  raw = raw.replace(/^\uFEFF/, '');
  // Strip comments
  raw = raw.replace(/\/\*[\s\S]*?\*\//g, '');
  raw = raw.replace(/(^|[^\:])\/\/.*$/gm, '$1');
  // Remove trailing commas before } or ]
  raw = raw.replace(/,\s*(?=[}\]])/g, '');
  // Normalize newlines & trim
  raw = raw.replace(/\r\n/g, '\n').trim();
  try {
    JSON.parse(raw);
  } catch (e) {
    fail(`tsconfig.json is not valid JSON even after sanitizing: ${e.message}`);
  }
  if (raw !== original) {
    fs.writeFileSync(tsconfigPath, raw + '\n', 'utf8');
    console.log('🩹 Preflight: sanitized tsconfig.json (BOM/comments/trailing commas removed).');
  } else {
    console.log('✅ Preflight: tsconfig.json already valid.');
  }
}

sanitizeTsconfig();

function walk(dir, out = []) {
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

// 1) themeColor inside metadata
function checkThemeColorInMetadata(file) {
  const c = content(file);
  if (c.includes("export const metadata") && /themeColor\s*:/.test(c)) {
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
  if (c.startsWith("'use client'") || c.startsWith("\"use client\"")) {
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
  if (/export\s+const\s+metadata[\s\S]*themeColor\s*:/.test(c)) {
    fail(`Root layout has themeColor inside metadata (belongs in viewport): ${layout}`);
  }
  if (!/export\s+const\s+viewport\s*=/.test(c)) {
    fail(`Root layout missing 'export const viewport = { themeColor: ... }': ${layout}`);
  }
}

// IMPORTANT: Do NOT rewrite imports under src/app/** — our repo guardrail
// (ensure-required-files.js) forbids "@/..." there. Leave app/* imports relative.
// We still allow "@/..." elsewhere in the repo.

// Validate tsconfig alias
(function checkAliasesFlexible() {
  const tsconfigPath = path.join(ROOT, 'tsconfig.json');
  if (!exists(tsconfigPath)) return warn('tsconfig.json not found; alias check skipped.');
  // After sanitizeTsconfig(), this should parse cleanly.
  let ts; try { ts = JSON.parse(content(tsconfigPath)); }
  catch (e) { return fail(`tsconfig.json is not valid JSON: ${e.message}`); }
  const co = ts && ts.compilerOptions || {};
  const bu = co.baseUrl;
  const p  = co.paths || {};
  const okA = bu === 'src' && Array.isArray(p['@/*']) && p['@/*'].some(x => x === '*');
  const okB = bu === '.'   && Array.isArray(p['@/*']) && p['@/*'].some(x => x === 'src/*');
  if (!okA && !okB) {
    fail(`Alias config must be either:
 - baseUrl:"src", paths:{ "@/*": ["*"] }  OR
 - baseUrl:".",  paths:{ "@/*": ["src/*"] }.
Got baseUrl:${JSON.stringify(bu)} paths:${JSON.stringify(p['@/*'])}`);
  }
})();


console.log("🔎 Running preflight checks...");
checkLayout();
for (const file of walk(APP)) {
  checkThemeColorInMetadata(file);
  checkStaticParams(file);
  checkClientComponents(file);
}
console.log("✅ Preflight checks passed.");
