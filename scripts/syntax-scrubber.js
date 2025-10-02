
import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/app");
const exts = new Set([".tsx"]);

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (exts.has(path.extname(e.name))) yield p;
  }
}

for (const file of walk(ROOT)) {
  let txt = fs.readFileSync(file, "utf8");
  txt = txt.replace(/^---.*$/gm, "");   // kill stray --- lines
  txt = txt.replace(/^###.*$/gm, "");   // kill ### headings inside TSX
  txt = txt.replace(/```[a-z]*\n/g, ""); // remove code fences
  txt = txt.replace(/```/g, "");
  fs.writeFileSync(file, txt, "utf8");
  console.log("✅ Scrubbed:", file);
}
