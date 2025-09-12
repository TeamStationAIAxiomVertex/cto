
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: false },
    { feature: 'Publicly Stated Delivery SLAs', teamstation: true, competitor: false },
    { feature: 'End-to-End Operational Governance', teamstation: true, competitor: false },
    { feature: 'Single Contract for All Services', teamstation: true, competitor: false },
];


export default function TerminalComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / Terminal
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Terminal</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated platform and Terminal’s remote team-building service.
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
          <h2 className="h2 mt-0 text-center">Terminal</h2>
           <p className="text-center text-sm text-mute mb-6">Remote Team Building</p>
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
        <h2 className="h2 text-center">Analysis: The Integrated Co-Pilot vs. The Team-Builder</h2>
        <p>
            Terminal focuses on helping companies build remote engineering teams by handling recruiting, HR, and providing local office hubs. This is a valuable service that removes many of the initial hurdles of going global.
        </p>
        <p>
           However, their model does not extend to the same level of operational integration as TeamStation AI. Critical components like secure device provisioning (MDM), E&O and cybersecurity insurance, and a deep, AI-driven cognitive vetting process are not central to their offering. Terminal helps you build the team; TeamStation AI provides the entire secure and compliant operating system for that team.
        </p>
        <h3 className="h3">The Governance Layer</h3>
        <p>
            The fundamental difference lies in the governance layer. TeamStation AI unifies every aspect of the nearshore operation—hiring, legal, compliance, devices, security, and insurance—under a single, auditable SLA. We provide CTOs with a "single pane of glass" to manage their nearshore talent. Terminal, while excellent at recruitment and HR, operates more like a collection of services, leaving key governance and security responsibilities with the client.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            For companies that want a partner to handle recruitment and local HR, Terminal is a strong contender. For CTOs who require an end-to-end, secure, and fully-governed platform for their entire nearshore operation, TeamStation AI offers a more comprehensive and integrated solution.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
