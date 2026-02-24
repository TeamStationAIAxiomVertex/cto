
import { ShieldCheck, Laptop, FileLock, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import FurtherReading from '../../components/seo/FurtherReading';
import { RevealSection, StaggerGrid, StaggerItem } from '../../components/motion/MotionPrimitives';
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Nearshore Compliance: GDPR, SSO, MDM | Trust Center',
  description: 'Security and compliance are the foundation of our nearshore platform. Learn about our controls for LATAM teams.',
  keywords: 'nearshore compliance, gdpr compliance, nearshore sso, nearshore mdm, latam device control, soc 2 nearshore',
};

const trustSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trust Center — Nearshore Compliance and Security",
  description: "Security and compliance controls for nearshore LATAM teams. GDPR, SSO, MDM, SOC 2 alignment.",
  url: "https://cto.teamstation.dev/trust",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: "https://cto.teamstation.dev" },
  publisher: { "@type": "Organization", name: "TeamStation AI", url: "https://teamstation.dev" },
  audience: { "@type": "Audience", audienceType: "Chief Technology Officer, Chief Information Officer" },
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

    const coverageBars = [
        { label: 'Device and MDM controls', pct: 99, note: 'Enrollment and policy coverage' },
        { label: 'Compliance evidence trail', pct: 100, note: 'Audit-ready workflow records' },
        { label: 'EOR and legal workflow coverage', pct: 96, note: 'Country-specific execution under one model' },
        { label: 'Risk transfer and insurance coverage', pct: 92, note: 'Operational and liability protections' },
    ];

  return (
    <main className="manual-page container max-w-7xl py-10">
      <JsonLd data={trustSchema} />
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Trust Center</span>
      </div>
      <header className="glass-panel gradient-ring hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
          You Keep the Velocity. We Take the Risk.
        </h1>
        <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">
          Security and compliance aren't features; they're the foundation of our platform. We provide an auditable, enterprise-ready environment for your nearshore team from day one, so you can innovate with confidence.
        </p>
        <nav className="mt-6 flex justify-center gap-4 text-sm">
          <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
          <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
          <Link href="/hire" className="text-primary hover:underline">Hire Talent</Link>
        </nav>
      </header>

      <RevealSection className="glass-panel gradient-ring rounded-2xl border border-border/70 my-12 p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Trust surface and control coverage</h2>
          <p className="mt-3 max-w-[72ch] text-muted-foreground leading-7">
            Security and compliance posture should be visible, not implied. This control map shows the operating coverage areas executives should verify before scaling a partner relationship.
          </p>
          <div className="mt-5 rounded-xl border border-border/70 bg-background/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Coverage graph</p>
            <div className="mt-4 space-y-3">
              {coverageBars.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1 flex items-center justify-between gap-3 text-xs">
                    <span className="font-semibold text-foreground">{bar.label}</span>
                    <span className="font-mono text-muted-foreground">{bar.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-border/70">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${bar.pct}%` }} />
                  </div>
                  <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{bar.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
          <div className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 flex flex-col shadow-lg">
            <p className="text-sm font-semibold text-primary">{pillar.pain}</p>
            <div className="flex items-center gap-3 mt-3">
              {pillar.icon}
              <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground flex-grow">{pillar.description}</p>
            <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
              {pillar.kpi}
            </p>
          </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
      </div>
      </RevealSection>

      <RevealSection className="my-16 text-center">
        <h2 className="text-4xl font-bold text-foreground">The Security Checklist for Vetting Any Partner</h2>
        <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">
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
      </RevealSection>

      <RevealSection className="glass-panel gradient-ring text-center rounded-lg border border-border/70 p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground">Security is Our Default Setting</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Explore our process and see how our commitment to security is built into every step of our platform.
        </p>
        <Link href="/process" className="cta-button mt-6">
          Explore Our Process <ArrowRight className="ml-2 h-4 w-4"/>
        </Link>
      </RevealSection>
      <FurtherReading />
    </main>
  );
}
