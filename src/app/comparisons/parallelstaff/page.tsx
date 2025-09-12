
import { CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: false },
    { feature: 'Publicly Stated Delivery SLAs', teamstation: true, competitor: true },
    { feature: 'Single, Unified Service Contract', teamstation: true, competitor: false },
    { feature: 'Focus on End-to-End Governance', teamstation: true, competitor: false },
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
            ParallelStaff positions itself with a Talent-as-a-Service (TaaS) framework, which rightly identifies the need for security and structured onboarding—a step beyond traditional staff augmentation. They offer strong guarantees around speed and cost savings.
        </p>
        <p>
           However, their model appears to be a collection of services rather than a single, truly integrated platform. Critical components like Employer of Record (EOR), secure device provisioning with MDM, and cybersecurity insurance are not bundled into a unified offering. This means the client still has to manage multiple vendors or assume significant operational and legal risks. Furthermore, their vetting process, while structured, does not incorporate the deep cognitive AI and bias-mitigation layers of TeamStation AI's{' '}
           <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">
                Axiom Cortex™
            </Tooltip>.
        </p>
        <h3 className="h3">The Unification Difference</h3>
        <p>
           TeamStation AI was built on the premise that a fragmented approach is inefficient and risky. Our platform unifies hiring, legal/EOR, compliance, devices, security, and insurance under a single contract and a single SLA. This is the core difference: ParallelStaff offers a menu of valuable services, while TeamStation AI offers a complete, end-to-end operating system for your nearshore team. Our public SLAs on metrics like Time-to-Offer and device provisioning provide a level of transparency and accountability that is unique in the industry.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            ParallelStaff's TaaS model is a move in the right direction, acknowledging the shortcomings of basic staff augmentation. However, for CTOs seeking a truly comprehensive, secure, and unified platform that minimizes risk and administrative overhead, TeamStation AI's fully integrated model represents the next logical evolution.
        </p>
        <Link href="/comparisons" className="cta">Back to Main Comparison</Link>
      </div>
    </main>
  );
}
