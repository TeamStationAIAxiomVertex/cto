import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/app");
const exts = new Set([".tsx"]);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (exts.has(path.extname(full))) yield full;
  }
}

for (const file of walk(ROOT)) {
  let src = fs.readFileSync(file, "utf8");
  let cleaned = src
    // Strip raw Markdown headings like ### Foo
    .replace(/^#{1,6}\s.*$/gm, "")
    // Strip horizontal rules ---
    .replace(/^\s*---\s*$/gm, "");
  if (src !== cleaned) {
    console.log(`Scrubbed: ${file}`);
    fs.writeFileSync(file, cleaned, "utf8");
  }
}