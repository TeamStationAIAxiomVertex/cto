
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';
import { Users2, FileSearch, Scale, Briefcase, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nearshore vs. Offshore: The Strategic Choice for CTOs',
  description: 'A framework for CTOs to diagnose the true cost—and risk—of their global talent strategy, moving beyond cost per hour to Total Cost of Ownership.',
};

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of Productivity Mismatch',
    question: 'Are low hourly rates burning your budget with slow delivery?',
    problem: 'A critical question is asked on Slack at 10 AM PST. The offshore team is asleep. A full 24-hour cycle passes to resolve something that could have been a 15-minute conversation. Agile is built on tight feedback loops, which are systematically broken by a 12-hour time difference.',
    solution: 'Our nearshore model provides 4-8 hours of daily overlap. Real-time pairing and instant clarification on Slack eliminates the devastating "Human Latency Tax" and accelerates development.',
    kpi: 'Time-to-First-PR in 7–14 days'
  },
  {
    icon: <Users2 className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of Vendor Churn',
    question: 'Is your best engineer re-training a revolving door of vendor talent?',
    problem: 'Offshore partners often rotate engineers off projects with little notice, leading to constant knowledge loss. Your most valuable engineers become full-time trainers instead of builders, destroying team morale and velocity.',
    solution: 'Our model is built on dedicated, long-term team members with built-in retention ladders. We ensure continuity and preserve the institutional knowledge that is critical for building high-context software.',
    kpi: '90-day retention ≥96%'
  },
  {
    icon: <FileSearch className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of "Vendor Fog"',
    question: 'Can you get a straight answer, or is project status lost in vague updates?',
    problem: 'When you lack direct access to source control, CI/CD, and system telemetry, you are flying blind. Vague status reports from account managers make it impossible to accurately forecast delivery or manage risk.',
    solution: 'We provide radical transparency through our Nearshore IT Co-Pilot™ platform. You get a single pane of glass for hiring, compliance, device security, and performance KPIs—a fully auditable system of record, not a black box.',
    kpi: '100% auditable system of record'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of Multi-Vendor Risk',
    question: 'Are you juggling separate vendors for hiring, payroll, IT, and legal?',
    problem: 'Using separate vendors for EOR, recruiting, and IT creates a web of complexity and dangerous accountability gaps. If a security incident occurs on an unmanaged laptop, the liability falls on you.',
    solution: 'We eliminate this chaos by bundling all critical services—hiring, EOR, secure devices, insurance—under a single, accountable Master Services Agreement (MSA). You get one contract and one throat to choke.',
    kpi: '1 accountable SLA'
  },
];

const comparisonTable = [
  { factor: 'Time-Zone Overlap', nearshore: 'High (4-8 hours)', offshore: 'Low (0-2 hours)', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'Enables real-time pairing, ad-hoc problem-solving, and same-day PR reviews.', offshore_detail: 'Forces asynchronous handoffs, late-night calls, and 24-hour feedback cycles.' },
  { factor: 'Collaboration Fidelity', nearshore: 'High', offshore: 'Low', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'Nuanced conversations are possible, reducing ambiguity and rework. Fosters a single, unified team.', offshore_detail: 'Communication is often formal, ticket-based, and prone to misunderstanding.' },
  { factor: 'Cultural Alignment', nearshore: 'High', offshore: 'Medium-High', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'Strong affinity with U.S. work culture and business practices reduces friction.', offshore_detail: 'Varies by country, but tech hubs often have excellent English proficiency. Cultural gaps can still exist.' },
  { factor: 'Travel & Escalation', nearshore: 'Simple & Cost-Effective', offshore: 'Complex & Expensive', nearshore_color: 'text-green-400', offshore_color: 'text-red-400', nearshore_detail: 'Same-day or next-day travel is feasible for critical workshops or crisis resolution.', offshore_detail: 'Requires multi-day travel, visas, and significant expense, making it impractical.' },
  { factor: 'Compliance & Risk', nearshore: 'Lower', offshore: 'Higher', nearshore_color: 'text-green-400', offshore_color: 'text-red-400', nearshore_detail: 'Our integrated EOR model handles compliance with data privacy laws (GDPR/LGPD) and local labor regulations.', offshore_detail: 'Navigating disparate legal frameworks and data residency laws is complex and introduces significant risk.' },
  { factor: 'Total Cost of Ownership (TCO)', nearshore: 'Predictable & Lower', offshore: 'Unpredictable & Higher', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'An all-inclusive rate with no hidden fees. Higher productivity and lower risk lead to a lower true cost.', offshore_detail: 'Low hourly rates are offset by high costs of management overhead, lost productivity, and vendor management.' },
];

