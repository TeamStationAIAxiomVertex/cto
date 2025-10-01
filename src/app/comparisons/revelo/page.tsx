
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Revelo Alternative: TeamStation AI vs. Revelo',
  description: 'Compare TeamStation AI\'s integrated platform to Revelo\'s marketplace model for hiring developers in Latin America.',
};

const comparisonPoints = {
    "Operations": {
        pain: "Who handles device security and insurance?",
        traditional: "Revelo combines a marketplace with <span class='border-b border-dashed'>EOR</span>, which is a great start. However, secure device provisioning (<span class='border-b border-dashed'>MDM</span>) and insurance are not included, leaving a critical security and compliance gap.",
        teamstation: "Our integrated platform is a complete operational and risk shield. We bundle EOR, MDM-secured devices, and Cyber/E&O insurance under a single, accountable SLA.",
        proof: "SOC 2 & ISO Aligned"
    },
    "Vetting": {
        pain: "How do you ensure you're hiring top problem-solvers, not just skilled test-takers?",
        traditional: "Revelo's vetting focuses on technical skills and English proficiency. While important, this doesn't measure deeper cognitive traits like architectural instinct or learning orientation.",
        teamstation: "Our peer-reviewed <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> goes beyond skills tests to provide scientific evidence of a candidate's problem-solving ability and 'mental shape'.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Velocity": {
        pain: "Is your hiring process fast, or just 'not slow'?",
        traditional: "Revelo's 14-day time-to-hire is good, but it's still a multi-step process involving separate client interviews and negotiations.",
        teamstation: "Our process is engineered for speed and accuracy. The deep validation from our Cognitive AI allows you to move faster with higher confidence, achieving a time-to-offer in ≈9 days.",
        proof: "Time-to-Offer ≈ 9 days"
    }
}


export default function ReveloComparisonPage() {
    const siteUrl = 'https://cto.teamstation.dev';
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
        { "@type": "ListItem", "position": 3, "name": "Revelo Alternative", "item": `${siteUrl}/comparisons/revelo` }
        ]
    };
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="container py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Revelo Alternative</span>
        </div>
        <header className="text-center my-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Revelo Alternative: TeamStation AI</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A comparison between TeamStation AI’s fully integrated platform and Revelo’s marketplace-plus-EOR model for hiring developers in Latin America.
          </p>
           <div className="mt-4 text-sm">
              <a href="https://www.revelo.com/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Vendor home: revelo.com <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </header>

         <div className="my-12">
          <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. Sourcing + EOR</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {Object.entries(comparisonPoints).map(([key, value]) => (
              <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                <p className="text-sm font-semibold text-primary">{value.pain}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
                
                <div className="mt-4 flex-grow space-y-4">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      Revelo Model
                    </h4>
                    <p className="text-sm text-muted-foreground m-0" dangerouslySetInnerHTML={{ __html: value.traditional }} />
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      TeamStation AI Solution
                    </h4>
                     <p className="text-sm text-foreground m-0" dangerouslySetInnerHTML={{ __html: value.teamstation }} />
                  </div>
                </div>
                <p className="mt-6 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {value.proof}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
          <h2 className="text-center">Analysis: The Integrated Platform vs. Sourcing + EOR</h2>
          <p>
              <a href="https://www.revelo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Revelo <ExternalLink className="h-4 w-4" /></a> offers a strong value proposition by combining a LATAM talent marketplace with <WithTooltip label="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity."><span className="border-b border-dashed">EOR</span></WithTooltip> services, promising a 14-day time-to-hire. This solves a major pain point for companies by handling payroll and benefits. However, it stops short of a truly integrated operational solution.
          </p>
          <p>
             Key operational areas like secure device provisioning, <WithTooltip label="Mobile Device Management: software that secures, monitors, and manages devices like laptops."><span className="border-b border-dashed">MDM</span></WithTooltip>, and cybersecurity insurance are not part of their core offering. This leaves a significant security and compliance gap for clients to fill, adding hidden costs and risks.
          </p>
          <h3>The Security and Velocity Gap</h3>
          <p>
              For any CTO, security is non-negotiable. The lack of integrated device management is a critical vulnerability. As a Revelo alternative, TeamStation AI addresses this head-on by providing MDM-managed laptops to all engineers, ensuring an audit-ready security posture from day one. Furthermore, our <Link href="/process">process</Link> delivers a faster time-to-offer (≈9 days) and our{' '}
              <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ Cognitive AI</Link>
              {' '} vetting engine provides a deeper, scientifically-grounded assessment of talent, reducing mis-hire risk.
          </p>
        </div>

        <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
              Revelo is an excellent choice for companies that primarily need to solve sourcing and payroll. However, for CTOs who require a comprehensive solution that includes deep vetting, faster hiring, and end-to-end operational security, TeamStation AI is the superior Revelo alternative.
          </p>
          <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
        </div>
      </main>
    </>
  );
}
