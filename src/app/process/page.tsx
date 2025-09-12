import { Search, BrainCircuit, Handshake, Rocket, ShieldCheck, UserCheck, FileSearch, GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

export default function ProcessPage() {
    const steps = [
        {
            icon: <Search className="icon" />,
            title: '1. Discovery & Alignment',
            duration: '1-2 Days',
            description: 'We meet with you to understand your technical needs, team culture, and the ideal cognitive profile for your role.',
        },
        {
            icon: <BrainCircuit className="icon" />,
            title: '2. AI-Powered Sourcing & Vetting',
            duration: '3-5 Days',
            description: 'Our Nebula Neural Search™ identifies top candidates from our 2.6M+ talent graph. Axiom Cortex™ then creates a shortlist of 2-3 elite, pre-vetted engineers.',
        },
         {
            icon: <Handshake className="icon" />,
            title: '3. Final Interviews & Selection',
            duration: '1-2 Days',
            description: 'You interview the curated shortlist and make the final hiring decision. We handle the rest.',
        },
        {
            icon: <Rocket className="icon" />,
            title: '4. Secure Onboarding & Launch',
            duration: '≤ 10 Days',
            description: 'We handle all contracts, compliance, and secure device provisioning. Your new hire is ready to contribute from day one.',
        },
    ];

    const securityPillars = [
        { icon: <FileSearch className="icon"/>, title: 'EOR & Country Compliance' },
        { icon: <ShieldCheck className="icon"/>, title: 'Device Security & MDM' },
        { icon: <GanttChartSquare className="icon"/>, title: 'Insurance & IP Protection' },
        { icon: <UserCheck className="icon"/>, title: 'Background & Identity Checks' }
    ];

  return (
    <main className="container">
       <div className="breadcrumb">
            <Link href="/">Home</Link> / Process
        </div>
      <header className="text-center my-12">
        <h1 className="h1">Our Process: From Mandate to Mission-Ready</h1>
        <p className="lead max-w-3xl mx-auto">
          One accountable workflow for hiring, EOR/payroll, compliance, and device management under a single, measurable SLA.
        </p>
         <div className="text-accent-custom my-6 font-semibold">
            Time-to-Offer ≈ 9 days • Day-1 Tool Readiness ≥ 95% • First PR in 7–14 days
          </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-8 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div className="icon-card" key={step.title}>
            {step.icon}
            <div>
              <div className='flex justify-between items-center'>
                 <h3 className="h3 mt-0">{step.title}</h3>
                 <span className="badge">{step.duration}</span>
              </div>
              <p className="text-sm text-mute m-0">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="section my-16 text-center">
        <h2 className="h2 mt-0">Security & Compliance Under One SLA</h2>
        <p className='lead mx-auto max-w-3xl'>
            We carry the risk so you can keep the velocity. Our integrated platform handles the complex operational burdens of nearshore hiring.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-8 gap-6 max-w-4xl mx-auto'>
            {securityPillars.map(pillar => (
                 <div className="icon-card !flex-col text-center items-center p-6" key={pillar.title}>
                    {pillar.icon}
                    <h3 className="h3 mt-2 mb-1 text-base">{pillar.title}</h3>
                </div>
            ))}
        </div>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Ready to Start Building?</h2>
        <p className="lead max-w-3xl mx-auto">
           Our streamlined process means you can have an elite, fully-onboarded nearshore engineer integrated into your team in about two weeks.
        </p>
        <Link href="/hire" className="cta mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
