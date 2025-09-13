
import { ShieldCheck, Laptop, FileLock, Scale } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nearshore Compliance: GDPR, SSO, MDM & Device Control | Trust Center',
  description: 'Security and compliance are the foundation of our nearshore platform. Learn about our nearshore compliance for GDPR, SSO, MDM & device control for LATAM teams.',
};

export default function TrustPage() {
    const pillars = [
        {
            icon: <ShieldCheck className="h-8 w-8 text-primary" />,
            title: 'SOC 2 / ISO 27001 Alignment',
            description: 'Our operational controls for security, availability, and privacy are aligned with leading industry standards.',
        },
        {
            icon: <Laptop className="h-8 w-8 text-primary" />,
            title: 'Secure Device & MDM',
            description: 'We provision and manage all developer laptops with enterprise-grade MDM, enforcing disk encryption and remote wipe.',
        },
        {
            icon: <FileLock className="h-8 w-8 text-primary" />,
            title: 'Integrated EOR & Compliance',
            description: 'We handle all Employer of Record complexities, ensuring compliance with local labor laws (and frameworks like GDPR) in every LATAM country.',
        },
        {
            icon: <Scale className="h-8 w-8 text-primary" />,
            title: 'Cyber & E&O Insurance',
            description: 'All work is covered by comprehensive Cybersecurity and Errors & Omissions (E&O) insurance.',
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
          The AI era demands greater control over your IP, assets, and security. Why throw that control over the fence to a traditional vendor and just hope for the best? Our platform puts you in the driver's seat by providing an auditable, enterprise-ready environment for your nearshore team from day one.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
          {pillars.map((item) => (
             <div key={item.title} className="rounded-lg border bg-card p-8">
                {item.icon}
                <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
      </div>

      <div className="my-16 text-center">
        <h2 className="text-4xl font-bold">The Security Checklist for Vetting Any Partner</h2>
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

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Security is Our Default</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">Explore our MSA and see how our commitment to security is built into our legal framework.</p>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
            Book a Strategy Call
        </a>
      </div>
    </main>
  );
}
