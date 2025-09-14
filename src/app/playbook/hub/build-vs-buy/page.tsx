import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';
import { CheckCircle, ArrowRight, BrainCircuit, ShieldCheck, UserCheck, Briefcase, FileText, DollarSign, AlertTriangle, Zap, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Build vs. Buy: A CTO’s Framework for Scaling Nearshore Teams',
  description: 'Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of Total Cost of Ownership (TCO), speed, and risk.',
};

const buildCosts = [
    { area: "Recruitment & Hiring", tax: "Months of your senior engineers' time wasted on screening and interviewing instead of building product. High agency fees.", impact: "$25,000 - $40,000", icon: <UserCheck className="h-8 w-8 text-yellow-400" /> },
    { area: "Legal & Entity Setup", tax: "Navigating foreign labor laws, tax codes, and corporate registration is a legal minefield that requires expensive local counsel.", impact: "$15,000 - $30,000+ (one-time)", icon: <FileText className="h-8 w-8 text-yellow-400" /> },
    { area: "HR & Payroll Admin", tax: "Managing international payroll, benefits, and compliance for each country is a full-time job you now own.", impact: "$10,000 - $15,000 (annual)", icon: <Briefcase className="h-8 w-8 text-yellow-400" /> },
    { area: "IT & Security", tax: "Procuring, shipping, securing (MDM), and managing laptops globally without a dedicated international IT team is an operational nightmare.", impact: "$5,000 - $8,000 (per hire)", icon: <ShieldCheck className="h-8 w-8 text-yellow-400" /> },
    { area: "The Mis-Hire Tax", tax: "A bad hire costs 6-12 months of salary in lost productivity, team disruption, and the cost of re-hiring.", impact: "$40,000 - $80,000", icon: <BrainCircuit className="h-8 w-8 text-yellow-400" /> },
    { area: "The Vacancy Tax", tax: "Every day a role is open is a day you're not shipping revenue-generating features. The industry average is 45 days.", impact: "≈$12,000 (per $1M ARR)", icon: <DollarSign className="h-8 w-8 text-yellow-400" /> },
];

const buySolutions = [
    { 
        pain: "Is your recruiting process a high-risk gamble?", 
        solutionTitle: "Scientifically-Vetted Talent",
        solution: "Our Axiom Cortex™ engine provides vetted shortlists, cutting your team's interview time by >80%. Recruitment is included in our fee.", 
        proof: "Time-to-Offer ≈ 9 days",
        href: "/technical-interview-evaluation",
        linkLabel: "See Our Vetting Process",
        icon: <UserCheck className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Are you drowning in legal and HR complexity?",
        solutionTitle: "Fully-Managed EOR & Compliance",
        solution: "Our platform includes full Employer of Record (EOR) services. We handle all contracts, payroll, taxes, and benefits, ensuring full compliance in every LATAM country.", 
        proof: "Zero legal or HR overhead",
        href: "/services/integrated-services",
        linkLabel: "Explore Integrated Services",
        icon: <FileText className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Is your security posture full of holes?",
        solutionTitle: "Audit-Ready Security & IT",
        solution: "We provide secure, MDM-managed devices and comprehensive Cyber/E&O insurance. Your security posture is audit-ready from Day 1, with no work from your IT team.", 
        proof: "SOC 2 & ISO Aligned posture",
        href: "/trust",
        linkLabel: "Visit Our Trust Center",
        icon: <ShieldCheck className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Is a single bad hire about to derail your roadmap?",
        solutionTitle: "Drastically Reduced Mis-Hire Risk",
        solution: "Our cognitive AI vetting provides an evidence-based \"cognitive fingerprint\" of a candidate's problem-solving ability, reducing the risk of a mis-hire to industry-leading lows.", 
        proof: "Mismatch Rate ≤ 10%",
        href: "/playbook/bias-free-technical-hiring-axiom-cortex",
        linkLabel: "Learn About Bias-Free Hiring",
        icon: <BrainCircuit className="h-8 w-8 text-primary" />
    },
];


