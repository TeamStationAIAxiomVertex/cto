import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ Profile Neural Search (Nebula™)', teamstation: true, competitor: false },
    { feature: 'Bundled Hardware, Offices, and Cyber Insurance', teamstation: true, competitor: false },
    { feature: 'Focus on EOR + Recruiting Service', teamstation: false, competitor: true },
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
          An analysis of TeamStation AI’s integrated Nearshore IT Co-Pilot™ versus Terminal’s EOR-plus-recruiter model.
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
           <p className="text-center text-sm text-mute mb-6">Global Hiring & EOR Service</p>
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
        <h2 className="h2 text-center">Analysis: The Integrated Co-Pilot vs. The EOR-Plus-Recruiter</h2>
        <p>
            Terminal builds remote engineering teams and can act as an Employer of Record (EOR), handling payroll and benefits. They offer a valuable service by removing many of the initial hurdles of hiring globally.
        </p>
        <p>
           However, their model stops there, leaving critical operational and security gaps. They do not provide a productized cognitive AI for talent validation, nor do they bundle secure devices, MDM, or cyber insurance. This means the client must still assemble and manage multiple vendors to cover their operational and security needs, increasing Total Cost of Ownership (TCO) and risk.
        </p>
        <h3 className="h3">The Governance & Validation Gap</h3>
        <p>
           TeamStation AI provides a complete, software-defined operating model. Our <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link> engine de-risks hiring through scientific validation, while our integrated platform bundles all necessary "run-state" services—devices, MDM, offices, compliance, and insurance—under a single, predictable SLA. This is the fundamental difference: Terminal is an EOR-plus-recruiter; TeamStation is a scientific nearshore platform that runs the whole loop from discovery to delivery.
        </p>
         <h3 className="h3">Buyer's Checklist</h3>
        <ul>
            <li>Need scientific, model-based proof of talent capability beyond a resume? **Choose TeamStation.**</li>
            <li>Need only EOR services, using your own internal tech and security stack? **Terminal may suffice.**</li>
            <li>Need a fully-managed security posture with device fleets and controlled workspaces from day one? **Choose TeamStation.**</li>
        </ul>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            For companies that just need to solve hiring and payroll, Terminal is a capable partner. For CTOs who require an end-to-end, secure, and scientifically-validated platform for their entire nearshore operation, TeamStation AI offers a far more comprehensive and integrated solution.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
