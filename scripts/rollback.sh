
#!/bin/bash
set -euo pipefail

BASELINE_DIR="baseline-deploy"

if [ ! -d "$BASELINE_DIR" ]; then
  echo "❌ No baseline-deploy/ directory found. Cannot rollback."
  exit 1
fi

echo "⚡ Rolling back to last known good baseline..."

cp "$BASELINE_DIR/next.config.js" .
cp "$BASELINE_DIR/firebase.json" .
cp "$BASELINE_DIR/package.json" .

rm -rf node_modules .next
npm install
npm run build
firebase deploy --only hosting,apphosting

echo "✅ Rollback complete. Site restored from baseline."
