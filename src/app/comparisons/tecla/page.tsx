
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: true },
    { feature: 'Publicly Stated Delivery SLAs (e.g., Time-to-Offer)', teamstation: true, competitor: false },
    { feature: 'Secure Device & Workspace Management', teamstation: true, competitor: false },
    { feature: 'Bias Mitigation & Fairness Audits in Vetting', teamstation: true, competitor: false },
];


export default function TeclaComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/comparisons">Comparisons</a> / TECLA
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. TECLA</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated platform and TECLA’s talent marketplace model.
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
          <h2 className="h2 mt-0 text-center">TECLA</h2>
           <p className="text-center text-sm text-slate-400 mb-6">LATAM Talent Marketplace</p>
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
        <h2 className="h2 text-center">Analysis: The Platform vs. The Marketplace</h2>
        <p>
            TECLA operates as a talent marketplace, connecting companies with a large network of developers across Latin America. Their model emphasizes fast matching and cultural fit. While effective for sourcing candidates, it places the burden of compliance, payroll, device security, and HR management on the client.
        </p>
        <p>
           TeamStation AI provides a fully integrated platform. We don't just find talent; we provide the entire operational infrastructure. This includes Employer of Record (EOR), secure device provisioning (MDM), and comprehensive insurance. Our{' '}
            <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>
            {' '}engine also provides a layer of cognitive and bias-aware vetting that goes far beyond traditional screening.
        </p>
        <h3 className="h3">Operational Responsibility: Where Does it Lie?</h3>
        <p>
            With a marketplace like TECLA, you find the talent, but then you are largely on your own. You have to figure out how to hire them compliantly, how to pay them, and how to ensure their work environment is secure. This creates significant operational overhead and legal risk.
        </p>
        <p>
            TeamStation AI absorbs this complexity. Our model is designed for CTOs who need to scale without building a global HR and legal department. We handle the operational details so you can focus on your product roadmap.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            If you have the internal resources to manage international hiring, compliance, and IT security, a marketplace like TECLA can be a good sourcing tool. However, for companies looking for a complete, secure, and scalable solution, TeamStation AI's integrated platform offers a clear advantage by reducing risk and operational burden.
        </p>
        <a href="/comparisons" className="cta">Back to Main Comparison</a>
      </div>
    </main>
  );
}
