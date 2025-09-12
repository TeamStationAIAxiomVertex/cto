
'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';

const levels = [
  {
    level: 'L1 Proficient',
    title: 'Guided contributor',
    description: 'Contribute on component-level tasks with guidance.',
    rate: 20,
  },
  {
    level: 'L2 Mid',
    title: 'Independent feature owner',
    description: 'Independently ship features and services.',
    rate: 30,
  },
  {
    level: 'L3 Senior',
    title: 'Leads complex projects',
    description: 'Lead cross-component projects and raise standards.',
    rate: 40,
  },
  {
    level: 'L4 Expert',
    title: 'Org-level architect',
    description: 'Set architecture and technical strategy across teams.',
    rate: 50,
  },
];

const includedItems = [
    { title: 'LATAM Employer of Record (EOR)', description: 'Ensuring compliance with local laws and payroll management.' },
    { title: 'Onboarding Automation', description: 'Efficient onboarding to integrate new hires seamlessly.' },
    { title: 'Devices and Security Monitoring', description: 'Fully managed devices with 24/7 monitoring.' },
    { title: 'Cybersecurity Insurance', description: 'Protection against data breaches and cyber threats.' },
    { title: 'LATAM Office Spaces', description: 'Professional workspaces to foster collaboration.' },
    { title: 'Dedicated SaaS Platform', description: 'A single platform to manage your team\'s performance.' },
    { title: 'Documentation Management', description: 'Streamlined compliance and document handling.' },
    { title: 'Rapid Scalability', description: 'Expand your team accurately and rapidly.' },
    { title: 'Advanced Talent Retention', description: 'Our model enables investment in the brightest minds.' },
    { title: 'Dedicated Account Manager', description: 'A single point of contact for streamlined communication.' },
    { title: 'Dedicated Billing Support', description: 'Transparent invoicing and flexible billing cycles.' },
]

const pricingFactors = [
    { title: 'Role & Talent Signal', items: ['Level & scope (L1–L4)', 'Stack fit & specialization', 'Interview evidence', 'Candidate salary requirements', 'Premiums for scarce skills', 'English level/communication uplift'] },
    { title: 'Country & Statutory Reality', items: ['Stable delivery across LATAM', 'Holidays/PTO cadence', 'Statutory items (e.g., 13th-month pay)', 'FX & cross-border transfer fees', 'City-level compensation benchmarks'] },
    { title: 'Platform Services & Risk Shield', items: ['Company devices with MDM', 'Security workflows & IP/NDAs', 'Day-one readiness plan', 'Employer of Record (EOR)', 'Background checks & compliance', 'Optional offices/workspaces'] },
]

