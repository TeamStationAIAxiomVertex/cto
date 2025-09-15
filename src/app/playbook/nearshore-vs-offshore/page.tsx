
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';
import { Clock, Users2, FileSearch, Briefcase, Zap, Scale, ShieldCheck, ArrowRight, AlertTriangle, CheckCircle, BarChart, BookOpen, Layers, GitCompare, UserCheck, DollarSign } from 'lucide-react';
import { ComparisonWidget } from '@/components/ComparisonWidget';

export const metadata: Metadata = {
  title: 'Nearshore vs. Offshore: The Strategic Choice for CTOs | TeamStation AI',
  description: 'The definitive, data-driven analysis for CTOs on nearshore vs. offshore software development. A playbook for diagnosing the true cost and risk of your global talent strategy.',
};

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'The Pain of Productivity Mismatch',
    question: 'Are low hourly rates burning your budget with slow delivery?',
    problem: 'A 12-hour feedback loop can easily cut a team\'s velocity in half. A feature that should take two weeks takes four, doubling your "true" cost. This isn\'t a minor inconvenience; it\'s a direct hit to your product roadmap and revenue projections. Every day spent waiting on a response from a team on the other side of the world is a day your competitor is shipping code.',
    solution: 'Our nearshore model provides 4-8 hours of daily overlap. Real-time pairing and instant clarification on Slack eliminates human latency and accelerates development. This is how you reclaim your velocity and deliver on your promises to the board.',
    kpi: 'Time-to-First-PR in 7–14 days'
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary" />,
    title: 'The Pain of Vendor Churn',
    question: 'Is your best engineer re-training a revolving door of vendor talent?',
    problem: 'Offshore partners often rotate engineers off projects with little notice, leading to constant knowledge loss. Your most expensive and valuable engineers are forced to re-train new team members on the basics of your architecture instead of building high-value features. This "knowledge tax" is a silent killer of productivity and morale.',
    solution: 'Our model is built on dedicated, long-term team members with retention ladders, ensuring continuity and preserving institutional knowledge. We invest in our talent, so you don\'t have to constantly re-invest in training them.',
    kpi: '90-day retention ≥96%'
  },
  {
    icon: <FileSearch className="h-8 w-8 text-primary" />,
    title: 'The Pain of "Vendor Fog"',
    question: 'Can you get a straight answer, or is project status lost in vague updates?',
    problem: 'When you lack direct access to source control, CI/CD, and system telemetry, you are flying blind. Vague status reports and delayed tickets make it impossible to forecast delivery. You cannot manage what you cannot measure, and this operational opacity creates massive, unquantifiable risk.',
    solution: 'We provide radical transparency through our Nearshore IT Co-Pilot™ platform, offering a single pane of glass into hiring, compliance, and core performance KPIs. You get an auditable system of record for your entire operation.',
    kpi: '100% auditable system of record'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'The Pain of Multi-Vendor Risk',
    question: 'Are you juggling separate vendors for hiring, payroll, IT, and legal?',
    problem: 'Using separate vendors for EOR, recruiting, and IT creates a web of complexity and accountability gaps. When a security incident occurs—and it will—who is responsible? The EOR? The recruiting firm? The engineer using their personal laptop? This fragmented model is a compliance nightmare.',
    solution: 'We eliminate this chaos by bundling all critical services—hiring, EOR, secure devices, insurance—under a single, accountable Master Services Agreement (MSA). One contract, one point of contact, one throat to choke.',
    kpi: '1 accountable contract'
  },
];

const comparisonTable = [
  { factor: 'Time-Zone Overlap', nearshore: 'High (4-8 hours)', offshore: 'Low (0-2 hours)', nearshore_color: 'text-primary', offshore_color: 'text-primary', nearshore_detail: 'Enables real-time pairing and same-day PR reviews. This is the fundamental driver of agile velocity.', offshore_detail: 'Forces asynchronous handoffs, late-night calls, and 24-hour feedback cycles. This systematically destroys agile workflows.' },
  { factor: 'Collaboration Fidelity', nearshore: 'High', offshore: 'Low', nearshore_color: 'text-primary', offshore_color: 'text-primary', nearshore_detail: 'Nuanced, high-context conversations are possible, reducing ambiguity and expensive rework. Fosters a single, unified team culture.', offshore_detail: 'Communication is often formal, ticket-based, and prone to misunderstanding due to cultural and linguistic gaps. It creates an "us vs. them" dynamic.' },
  { factor: 'Cultural Alignment', nearshore: 'High', offshore: 'Medium', nearshore_color: 'text-primary', offshore_color: 'text-primary', nearshore_detail: 'Strong affinity with U.S. work culture and business practices reduces friction and allows for direct, candid feedback. The talent is trained to challenge assumptions and surface risks early.', offshore_detail: 'Varies by country; even with excellent English, cultural differences can lead to a "yes-man" culture where problems are not surfaced until it\'s too late.' },
  { factor: 'Travel & Escalation', nearshore: 'Simple & Cost-Effective', offshore: 'Complex & Expensive', nearshore_color: 'text-primary', offshore_color: 'text-destructive', nearshore_detail: 'Same-day or next-day travel is feasible for critical architectural workshops, quarterly planning, or crisis resolution. This is your strategic escape hatch.', offshore_detail: 'Requires multi-day travel, visas, and significant expense, making it impractical for anything other than a major, pre-planned event.' },
  { factor: 'Compliance & Risk', nearshore: 'Lower (Contractually Managed)', offshore: 'Higher (Fragmented)', nearshore_color: 'text-primary', offshore_color: 'text-destructive', nearshore_detail: 'An integrated EOR model handles all local labor and data laws.', offshore_detail: 'Navigating disparate legal frameworks is complex and risky.' },
  { factor: 'Total Cost of Ownership', nearshore: 'Predictable & Lower', offshore: 'Unpredictable & Higher', nearshore_color: 'text-primary', offshore_color: 'text-primary', nearshore_detail: 'An all-inclusive rate eliminates hidden fees.', offshore_detail: 'Low hourly rates are inflated by massive hidden costs.' },
];

