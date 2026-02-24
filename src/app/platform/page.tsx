import Link from "next/link";
import {
  CheckCircle,
  Trophy,
  Star,
  BookOpen,
  Beaker,
  Users,
  BrainCircuit,
  Laptop,
  Gauge,
  ShieldCheck,
  FileText,
  Building,
  Scale,
  ArrowRight,
  Server,
  Database,
  Share2,
  Layers,
} from "lucide-react";
import type { Metadata } from "next";
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Distributed Engineering OS | TeamStation AI",
  description:
    "Run your LATAM engineering operation in one platform. Hire, equip, secure, and manage nearshore teams under one accountable SLA.",
  keywords:
    "nearshore it platform, nearshore co-pilot, latam engineering platform, hire nearshore developers, manage nearshore teams",
};

const includedServices = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    pain: "Struggling to find elite LATAM talent?",
    title: "Dedicated Operations & Recruiting Teams",
    description:
      "US-led ops and LATAM recruiters handle sourcing, structured interviews, and start logistics, all tracked in the platform.",
    kpi: "2.6M+ LATAM profiles targeted",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    pain: "Worried about complex local labor laws?",
    title: "Employer of Record (EOR) & Compliance",
    description:
      "Country-legal contracts, payroll, taxes, and statutory benefits handled by TeamStation, centralizing HR and labor-law compliance.",
    kpi: "Zero compliance overhead",
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    pain: "Concerned about insecure remote laptops?",
    title: "Devices & Endpoint Security (MDM)",
    description:
      "We procure, ship, enroll, patch, and monitor laptops via MDM with CIS-aligned guardrails and 24/7 endpoint visibility.",
    kpi: "MDM enrollment ≥99% (24h)",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    pain: "Exposed to liability from remote work?",
    title: "Cybersecurity & Insurance Coverage",
    description:
      "Security workflows, NDA/IP protection, and Cyber/E&O coverage for project liability. Policy documents are stored and auditable.",
    kpi: "Liability shield included",
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    pain: "New hires taking weeks to ship code?",
    title: "Onboarding Automation",
    description:
      "Pre-boarding checklists, access requests, first ticket, and a 30-60-90 day plan are auto-tracked to Day-1 readiness with status and alerts.",
    kpi: "Day-1 readiness ≥95%",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    pain: "Need a physical space for your team?",
    title: "LATAM Meeting Offices & Spaces",
    description:
      "On-demand desks and meeting rooms in major LATAM hubs for planning sessions, interviews, and quarterly reviews. (Optional Add-on)",
    kpi: "45+ WeWork Hubs available",
  },
];

const recognitions = [
  {
    icon: <Trophy className="h-8 w-8 text-yellow-400" />,
    title: "Market Leader",
    source: "Recognized for Cognitive AI innovation in nearshore IT delivery.",
  },
  {
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    title: "Service Excellence",
    source: "Independent market leader for nearshore staffing.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-yellow-400" />,
    title: "Peer-Reviewed Research",
    papers: [
      {
        title:
          "Heuristically Trained Neural AI for End-to-End Nearshore IT Staff Augmentation",
        href: "/research/axiom-cortex-scientific-report",
      },
      {
        title:
          "A Scientific Framework for Measuring Human Capacity in Nearshore Software Engineering",
        href: "/research/performance-evaluation-framework",
      },
    ],
  },
  {
    icon: <Beaker className="h-8 w-8 text-yellow-400" />,
    title: "Platform KPIs",
    kpis: [
      "2.6M+ LATAM IT profiles",
      "Time-to-Offer ≈ 9 days",
      "90-day retention ≥96%",
    ],
  },
];

const guardrails = [
  {
    title: "Hiring & EOR",
    owner: "TeamStation AI",
    details: [
      "Time-to-Offer ≈ 9 days",
      "Local contracts, payroll, taxes",
      "Background checks, IP/NDAs",
    ],
  },
  {
    title: "Devices & Endpoint",
    owner: "TeamStation AI",
    details: [
      "Device MTPD ≤ 5 days",
      "MDM ≥ 99% (24h) enrollment",
      "Asset inventory, lock/wipe",
    ],
  },
  {
    title: "Security & Insurance",
    owner: "TeamStation AI",
    details: [
      "Infosec workflows, incident triage < 4h",
      "Cybersecurity & E&O insurance",
      "Least-privilege access, audit trails",
    ],
  },
  {
    title: "Offices & Workspaces",
    owner: "TeamStation AI",
    details: [
      "Desks/meeting rooms across 45+ hubs",
      "Secure Wi-Fi, badging policies",
      "Provisioning SLA: ≤ 3 business days",
    ],
  },
];

