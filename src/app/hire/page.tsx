import Link from "next/link";
import {
  Building,
  Code,
  User,
  ArrowRight,
  Shapes,
  ShieldCheck,
  Gauge,
  FileText,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import FurtherReading from "../../components/seo/FurtherReading";
import CardGuidanceTooltip from "../../components/ui/card-guidance-tooltip";
import { InfoDropdown } from "../../components/client/info-dropdown";
import CTOFieldManualBlock from "../../components/seo/CTOFieldManualBlock";
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Hire Vetted Nearshore Engineers & LATAM IT Teams",
  description:
    "De-risk your roadmap. Hire elite, pre-vetted LATAM engineers by role, tech, or country. Secure and compliant staff augmentation.",
  keywords:
    "hire nearshore engineers, latam it staff augmentation, hire vetted latam engineers, hire by role, hire by technology, hire by country",
};

const hireSystemInputs = [
  {
    icon: <User className="h-4 w-4 text-primary" />,
    title: "Role & bottleneck intake",
    detail: "Map the delivery constraint to ownership, scope, and required competencies.",
  },
  {
    icon: <Code className="h-4 w-4 text-primary" />,
    title: "Stack fit validation",
    detail: "Validate practical execution depth against your actual engineering stack.",
  },
  {
    icon: <Building className="h-4 w-4 text-primary" />,
    title: "LATAM country fit",
    detail: "Optimize overlap, communication cadence, and collaboration speed.",
  },
  {
    icon: <Shapes className="h-4 w-4 text-primary" />,
    title: "Team topology design",
    detail: "Define stream-aligned, platform, and enabling team structure before scaling.",
  },
];

const hireControlPlaneModules = [
  "Requisition normalization",
  "Structured vetting workflow",
  "Evidence scoring & review",
  "Risk flags & mismatch controls",
  "Offer / onboarding orchestration",
  "Ramp telemetry & retention signals",
];

const hireSystemOutputs = [
  {
    icon: <CheckCircle className="h-4 w-4 text-green-400" />,
    title: "Deterministic hiring decisions",
    detail: "Candidates evaluated against delivery risk, not resume keyword density.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-green-400" />,
    title: "Governed deployment readiness",
    detail: "Security, compliance, and onboarding controls aligned before Day 1.",
  },
  {
    icon: <Gauge className="h-4 w-4 text-green-400" />,
    title: "Predictable ramp velocity",
    detail: "Faster team activation with measurable readiness and lower coordination drag.",
  },
];

const hireServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hire Elite Nearshore Engineers | TeamStation AI",
  description: "Pre-vetted LATAM engineers by role, technology, and country under one compliant SLA.",
  url: "https://cto.teamstation.dev/hire",
  serviceType: "IT Staff Augmentation",
  areaServed: { "@type": "Country", name: "United States" },
  provider: { "@type": "Organization", name: "TeamStation AI", url: "https://teamstation.dev" },
  audience: { "@type": "Audience", audienceType: "Chief Technology Officer, VP of Engineering" },
  inLanguage: "en-US",
};

