
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

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
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / Unosquare
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Unosquare</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated team-building platform and Unosquare’s traditional staff augmentation and consulting services.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="card border-accent-custom/50 flex-1">
          <h2 className="h2 mt-0 text-center">TeamStation AI</h2>
          <p className="text-center text-sm text-mute mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.teamstation ? <CheckCircle className="text-accent-custom flex-shrink-0" size={20} /> : <XCircle className="text-warn-custom flex-shrink-0" size={20} />}
                <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card border-warn-custom/50 flex-1">
          <h2 className="h2 mt-0 text-center">Unosquare</h2>
           <p className="text-center text-sm text-mute mb-6">Staff Augmentation & Consulting</p>
           <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.competitor ? <CheckCircle className="text-accent-custom flex-shrink-0" size={20} /> : <XCircle className="text-warn-custom flex-shrink-0" size={20} />}
                 <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Analysis: The Integrated Platform vs. The Service Provider</h2>
        <p>
            Unosquare is a well-established provider of both staff augmentation and custom software development services. This hybrid model allows them to either supplement a client's team or take on entire projects as a consulting engagement.
        </p>
        <p>
           This differs significantly from TeamStation AI's singular focus: providing a complete platform for you to build and run your own elite nearshore team. We don't do project-based consulting; instead, we provide the talent and the entire operational infrastructure—EOR, devices, security, insurance—for you to manage your team as a direct extension of your own. Our model is about empowerment and integration, not outsourcing.
        </p>
        <h3 className="h3">Talent Pool, Vetting, and Risk</h3>
        <p>
            While Unosquare offers significant capacity, their vetting process is traditional, leaving the client exposed to mis-hire risk. TeamStation AI's Nebula™ search taps into a much larger graph of over 2.6 million LATAM profiles, and our{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            {' '}engine provides a deep, scientific analysis of a candidate's cognitive abilities. This, combined with our all-inclusive operational wrapper, significantly reduces your Total Cost of Ownership (TCO) and operational risk.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you are looking to outsource a software project or need to quickly add developers to your team without an integrated operational wrapper, Unosquare is a proven partner. If your goal is to build a long-term, scalable, and secure nearshore engineering team that you directly manage, with all the operational complexities handled for you, TeamStation AI's platform model is the superior choice.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
