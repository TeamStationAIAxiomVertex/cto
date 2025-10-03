
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const issues = [];
const warn = (msg) => console.warn(`\x1b[33m⚠️  ${msg}\x1b[0m`);
const fail = (msg) => issues.push(`\x1b[31m❌ ${msg}\x1b[0m`);
const exists = (f) => fs.existsSync(f);
const content = (f) => fs.readFileSync(f, 'utf8');

function ensureFile(file, data) {
  if (!exists(file)) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, data, 'utf8');
    console.log(`✓ Created shim: ${path.relative(ROOT, file)}`);
  }
}

// --- self-heal imports for adapters / reviewers ---
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

// Ensure shims exist (idempotent)
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


if (issues.length) {
    console.error(`\nFound ${issues.length} preflight issue(s):\n`);
    issues.forEach(msg => console.error(msg));
    process.exit(1);
} else {
    console.log("✅ Preflight checks passed.");
}
