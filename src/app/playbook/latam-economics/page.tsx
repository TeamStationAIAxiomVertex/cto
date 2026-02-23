import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaybookContentRenderer from "@/components/PlaybookContentRenderer";
import TableOfContents from "@/components/TableOfContents";
import PlaybookAuthor from "@/components/PlaybookAuthor";
import CTOFieldManualBlock from "@/components/seo/CTOFieldManualBlock";
import BenchmarkBarsPanel from "@/components/graphs/BenchmarkBarsPanel";
import { RevealBlock, RevealSection } from "@/components/motion/MotionPrimitives";
import { getPlaybookData } from "@/lib/playbook-data";

const relatedLinks = [
  { href: "/playbook/hub", label: "CTO Playbook Hub" },
  { href: "/playbook/tco-model", label: "TCO Model for Engineering Teams" },
  { href: "/playbook/build-vs-buy", label: "Build vs Buy Framework" },
  { href: "/playbook/nearshore-vs-offshore", label: "Nearshore vs Offshore" },
  {
    href: "/playbook/bias-free-technical-hiring-axiom-cortex",
    label: "Bias-Free Technical Hiring",
  },
  { href: "/research/framework-for-measuring-capacity", label: "Capacity Measurement Research" },
  { href: "/hire/by-team-topologies", label: "Team Topologies for CTOs" },
  { href: "/comparisons/bairesdev", label: "Compare vs BairesDev" },
  { href: "/platform", label: "Nearshore IT Co-Pilot Platform" },
];

const economicsModelBars = [
  {
    label: "Compensation and benefits",
    value: 42,
    target: 40,
    note: "Base compensation is the largest cost element, but it should be modeled with seniority mix and retention assumptions.",
  },
  {
    label: "Platform, tooling, and device control",
    value: 12,
    target: 10,
    note: "Security tooling, managed devices, and workflow stack costs are often omitted in vendor headline rates.",
  },
  {
    label: "Onboarding and enablement",
    value: 9,
    target: 8,
    note: "Ramp quality determines time to productive contribution and affects first-quarter throughput.",
  },
  {
    label: "Coordination and management overhead",
    value: 14,
    target: 12,
    note: "Handoff latency, manager load, and cross-timezone coordination cost should be modeled explicitly.",
  },
  {
    label: "Rework and defect recovery",
    value: 11,
    target: 8,
    note: "Quality misses compound TCO through delayed releases, recovery effort, and opportunity cost.",
  },
  {
    label: "Vacancy and replacement risk",
    value: 12,
    target: 9,
    note: "Vacancy days and replacement cycles directly affect roadmap predictability and realized economics.",
  },
];

const ctoEconomicsSignals = [
  {
    icon: DollarSign,
    label: "Headline rate risk",
    value: "High",
    note: "Bill rates hide coordination, rework, security, and vacancy cost.",
  },
  {
    icon: Clock3,
    label: "Delay cost impact",
    value: "Compounding",
    note: "Vacancy and ramp delays destroy realized cost advantage.",
  },
  {
    icon: ShieldCheck,
    label: "Governance premium",
    value: "Required",
    note: "Compliance and device controls should be modeled, not treated as optional.",
  },
  {
    icon: TrendingUp,
    label: "CTO decision lens",
    value: "TCO + throughput",
    note: "Optimize for shipped output and risk-adjusted cost, not hourly rate.",
  },
];

const scenarioComparisons = [
  {
    model: "Rate-first vendor selection",
    economics: "Looks cheap in procurement",
    hiddenRisk: "Coordination drag, rework, and delayed ramp erase savings",
    ctoOutcome: "Low confidence forecast and unstable delivery velocity",
  },
  {
    model: "Governed LATAM operating model",
    economics: "Higher modeling precision upfront",
    hiddenRisk: "Explicitly budgeted and operationally controlled",
    ctoOutcome: "Predictable ramp, clearer TCO, stronger roadmap control",
  },
];

const ctoDecisionChecklist = [
  "Model vacancy days and replacement cycles, not just filled-seat rates",
  "Separate compensation cost from governance and platform cost",
  "Price coordination overhead and timezone handoff delay explicitly",
  "Track ramp-to-productivity and first 90-day output in the economics model",
  "Include security, device control, and compliance readiness in TCO",
  "Compare vendor options using delivered throughput, not proposal language",
];

