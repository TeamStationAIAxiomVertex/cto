
import { Search, BrainCircuit, Handshake, Rocket, ShieldCheck, UserCheck, FileSearch, GanttChartSquare, Check, BookOpen, Star, Trophy, Beaker } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Nearshore IT Staff Augmentation Process | TeamStation AI',
  description: 'Our engineered system for hiring LATAM engineers under one SLA. From role calibration and AI-vetting to secure devices and first PR, we deliver Day-1-ready talent.',
};

export default function ProcessPage() {
    const processSteps = [
        { title: "Book a Demo", description: "See the live console: jobs, short-lists, devices/MDM, compliance, KPIs.", artifact: "Demo environment + sample dashboards." },
        { title: "Platform Onboarding", description: "Create your org, users, roles, and legal entity; connect tools (Slack/Jira/GitHub/IdP).", artifact: "Org workspace, SSO, billing & DPA on file." },
        { title: "Add Jobs & Calibrate Success", description: "Define stack, level (L1–L4), ownership scope, and the 90-day outcome you need.", artifact: "Role profile + 'Success at 90 Days' spec." },
        { title: "Country Targeting & Market Bands", description: "Pick LATAM cities; align salary bands, benefits norms, and hiring constraints.", artifact: "Country shortlist + comp/benefit bands." },
        { title: "Cognitive AI Sourcing & Short-List", description: "Always-on sourcing; candidates scored to your role profile.", artifact: "5–8 candidate short-list (relevance ≥ 85%)." },
        { title: "Technical Evaluation (Bias-Aware)", description: "Structured, evidence-based interviews; explainable scoring across core competencies.", artifact: "Scorecards + hiring signal; mismatch rate ≤ 10%." },
        { title: "Client Interview Loop", description: "Calibrated panel agenda; consolidate notes and go/no-go in the platform.", artifact: "Finalist(s) + reference checks." },
        { title: "Offer, EOR & Compliance", description: "We issue enforceable contracts, handle payroll, taxes, and statutory benefits.", artifact: "Signed offer; compliant start date set." },
        { title: "Devices, MDM & Day-1 Access", description: "Procure/ship device, enroll MDM, verify tool/account access before Day-1.", artifact: "Device MTPD ≤ 5 days, MDM enrollment ≥ 99%." },
        { title: "Day-1 to First PR + 30-60-90", description: "First ticket assigned; pair intro; measurable ramp to autonomy.", artifact: "Time-to-First-PR 7–14 days, 90-day retention ≥ 96%." }
    ];

    const securityPillars = [
        { icon: <FileSearch className="h-8 w-8 text-primary"/>, title: 'EOR & Country Compliance', description: 'Contracts, payroll, statutory benefits, PTO, taxes—fully compliant per country.' },
        { icon: <ShieldCheck className="h-8 w-8 text-primary"/>, title: 'Device Security & MDM', description: 'Encrypted endpoints, provisioning, auto-patching, 24/7 monitoring, remote lock/wipe.' },
        { icon: <GanttChartSquare className="h-8 w-8 text-primary"/>, title: 'Insurance & IP Protection', description: 'Cyber/E&O coverage, NDAs & DPAs, work-for-hire IP assignment, U.S.-enforceable agreements.' },
        { icon: <UserCheck className="h-8 w-8 text-primary"/>, title: 'Background & Identity Checks', description: 'KYC, criminal record, employment & education verification, optional credit checks.' }
    ];

    const recognitions = [
        { icon: <Trophy className="h-6 w-6 text-yellow-400" />, title: 'Market Leader Award', source: 'Recognized for AI innovation in nearshore IT delivery.' },
        { icon: <Star className="h-6 w-6 text-yellow-400" />, title: 'Service Excellence', source: 'Selected for service excellence and trust signals.' },
        { icon: <BookOpen className="h-6 w-6 text-yellow-400" />, title: 'Peer-Reviewed Research', source: 'Scientific papers on AI in talent evaluation and performance.' },
        { icon: <Beaker className="h-6 w-6 text-yellow-400" />, title: 'Field-Proven', source: '2.6M+ profiles, ≈9-day TTO, 96% retention.' },
    ]

  return (
    <main className="container max-w-6xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Process</span>
        </div>
      <header className="text-center my-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">From Mandate to Mission-Ready</h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
          This isn't a checklist; it's an engineered system. One accountable workflow for hiring, EOR/payroll, compliance, and secure devices, all under a single SLA. We deliver Day-1-ready LATAM engineers so you can focus on shipping product, not managing vendors.
        </p>
         <div className="mt-6 font-semibold text-primary">
            Time-to-Offer ≈ 9 days • Day-1 Tool Readiness ≥ 95% • First PR in 7–14 days
          </div>
      </header>

      <div className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Your Platform-Driven Hiring Flow</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">One SLA • System of Record • Audit Trails • US-Aligned Delivery</p>
        <div className="mt-12 flow-root">
          <div className="max-w-3xl mx-auto">
            <ul className="-mb-8">
              {processSteps.map((step, stepIdx) => (
                <li key={step.title}>
                  <div className="relative pb-8">
                    {stepIdx !== processSteps.length - 1 ? (
                      <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background flex-shrink-0">
                          <span className="text-primary font-bold">{stepIdx + 1}</span>
                        </div>
                      <div className="min-w-0 flex-1 pt-1.5">
                        <div className="text-lg font-semibold text-foreground">{step.title}</div>
                        <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
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
      </div>


       <div className="my-24 text-center">
        <h2 className="text-4xl font-bold">Security, Compliance & Liability — Under One SLA</h2>
        <p className='mt-4 mx-auto max-w-3xl text-lg text-muted-foreground'>
            We carry the risk. You keep the velocity.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 gap-8 max-w-6xl mx-auto'>
            {securityPillars.map(pillar => (
                 <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card" key={pillar.title}>
                    {pillar.icon}
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{pillar.description}</p>
                </div>
            ))}
        </div>
      </div>
      
       <div className="my-24 text-center">
        <h2 className="text-4xl font-bold">Recognized. Research-Backed. Field-Proven.</h2>
        <p className='mt-4 mx-auto max-w-3xl text-lg text-muted-foreground'>
            Independent awards and peer-reviewed research underpin the platform that powers your LATAM teams.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 gap-8 max-w-6xl mx-auto'>
            {recognitions.map(rec => (
                 <div className="flex items-start text-left gap-4 p-4 rounded-lg" key={rec.title}>
                    {rec.icon}
                    <div>
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        <p className="text-sm text-muted-foreground">{rec.source}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire Under One Accountable SLA?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
           Let's map your roles, security needs, and go-live timeline.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a 15-Minute Discovery Call</Link>
      </div>
    </main>
  );
}
