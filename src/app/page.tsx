import Link from "next/link";
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

const failurePoints = [
  "AI agents change work boundaries",
  "Functional silos increase latency",
  "Asynchronous teams create delivery drag",
  "Vendor models break governance",
  "Software delivery is now a systems problem",
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
  "PR cycle time",
  "MTTR",
  "Day 1 readiness",
  "Compliance status",
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
          <section className="py-14 md:py-20 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-11">
              <p className="text-sm font-semibold text-primary">Distributed Engineering OS Playbook</p>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                CTO Field Manual: Team Topology for Agentic Engineering
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
                Operate cognitive teams, human engineers, and AI agents as one governed system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/playbook/hub" className="cta-button">
                  Read the Playbook
                </Link>
                <Link href="/engineering-doctrine" className="cta-button bg-card border border-border text-foreground">
                  View the Engineering Doctrine
                </Link>
              </div>

              <div className="mt-8 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                {doctrineSignals.map((item) => (
                  <div key={item} className="rounded-lg border bg-background/60 px-4 py-3 text-sm text-foreground">
                    <CheckCircle className="inline h-4 w-4 text-primary mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="The Monolith Org Chart Is Failing"
                tip="This section explains why legacy vendor models fail in enterprise engineering and why your operating model must shift to a governed system."
              />
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {failurePoints.map((point) => (
                  <div key={point} className="rounded-lg border bg-background/55 p-4 text-sm text-muted-foreground">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="CTO Pain Map for 2026 and Beyond"
                tip="This map connects recurring CTO pains to the operating response and proof path so buyers can validate fit quickly."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {ctoPainProof.map((item) => (
                  <article key={item.pain} className="rounded-xl border bg-background/55 p-5">
                    <h3 className="text-base font-semibold text-foreground">Pain</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.pain}</p>
                    <h3 className="mt-4 text-base font-semibold text-foreground">Solution</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.solution}</p>
                    <h3 className="mt-4 text-base font-semibold text-foreground">Proof</h3>
                    <Link href={item.proofHref} className="mt-2 inline-block text-sm text-primary hover:underline">
                      {item.proofLabel}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="Team Topology for Agentic Systems"
                tip="This is the operating doctrine. It replaces disconnected staffing vendors with one topology model used in large enterprise engineering organizations."
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {topologyNodes.map((node) => (
                  <article key={node.title} className="rounded-xl border bg-background/55 p-5">
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
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="Human and AI Workflow Orchestration"
                tip="This section shows how to run human engineers and AI agents in one controlled loop so delivery is measurable, auditable, and enterprise safe."
              />
              <p className="mt-4 text-muted-foreground">
                AI expands cognitive capacity. Humans guide system intent. Agents automate repetitive logic.
                Telemetry governs system performance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {workflowSteps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-md border bg-background/65 px-3 py-2 text-sm text-foreground">{step}</span>
                    {idx < workflowSteps.length - 1 ? <ArrowRight className="h-4 w-4 text-primary" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="The Physics of Distributed Delivery"
                tip="This section maps delivery behavior to systems science so leadership can replace guesswork with repeatable execution controls."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {deliveryPhysics.map((law) => (
                  <article key={law.title} className="rounded-xl border bg-background/55 p-5">
                    <h3 className="text-lg font-semibold text-foreground">{law.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{law.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="Velocity Comes From Daylight Collaboration"
                tip="This section explains why the daylight operating model consistently outperforms legacy offshore vendor loops for enterprise teams."
              />
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {daylightModel.map((item) => (
                  <div key={item} className="rounded-lg border bg-background/55 p-4 text-sm text-muted-foreground">
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
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="Cognitive Evidence Replaces Resume Guessing"
                tip="This section explains how the method de risks hiring in enterprise organizations by replacing vendor resume matching with evidence based evaluation."
              />
              <p className="mt-4 text-muted-foreground">
                We run problem solving signal extraction, bias normalization across ESL variants,
                mental shape evaluation, and mismatch risk reduction as one integrity process.
              </p>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
              <SectionTitle
                title="You Cannot Govern What You Cannot Measure"
                tip="This section shows the telemetry layer that replaces vendor opacity with executive control and operating visibility."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {telemetryMetrics.map((metric) => (
                  <div key={metric} className="rounded-xl border bg-background/55 p-5 text-center">
                    <Gauge className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-sm text-foreground">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 section-defer">
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
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
                      className="group mx-auto w-full max-w-sm flex flex-col rounded-2xl border bg-card/85 p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20"
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
                      <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        {study.clientName}
                      </h3>
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
            <div className="mx-auto max-w-5xl rounded-2xl glass-panel p-7 md:p-10">
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

          <section id="contact" className="py-14 md:py-18 section-defer">
            <div className="mx-auto max-w-4xl rounded-2xl glass-panel p-8 text-center">
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
