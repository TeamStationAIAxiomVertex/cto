
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nearshore IT Staff Augmentation Pricing | TeamStation AI',
  description: 'Transparent, all-inclusive pricing for nearshore LATAM developers. See our TCO analysis and how we provide a CFO-ready business case for your engineering team.',
};

const levels = [
  { 
    level: 'L1 Proficient', 
    title: 'Guided contributor', 
    description: 'Contributes on component-level tasks with guidance.', 
    rate: 20, 
    margin: 5 
  },
  { 
    level: 'L2 Mid', 
    title: 'Independent feature owner', 
    description: 'Independently ships features and services.', 
    rate: 30, 
    margin: 5 
  },
  { 
    level: 'L3 Senior', 
    title: 'Leads complex projects', 
    description: 'Leads cross-component projects and raises standards.', 
    rate: 40, 
    margin: 5 
  },
  { 
    level: 'L4 Expert', 
    title: 'Org-level architect', 
    description: 'Sets architecture and technical strategy across teams.', 
    rate: 50, 
    margin: 10 
  },
];

const includedItems = [
    { title: 'LATAM Employer of Record (EOR)' },
    { title: 'AI-Powered Vetting & Onboarding' },
    { title: 'Secure Devices & MDM' },
    { title: 'Cybersecurity & E&O Insurance' },
    { title: 'LATAM Office Network Access' },
    { title: 'Performance & Documentation Platform' },
    { title: 'Compliance & IP Protection' },
    { title: 'Rapid Scaling & Backfill' },
    { title: 'Advanced Talent Retention' },
    { title: 'Dedicated Account Manager' },
    { title: 'Unified Billing Support' },
];

const pricingFactors = [
  {
    title: 'Role & Talent Signal',
    items: [
      'Level & scope (L1–L4), ownership, leadership signals',
      'Stack fit & specialization (AI/ML, Salesforce, data, security)',
      'Interview evidence (technical correctness, mental model, practical method)',
      'Candidate salary requirements in-band for country/city',
      'Premiums for scarce skills & proven impact',
      'English level/communication uplift (when required)',
    ]
  },
  {
    title: 'Country & Statutory Reality',
    items: [
      'Stable delivery across countries/cities in LATAM',
      'Holidays/PTO cadence that won’t break sprints',
      'Statutory items (social contributions, 13th-month pay, etc.)',
      'FX, banking & cross-border transfer fees, local payroll rules',
      'City-level compensation benchmarks',
    ]
  },
  {
    title: 'Platform Services & Risk Shield (Included)',
    items: [
      'Company devices with MDM, patch SLAs, endpoint monitoring',
      'Security workflows, IP/NDAs, incident response guardrails',
      'Day-one readiness (access, first ticket, 30-60-90 plan)',
      'Employer of Record (EOR)—we carry employer liability',
      'Background checks, contracts, payroll & benefits admin',
      'Optional offices/workspaces; consolidated invoicing',
    ]
  }
]