const architectureLayers = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "User Layer",
    description:
      "CTOs, CFOs, Talent Ops, and Engineers access the web application securely over HTTPS.",
    tech: ["Browser", "Client App"],
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Application Layer",
    description:
      "Handles all business logic, routing, and API orchestration for workflows like requisitions, candidate approvals, and onboarding.",
    tech: ["PHP 8.2", "Laravel 11", "DigitalOcean Droplets"],
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Database Layer",
    description:
      "Stores all structured data for users, candidates, contracts, and compliance records with durability and scalability.",
    tech: ["MariaDB", "Replication", "Daily Dumps"],
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI Service Layer",
    description:
      "Our proprietary AI engines, called asynchronously from the backend to perform cognitive evaluations and candidate matching.",
    tech: ["Axiom Cortex™", "Nebula Neural Search™", "Service Endpoints"],
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Integration Layer",
    description:
      "Connects the platform to external systems for seamless operations and workflow automation.",
    tech: [
      "Slack",
      "GitHub",
      "Jira",
      "KYC/KYB APIs",
      "Payroll APIs",
      "MDM APIs",
    ],
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Infrastructure & Ops",
    description:
      "The foundation of the platform, built for horizontal scaling, high availability, and disaster recovery on DigitalOcean.",
    tech: ["Horizontal Scaling", "DB Replication", "Snapshots & Backups"],
  },
];

const systemInputs = [
  {
    icon: <Users className="h-4 w-4 text-primary" />,
    title: "Sourcing & Vetting",
    detail: "Recruiters, structured interviews, cognitive evaluation, approvals",
  },
  {
    icon: <FileText className="h-4 w-4 text-primary" />,
    title: "EOR & Compliance",
    detail: "Contracts, payroll, taxes, benefits, labor-law workflows",
  },
  {
    icon: <Laptop className="h-4 w-4 text-primary" />,
    title: "Devices & Identity",
    detail: "Procure, enroll, MDM, access provisioning, endpoint controls",
  },
  {
    icon: <Gauge className="h-4 w-4 text-primary" />,
    title: "Onboarding Signals",
    detail: "Day-1 readiness, 30-60-90 plan, alerts, operational handoff",
  },
];

const controlPlaneModules = [
  "Workflow orchestration",
  "SLA ownership",
  "Audit trail & evidence",
  "Policy enforcement",
  "Integration routing",
  "Executive telemetry",
];

const systemOutputs = [
  {
    icon: <CheckCircle className="h-4 w-4 text-green-400" />,
    title: "Deterministic deployment",
    detail: "Engineering squads activated under one accountable operating path",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-green-400" />,
    title: "Governed delivery",
    detail: "Compliance, security, and evidence preserved across the lifecycle",
  },
  {
    icon: <Scale className="h-4 w-4 text-green-400" />,
    title: "CFO-ready control surface",
    detail: "One contract, one SLA, one invoice with measurable operating KPIs",
  },
];

const platformSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Distributed Engineering OS | TeamStation AI Platform",
  description: "Hire, equip, secure, and manage nearshore engineering teams under one accountable SLA.",
  url: "https://cto.teamstation.dev/platform",
  serviceType: "Distributed Engineering Platform",
  areaServed: { "@type": "Country", name: "United States" },
  provider: { "@type": "Organization", name: "TeamStation AI", url: "https://teamstation.dev" },
  audience: { "@type": "Audience", audienceType: "Chief Technology Officer, Chief Information Officer" },
  inLanguage: "en-US",
};

