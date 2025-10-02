import fs from "fs";
import path from "path";

const root = path.resolve("src");
const exts = new Set([".tsx", ".ts"]);
const regex = /^\s*---.*$|^\s*###.*$/gm; // matches stray markdown delimiters

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (exts.has(path.extname(entry.name))) yield p;
  }
}

for (const file of walk(root)) {
  try {
      const text = fs.readFileSync(file, "utf8");
      const cleaned = text.replace(regex, "");
      if (text !== cleaned) {
        fs.writeFileSync(file, cleaned);
        console.log(`🧹 Cleaned ${file}`);
      }
  } catch (e) {
    console.error(`Could not scrub ${file}:`, e);
  }
}
console.log("✅ Scrub complete");
