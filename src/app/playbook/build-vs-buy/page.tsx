
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'Build vs. Buy: A CTO’s Framework for Scaling Nearshore Teams',
  description: 'Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of Total Cost of Ownership (TCO), speed, and risk.',
};

const buildCosts = [
    { area: "Recruitment & Hiring", tax: "Months of your senior engineers' time wasted on screening and interviewing instead of building product. High agency fees.", impact: "$25,000 - $40,000" },
    { area: "Legal & Entity Setup", tax: "Navigating foreign labor laws, tax codes, and corporate registration is a legal minefield that requires expensive local counsel.", impact: "$15,000 - $30,000+ (one-time)" },
    { area: "HR & Payroll Admin", tax: "Managing international payroll, benefits, and compliance for each country is a full-time job you now own.", impact: "$10,000 - $15,000 (annual)" },
    { area: "IT & Security", tax: "Procuring, shipping, securing (MDM), and managing laptops globally without a dedicated international IT team is an operational nightmare.", impact: "$5,000 - $8,000 (per hire)" },
    { area: "The Mis-Hire Tax", tax: "A bad hire costs 6-12 months of salary in lost productivity, team disruption, and the cost of re-hiring.", impact: "$40,000 - $80,000" },
    { area: "The Vacancy Tax", tax: "Every day a role is open is a day you're not shipping revenue-generating features. The industry average is 45 days.", impact: "≈$12,000 (per $1M ARR)" },
];

const buySolutions = [
    { pain: "High Recruitment Costs", solution: "Our Axiom Cortex™ engine provides scientifically-vetted shortlists, cutting your team's interview time by >80%. Recruitment is included in our fee.", proof: "Time-to-Offer ≈ 9 days (vs. 45-day industry average)" },
    { pain: "Legal & HR Complexity", solution: "Our platform includes full Employer of Record (EOR) services. We handle all contracts, payroll, taxes, and benefits, ensuring full compliance in every LATAM country.", proof: "Zero legal or HR overhead for your team." },
    { pain: "IT & Security Nightmare", solution: "We provide secure, MDM-managed devices and comprehensive Cyber/E&O insurance. Your security posture is audit-ready from Day 1, with no work from your IT team.", proof: "SOC 2 & ISO Aligned operational posture included." },
    { pain: "The Risk of a Mis-Hire", solution: "Our cognitive AI vetting provides an evidence-based \"cognitive fingerprint\" of a candidate's problem-solving ability, reducing the risk of a mis-hire to industry-leading lows.", proof: "Mismatch Rate ≤ 10%" },
];


export default function BuildVsBuyPage() {
  return (
    <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / <span>Build vs. Buy</span>
        </div>

        <header className="my-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Build vs. Buy: A CTO’s Framework for Scaling Nearshore Teams</h1>
            <p className="mt-4 text-lg text-muted-foreground">Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of <Tooltip text="Total Cost of Ownership: Includes not just salary, but all direct and indirect costs like hiring, legal, IT, and management overhead.">Total Cost of Ownership (TCO)</Tooltip>, speed, and risk.</p>
        </header>
      
        <div className="prose dark:prose-invert max-w-none">
            <h2>The Strategic Choice: Build from Scratch or Buy into a Platform?</h2>
            <p>For a CTO, the decision to scale a nearshore team isn't just about hiring. It's an architectural choice with massive financial and operational consequences. Do you take on the immense operational load of "building" a foreign entity, or do you "buy" into an integrated platform that abstracts away the complexity? This framework provides the data to make a CFO-ready decision.</p>

            <h2 className="mt-12">The "Build" Model: A High-Risk, High-Cost Gamble</h2>
            <p>Building your own nearshore operation seems like it offers more control, but it's a trap. You become responsible for a mountain of non-core activities, each with hidden costs and significant risks.</p>

            <h3 className="text-primary">The Pain: The True Cost of "Building"</h3>
            <p>Your finance team sees a lower salary. You, the CTO, are saddled with a dozen hidden "taxes" on your time and budget.</p>
        </div>

        <div className="my-8 overflow-x-auto rounded-lg border bg-card">
            <table className="min-w-full text-sm">
                <thead className="text-left bg-background">
                    <tr>
                        <th className="p-4 font-semibold">Cost/Risk Area</th>
                        <th className="p-4 font-semibold">The Hidden "Tax" on Your Budget & Time</th>
                        <th className="p-4 font-semibold">Financial Impact (1st Year, per hire)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {buildCosts.map((item) => (
                        <tr key={item.area}>
                            <td className="p-4 font-medium">{item.area}</td>
                            <td className="p-4">{item.tax.replace('MDM', '')}
                             {item.tax.includes("MDM") && <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                            </td>
                            <td className="p-4 font-mono text-amber-400">{item.impact}</td>
                        </tr>
                    ))}
                    <tr className="bg-background font-bold">
                         <td className="p-4" colSpan={2}>Total Hidden Cost (1st Year, per hire)</td>
                         <td className="p-4 font-mono text-red-400">$97,000 - $185,000+</td>
                    </tr>
                </tbody>
            </table>
        </div>

         <div className="prose dark:prose-invert max-w-none">
            <p className="text-center"><em>This is <strong>in addition</strong> to the engineer's salary. The "cheaper" build model is often twice as expensive in the first year.</em></p>
            
            <h2 className="mt-12">The "Buy" Model: The Integrated Platform Solution</h2>
            <h3 className="text-primary">The Solution: One Accountable SLA for Your Entire Operation</h3>
            <p>Partnering with TeamStation AI means you "buy" a complete, managed operating system for your nearshore team. We absorb all the risk and operational overhead into a single, predictable, all-inclusive rate.</p>

            <h3 className="text-primary">The Proof: How We Eliminate the Hidden Taxes</h3>
        </div>

         <div className="my-8 overflow-x-auto rounded-lg border bg-card">
            <table className="min-w-full text-sm">
                <thead className="text-left bg-background">
                    <tr>
                        <th className="p-4 font-semibold">Pain Point</th>
                        <th className="p-4 font-semibold">TeamStation AI's Integrated Solution</th>
                        <th className="p-4 font-semibold">Financial Proof</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {buySolutions.map((item) => (
                        <tr key={item.pain}>
                            <td className="p-4 font-medium">{item.pain}</td>
                            <td className="p-4">{item.solution.replace('Axiom Cortex™', '').replace('EOR', '').replace('MDM', '')}
                                {item.solution.includes("Axiom Cortex") && <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/axiom-cortex-scientific-report" className="text-primary hover:underline">Axiom Cortex™</Link></Tooltip>}
                                {item.solution.includes("EOR") && <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>}
                                {item.solution.includes("MDM") && <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                            </td>
                            <td className="p-4 font-mono text-green-400">{item.proof}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

         <div className="prose dark:prose-invert max-w-none">
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
