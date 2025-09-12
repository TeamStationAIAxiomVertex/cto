
import { FileCheck, Laptop, Users, Gauge } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPage() {
    const steps = [
        {
            icon: <FileCheck className="h-8 w-8 text-primary" />,
            title: 'Day T-14: The Onboarding Dossier',
            description: 'Before day one, we compile a complete onboarding dossier: signed contracts, device/MDM proof, identity/access approvals, and data-handling attestations. This ensures your new team member is audit-ready before they even start.',
        },
        {
            icon: <Laptop className="h-8 w-8 text-primary" />,
            title: 'Day T-5: Secure Device Delivery',
            description: 'A fully-provisioned, MDM-enrolled laptop is delivered to the team member. It\'s pre-configured with your security policies, ensuring a secure, compliant workstation from the moment they log in.',
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: 'Day 1: Seamless Integration',
            description: 'The first day is focused on integration, not administration. Your new hire participates in team intros and ceremonies, and is assigned a small "first ticket" to land a quick, low-risk contribution and get familiar with the codebase.',
        },
         {
            icon: <Gauge className="h-8 w-8 text-primary" />,
            title: 'Day 30-60-90: Performance Diagnostics',
            description: 'We track progress against a clear 30-60-90 day plan, moving from component work to feature ownership. Our platform provides ongoing performance diagnostics, ensuring your new hire is ramping up effectively.',
        },
    ];

  return (
    <main className="container max-w-6xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Services</span> / <span>Talent Onboarding</span>
      </div>
      <header className="text-center my-12">
      <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Onboarding You Can Audit</h1>
       <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        A slow or insecure onboarding process is a drain on productivity and a major security risk. Our evidence-backed onboarding system ensures every new team member is compliant, secure, and ready to contribute from day one.
      </p>
      </header>

      <div className="grid md:grid-cols-2 my-16 gap-8">
        {steps.map((step) => (
          <div className="flex items-start gap-6 rounded-lg border bg-card p-8" key={step.title}>
            {step.icon}
            <div>
              <h2 className="text-xl font-bold">{step.title}</h2>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="prose prose-lg dark:prose-invert mx-auto my-16 max-w-4xl">
        <h2 className="text-center">The Difference is Evidence</h2>
        <p>
            Most onboarding processes are a black box. You hope the new hire is set up correctly, but you have no real proof. Our process is different. The Onboarding Dossier provides a clear, auditable trail of every step, from legal agreements to device security checks.
        </p>
        <p>
           This isn't just about compliance; it's about velocity. A structured, evidence-based onboarding process means your new engineer isn't spending their first week chasing down access or setting up their machine. They're shipping code.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready for a Faster, Safer Onboarding?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            See how our integrated platform and structured onboarding can accelerate your team's productivity.
        </p>
        <Link href="/process" className="cta-button mt-6">Explore Our Process</Link>
      </div>
    </main>
  );
}
