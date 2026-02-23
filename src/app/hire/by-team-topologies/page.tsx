import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle,
  Layers,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { JsonLd } from "../../../components/seo/JsonLd";
import BenchmarkBarsPanel from "../../../components/graphs/BenchmarkBarsPanel";
import {
  RevealBlock,
  RevealSection,
  StaggerGrid,
  StaggerItem,
} from "../../../components/motion/MotionPrimitives";

export const metadata: Metadata = {
  title: "Team Topologies for US CTOs in the Agentic AI Era | TeamStation AI",
  description:
    "A doctrine-backed guide to stream-aligned, platform, enabling, and complicated-subsystem team topologies for US CTOs building in the 2026+ AI agentic era.",
  keywords:
    "team topologies, US CTO strategy, agentic AI teams, stream-aligned teams, platform teams, enabling teams, complicated subsystem teams, cognitive load, platform engineering",
};

const pageUrl = "https://cto.teamstation.dev/hire/by-team-topologies";

const topologyCards = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    name: "Stream-Aligned Teams",
    pain: "Delivery is slow because ownership is fragmented across functions.",
    description:
      "End-to-end product squads with direct ownership of one value stream, from discovery to operations. This is the baseline operating unit for product velocity.",
    outcomes: [
      "Fewer handoffs and queue delays",
      "Clear product accountability",
      "Faster release cadence with lower rework",
    ],
    href: "/hire/by-role/backend-services",
    cta: "Explore backend stream ownership",
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    name: "Platform Teams",
    pain: "Cognitive load is too high and every squad rebuilds infrastructure differently.",
    description:
      "A product team for internal developers. Platform squads reduce duplicated effort by shipping paved-road workflows for CI/CD, cloud, observability, and security controls.",
    outcomes: [
      "Lower cognitive load for stream teams",
      "Higher reliability and policy consistency",
      "Compounding engineering throughput",
    ],
    href: "/hire/by-role/platform-infra-sre",
    cta: "Explore platform and SRE roles",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    name: "Enabling Teams",
    pain: "Critical capabilities exist, but adoption stalls across teams.",
    description:
      "Short-lived expert teams that coach and unblock stream teams in areas like AI safety, architecture, security, and QA automation.",
    outcomes: [
      "Faster adoption of new practices",
      "Reduced dependency bottlenecks",
      "Stronger organization-wide technical capability",
    ],
    href: "/playbook/cto-outsourcing-risk-mitigation",
    cta: "See risk mitigation patterns",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    name: "Complicated-Subsystem Teams",
    pain: "A critical subsystem requires deep specialization and frequent model iteration.",
    description:
      "Dedicated experts own a technically complex subsystem, such as agent orchestration, retrieval ranking, optimization engines, or model evaluation harnesses.",
    outcomes: [
      "Complexity isolated from product streams",
      "Higher quality in specialist domains",
      "Reduced defect spillover into core delivery",
    ],
    href: "/research/performance-metrics-in-ai-age",
    cta: "Read AI performance metrics research",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How should a US CTO structure teams for agentic AI products in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with stream-aligned teams around business capabilities, add a platform team to reduce cognitive load, use enabling teams for rapid capability uplift, and isolate high-complexity AI components into complicated-subsystem teams.",
      },
    },
    {
      "@type": "Question",
      name: "When do platform teams become mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When stream teams spend too much time on infrastructure glue, reliability incidents increase, and delivery variability rises, a platform team is required to standardize workflows and remove duplicated complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Does adding AI agents reduce the need for senior engineers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In high-dependency systems, automation shifts failure modes and increases the value of architecture, integration discipline, and model validation. Senior engineering judgment remains critical.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum topology for a scaling B2B SaaS company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A practical minimum is two stream-aligned teams, one small platform team, and a part-time enabling function focused on security and quality. Expand complicated-subsystem teams only when technical depth requirements justify specialization.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cto.teamstation.dev/" },
    { "@type": "ListItem", position: 2, name: "Hire", item: "https://cto.teamstation.dev/hire" },
    {
      "@type": "ListItem",
      position: 3,
      name: "By Team Topologies",
      item: pageUrl,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Team Topologies for US CTOs in the Agentic AI Era (2026+)",
  description:
    "Evidence-informed guidance for CTOs designing stream-aligned, platform, enabling, and complicated-subsystem teams under AI-driven complexity.",
  author: {
    "@type": "Organization",
    name: "TeamStation AI",
  },
  publisher: {
    "@type": "Organization",
    name: "TeamStation AI",
  },
  mainEntityOfPage: pageUrl,
  inLanguage: "en-US",
  about: [
    "Team Topologies",
    "Platform Engineering",
    "Cognitive Load",
    "Agentic AI",
    "Software Delivery Performance",
  ],
  datePublished: "2026-02-21",
  dateModified: "2026-02-21",
};

