
import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/app");
const exts = new Set([".tsx", ".ts"]);

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(p);
    } else if (exts.has(path.extname(p))) {
      yield p;
    }
  }
}

for (const file of walk(ROOT)) {
  try {
    let code = fs.readFileSync(file, "utf8");
    // This regex is safer and targets lines that are only `---`
    const cleaned = code.replace(/^---\s*$/gm, ""); 
    if (code !== cleaned) {
      fs.writeFileSync(file, cleaned, "utf8");
      console.log(`🧹 Cleaned ${file}`);
    }
  } catch (e) {
    console.error(`Could not scrub ${file}:`, e);
  }
}