export default function BuildVsBuyPage() {
  return (
    <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook/hub" className="hover:text-foreground">CTO Playbook</Link> / <span>Build vs. Buy</span>
        </div>

        <header className="my-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Build vs. Buy: A CTO’s Framework for Scaling Nearshore Teams</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of <Tooltip text="Total Cost of Ownership: Includes not just salary, but all direct and indirect costs like hiring, legal, IT, and management overhead.">Total Cost of Ownership (TCO)</Tooltip>, speed, and risk.</p>
        </header>
      
        <div className="text-center my-24">
            <h2 className="text-3xl font-bold">The "Build" Model: A High-Risk, High-Cost Gamble</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Building your own nearshore operation seems like it offers more control, but it's a trap. Your finance team sees a lower salary, but you, the CTO, are saddled with a dozen hidden "taxes" on your time and budget.</p>
        </div>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildCosts.map((item) => (
                <div key={item.area} className="rounded-lg border border-amber-500/20 bg-card p-6 flex flex-col">
                    <div className="flex items-center gap-3">
                        {item.icon}
                        <h3 className="text-lg font-semibold text-foreground">{item.area}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{item.tax.replace('MDM', '')}
                        {item.tax.includes("MDM") && <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                    </p>
                    <p className="mt-4 text-base font-mono text-amber-400 bg-amber-500/10 rounded px-3 py-2 inline-block self-start">
                        {item.impact}
                    </p>
                </div>
            ))}
        </div>
         <div className="text-center my-8 p-6 rounded-lg bg-background border border-red-500/30">
            <h3 className="text-xl font-bold text-foreground">Total Hidden Cost (1st Year, per hire)</h3>
            <p className="text-3xl font-mono font-bold text-red-400 mt-2">$97,000 - $185,000+</p>
            <p className="text-sm text-muted-foreground mt-1">This is <em>in addition</em> to the engineer's salary. The "cheaper" build model is often twice as expensive.</p>
        </div>


         <div className="text-center my-24">
            <h2 className="text-3xl font-bold">The "Buy" Model: The Integrated Platform Solution</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Partnering with TeamStation AI means you "buy" a complete, managed operating system for your nearshore team. We absorb all the risk and operational overhead into a single, predictable, all-inclusive rate.</p>
        </div>

         <div className="my-16">
            <h2 className="text-center text-2xl font-bold text-primary">The Proof: How We Eliminate the Hidden Taxes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                 {buySolutions.map((item) => (
                    <div key={item.pain} className="rounded-lg border bg-card p-6 flex flex-col">
                        <p className="text-sm font-semibold text-primary">{item.pain}</p>
                        <div className="flex items-center gap-3 mt-3">
                            {item.icon}
                            <h3 className="text-lg font-semibold text-foreground">{item.solutionTitle}</h3>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground flex-grow">{item.solution.replace('Axiom Cortex™', '').replace('EOR', '').replace('MDM', '')}
                            {item.solution.includes("Axiom Cortex") && <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/hub/axiom-cortex-scientific-report" className="text-primary hover:underline">Axiom Cortex™</Link></Tooltip>}
                            {item.solution.includes("EOR") && <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>}
                            {item.solution.includes("MDM") && <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                        </p>
                        <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{item.proof}</p>
                        <Link href={item.href} className="mt-6 flex items-center text-sm font-semibold text-primary">
                            {item.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>

         <div className="prose dark:prose-invert max-w-none text-center">
            <h2 className="mt-12">The Verdict: A CFO-Ready Decision</h2>
            <p>For most growth-stage companies, the "Build" model is a financially and operationally reckless gamble. The "Buy" model, offered by an integrated platform like TeamStation AI, provides a faster, safer, and more cost-effective path to scaling your engineering team. It allows you to leverage world-class talent without the massive distraction of building a global HR, legal, and IT department from scratch.</p>
        </div>

        <div className="text-center rounded-lg bg-primary/10 p-8 mt-12">
            <h2 className="text-2xl font-bold">Ready to see the TCO model for your specific needs?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                This isn't a sales pitch. It's a strategic consultation to build your CFO-ready business case for nearshore success.
            </p>
            <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Book a No-Obligation Strategy Call
            </Link>
        </div>
    </main>
  );
}
