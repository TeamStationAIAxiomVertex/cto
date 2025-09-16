## Nuclear Checklist (must all be ✅)
- [ ] `npm run nuclear` passes locally (typecheck, lint, build, export, link/robots checks)
- [ ] No `'use client'` added outside whitelisted paths
- [ ] No static imports from `@/components/client/*` in server files
- [ ] Tooltip imports use `@/components/ui/tooltip` (no legacy paths)
- [ ] Firebase redirects updated if new routes moved/renamed
- [ ] Lighthouse Mobile Perf >= 90 on preview (attach LHCI URL/screenshot)
