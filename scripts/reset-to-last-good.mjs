#!/usr/bin/env node
/**
 * Reset Firebase Studio app to last working state.
 * This script copies backup snapshot files from .studio-backups/ into project root.
 */

import fs from "fs";
import path from "path";

const BACKUP_DIR = path.resolve(".studio-backups");
const PROJECT_ROOT = path.resolve(".");

function restoreFiles() {
  if (!fs.existsSync(BACKUP_DIR)) {
    console.error("❌ No backups found. Have you deployed successfully at least once?");
    process.exit(1);
  }

  const files = fs.readdirSync(BACKUP_DIR);
  if (files.length === 0) {
    console.error("❌ Backup folder is empty.");
    process.exit(1);
  }

  for (const file of files) {
    const src = path.join(BACKUP_DIR, file);
    const dest = path.join(PROJECT_ROOT, file);

    fs.copyFileSync(src, dest);
    console.log(`✅ Restored ${file}`);
  }

  console.log("\n🚀 Rollback complete. Run `npm run build:production` to redeploy.");
}

restoreFiles();
