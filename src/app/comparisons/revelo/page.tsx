
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Fully Integrated Platform (Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: false },
    { feature: 'Faster Time-to-Offer (9 vs 14 days)', teamstation: true, competitor: false },
    { feature: 'Marketplace + EOR model', teamstation: false, competitor: true },
    { feature: 'Client handles devices, security, insurance', teamstation: false, competitor: true },
];


export default function ReveloComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Revelo</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">TeamStation AI vs. Revelo</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s fully integrated platform and Revelo’s marketplace-plus-EOR model.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="rounded-lg border-2 border-primary/50 flex-1 p-8 bg-card">
          <h2 className="text-2xl font-bold text-center text-foreground">TeamStation AI</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="flex items-start gap-3">
                {item.teamstation ? <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} /> : <XCircle className="text-red-500 flex-shrink-0 mt-1" size={16} />}
                <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card flex-1 p-8">
          <h2 className="text-2xl font-bold text-center text-foreground">Revelo</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">Marketplace + EOR</p>
           <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="flex items-start gap-3">
                {item.competitor ? <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} /> : <XCircle className="text-red-500 flex-shrink-0 mt-1" size={16} />}
                 <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
        <h2 className="text-center">Analysis: The Integrated Platform vs. Sourcing + EOR</h2>
        <p>
            Revelo offers a strong value proposition by combining a LATAM talent marketplace with <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip> services, promising a 14-day time-to-hire. This solves a major pain point for companies by handling payroll and benefits. However, it stops short of a truly integrated operational solution.
        </p>
        <p>
           Key operational areas like secure device provisioning, <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>, and cybersecurity insurance are not part of their core offering. This leaves a significant security and compliance gap for clients to fill, adding hidden costs and risks.
        </p>
        <h3>The Security and Velocity Gap</h3>
        <p>
            For any CTO, security is non-negotiable. The lack of integrated device management is a critical vulnerability. TeamStation AI addresses this head-on by providing MDM-managed laptops to all engineers, ensuring an audit-ready security posture from day one. Furthermore, our <Link href="/process">process</Link> delivers a faster time-to-offer (≈9 days) and our{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>
            {' '} vetting engine provides a deeper, scientifically-grounded assessment of talent, reducing mis-hire risk.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            Revelo is an excellent choice for companies that primarily need to solve sourcing and payroll. However, for CTOs who require a comprehensive solution that includes deep vetting, faster hiring, and end-to-end operational security, TeamStation AI's fully integrated platform provides a more complete and secure offering.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
