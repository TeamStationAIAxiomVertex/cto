
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, UserCheck, FileText, ShieldCheck, Laptop, Building, Scale, GanttChartSquare, BookOpen, Search, Code, CheckCircle, Brain, Book } from 'lucide-react';

// NOTE: This version is aggressively optimized for the Single Accountable SLA, Axiom Cortex, and competitor attack.

export const metadata: Metadata = {
  title: 'Nearshore IT Co-Pilot: Single Accountable SLA, 44 NeuroPsychometric Formulas', // Max Authority Title
  description: 'TeamStation AI is the only platform offering a Single Accountable SLA for nearshore engineering, powered by Axiom Cortex™ Cognitive AI and backed by 44 neuroPsychometric vetting formulas. Eliminate BairesDev-level risk.', // Max Authority Description
  keywords: 'nearshore it co-pilot, single accountable sla, 44 neuropsychometric formulas, axiom cortex, integrated nearshore services, teamstation vs bairesdev, platforming the nearshore it staff augmentation industry',
};

// JSON-LD Schema (Crucial for Authority)
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

// FULL CONTENT ARRAY: The components of the single SLA, architected with PSP (Pain-Solution-Proof)
const includedServices = [
    {
        icon: <Brain className="h-8 w-8 text-primary"/>,
        pain: 'Hiring is slow, subjective, and prone to bias?', // PAIN
        title: 'Cognitive AI Vetting (44 Formulas)', // SOLUTION
        description: 'Our Axiom Cortex™ engine applies 44 proprietary NeuroPsychometric formulas to evaluate human capacity and deliver a high-signal shortlist of 2-3 candidates per role, scientifically aligned to your CTO vision.',
        kpi: 'Time-to-Offer ≈ 9 days' // PROOF
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
        icon: <Scale className="h-8 w-8 text-primary"/>, // NEW: Risk Reporting
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

// Helper component for internal links (Crucial for SEO War Plan interlinking)
const LinkCard = ({ href, icon, title, description }: { href: string, icon: React.ReactNode, title: string, description: string }) => (
    <Link href={href} className="group flex flex-col p-4 border rounded-lg hover:border-primary/50 transition-all bg-white dark:bg-gray-800">
        <div className="flex items-center gap-3">
            {icon}
            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <ArrowRight className="h-4 w-4 mt-2 self-end text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
    </Link>
);


export default function IntegratedServicesPage() {
  return (
    <main className="container max-w-6xl py-12">
        {/* Schema Injection */}
        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
        />
        
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Nearshore IT Co-Pilot</span>
        </div>
        <header className="text-center my-12">
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Nearshore IT Co-Pilot: One Accountable SLA for Your Entire Operation</h1>
            <p className="mt-4 max-w-4xl mx-auto text-xl text-muted-foreground font-medium">
                We are the **only** intelligent services platform offering a **Single Accountable SLA/SOW/MSA** to build Nearshore IT teams at a touch of a button, fueled by **Axiom Cortex's** gigantic brain processing **44 NeuroPsychometric formulas**. This is how you defeat fragmented vendor risk.
            </p>
            <div className='mt-6 flex justify-center space-x-4'>
                 <Link href="/contact" className="cta-button bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg">Book a Demo & Get the SLA <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </div>
        </header>

        <section className="my-16 rounded-lg border border-yellow-500/50 bg-yellow-500/5 p-8 shadow-2xl">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">UNFUCKING HEARD OF: The Single Accountable SLA</h2>
                <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
                    Legacy staff augmentation forces you to act as the system integrator, coordinating 4–7 vendors for recruiting, payroll, security, and IP. This fragmented approach is riddled with risk, hidden costs, and finger-pointing.
                </p>
                <p className="mt-4 max-w-4xl mx-auto text-xl font-bold text-gray-900 dark:text-gray-100">
                    TeamStation flips the script: We are the single accountable party. One Master Services Agreement covers the entire operational lifecycle, guaranteeing talent quality, security compliance, and full EOR protection. **We take the risk so you can ship code.**
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

        
        {/* SEO WAR PLAN INTERLINKING IMPLEMENTATION: 7 highly authoritative internal links */}
        <section className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Download The Research: Science, Comparison, and Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 1. The Book Link */}
                <LinkCard 
                    href="/research/platforming-nearshore-it-staff-augmentation-book"
                    icon={<Book className="h-6 w-6 text-yellow-600" />}
                    title="Published Book: Platforming the Nearshore Industry"
                    description="Access our published research on replacing legacy staff augmentation with intelligent service infrastructure (Title: Platforming the Nearshore IT Staff Augmentation Industry)."
                />
                {/* 2. Axiom Cortex Research */}
                <LinkCard 
                    href="/research/axiom-cortex-scientific-foundations"
                    icon={<Brain className="h-6 w-6 text-primary" />}
                    title="The 44 Formulas: Axiom Cortex™ Scientific Deep Dive"
                    description="Understand the proprietary Neural Search Alignment Technology and the scientific method behind our 44 NeuroPsychometric vetting formulas."
                />
                {/* 3. BairesDev Comparison */}
                <LinkCard 
                    href="/comparisons/teamstation-vs-bairesdev"
                    icon={<Code className="h-6 w-6 text-red-600" />}
                    title="Comparison: TeamStation vs. BairesDev"
                    description="See a criteria-by-criteria analysis of how our integrated SLA minimizes Total Cost of Ownership and Vendor Risk compared to fragmented legacy firms."
                />
                {/* 4. CTO Playbook Hub */}
                <LinkCard 
                    href="/playbook"
                    icon={<BookOpen className="h-6 w-6 text-blue-600" />}
                    title="The CTO Playbook: Master Nearshore Strategy"
                    description="Access our entire collection of research-backed guides on nearshore strategy, economics, and scaling teams."
                />
                {/* 5. EOR/Compliance Programmatic Example */}
                <LinkCard 
                    href="/latam/mexico/eor"
                    icon={<FileText className="h-6 w-6 text-green-600" />}
                    title="EOR, Compliance, & IP Assignment Deep Dive"
                    description="Review the specifics of how Employer of Record (EOR) and compliance are managed in our key LATAM markets."
                />
                {/* 6. Programmatic Sourcing Example */}
                <LinkCard 
                    href="/hire/react-engineers-in-guadalajara"
                    icon={<Laptop className="h-6 w-6 text-purple-600" />}
                    title="Programmatic Sourcing: React Engineers in Guadalajara"
                    description="See how our platform executes high-velocity talent sourcing for specific roles and locations using our integrated model."
                />
                 {/* 7. Pricing/Methodology Link */}
                <LinkCard 
                    href="/pricing-and-methodology"
                    icon={<ShieldCheck className="h-6 w-6 text-primary" />}
                    title="Pricing & Methodology: The TCO Model"
                    description="Transparent view of our pricing structure and the proprietary methodology that makes the Single SLA economically superior."
                />
            </div>
        </section>

    </main>
  );
}
