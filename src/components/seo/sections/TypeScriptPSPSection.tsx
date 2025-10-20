import Link from "next/link";
import PSPCards from "../PSPCards";
import { PainPoint } from "@/lib/tech";
import {
  ShieldCheck,
  Component,
  Workflow,
  TestTube2,
  Settings,
  Wallet,
  Search,
  AlertTriangle,
  GitBranch,
  Rocket,
} from "lucide-react";

export default function TypeScriptPSPSection() {
  const items: PainPoint[] = [
    {
      icon: ShieldCheck,
      problem: "Types Everywhere, Safety Nowhere",
      pain: "TypeScript in name only—any, skipLibCheck, and leaky boundaries keep biting in production.",
      solution:
        "Narrow types at the edges, validate at runtime, and enforce strictness with lint + CI. Contract tests protect API shapes.",
      kpi: "Teams adopting Zod/io-ts at boundaries and Pact for contracts cut ‘works on my box’ defects materially.",
    },
    {
      icon: Component,
      problem: "Framework Footguns",
      pain: "Client/server boundaries blur; a single ‘use client’ poisons everything and tanks performance.",
      solution:
        "Own the boundary. Keep islands tiny, server by default, and prove it in CI with boundary lint checks.",
      kpi: "Boundary guardrails + dynamic islands reduced TBT/LCP and stopped ‘internal server error’ class regressions.",
    },
    {
      icon: Workflow,
      problem: "DX vs. Discipline",
      pain: "DX shortcuts—barrel files, implicit any, ad-hoc utils—buy speed for a week and debt for a quarter.",
      solution:
        "Adopt a lightweight platform standard: path aliases, strict tsconfig, ESLint rules for imports, and PR templates.",
      kpi: "Once standards converge, time-to-green PR shrinks; reviewers discuss architecture, not commas.",
    },
    {
      icon: TestTube2,
      problem: "Test Gaps at the Worst Places",
      pain: "Great unit tests, zero contracts. Great UI tests, no fixtures. ‘Happy path’ everywhere.",
      solution:
        "Layer tests deliberately: contracts for API boundaries, component tests for UX, light e2e for journeys.",
      kpi: "Layered test strategy lowered escape rate while keeping CI runtimes predictable.",
    },
    {
      icon: Settings,
      problem: "Runtime Config Roulette",
      pain: "Env vars sprout like weeds—no schema, no defaults, no visibility across envs.",
      solution:
        "Centralize config with typed schemas, defaults, and environment matrices checked at startup.",
      kpi: "Typed config + CI matrices catch drift pre-deploy; incidents drop and on-call sleeps.",
    },
    {
      icon: Wallet,
      problem: "State Scattered, Data Duped",
      pain: "Components fetch wildly; caches fight; stale and flicker compete on screen.",
      solution:
        "Standardize data-fetch + cache (TanStack, SWR, RTK Query), isolate state, and prefetch with intent.",
      kpi: "Predictable data layer simplified debugging and trimmed rerenders—INP improved on mobile.",
    },
    {
      icon: Search,
      problem: "Accessibility as a ‘Later’",
      pain: "Ship first, fix a11y later—until ‘later’ is never and enterprise buyers balk.",
      solution:
        "Bake a11y into components. Use headless UI patterns, keyboard traps tested, and color-contrast lint.",
      kpi: "Pods integrating a11y checks in PR templates cut late-stage rework and closed enterprise deals faster.",
    },
    {
      icon: AlertTriangle,
      problem: "Telemetry with Holes",
      pain: "Logs without traces, metrics without exemplars—incidents read like a mystery novel.",
      solution:
        "Adopt OpenTelemetry from day one. Trace user journeys, tag releases, sample intelligently.",
      kpi: "Tagged traces + release markers cut MTTR; engineers fixed what they could finally see.",
    },
    {
      icon: GitBranch,
      problem: "Monorepo Without a Plan",
      pain: "Workspaces explode; build times crawl; owners get fuzzy.",
      solution:
        "Own your topology: clear boundaries, independent versioning or changesets, prebuilt artifacts, owners per package.",
      kpi: "With explicit contracts between packages, releases decoupled; Friday deploys stopped being scary.",
    },
    {
      icon: Rocket,
      problem: "Velocity Without Regression",
      pain: "Speed is great—until the second rollback. Then everyone gets cautious and slow.",
      solution:
        "Feature flags, progressive delivery, and a paved release path. Move fast inside guardrails.",
      kpi: "Pods running this path increased deployment frequency while cutting incident rate.",
    },
  ];

  return (
    <section className="mt-12">
      <header className="prose dark:prose-invert max-w-none">
        <h2>Ship TypeScript like adults: fast, safe, and auditable</h2>
        <p>
          TypeScript isn’t a silver bullet—it’s a seatbelt. You still need good
          roads, sane drivers, and a car that passes inspection. Our daylight
          pods bring the rest of the system: strict configs, disciplined
          boundaries, layered tests, and release guardrails. The point isn’t
          perfect types. It’s predictable value shipped in business hours.
        </p>
        <p>
          We wire your standards on day one, not ‘when we get a minute.’ That
          means strict tsconfig, ESLint guardrails, a typed runtime boundary,
          and a CI that enforces the line between server and client so nothing
          ‘poisons’ the app at 4 p.m. on a Thursday. Fewer footguns, more
          finished work.
        </p>
      </header>

      <PSPCards
        heading="Sandler PSP — TypeScript Delivery Patterns"
        items={items}
      />

      <footer className="prose dark:prose-invert max-w-none mt-10">
        <h3>What the first 30 days look like</h3>
        <p>
          Week 1: environment parity, boundary audit, PR template with
          architectural notes. Week 2: contract tests for key integrations,
          telemetry tags, a11y guardrails. Week 3–4: refactor the top two pain
          points, ship a thin slice behind a flag, and prove the path by
          removing one recurring on-call issue. That rhythm compounds; that’s
          the job.
        </p>
        <p>
          Next reads: <Link href="/playbook/build-vs-buy">Build vs Buy</Link>,{" "}
          <Link href="/trust">Security & Compliance</Link>,{" "}
          <Link href="/comparisons/toptal">TeamStation vs Toptal</Link>.
        </p>
      </footer>
    </section>
  );
}
