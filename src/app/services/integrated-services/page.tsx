
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, UserCheck, FileText, ShieldCheck, Laptop, Building, Scale, GanttChartSquare, BookOpen, Search, Code, CheckCircle, Brain, Book, Users, Target, MapPin, Calendar, Check, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Integrated Nearshore Services: One Accountable SLA for CTOs',
  description: 'Our single, accountable SLA for nearshore engineering bundles AI-driven talent, EOR, secure devices, and compliance to defeat legacy staff augmentation risk. Surpass BairesDev.',
  keywords: 'integrated nearshore services, nearshore SLA, managed nearshore teams, employer of record latam, secure nearshore development, teamstation vs bairesdev, nearshore IT staff augmentation',
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TeamStation AI: Nearshore IT Co-Pilot Service (Single SLA)",
    "provider": {"@type":"Organization","name":"TeamStation AI"},
    "serviceType": "Intelligent Nearshore IT Staff Augmentation Platform",
    "areaServed": "Americas",
    "description": metadata.description,
    "offers": {"@type":"Offer","url": "/contact"},
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Integrated Nearshore Engineering Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cognitive AI Vetting & Recruiting (Axiom Cortex™)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Single MSA Employer of Record (EOR) & Compliance" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ironclad IP, NDA, & Contractual Assignment" } },
        ]
    }
};

const includedServices = [
    {
        icon: <Brain className="h-8 w-8 text-primary"/>,
        pain: 'Hiring is slow, subjective, and prone to bias?',
        title: 'Cognitive AI Vetting (44 Formulas)',
        description: 'Our Axiom Cortex™ engine applies 44 proprietary NeuroPsychometric formulas to evaluate human capacity and deliver a high-signal shortlist of 2-3 candidates per role, scientifically aligned to your CTO vision.',
        kpi: 'Time-to-Offer ≈ 9 days'
    },
    {
        icon: <FileText className="h-8 w-8 text-primary"/>,
        pain: 'Worried about complex local labor laws?',
        title: 'Employer of Record (EOR) & Compliance',
        description: 'Country-legal contracts, payroll, taxes, and statutory benefits handled by TeamStation, centralizing HR and labor-law compliance under our master service agreement (MSA).',
        kpi: 'Zero compliance overhead'
    },
    {
        icon: <Building className="h-8 w-8 text-primary"/>,
        pain: 'Exposing IP to third-party contractors?',
        title: 'Ironclad IP, NDA, & Contractual Assignment',
        description: 'Ironclad, country-legal IP and NDA agreements are executed for every team member. We hold contractual liability, ensuring your intellectual property is protected from Day 1.',
        kpi: '100% IP assignment guarantee'
    },
    {
        icon: <Laptop className="h-8 w-8 text-primary"/>,
        pain: 'Concerned about insecure remote laptops?',
        title: 'Secure Devices & Endpoint Management (MDM)',
        description: 'We procure, ship, enroll, patch, and monitor corporate-owned laptops via MDM with CIS-aligned guardrails and 24/7 endpoint visibility, giving you an audit-ready device fleet.',
        kpi: 'MDM enrollment ≥99% (24h)'
    },
    {
        icon: <Scale className="h-8 w-8 text-primary"/>, 
        pain: 'Need proof your team is compliant?',
        title: 'Real-Time Risk & Audit Reporting',
        description: 'Continuous monitoring and detailed reporting on compliance adherence, device security posture, and legal documentation. Get audit-ready data on demand to satisfy internal compliance mandates.',
        kpi: 'Instant risk score visibility'
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
        pain: 'Exposed to liability from remote work?',
        title: 'Cybersecurity & Insurance Coverage Shield',
        description: 'All work is covered by our comprehensive Cybersecurity and E&O insurance. We enforce security workflows, NDAs, and IP protection, providing you with a contractual liability shield.',
        kpi: 'Liability shield included'
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary"/>, 
        pain: 'New hires taking weeks to ship code?',
        title: 'Onboarding & Performance Automation',
        description: 'Our platform automates pre-boarding checklists, Day-1 access, and first-ticket assignment. We track progress against a 30-60-90 day plan to ensure a fast, productive ramp-up.',
        kpi: 'Time-to-First-PR in 7–14 days'
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary"/>,
        pain: 'Drowning in vendor invoices?',
        title: 'Unified Billing & Total Cost of Ownership (TCO)',
        description: 'Receive one simple monthly invoice that covers everything. Our platform provides transparent TCO reporting, making it easy to justify your budget and track value.',
        kpi: '1 accountable invoice'
    },
    {
        icon: <Laptop className="h-8 w-8 text-primary"/>,
        pain: 'Need a physical space for your team?',
        title: 'LATAM Office Network Access (Optional)',
        description: 'Through our partnership with WeWork, get on-demand desks and meeting rooms in major LATAM hubs for planning sessions, interviews, and quarterly reviews. (Optional Add-on)',
        kpi: '45+ WeWork Hubs available'
    }
];