const sandlerCards = [
    {
        title: 'Cheap Hourly → Expensive Month',
        question: 'Why is the “cheap” option $5k+/mo more after overhead?',
        proof: 'Proof: $55/h offshore @173h with 25% overhead ≈ $11.9k/mo vs Co-Pilot Senior $6.9–$8.1k/mo.',
        icon: <DollarSign className="h-8 w-8 text-primary" />,
    },
    {
        title: 'Overnight PRs → Daylight Cadence',
        question: 'How many releases died waiting for “LGTM”?',
        proof: 'Proof: 120 PRs × (4h−1h) × $85 = $30,600/mo burned.',
        icon: <GitCompare className="h-8 w-8 text-primary" />,
    },
    {
        title: 'Sprawl → System',
        question: 'How many vendors does it take to ship one roadmap?',
        proof: 'Proof: Forecast vs actual variance <10%; fewer reopenings.',
        icon: <Layers className="h-8 w-8 text-primary" />,
    }
];

export default async function NearshoreVsOffshorePage() {
  return (
    <main className="container max-w-7xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook/hub" className="hover:text-foreground">CTO Playbook</Link> / <span>Nearshore vs. Offshore</span>
      </div>

       <header className="my-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Nearshore Software Development: The New Stack Beats Onshore, Offshore, and Legacy Nearshore</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Cheaper than “cheap” offshore—because we count the hidden taxes and run in daylight.</p>
      </header>

      <ComparisonWidget />

      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {sandlerCards.map((card) => (
          <div key={card.title} className="rounded-lg border bg-card p-6 flex flex-col text-center shadow-lg">
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-lg font-bold text-foreground mt-4">{card.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-grow">{card.proof}</p>
              <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-primary/90 italic">{card.question}</p>
              </div>
          </div>
        ))}
      </div>


      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 1 (The Pain): Diagnosing the Hidden Costs of Your Outsourcing Strategy</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">These are not minor inconveniences; they are critical business risks that manifest as financial drains and operational drags. This is the pain you are likely feeling today, even if you can't put a name to it. If you recognize your organization in these scenarios, your current model is broken.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {painPoints.map((point) => (
            <div key={point.title} className="rounded-lg border bg-card p-6 flex flex-col">
              <p className="text-sm font-semibold text-primary">{point.question}</p>
              <div className="flex items-center gap-3 mt-3">
                {point.icon}
                <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <h4 className="font-semibold text-destructive">The Problem</h4>
                <p className="text-sm text-muted-foreground m-0">{point.problem}</p>
              </div>
              <div className="mt-4 border-t border-border pt-4 flex-grow">
                <h4 className="font-semibold text-primary">The Solution (Nearshore Integrated Platform)</h4>
                <p className="text-sm text-foreground m-0">{point.solution}</p>
              </div>
               <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {point.kpi}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-24 rounded-lg border bg-card p-8 md:p-12">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 2 (The Budget): Quantifying the True Cost — A CFO-Ready TCO Model</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          A CTO who presents a plan based solely on salary comparisons is walking into a financial trap. A true <Tooltip text="Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip> model must include the "hidden taxes" of management overhead, productivity loss due to the Human Latency Tax, vendor churn, and the significant financial risk of a compliance breach. These are not soft costs; they are real dollars draining from your P&L.
        </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background/50 rounded-lg border border-destructive/20 p-6">
                <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-destructive" />
                    <h3 className="text-lg font-bold text-foreground">The Human Latency Tax</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                    This is the most significant and most often ignored cost. A 12-hour time difference means that for every simple question, an entire workday is lost. If each of 6 engineers loses just 2 hours per day to waiting, that's 12 hours of wasted time every single day. At a loaded cost of $50/hour, that's <strong className="font-bold text-destructive">$132,000 per year</strong> evaporated. That's the cost of a senior US engineer, spent on waiting.
                </p>
            </div>
            <div className="bg-background/50 rounded-lg border border-destructive/20 p-6">
                <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-destructive" />
                    <h3 className="text-lg font-bold text-foreground">The Management Overhead Tax</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                    Your engineering managers are expensive, high-leverage resources. An offshore model forces them into the role of late-night coordinators. If an EM spends 25% of their time on this, that's a quarter of their $200k+ salary—<strong className="font-bold text-destructive">$50,000 per year</strong>—dedicated to a problem that shouldn't exist.
                </p>
            </div>
            <div className="bg-background/50 rounded-lg border border-destructive/20 p-6">
                <div className="flex items-center gap-3">
                    <Scale className="h-6 w-6 text-destructive" />
                    <h3 className="text-lg font-bold text-foreground">The Quality & Rework Tax</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                   Misunderstandings from asynchronous communication lead to building the wrong thing. Every feature that needs significant rework due to a misread ticket is a 100% tax on the original development time. A single two-week sprint ($20k cost) that has to be redone costs you $20k and two weeks of opportunity you'll never get back.
                </p>
            </div>
             <div className="bg-background/50 rounded-lg border border-destructive/20 p-6">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-destructive" />
                    <h3 className="text-lg font-bold text-foreground">The Compliance & Security Risk Multiplier</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                    What is the cost of a single data breach? For a mid-stage startup, it's existential. Relying on an offshore vendor who allows engineers to use personal laptops without MDM isn't a cost-saving measure; it's a multi-million dollar liability waiting to happen. An integrated nearshore model shifts this risk from your books to ours.
                </p>
            </div>
        </div>
         <div className="mt-8 text-center">
            <Link href="/playbook/latam-economics" className="cta-button">
              See the Full TCO Framework <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
      </section>
      
      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 3 (The Solution): A Holistic Comparison</h2>
         <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">A 12-hour time difference isn't an inconvenience; it's a systemic bottleneck that destroys agile velocity. This is not about finding cheaper developers; it's about engineering a faster, safer, and more efficient way to build software. The following is a decision matrix for technology leaders.</p>
        <div className="overflow-x-auto mt-12">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">Factor</th>
                <th className="px-4 py-3 font-semibold text-foreground">Nearshore (Integrated Platform)</th>
                <th className="px-4 py-3 font-semibold text-foreground">Offshore (Traditional Vendor)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row) => (
                <tr key={row.factor} className="border-b border-border/50">
                  <td className="px-4 py-4 font-bold text-foreground align-top">{row.factor}</td>
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
      <section className="my-24 rounded-lg border bg-card p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center text-foreground">The Verdict: Choose Velocity and Control, Not Just Cost</h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-lg border border-border/50">
                <h3 className="font-bold text-primary flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>The Fundamental Miscalculation</h3>
                <p className="mt-2 text-muted-foreground">Most leaders compare hourly rates without calculating the second-order effects on <Link href="/process" className="font-semibold text-foreground hover:underline">velocity</Link> and <Link href="/trust" className="font-semibold text-foreground hover:underline">risk</Link>. An engineer who costs 30% less but delivers at 50% the speed is not a bargain; they are a net loss. The "savings" are a mirage that disappears under the harsh light of a missed product deadline or a critical production outage at 2 AM.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-destructive/20">
                    <h3 className="font-bold text-destructive">Offshore Model Optimization</h3>
                     <p className="mt-2 text-muted-foreground">Optimizes for a single, flawed metric: <strong className="text-foreground">cost per hour.</strong></p>
                </div>
                 <div className="bg-background p-6 rounded-lg border border-primary/20">
                    <h3 className="font-bold text-primary">Integrated Nearshore Model Optimization</h3>
                    <p className="mt-2 text-muted-foreground">Optimizes for what actually matters: <Link href="/playbook/tco-model" className="text-primary font-bold hover:underline">Total Cost of Ownership</Link>, <strong className="text-foreground">velocity</strong>, and <strong className="text-foreground">risk mitigation.</strong></p>
                </div>
            </div>

            <div className="bg-background p-6 rounded-lg border border-primary/20">
                 <h3 className="font-bold text-primary flex items-center gap-2"><CheckCircle className="h-5 w-5"/>The Strategic Decision</h3>
                <p className="mt-2 text-muted-foreground">The most expensive asset in your engineering organization is not your payroll, but your <strong className="text-foreground">time</strong>. Time to market, time to recovery, and the time your best engineers spend on high-value work instead of low-value coordination.</p>
                <p className="mt-4 text-foreground">Our platform maximizes this advantage by providing not only the talent but the entire <Link href="/trust" className="text-primary font-bold hover:underline">security and operational wrapper</Link> under a single SLA. This is not about finding cheaper developers; it's about engineering a faster, safer, and more efficient way to build software. It's a strategic decision to <strong className="text-primary">buy back time, reduce risk, and increase the velocity</strong> of your entire engineering organization.</p>
            </div>
        </div>
    </section>

       <div className="text-center rounded-lg bg-primary/10 p-8 mt-12">
            <h2 className="text-2xl font-bold">Ready to Eliminate the Latency Tax?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                This isn't a sales pitch. It's a strategic consultation to build your CFO-ready business case. Let's discuss how our nearshore talent and integrated platform can accelerate your roadmap.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
        </div>
    </main>
  );
}
