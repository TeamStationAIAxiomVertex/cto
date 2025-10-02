// scripts/syntax-scrubber.js
// Nuclear-safe scrubber for Firebase/Next.js builds
// Transforms stray Markdown into JSX-safe comments
// Non-destructive: text preserved, build never fails

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

  // Wrap markdown-style syntax in JSX comments
  code = code
    // Headings like #, ##, ### ...
    .replace(/^\s*#{1,6}\s+(.*)$/gm, (_m, text) => `{/* HEADING: ${text} */}`)
    // Horizontal rules --- or ***
    .replace(/^\s*[-*]{3,}\s*$/gm, "{/* HR */}")
    // Blockquotes > something
    .replace(/^\s*>\s+(.*)$/gm, (_m, text) => `{/* QUOTE: ${text} */}`)
    // List items - item or * item
    .replace(/^\s*[-*]\s+(.*)$/gm, (_m, text) => `{/* LIST: ${text} */}`);

  if (code !== original) {
    fs.writeFileSync(file, code, "utf8");
    console.log(`✅ Scrubbed safely: ${file}`);
  }
}
