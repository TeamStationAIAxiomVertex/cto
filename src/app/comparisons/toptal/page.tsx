
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Focus on Full-Time, Integrated Teams', teamstation: true, competitor: false },
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Transparent, All-Inclusive Pricing', teamstation: true, competitor: false },
    { feature: 'Focus on Freelance, Project-Based Talent', teamstation: false, competitor: true },
    { feature: 'High Hourly Rates + Subscription Fees', teamstation: false, competitor: true },
];


export default function ToptalComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / Toptal
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Toptal</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated team model and Toptal’s premium freelance network.
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
          <h2 className="h2 mt-0 text-center">Toptal</h2>
           <p className="text-center text-sm text-mute mb-6">Premium Freelance Network</p>
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
        <h2 className="h2 text-center">Analysis: Integrated Teams vs. Elite Freelancers</h2>
        <p>
            Toptal markets an exclusive network of the "top 3%" of freelance talent, ideal for companies needing individual experts for specific projects. However, it is fundamentally a freelance model, not a solution for building integrated, long-term teams.
        </p>
        <p>
           TeamStation AI's model is different. We build fully integrated, long-term nearshore teams and provide the operational, legal, and security infrastructure to run them. While Toptal's screening is rigorous, our{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            {' '} engine adds a layer of cognitive science and bias mitigation that provides a deeper, evidence-based understanding of a candidate's true potential.
        </p>
        <h3 className="h3">Cost and Continuity Risk</h3>
        <p>
            Toptal's premium positioning comes with high hourly rates ($60-$150+) plus subscription fees. This model is suited for short-term projects but is expensive for building full-time capacity. More importantly, the freelance model introduces continuity risk; there is no guarantee a contractor will remain for the long term.
        </p>
        <p>
            TeamStation AI focuses on providing a cost-effective, scalable solution for building dedicated teams of full-time employees. Our all-inclusive <Link href="/pricing">pricing</Link> is transparent and predictable, providing a lower TCO and eliminating the continuity risk inherent in freelance models.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you need a world-class freelance developer for a 3-month project, Toptal is an excellent choice. If you need to build a dedicated, secure, and cost-effective nearshore engineering team for the long haul, TeamStation AI's integrated platform is the more strategic and financially sound solution.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