const ctoEconomicsDashboard = [
  {
    icon: DollarSign,
    title: "Realized cost",
    value: "Rate + ramp + risk",
    note: "Procurement price is not the delivered cost of roadmap output.",
  },
  {
    icon: Users,
    title: "Team productivity curve",
    value: "30-90 day ramp",
    note: "Seniority mix and onboarding quality determine when cost turns into throughput.",
  },
  {
    icon: BarChart3,
    title: "Forecast confidence",
    value: "Modeled explicitly",
    note: "Budget confidence improves when vacancy and rework are priced up front.",
  },
  {
    icon: ShieldCheck,
    title: "Governance readiness",
    value: "Included in TCO",
    note: "Security and compliance controls are recurring operating costs, not edge cases.",
  },
];

const hiddenCostDrivers = [
  {
    label: "Vacancy + replacement cycle",
    severity: 86,
    detail: "Open req days and churn reset delivery capacity and shift quarter plans.",
  },
  {
    label: "Ramp-to-productivity delay",
    severity: 78,
    detail: "Slow onboarding destroys apparent cost savings in the first 90 days.",
  },
  {
    label: "Coordination / manager load",
    severity: 64,
    detail: "Handoffs, timezone mismatch, and supervision drag are often missing from pricing models.",
  },
  {
    label: "Rework + defect recovery",
    severity: 71,
    detail: "Quality misses compound cost via release delay and downstream remediation.",
  },
];

