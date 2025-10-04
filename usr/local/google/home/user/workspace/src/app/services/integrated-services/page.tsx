
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, UserCheck, FileText, ShieldCheck, Laptop, Building, Scale, GanttChartSquare, BookOpen, Search, Code, CheckCircle } from 'lucide-react';

// NOTE: FurtherReading component is removed and replaced by explicit interlinking to fulfill the SEO War Plan

export const metadata: Metadata = {
  title: 'Integrated Nearshore Services: One Accountable SLA for CTOs', // Optimized title for SEO War Plan
  description: 'Our single, accountable SLA for nearshore engineering bundles AI-driven talent, EOR, secure devices, and compliance to defeat legacy staff augmentation risk. Surpass BairesDev.', // Optimized description
  keywords: 'integrated nearshore services, nearshore SLA, managed nearshore teams, employer of record latam, secure nearshore development, teamstation vs bairesdev, nearshore IT staff augmentation',
};

// JSON-LD Schema (REQUIRED by SEO War Plan)
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Integrated Nearshore Services: One Accountable SLA",
    "provider": {"@type":"Organization","name":"TeamStation AI"},
    "serviceType": "Nearshore IT Staff Augmentation Platform",
    "areaServed": "Americas",
    "description": "Our single, accountable SLA for nearshore engineering bundles AI-driven talent, EOR, secure devices, and compliance to defeat legacy staff augmentation risk. Surpass BairesDev.",
    "offers": {"@type":"Offer","url": "/contact"},
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Integrated Nearshore Engineering Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cognitive AI Vetting & Recruiting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employer of Record (EOR) & Compliance" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Secure Devices & Endpoint Management (MDM)" } },
        ]
    }
};

// FULL CONTENT ARRAY (includes Risk, IP/NDA, and original services)
const includedServices = [
    {
        icon: <UserCheck className="h-8 w-8 text-primary"/>,
        pain: 'Struggling to find elite LATAM talent?',
        title: 'Cognitive AI Vetting & Recruiting',
        description: 'Our Axiom Cortex™ engine and expert LATAM recruiters handle sourcing, scientific vetting, and interview coordination, delivering a high-signal shortlist of 2-3 candidates per role.',
        kpi: 'Time-to-Offer ≈ 9 days'
    },
    {
        icon: <FileText className="h-8 w-8 text-primary"/>,
        pain: 'Worried about complex local labor laws?',
        title: 'Employer of Record (EOR) & Compliance',
        description: 'Country-legal contracts, payroll, taxes, and statutory benefits handled by TeamStation, centralizing HR and labor-law compliance under our master service agreement.',
        kpi: 'Zero compliance overhead'
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
        title: 'Cybersecurity & Insurance Coverage',
        description: 'All work is covered by our comprehensive Cybersecurity and E&O insurance. We enforce security workflows, NDAs, and IP protection, providing you with a contractual liability shield.',
        kpi: 'Liability shield included'
    },
    {
        icon: <Building className="h-8 w-8 text-primary"/>, // NEW: IP/NDA
        pain: 'Exposing IP to third-party contractors?',
        title: 'IP, NDA, & Contractual Assignment',
        description: 'Ironclad, country-legal IP and NDA agreements are executed for every team member. We hold contractual liability, ensuring your intellectual property is protected from Day 1.',
        kpi: '100% IP assignment guarantee'
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
        title: 'Unified Billing & TCO Reporting',
        description: 'Receive one simple monthly invoice that covers everything. Our platform provides transparent TCO reporting, making it easy to justify your budget and track value.',
        kpi: '1 accountable invoice'
    },
    {
        icon: <Laptop className="h-8 w-8 text-primary"/>,
        pain: 'Need a physical space for your team?',
        title: 'LATAM Office Network Access',
        description: 'Through our partnership with WeWork, get on-demand desks and meeting rooms in major LATAM hubs for planning sessions, interviews, and quarterly reviews. (Optional Add-on)',
        kpi: '45+ WeWork Hubs available'
    }
];

