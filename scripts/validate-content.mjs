import fs from "fs";
import path from "path";

const legacy = path.join(process.cwd(), "src/app/sitemap.ts");
if (fs.existsSync(legacy)) {
  // Optional: lint or warn about legacy file presence
  console.warn("⚠️  Detected legacy src/app/sitemap.ts (unused with route handlers). Consider removing.");
}

// Add any other content checks you need; keep *all* fs ops behind existsSync guards.
console.log("✅ validate-content: ok");
