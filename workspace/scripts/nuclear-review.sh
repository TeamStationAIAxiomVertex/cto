#!/usr/bin/env bash
set -euo pipefail

echo "▶ Nuclear Review starting…"

# 0) Clean
rm -rf .next out

# 1) Boundary & import guards (pure grep + bash)
echo "▶ Checking 'use client' locations…"
# Grab files that declare 'use client'
mapfile -t UC_FILES < <(grep -RIl --include='*.{ts,tsx,js,jsx}' -e "^'use client'\|^\"use client\"" src || true)

WHITELIST_REGEX='^(src/components/client/|src/app/.+/client(\.|/)|src/components/ui/.+\.client\.tsx$)'
if ((${#UC_FILES[@]})); then
  BAD=()
  for f in "${UC_FILES[@]}"; do
    if [[ ! $f =~ $WHITELIST_REGEX ]]; then BAD+=("$f"); fi
  done
  if ((${#BAD[@]})); then
    echo "✖ 'use client' found outside allowed locations:"
    printf ' - %s\n' "${BAD[@]}"
    echo "Move client code into a client island (e.g. src/components/client/*)."
    exit 1
  fi
fi

echo "▶ Disallow static imports of client islands from server files…"
if grep -RIn --include='*.{ts,tsx}' "from ['\"]@/components/client/" src | grep -v "\.client\.tsx" >/dev/null 2>&1; then
  echo "✖ Server file statically imports a client island."
  echo "Use: dynamic(() => import('...'), { ssr:false }) or pass the island as a child."
  exit 1
fi

echo "▶ Tooltip import guards…"
if grep -RIn --include='*.{ts,tsx}' "from ['\"]@/components/Tooltip['\"]" src >/dev/null 2>&1; then
  echo "✖ Found legacy '@/components/Tooltip' import. Use '@/components/ui/tooltip'."
  exit 1
fi

echo "▶ Inline data dupes (common crashers)…"
if grep -RIn --include='*.{ts,tsx}' "const countries\s*=" src/components >/dev/null 2>&1; then
  echo "✖ Inline 'countries' detected in components. Import from '@/lib/countries'."
  exit 1
fi

# 2) Typecheck & lint (strict)
echo "▶ Typecheck & lint…"
npm run typecheck
npm run lint

echo "▶ Building (strict)…"
npm run build:strict

echo "▶ firebase.json rewrites presence…"
node -e "const f=require('fs');const j=JSON.parse(f.readFileSync('firebase.json','utf8')); if(!j.hosting||!Array.isArray(j.hosting.rewrites)) { throw new Error('firebase.json missing hosting.rewrites'); }"

echo "✔ Nuclear Review passed."
