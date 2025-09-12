'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const levels = [
  { level: 'L1 Proficient', title: 'Guided contributor', description: 'Contributes on component-level tasks with guidance.', rate: 20 },
  { level: 'L2 Mid', title: 'Independent feature owner', description: 'Independently ships features and services.', rate: 30 },
  { level: 'L3 Senior', title: 'Leads complex projects', description: 'Leads cross-component projects and raises standards.', rate: 40 },
  { level: 'L4 Expert', title: 'Org-level architect', description: 'Sets architecture and technical strategy across teams.', rate: 50 },
];

const includedItems = [
    { title: 'LATAM Employer of Record (EOR)' },
    { title: 'Onboarding Automation' },
    { title: 'Devices and Security Monitoring' },
    { title: 'Cybersecurity Insurance' },
    { title: 'LATAM Office Spaces' },
    { title: 'Dedicated SaaS Platform' },
    { title: 'Documentation Management' },
    { title: 'Rapid Scalability' },
    { title: 'Advanced Talent Retention' },
    { title: 'Dedicated Account Manager' },
    { title: 'Dedicated Billing Support' },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="h1">Nearshore IT Staff Augmentation Pricing (LATAM)</h1>
        <p className="lead max-w-3xl mx-auto">
          Transparent hourly rates with EOR, devices/MDM, and compliance included—under one SLA, based on 173 hours/month.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {levels.map((level) => (
          <div key={level.level} className="card flex flex-col p-6">
            <h2 className="text-lg font-bold">{level.level}</h2>
            <p className="text-sm text-mute flex-grow">{level.description}</p>
            <div className="my-4">
              <span className="text-4xl font-bold">${level.rate}</span>
              <span className="text-mute">/hour</span>
            </div>
            <div className="text-xs text-mute space-y-1">
              <p>${(level.rate * 173).toLocaleString()}/mo</p>
              <p>${(level.rate * 173 * 12).toLocaleString()}/yr</p>
            </div>
             <p className="text-xs text-mute mt-2">± ${level.level === 'L4 Expert' ? 10 : 5} USD</p>
          </div>
        ))}
      </div>
      
      <div className="card my-12 p-8 bg-surface-2">
         <h2 className="h2 mt-0 text-center">The Math (Show This to Finance)</h2>
         <p className="text-center text-mute max-w-2xl mx-auto">See how faster hiring directly impacts your bottom line by reducing the "vacancy tax."</p>
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center mt-6">
            <div><span className="text-3xl font-bold">45</span><p className="text-sm text-mute">Baseline Hire Time</p></div>
            <div className="text-3xl font-bold">-</div>
            <div><span className="text-3xl font-bold">9</span><p className="text-sm text-mute">TeamStation Hire Time</p></div>
            <div className="text-3xl font-bold">=</div>
            <div><span className="text-3xl font-bold text-accent-custom">36</span><p className="text-sm text-mute">Days Saved</p></div>
         </div>
         <div className="text-center mt-6 bg-surface-1 p-4 rounded-lg max-w-lg mx-auto">
            <p className="font-mono text-sm md:text-base">
                (36 days / 365) * $1,000,000 ARR = <span className="font-bold text-accent-custom">$98,630</span>
            </p>
            <p className="text-xs text-mute mt-1">ARR pulled forward this year</p>
         </div>
      </div>

      <div className="my-16 text-center">
        <h2 className="h2">What's Included?</h2>
        <p className="lead max-w-3xl mx-auto">Our fully-loaded rate bundles all critical services under one SLA.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto text-left">
            {includedItems.map(item => (
                <div key={item.title} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} />
                    <span className="text-mute">{item.title}</span>
                </div>
            ))}
        </div>
      </div>

      <div className="section text-center">
        <Link href="/hire" className="cta">Book a Strategy Call</Link>
      </div>
    </div>
  );
}
