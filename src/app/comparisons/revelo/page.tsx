
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Integrated Platform (Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: false },
    { feature: 'Publicly Stated Delivery SLAs (e.g., Device Provisioning)', teamstation: true, competitor: false },
    { feature: 'Unified Platform vs. Marketplace + EOR', teamstation: true, competitor: false },
    { feature: 'Bias Mitigation & Fairness Audits in Vetting', teamstation: true, competitor: true },
];


export default function ReveloComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/comparisons">Comparisons</a> / Revelo
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Revelo</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s fully integrated platform and Revelo’s marketplace-plus-EOR model.
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
          <h2 className="h2 mt-0 text-center">Revelo</h2>
           <p className="text-center text-sm text-slate-400 mb-6">Marketplace + EOR</p>
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
        <h2 className="h2 text-center">Analysis: The Integrated Platform vs. Sourcing + EOR</h2>
        <p>
            Revelo offers a strong value proposition by combining a talent marketplace with Employer of Record (EOR) services. This solves a major pain point for companies by handling payroll and benefits. However, it stops short of a truly integrated solution.
        </p>
        <p>
           Key operational areas like secure device provisioning, Mobile Device Management (MDM), and cybersecurity insurance are not part of their core offering. This leaves a significant security and compliance gap for clients to fill. Furthermore, while Revelo has a large talent pool, TeamStation AI's talent graph is significantly larger (2.6M+ vs. 400k), and our{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            {' '} vetting engine provides a deeper, more scientifically-grounded assessment of talent.
        </p>
        <h3 className="h3">The Security and Compliance Gap</h3>
        <p>
           For any CTO, security is non-negotiable. The lack of integrated device management is a critical vulnerability. TeamStation AI addresses this head-on by providing MDM-managed laptops to all engineers, ensuring an audit-ready security posture from day one. This is a fundamental difference in philosophy: we believe operational security is a core responsibility, not an add-on for the client to manage.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            Revelo is an excellent choice for companies that primarily need to solve sourcing and payroll. However, for CTOs who require a comprehensive solution that includes deep vetting, operational security, and end-to-end compliance, TeamStation AI's fully integrated platform provides a more complete and secure offering.
        </p>
        <a href="/comparisons" className="cta">Back to Main Comparison</a>
      </div>
    </main>
  );
}
