import Link from "next/link";
import { CheckCircle, Trophy, Star, BookOpen, Beaker, GitCommit, Search, Users, BrainCircuit, FileCheck, Laptop, Gauge, ShieldCheck, FileText, Building, Scale } from "lucide-react";
import type { Metadata } from 'next';
import { Tooltip } from "@/components/Tooltip";

export const metadata: Metadata = {
  title: 'Nearshore IT Co-Pilot™ Platform | TeamStation AI',
  description: 'Run your entire LATAM engineering operation in one platform. Hire, equip, secure, and manage nearshore teams under one accountable SLA with TeamStation AI.',
};

const includedServices = [
    { icon: <Search className="h-6 w-6 text-primary"/>, title: 'Talent Sourcing & Vetting', description: 'Cognitive AI talent graph across 2.6M+ LATAM IT profiles, deduped and kept fresh.' },
    { icon: <BrainCircuit className="h-6 w-6 text-primary"/>, title: 'Cognitive Technical Evaluations', description: 'Bias-aware, evidence-based interview scoring against role-specific rubrics.' },
    { icon: <FileText className="h-6 w-6 text-primary"/>, title: 'EOR & Country Compliance', description: 'Contracts, payroll, taxes, and statutory benefits handled in-country.' },
    { icon: <Scale className="h-6 w-6 text-primary"/>, title: 'Payroll & Benefits', description: 'Local norms, 13th-month pay, PTO admin, and accurate withholdings.' },
    { icon: <Laptop className="h-6 w-6 text-primary"/>, title: 'Secure Devices & MDM', description: 'Procure, ship, enroll, and patch devices; global logistics included.' },
    { icon: <ShieldCheck className="h-6 w-6 text-primary"/>, title: 'Cybersecurity & E&O Insurance', description: 'Enterprise guardrails and liability coverage for peace of mind.' },
    { icon: <Building className="h-6 w-6 text-primary"/>, title: 'Offices & Workspaces', description: 'On-demand desks and meeting space across LATAM.' },
    { icon: <FileCheck className="h-6 w-6 text-primary"/>, title: 'Day-One Onboarding Automation', description: 'Access, first ticket, and a 30-60-90 plan baked in.' },
    { icon: <Gauge className="h-6 w-6 text-primary"/>(h-6 w-6 text-primary"/>, title: 'Performance & KPIs', description: 'TTH, TTP, retention, device compliance, and security posture tracked.' },
];

const recognitions = [
    { icon: <Trophy className="h-6 w-6 text-yellow-400" />, title: 'Market Leader', source: 'Recognized for AI innovation in nearshore IT delivery.' },
    { icon: <Star className="h-6 w-6 text-yellow-400" />, title: 'Service Excellence', source: 'Independent market leader for nearshore staffing.' },
    { icon: <BookOpen className="h-6 w-6 text-yellow-400" />, title: 'Peer-Reviewed Research', papers: [
        { title: "Heuristically Trained Neural AI for End-to-End Nearshore IT Staff Augmentation", href: "/research/axiom-cortex-scientific-report" },
        { title: "A Scientific Framework for Measuring Human Capacity in Nearshore Software Engineering", href: "/research/performance-evaluation-framework" },
        { title: "Nearshore IT Talent Performance Metrics in the Age of AI", href: "/research/performance-evaluation-framework" },
    ]},
    { icon: <Beaker className="h-6 w-6 text-yellow-400" />, title: 'Platform KPIs', kpis: [
        '2.6M+ LATAM IT profiles',
        'Time-to-Offer ≈ 9 days',
        '90-day retention ≥96%',
    ]},
]

const guardrails = [
    { title: "Hiring & EOR", owner: "TeamStation AI", details: ["Time-to-Offer ≈ 9 days", "Local contracts, payroll, taxes", "Background checks, IP/NDAs"] },
    { title: "Devices & Endpoint", owner: "TeamStation AI", details: ["Device MTPD ≤ 5 days", "MDM ≥ 99% (24h) enrollment", "Asset inventory, lock/wipe"] },
    { title: "Security & Insurance", owner: "TeamStation AI", details: ["Infosec workflows, incident triage < 4h", "Cybersecurity & E&O insurance", "Least-privilege access, audit trails"] },
    { title: "Offices & Workspaces", owner: "TeamStation AI", details: ["Desks/meeting rooms across 45+ hubs", "Secure Wi-Fi, badging policies", "Provisioning SLA: ≤ 3 business days"] },
];


export default function PlatformPage() {
  return (
    <main className="container max-w-7xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Platform</span>
        </div>
      <header className="text-center my-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The Nearshore IT Co-Pilot™ Platform</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Hire, equip, secure, and manage your entire LATAM engineering operation under one accountable SLA.
        </p>
      </header>

       <section className="my-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedServices.slice(0, 9).map((service) => (
                <div key={service.title} className="flex items-start gap-4">
                    {service.icon}
                    <div>
                        <h3 className="font-semibold text-foreground">{service.title}</h3>
                        <p className="text-sm text-muted-foreground m-0">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-8">
            <Link href="/services/integrated-services" className="cta-button">See All Included Services</Link>
        </div>
      </section>

      <section id="proof" className="my-24 bg-card rounded-xl p-8 md:p-12">
         <h2 className="text-center text-4xl font-bold text-foreground">Proof, Not Promises</h2>
         <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Independent recognition, peer-reviewed research, and platform delivery metrics—so you’re not taking our word for it.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 gap-8'>
            {recognitions.map(rec => (
                 <div className="flex items-start text-left gap-4" key={rec.title}>
                    {rec.icon}
                    <div>
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        {rec.source && <p className="text-sm text-muted-foreground m-0">{rec.source}</p>}
                        {rec.papers && (
                            <ul className="m-0 mt-1 list-none p-0 space-y-1">
                                {rec.papers.map(paper => (
                                    <li key={paper.title}><Link href={paper.href} className="text-sm text-primary hover:underline">{paper.title}</Link></li>
                                ))}
                            </ul>
                        )}
                         {rec.kpis && (
                            <ul className="m-0 mt-1 list-none p-0 space-y-1">
                                {rec.kpis.map(kpi => (
                                    <li key={kpi} className="text-sm text-muted-foreground">{kpi}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </section>

      <section id="guardrails" className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Operational Guardrails & SLAs</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">One owner, zero guesswork. Clear ownership across hiring, compliance, devices, and security so your risks are managed and your roadmap keeps moving.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {guardrails.map(item => (
                <div key={item.title} className="rounded-lg border bg-card p-6">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm font-semibold text-primary my-2">Owner: {item.owner}</p>
                    <ul className="space-y-2 mt-4">
                        {item.details.map(detail => (
                            <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-green-500" />
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
         <div className="text-center mt-8">
            <Link href="/process" className="font-semibold text-primary hover:underline">See the Full Process →</Link>
        </div>
      </section>

      <section className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">One Contract, One SLA, One Invoice.</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
          Ready to consolidate your vendors and de-risk your operation? Let's build your CFO-ready business case for a fully integrated nearshore platform.
        </p>
         <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
            Book a 15-Minute Platform Demo
        </Link>
      </section>
    </main>
  );
}

    