const references = [
  {
    name: "Team Topologies by Skelton and Pais",
    href: "https://teamtopologies.com/book",
    note: "Defines stream-aligned, platform, enabling, and complicated-subsystem interaction modes.",
  },
  {
    name: "Accelerate by Forsgren, Humble, and Kim",
    href: "https://itrevolution.com/product/accelerate/",
    note: "Empirical relationships between technical practices and organizational performance.",
  },
  {
    name: "The DevOps Research and Assessment framework",
    href: "https://dora.dev/",
    note: "Operational metrics used to assess delivery reliability and throughput.",
  },
  {
    name: "Conway's Law",
    href: "https://www.melconway.com/Home/Conways_Law.html",
    note: "System architecture follows communication structure.",
  },
  {
    name: "Little's Law",
    href: "https://en.wikipedia.org/wiki/Little%27s_law",
    note: "Formal relationship between WIP, throughput, and lead time used in flow management.",
  },
  {
    name: "Engineering Doctrine: Team Topologies (Internal TeamStation AI Research)",
    href: "/research/hub",
    note: "Extends classic topology models with AI-era constraints: interface risk, asynchronous delay, and cognitive fidelity.",
  },
];

const topologyRiskBars = [
  {
    label: "Handoff latency",
    value: 86,
    target: 45,
    note: "High boundary count and unclear ownership create queueing delay across product, platform, and security interfaces.",
  },
  {
    label: "Cognitive load on stream teams",
    value: 79,
    target: 50,
    note: "Without platform and enabling support, stream teams absorb cloud, observability, and AI orchestration complexity.",
  },
  {
    label: "Boundary defect probability",
    value: 74,
    target: 40,
    note: "Interface ambiguity increases integration defects, policy misses, and operational rework.",
  },
  {
    label: "Planning variance",
    value: 68,
    target: 42,
    note: "Topology mismatch increases variability in lead time and reduces commitment reliability.",
  },
];

type TopologyRadarSnapshot = {
  team: "Stream" | "Platform" | "Enabling" | "Subsystem";
  label: string;
  subtitle: string;
  colorClass: string;
  colorHex: string;
  throughput: number;
  reliability: number;
  contextSurfaceArea: number;
  systemicValue: number;
  complexity: number;
};

const topologyProgressSnapshots: TopologyRadarSnapshot[] = [
  {
    team: "Stream",
    label: "Stream-Aligned Team A",
    subtitle: "Revenue workflow ownership",
    colorClass: "text-blue-300",
    colorHex: "#7dd3fc",
    throughput: 0.78,
    reliability: 0.71,
    contextSurfaceArea: 19,
    systemicValue: 0.83,
    complexity: 0.58,
  },
  {
    team: "Platform",
    label: "Platform Team",
    subtitle: "Paved road / DX controls",
    colorClass: "text-emerald-300",
    colorHex: "#6ee7b7",
    throughput: 0.66,
    reliability: 0.84,
    contextSurfaceArea: 26,
    systemicValue: 0.89,
    complexity: 0.72,
  },
  {
    team: "Enabling",
    label: "Enabling Team",
    subtitle: "Capability uplift campaign",
    colorClass: "text-violet-300",
    colorHex: "#c4b5fd",
    throughput: 0.59,
    reliability: 0.68,
    contextSurfaceArea: 14,
    systemicValue: 0.76,
    complexity: 0.47,
  },
  {
    team: "Subsystem",
    label: "Complicated Subsystem Team",
    subtitle: "Agent orchestration / evals",
    colorClass: "text-amber-300",
    colorHex: "#fcd34d",
    throughput: 0.61,
    reliability: 0.73,
    contextSurfaceArea: 22,
    systemicValue: 0.92,
    complexity: 0.91,
  },
];

