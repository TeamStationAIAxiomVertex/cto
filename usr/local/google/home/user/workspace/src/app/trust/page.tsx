
import { ShieldCheck, Laptop, FileLock, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import FurtherReading from '../../components/seo/FurtherReading';

export const metadata: Metadata = {
  title: 'Nearshore Compliance: GDPR, SSO, MDM | Trust Center',
  description: 'Security and compliance are the foundation of our nearshore platform. Learn about our controls for LATAM teams.',
  keywords: 'nearshore compliance, gdpr compliance, nearshore sso, nearshore mdm, latam device control, soc 2 nearshore',
};

export default function TrustPage() {
    const pillars = [
        {
            icon: <ShieldCheck className="h-8 w-8 text-primary" />,
            pain: "Worried about audit-readiness?",
            title: 'SOC 2 / ISO 27001 Alignment',
            description: 'Our operational controls for security, availability, and privacy are aligned with leading industry standards, providing an auditable posture from day one.',
            kpi: "100% auditable evidence trail"
        },
        {
            icon: <Laptop className="h-8 w-8 text-primary" />,
            pain: "Exposed by unmanaged laptops?",
            title: 'Secure Devices & MDM',
            description: 'We provision and manage all developer laptops with enterprise-grade MDM, enforcing disk encryption, auto-patching, and remote lock/wipe capabilities.',
            kpi: "MDM enrollment ≥99% (24h)"
        },
        {
            icon: <FileLock className="h-8 w-8 text-primary" />,
            pain: "Navigating complex local laws?",
            title: 'Integrated EOR & Compliance',
            description: 'We handle all Employer of Record complexities, ensuring compliance with local labor laws and data privacy frameworks (GDPR/LGPD) in every LATAM country.',
            kpi: "Zero compliance overhead"
        },
        {
            icon: <Scale className="h-8 w-8 text-primary" />,
            pain: "Carrying all the liability?",
            title: 'Cyber & E&O Insurance',
            description: 'All work is covered by our comprehensive Cybersecurity and Errors & Omissions (E&O) insurance, giving you a critical layer of financial protection.',
            kpi: "Liability shield included"
        },
    ];

  return (
    <main className="container max-w-7xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Trust Center</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">You Keep the Velocity. We Take the Risk.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Security and compliance aren't features; they're the foundation of our platform. We provide an auditable, enterprise-ready environment for your nearshore team from day one, so you can innovate with confidence.
        </p>
         <nav className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
            <Link href="/hire" className="text-primary hover:underline">Hire Talent</Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
          {pillars.map((pillar) => (
             <div key={pillar.title} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                <p className="text-sm font-semibold text-primary">{pillar.pain}</p>
                <div className="flex items-center gap-3 mt-3">
                    {pillar.icon}
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex-grow">{pillar.description}</p>
                <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{pillar.kpi}</p>
            </div>
          ))}
      </div>

      <div className="my-16 text-center">
        <h2 className="text-4xl font-bold text-foreground">The Security Checklist for Vetting Any Partner</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A vendor who cannot provide clear answers to these questions is a significant risk to your organization. With TeamStation AI, the answer is "yes" to all.
        </p>
        <ul className="list-none p-0 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <li className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 mt-1 text-primary"/>
                <div><strong className="text-foreground">Device Management:</strong> Are devices corporate-owned and MDM-enrolled for full SSO, MDM, and device control?</div>
            </li>
            <li className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 mt-1 text-primary"/>
                <div><strong className="text-foreground">Access Control:</strong> Is MFA/SSO and least-privilege RBAC enforced?</div>
            </li>
            <li className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 mt-1 text-primary"/>
                <div><strong className="text-foreground">Compliance:</strong> Can they provide evidence of SOC 2, ISO 27001, or nearshore compliance for GDPR?</div>
            </li>
            <li className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 mt-1 text-primary"/>
                <div><strong className="text-foreground">Insurance:</strong> Do they carry Cyber and E&O insurance?</div>
            </li>
        </ul>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground">Security is Our Default Setting</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">Explore our process and see how our commitment to security is built into every step of our platform.</p>
        <Link href="/process" className="cta-button mt-6">
            Explore Our Process <ArrowRight className="ml-2 h-4 w-4"/>
        </Link>
      </div>

     <FurtherReading />
    </main>
  );
}
