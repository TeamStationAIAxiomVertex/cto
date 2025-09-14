

import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Zap, AlertTriangle, BrainCircuit, ShieldCheck, HelpCircle, Scale, Briefcase, BarChart, BookOpen, UserCheck, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'LATAM Economics & TCO for CTOs | Nearshore Software Development Costs',
  description: 'A CFO-ready framework for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, covering salaries, hidden costs of mis-hires, and security risks.',
};

const financialLevers = [
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        pain: "Is your budget based on misleading hourly rates?",
        title: 'Focus on Total Cost of Ownership (TCO)',
        description: 'An engineer’s salary is just the tip of the iceberg. Traditional vendors hide behind low hourly rates while you drown in the massive hidden costs of legal, compliance, and administrative overhead. We provide a transparent, all-inclusive TCO model so you can present a real, defensible number.',
        solutionHref: '/playbook/build-vs-buy',
        solutionLabel: 'Compare Build vs. Buy',
        kpi: '40-60% lower TCO than DIY'
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        pain: "Is slow hiring delaying your revenue?",
        title: 'Calculate the "Vacancy Tax"',
        description: 'Every day a critical role sits empty, you pay a "Vacancy Tax" in lost productivity and delayed revenue. A 60-day hiring cycle for a feature worth $1M ARR costs you over $160,000 in lost opportunity. High-concentration LATAM talent pools mean we hire faster, pulling your future revenue forward.',
        solutionHref: '/process',
        solutionLabel: 'Learn about our hiring velocity',
        kpi: 'Time-to-Offer ≈ 9 days'
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        pain: "Is time-zone lag killing your productivity?",
        title: 'Leverage the Productivity Multiplier',
        description: 'Time-zone alignment is a direct multiplier on output. Real-time pairing with our nearshore teams eliminates the communication delays and rework that plague offshore models, dramatically increasing your velocity and reducing the "human latency tax."',
        solutionHref: '/playbook/nearshore-vs-offshore',
        solutionLabel: 'Compare Nearshore vs. Offshore',
        kpi: '4-8 hour daily overlap'
    }
];

const hiddenTaxes = [
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        pain: "Did your last 'star' hire turn into a black hole for productivity?",
        title: 'The "Mis-Hire Tax"',
        description: 'A single bad senior hire costs 6-12 months of salary in lost productivity, team disruption, management overhead, and the cost of re-hiring. For a $150k engineer, that\'s a $75,000 - $150,000 direct hit to your P&L.',
        solutionHref: '/technical-interview-evaluation',
        solutionLabel: 'See our vetting process',
        kpi: 'Mismatch rate ≤ 10%'
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        pain: "Are you one insecure laptop away from a multi-million dollar breach?",
        title: 'The "Compliance Default" Risk',
        description: 'Using a vendor without integrated security is a catastrophic liability. A single breach from an unmanaged device can lead to devastating financial and legal consequences. Our platform provides a complete risk shield: EOR, MDM-secured devices, and Cyber/E&O insurance are all included.',
        solutionHref: '/trust',
        solutionLabel: 'Explore our Trust Center',
        kpi: 'SOC 2 & ISO Aligned'
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        pain: "Is 'vendor management' your secret second job?",
        title: 'The Management Overhead Tax',
        description: 'Your engineering and product managers are expensive, high-leverage resources. A fragmented vendor model forces them into the role of coordinators and late-night wranglers. If an EM spends 25% of their time managing vendor communications and rework, that\'s a quarter of their salary dedicated to a problem that shouldn\'t exist.',
        solutionHref: '/playbook/build-vs-buy',
        solutionLabel: 'Learn about our Integrated Platform',
        kpi: 'Reclaim 10+ hours/week for management'
    }
];