const ctoDecisionWindows = [
  {
    phase: "Before vendor shortlist",
    focus: "Define economics inputs",
    action: "Lock assumptions for ramp time, vacancy risk, and governance scope before comparing rates.",
  },
  {
    phase: "During evaluation",
    focus: "Stress test throughput claims",
    action: "Translate vendor promises into measurable output and coordination assumptions.",
  },
  {
    phase: "Before commitment",
    focus: "Approve risk-adjusted TCO",
    action: "Budget against delivered throughput, not just seat cost, and set telemetry checkpoints.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPlaybookData("latam-economics");
  if (!data) return {};
  return {
    title: data.title,
    description: data.meta,
    alternates: {
      canonical: "https://cto.teamstation.dev/playbook/latam-economics",
    },
    keywords: data.keywords.join(", "),
  };
}

export default async function PlaybookPage() {
  const data = await getPlaybookData("latam-economics");
  if (!data) notFound();

  const { title, date, toc, author, keywords } = data;

  return (
    <main className="manual-page container mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Playbook", path: "/playbook" },
          { label: title, path: "/playbook/latam-economics" },
        ]}
      />

      <article className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <div className="space-y-6 lg:sticky lg:top-8">
            <RevealBlock className="glass-panel gradient-ring rounded-2xl p-4">
              <PlaybookAuthor author={author} />
            </RevealBlock>
            <RevealBlock className="glass-panel gradient-ring rounded-2xl p-4">
              <TableOfContents items={toc} />
            </RevealBlock>
          </div>
        </aside>

        <div className="order-1 lg:order-2 lg:col-span-3">
          <RevealBlock className="glass-panel gradient-ring hero-depth system-grid mb-8 rounded-2xl p-5 md:p-7">
            <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  CTO Playbook Chapter
                </p>
                <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                  {title}
                </h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  Published: <time dateTime={date}>{date}</time>
                  {author?.name ? <> • By: {author.name}</> : null}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                  Use this chapter to build a CTO-grade LATAM economics model that captures the full cost of delivery:
                  compensation, ramp, coordination overhead, governance controls, rework, and replacement risk.
                  The goal is not cheaper labor. The goal is predictable throughput at controlled risk-adjusted cost.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(keywords ?? []).slice(0, 5).map((kw, idx) => (
                    <span
                      key={`${kw}-${idx}`}
                      className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/playbook/tco-model"
                    className="inline-flex items-center rounded-md border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary"
                  >
                    Open TCO Model
                  </Link>
                  <Link
                    href="/comparisons"
                    className="inline-flex items-center rounded-md border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary"
                  >
                    Compare models
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 p-4">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(59,130,246,0.16),transparent_52%),radial-gradient(circle_at_84%_18%,rgba(16,185,129,0.12),transparent_42%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      LATAM Economics Control Surface
                    </p>
                    <span className="flex items-center gap-1.5 text-[11px] text-foreground/80">
                      <span className="relative inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                      </span>
                      CTO lens
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {ctoEconomicsSignals.map((signal) => (
                      <div
                        key={signal.label}
                        className="rounded-xl border border-border/60 bg-card/40 p-3"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                            {signal.label}
                          </p>
                          <signal.icon className="h-4 w-4 text-primary" />
                        </div>
                        <p className="mt-1 text-sm font-semibold text-foreground">
                          {signal.value}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {signal.note}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-border/60 bg-background/50 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                      Decision Flow
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/90">
                      {["rate", "ramp", "risk", "throughput", "TCO"].map((step, idx, arr) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="rounded-md border border-border/60 bg-card/40 px-2 py-1">
                            {step}
                          </span>
                          {idx < arr.length - 1 ? (
                            <ArrowRight className="h-3.5 w-3.5 text-primary" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>

          <RevealSection className="mb-8 grid gap-3 md:grid-cols-2">
            <div className="glass-panel gradient-ring rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                CTO Decision Checklist
              </p>
              <h2 className="mt-2 text-xl font-bold text-foreground">
                What to model before you commit budget
              </h2>
              <ul className="mt-4 space-y-2">
                {ctoDecisionChecklist.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border/60 bg-background/55 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel gradient-ring rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Economic Scenario Contrast
              </p>
              <h2 className="mt-2 text-xl font-bold text-foreground">
                Rate-first vs governed operating model
              </h2>
              <div className="mt-4 space-y-3">
                {scenarioComparisons.map((row) => (
                  <div
                    key={row.model}
                    className="rounded-xl border border-border/60 bg-background/55 p-4"
                  >
                    <p className="text-sm font-semibold text-foreground">{row.model}</p>
                    <div className="mt-3 grid gap-2 text-xs">
                      <div className="rounded-lg border border-border/50 bg-card/40 px-3 py-2">
                        <span className="font-semibold text-primary">Economics:</span>{" "}
                        <span className="text-muted-foreground">{row.economics}</span>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-card/40 px-3 py-2">
                        <span className="font-semibold text-primary">Hidden risk:</span>{" "}
                        <span className="text-muted-foreground">{row.hiddenRisk}</span>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-card/40 px-3 py-2">
                        <span className="font-semibold text-primary">CTO outcome:</span>{" "}
                        <span className="text-muted-foreground">{row.ctoOutcome}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection className="mb-8 grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
            <div className="glass-panel gradient-ring rounded-2xl p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    CTO Economics Dashboard
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
                    Model what procurement sheets miss
                  </h2>
                  <p className="mt-2 max-w-[70ch] text-sm leading-6 text-muted-foreground">
                    Use a delivery economics lens that ties budget to ramp, governance, and realized throughput.
                    This is the operating view a CTO needs before committing headcount or vendor contracts.
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                    Decision posture
                  </p>
                  <p className="text-sm font-semibold text-foreground">Throughput-first TCO</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ctoEconomicsDashboard.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border/60 bg-background/55 p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                        {item.title}
                      </p>
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mt-2 text-base font-semibold text-foreground">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-border/60 bg-background/45 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Hidden Cost Pressure Map
                  </p>
                  <span className="flex items-center gap-1.5 text-[11px] text-foreground/80">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                    </span>
                    Live planning lens
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {hiddenCostDrivers.map((driver) => (
                    <div
                      key={driver.label}
                      className="rounded-xl border border-border/50 bg-card/35 p-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">{driver.label}</p>
                        <span className="text-xs font-semibold text-primary">{driver.severity}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-background/80">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(129,140,248,0.95),rgba(52,211,153,0.9))] shadow-[0_0_18px_rgba(52,211,153,0.25)] transition-all"
                          style={{ width: `${driver.severity}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{driver.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-panel gradient-ring rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  CTO Decision Windows
                </p>
                <h2 className="mt-2 text-xl font-bold text-foreground">
                  When to apply the economics model
                </h2>
                <div className="mt-4 space-y-3">
                  {ctoDecisionWindows.map((window, index) => (
                    <div
                      key={window.phase}
                      className="relative rounded-xl border border-border/60 bg-background/55 p-4"
                    >
                      <div className="absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[11px] font-semibold text-primary">
                        {index + 1}
                      </div>
                      <div className="pl-8">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                          {window.phase}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{window.focus}</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">{window.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel gradient-ring rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Executive Summary
                </p>
                <h2 className="mt-2 text-xl font-bold text-foreground">
                  What this chapter gives a CTO
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">
                    A decision framework for comparing LATAM options using delivery outcomes, not rate cards.
                  </li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">
                    A budgeting lens that includes ramp, replacement, rework, and governance overhead.
                  </li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">
                    A practical bridge from economics analysis to operating model and vendor selection.
                  </li>
                </ul>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Link
                    href="/playbook/tco-model"
                    className="inline-flex items-center justify-center rounded-md border border-border/70 bg-background/70 px-3 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary"
                  >
                    Use TCO model
                  </Link>
                  <Link
                    href="/platform"
                    className="inline-flex items-center justify-center rounded-md border border-border/70 bg-background/70 px-3 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary"
                  >
                    View platform model
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection className="glass-panel gradient-ring rounded-2xl p-5 md:p-7">
            <div className="mb-5 grid gap-3 rounded-2xl border border-border/60 bg-background/45 p-4 md:grid-cols-3">
              <div className="rounded-xl border border-border/50 bg-card/35 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Primary question
                </p>
                <p className="mt-1 text-sm text-foreground">
                  What is the risk-adjusted cost of predictable delivery, not just the price of seats?
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card/35 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Required inputs
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Vacancy, ramp, rework, coordination load, governance tooling, and replacement cycles.
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card/35 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Decision output
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Budget confidence, operating fit, and roadmap throughput expectations by model choice.
                </p>
              </div>
            </div>
            <div className="mb-5 rounded-2xl border border-border/60 bg-background/40 p-4 md:p-5">
              <div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    How to use this chapter
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    Read as an operating model decision, not a labor-rate article
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Start with the TCO equation and hidden costs, then map the economics to delivery throughput and
                    governance controls. The most useful output is a decision model you can use with finance and
                    product leadership, not just a comparison spreadsheet.
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card/35 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                    Reading order
                  </p>
                  <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>1. TCO equation and hidden costs</li>
                    <li>2. Throughput per dollar lens</li>
                    <li>3. Fully-loaded model assumptions</li>
                    <li>4. Strategic ROI and decision checkpoint</li>
                  </ol>
                </div>
              </div>
            </div>
            <div
              className="
                prose max-w-none dark:prose-invert
                prose-sm md:prose-base lg:prose-lg
                prose-headings:scroll-mt-24
                prose-headings:text-foreground
                prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h2:font-bold
                prose-h3:mt-7 prose-h3:mb-3 prose-h3:text-xl prose-h3:font-semibold
                prose-p:leading-7 prose-p:text-muted-foreground
                prose-li:leading-7 prose-li:text-muted-foreground
                prose-strong:text-foreground
                prose-a:text-primary hover:prose-a:text-primary/80
                prose-ul:my-5 prose-ol:my-5
                prose-blockquote:border-primary/30 prose-blockquote:text-muted-foreground
              "
            >
              <PlaybookContentRenderer slug="latam-economics" />
            </div>
          </RevealSection>

          <RevealSection className="mt-10">
            <BenchmarkBarsPanel
              title="Economics Modeling Lens for CTO Planning"
              subtitle="Use a total cost view instead of bill-rate comparison. This planning model highlights the cost categories that most often distort LATAM hiring decisions when governance and execution costs are excluded."
              unit="%"
              max={50}
              bars={economicsModelBars}
            />
          </RevealSection>

          <RevealSection className="glass-panel gradient-ring mt-10 rounded-2xl p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Further Reading and Related Strategy
            </h2>
            <p className="mb-4 max-w-[72ch] text-sm leading-7 text-muted-foreground">
              Use these paths to move from economics analysis into operating model design, hiring decisions,
              and vendor model validation without breaking decision continuity.
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-sm text-foreground transition-ui hover:border-primary/40 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </RevealSection>

          <RevealBlock className="mt-10">
            <CTOFieldManualBlock
              title="CTO Field Manual Extension: LATAM Economics"
              focus="economic modeling, operating fit, and delivery cost governance"
            />
          </RevealBlock>
        </div>
      </article>
    </main>
  );
}
