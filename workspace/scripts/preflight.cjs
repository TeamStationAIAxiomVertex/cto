
// scripts/preflight.cjs
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP  = path.join(ROOT, "src", "app");

function fail(msg) { console.error('❌ Preflight:', msg); process.exit(1); }
function warn(msg) { console.warn('⚠️ Preflight Warning:', msg); }
function ok(msg)   { console.log('✅', msg); }
function content(f){ return fs.readFileSync(f, 'utf8'); }
function exists(p) { return fs.existsSync(p); }

// --- SANITIZE TSCONFIG (BOM, comments, trailing commas) ----------------------
function stripJsoncAndTrailingCommas(input) {
  // 1) remove BOM
  const s = input.replace(/^\uFEFF/, '');
  // 2) strip comments safely (respect strings/escapes)
  let out = '';
  let i = 0, inStr = false, quote = '', esc = false, inLine = false, inBlock = false;
  while (i < s.length) {
    const ch = s[i], next = s[i + 1];
    if (inLine) { if (ch === '\n') { inLine = false; out += ch; } i++; continue; }
    if (inBlock) { if (ch === '*' && next === '/') { inBlock = false; i += 2; } else { i++; } continue; }
    if (inStr) {
      out += ch;
      if (esc) { esc = false; }
      else if (ch === '\\') { esc = true; }
      else if (ch === quote) { inStr = false; }
      i++; continue;
    }
    if (ch === '"' || ch === "'") { inStr = true; quote = ch; out += ch; i++; continue; }
    if (ch === '/' && next === '/') { inLine = true; i += 2; continue; }
    if (ch === '/' && next === '*') { inBlock = true; i += 2; continue; }
    out += ch; i++;
  }
  // 3) remove trailing commas (only outside strings)
  let out2 = '';
  inStr = false; esc = false; quote = '';
  for (i = 0; i < out.length; i++) {
    const c = out[i];
    if (inStr) {
      out2 += c;
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === quote) inStr = false;
      continue;
    }
    if (c === '"' || c === "'") { inStr = true; quote = c; out2 += c; continue; }
    if (c === ',') {
      let j = i + 1;
      while (j < out.length && /\s/.test(out[j])) j++;
      const n = out[j];
      if (n === '}' || n === ']') {
        // skip comma that directly precedes a closing brace/bracket
        continue;
      }
    }
    out2 += c;
  }
  return out2.replace(/\r\n/g, '\n').trim();
}

function sanitizeTsconfig() {
  const tsconfigPath = path.join(ROOT, 'tsconfig.json');
  if (!exists(tsconfigPath)) {
    warn(`tsconfig.json not found at ${tsconfigPath}. Skipping tsconfig checks.`);
    return;
  }
  const original = content(tsconfigPath);
  const sanitized = stripJsoncAndTrailingCommas(original);
  try {
    JSON.parse(sanitized);
  } catch (e) {
    fail(`tsconfig.json is not valid JSON even after sanitizing: ${e.message}`);
  }
  if (sanitized !== original) {
    fs.writeFileSync(tsconfigPath, sanitized + '\n', 'utf8');
    console.log('🩹 Preflight: sanitized tsconfig.json (BOM/comments/trailing commas removed).');
  } else {
    console.log('✅ Preflight: tsconfig.json already valid.');
  }
}

sanitizeTsconfig();

function walk(dir, out = []) {
  if (!exists(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith('.tsx') || p.endsWith('.jsx')) out.push(p);
  }
  return out;
}

function ensureFile(p, content) {
  ensureDir(path.dirname(p));
  if (!exists(p)) write(p, content);
}

function ensureDir(p) {
  if (!exists(p)) fs.mkdirSync(p, { recursive: true });
}

function write(p, s) {
  fs.writeFileSync(p, s);
}

// Ensure shims exist (idempotent)
ensureFile(
  path.join(ROOT, 'src', 'providers', 'app-providers.tsx'),
`'use client';
import React from 'react';
export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`
);

ensureFile(
  path.join(ROOT, 'src', 'components', 'seo', 'SeoSafeImage.tsx'),
`'use client';
import Image, { ImageProps } from 'next/image';
export default function SeoSafeImage(props: ImageProps & { alt?: string }) {
  const { alt = '', ...rest } = props as ImageProps;
  return <Image alt={alt} {...rest} />;
}
`
);


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

console.log('🔎 Running preflight checks...');
checkLayout();
for (const file of walk(APP)) {
  checkThemeColorInMetadata(file);
  checkStaticParams(file);
  checkClientComponents(file);
}
ok('Preflight checks passed.');
