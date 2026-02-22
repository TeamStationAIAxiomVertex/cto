import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Cpu,
  Workflow,
  ShieldCheck,
  Gauge,
  BrainCircuit,
  Clock,
  CheckCircle,
  Layers,
  CircleHelp,
  Activity,
  BarChart3,
  GitBranch,
  Bot,
  Radar,
  TriangleAlert,
} from "lucide-react";
import { getAllCaseStudies } from "../lib/case-studies";
import SafeImage from "../components/SafeImage";
import { WithTooltip } from "../components/ui/tooltip";
import CardGuidanceTooltip from "../components/ui/card-guidance-tooltip";

const doctrineSignals = [
  "Cognitive Hiring Signals",
  "Agentic Workflow Topologies",
  "Delivery Telemetry Systems",
  "Governance and Compliance Controls",
];

const heroOutcomes = [
  {
    label: "Decision latency",
    value: "Reduce",
    note: "Clear ownership and same day operating loops",
    icon: Radar,
  },
  {
    label: "Delivery control",
    value: "Increase",
    note: "Telemetry and governance built into the run state",
    icon: Activity,
  },
  {
    label: "Economic clarity",
    value: "Validate",
    note: "TCO logic before expansion or vendor commitment",
    icon: BarChart3,
  },
];

const failurePoints = [
  { title: "AI changes boundaries", body: "Agents shift task ownership and expand execution surfaces across teams.", icon: Bot },
  { title: "Silos create latency", body: "Functional separation slows reviews, decisions, and release coordination.", icon: Layers },
  { title: "Async loops add drag", body: "Overnight handoffs compound delay and reduce feedback quality.", icon: Clock },
  { title: "Vendor models break governance", body: "Accountability fragments across delivery, hiring, and controls.", icon: TriangleAlert },
];

const ctoPainProof = [
  {
    pain: "Roadmaps miss because review and decision latency compounds across teams.",
    solution: "Run topology based ownership with same day decision loops and measurable handoff controls.",
    proofHref: "/research/framework-for-measuring-capacity",
    proofLabel: "Capacity framework for delivery physics",
  },
  {
    pain: "AI programs generate demos but fail to create governed production workflows.",
    solution: "Use one operating doctrine for human and agentic execution with telemetry checkpoints.",
    proofHref: "/engineering-doctrine",
    proofLabel: "Engineering doctrine for 2026 operating systems",
  },
  {
    pain: "Hiring activity rises but output quality and predictability do not improve.",
    solution: "Apply evidence based evaluation and 90 day outcome mapping before scale.",
    proofHref: "/technical-interview-evaluation",
    proofLabel: "Technical interview evaluation method",
  },
  {
    pain: "Cost optimization is treated as rate negotiation instead of system performance design.",
    solution: "Model total delivery cost using delay, rework, and coordination overhead.",
    proofHref: "/playbook/tco-model",
    proofLabel: "Total cost model for leadership decisions",
  },
];

const topologyNodes = [
  {
    title: "Cognitive Nodes",
    body: "Problem decomposition and architecture thinking",
    icon: BrainCircuit,
  },
  {
    title: "Execution Nodes",
    body: "Implementation throughput and delivery ownership",
    icon: Workflow,
  },
  {
    title: "Agentic Nodes",
    body: "AI orchestration and workflow automation",
    icon: Cpu,
  },
  {
    title: "Governance Nodes",
    body: "Security compliance and operational control",
    icon: ShieldCheck,
  },
];

const workflowSteps = [
  "Intent",
  "Decomposition",
  "Agent execution",
  "Human validation",
  "Telemetry",
  "Iteration",
];

const workflowDetails = [
  { title: "Intent", body: "Leadership defines objective, constraints, and success criteria.", icon: Radar },
  { title: "Decomposition", body: "Cognitive nodes break work into governable units.", icon: GitBranch },
  { title: "Agent execution", body: "Agentic nodes automate bounded workflow steps.", icon: Bot },
  { title: "Human validation", body: "Execution owners verify correctness and release readiness.", icon: CheckCircle },
  { title: "Telemetry", body: "System signals report throughput, risk, and control coverage.", icon: Gauge },
  { title: "Iteration", body: "Operating rules adapt based on measured performance.", icon: Workflow },
];