export default function PricingPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Pricing</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Your CFO-Ready Case for Nearshore</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Stop getting ambushed by hidden fees and vendor chaos. This is a predictable, all-inclusive cost model that your finance team will actually approve.
        </p>
         <div className="mt-4 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">From $20–$50/hr • 173 hrs/mo basis • Devices & compliance included</span>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        {levels.map((level) => (
          <div key={level.level} className="group rounded-lg border bg-card p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h2 className="text-lg font-bold">{level.level}</h2>
            <p className="text-sm text-muted-foreground flex-grow mt-1">{level.description}</p>
            <div className="my-6 text-center">
              <p className="text-sm text-muted-foreground">Starting at</p>
              <span className="text-5xl font-extrabold">${level.rate}</span>
              <span className="text-muted-foreground">/hour</span>
            </div>
            <div className="text-center text-sm text-muted-foreground space-y-1">
              <p><span className="font-semibold text-foreground">${(level.rate * 173).toLocaleString()}</span>/mo</p>
              <p><span className="font-semibold text-foreground">${(level.rate * 173 * 12).toLocaleString()}</span>/yr</p>
            </div>
             <p className="text-xs text-center text-muted-foreground mt-2">± ${level.margin} USD</p>
             <Link href="/hire" className="cta-button w-full mt-6">
                Find Talent
             </Link>
          </div>
        ))}
      </div>
      
        <div className="rounded-lg border bg-card my-12 p-8">
         <h2 className="text-3xl font-bold text-center">The Math Your CFO Cares About</h2>
         <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-2">A single delayed roadmap feature can cost you millions in ARR. Faster, more accurate hiring isn't a "nice-to-have"—it's a financial necessity.</p>
         <div className="text-center mt-8 bg-background p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className='font-semibold text-foreground'>The Vacancy Tax You're Paying Today</h3>
            <div className="font-mono text-lg md:text-xl mt-2 flex flex-wrap justify-center items-center gap-2">
                <span>(36 days saved / 365)</span>
                <span>* $1,000,000 ARR</span>
                <span>=</span>
                <span className="font-bold text-green-400">$98,630</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Revenue pulled forward by hiring in 9 days vs. the industry average of 45.</p>
         </div>
      </div>

      <div className="my-16 text-center">
        <h2 className="text-4xl font-bold">The All-Inclusive Risk Shield</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Competitors' quotes hide 10-15% in extra fees for EOR, device management, and compliance. Our rate includes everything. No surprises.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mt-12 max-w-6xl mx-auto text-left">
            {includedItems.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span className="text-muted-foreground">{item.title}</span>
                </div>
            ))}
        </div>
      </div>

       <div className="my-16">
        <h2 className="text-4xl font-bold text-center">How We Justify Your Budget</h2>
         <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">Our fully-loaded hourly rate is clear, defensible, and optimized for value. We align talent expectations with local market reality and bundle critical services under one accountable SLA.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pricingFactors.map(factor => (
                <div key={factor.title} className="rounded-lg border bg-card p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">{factor.title}</h3>
                    <ul className="space-y-2">
                        {factor.items.map(item => (
                             <li key={item} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 shrink-0 mt-1 text-green-400" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      
       <div className="my-16">
        <h2 className="text-4xl font-bold text-center">The TCO Knockout: U.S. Hire vs. TeamStation AI</h2>
         <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">This is the slide to show your finance team. It's a simple, powerful comparison of the true first-year cost.</p>
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
                  <td className="px-4 py-3 font-medium text-foreground">Recruitment</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$5,000–$8,000</td>
                  <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Hardware & Software Setup</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$3,000–$5,000</td>
                  <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Training & Onboarding</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$2,000–$5,000</td>
                   <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Compliance & Payroll Setup</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$1,000–$2,000</td>
                   <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50 bg-card">
                  <td className="px-4 py-3 font-bold text-foreground">Total Onboarding Cost</td>
                  <td className="px-4 py-3 font-bold text-red-400 text-center">$11,000–$20,000</td>
                   <td className="px-4 py-3 font-bold text-green-400 text-center">$0</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-bold text-foreground">Est. Annual Salary (Senior)</td>
                  <td className="px-4 py-3 font-bold text-red-400 text-center">~$180,000</td>
                   <td className="px-4 py-3 font-bold text-green-400 text-center">~$83,040</td>
              </tr>
              <tr className="bg-primary/10">
                  <td className="px-4 py-4 font-extrabold text-foreground text-lg">First-Year TCO</td>
                  <td className="px-4 py-4 font-extrabold text-red-400 text-center text-lg">~$191,000+</td>
                   <td className="px-4 py-4 font-extrabold text-green-400 text-center text-lg">~$83,040</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Stop Burning Money. Start Building.</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
          Let's have a real conversation about your budget and your roadmap. In 15 minutes, we can give you a concrete, defensible plan.
        </p>
         <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
            Book a No-Bullshit Strategy Call
        </Link>
      </div>
    </main>
  );
}
