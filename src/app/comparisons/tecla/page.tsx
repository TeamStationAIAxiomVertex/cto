
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph (Nebula™)', teamstation: true, competitor: false },
    { feature: 'Transparent, All-Inclusive Pricing', teamstation: true, competitor: false },
    { feature: 'Marketplace model, client handles operations', teamstation: false, competitor: true },
];


export default function TeclaComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / TECLA
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. TECLA</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated platform and TECLA’s talent marketplace model.
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
          <h2 className="h2 mt-0 text-center">TECLA</h2>
           <p className="text-center text-sm text-mute mb-6">LATAM Talent Marketplace</p>
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
        <h2 className="h2 text-center">Analysis: The Integrated Platform vs. The Marketplace</h2>
        <p>
            TECLA operates as a talent marketplace, connecting companies with a network of developers across Latin America. While effective for sourcing candidates, their model places the significant burden of compliance, payroll, device security, and HR management squarely on the client.
        </p>
        <p>
           TeamStation AI provides a fully integrated platform. We don't just find talent; we provide the entire operational infrastructure. This includes Employer of Record (EOR), secure device provisioning (MDM), and comprehensive insurance, all bundled into a single, predictable rate. Our{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            {' '}engine also provides a layer of cognitive and bias-aware vetting that goes far beyond traditional screening.
        </p>
        <h3 className="h3">Operational Responsibility: Where Does it Lie?</h3>
        <p>
            With a marketplace like TECLA, you find the talent, but then you are largely on your own. You have to figure out how to hire them compliantly, pay them, and secure their work environment. This creates significant operational overhead and legal risk. TeamStation AI absorbs this complexity. Our model is designed for CTOs who need to scale without building a global HR and legal department from scratch.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you have the internal resources to manage international hiring, compliance, and IT security, a marketplace like TECLA can be a good sourcing tool. However, for companies looking for a complete, secure, and scalable solution that reduces risk and operational burden, TeamStation AI's integrated platform offers a clear advantage.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
