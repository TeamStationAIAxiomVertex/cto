import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Bias Mitigation & Fairness Audits', teamstation: true, competitor: false },
    { feature: 'Transparent Pricing & Predictable TCO', teamstation: true, competitor: false },
    { feature: 'Focus on "Top 1%" Resume Screening', teamstation: false, competitor: true },

];

export default function BairesDevComparisonPage() {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-12">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / BairesDev
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. BairesDev</h1>
        <p className="lead max-w-3xl mx-auto">
          An objective comparison between TeamStation AI's integrated, science-driven platform and BairesDev's traditional staff augmentation model.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div className="card border-accent-custom/50 flex-1 p-6">
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
        <div className="card border-warn-custom/50 flex-1 p-6">
          <h2 className="h2 mt-0 text-center">BairesDev</h2>
           <p className="text-center text-sm text-mute mb-6">Traditional Staff Augmentation</p>
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
        <h2 className="h2 text-center">Analysis: The Co-Pilot vs. The "Top 1%" Vendor</h2>
        <p>
            BairesDev markets heavily on hiring the "top 1%" of talent from a pool of 1.5 million applicants. While this signals a large recruiting operation, their model is traditional staff augmentation. They find and place engineers, but the client is left to manage compliance, device security, and the associated risks. TeamStation AI provides a complete, science-driven system for hiring, running, and securing your nearshore team under a single, predictable contract.
        </p>
        <h3 className="h3">Vetting: Cognitive Science vs. Resume Screening</h3>
        <p>
            This is the most significant divide. BairesDev's "top 1%" claim is based on their internal screening of experience and English proficiency. TeamStation AI's <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link> engine uses 44 distinct psychometric and NLP signals to evaluate a candidate's problem-solving abilities and learning orientation, with a fairness layer to mitigate bias against non-native English speakers. We provide evidence-based validation of cognitive ability, not just resume keywords.
        </p>
        <h3 className="h3">Cost & Risk: Predictable TCO vs. Hidden Fees</h3>
        <p>
            With BairesDev, companies must budget for separate vendors to handle EOR, device management, and insurance. The total cost of ownership (TCO) for a $40/hr engineer can easily exceed TeamStation’s all-inclusive rate. Our transparent, bundled <Link href="/pricing">pricing</Link> eliminates hidden fees, making your budget predictable and often lower.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead max-w-3xl mx-auto">
            For leaders who prioritize operational excellence, governance, and a deeper, more accurate understanding of talent, TeamStation's integrated platform model represents a clear evolution over traditional staff augmentation. We reduce mis-hire risk and provide a lower, more predictable TCO.
        </p>
        <div className="mt-8">
            <Link href="/comparisons" className="cta">Back to All Comparisons</Link>
        </div>
      </div>
    </div>
  );
}
