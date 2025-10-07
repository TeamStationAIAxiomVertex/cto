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

export const metadata: Metadata = {
  title: "The Nearshore IT Co-Pilot™ Platform | TeamStation AI",
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

export default function PlatformPage() {
  return (
    <main className="container max-w-7xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        / <span>Platform</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          The Nearshore IT Co-Pilot™ Platform
        </h1>
        <div className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
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

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">
          Platform Architecture
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          A high-level look at the robust, scalable, and secure technology stack
          that powers the Nearshore IT Co-Pilot™ platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {architectureLayers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-lg border bg-card p-6 flex flex-col shadow-lg"
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
          teams—inside one platform and SLA.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {includedServices.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border bg-card p-6 flex flex-col shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
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
                Proof: {service.kpi}
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
        className="my-24 bg-card rounded-xl p-8 md:p-12 shadow-lg"
      >
        <h2 className="text-center text-4xl font-bold text-foreground">
          Proof, Not Promises
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
          Independent recognition, peer-reviewed research, and platform delivery
          metrics—so you’re not taking our word for it.
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
              className="rounded-lg border bg-card p-6 shadow-lg"
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
