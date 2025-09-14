
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';
import { Users2, FileSearch, Scale, Briefcase, Clock, ArrowRight, DollarSign, Zap } from 'lucide-react';


export const metadata: Metadata = {
  title: 'Nearshore vs. Offshore: The Strategic Choice for CTOs',
  description: 'A framework for CTOs to diagnose the true cost—and risk—of their global talent strategy, moving beyond cost per hour to Total Cost of Ownership.',
};

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of Productivity Mismatch',
    question: 'Are low hourly rates burning your budget with slow delivery?',
    problem: 'A 12-hour feedback loop can easily cut a team\'s velocity in half. A feature that should take two weeks takes four, doubling your "true" cost.',
    solution: 'Our nearshore model provides 4-8 hours of daily overlap. Real-time pairing and instant clarification on Slack eliminates human latency and accelerates development.',
    kpi: 'Time-to-First-PR in 7–14 days'
  },
  {
    icon: <Users2 className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of Vendor Churn',
    question: 'Is your best engineer re-training a revolving door of vendor talent?',
    problem: 'Offshore partners often rotate engineers off projects with little notice, leading to constant knowledge loss. Your seniors are forced to re-train new team members instead of building product.',
    solution: 'Our model is built on dedicated, long-term team members with retention ladders, ensuring continuity and preserving institutional knowledge.',
    kpi: '90-day retention ≥96%'
  },
  {
    icon: <FileSearch className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of "Vendor Fog"',
    question: 'Can you get a straight answer, or is project status lost in vague updates?',
    problem: 'When you lack direct access to source control, CI/CD, and system telemetry, you are flying blind. Vague status reports and delayed tickets make it impossible to forecast delivery.',
    solution: 'We provide radical transparency through our Nearshore IT Co-Pilot™ platform, offering a single pane of glass into hiring, compliance, and core performance KPIs.',
    kpi: '100% auditable system of record'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-yellow-400" />,
    title: 'The Pain of Multi-Vendor Risk',
    question: 'Are you juggling separate vendors for hiring, payroll, IT, and legal?',
    problem: 'Using separate vendors creates a web of complexity and accountability gaps. If a security incident occurs, who is responsible? The EOR? The recruiting firm?',
    solution: 'We eliminate this chaos by bundling all critical services—hiring, EOR, secure devices, insurance—under a single, accountable SLA.',
    kpi: '1 accountable contract'
  },
];

const hiddenTaxes = [
    {
        icon: <Zap className="h-6 w-6 text-red-400" />,
        title: "The Human Latency Tax",
        description: "This is the most significant and most often ignored cost. Assume a team of 6 engineers. A 12-hour time difference means that for every simple question, an entire workday is lost. If each engineer loses just 2 hours per day to waiting—a conservative estimate—that's 12 hours of wasted, fully-loaded engineering time every single day. At a loaded cost of $50/hour, that's $600 per day, or",
        impact: "$132,000 per year",
        impactColor: "text-red-400",
        afterText: "evaporated into thin air. That's the cost of a senior US engineer, spent on waiting."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-red-400" />,
        title: "The Management Overhead Tax",
        description: "Your engineering managers and product managers are expensive, high-leverage resources. An offshore model forces them into the role of vendor coordinators and late-night wranglers. If an EM spends 25% of their time managing offshore communications and rework, that's a quarter of their $200k+ salary—",
        impact: "$50,000 per year",
        impactColor: "text-red-400",
        afterText: "—dedicated to mitigating a problem that shouldn't exist."
    },
    {
        icon: <Scale className="h-6 w-6 text-red-400" />,
        title: "The Quality & Rework Tax",
        description: "Misunderstandings born from asynchronous communication lead directly to building the wrong thing. Every feature that needs significant rework due to a misread ticket is a 100% tax on the original development time. A single two-week sprint ($20k cost) that has to be redone because the requirements were misunderstood costs you $20k and, more importantly, two weeks of opportunity you'll never get back."
    },
    {
        icon: <FileSearch className="h-6 w-6 text-red-400" />,
        title: "The Compliance & Security Risk Multiplier",
        description: "What is the cost of a single data breach? For a mid-stage startup, it's not just the fines; it's existential. Relying on an offshore vendor who allows engineers to use personal laptops without",
        tooltipTerm: "MDM",
        tooltipText: "Mobile Device Management: Software that secures, monitors, and manages devices like laptops.",
        afterTooltipText: "isn't a cost-saving measure; it's a multi-million dollar liability waiting to happen. The cost is not a line item until it is, at which point it's too late. An integrated nearshore model with full device control and contractual liability shifts this risk from your books to ours."
    }
];

