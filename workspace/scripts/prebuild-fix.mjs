// scripts/prebuild-fix.mjs
import fs from "node:fs";
import path from "node:path";

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith("page.tsx")) yield p;
  }
}

// --- Markdown → JSX Fixer ---
function fixContent(content) {
  return content
    .replace(/^\s*---\s*$/gm, "<hr />")
    .replace(/^\s*### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^\s*## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^\s*# (.+)$/gm, "<h1>$1</h1>");
}

// --- SEO Soft Validator (warn only, no fail) ---
function validateSEO(file, content) {
  const warnings = [];
  if (!/export\s+const\s+metadata/.test(content)) {
    warnings.push("⚠️ Missing metadata export");
  }
  if (!/<h1>/.test(content)) {
    warnings.push("⚠️ Missing <h1>");
  }
  const linkCount = (content.match(/<Link /g) || []).length;
  if (linkCount < 6) {
    warnings.push(`⚠️ Only ${linkCount} internal links (need ≥6)`);
  }

  if (warnings.length > 0) {
    console.warn(`\nSEO warnings in ${file}:\n${warnings.join("\n")}\n`);
  }
}

const root = path.resolve("src/app");
for (const file of walk(root)) {
  let content = fs.readFileSync(file, "utf8");
  const fixed = fixContent(content);
  if (fixed !== content) {
    fs.writeFileSync(file, fixed, "utf8");
    console.log(`🛠️ Fixed Markdown in ${file}`);
  }
  validateSEO(file, fixed);
}

// --- Health check endpoint ---
const healthz = "src/app/healthz/route.ts";
fs.mkdirSync(path.dirname(healthz), { recursive: true });
fs.writeFileSync(
  healthz,
  `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
`,
  "utf8"
);
console.log("✅ Ensured healthz endpoint");