const deliveryPhysics = [
  {
    title: "Little's Law",
    body: "Work in progress expands lead time and reduces flow quality.",
  },
  {
    title: "Variability and Delay",
    body: "Handoff latency compounds delay across system boundaries.",
  },
  {
    title: "Depreciation Invariant",
    body: "Undeployed work loses economic value over time.",
  },
  {
    title: "Daylight Cadence",
    body: "Overlap compresses cycle time and strengthens execution loops.",
  },
];

const daylightModel = [
  "Same day review loops",
  "No overnight ping pong",
  "Real time problem solving",
  "Cycle time compression",
];

const telemetryMetrics = [
  { label: "PR cycle time", value: "< 24h target", note: "Review loop speed and queue pressure" },
  { label: "MTTR", value: "Trend down", note: "Operational recovery and incident discipline" },
  { label: "Day 1 readiness", value: "Control pass", note: "Onboarding + access + device readiness" },
  { label: "Compliance status", value: "Audit ready", note: "Control ownership and evidence coverage" },
];

const osStack = [
  "Cognitive Hiring",
  "Agentic Workflows",
  "Delivery Telemetry",
  "Security and Device Control",
  "Compliance and EOR",
  "Cost Governance",
];

function SectionTitle({ title, tip }: { title: string; tip: string }) {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <WithTooltip
        content={
          <p className="max-w-xs text-xs leading-5">
            {tip}
          </p>
        }
      >
        <button
          type="button"
          aria-label="Section rationale"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground hover:text-primary"
        >
          <CircleHelp className="h-4 w-4" />
        </button>
      </WithTooltip>
    </div>
  );
}

