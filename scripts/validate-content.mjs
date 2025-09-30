
import fs from "node:fs";
import path from "node:path";

// Directories to scan
const CONTENT_DIRS = ["src/app", "content"];

let failed = false;

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) {
      scanDir(p);
    } else if (/\.(mdx?|tsx?)$/.test(f.name)) {
      const txt = fs.readFileSync(p, "utf8");

      // Heuristic checks for content quality. These are intentionally loose.
      // The goal is to catch blatant copy-paste errors or major omissions,
      // not to be a perfect style guide.

      // --- NCLA Humanizer heuristics ---
      // Looks for em-dashes, ellipses, or parenthetical asides which are common in the NCLA voice.
      if (!/—no, better:|…|—|\(/.test(txt) && txt.length > 500) {
        console.error(`❌ Missing NCLA Humanizer markers in: ${p}`);
        failed = true;
      }

      // --- Sandler PSP framing ---
      // Checks if pages that SHOULD have PSP structure are missing it.
      // This is a very loose check and path-dependent.
      if (p.includes('/comparisons/') || p.includes('/playbook/')) {
        const hasPSP =
          /Pain/i.test(txt) &&
          /Stake/i.test(txt) &&
          (/Prescription/i.test(txt) || /Solution/i.test(txt)) &&
          /Proof/i.test(txt);
        if (!hasPSP) {
          console.error(`❌ Missing Sandler PSP framing in: ${p}`);
          failed = true;
        }
      }

      // --- Internal links check ---
      // Check for a reasonable number of internal links on content-heavy pages.
      const linkCount = (txt.match(/<Link href="\//g) || []).length;
      if (txt.length > 1500 && linkCount < 3 && !p.includes('/layout.tsx')) {
        console.error(`❌ Less than 3 internal links in: ${p}`);
        failed = true;
      }
    }
  }
}

for (const d of CONTENT_DIRS) scanDir(d);

if (failed) {
  console.error("🚫 Validation failed — fix content issues before publishing.");
  process.exit(1);
} else {
  console.log("✅ All content passed NCLA + Sandler + SEO checks.");
}
