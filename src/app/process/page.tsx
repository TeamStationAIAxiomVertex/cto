import { Search, FileSearch, UserCheck, Rocket, Handshake, BrainCircuit, GanttChartSquare, ShieldCheck } from 'lucide-react';

export default function ProcessPage() {
    const steps = [
        {
            icon: <Search className="icon" />,
            title: '1. Discovery & Alignment',
            duration: '1-2 Days',
            description: 'We meet with you to understand your technical needs, team culture, and the ideal cognitive profile for your role. This defines the benchmark for our search.',
        },
        {
            icon: <BrainCircuit className="icon" />,
            title: '2. AI-Powered Sourcing & Vetting',
            duration: '3-5 Days',
            description: 'Our Nebula Neural Search™ identifies top candidates from our 2.6M+ talent graph. Axiom Cortex™ then conducts deep, unbiased evaluations to create a shortlist of 2-3 elite, pre-vetted engineers.',
        },
         {
            icon: <Handshake className="icon" />,
            title: '3. Final Interviews & Selection',
            duration: '1-2 Days',
            description: 'You interview the curated shortlist. Since the heavy lifting of technical and cognitive vetting is done, you can focus on culture fit and team dynamics. You make the final hiring decision.',
        },
        {
            icon: <Rocket className="icon" />,
            title: '4. Secure Onboarding & Launch',
            duration: '≤ 10 Days',
            description: 'We handle all contracts, compliance, and secure device provisioning. Our evidence-backed onboarding process ensures your new team member is secure, compliant, and ready to contribute from day one.',
        },
    ];

    const securityPillars = [
        {
            icon: <FileSearch className="icon"/>,
            title: 'EOR & Country Compliance',
            description: 'Contracts, payroll, statutory benefits (incl. 13th-month where applicable), PTO, taxes—fully compliant per country.',
        },
        {
            icon: <ShieldCheck className="icon"/>,
            title: 'Device Security & MDM',
            description: 'Encrypted endpoints, provisioning & shipping, auto-patching, 24/7 monitoring, remote lock/wipe.',
        },
        {
            icon: <GanttChartSquare className="icon"/>,
            title: 'Insurance & IP Protection',
            description: 'Cyber/E&O coverage, NDAs & DPAs, work-for-hire IP assignment, U.S.-enforceable agreements.',
        },
        {
            icon: <UserCheck className="icon"/>,
            title: 'Background & Identity Checks',
            description: 'KYC, criminal record, employment & education verification, optional credit & reference checks.',
        }
    ]

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Process
      </div>
      <header className="text-center my-8">
        <h1 className="h1">How We Deliver Day-One-Ready LATAM Engineers</h1>
        <p className="lead max-w-3xl mx-auto">
          A clear, measurable process under one SLA—from role calibration to devices, access, and first pull request. One accountable workflow for hiring, EOR/payroll, compliance, and device management.
        </p>
         <div className="text-accent my-6 font-semibold">
            Time-to-Offer ≈ 9 days • Day-1 tool readiness ≥ 95% • First PR in 7–14 days
          </div>
      </header>

      <div className="grid grid-2 my-12 gap-8">
        {steps.map((step) => (
          <div className="icon-card" key={step.title}>
            {step.icon}
            <div>
              <div className='flex justify-between items-center'>
                 <h3 className="h3 mt-0">{step.title}</h3>
                 <span className="badge">{step.duration}</span>
              </div>
              <p className="text-sm text-slate-400 m-0">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="section">
        <h2 className="h2 text-center mt-0">Security, Compliance & Liability — Under One SLA</h2>
        <p className='lead text-center' style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            We carry the risk so you can keep the velocity. Our integrated platform handles the complex operational burdens of nearshore hiring, ensuring a secure and compliant process from end to end.
        </p>
        <div className='grid grid-4 mt-6 gap-6'>
            {securityPillars.map(pillar => (
                 <div className="icon-card !flex-col text-center items-center" key={pillar.title}>
                    {pillar.icon}
                    <div>
                        <h3 className="h3 mt-2 mb-1 text-base">{pillar.title}</h3>
                        <p className="text-sm text-slate-400 m-0">{pillar.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>


      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">A Process Built on Published SLAs</h2>
        <p className='text-center'>
            We believe in accountability. That's why we publish our delivery metrics. This isn't just a process; it's a performance-driven system designed to give you a competitive advantage.
        </p>
        <ul className='grid grid-4 text-center list-none p-0 mt-6'>
            <li>
                <div className='text-3xl font-bold text-accent'>≈ 9 days</div>
                <div className='text-sm text-slate-400'>Time-to-Offer</div>
            </li>
             <li>
                <div className='text-3xl font-bold text-accent'>≤ 5 days</div>
                <div className='text-sm text-slate-400'>Device Procurement</div>
            </li>
             <li>
                <div className='text-3xl font-bold text-accent'>≥ 99%</div>
                <div className='text-sm text-slate-400'>MDM Enrollment</div>
            </li>
             <li>
                <div className='text-3xl font-bold text-accent'>≥ 96%</div>
                <div className='text-sm text-slate-400'>90-Day Retention</div>
            </li>
        </ul>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Ready to Start Building?</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
           Our streamlined process means you can have an elite, fully-onboarded nearshore engineer integrated into your team in about two weeks.
        </p>
        <a href="/hire" className="cta">Book a Strategy Call</a>
      </div>
    </main>
  );
}