export default function NearshoreVsOffshorePage() {

  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook/hub" className="hover:text-foreground">CTO Playbook</Link> / <span>Nearshore vs. Offshore</span>
      </div>

      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Nearshore vs. Offshore: The Strategic Choice for CTOs</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your choice between nearshore and offshore is not a line item; it's a strategic bet on how your company will innovate. While offshore lures with low hourly rates, this sticker price masks a cascade of hidden costs that inflate your <Tooltip text="Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.">Total Cost of Ownership (TCO)</Tooltip> and silently sabotage your roadmap.
        </p>
      </header>
      
      <div className="text-center my-12">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 text-lg font-semibold text-primary">
            <Clock className="h-6 w-6" />
            <span>The fundamental flaw in a cost-per-hour analysis is its failure to account for <strong>human latency</strong>.</span>
        </div>
      </div>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 1: Diagnosing the Pains of a Broken Outsourcing Strategy</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">These are not minor inconveniences; they are critical business risks that manifest as financial drains and operational drags.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {painPoints.map((point) => (
            <div key={point.title} className="rounded-lg border bg-card p-6 flex flex-col">
              <p className="text-sm font-semibold text-primary">{point.question}</p>
              <div className="flex items-center gap-3 mt-3">
                {point.icon}
                <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{point.problem}</p>
              <div className="mt-4 border-t border-border pt-4 flex-grow">
                <h4 className="font-semibold text-green-400">The TeamStation AI Solution</h4>
                <p className="text-sm text-foreground m-0">{point.solution}</p>
              </div>
               <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {point.kpi}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 2: Quantifying the True Cost — A CFO-Ready TCO Model</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          A CTO who presents a plan based solely on salary comparisons is walking into a financial trap. A true TCO model must include the "hidden taxes" of management overhead, lost productivity due to the Human Latency Tax, the cost of vendor churn, and the significant financial risk of a compliance breach.
        </p>
         <div className="mt-8 text-center">
            <Link href="/playbook/latam-economics" className="cta-button">
              See the Full TCO Framework
            </Link>
        </div>
      </section>
      
      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 3: The Solution — A Holistic Comparison</h2>
         <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">A 12-hour time difference isn't an inconvenience; it's a systemic bottleneck that destroys agile velocity.</p>
        <div className="overflow-x-auto mt-12">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">Factor</th>
                <th className="px-4 py-3 font-semibold text-foreground">Nearshore (TeamStation AI)</th>
                <th className="px-4 py-3 font-semibold text-foreground">Offshore (Traditional Vendor)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row) => (
                <tr key={row.factor} className="border-b border-border/50">
                  <td className="px-4 py-4 font-bold text-foreground">{row.factor}</td>
                  <td className="px-4 py-4">
                    <p className={`font-bold ${row.nearshore_color}`}>{row.nearshore}</p>
                    <p className="text-xs text-muted-foreground m-0">{row.nearshore_detail}</p>
                  </td>
                  <td className="px-4 py-4">
                     <p className={`font-bold ${row.offshore_color}`}>{row.offshore}</p>
                     <p className="text-xs text-muted-foreground m-0">{row.offshore_detail}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="prose dark:prose-invert max-w-none text-center">
        <h2 className="mt-12">The Verdict: Choose Velocity and Control</h2>
        <p>
            For startups and growth-stage companies where speed and agility are paramount, the choice is clear. The hidden "latency tax" of the offshore model is a risk most cannot afford. While large enterprises with waterfall-style projects may tolerate asynchronous workflows, any organization practicing agile will see a dramatic ROI from the real-time collaboration enabled by a nearshore team.
        </p>
         <p>
          Our platform maximizes this advantage by providing not only the talent but the entire security and operational wrapper under a single SLA. This isn't about finding cheaper developers; it's about engineering a faster, safer, and more efficient way to build software.
        </p>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8 mt-12">
            <h2 className="text-2xl font-bold">Ready to Eliminate the Latency Tax?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Let's discuss how our nearshore talent and integrated platform can accelerate your roadmap.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
        </div>
    </main>
  );
}

    