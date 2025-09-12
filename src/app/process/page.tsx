
import { Search, BrainCircuit, Handshake, Rocket, ShieldCheck, UserCheck, FileSearch, GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

export default function ProcessPage() {
    const steps = [
        {
            icon: <Search className="h-8 w-8 text-primary" />,
            title: '1. Discovery & Alignment',
            duration: '1-2 Days',
            description: 'We meet with you to understand your technical needs, team culture, and the ideal cognitive profile for your role.',
        },
        {
            icon: <BrainCircuit className="h-8 w-8 text-primary" />,
            title: '2. AI-Powered Sourcing & Vetting',
            duration: '3-5 Days',
            description: 'Our Nebula Neural Search™ identifies top candidates from our 2.6M+ talent graph. Axiom Cortex™ then creates a shortlist of 2-3 elite, pre-vetted engineers.',
        },
         {
            icon: <Handshake className="h-8 w-8 text-primary" />,
            title: '3. Final Interviews & Selection',
            duration: '1-2 Days',
            description: 'You interview the curated shortlist and make the final hiring decision. We handle the rest.',
        },
        {
            icon: <Rocket className="h-8 w-8 text-primary" />,
            title: '4. Secure Onboarding & Launch',
            duration: '≤ 10 Days',
            description: 'We handle all contracts, compliance, and secure device provisioning. Your new hire is ready to contribute from day one.',
        },
    ];

    const securityPillars = [
        { icon: <FileSearch className="h-6 w-6 text-primary"/>, title: 'EOR & Country Compliance' },
        { icon: <ShieldCheck className="h-6 w-6 text-primary"/>, title: 'Device Security & MDM' },
        { icon: <GanttChartSquare className="h-6 w-6 text-primary"/>, title: 'Insurance & IP Protection' },
        { icon: <UserCheck className="h-6 w-6 text-primary"/>, title: 'Background & Identity Checks' }
    ];

  return (
    <main className="container max-w-6xl">
       <div className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link> / <span>Process</span>
        </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">From Mandate to Mission-Ready</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          One accountable workflow for hiring, EOR/payroll, compliance, and device management under a single, measurable SLA.
        </p>
         <div className="mt-6 font-semibold text-primary">
            Time-to-Offer ≈ 9 days • Day-1 Tool Readiness ≥ 95% • First PR in 7–14 days
          </div>
      </header>

      <div className="relative my-16">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        {steps.map((step, index) => (
          <div key={step.title} className={`relative flex md:items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="hidden md:flex items-center justify-center w-32">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card border shadow-md">
                    {step.icon}
                </div>
            </div>
            <div className="flex-1 rounded-lg border bg-card p-8 shadow-lg md:mx-8">
              <div className='flex justify-between items-center'>
                 <h2 className="text-xl font-bold">{step.title}</h2>
                 <span className="ml-4 shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{step.duration}</span>
              </div>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>


       <div className="my-16 text-center">
        <h2 className="text-4xl font-bold">Security & Compliance Under One SLA</h2>
        <p className='mt-4 mx-auto max-w-3xl text-lg text-muted-foreground'>
            We carry the risk so you can keep the velocity. Our integrated platform handles the complex operational burdens of nearshore hiring.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-12 gap-8 max-w-5xl mx-auto'>
            {securityPillars.map(pillar => (
                 <div className="flex flex-col items-center text-center p-4" key={pillar.title}>
                    {pillar.icon}
                    <h3 className="mt-3 font-semibold">{pillar.title}</h3>
                </div>
            ))}
        </div>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Start Building?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
           Our streamlined process means you can have an elite, fully-onboarded nearshore engineer integrated into your team in about two weeks.
        </p>
        <Link href="/hire" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
