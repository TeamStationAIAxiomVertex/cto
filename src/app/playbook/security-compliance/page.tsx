
import { ShieldCheck, Laptop, FileLock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nearshore Security & Compliance Playbook | MDM & EOR | TeamStation AI',
    description: 'A CTO\'s playbook for audit-ready nearshore operations. Learn how TeamStation AI integrates security, MDM, EOR, and compliance for LATAM software development teams.'
};

export default function SecurityCompliancePage() {
    const pillars = [
        {
            icon: <ShieldCheck size={24} className="text-primary" />,
            title: 'SOC 2 / ISO 27001 Alignment',
            description: 'Our operational controls for security, availability, processing integrity, confidentiality, and privacy are aligned with leading industry standards, providing you an audit-ready posture.',
        },
        {
            icon: <Laptop size={24} className="text-primary" />,
            title: 'Secure Device & MDM',
            description: 'We provision, secure, and manage all developer laptops with enterprise-grade Mobile Device Management (MDM), enforcing policies like disk encryption, strong passwords, and remote wipe.',
        },
        {
            icon: <FileLock size={24} className="text-primary" />,
            title: 'Integrated EOR & Compliance',
            description: 'We handle all Employer of Record (EOR) complexities, ensuring compliance with local labor laws in every LATAM country we operate in, mitigating your legal and financial risk.',
        },
    ];

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / <span>Security & Compliance</span>
      </div>
      <header className="my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">The Playbook for Audit-Ready Nearshore Operations</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Security isn't an afterthought; it's the foundation of a scalable and trustworthy nearshore strategy. This playbook details how TeamStation AI builds a secure, compliant operational environment from day one.
        </p>
      </header>

      <div className="my-16">
        <h2 className="text-3xl font-bold text-center">The Three Pillars of Nearshore Security</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {pillars.map((item) => (
             <div className="rounded-lg border bg-card p-6" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none my-8">
        <h2>The Security Checklist for Vetting Any Partner</h2>
        <p>
          When evaluating any nearshore or remote talent partner, your due diligence should include these critical questions. A "no" to any of these is a major red flag. See how vendors stack up in our <Link href="/comparisons">competitive analysis</Link>.
        </p>
        <ul>
            <li><strong>Device Management:</strong> Do you provide and manage corporate-owned devices for all engineers? Are they enrolled in an MDM solution?</li>
            <li><strong>Access Control:</strong> Do you enforce MFA/SSO and role-based access control (RBAC) with least-privilege principles?</li>
            <li><strong>Data Handling:</strong> Is there a clear policy for handling sensitive data and PII? Is data encrypted in transit and at rest?</li>
            <li><strong>Compliance:</strong> Can you provide evidence of alignment with frameworks like SOC 2 or ISO 27001?</li>
            <li><strong>Insurance:</strong> Do you carry Cyber and Errors & Omissions (E&O) insurance?</li>
            <li><strong>Onboarding & Offboarding:</strong> Is there a formal, secure process for provisioning and de-provisioning access? Our <Link href="/nearshore-it-talent-onboarding">onboarding process</Link> is fully auditable.</li>
        </ul>
        <p>
            A vendor who cannot provide clear, confident answers to these questions is a significant risk to your organization.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold">Security is Not a Feature. It's Our Platform.</h2>
          <p className="mt-2 mx-auto max-w-xl text-muted-foreground">Explore our MSA and see how our commitment to security is built into our legal framework.</p>
          <Link href="/trust" className="cta-button mt-6">
            Visit Our Trust Center
          </Link>
      </div>
    </main>
  );
}