const comparisonTable = [
  { factor: 'Time-Zone Overlap', nearshore: 'High (4-8 hours)', offshore: 'Low (0-2 hours)', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'Enables real-time pairing and same-day PR reviews.', offshore_detail: 'Forces 24-hour feedback cycles and late-night calls.' },
  { factor: 'Collaboration Fidelity', nearshore: 'High', offshore: 'Low', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'Nuanced conversations reduce ambiguity and rework.', offshore_detail: 'Formal, ticket-based communication leads to misunderstanding.' },
  { factor: 'Cultural Alignment', nearshore: 'High', offshore: 'Medium', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'Strong affinity with U.S. work culture reduces friction.', offshore_detail: 'Varies by country; can introduce cultural gaps.' },
  { factor: 'Travel & Escalation', nearshore: 'Simple & Cost-Effective', offshore: 'Complex & Expensive', nearshore_color: 'text-green-400', offshore_color: 'text-red-400', nearshore_detail: 'Same-day or next-day travel is feasible for crisis resolution.', offshore_detail: 'Requires multi-day travel and visas, making it impractical.' },
  { factor: 'Compliance & Risk', nearshore: 'Lower (Contractually Managed)', offshore: 'Higher (Fragmented)', nearshore_color: 'text-green-400', offshore_color: 'text-red-400', nearshore_detail: 'An integrated EOR model handles all local labor and data laws.', offshore_detail: 'Navigating disparate legal frameworks is complex and risky.' },
  { factor: 'Total Cost of Ownership', nearshore: 'Predictable & Lower', offshore: 'Unpredictable & Higher', nearshore_color: 'text-green-400', offshore_color: 'text-yellow-400', nearshore_detail: 'An all-inclusive rate eliminates hidden fees.', offshore_detail: 'Low hourly rates are inflated by massive hidden costs.' },
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
      
      <div className="my-16 rounded-xl border bg-card p-8 md:p-12">
        <h2 className="text-center text-3xl font-bold">Foreword: The CTO's Dilemma</h2>
        <div className="prose dark:prose-invert max-w-2xl mx-auto mt-6 text-center">
            <p>You’re here because you’re under pressure. The board wants faster feature delivery. The CFO wants to cut engineering costs. Your best engineers are threatening to quit because they’re tired of 10 PM calls with a team on the other side of the world. You’ve been told that "offshore" is the answer to your budget problem, but your gut tells you it’s a trap. Your gut is right.</p>
            <p>The traditional offshore model, built on the simple arithmetic of lower hourly rates, is a relic of a pre-agile world. It was designed for waterfall projects with long lead times and minimal need for real-time collaboration. In today's world of two-week sprints, continuous deployment, and complex, interdependent systems, that model is not just inefficient; it is actively destructive to your velocity, your culture, and your bottom line.</p>
            <p>This guide is not another generic blog post listing the pros and cons of global talent. This is a strategic framework—a playbook—for you, the CTO, to diagnose the hidden costs bleeding your budget and the unseen risks threatening your roadmap. It is built on the Sandler methodology: we will first amplify the pain of your current situation, quantify its true financial impact, and then present a data-driven, logical solution. This is how you build a CFO-ready case for moving from a cost-centric offshore gamble to a value-driven nearshore strategy.</p>
        </div>
      </div>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 1 (The Pain): Diagnosing the Hidden Costs of Your Outsourcing Strategy</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">These are not minor inconveniences; they are critical business risks that manifest as financial drains and operational drags. This is the pain you are likely feeling today, even if you can't put a name to it.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {painPoints.map((point) => (
            <div key={point.title} className="rounded-lg border bg-card p-6 flex flex-col">
              <p className="text-sm font-semibold text-primary">{point.question}</p>
              <div className="flex items-center gap-3 mt-3">
                {point.icon}
                <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <h4 className="font-semibold text-yellow-400/80">The Problem</h4>
                <p className="text-sm text-muted-foreground m-0">{point.problem}</p>
              </div>
              <div className="mt-4 border-t border-border pt-4 flex-grow">
                <h4 className="font-semibold text-green-400">The Solution (Nearshore Integrated Platform)</h4>
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
          A CTO who presents a plan based solely on salary comparisons is walking into a financial trap. A true <Tooltip text="Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip> model must include the "hidden taxes" of management overhead, lost productivity due to the Human Latency Tax, the cost of vendor churn, and the significant financial risk of a compliance breach. These are not soft costs; they are real dollars draining from your P&L.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {hiddenTaxes.map((tax, index) => (
                <div key={index} className="bg-background/50 rounded-lg border p-6">
                    <div className="flex items-center gap-3">
                        {tax.icon}
                        <h3 className="text-lg font-bold">{tax.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                        {tax.description}
                        {tax.tooltipTerm && (
                            <>
                                {' '}<Tooltip text={tax.tooltipText || ''}>{tax.tooltipTerm}</Tooltip>{' '}
                            </>
                        )}
                        {tax.impact && (
                             <strong className={`font-bold ${tax.impactColor}`}> {tax.impact} </strong>
                        )}
                        {tax.afterText}
                         {tax.afterTooltipText && (
                            <>
                                {tax.afterTooltipText.split('MDM')[0]}
                                <Tooltip text="Mobile Device Management: Software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>
                                {tax.afterTooltipText.split('MDM')[1]}
                            </>
                         )}
                    </p>
                </div>
            ))}
        </div>
         <div className="mt-8 text-center">
            <Link href="/playbook/latam-economics" className="cta-button">
              See the Full TCO Framework
            </Link>
        </div>
      </section>
      
      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 3 (The Solution): A Holistic Comparison</h2>
         <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">A 12-hour time difference isn't an inconvenience; it's a systemic bottleneck that destroys agile velocity. This is not about finding cheaper developers; it's about engineering a faster, safer, and more efficient way to build software.</p>
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

      <div className="prose dark:prose-invert max-w-none text-center">
        <h2 className="mt-12">The Verdict: Choose Velocity and Control, Not Just Cost</h2>
        <p>
            For startups and growth-stage companies where speed and agility are paramount, the choice is clear. The hidden "latency tax" of the offshore model is a risk most cannot afford. While large enterprises with waterfall-style projects may tolerate asynchronous workflows, any organization practicing agile will see a dramatic ROI from the real-time collaboration enabled by a nearshore team.
        </p>
         <p>
          Our platform maximizes this advantage by providing not only the talent but the entire security and operational wrapper under a single SLA. This is not about finding cheaper developers; it's about engineering a faster, safer, and more efficient way to build software. It's a strategic decision to buy back time, reduce risk, and increase the velocity of your entire engineering organization.
        </p>
      </div>

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

    