// Helper component for internal links (New component to implement the War Plan interlinking)
const LinkCard = ({ href, icon, title, description }: { href: string, icon: React.ReactNode, title: string, description: string }) => (
    <Link href={href} className="group flex flex-col p-4 border rounded-lg hover:border-primary/50 transition-all">
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
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Services</span> / <span>Integrated Services</span>
        </div>
        <header className="text-center my-12">
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">One Accountable SLA for Your Entire Operation</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Stop juggling vendors. Our integrated platform bundles talent, legal, security, and operations into a single, predictable service. You get a high-performing nearshore team without the administrative chaos.
            </p>
        </header>

        <section className="my-16">
            <h2 className="text-center text-3xl font-bold">What’s Included in Your TeamStation Plan</h2>
            <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
                Everything you need to hire, equip, secure, and run LATAM engineering teams—inside one platform and backed by a single SLA.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {includedServices.map((service) => (
                    <div key={service.title} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
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

        <section className="my-16 rounded-lg border bg-card p-8 shadow-lg">
            <div className="text-center">
                <h2 className="text-3xl font-bold">The Power of One Contract</h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    In a traditional model, you're the systems integrator, responsible for coordinating multiple vendors for legal, payroll, IT, and recruiting. It's a model riddled with risk, hidden costs, and finger-pointing.
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Our integrated platform flips the script. We are the single accountable party. **One Master Services Agreement (MSA) covers the entire operational lifecycle.** If a device isn't delivered on time, that's our problem. If a compliance issue arises, we own it. This radical simplification allows you to focus on one thing: building great software.
                </p>
                <div className="mt-8">
                     <Link href="/trust" className="cta-button">Explore Our Trust Center <ArrowRight className="ml-2 h-4 w-4"/></Link>
                </div>
            </div>
        </section>
        
        {/* SEO WAR PLAN INTERLINKING IMPLEMENTATION: Minimum of 6 internal links */}
        <section className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center">CTO Playbook Resources: Deep Dive into Our Edge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LinkCard 
                    href="/playbook"
                    icon={<BookOpen className="h-6 w-6 text-primary" />}
                    title="The CTO Playbook Hub"
                    description="Access our entire collection of research-backed guides on nearshore strategy, economics, and scaling teams."
                />
                <LinkCard 
                    href="/research/axiom-cortex-scientific-report"
                    icon={<Search className="h-6 w-6 text-primary" />}
                    title="Research: Axiom Cortex™ Foundations"
                    description="Understand the scientific mechanism behind our AI vetting that delivers high-signal talent fast. (The key differentiator)"
                />
                <LinkCard 
                    href="/comparisons/bairesdev"
                    icon={<Code className="h-6 w-6 text-primary" />}
                    title="Comparison: TeamStation vs. BairesDev"
                    description="See a criteria-by-criteria breakdown of our integrated platform versus legacy staff augmentation vendors. (Direct competitor attack)"
                />
                <LinkCard 
                    href="/hire/by-role/react"
                    icon={<Laptop className="h-6 w-6 text-primary" />}
                    title="Programmatic Sourcing Example"
                    description="See how our platform executes talent sourcing for specific roles and locations using our integrated model."
                />
                <LinkCard 
                    href="/hire/by-country/mexico"
                    icon={<FileText className="h-6 w-6 text-primary" />}
                    title="EOR & Compliance Deep Dive"
                    description="Review the specifics of how Employer of Record (EOR) and compliance are managed in our key LATAM markets."
                />
                <LinkCard 
                    href="/trust"
                    icon={<ShieldCheck className="h-6 w-6 text-primary" />}
                    title="Security & Trust Center"
                    description="Detailed view of our contractual liability, cybersecurity policies, and compliance guardrails."
                />
            </div>
        </section>

    </main>
  );
}
