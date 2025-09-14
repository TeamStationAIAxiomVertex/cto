
import { FileCheck, Laptop, Users, Gauge, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure & Auditable Nearshore Talent Onboarding | TeamStation AI',
  description: 'Our evidence-backed onboarding for LATAM engineers ensures Day-1 productivity. We handle contracts, secure devices, access, and 30-60-90 day plans.',
};

export default function OnboardingPage() {
    const steps = [
        {
            icon: <FileCheck className="h-8 w-8 text-primary" />,
            pain: "Starting with zero visibility or proof?",
            title: 'The Onboarding Dossier (Day T-14)',
            description: 'Before day one, we compile a complete onboarding dossier: signed contracts, device/MDM proof, identity/access approvals, and data-handling attestations. This ensures your new hire is audit-ready before they even start.',
            kpi: "100% auditable record"
        },
        {
            icon: <Laptop className="h-8 w-8 text-primary" />,
            pain: "New hire wasting days on setup?",
            title: 'Secure Device Delivery (Day T-5)',
            description: 'A fully-provisioned, MDM-enrolled laptop is delivered. It\'s pre-configured with your security policies, ensuring a secure, compliant workstation from the moment they log in.',
            kpi: "Device MTPD ≤ 5 days"
        },
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            pain: "First week lost to admin, not code?",
            title: 'Seamless Integration (Day 1)',
            description: 'The first day is for integration, not administration. Your new hire joins team intros and ceremonies, and is assigned a small "first ticket" to land a quick, low-risk contribution.',
            kpi: "Day-1 readiness ≥95%"
        },
         {
            icon: <Gauge className="h-8 w-8 text-primary" />,
            pain: "Unsure if your new hire is ramping up?",
            title: 'Performance Diagnostics (Day 30-60-90)',
            description: 'We track progress against a clear 30-60-90 day plan, moving from component work to feature ownership. Our platform provides ongoing performance diagnostics to ensure effective ramp-up.',
            kpi: "Time-to-First-PR 7–14 days"
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
           <div key={step.title} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                <p className="text-sm font-semibold text-primary">{step.pain}</p>
                <div className="flex items-center gap-3 mt-3">
                    {step.icon}
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex-grow">{step.description}</p>
                <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {step.kpi}</p>
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

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready for a Faster, Safer Onboarding?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            See how our integrated platform and structured onboarding can accelerate your team's productivity.
        </p>
        <Link href="/process" className="cta-button mt-6">Explore Our Full Process <ArrowRight className="ml-2 h-4 w-4"/></Link>
      </div>
    </main>
  );
}