export default function HirePage() {
  const hireOptions = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Hire by Role",
      pain: "You don't need a 'developer.' You need a specific set of competencies.",
      solution: "We map business bottlenecks to role competency and deliver vetted specialists.",
      description:
        "Find elite, pre-vetted LATAM engineers matched to the specific, high-stakes competencies your business demands, from SRE to AppSec to AI/ML.",
      href: "/hire/by-role",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Hire by Technology",
      pain: "Your stack is modern and specific. Your team must be too.",
      solution: "We validate deep stack mastery using practical delivery scenarios.",
      description:
        "Find engineers with proven, deep expertise in the technologies you rely on daily, not just a passing familiarity listed on a resume.",
      href: "/hire/by-technology",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Hire by Country",
      pain: "Losing a full day to time zones is killing your velocity.",
      solution: "We align teams in LATAM with real time collaboration and low handoff delay.",
      description:
        "Leverage the top engineering hubs across Latin America, perfectly aligned with your time zone for the real-time collaboration that agile demands.",
      href: "/hire/by-country",
    },
    {
      icon: <Shapes className="h-8 w-8 text-primary" />,
      title: "Hire by Team Topologies",
      pain: "Are your teams structured for scale or for silos?",
      solution: "We structure stream aligned, platform, and enabling teams for faster flow.",
      description:
        "From stream-aligned squads to platform teams, we build the LATAM engineering structures you need to accelerate delivery and reduce cognitive load.",
      href: "/hire/by-team-topologies",
    },
  ];

  return (
    <main className="manual-page content-shell py-10">
      <JsonLd data={hireServiceSchema} />
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        / <span>Hire</span>
      </div>
      <header className="glass-panel gradient-ring hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
          Stop Gambling on Talent. Start De-Risking Your Roadmap.
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          You're here because a generic "developer" isn't enough. You have a
          critical, high-stakes role to fill, and a mis-hire could cost you
          months. Our integrated platform doesn't just find candidates it
          provides scientific evidence of their ability to solve your specific
          problems, so you can build with confidence.
        </p>
        <div className="mt-4 flex justify-center">
          <InfoDropdown label="How this page helps">
            <p>This hub routes you by role, stack, country, and team topology so you can fix the exact delivery constraint first.</p>
          </InfoDropdown>
        </div>
        <nav className="mt-6 flex justify-center gap-4 text-sm">
          <Link href="/engineering-doctrine" className="text-primary hover:underline">
            Engineering Doctrine
          </Link>
          <Link href="/playbook/hub" className="text-primary hover:underline">
            CTO Playbook
          </Link>
          <Link href="/comparisons" className="text-primary hover:underline">
            Vendor Comparisons
          </Link>
          <Link href="/research/hub" className="text-primary hover:underline">
            Our Research
          </Link>
        </nav>
      </header>

      <section className="glass-panel gradient-ring my-10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          Hiring System Visual
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-center text-sm md:text-base text-muted-foreground">
          How TeamStation AI turns fragmented hiring decisions into a governed nearshore engineering LATAM hiring system: intake signals flow through one evaluation control plane and produce deployment-ready engineering squads.
        </p>

        <div className="mt-8 grid gap-4 xl:grid-cols-[1.05fr_.95fr_1.05fr]">
          <div className="rounded-xl border border-border/70 bg-background/55 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                Inputs
              </h3>
              <span className="text-xs text-muted-foreground">Buyer-side complexity</span>
            </div>
            <div className="mt-3 space-y-3">
              {hireSystemInputs.map((item) => (
                <div key={item.title} className="rounded-lg border border-border/60 bg-card/40 p-3">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-background/55 p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.16),transparent_50%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.14),transparent_42%)]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Hiring Control Plane
                </h3>
                <span className="flex items-center gap-1.5 text-[11px] text-foreground/80">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  </span>
                  Live review
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                One governed workflow for sourcing, vetting, candidate evidence review, and deployment readiness.
              </p>

              <div className="mt-4 grid gap-2">
                {hireControlPlaneModules.map((module, idx) => (
                  <div
                    key={module}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-card/40 px-3 py-2"
                  >
                    <span className="text-xs font-medium text-foreground">{module}</span>
                    <span className="h-1.5 w-16 rounded-full bg-background/70">
                      <span
                        className={`block h-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-300 ${
                          idx % 3 === 0 ? "w-[78%]" : idx % 3 === 1 ? "w-[90%]" : "w-[84%]"
                        } animate-pulse`}
                      />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-border/60 bg-background/45 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Normalized hiring flow
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/90">
                  {["intake", "vet", "score", "review", "offer", "deploy"].map((step, idx, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-md border border-border/60 bg-card/40 px-2 py-1">{step}</span>
                      {idx < arr.length - 1 ? <ArrowRight className="h-3.5 w-3.5 text-primary" /> : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/70 bg-background/55 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                Outputs
              </h3>
              <span className="text-xs text-muted-foreground">CTO-ready decisions</span>
            </div>
            <div className="mt-3 space-y-3">
              {hireSystemOutputs.map((item) => (
                <div key={item.title} className="rounded-lg border border-border/60 bg-card/40 p-3">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-3">
              <p className="text-xs font-semibold text-primary">
                Evidence-based hiring + governed deployment = lower roadmap risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-panel gradient-ring my-10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold">Hiring Decision Snapshot</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Start from the bottleneck. If delivery is slow use role and topology paths. If execution quality is unstable use stack and country paths with overlap and governance controls.
        </p>
        <div className="mt-5 card-grid-tight-3">
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Delivery constraint</p>
            <p className="mt-1 text-sm text-muted-foreground">Legacy vendor models hide risk until after onboarding.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Operating response</p>
            <p className="mt-1 text-sm text-muted-foreground">Evidence driven vetting plus structured operating model setup.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Validation cue</p>
            <p className="mt-1 text-sm text-muted-foreground">Faster delivery ramp with less coordination drag.</p>
          </div>
        </div>
      </section>

      <div className="card-grid-tight-2 my-12">
        {hireOptions.map((option) => (
          <div
            key={option.href}
            className="glass-panel gradient-ring glass-card-interactive rounded-2xl group relative mx-auto w-full max-w-md flex flex-col p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-primary">{option.pain}</p>
              <CardGuidanceTooltip issue={option.pain} solution={option.solution} />
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                {option.icon}
              </span>
              <h2 className="text-xl font-bold text-foreground">
                {option.title}
              </h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground flex-grow">
              {option.description}
            </p>
            <Link
              href={option.href}
              className="mt-6 flex items-center text-sm font-semibold text-primary stretched-link"
            >
              Explore {option.title} Options{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>

      <section className="glass-panel gradient-ring my-10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold">How CTO teams should use this hub</h2>
        <div className="mt-4 space-y-5 text-muted-foreground leading-7">
          <h3 className="text-lg font-semibold text-foreground">Start with the business risk not the role name</h3>
          <p>
            If release confidence is falling, route first to role and topology pages. If architecture quality
            is uneven, route first to technology pages. If collaboration speed is the blocker, route first to
            country overlap pages. This keeps the hiring conversation tied to delivery outcomes instead of title
            inflation or tool checklists.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use role paths for ownership clarity and operating accountability.</li>
            <li>Use technology paths for practical execution depth validation.</li>
            <li>Use country paths for overlap, communication fit, and delivery cadence.</li>
            <li>Use topology paths for system level team design.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">Contextual interlinking mesh for decision continuity</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/hire/by-role" className="text-primary hover:underline">hire by role path for capability based staffing</Link></li>
            <li><Link href="/hire/by-technology" className="text-primary hover:underline">hire by technology path for stack level fit</Link></li>
            <li><Link href="/hire/by-country" className="text-primary hover:underline">hire by country path for collaboration overlap</Link></li>
            <li><Link href="/playbook/hub" className="text-primary hover:underline">CTO playbook hub for operating decisions</Link></li>
            <li><Link href="/research/hub" className="text-primary hover:underline">research hub for evidence based governance</Link></li>
            <li><a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine for systems execution</a></li>
            <li><a href="https://research.teamstation.dev/protocols/economics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">economics protocols for leadership tradeoffs</a></li>
            <li><a href="https://hire.teamstation.dev/nearshore-software-development" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nearshore operating overview for buyer alignment</a></li>
          </ul>
        </div>
      </section>

      <CTOFieldManualBlock
        title="Distributed Engineering Operating Manual for Hiring"
        focus="the full hiring path across role, technology, country, and topology"
      />

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to build your team?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Let's discuss your specific needs. In 15 minutes, we can map your
          roles, security requirements, and a go-live timeline.
        </p>
        <Link
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button mt-6"
        >
          Book a Strategy Call
        </Link>
      </div>
    </main>
  );
}