const Stat = ({ value, label }: { value: string, label: string }) => (
    <div className="text-center">
        <p className="text-4xl font-extrabold text-primary">{value}</p>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
    </div>
);

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <h4 className="font-semibold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{children}</p>
        </div>
    </div>
);


export default function IntegratedServicesPage() {
  return (
    <main className="container max-w-6xl py-12">
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
        />
        
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Services</span> / <span>Integrated Services</span>
        </div>
        <header className="text-center my-12">
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">One Accountable SLA for Your Entire Operation</h1>
            <p className="mt-4 max-w-4xl mx-auto text-xl text-muted-foreground font-medium">
                We are the <strong>only</strong> intelligent services platform offering a <strong>Single Accountable SLA/SOW/MSA</strong> to build Nearshore IT teams at a touch of a button, fueled by <strong>Axiom Cortex's</strong> gigantic brain processing <strong>44 NeuroPsychometric formulas</strong>. This is how you defeat fragmented vendor risk.
            </p>
            <div className='mt-6 flex justify-center space-x-4'>
                 <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">Book a Demo & Get the SLA <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </div>
        </header>

        <section className="my-16 rounded-lg border border-yellow-500/50 bg-yellow-500/5 p-8 shadow-2xl">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground">The Power of One Contract</h2>
                <p className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
                    Legacy staff augmentation forces you to act as the system integrator, coordinating 4–7 vendors for recruiting, payroll, security, and IP. This fragmented approach is riddled with risk, hidden costs, and finger-pointing.
                </p>
                <p className="mt-4 max-w-4xl mx-auto text-xl font-bold text-foreground">
                    TeamStation flips the script: We are the single accountable party. One Master Services Agreement covers the entire operational lifecycle, guaranteeing talent quality, security compliance, and full EOR protection. <strong>We take the risk so you can ship code.</strong>
                </p>
            </div>
        </section>

        <section className="my-16">
            <h2 className="text-center text-3xl font-bold">The Components of the Single Accountable SLA</h2>
            <p className="mt-2 max-w-4xl mx-auto text-center text-muted-foreground">
                We replace legacy staff augmentation with a holistic service infrastructure. Every piece below is covered by your one contract.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {includedServices.map((service) => (
                    <div key={service.title} className="rounded-lg border bg-card p-6 flex flex-col shadow-xl transition-all hover:ring-2 hover:ring-primary/50">
                        <p className="text-sm font-semibold text-primary">{service.pain}</p>
                        <div className="flex items-center gap-3 mt-3">
                            {service.icon}
                            <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground flex-grow">{service.description}</p>
                        <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                            <span className='font-bold'>Proof:</span> {service.kpi}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        <section className="my-24">
            <h2 className="text-center text-3xl font-bold mb-4">Cognitive AI-Mapped LATAM Talent, Matched to Your Stack</h2>
            <p className="text-center max-w-3xl mx-auto text-muted-foreground mb-12">
                Coverage + precision: 2.6M+ profiles across 45+ hubs, skill-to-stack matching, level calibration, and bias-aware evaluations powered by our <Link href="/research/hub" className="text-primary hover:underline">Axiom Cortex™ research</Link>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8 px-4 bg-muted/50 rounded-lg border">
                <Stat value="2.6M+" label="Profiles" />
                <Stat value="45+" label="Hubs" />
                <Stat value="≥85%" label="Short-list Relevance" />
                <Stat value="≈ 9 days" label="Time-to-Offer" />
                <Stat value="≥96%" label="90-Day Retention" />
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                <FeatureCard icon={<MapPin className="h-6 w-6 text-primary" />} title="Continental Coverage">
                    2.6M+ verified IT profiles mapped across LATAM tech hubs, refreshed continuously. Explore talent by <Link href="/hire/by-country" className="text-primary hover:underline">country</Link>.
                </FeatureCard>
                <FeatureCard icon={<Code className="h-6 w-6 text-primary" />} title="Skill-to-Stack Matching">
                    Embeddings align roles to your tools and patterns (e.g., React, Python, Salesforce) for high-relevance short-lists. See our <Link href="/hire/by-technology" className="text-primary hover:underline">supported technologies</Link>.
                </FeatureCard>
                <FeatureCard icon={<Target className="h-6 w-6 text-primary" />} title="Level Calibration (L1–L4)">
                    Clear proficiency bands tied to outcomes—from component work to org-level impact.
                </FeatureCard>
                <FeatureCard icon={<Users className="h-6 w-6 text-primary" />} title="Collaboration Readiness">
                    English proficiency, timezone overlap, and async habits are screened for day-one effectiveness.
                </FeatureCard>
                <FeatureCard icon={<Calendar className="h-6 w-6 text-primary" />} title="Market & Availability Signals">
                    City-level compensation envelopes and notice periods, so offers land fast and on budget.
                </FeatureCard>
                <FeatureCard icon={<Shield className="h-6 w-6 text-primary" />} title="Compliance-Ready Talent">
                    Background checks, EOR eligibility, and device readiness pre-verified to reduce friction. Learn more at our <Link href="/trust" className="text-primary hover:underline">Trust Center</Link>.
                </FeatureCard>
            </div>
        </section>

    </main>
  );
}