function StatTile({
  label,
  value,
  note,
  icon: Icon,
}: {
  label: string;
  value: string;
  note: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/55 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
      <p className="mt-1 text-xs leading-5 text-muted-foreground">{note}</p>
    </div>
  );
}

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();
  const siteUrl = "https://cto.teamstation.dev";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "TeamStation AI",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TeamStation AI",
    description:
      "Distributed Engineering OS Playbook for CTO and CIO teams operating agentic engineering systems.",
    url: siteUrl,
    logo: `${siteUrl}/apple-touch-icon.png`,
    sameAs: ["https://www.linkedin.com/company/teamstation"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="manual-page">
        <div className="container mx-auto px-4">
          <section className="py-14 md:py-18 section-defer">
            <div className="mx-auto max-w-6xl rounded-2xl glass-panel gradient-ring hero-depth system-grid p-7 md:p-10">
              <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">
                <div>
                  <p className="text-sm font-semibold text-primary">Distributed Engineering OS Playbook</p>
                  <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                    Operate human engineers and AI agents as one governed delivery system.
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
                    Increase delivery velocity, reduce decision latency, and achieve governance ready execution with one operating model for hiring, delivery, and control.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/playbook/hub" className="cta-button">
                      Read the Playbook
                    </Link>
                    <Link href="/engineering-doctrine" className="cta-button bg-card border border-border text-foreground">
                      View Engineering Doctrine
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                    {[
                      "Topology based ownership",
                      "Cognitive hiring signal",
                      "Delivery telemetry and compliance",
                    ].map((item) => (
                      <div key={item} className="rounded-lg border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground">
                        <CheckCircle className="mr-2 inline h-4 w-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-border/70 bg-background/65 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">System topology map</p>
                      <Cpu className="h-4 w-4 text-primary" />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {topologyNodes.map((node) => (
                        <div key={`hero-${node.title}`} className="rounded-xl border border-border/70 bg-card/60 p-3">
                          <node.icon className="h-4 w-4 text-primary" />
                          <p className="mt-2 text-sm font-semibold text-foreground">{node.title}</p>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">{node.body}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl border border-border/70 bg-background/70 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Workflow loop</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {workflowSteps.map((step, idx) => (
                          <div key={`hero-step-${step}`} className="flex items-center gap-2">
                            <span className="rounded-md border border-border/70 bg-card/60 px-2.5 py-1 text-xs text-foreground">
                              {step}
                            </span>
                            {idx < workflowSteps.length - 1 ? (
                              <ArrowRight className="h-3.5 w-3.5 text-primary" />
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {heroOutcomes.map((item) => (
                      <StatTile key={item.label} {...item} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="glow-divider mt-6" />
              <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                {doctrineSignals.map((item) => (
                  <div key={item} className="rounded-lg border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground">
                    <CheckCircle className="mr-2 inline h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="The Monolith Org Chart Is Failing"
                tip="This section explains why legacy vendor models fail in enterprise engineering and why your operating model must shift to a governed system."
              />
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {failurePoints.map((point) => (
                  <article key={point.title} className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-4">
                    <point.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="CTO Pain Map for 2026 and Beyond"
                tip="This map connects recurring CTO pains to the operating response and proof path so buyers can validate fit quickly."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {ctoPainProof.map((item) => (
                  <article key={item.pain} className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-5">
                    <div className="grid gap-4">
                      <div className="border-l-2 border-primary/60 pl-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Operational reality</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.pain}</p>
                      </div>
                      <div className="border-l-2 border-border pl-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground">Operating response</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.solution}</p>
                      </div>
                      <div className="border-l-2 border-border pl-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground">Validation path</p>
                        <Link href={item.proofHref} className="mt-2 inline-block text-sm text-primary hover:underline">
                          {item.proofLabel}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="Team Topology for Agentic Systems"
                tip="This is the operating doctrine. It replaces disconnected staffing vendors with one topology model used in large enterprise engineering organizations."
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {topologyNodes.map((node) => (
                  <article key={node.title} className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-5">
                    <node.icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{node.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{node.body}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 rounded-xl border bg-background/55 p-5">
                <p className="text-sm font-semibold text-foreground">System topology diagram</p>
                <div className="mt-4 grid gap-3 md:grid-cols-4">
                  {topologyNodes.map((node) => (
                    <div key={`${node.title}-topology`} className="rounded-lg border bg-card/80 px-3 py-3 text-center text-xs text-foreground">
                      {node.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="Human and AI Workflow Orchestration"
                tip="This section shows how to run human engineers and AI agents in one controlled loop so delivery is measurable, auditable, and enterprise safe."
              />
              <p className="mt-4 text-muted-foreground">
                AI expands cognitive capacity. Humans guide system intent. Agents automate repetitive logic.
                Telemetry governs system performance.
              </p>
              <div className="mt-6 hidden items-center gap-2 lg:flex">
                {workflowSteps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-md border bg-background/65 px-3 py-2 text-sm text-foreground">{step}</span>
                    {idx < workflowSteps.length - 1 ? <ArrowRight className="h-4 w-4 text-primary" /> : null}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {workflowDetails.map((step) => (
                  <article key={`detail-${step.title}`} className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-4">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="The Physics of Distributed Delivery"
                tip="This section maps delivery behavior to systems science so leadership can replace guesswork with repeatable execution controls."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {deliveryPhysics.map((law) => (
                  <article key={law.title} className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-5">
                    <h3 className="text-lg font-semibold text-foreground">{law.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{law.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="Velocity Comes From Daylight Collaboration"
                tip="This section explains why the daylight operating model consistently outperforms legacy offshore vendor loops for enterprise teams."
              />
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {daylightModel.map((item) => (
                  <div key={item} className="glass-card-interactive rounded-lg border border-border/70 bg-background/55 p-4 text-sm text-muted-foreground">
                    <Clock className="inline h-4 w-4 text-primary mr-2" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border bg-background/55 p-5">
                <p className="text-sm font-semibold text-foreground">Daylight timeline</p>
                <div className="mt-3 h-2 rounded bg-muted">
                  <div className="h-2 w-4/5 rounded bg-primary" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Overlapping hours increase system throughput.</p>
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="Cognitive Evidence Replaces Resume Guessing"
                tip="This section explains how the method de risks hiring in enterprise organizations by replacing vendor resume matching with evidence based evaluation."
              />
              <p className="mt-4 text-muted-foreground">
                We run problem solving signal extraction, bias normalization across ESL variants,
                mental shape evaluation, and mismatch risk reduction as one integrity process.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-5">
                  <p className="text-sm font-semibold text-foreground">Signal extraction pipeline</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {["Problem prompt", "Reasoning signal", "Bias normalization", "Role fit map"].map((step, idx) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-md border bg-background/70 px-3 py-2 text-xs text-foreground">{step}</span>
                        {idx < 3 ? <ArrowRight className="h-3.5 w-3.5 text-primary" /> : null}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-5">
                  <p className="text-sm font-semibold text-foreground">Evaluation trust cues</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="rounded-lg border bg-background/60 px-3 py-2">Bias normalization across ESL variants</li>
                    <li className="rounded-lg border bg-background/60 px-3 py-2">Mental model and decision quality analysis</li>
                    <li className="rounded-lg border bg-background/60 px-3 py-2">Mismatch risk reduction before placement</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="You Cannot Govern What You Cannot Measure"
                tip="This section shows the telemetry layer that replaces vendor opacity with executive control and operating visibility."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {telemetryMetrics.map((metric) => (
                  <div key={metric.label} className="glass-card-interactive rounded-xl border border-border/70 bg-background/55 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{metric.label}</p>
                      <Gauge className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-3 text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{metric.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="Field Evidence"
                tip="These records show enterprise contexts, constraints, interventions, and outcomes to prove that this method replaces legacy vendor outcomes with system performance."
              />
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Each field record is organized as context, constraint, intervention, and operational result.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {caseStudies &&
                  caseStudies.slice(0, 6).map((study) => (
                    <Link
                      key={study.slug}
                      href={`/case-studies/${study.slug}`}
                      className="group glass-card-interactive gradient-ring mx-auto w-full max-w-sm flex flex-col rounded-2xl border border-border/70 bg-card/85 p-6"
                    >
                      <div className="mb-3 flex justify-end">
                        <CardGuidanceTooltip
                          issue={`Enterprise constraint in ${study.industry}`}
                          solution="Operational doctrine with guided implementation and measurable delivery controls."
                        />
                      </div>
                      <div className="relative h-36 w-full mb-4 rounded-lg overflow-hidden border">
                        {study.ogImage?.src?.url && (
                          <SafeImage
                            src={study.ogImage?.src?.url}
                            alt={
                              study.clientName
                                ? `Field evidence for ${study.clientName}`
                                : "Field evidence image"
                            }
                            fill
                            className="object-cover"
                            data-ai-hint={study.ogImage?.aiHint}
                          />
                        )}
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                          {study.clientName}
                        </h3>
                        <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                          Outcome
                        </span>
                      </div>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary my-3">
                        {study.industry}
                      </span>
                      <p className="text-sm text-muted-foreground flex-grow">{study.summary}</p>
                      <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                        Read Field Record
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-7 md:p-10">
              <SectionTitle
                title="The Distributed Engineering OS"
                tip="This stack summarizes the integrated method already used in enterprise organizations to replace fragmented vendor chains with one governed system."
              />
              <div className="mt-6 rounded-xl border bg-background/55 p-5">
                <div className="grid gap-3 md:grid-cols-3">
                  {osStack.map((layer) => (
                    <div key={layer} className="rounded-lg border bg-card/80 px-4 py-3 text-sm text-foreground">
                      <Layers className="inline h-4 w-4 text-primary mr-2" />
                      {layer}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-6 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel gradient-ring p-5 md:p-6">
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  "Enterprise environments and regulated operations",
                  "Security first onboarding and delivery governance",
                  "Nearshore execution with measured control coverage",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground">
                    <ShieldCheck className="mr-2 inline h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-14 md:py-18 section-defer">
            <div className="mx-auto max-w-4xl rounded-2xl glass-panel gradient-ring p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Stop Managing Vendors. Start Operating an Engineering System.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Build an operating model with doctrine clarity, telemetry discipline, and governance control.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/playbook/hub" className="cta-button">
                  Read the Playbook
                </Link>
                <Link href="/engineering-doctrine" className="cta-button bg-card border border-border text-foreground">
                  Build Your Operating Model
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