export default function PlatformPage() {
  return (
    <main className="manual-page container max-w-7xl py-10">
      <JsonLd data={platformSchema} />
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        / <span>Platform</span>
      </div>
      <header className="glass-panel gradient-ring hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Distributed Engineering OS
        </h1>
        <div className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">
          <span>
            Hire, equip, secure, and manage your entire LATAM engineering
            operation under one accountable{" "}
            <span
              title="A contract defining the level of service you can expect, backed by our MSA."
              className="border-b border-dashed"
            >
              SLA
            </span>
            .
          </span>
        </div>
        <div className="mt-8">
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Book a 30-Minute Platform Demo
          </Link>
        </div>
      </header>

      <section className="my-16">
        <h2 className="text-center text-4xl font-bold text-foreground">
          Platform System Visual
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          How TeamStation AI replaces fragmented vendors with a governed
          platform: multiple operational inputs are normalized through one
          control plane and delivered as one accountable engineering system.
        </p>

        <div className="mt-10 rounded-2xl border border-border/70 bg-background/60 p-4 md:p-6 glass-panel gradient-ring">
          <div className="grid gap-4 xl:grid-cols-[1.05fr_.9fr_1.05fr] xl:items-stretch">
            <div className="rounded-xl border border-border/70 bg-background/55 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Inputs
                </h3>
                <span className="text-xs text-muted-foreground">
                  Fragmented vendors
                </span>
              </div>
              <div className="mt-3 space-y-3">
                {systemInputs.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border/60 bg-card/40 p-3"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-xl border border-primary/20 bg-background/55 p-4 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.18),transparent_50%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.16),transparent_45%)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    TeamStation Control Plane
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-foreground/80">
                    <span className="relative inline-flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </span>
                    Live governance
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  One operating system for hiring, compliance, security,
                  onboarding, and delivery control.
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                  {controlPlaneModules.map((module, idx) => (
                    <div
                      key={module}
                      className="flex items-center justify-between rounded-lg border border-border/60 bg-card/40 px-3 py-2"
                    >
                      <span className="text-xs font-medium text-foreground">
                        {module}
                      </span>
                      <span className="h-1.5 w-20 rounded-full bg-background/70">
                        <span
                          className={`block h-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-300 ${
                            idx % 2 === 0 ? "w-[82%]" : "w-[94%]"
                          } animate-pulse`}
                        />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg border border-border/60 bg-background/45 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                    Normalized operational flow
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/90">
                    {["source", "vet", "contract", "secure", "deploy", "measure"].map(
                      (step, idx, arr) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="rounded-md border border-border/60 bg-card/40 px-2 py-1">
                            {step}
                          </span>
                          {idx < arr.length - 1 ? (
                            <ArrowRight className="h-3.5 w-3.5 text-primary" />
                          ) : null}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-background/55 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Outputs
                </h3>
                <span className="text-xs text-muted-foreground">
                  Governed system
                </span>
              </div>
              <div className="mt-3 space-y-3">
                {systemOutputs.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border/60 bg-card/40 p-3"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-3">
                <p className="text-xs font-semibold text-primary">
                  One contract, one SLA, one accountable operator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">
          Platform Architecture
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          A high-level look at the robust, scalable, and secure technology stack
          that powers the Distributed Engineering OS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {architectureLayers.map((layer) => (
            <div
              key={layer.title}
              className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 flex flex-col shadow-lg"
            >
              <div className="flex items-center gap-4">
                {layer.icon}
                <h3 className="text-xl font-semibold text-foreground">
                  {layer.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-grow">
                {layer.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Technologies:
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-foreground">
          What’s Included in Your TeamStation Plan
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          Everything you need to hire, equip, secure, and run LATAM engineering
          teams inside one platform and SLA.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {includedServices.map((service) => (
            <div
              key={service.title}
              className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 flex flex-col shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              <p className="text-sm font-semibold text-primary">
                {service.pain}
              </p>
              <div className="flex items-center gap-3 mt-3">
                {service.icon}
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-grow">
                {service.description}
              </p>
              <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                Evidence: {service.kpi}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services/integrated-services" className="cta-button">
            See All Included Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section
        id="proof"
        className="my-24 glass-panel gradient-ring rounded-xl border border-border/70 p-8 md:p-12 shadow-lg"
      >
        <h2 className="text-center text-4xl font-bold text-foreground">
          Evidence, Not Promises
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
          Independent recognition, peer-reviewed research, and platform delivery
          metrics so you’re not taking our word for it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 gap-8">
          {recognitions.map((rec) => (
            <div className="flex items-start text-left gap-4" key={rec.title}>
              {rec.icon}
              <div>
                <h3 className="font-semibold text-foreground">{rec.title}</h3>
                {rec.source && (
                  <p className="text-sm text-muted-foreground m-0">
                    {rec.source}
                  </p>
                )}
                {rec.papers && (
                  <ul className="m-0 mt-1 list-none p-0 space-y-1">
                    {rec.papers.map((paper) => (
                      <li key={paper.title}>
                        <Link
                          href={paper.href}
                          className="text-sm text-primary hover:underline"
                        >
                          {paper.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {rec.kpis && (
                  <ul className="m-0 mt-1 list-none p-0 space-y-1">
                    {rec.kpis.map((kpi) => (
                      <li key={kpi} className="text-sm text-muted-foreground">
                        {kpi}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="guardrails" className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">
          Operational Guardrails & SLAs
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
          These aren't just promises. They are contractually-binding commitments
          defined in your Master Services Agreement (MSA) and Statements of Work
          (SOW), giving you one accountable owner for your entire operation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {guardrails.map((item) => (
            <div
              key={item.title}
              className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-primary my-2">
                Owner: {item.owner}
              </p>
              <ul className="space-y-2 mt-4">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-green-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/process"
            className="font-semibold text-primary hover:underline"
          >
            See the Full Process →
          </Link>
        </div>
      </section>

      <section className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground">
          One Contract, One SLA, One Invoice.
        </h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
          Ready to consolidate your vendors and de-risk your operation? Let's
          build your CFO-ready business case for a fully integrated nearshore
          platform.
        </p>
        <Link
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button mt-6"
        >
          Book a 30-Minute Platform Demo
        </Link>
      </section>
    </main>
  );
}
