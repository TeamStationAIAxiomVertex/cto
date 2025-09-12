
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Specific Focus on LATAM Nearshore', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: true },
    { feature: 'Publicly Stated Operational SLAs', teamstation: true, competitor: false },
    { feature: 'Bias Mitigation & Fairness Audits in Vetting', teamstation: true, competitor: false },
];


export default function AndelaComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / Andela
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Andela</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s LATAM-focused integrated platform and Andela’s global talent cloud.
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
          <h2 className="h2 mt-0 text-center">Andela</h2>
           <p className="text-center text-sm text-mute mb-6">Global Talent Cloud</p>
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
        <h2 className="h2 text-center">Analysis: The Nearshore Specialist vs. The Global Generalist</h2>
        <p>
            Andela operates a large, global "talent cloud" that connects companies with technologists from around the world. Their strength is their breadth and scale, offering access to a wide variety of skills across many geographies.
        </p>
        <p>
           TeamStation AI has a more specialized focus: building elite nearshore engineering teams specifically within Latin America. This focus allows us to provide a deeply integrated operational platform that is tailored to the unique legal, cultural, and logistical nuances of the region. While Andela helps you find talent, our platform provides the entire security and compliance wrapper—EOR, MDM-managed devices, insurance—that is critical for a secure nearshore operation.
        </p>
        <h3 className="h3">Depth vs. Breadth</h3>
        <p>
            The choice between TeamStation AI and Andela is one of depth versus breadth. Andela offers a massive, geographically diverse talent pool. TeamStation AI offers a deep, operationally-integrated solution specifically for the nearshore (LATAM) time zones. Our vetting process, powered by the{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            , is also uniquely designed to provide a deeper cognitive and bias-aware assessment than traditional screening methods.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            For companies looking to source talent globally from a wide range of regions, Andela is a powerful platform. For CTOs who want to specifically leverage the benefits of the nearshore model—time-zone alignment, cultural affinity, and real-time collaboration—and require a fully secure and managed operational platform, TeamStation AI is the more specialized and integrated choice.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
