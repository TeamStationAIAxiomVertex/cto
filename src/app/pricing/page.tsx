
'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';

const levels = [
  { level: 'L1 Proficient', title: 'Guided contributor', description: 'Contributes on component-level tasks with guidance.', rate: 20 },
  { level: 'L2 Mid', title: 'Independent feature owner', description: 'Independently ships features and services.', rate: 30 },
  { level: 'L3 Senior', title: 'Leads complex projects', description: 'Leads cross-component projects and raises standards.', rate: 40 },
  { level: 'L4 Expert', title: 'Org-level architect', description: 'Sets architecture and technical strategy across teams.', rate: 50 },
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

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Pricing</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Transparent, All-Inclusive Pricing</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          One predictable hourly rate. No hidden fees. Our pricing bundles all services—EOR, devices, security, and compliance—under a single SLA. Based on 173 hours/month.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        {levels.map((level) => (
          <div key={level.level} className="group rounded-lg border bg-card p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h2 className="text-lg font-bold">{level.level}</h2>
            <p className="text-sm text-muted-foreground flex-grow">{level.description}</p>
            <div className="my-6 text-center">
              <span className="text-5xl font-extrabold">${level.rate}</span>
              <span className="text-muted-foreground">/hour</span>
            </div>
            <div className="text-center text-sm text-muted-foreground space-y-1">
              <p><span className="font-semibold text-foreground">${(level.rate * 173).toLocaleString()}</span>/month</p>
              <p><span className="font-semibold text-foreground">${(level.rate * 173 * 12).toLocaleString()}</span>/year</p>
            </div>
             <p className="text-xs text-center text-muted-foreground mt-2">± ${level.level === 'L4 Expert' ? 10 : 5} USD</p>
             <Link href="/hire" className="cta-button w-full mt-6">
                Find Talent
             </Link>
          </div>
        ))}
      </div>
      
      <div className="my-16 text-center">
        <h2 className="text-4xl font-bold">What's Included in the Fully-Loaded Rate?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Our platform fee is embedded in the hourly rate, providing a comprehensive operational wrapper that reduces your Total Cost of Ownership (TCO).</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mt-12 max-w-6xl mx-auto text-left">
            {includedItems.map(item => (
                <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <span className="text-muted-foreground">{item.title}</span>
                </div>
            ))}
        </div>
      </div>
      
       <div className="rounded-lg border bg-card my-12 p-8">
         <h2 className="text-3xl font-bold text-center">The Math for Your CFO</h2>
         <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-2">See how our integrated model provides superior value compared to building a nearshore operation yourself. <Link href="/playbook/latam-economics" className="font-semibold text-primary hover:underline">Learn more in the Playbook.</Link></p>
         <div className="text-center mt-8 bg-background p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className='font-semibold text-foreground'>The Vacancy Tax: How Faster Hiring Impacts ARR</h3>
            <p className="font-mono text-lg md:text-xl mt-2">
                (36 days saved / 365) * $1,000,000 = <span className="font-bold text-green-400">$98,630</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Value pulled forward by hiring in 9 days vs. the industry average of 45.</p>
         </div>
      </div>

    </div>
  );
}
