// scripts/preflight.cjs
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "src", "app");

function exists(file) {
  return fs.existsSync(file);
}

function content(file) {
  return fs.readFileSync(file, "utf8");
}

function fail(msg) {
  console.error("❌ Preflight:", msg);
  process.exit(1);
}

function warn(msg) {
    console.warn("⚠️ Preflight:", msg);
}

function ensureFile(file, fileContent) {
    if (!exists(file)) {
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, fileContent, 'utf8');
        console.log(`✓ Created missing file: ${path.relative(ROOT, file)}`);
    }
}

function rewrite(file, pairs) {
  if (!exists(file)) return;
  const src = content(file);
  let out = src, changed = false;
  for (const [from, to] of pairs) {
    if (src.includes(from)) { out = out.split(from).join(to); changed = true; }
  }
  if (changed) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, out, 'utf8');
    console.log(`🛠  Rewrote imports in ${path.relative(ROOT, file)}`);
  }
}

console.log("🔎 Running preflight checks...");

// --- self-heal imports for adapters / reviewers ---
ensureFile(path.join(ROOT, 'src', 'providers', 'app-providers.tsx'),
`'use client';
import React from 'react';
export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`);

ensureFile(path.join(ROOT, 'src', 'components', 'seo', 'SeoSafeImage.tsx'),
`'use client';
import Image, { ImageProps } from 'next/image';
export default function SeoSafeImage(props: ImageProps & { alt?: string }) {
  const { alt = '', ...rest } = props as ImageProps;
  return <Image alt={alt} {...rest} />;
}
`);

// Force alias imports so relative depth never breaks again
rewrite(path.join(ROOT, 'src', 'app', 'layout.tsx'), [
  ["../providers/app-providers", "@/providers/app-providers"]
]);
rewrite(path.join(ROOT, 'src', 'app', 'case-studies', '[slug]', 'page.tsx'), [
  ["../../../components/seo/SeoSafeImage", "@/components/seo/SeoSafeImage"]
]);

// Validate tsconfig alias
(function checkAliasesFlexible() {
  const tsconfigPath = path.join(ROOT, 'tsconfig.json');
  if (!exists(tsconfigPath)) return warn('tsconfig.json not found; alias check skipped.');
  const raw = content(tsconfigPath).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');
  let ts; try { ts = JSON.parse(raw); } catch { return fail('tsconfig.json is not valid JSON.'); }
  const co = ts.compilerOptions || {};
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

console.log("✅ Preflight checks passed.");
