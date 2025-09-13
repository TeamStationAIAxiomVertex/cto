
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Zap, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'LATAM Economics & TCO for CTOs | Nearshore Software Development Costs',
  description: 'A CFO-ready framework for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, accounting for hidden risks and productivity multipliers.',
};

const financialLevers = [
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        pain: "Is your budget based on misleading hourly rates?",
        title: 'Focus on Total Cost of Ownership (TCO)',
        description: 'An engineer’s salary is just the tip of the iceberg. We provide a transparent, all-inclusive TCO model that accounts for the massive hidden costs in legal, compliance, and administrative overhead that competitors ignore.',
        solutionHref: '/pricing',
        solutionLabel: 'See our TCO model',
        kpi: '40-60% lower TCO than DIY'
    },
    {
        icon: <AlertTriangle className="h-8 w-8 text-primary" />,
        pain: "Is slow hiring delaying your revenue?",
        title: 'Calculate the "Vacancy Tax"',
        description: 'Every day a critical role sits empty, you pay a "Vacancy Tax" in lost productivity and delayed revenue. High-concentration LATAM talent pools mean we hire faster, pulling your future revenue forward.',
        solutionHref: '/process',
        solutionLabel: 'Learn about our hiring velocity',
        kpi: 'Time-to-Offer ≈ 9 days'
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        pain: "Is time-zone lag killing your productivity?",
        title: 'Leverage the Productivity Multiplier',
        description: 'Time-zone alignment is a direct multiplier on output. Real-time pairing with our nearshore teams eliminates the communication delays and rework that plague offshore models, dramatically increasing your velocity.',
        solutionHref: '/playbook/nearshore-vs-offshore',
        solutionLabel: 'Compare Nearshore vs. Offshore',
        kpi: '4-8 hour daily overlap'
    }
];

export default function LatamEconomicsPage() {
  return (
    <main className="container max-w-5xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / <span>LATAM Economics</span>
      </div>
      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">LATAM Economics for CTOs: A CFO-Ready Framework</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A CTO who presents a plan based solely on salary comparisons is walking into a financial trap. This playbook provides a data-driven model for the <Tooltip text="Total Cost of Ownership: Includes not just salary, but all direct and indirect costs like hiring, legal, IT, and management overhead.">Total Cost of Ownership (TCO)</Tooltip> of a nearshore engineering team.
        </p>
      </header>

      <div className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">The Three Levers of Nearshore Financial Strategy</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Stop focusing on hourly rates. Start focusing on these three strategic levers to maximize your ROI.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialLevers.map((point) => (
                 <div key={point.title} className="rounded-lg border bg-card p-6 flex flex-col">
                    <p className="text-sm font-semibold text-primary">{point.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {point.icon}
                        <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{point.description}</p>
                     <Link href={point.solutionHref} className="mt-4 flex items-center text-sm font-semibold text-primary">
                        {point.solutionLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{point.kpi}</p>
                </div>
            ))}
        </div>
      </div>

       <div className="my-24 rounded-lg border bg-card p-8">
         <h2 className="text-3xl font-bold text-center">The Vacancy Tax: How Slow Hiring Burns Your Budget</h2>
         <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-2">Beyond direct costs, there's a powerful hidden cost: the value you lose every day a critical role sits empty. Faster, more accurate hiring doesn't just save time; it pulls future revenue forward.</p>
         <div className="text-center mt-8 bg-background p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className='font-semibold text-foreground'>The Math That Matters</h3>
            <div className="font-mono text-lg md:text-xl mt-2 flex flex-wrap justify-center items-center gap-2">
                <span>(36 days saved / 365)</span>
                <span className='text-primary'>*</span>
                <span>$1,000,000 ARR</span>
                <span className='text-primary'>=</span>
                <span className="font-bold text-green-400">$98,630</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Revenue pulled forward by hiring in <Link href="/process" className='text-primary hover:underline'>≈9 days</Link> vs. the industry average of 45.</p>
         </div>
      </div>

       <div className="my-24">
        <h2 className="text-4xl font-bold text-center">TCO Knockout: U.S. Hire vs. Nearshore Platform</h2>
         <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">This is the slide to show your finance team. A simple, powerful comparison of the true first-year cost of acquiring talent, contrasting a typical US hire with our fully-burdened, all-inclusive nearshore model.</p>
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
                  <td className="px-4 py-3 font-medium text-foreground">Recruitment Fees</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$25,000–$40,000</td>
                  <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Hardware & Software Setup</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$3,000–$5,000</td>
                  <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Admin & Legal Onboarding</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$2,000–$5,000</td>
                   <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50 bg-card">
                  <td className="px-4 py-3 font-bold text-foreground">Total Onboarding Cost</td>
                  <td className="px-4 py-3 font-bold text-red-400 text-center">$30,000–$50,000+</td>
                   <td className="px-4 py-3 font-bold text-green-400 text-center">$0</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-bold text-foreground">Est. Annual Salary (Senior)</td>
                  <td className="px-4 py-3 font-bold text-red-400 text-center">~$180,000</td>
                   <td className="px-4 py-3 font-bold text-green-400 text-center">~$83,040</td>
              </tr>
              <tr className="bg-primary/10">
                  <td className="px-4 py-4 font-extrabold text-foreground text-lg">First-Year TCO</td>
                  <td className="px-4 py-4 font-extrabold text-red-400 text-center text-lg">~$210,000+</td>
                   <td className="px-4 py-4 font-extrabold text-green-400 text-center text-lg">~$83,040</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Build Your CFO-Ready Business Case?</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
          Stop gambling on incomplete data. Let's have a real conversation about the nearshore software development cost for your specific needs. In 15 minutes, we can give you a concrete, defensible plan.
        </p>
         <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
            Book a No-Obligation Strategy Call
        </Link>
      </div>
    </main>
  );
}
