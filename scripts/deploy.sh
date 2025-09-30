#!/bin/bash
set -euo pipefail

echo "== 🚀 Starting TeamStation AI Deploy =="

# 1. Clean environment
rm -rf node_modules .next out
echo "✅ Cleaned old build artifacts"

# 2. Install exact deps
npm ci
echo "✅ Installed dependencies with lockfile"

# 3. Typecheck + lint (optional strict mode)
if [ "${STRICT:-0}" = "1" ]; then
  npm run typecheck
  npm run lint
fi

# 4. Build & export static files
npm run export
echo "✅ Static export complete"

# 5. Ensure /out exists
[ -d out ] || { echo "❌ Export failed: out directory not found"; exit 1; }

# 6. Deploy to Firebase Hosting
firebase deploy --only hosting --non-interactive
echo "✅ Deployment to Firebase Hosting finished successfully"

echo "== 🎉 All Done =="
