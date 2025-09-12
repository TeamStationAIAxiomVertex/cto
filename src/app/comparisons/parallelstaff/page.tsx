
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Single, Unified Service Contract & SLA', teamstation: true, competitor: false },
    { feature: '"Try-before-you-buy" model', teamstation: false, competitor: true },
    { feature: 'Client handles compliance and hardware', teamstation: false, competitor: true },
];


export default function ParallelStaffComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / ParallelStaff
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. ParallelStaff</h1>
        <p className="lead max-w-3xl mx-auto">
          A comparison between TeamStation AI’s integrated platform and ParallelStaff’s Talent-as-a-Service (TaaS) model.
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
          <h2 className="h2 mt-0 text-center">ParallelStaff</h2>
           <p className="text-center text-sm text-mute mb-6">Talent-as-a-Service (TaaS)</p>
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
        <h2 className="h2 text-center">Analysis: The Integrated Platform vs. TaaS</h2>
        <p>
            ParallelStaff's Talent-as-a-Service (TaaS) model, with its "try-before-you-buy" evaluation period, is a smart evolution of traditional staff augmentation. It rightly identifies the need for structured onboarding and aims to reduce mis-hire risk.
        </p>
        <p>
           However, their model still leaves the client to manage critical operational components. Employer of Record (EOR), secure device provisioning with MDM, and cybersecurity insurance are not bundled into a unified offering. Furthermore, while a two-week trial is better than nothing, it is not a substitute for the deep, scientific validation provided by TeamStation AI's{' '}
           <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>. A trial period can be influenced by project simplicity or short-term charisma, while our engine provides an objective, evidence-based measure of long-term capability.
        </p>
        <h3 className="h3">The Unification Difference</h3>
        <p>
           TeamStation AI was built on the premise that a fragmented approach is inefficient and risky. Our platform unifies hiring, legal/EOR, compliance, devices, security, and insurance under a single contract and a single SLA. This is the core difference: ParallelStaff offers a valuable service with a risk-reduction feature, while TeamStation AI offers a complete, end-to-end operating system for your nearshore team.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            ParallelStaff's TaaS model is a step in the right direction. However, for CTOs seeking a truly comprehensive, secure, and unified platform that minimizes risk and administrative overhead through scientific vetting and all-inclusive operations, TeamStation AI's integrated model represents the next logical evolution.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
