
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: false },
    { feature: 'Publicly Stated Delivery SLAs', teamstation: true, competitor: false },
    { feature: 'Traditional Staff Augmentation Model', teamstation: false, competitor: true },
    { feature: 'Focus on Sourcing and Placement', teamstation: false, competitor: true },
];


export default function NearsureComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / Nearsure
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Nearsure</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated platform and Nearsure’s traditional staff augmentation model.
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
          <h2 className="h2 mt-0 text-center">Nearsure</h2>
           <p className="text-center text-sm text-mute mb-6">Traditional Staff Augmentation</p>
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
        <h2 className="h2 text-center">Analysis: The Integrated Platform vs. Traditional Staff Aug</h2>
        <p>
            Nearsure operates on a classic staff augmentation model. They are experts at sourcing and placing nearshore talent to fill roles within your existing team. Their success in quickly filling a large number of roles demonstrates their recruiting prowess.
        </p>
        <p>
           However, the traditional staff aug model leaves significant operational, legal, and security burdens on the client. Issues like compliant hiring, payroll, secure device management, and insurance are typically outside the scope of their service. TeamStation AI was created to solve this exact problem. We provide an integrated platform that handles not only the sourcing (powered by our{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            {' '} and 2.6M+ talent graph) but also the entire operational infrastructure.
        </p>
        <h3 className="h3">Beyond Placement</h3>
        <p>
            The key difference is what happens after the placement. With Nearsure, their primary job is done once the candidate is hired. With TeamStation AI, that's just the beginning. Our platform continues to provide value through secure onboarding, performance diagnostics, and ongoing operational management, all under a single, predictable SLA. We don't just fill seats; we provide a complete, managed operating system for your nearshore team.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you have a robust internal HR, legal, and IT infrastructure to handle the complexities of international employment and security, Nearsure is a capable recruiting partner. If you want a single partner to handle all of those complexities for you, allowing you to focus purely on your product, TeamStation AI's integrated platform is the more modern and comprehensive solution.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
