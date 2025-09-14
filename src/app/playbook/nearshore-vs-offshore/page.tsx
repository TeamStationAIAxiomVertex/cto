
import { CheckCircle, AlertTriangle, ArrowRight, GitCompare, Zap, Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'Nearshore vs. Offshore: The Strategic Choice for CTOs | TeamStation AI',
  description: 'A framework for CTOs to diagnose the true cost—and risk—of their global talent strategy, moving beyond cost per hour to Total Cost of Ownership.',
};

const painPoints = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        pain: "Is your best engineer re-training a revolving door of vendor talent?",
        title: 'The Pain of Vendor Churn',
        description: 'Offshore partners often rotate engineers, causing constant knowledge loss and forcing your team to re-train them. This churn is a hidden tax on your budget and timeline.',
        solution: 'Our model is built on dedicated, long-term team members who are deeply integrated into your organization. We invest in their growth and retention, ensuring continuity and preserving institutional knowledge.',
        kpi: '90-day retention ≥96%'
    },
    {
        icon: <GitCompare className="h-8 w-8 text-primary" />,
        pain: "Can you get a straight answer, or is project status lost in 'vendor fog'?",
        title: 'The Pain of "Vendor Fog"',
        description: 'Vague updates and delayed reports are common when you lack direct access to source control, CI/CD, and telemetry. This is a massive red flag.',
        solution: 'We provide radical transparency. Our Nearshore IT Co-Pilot™ platform gives you a single pane of glass into hiring, device compliance, and performance KPIs. You have direct access to your team and the data.',
        kpi: '100% auditable evidence trail'
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        pain: "Are low hourly rates burning your budget with slow delivery?",
        title: 'The Pain of Productivity Mismatch',
        description: 'Ineffective collaboration and 12-hour feedback loops can cut velocity in half, doubling your true cost per feature. The math rarely works out.',
        solution: 'Our nearshore model provides 4-8 hours of daily overlap with your US teams. Real-time pairing and problem-solving eliminate human latency, dramatically accelerating your development cycles.',
        kpi: 'Time-to-First-PR in 7–14 days'
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        pain: "Are you juggling multiple vendors for hiring, payroll, and IT?",
        title: 'The Pain of Multi-Vendor Risk',
        description: 'Using separate vendors for recruiting, EOR, and device security creates accountability gaps, multiplies your risk, and leads to vendor lock-in with no easy escape.',
        solution: 'We bundle EOR, payroll, secure devices (MDM), and insurance into one accountable SLA. You get one contract, one invoice, and one partner responsible for the entire operation.',
        kpi: '1 contract, 1 accountable owner'
    }
];

const comparisonData = [
    { factor: 'Time-Zone Overlap', nearshore: 'High (4-8 hours)', offshore: 'Low (0-2 hours)', nearshoreDetail: 'Enables real-time pairing and problem-solving.', offshoreDetail: 'Forces asynchronous handoffs and late-night calls.'},
    { factor: 'Collaboration Fidelity', nearshore: 'High', offshore: 'Low', nearshoreDetail: 'Ad-hoc conversations are possible, leading to faster feedback.', offshoreDetail: 'Communication is formal, ticket-based, and prone to misunderstanding.'},
    { factor: 'Cultural & Language Alignment', nearshore: 'High', offshore: 'High', nearshoreDetail: 'Strong affinity with U.S. work culture reduces friction.', offshoreDetail: 'Varies, but often excellent English in tech hubs.'},
    { factor: 'On-Site Escalation Path', nearshore: 'Simple', offshore: 'Complex', nearshoreDetail: 'Faster, cheaper travel for critical workshops.', offshoreDetail: 'Expensive, multi-day travel, making it impractical.'},
    { factor: 'Compliance & Legal Risk', nearshore: 'Lower', offshore: 'Higher', nearshoreDetail: 'Integrated EOR, data privacy (GDPR/LGPD), and IP laws.', offshoreDetail: 'Navigating different legal frameworks is complex and risky.'}
];

export default function NearshoreVsOffshorePage() {
  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / <span>Nearshore vs. Offshore</span>
      </div>
      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Nearshore vs. Offshore: A CTO’s Guide to Total Cost</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          The choice is a strategic bet on how you build, innovate, and compete. While offshore seems cheaper on a spreadsheet, the <Link href="/playbook/latam-economics" className="text-primary hover:underline"><Tooltip text="Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip></Link> often skyrockets due to hidden friction.
        </p>
      </header>

        <div className="my-16 prose dark:prose-invert max-w-none text-center">
            <h2 className='text-3xl'>The Real Issue is Human Latency</h2>
            <p>
                It's not network latency; it's the 12-hour wait for a simple answer that kills your velocity. Nearshore teams in Latin America eliminate this bottleneck. That real-time overlap is the single biggest lever you have to reclaim lost productivity and de-risk your roadmap.
            </p>
        </div>

       <div className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Common Pains of Outsourcing & How to Cure Them</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">These aren't inconveniences; they're critical business risks. Here's how our integrated platform solves them by design.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point) => (
                 <div key={point.title} className="rounded-lg border bg-card p-6 flex flex-col">
                    <p className="text-sm font-semibold text-primary">{point.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {point.icon}
                        <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{point.description.replace('EOR', '').replace('MDM','').replace('SLA','')}
                    {point.description.includes("EOR") && <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>}
                    {point.description.includes("MDM") && <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                    {point.description.includes("SLA") && <Tooltip text="Service Level Agreement: A contract defining the level of service you can expect.">SLA</Tooltip>}
                    </p>
                    <div className="flex-grow mt-4 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold text-foreground">The TeamStation AI Solution:</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{point.solution}</p>
                    </div>
                    <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{point.kpi}</p>
                </div>
            ))}
        </div>
      </div>


      <div className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Decision Framework: Diagnosing Your Risk</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">A quantitative and qualitative comparison of key strategic factors.</p>
        <div className="mt-12 flow-root">
          <div className="overflow-x-auto rounded-lg border bg-card">
            <table className="min-w-full divide-y divide-border">
              <thead className='bg-background'>
                <tr>
                  <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-foreground">Factor</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-primary">Nearshore (TeamStation AI)</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-muted-foreground">Offshore (Typical)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisonData.map((item) => (
                  <tr key={item.factor}>
                    <td className="py-4 pl-6 pr-3 text-sm font-medium text-foreground">{item.factor}</td>
                    <td className="px-3 py-4 text-sm">
                        <span className="font-semibold text-green-400">{item.nearshore}</span>
                        <p className="text-muted-foreground m-0">{item.nearshoreDetail.replace('EOR','')}
                        {item.nearshoreDetail.includes("EOR") && <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>}
                        </p>
                    </td>
                    <td className="px-3 py-4 text-sm">
                        <span className="font-semibold text-yellow-400">{item.offshore}</span>
                         <p className="text-muted-foreground m-0">{item.offshoreDetail}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Eliminate Latency and Risk?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Let's have a real conversation about your talent strategy. In 15 minutes, we can model the true TCO and show you a path to faster, more secure delivery.
        </p>
         <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
            Book a Strategy Call
        </Link>
      </div>
    </main>
  );
}

  