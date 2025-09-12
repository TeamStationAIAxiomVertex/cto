import { Search, FileSearch, UserCheck, Rocket } from 'lucide-react';

export default function ProcessPage() {
    const steps = [
        {
            icon: <Search className="icon" />,
            title: '1. Discovery & Alignment (1-2 Days)',
            description: 'We meet with you to understand your technical needs, team culture, and the ideal cognitive profile for your role. This defines the benchmark for our search.',
        },
        {
            icon: <FileSearch className="icon" />,
            title: '2. AI-Powered Sourcing & Vetting (3-5 Days)',
            description: 'Our Nebula Neural Search™ identifies top candidates from our 2.6M+ talent graph. Axiom Cortex™ then conducts deep, unbiased evaluations to create a shortlist of 2-3 elite, pre-vetted engineers.',
        },
         {
            icon: <UserCheck className="icon" />,
            title: '3. Final Interviews & Selection (1-2 Days)',
            description: 'You interview the curated shortlist. Since the heavy lifting of technical and cognitive vetting is done, you can focus on culture fit and team dynamics. You make the final hiring decision.',
        },
        {
            icon: <Rocket className="icon" />,
            title: '4. Secure Onboarding & Launch (≤ 10 Days)',
            description: 'We handle all contracts, compliance, and secure device provisioning. Our evidence-backed onboarding process ensures your new team member is secure, compliant, and ready to contribute from day one.',
        },
    ];
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Process
      </div>
      <header className="text-center my-8">
        <h1 className="h1">From Search to Start in About 10 Days</h1>
        <p className="lead max-w-3xl mx-auto">
          Our process is engineered for speed, accuracy, and transparency. We combine the power of AI with a human-centric approach to deliver elite engineering talent faster than any traditional model.
        </p>
      </header>

      <div className="grid grid-2 my-12 gap-8">
        {steps.map((step) => (
          <div className="icon-card" key={step.title}>
            {step.icon}
            <div>
              <h3 className="h3 mt-0">{step.title}</h3>
              <p className="text-sm text-slate-400 m-0">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">A Process Built on Published SLAs</h2>
        <p>
            We believe in accountability. That's why we publish our delivery metrics.
        </p>
        <ul>
            <li><strong>Time-to-Offer:</strong> ≈ 9 days</li>
            <li><strong>Device Procurement & Activation:</strong> ≤ 5 days</li>
            <li><strong>MDM Enrollment Success:</strong> ≥ 99%</li>
            <li><strong>90-Day Retention:</strong> ≥ 96%</li>
        </ul>
        <p>
            This isn't just a process; it's a performance-driven system designed to give you a competitive advantage.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Ready to Start Building?</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
           Our streamlined process means you can have an elite, fully-onboarded nearshore engineer integrated into your team in about two weeks.
        </p>
        <a href="/hire" className="cta">Start the Process</a>
      </div>
    </main>
  );
}
