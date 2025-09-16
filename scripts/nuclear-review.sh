#!/usr/bin/env bash
set -euo pipefail

echo "▶ Nuclear Review starting…"

# 1) Clean & env sanity
rm -rf .next out
node -v
npm -v

# 2) Static guards: boundary & imports
echo "▶ Boundary checks…"
# Only allow 'use client' in whitelisted paths
# (adjust whitelist as needed)
WHITELIST='^src/components/client/|^src/app/.*/client(\.|/)|^src/components/ui/.*\.client\.tsx$'
if rg -n --hidden --no-messages "^'use client'|^\"use client\"" src | awk -F: '{print $1}' | sort -u | grep -vE "$WHITELIST"; then
  echo "✖ Found 'use client' outside allowed locations. Move it to a client island."; exit 1
fi

# No client-only islands imported statically by server components
echo "▶ Disallow static imports from client islands in server code…"
if rg -n --hidden --no-messages "from ['\"]@/components/client/" src | grep -vE "\.client\.tsx"; then
  echo "✖ Server file statically imports a client island. Use dynamic(() => import(...), { ssr:false }) or pass as child."; exit 1
fi

# Tooltip import correctness
echo "▶ Tooltip import guards…"
if rg -n --hidden --no-messages "from ['\"]@/components/Tooltip['\"]" src; then
  echo "✖ Import from '@/components/Tooltip' found. Use '@/components/ui/tooltip' only."; exit 1
fi

# Duplicate or shadowed constants (common crashers)
echo "▶ Shadow/duplication sanity checks…"
rg -n --hidden --no-messages "const countries\s*=" src/components && { echo "✖ Inline countries const inside components. Import from '@/lib/countries'."; exit 1; } || true

# 3) Types & lint (strict)
echo "▶ Typecheck & lint…"
npm run typecheck
npm run lint

# 4) Build & export
echo "▶ Next.js build (strict) & export…"
npm run build:strict
npm run export

# 5) Link integrity (out/), redirects existence, robots sanity
echo "▶ Link & redirect checks…"
npx --yes linkinator out --skip "mailto:,tel:,^/api" --recurse

# Ensure firebase.json has static redirects for a static export
jq '.hosting.redirects' firebase.json >/dev/null || { echo "✖ firebase.json missing hosting.redirects block."; exit 1; }

# Legal pages: confirm noindex
echo "▶ robots noindex for legal pages…"
for f in out/privacy-policy/index.html out/terms-of-service/index.html; do
  test -f "$f" || continue
  rg -n --no-messages "noindex" "$f" >/dev/null || { echo "✖ $f missing noindex."; exit 1; }
done

# 6) Bundle budget smoke (report only; fail if huge)
echo "▶ Bundle size budget…"
TOTAL_KB=$(du -sk out | awk '{print $1}')
echo "Total export size (KB): $TOTAL_KB"
MAX_KB=25000 # ~25MB export budget; tune for your site
if [ "$TOTAL_KB" -gt "$MAX_KB" ]; then
  echo "✖ Export too large ($TOTAL_KB KB > $MAX_KB KB). Check tree-shaking, images, or bundles."; exit 1
fi

echo "✔ Nuclear Review passed."
