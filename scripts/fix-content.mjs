
// scripts/fix-content.mjs
import fs from "node:fs";
import path from "node:path";

const ROOTS = ["content", "src/app"];

const LINK_BLOCK = `
---

### Further Reading
- [CTO Playbook Hub](/playbook/hub)
- [Research Hub](/research/hub)
- [Hire Developers in Mexico](/hire/by-country/mexico)
`;

const SANDLER_BLOCK = `
---

## Pain
CTOs face hidden risks in cost, compliance, and velocity.

## Stakes
Without addressing these, budgets spiral and projects miss critical deadlines.

## Prescription
TeamStation AI delivers audit-ready compliance, Axiom Cortex™ cognitive vetting, and predictable TCO.

## Proof
40–60% lower TCO vs legacy models. Case studies: [Currance](/case-studies), [Parsable](/case-studies/parsable).
`;

function walk(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, cb);
    else if (entry.name.endsWith(".md") || entry.name === "page.tsx") cb(full);
  }
}

function processFile(file) {
  let text = fs.readFileSync(file, "utf8");
  let changed = false;

  // Count internal links
  const linkCount =
    (text.match(/href=\\"\\//g) || []).length +
    (text.match(/\\]\\(\\//g) || []).length;

  if (linkCount < 3) {
    text += LINK_BLOCK;
    changed = true;
  }

  // Ensure Sandler PSP framing for comparison & playbook pages
  if (!/## Pain/i.test(text) && /comparisons|playbook/.test(file)) {
    text += SANDLER_BLOCK;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, text, "utf8");
    console.log(`🔧 Fixed: ${file}`);
  }
}

// Run across roots
for (const root of ROOTS) {
  if (fs.existsSync(root)) walk(root, processFile);
}
