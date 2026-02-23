import { Search, BrainCircuit, Handshake, Rocket, ShieldCheck, UserCheck, FileSearch, GanttChartSquare, Check, BookOpen, Star, Trophy, Beaker, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { WithTooltip } from "../../components/ui/tooltip";
import { RevealSection, StaggerGrid, StaggerItem } from "../../components/motion/MotionPrimitives";

export const metadata: Metadata = {
  title: 'Our Nearshore IT Process: One Accountable SLA',
  description: 'Our engineered system for hiring LATAM engineers under one SLA. We deliver Day-1-ready talent with secure onboarding.',
  keywords: 'nearshore it process, nearshore sla, cognitive ai vetting, secure onboarding, latam engineers, day-1 ready talent',
};

const processSystemInputs = [
  {
    icon: <Search className="h-4 w-4 text-primary" />,
    title: "Role + country targeting",
    detail: "Job scope, success criteria, LATAM markets, comp bands, hiring constraints.",
  },
  {
    icon: <BrainCircuit className="h-4 w-4 text-primary" />,
    title: "Cognitive sourcing + vetting",
    detail: "Always-on sourcing, structured technical evaluation, evidence locker scoring.",
  },
  {
    icon: <Handshake className="h-4 w-4 text-primary" />,
    title: "Offer, EOR, compliance",
    detail: "Contracts, payroll, taxes, benefits, legal onboarding and start-date readiness.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-primary" />,
    title: "Devices + secure access",
    detail: "Procurement, MDM enrollment, identity/access setup, Day-1 controls.",
  },
];

const processControlPlaneModules = [
  "MSA/SOW governance",
  "Workflow orchestration",
  "Evidence locker & audit trail",
  "Security / compliance controls",
  "SLA checkpoints",
  "Ramp telemetry",
];

const processSystemOutputs = [
  {
    icon: <Rocket className="h-4 w-4 text-green-400" />,
    title: "Day-1-ready deployment",
    detail: "Engineer starts with legal, device, and access readiness pre-verified.",
  },
  {
    icon: <Check className="h-4 w-4 text-green-400" />,
    title: "Deterministic hiring path",
    detail: "Evidence-based decisions reduce mismatch risk and coordination drag.",
  },
  {
    icon: <ArrowRight className="h-4 w-4 text-green-400" />,
    title: "Faster production ramp",
    detail: "Measured path from Day 1 to first PR with 30-60-90 accountability.",
  },
];

export default function ProcessPage() {
    const processSteps = [
        { title: "Book a Demo", description: "See the live console: jobs, short-lists, devices/MDM, compliance, KPIs.", artifact: "Demo environment + sample dashboards." },
        { title: "Platform Onboarding", description: "Create your org, users, roles, and legal entity; connect tools (Slack/Jira/GitHub/IdP).", artifact: "Org workspace, SSO, billing & DPA on file." },
        { title: "Add Jobs & Calibrate Success", description: "Define stack, level (L1 L4), ownership scope, and the 90-day outcome you need.", artifact: "Role profile + 'Success at 90 Days' spec." },
        { title: <>Pick <Link href="/hire/by-country" className="text-primary hover:underline">LATAM cities</Link>; align salary bands, benefits norms, and hiring constraints.</>, artifact: "Country shortlist + comp/benefit bands.", stepTitle: "Country Targeting & Market Bands" },
        { title: <>Our <Link href="/research/axiom-cortex-scientific-report" className="text-primary hover:underline">Cognitive AI</Link> is always-on sourcing; candidates are scored against your role profile to find the ideal mental shape.</>, artifact: "5 8 candidate short-list (relevance ≥ 85%).", stepTitle: "Cognitive AI Sourcing & Short-List" },
        { title: <Link href="/technical-interview-evaluation" className="text-primary hover:underline">Technical Evaluation (Bias-Aware)</Link>, description: "A human expert conducts a structured, evidence-based interview. Our Cognitive AI then synthesizes the conversation to generate an 'Evidence Locker' with explainable scoring.", artifact: "Scorecards + hiring signal; mismatch rate ≤ 10%." },
        { title: "Client Interview Loop", description: "Calibrated panel agenda; consolidate notes and go/no-go in the platform.", artifact: "Finalist(s) + reference checks." },
        { title: "Offer, EOR & Compliance", description: "We issue enforceable contracts, handle payroll, taxes, and statutory benefits.", artifact: "Signed offer; compliant start date set." },
        { title: "Devices, MDM & Day-1 Access", description: "Procure/ship device, enroll MDM, verify tool/account access before Day-1.", artifact: "Device MTPD ≤ 5 days, MDM enrollment ≥ 99%." },
        { title: "Day-1 to First PR + 30-60-90", description: "First ticket assigned; pair intro; measurable ramp to autonomy.", artifact: "Time-to-First-PR 7 14 days, 90-day retention ≥ 96%." }
    ];

    const securityPillars = [
        { 
            icon: <FileSearch className="h-8 w-8 text-primary"/>,
            pain: "Worried about navigating complex local labor laws?",
            title: 'EOR & Country Compliance', 
            description: 'Contracts, payroll, statutory benefits, PTO, taxes fully compliant per country and contractually guaranteed in the SOW.',
            kpi: "Zero compliance overhead"
        },
        { 
            icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
            pain: "Exposed by insecure remote laptops?",
            title: 'Device Security & MDM', 
            description: 'Encrypted endpoints, provisioning, auto-patching, 24/7 monitoring, and remote lock/wipe, all governed by the MSA.',
            kpi: "MDM enrollment ≥99% (24h)"
        },
        { 
            icon: <GanttChartSquare className="h-8 w-8 text-primary"/>, 
            pain: "Carrying all the liability for vendor mistakes?",
            title: 'Insurance & IP Protection', 
            description: 'Cyber/E&O coverage, NDAs & DPAs, and work-for-hire IP assignment, all defined in the Master Services Agreement.',
            kpi: "Liability shield included"
        },
        { 
            icon: <UserCheck className="h-8 w-8 text-primary"/>, 
            pain: "Unsure who you're really hiring?",
            title: 'Background & Identity Checks', 
            description: 'KYC, criminal record, employment & education verification, with results stored in an auditable evidence locker.',
            kpi: "100% auditable record"
        }
    ];

    const recognitions = [
        { icon: <Trophy className="h-8 w-8 text-yellow-400" />, title: 'Market Leader Award', source: 'Recognized for Cognitive AI innovation in nearshore IT delivery.' },
        { icon: <Star className="h-8 w-8 text-yellow-400" />, title: 'Service Excellence', source: 'Selected for service excellence and trust signals.' },
        { icon: <BookOpen className="h-8 w-8 text-yellow-400" />, title: 'Peer-Reviewed Research', source: 'Scientific papers on Cognitive AI in talent evaluation and performance.' },
        { icon: <Beaker className="h-8 w-8 text-yellow-400" />, title: 'Field-Proven', source: '2.6M+ profiles, ≈9-day TTO, 96% retention.' },
    ]

  return (
    <main className="container max-w-6xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Process</span>
        </div>
      <header className="glass-panel gradient-ring hero-depth system-grid text-center my-12 rounded-2xl p-8 md:p-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">One Accountable Process, Guaranteed by Contract</h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
          This isn't a checklist; it's an engineered system. Our Nearshore IT Co-Pilot™ provides one accountable workflow for hiring, compliance, and secure devices, governed by a single <WithTooltip label="A Master Services Agreement (MSA) and Statement of Work (SOW) form a legally binding contract for our services."><span className="border-b border-dashed">MSA/SOW</span></WithTooltip>. We deliver Day-1-ready LATAM engineers so you can focus on shipping product, not managing vendors.
        </p>
         <div className="mt-6 font-semibold text-primary">
            Time-to-Offer ≈ 9 days • Day-1 Tool Readiness ≥ 95% • First PR in 7 14 days
          </div>
      </header>

      <RevealSection className="my-16">
        <div className="glass-panel gradient-ring rounded-2xl border border-border/70 p-6 md:p-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground">
            Process System Visual
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-center text-muted-foreground">
            The process is a governed operating system, not a recruiter checklist: hiring, compliance, devices, and onboarding flow through one accountable control plane under the MSA/SOW.
          </p>

          <div className="mt-8 grid gap-4 xl:grid-cols-[1.05fr_.95fr_1.05fr]">
            <div className="rounded-xl border border-border/70 bg-background/55 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">Inputs</h3>
                <span className="text-xs text-muted-foreground">Pre-hire complexity</span>
              </div>
              <div className="mt-3 space-y-3">
                {processSystemInputs.map((item) => (
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
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">Process Control Plane</h3>
                  <span className="flex items-center gap-1.5 text-[11px] text-foreground/80">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                    </span>
                    SLA live
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  One accountable workflow for sourcing, vetting, legal onboarding, secure device readiness, and ramp-to-productivity.
                </p>

                <div className="mt-4 grid gap-2">
                  {processControlPlaneModules.map((module, idx) => (
                    <div key={module} className="flex items-center justify-between rounded-lg border border-border/60 bg-card/40 px-3 py-2">
                      <span className="text-xs font-medium text-foreground">{module}</span>
                      <span className="h-1.5 w-16 rounded-full bg-background/70">
                        <span
                          className={`block h-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-300 ${
                            idx % 3 === 0 ? "w-[80%]" : idx % 3 === 1 ? "w-[92%]" : "w-[86%]"
                          } animate-pulse`}
                        />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg border border-border/60 bg-background/45 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Normalized process flow</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/90">
                    {["scope", "source", "vet", "contract", "secure", "deploy"].map((step, idx, arr) => (
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
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">Outputs</h3>
                <span className="text-xs text-muted-foreground">Contract-backed outcomes</span>
              </div>
              <div className="mt-3 space-y-3">
                {processSystemOutputs.map((item) => (
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
                  One SLA. One system of record. One accountable process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Your Platform-Driven Hiring Flow</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">One SLA • System of Record • Audit Trails • US-Aligned Delivery</p>
        <div className="mt-12 flow-root">
          <div className="max-w-3xl mx-auto">
            <ul className="-mb-8">
              {processSteps.map((step, stepIdx) => (
                <li key={step.title?.toString() || step.stepTitle}>
                  <div className="relative pb-8">
                    {stepIdx !== processSteps.length - 1 ? (
                      <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background flex-shrink-0">
                          <span className="text-primary font-bold">{stepIdx + 1}</span>
                        </div>
                      <div className="min-w-0 flex-1 pt-1.5">
                        {stepIdx === 0 ? (
                            <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">
                                Book a Demo Call
                            </Link>
                        ) : (
                            <div className="text-lg font-semibold text-foreground">{step.stepTitle || step.title}</div>
                        )}
                        <p className="mt-1 text-sm text-muted-foreground">{step.description || step.title}</p>
                        <p className="mt-2 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block">
                          <span className="font-bold">Artifact:</span> {step.artifact}
                          </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>


       <RevealSection className="my-24 text-center">
        <h2 className="text-4xl font-bold text-foreground">Security, Compliance & Liability   Under One SLA</h2>
        <p className='mt-4 mx-auto max-w-3xl text-lg text-muted-foreground'>
            We carry the risk, contractually. You keep the velocity.
        </p>
        <StaggerGrid className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-12 gap-8 max-w-4xl mx-auto'>
            {securityPillars.map(pillar => (
                <StaggerItem key={pillar.title}>
                <div className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 flex flex-col text-left shadow-lg">
                    <p className="text-sm font-semibold text-primary">{pillar.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {pillar.icon}
                        <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{pillar.description}</p>
                    <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                        <span className='font-bold'>Evidence:</span> {pillar.kpi}
                    </p>
                </div>
                </StaggerItem>
            ))}
        </StaggerGrid>
      </RevealSection>
      
       <RevealSection className="my-24 text-center">
        <h2 className="text-4xl font-bold text-foreground">Recognized. Research-Backed. Field-Proven.</h2>
        <p className='mt-4 mx-auto max-w-3xl text-lg text-muted-foreground'>
            Independent awards and peer-reviewed research underpin the platform that powers your LATAM teams.
        </p>
        <StaggerGrid className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 gap-8 max-w-6xl mx-auto'>
            {recognitions.map(rec => (
                 <StaggerItem key={rec.title}>
                 <div className="glass-card-interactive rounded-lg border border-border/70 bg-background/70 flex items-start text-left gap-4 p-4 shadow-lg">
                    {rec.icon}
                    <div>
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        <p className="text-sm text-muted-foreground">{rec.source}</p>
                    </div>
                </div>
                </StaggerItem>
            ))}
        </StaggerGrid>
      </RevealSection>

      <RevealSection className="glass-panel gradient-ring text-center rounded-lg border border-border/70 p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground">Ready to Hire Under One Accountable SLA?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
           Let's map your roles, security needs, and go-live timeline.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a 30-Minute Discovery Call</Link>
      </RevealSection>
    </main>
  );
}

    
