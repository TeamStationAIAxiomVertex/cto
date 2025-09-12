import { ShieldCheck, Laptop, FileLock } from 'lucide-react';
import Link from 'next/link';

export default function SecurityCompliancePage() {
    const pillars = [
        {
            icon: <ShieldCheck size={24} className="text-accent-custom" />,
            title: 'SOC 2 / ISO 27001 Alignment',
            description: 'Our operational controls for security, availability, processing integrity, confidentiality, and privacy are aligned with leading industry standards, providing you an audit-ready posture.',
        },
        {
            icon: <Laptop size={24} className="text-accent-custom" />,
            title: 'Secure Device & MDM',
            description: 'We provision, secure, and manage all developer laptops with enterprise-grade Mobile Device Management (MDM), enforcing policies like disk encryption, strong passwords, and remote wipe.',
        },
        {
            icon: <FileLock size={24} className="text-accent-custom" />,
            title: 'Integrated EOR & Compliance',
            description: 'We handle all Employer of Record (EOR) complexities, ensuring compliance with local labor laws in every LATAM country we operate in, mitigating your legal and financial risk.',
        },
    ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/playbook">CTO Playbook</Link> / Security & Compliance
      </div>
      <h1 className="h1">The Playbook for Audit-Ready Nearshore Operations</h1>
      <p className="lead">
        Security isn't an afterthought; it's the foundation of a scalable and trustworthy nearshore strategy. This playbook details how TeamStation AI builds a secure, compliant operational environment from day one.
      </p>

      <div className="section my-12">
        <h2 className="h2 mt-0">The Three Pillars of Nearshore Security</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {pillars.map((item) => (
             <div className="card" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="h3 m-0 text-lg">{item.title}</h3>
                </div>
                <p className="text-sm mt-2 text-mute">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose my-8">
        <h2 className="h2">The Security Checklist for Vetting Any Partner</h2>
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

      <div className="section my-8 text-center">
          <h2 className="h2 mt-0">Security is Not a Feature. It's Our Platform.</h2>
          <p className="lead" style={{marginBottom: '24px'}}>Explore our MSA and see how our commitment to security is built into our legal framework.</p>
          <Link href="/trust" className="cta">
            Visit Our Trust Center
          </Link>
      </div>
    </main>
  );
}