export default function PricingPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Pricing
      </div>
      <header className="text-center my-8">
        <h1 className="h1">Nearshore IT Staff Augmentation Pricing (LATAM)</h1>
        <p className="lead max-w-3xl mx-auto">
          Transparent hourly rates with EOR, devices/MDM, and compliance included—under one SLA, based on 173 hours/month.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {levels.map((level) => (
          <div key={level.level} className="card p-6 flex flex-col">
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
      
      <div className="card my-12 p-6 md:p-8 bg-surface-2">
         <h2 className="h2 mt-0 text-center">The Math (Show This to Finance)</h2>
         <p className="text-center text-mute max-w-2xl mx-auto">See how faster hiring directly impacts your bottom line by reducing the "vacancy tax."</p>
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center mt-6">
            <div><span className="text-3xl font-bold">45</span><p className="text-sm text-mute">Baseline Hire Time</p></div>
            <div className="text-3xl font-bold">-</div>
            <div><span className="text-3xl font-bold">9</span><p className="text-sm text-mute">TeamStation Hire Time</p></div>
            <div className="text-3xl font-bold">=</div>
            <div><span className="text-3xl font-bold text-green-400">36</span><p className="text-sm text-mute">Days Saved</p></div>
         </div>
         <div className="text-center mt-6 bg-surface-1 p-4 rounded-lg max-w-lg mx-auto">
            <p className="font-mono text-sm md:text-base">
                (36 days / 365) * $1,000,000 ARR = <span className="font-bold text-green-400">$98,630</span>
            </p>
            <p className="text-xs text-mute mt-1">ARR pulled forward this year</p>
         </div>
      </div>

      <div className="my-12">
        <h2 className="h2 text-center">What's Included With Our Nearshore IT Pricing?</h2>
        <p className="lead text-center max-w-3xl mx-auto">Providing end-to-end remote IT staffing with proven reliability you can trust.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {includedItems.map(item => (
                <div key={item.title} className="card p-5 flex items-start gap-4">
                    <CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={20} />
                    <div>
                        <h3 className="font-semibold text-base mt-0">{item.title}</h3>
                        <p className="text-sm text-mute m-0">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

       <div className="my-12">
        <h2 className="h2 text-center">How Pricing is Determined</h2>
        <p className="lead text-center max-w-3xl mx-auto">One fully-loaded hourly rate—clear, defensible, and optimized for value.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {pricingFactors.map(factor => (
                <div key={factor.title} className="card p-6">
                    <h3 className="h3 mt-0">{factor.title}</h3>
                    <ul className="text-sm text-mute space-y-2">
                        {factor.items.map(item => <li key={item} className="flex items-start gap-2"><ArrowRight size={16} className="text-accent-custom mt-1 flex-shrink-0" /> {item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
      </div>

      <div className="my-12">
        <h2 className="h2 text-center">U.S. Talent Onboarding Costs vs. TeamStation</h2>
         <p className="lead text-center max-w-3xl mx-auto">A comparable example of our value proposition to maximize your operating budget.</p>
        <div className="overflow-x-auto mt-8">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-line">
                        <th className="p-4">Cost Category</th>
                        <th className="p-4 text-center">Typical U.S. Onshore</th>
                        <th className="p-4 text-center bg-green-900/20">TeamStation AI (Nearshore)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-line"><td className="p-4">Recruitment</td><td className="p-4 text-center">$5,000–$8,000</td><td className="p-4 text-center font-bold bg-green-900/20">Included</td></tr>
                    <tr className="border-b border-line"><td className="p-4">Hardware & Software Setup</td><td className="p-4 text-center">$3,000–$5,000</td><td className="p-4 text-center font-bold bg-green-900/20">Included</td></tr>
                    <tr className="border-b border-line"><td className="p-4">Training & Onboarding</td><td className="p-4 text-center">$2,000–$5,000</td><td className="p-4 text-center font-bold bg-green-900/20">Included</td></tr>
                    <tr className="border-b border-line"><td className="p-4">Opportunity Costs (Vacancy)</td><td className="p-4 text-center">$5,000+</td><td className="p-4 text-center font-bold bg-green-900/20">$0</td></tr>
                    <tr className="border-b border-line"><td className="p-4">Compliance & Payroll</td><td className="p-4 text-center">$1,000–$2,000</td><td className="p-4 text-center font-bold bg-green-900/20">Included</td></tr>
                    <tr className="border-b border-line bg-surface-2"><td className="p-4 font-bold">Total Onboarding Cost</td><td className="p-4 text-center font-bold">$16,000–$25,000</td><td className="p-4 text-center font-bold text-green-400 bg-green-900/20">$0</td></tr>
                    <tr className="border-b border-line"><td className="p-4">Annual Salary (Example)</td><td className="p-4 text-center">$180,000</td><td className="p-4 text-center bg-green-900/20">$72,000</td></tr>
                    <tr className="bg-surface-2"><td className="p-4 font-bold">Total First Year Cost</td><td className="p-4 text-center font-bold">$196,000–$205,000</td><td className="p-4 text-center font-bold text-green-400 bg-green-900/20">$72,000</td></tr>
                </tbody>
            </table>
        </div>
        <div className="text-center mt-8">
            <a href="/hire" className="cta">Book a Strategy Call</a>
        </div>
      </div>
    </main>
  );
}
