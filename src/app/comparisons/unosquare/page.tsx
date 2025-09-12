
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: false },
    { feature: 'Publicly Stated Delivery SLAs', teamstation: true, competitor: false },
    { feature: 'Focus on Building Integrated Teams', teamstation: true, competitor: false },
    { feature: 'Focus on Project-Based Consulting', teamstation: false, competitor: true },
];


export default function UnosquareComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/comparisons">Comparisons</a> / Unosquare
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Unosquare</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated team-building platform and Unosquare’s staff augmentation and custom software services.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="card border-green-500/50 flex-1">
          <h2 className="h2 mt-0 text-center">TeamStation AI</h2>
          <p className="text-center text-sm text-slate-400 mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.teamstation ? <CheckCircle className="text-green-500 flex-shrink-0" size={20} /> : <XCircle className="text-red-500 flex-shrink-0" size={20} />}
                <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card border-red-500/50 flex-1">
          <h2 className="h2 mt-0 text-center">Unosquare</h2>
           <p className="text-center text-sm text-slate-400 mb-6">Staff Augmentation & Consulting</p>
           <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="icon-card !p-3 !gap-3">
                {item.competitor ? <CheckCircle className="text-green-500 flex-shrink-0" size={20} /> : <XCircle className="text-red-500 flex-shrink-0" size={20} />}
                 <span className="text-sm">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Analysis: The Integrated Platform vs. The Service Provider</h2>
        <p>
            Unosquare is a well-established provider of both staff augmentation and custom software development services. This hybrid model allows them to either supplement a client's existing team or take on entire projects as a consulting engagement.
        </p>
        <p>
           This differs significantly from TeamStation AI's singular focus: providing a complete platform for you to build and run your own elite nearshore team. We don't do project-based consulting; instead, we provide the talent and the entire operational infrastructure (EOR, devices, security, insurance) for you to manage your team as a direct extension of your own. Our model is about empowerment and integration, not outsourcing.
        </p>
        <h3 className="h3">Talent Pool and Vetting</h3>
        <p>
            With a talent pool of over 1,000 professionals, Unosquare offers significant capacity. However, TeamStation AI's Nebula Neural Search™ taps into a much larger graph of over 2.6 million LATAM profiles. More importantly, our vetting process, powered by the{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            , provides a deep, scientific analysis of a candidate's cognitive abilities, which is a level of insight beyond traditional screening.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you are looking to outsource a software project or need to quickly add developers to your team without the need for an integrated operational wrapper, Unosquare is a capable and proven partner. If your goal is to build a long-term, scalable, and secure nearshore engineering team that you directly manage, with all the operational complexities handled for you, TeamStation AI's platform model is the superior choice.
        </p>
        <a href="/comparisons" className="cta">Back to Main Comparison</a>
      </div>
    </main>
  );
}