function TopologyRadarChart({
  snapshot,
  size = 156,
}: {
  snapshot: TopologyRadarSnapshot;
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 18;
  const cNorm =
    snapshot.contextSurfaceArea > 0
      ? Math.min(snapshot.contextSurfaceArea / 30, 1)
      : 0;

  const values = [
    snapshot.throughput,
    snapshot.reliability,
    cNorm,
    snapshot.systemicValue,
    snapshot.complexity,
  ];
  const labels = ["T", "R", "C", "S", "X"];
  const n = values.length;

  const polarPoint = (index: number, scalar: number) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * index) / n;
    return {
      x: cx + r * scalar * Math.cos(angle),
      y: cy + r * scalar * Math.sin(angle),
    };
  };

  const ringFractions = [0.25, 0.5, 0.75, 1];
  const ringPoints = ringFractions.map((frac) =>
    Array.from({ length: n }, (_, i) => {
      const p = polarPoint(i, frac);
      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    }).join(" ")
  );

  const axisLines = Array.from({ length: n }, (_, i) => {
    const p = polarPoint(i, 1);
    return (
      <line
        key={`axis-${i}`}
        x1={cx}
        y1={cy}
        x2={p.x}
        y2={p.y}
        stroke="rgba(148,163,184,0.35)"
        strokeWidth="1"
      />
    );
  });

  const dataPoints = Array.from({ length: n }, (_, i) => {
    const clamped = Math.max(0, Math.min(values[i], 1));
    const p = polarPoint(i, clamped);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(" ");

  const labelNodes = Array.from({ length: n }, (_, i) => {
    const p = polarPoint(i, 1.15);
    return (
      <text
        key={`label-${labels[i]}`}
        x={p.x}
        y={p.y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="10"
        fontWeight="700"
        fill="rgba(226,232,240,0.78)"
      >
        {labels[i]}
      </text>
    );
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto drop-shadow-[0_0_24px_rgba(59,130,246,0.12)]"
      role="img"
      aria-label={`${snapshot.label} radar chart for throughput, reliability, context, systemic value, and complexity`}
    >
      {ringPoints.map((points, idx) => (
        <polygon
          key={`ring-${ringFractions[idx]}`}
          points={points}
          fill="none"
          stroke="rgba(148,163,184,0.22)"
          strokeWidth={idx === ringPoints.length - 1 ? 0.9 : 0.6}
        />
      ))}
      {axisLines}
      <polygon
        points={dataPoints}
        fill={snapshot.colorHex}
        fillOpacity={0.18}
        stroke={snapshot.colorHex}
        strokeWidth={2}
      />
      {Array.from({ length: n }, (_, i) => {
        const clamped = Math.max(0, Math.min(values[i], 1));
        const p = polarPoint(i, clamped);
        return (
          <circle
            key={`pt-${i}`}
            cx={p.x}
            cy={p.y}
            r={2.4}
            fill={snapshot.colorHex}
            className="animate-pulse"
          />
        );
      })}
      {labelNodes}
    </svg>
  );
}

export default function TeamTopologiesPage() {
  return (
    <main className="manual-page container max-w-6xl py-10">
      <JsonLd data={[breadcrumbSchema, faqSchema, articleSchema]} />

      <div className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/hire" className="hover:text-foreground">
          Hire
        </Link>{" "}
        / <span>By Team Topologies</span>
      </div>

      <RevealSection className="glass-panel gradient-ring hero-depth system-grid my-10 rounded-2xl p-8 md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          US CTO Playbook | 2026+ Agentic Era
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Team Topologies for the AI Agentic Era: A CTO Doctrine for Flow, Reliability, and Scale
        </h1>
        <p className="mt-5 max-w-4xl text-base text-muted-foreground md:text-lg">
          Most organizations do not lose because they lack talent. They lose because their team structure creates
          chronic handoffs, hidden queues, and fragile interfaces. In the 2026 AI agentic environment, these failures
          compound faster: more automation, more services, and more asynchronous coordination surfaces. This page
          translates TeamStation AI's engineering doctrine and external scientific evidence into a practical topology
          model US CTOs can implement now.
        </p>
        <nav className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/engineering-doctrine" className="text-primary hover:underline">
            Engineering Doctrine
          </Link>
          <Link href="/research/hub" className="text-primary hover:underline">
            Research Hub
          </Link>
          <Link href="/playbook/tco-model" className="text-primary hover:underline">
            TCO Model
          </Link>
          <Link href="/platform" className="text-primary hover:underline">
            Platform
          </Link>
          <Link href="/comparisons/bairesdev" className="text-primary hover:underline">
            TeamStation vs BairesDev
          </Link>
        </nav>
      </RevealSection>

      <RevealSection className="my-14">
        <h2 className="text-3xl font-bold">Why Team Topology Is Now a Board-Level Decision</h2>
        <div className="mt-6 space-y-5 text-muted-foreground">
          <p>
            In classic software organizations, topology mistakes were expensive but survivable. In agentic systems,
            topology mistakes become multiplicative risk. Your architecture now includes model calls, retrieval paths,
            policy layers, and orchestration logic. Each extra interface increases coordination cost and defect
            probability. This is consistent with both Conway's Law and TeamStation's doctrine principle that
            integration failures concentrate at boundaries where context is thin.
          </p>
          <p>
            The doctrine research also reinforces a hard economic truth: local optimization of utilization creates
            global slowdown. When teams run continuously above sustainable load, lead time expands nonlinearly and
            quality collapses under rework. Little's Law and queueing behavior explain the mechanism. For a US CTO,
            the implication is direct: team topology is not just an org design choice. It is the control surface for
            predictable revenue execution.
          </p>
          <p>
            The practical question is no longer, "How many engineers do we need?" The right question is,
            "What interaction model allows these engineers and agents to deliver safely under real dependency
            constraints?" The answer requires clear topology choices.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="my-14">
        <h2 className="text-3xl font-bold">The Four Team Topologies You Actually Need</h2>
        <p className="mt-4 text-muted-foreground">
          The foundation is stable and evidence-backed: stream-aligned, platform, enabling, and
          complicated-subsystem teams. The mistake is not using these models. The mistake is mixing responsibilities
          until no team has coherent ownership.
        </p>
        <StaggerGrid className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {topologyCards.map((item) => (
            <StaggerItem key={item.name}>
              <article className="glass-card-interactive gradient-ring group rounded-xl border border-border/70 bg-background/70 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
              <p className="mt-3 text-sm font-semibold text-primary">Operating reality</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.pain}</p>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              <ul className="mt-4 space-y-2">
                {item.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <Link href={item.href} className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                {item.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </RevealSection>

      <RevealSection className="my-14">
        <BenchmarkBarsPanel
          title="Topology Failure Pressure Map"
          subtitle="Indicative pressure model for CTO planning. Use these vectors to diagnose where team design is driving delay and quality variance before adding headcount."
          bars={topologyRiskBars}
          max={100}
        />
      </RevealSection>

      <RevealSection className="glass-panel gradient-ring my-14 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Topology Progress Control Surface
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              CTO Radar View for Team Topology Progress
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
              Use this radar view to measure how each team type is progressing across five signals:
              throughput (`T`), reliability (`R`), context surface area (`C`), systemic value (`S`),
              and complexity ownership (`X`). The point is not cosmetic symmetry. The point is to
              see where topology design is creating delivery imbalance.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-background/60 p-3 text-xs text-muted-foreground">
            <p><span className="font-semibold text-foreground">C normalization:</span> context surface area / 30 (capped)</p>
            <p className="mt-1"><span className="font-semibold text-foreground">Interpretation:</span> compare shape drift over time, not one score in isolation</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {topologyProgressSnapshots.map((snapshot) => {
            const cNorm = Math.min(snapshot.contextSurfaceArea / 30, 1);
            const metrics = [
              { key: "T", label: "Throughput", value: snapshot.throughput },
              { key: "R", label: "Reliability", value: snapshot.reliability },
              { key: "C", label: "Context", value: cNorm },
              { key: "S", label: "Systemic value", value: snapshot.systemicValue },
              { key: "X", label: "Complexity", value: snapshot.complexity },
            ];

            return (
              <article
                key={snapshot.label}
                className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/65 p-4 md:p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_92%_10%,rgba(16,185,129,0.10),transparent_40%)]" />
                <div className="relative grid gap-4 md:grid-cols-[170px_1fr] md:items-center">
                  <div className="rounded-xl border border-border/60 bg-card/35 p-2">
                    <TopologyRadarChart snapshot={snapshot} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className={cn("text-xs font-semibold uppercase tracking-wide", snapshot.colorClass)}>
                          {snapshot.team} Team
                        </p>
                        <h3 className="text-lg font-bold text-foreground">{snapshot.label}</h3>
                        <p className="text-xs text-muted-foreground">{snapshot.subtitle}</p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-background/60 px-2.5 py-1.5 text-right">
                        <p className="text-[10px] uppercase tracking-wide text-foreground/70">Context surface</p>
                        <p className="text-sm font-semibold text-foreground">{snapshot.contextSurfaceArea}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {metrics.map((metric) => (
                        <div key={`${snapshot.label}-${metric.key}`}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="text-foreground/85">
                              <span className="font-semibold text-primary">{metric.key}</span> {metric.label}
                            </span>
                            <span className="font-semibold text-foreground">{Math.round(metric.value * 100)}%</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-background/80">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${Math.round(metric.value * 100)}%`,
                                background: `linear-gradient(90deg, ${snapshot.colorHex}cc, ${snapshot.colorHex})`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-border/60 bg-card/30 p-3 text-xs leading-5 text-muted-foreground">
                      <span className="font-semibold text-foreground">CTO read:</span>{" "}
                      {snapshot.team === "Stream" &&
                        "Watch throughput and reliability together; rising context without platform support is an early warning of flow collapse."}
                      {snapshot.team === "Platform" &&
                        "Higher systemic value and reliability are healthy, but track complexity growth to avoid the platform becoming a bottleneck itself."}
                      {snapshot.team === "Enabling" &&
                        "Lower raw throughput is expected; measure impact through systemic value and reduced context pressure on stream teams."}
                      {snapshot.team === "Subsystem" &&
                        "High complexity ownership is intentional; ensure reliability rises with specialization or defect spillover will hit streams."}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </RevealSection>

      <RevealSection className="glass-panel gradient-ring my-14 rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold">Doctrine-to-Execution Mapping for CTOs</h2>
        <p className="mt-4 text-muted-foreground">
          Your attached TeamStation doctrine provides a useful lens for 2026 planning. The value is not in slogans.
          The value is in operational translation. These are the core mappings.
        </p>
        <div className="mt-8 space-y-6">
          <article className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="text-xl font-semibold">1. O-Ring Reliability and Sequential Probability Networks</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              In multi-step delivery chains, one weak control can erase value created upstream. For CTOs, this means
              topology must minimize long dependency chains and isolate critical control points. Platform teams and
              clear stream ownership directly reduce chain fragility.
            </p>
          </article>
          <article className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="text-xl font-semibold">2. Cognitive Load as a Hard Capacity Constraint</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Cognitive overload is not a culture problem. It is a throughput and quality limiter. When every stream
              team must own cloud internals, security policy, observability, and AI orchestration details, flow
              decays. Internal platform products are the primary mechanism for load shedding.
            </p>
          </article>
          <article className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="text-xl font-semibold">3. Interface Invariant and Boundary Risk</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The doctrine's integration section aligns with known systems thinking: failures cluster at boundaries.
              This is amplified in agentic systems where tools, memory stores, and policy services are loosely coupled.
              Good topology shortens interfaces, formalizes contracts, and assigns ownership for integration quality.
            </p>
          </article>
          <article className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="text-xl font-semibold">4. Kingman-Style Queue Behavior and WIP Control</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              High utilization and unmanaged work-in-progress produce nonlinear delay. For CTO organizations, this is
              the mechanism behind "we hired more people but delivery slowed down." Topology design must include WIP
              policy, explicit service classes, and realistic team load targets.
            </p>
          </article>
          <article className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="text-xl font-semibold">5. Quality Doctrine and the Turing Trap</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI can generate fluent output without robust system understanding. Seniority signals must therefore be
              measured through architecture and metacognitive reasoning under constraints, not syntax quality. Enabling
              teams should standardize evaluation protocols and review rigor across all streams.
            </p>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="my-14">
        <h2 className="text-3xl font-bold">Recommended Topology Blueprint by Growth Stage</h2>
        <div className="mt-6 space-y-6 text-muted-foreground">
          <p>
            <strong className="text-foreground">Stage A: $5M-$20M ARR product scale-up.</strong> Start with 2-3
            stream-aligned teams tied to revenue-critical workflows, one compact platform squad, and a rotating
            enabling motion focused on security and release quality. Avoid premature subsystem specialization unless
            there is clear algorithmic or compliance complexity.
          </p>
          <p>
            <strong className="text-foreground">Stage B: Multi-product expansion.</strong> Establish a durable
            platform product roadmap with explicit developer experience metrics. Split enabling work into targeted
            campaigns with clear exit criteria. Add one complicated-subsystem team only when model, data, or domain
            complexity exceeds what stream teams can safely absorb.
          </p>
          <p>
            <strong className="text-foreground">Stage C: Enterprise and regulated scale.</strong> Formalize topology
            governance. Define interaction modes, service-level expectations between teams, and mandatory architecture
            decision records for boundary changes. Pair this with capacity modeling so portfolio commitments reflect
            actual system constraints.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="glass-panel gradient-ring my-14 rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold">Execution Checklist: First 90 Days</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Shield className="h-5 w-5 text-primary" />
              Governance and Structure
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Map current value streams and assign single-threaded ownership.</li>
              <li>Publish team API contracts and handoff rules.</li>
              <li>Set WIP limits and escalation rules for blocked work.</li>
              <li>Define platform service catalogue and adoption targets.</li>
            </ul>
          </div>
          <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Layers className="h-5 w-5 text-primary" />
              Metrics and Quality
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Track lead time, deployment frequency, MTTR, and change failure rate.</li>
              <li>Measure platform adoption and developer friction scores.</li>
              <li>Instrument interface defects by boundary to detect topology debt.</li>
              <li>Require architecture-level review for AI agent workflow changes.</li>
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="my-14">
        <h2 className="text-3xl font-bold">Scientific References and Supporting Evidence</h2>
        <p className="mt-4 text-muted-foreground">
          This page combines established literature with TeamStation's internal engineering doctrine to create an
          actionable model for CTO execution.
        </p>
        <ul className="mt-6 space-y-4">
          {references.map((refItem) => (
            <li key={refItem.name} className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 p-4">
              <a href={refItem.href} className="font-semibold text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {refItem.name}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">{refItem.note}</p>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealBlock className="glass-panel gradient-ring my-14 rounded-2xl border border-primary/20 bg-primary/10 p-8 text-center md:p-10">
        <h2 className="text-3xl font-bold">Design the Right Topology Before You Add More Headcount</h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          If your 2026 roadmap depends on AI-enabled delivery, team design must be treated as architecture, not HR.
          We help US CTO organizations structure stream, platform, enabling, and subsystem teams with measurable flow,
          quality, and risk controls.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="/hire" className="cta-button">
            Start Team Design
          </Link>
          <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">
            Read Capacity Research
          </Link>
          <Link href="/research/axiom-cortex-scientific-report" className="text-primary hover:underline">
            Review Scientific Report
          </Link>
        </div>
      </RevealBlock>
    </main>
  );
}
