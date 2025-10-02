// scripts/syntax-scrubber.js
// Nuclear-safe scrubber: Prevents Firebase/Next.js build failures
// by transforming illegal markdown into JSX-safe comments.
// Non-destructive: content preserved, never deleted.

import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/app");
const exts = new Set([".tsx", ".ts"]);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (exts.has(path.extname(entry.name))) yield p;
  }
}

for (const file of walk(ROOT)) {
  let code = fs.readFileSync(file, "utf8");
  let original = code;

  // Transform illegal Markdown syntax into JSX-safe comments
  code = code
    // Headings like ### Something
    .replace(/^\s*#{1,6}\s+(.*)$/gm, (_m, text) => `{/* HEADING: ${text} */}`)
    // Horizontal rules ---
    .replace(/^\s*---+\s*$/gm, "{/* HR */}");

  if (code !== original) {
    fs.writeFileSync(file, code, "utf8");
    console.log(`✅ Scrubbed safely: ${file}`);
  }
}