export default function LatamEconomicsPage() {
  return (
    <main className="container max-w-5xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook/hub" className="hover:text-foreground">CTO Playbook</Link> / <span>LATAM Economics</span>
      </div>

       <header className="my-8">
          <div className="rounded-lg border bg-card p-8 md:p-12">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">If a board asked “why so slow?”, would you show code-review latency, CFR, and MTTR—or excuses?</h1>
              <div className="mt-8 max-w-4xl grid gap-6">
                  <div className="bg-background p-6 rounded-lg border border-primary/20">
                      <p className="mt-2 text-muted-foreground">This CTO Playbook gives you a measured nearshore system: cognition-first hiring, secure-by-default devices, real SLAs for PRs and incidents, and a TCO model Finance signs without flinching.</p>
                  </div>
              </div>
          </div>
      </header>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 1: The Three Levers of a Real Nearshore Financial Strategy</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Stop letting the conversation be about hourly rates. Start leading with the three strategic levers that actually drive financial return.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialLevers.map((point) => (
                 <div key={point.title} className="rounded-lg border bg-card p-6 flex flex-col">
                    <p className="text-sm font-semibold text-primary">{point.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {point.icon}
                        <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{point.description}</p>
                     <div className="mt-6 border-t border-border pt-4">
                        <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {point.kpi}</p>
                        <Link href={point.solutionHref} className="mt-4 flex items-center text-sm font-semibold text-primary">
                            {point.solutionLabel} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                     </div>
                </div>
            ))}
        </div>
      </section>

      <section className="my-24 rounded-lg border bg-card p-8 md:p-12">
         <h2 className="text-3xl font-bold text-center">Part 2: The Hidden Taxes That Cripple Your Budget</h2>
         <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-2">These are the risks that keep your CFO up at night. They are the most dangerous costs because they don't appear on a vendor's quote. Here's how to model them and show you have a plan to mitigate them.</p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
             {hiddenTaxes.map((point) => (
                 <div key={point.title} className="rounded-lg border border-transparent bg-background p-6 flex flex-col">
                    <p className="text-sm font-semibold text-primary">{point.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {point.icon}
                        <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{point.description.replace('Axiom Cortex™', '').replace('EOR', '').replace('MDM', '')}
                      {point.description.includes("Axiom Cortex") && <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/axiom-cortex-scientific-report" className="text-primary hover:underline font-semibold">Axiom Cortex™</Link></Tooltip>}
                      {point.description.includes("EOR") && <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>}
                      {point.description.includes("MDM") && <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                        <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {point.kpi}</p>
                        <Link href={point.solutionHref} className="mt-4 flex items-center text-sm font-semibold text-primary">
                            {point.solutionLabel} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <section className="my-24">
        <h2 className="text-4xl font-bold text-center">Part 3: The TCO Knockout Slide for Your CFO</h2>
         <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">This is the slide that wins your budget. It's a simple, powerful comparison of the true first-year cost of acquiring talent, contrasting a typical US hire with our fully-burdened, all-inclusive nearshore platform.</p>
        <div className="overflow-x-auto mt-8">
          <table className="w-full max-w-4xl mx-auto text-sm text-left">
            <thead className="border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">Cost Area</th>
                <th className="px-4 py-3 font-semibold text-foreground text-center">Typical U.S. Onboarding</th>
                <th className="px-4 py-3 font-semibold text-primary text-center">TeamStation AI (Included)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Recruitment Fees (20% of Salary)</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$36,000</td>
                  <td className="px-4 py-3 font-semibold text-primary text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Hardware & Software Setup</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$3,500</td>
                  <td className="px-4 py-3 font-semibold text-primary text-center">Included</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Admin, Legal & HR Onboarding</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$3,000</td>
                   <td className="px-4 py-3 font-semibold text-primary text-center">Included</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Management Time (First 90 Days)</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$15,000</td>
                   <td className="px-4 py-3 font-semibold text-primary text-center">Minimized</td>
              </tr>
               <tr className="border-b border-border/50 bg-card">
                  <td className="px-4 py-3 font-bold text-foreground">Total Onboarding Cost (Hidden)</td>
                  <td className="px-4 py-3 font-bold text-destructive text-center">$57,500</td>
                   <td className="px-4 py-3 font-bold text-primary text-center">$0</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-bold text-foreground">Est. Annual Salary (Senior)</td>
                  <td className="px-4 py-3 font-bold text-destructive text-center">~$180,000</td>
                   <td className="px-4 py-3 font-bold text-primary text-center">~$83,040</td>
              </tr>
              <tr className="bg-primary/10">
                  <td className="px-4 py-4 font-extrabold text-foreground text-lg">First-Year TCO</td>
                  <td className="px-4 py-4 font-extrabold text-destructive text-center text-lg">~$237,500</td>
                   <td className="px-4 py-4 font-extrabold text-primary text-center text-lg">~$83,040</td>
              </tr>
            </tbody>
          </table>
        </div>
         <div className="text-center mt-8">
            <Link href="/playbook/tco-model" className="font-semibold text-primary hover:underline">
                See the Complete CFO-Ready TCO Model <ArrowRight className="inline h-4 w-4" />
            </Link>
        </div>
      </section>

      <section className="my-24 rounded-lg border bg-card p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center text-foreground">The Verdict: Speak the Language of Value</h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-primary flex items-center gap-2"><HelpCircle className="h-5 w-5"/>The Strategic Conversation</h3>
                <p className="mt-2 text-muted-foreground">The conversation with your CFO should not be about finding the "cheapest" developers. It should be about making the <strong className="text-foreground">most valuable investment</strong>. A low hourly rate from a traditional vendor is a tactical decision that introduces massive strategic risk. An all-inclusive TCO from an integrated platform like TeamStation AI is a strategic decision that <strong className="text-foreground">buys down risk, accelerates revenue, and creates a predictable financial model</strong> for scaling your engineering organization.</p>
                <p className="mt-4 text-foreground">By presenting this framework, you are no longer just a technical leader asking for budget. You are a business partner demonstrating financial acumen and a clear-eyed understanding of risk. This is how you get your budget approved and build an engineering organization that drives, rather than drains, value.</p>
            </div>
        </div>
    </section>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Build Your CFO-Ready Business Case?</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
          Stop gambling on incomplete data. Let's have a real conversation about the nearshore software development cost for your specific needs. In 15 minutes, we can give you a concrete, defensible plan your CFO will approve.
        </p>
         <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
            Book a No-Obligation Strategy Call
        </Link>
      </div>
    </main>
  );
}
