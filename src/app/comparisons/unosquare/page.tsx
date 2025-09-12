
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unosquare Alternative: TeamStation AI vs. Unosquare',
  description: 'Looking for an Unosquare alternative? Compare TeamStation AI\'s integrated nearshore platform with Unosquare\'s traditional staff augmentation and consulting.',
};

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph (Nebula™)', teamstation: true, competitor: false },
    { feature: 'Purpose-built for Integrated Teams', teamstation: true, competitor: false },
    { feature: 'Traditional Staff Aug & Project Consulting', teamstation: false, competitor: true },
    { feature: 'Client handles compliance, security, devices', teamstation: false, competitor: true },
];


export default function UnosquareComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Unosquare Alternative</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Unosquare Alternative: TeamStation AI</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated team-building platform and Unosquare’s traditional staff augmentation and consulting services.
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
          <h2 className="text-2xl font-bold text-center text-foreground">Unosquare</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">Staff Augmentation & Consulting</p>
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
        <h2 className="text-center">Analysis: The Integrated Platform vs. The Service Provider</h2>
        <p>
            Unosquare is a well-established provider of both staff augmentation and custom software development services. This hybrid model allows them to either supplement a client's team or take on entire projects as a consulting engagement.
        </p>
        <p>
           This differs significantly from TeamStation AI's singular focus: providing a complete platform for you to build and run your own elite nearshore team. We don't do project-based consulting; instead, we provide the talent and the entire operational infrastructure—<Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>, devices, security, insurance—for you to manage your team as a direct extension of your own. Our model is about empowerment and integration, not outsourcing.
        </p>
        <h3>Talent Pool, Vetting, and Risk</h3>
        <p>
            While Unosquare offers significant capacity, their vetting process is traditional, leaving the client exposed to mis-hire risk. As a strong Unosquare alternative, TeamStation AI's Nebula™ search taps into a much larger graph of over 2.6 million LATAM profiles, and our{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>
            {' '}engine provides a deep, scientific analysis of a candidate's cognitive abilities. This, combined with our all-inclusive operational wrapper, significantly reduces your Total Cost of Ownership (TCO) and operational risk.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you are looking to outsource a software project or need to quickly add developers to your team without an integrated operational wrapper, Unosquare is a proven partner. If your goal is to build a long-term, scalable, and secure nearshore engineering team that you directly manage, with all the operational complexities handled for you, TeamStation AI's platform model is the superior Unosquare alternative.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
