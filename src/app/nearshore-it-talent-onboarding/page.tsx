import { FileCheck, Laptop, Users, Gauge } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPage() {
    const steps = [
        {
            icon: <FileCheck size={32} className="icon" />,
            title: 'Day T-14: The Onboarding Dossier',
            description: 'Before day one, we compile a complete onboarding dossier: signed contracts, device/MDM proof, identity/access approvals, and data-handling attestations. This ensures your new team member is audit-ready before they even start.',
        },
        {
            icon: <Laptop size={32} className="icon" />,
            title: 'Day T-5: Secure Device Delivery',
            description: 'A fully-provisioned, MDM-enrolled laptop is delivered to the team member. It\'s pre-configured with your security policies, ensuring a secure, compliant workstation from the moment they log in.',
        },
        {
            icon: <Users size={32} className="icon" />,
            title: 'Day 1: Seamless Integration',
            description: 'The first day is focused on integration, not administration. Your new hire participates in team intros and ceremonies, and is assigned a small "first ticket" to land a quick, low-risk contribution and get familiar with the codebase.',
        },
         {
            icon: <Gauge size={32} className="icon" />,
            title: 'Day 30-60-90: Performance Diagnostics',
            description: 'We track progress against a clear 30-60-90 day plan, moving from component work to feature ownership. Our platform provides ongoing performance diagnostics, ensuring your new hire is ramping up effectively.',
        },
    ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / Services / Talent Onboarding
      </div>
      <h1 className="h1">Onboarding You Can Audit: Productive From Day One</h1>
      <p className="lead">
        A slow or insecure onboarding process is a drain on productivity and a major security risk. Our evidence-backed onboarding system ensures every new team member is compliant, secure, and ready to contribute from day one.
      </p>

      <div className="grid grid-2 my-12 gap-8">
        {steps.map((step) => (
          <div className="icon-card" key={step.title}>
            {step.icon}
            <div>
              <h3 className="h3 mt-0">{step.title}</h3>
              <p className="text-sm text-mute m-0">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">The Difference is Evidence</h2>
        <p>
            Most onboarding processes are a black box. You hope the new hire is set up correctly, but you have no real proof. Our process is different. The Onboarding Dossier provides a clear, auditable trail of every step, from legal agreements to device security checks.
        </p>
        <p>
           This isn't just about compliance; it's about velocity. A structured, evidence-based onboarding process means your new engineer isn't spending their first week chasing down access or setting up their machine. They're shipping code.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Ready for a Faster, Safer Onboarding?</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            See how our integrated platform and structured onboarding can accelerate your team's productivity.
        </p>
        <Link href="/process" className="cta">Explore Our Process</Link>
      </div>
    </main>
  );
}
