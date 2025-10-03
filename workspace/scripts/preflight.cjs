
// scripts/preflight.cjs
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const APP  = path.join(ROOT, 'src', 'app');

const exists  = p => fs.existsSync(p);
const read    = p => fs.readFileSync(p, 'utf8');
const write   = (p, s) => fs.writeFileSync(p, s);
const ensureDir = p => { if (!exists(p)) fs.mkdirSync(p, { recursive: true }); };
const fail    = msg => { console.error(`❌ Preflight: ${msg}`); process.exit(1); };
const warn    = msg => console.warn(`⚠️ Preflight Warning: ${msg}`);
const ok      = msg => console.log(`✅ ${msg}`);

function ensureFile(p, content) {
  ensureDir(path.dirname(p));
  if (!exists(p)) write(p, content);
}
function rewrite(p, search, replace) {
  if (!exists(p)) return;
  const before = read(p);
  const after = before.replace(search, replace);
  if (after !== before) {
    console.log(`🛠  Rewriting imports in ${path.relative(ROOT, p)}`);
    write(p, after);
  }
}
function walk(dir, out = []) {
  if (!exists(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith('.tsx') || p.endsWith('.jsx')) out.push(p);
  }
  return out;
}

console.log('🔎 Running preflight checks...');

// 0) ENV sanity
if (process.env.NODE_ENV !== 'production') {
  fail(`NODE_ENV must be "production" during build; got "${process.env.NODE_ENV || ''}"`);
}

// 1) Ensure shims exist (no-op if already present)
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

// 2) DE-ALIAS the two known files to satisfy ensure-required-files.js
rewrite(
  path.join(ROOT, 'src', 'app', 'layout.tsx'),
  /from\s+['"]@\/providers\/app-providers['"]/,
  `from '../providers/app-providers'`
);
rewrite(
  path.join(ROOT, 'src', 'app', 'case-studies', '[slug]', 'page.tsx'),
  /from\s+['"]@\/components\/seo\/SeoSafeImage['"]/,
  `from '../../../components/seo/SeoSafeImage'`
);

// 3) Alias config must be either:
//    A) baseUrl: "src", paths: { "@/*": ["*"] }
//    B) baseUrl: ".",   paths: { "@/*": ["src/*"] }
const tsconfigPath = path.join(ROOT, 'tsconfig.json');
if (!exists(tsconfigPath)) {
  warn('tsconfig.json not found; alias check skipped.');
} else {
  const raw = read(tsconfigPath).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  let ts; try { ts = JSON.parse(raw); } catch { fail('tsconfig.json is not valid JSON.'); }
  const co = ts.compilerOptions || {};
  const bu = co.baseUrl;
  const ps = (co.paths && co.paths['@/*']) || [];
  const okA = bu === 'src' && Array.isArray(ps) && ps.some(x => x === '*');
  const okB = bu === '.'   && Array.isArray(ps) && ps.some(x => x === 'src/*');
  if (!okA && !okB) {
    warn(`tsconfig alias not in known forms; continuing (repo build forbids "@/…" anyway).`);
  }
}

// 4) Root layout: metadataBase present, themeColor only in viewport
const layoutPath = path.join(APP, 'layout.tsx');
if (exists(layoutPath)) {
  const c = read(layoutPath);
  if (!/export\s+const\s+metadata/.test(c) || !/metadataBase:\s*new URL\(/.test(c)) {
    fail(`Root layout missing metadataBase in metadata: ${layoutPath}`);
  }
  if (/export\s+const\s+metadata[\s\S]*themeColor\s*:/.test(c)) {
    fail(`themeColor belongs in "export const viewport", not metadata: ${layoutPath}`);
  }
  if (!/export\s+const\s+viewport\s*=/.test(c)) {
    fail(`Root layout missing 'export const viewport = { themeColor: ... }': ${layoutPath}`);
  }
}

// 5) Static routes may not use params
for (const f of walk(APP)) {
  const dir = path.dirname(f);
  const isStatic = !dir.split(path.sep).some(seg => seg.startsWith('[') && seg.endsWith(']'));
  if (!isStatic) continue;
  const c = read(f);
  const usesParams =
    /\bfunction\s+\w+\s*\(\s*\{\s*params\s*:/.test(c) ||
    /\(\s*\{\s*params\s*\}\s*:\s*\{/.test(c) ||
    /\bparams\./.test(c);
  if (usesParams) fail(`Static route uses 'params': ${f}`);
}

console.log('✅ Preflight checks passed.');
