
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Focus on Full-Time, Integrated Teams', teamstation: true, competitor: false },
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Transparent, All-Inclusive Pricing', teamstation: true, competitor: false },
    { feature: 'Focus on Freelance, Project-Based Talent', teamstation: false, competitor: true },
    { feature: 'High Hourly Rates + Subscription Fees', teamstation: false, competitor: true },
];


export default function ToptalComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/comparisons">Comparisons</a> / Toptal
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Toptal</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated team model and Toptal’s premium freelance network.
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
          <h2 className="h2 mt-0 text-center">Toptal</h2>
           <p className="text-center text-sm text-slate-400 mb-6">Premium Freelance Network</p>
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
        <h2 className="h2 text-center">Analysis: Integrated Teams vs. Elite Freelancers</h2>
        <p>
            Toptal has built a strong reputation by marketing an exclusive network of the "top 3%" of freelance talent. Their model is ideal for companies that need to hire individual experts for specific projects on a contract basis. They excel at providing high-skill, on-demand talent.
        </p>
        <p>
           TeamStation AI's model is fundamentally different. We don't provide freelancers; we build fully integrated, long-term nearshore teams. Our platform is designed to provide the operational, legal, and security infrastructure needed to run a dedicated team as a seamless extension of your own. While Toptal's vetting is rigorous, our{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            {' '} engine adds a layer of cognitive science and bias mitigation that provides a deeper understanding of a candidate's potential.
        </p>
        <h3 className="h3">Cost and Commitment</h3>
        <p>
            Toptal's premium positioning comes with premium pricing, often involving high hourly rates plus subscription fees. It's a model well-suited for short-term, high-impact projects where budget is less of a concern than immediate access to a specific skill.
        </p>
        <p>
            TeamStation AI focuses on providing a cost-effective, scalable solution for long-term team building. Our all-inclusive pricing model is transparent and predictable, designed to provide a lower Total Cost of Ownership (TCO) for companies looking to build sustainable engineering capacity.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you need a world-class freelance developer for a 3-month project, Toptal is an excellent choice. If you need to build a dedicated, secure, and cost-effective nearshore engineering team for the long haul, TeamStation AI's integrated platform is the more strategic solution.
        </p>
        <a href="/comparisons" className="cta">Back to Main Comparison</a>
      </div>
    </main>
  );
}
