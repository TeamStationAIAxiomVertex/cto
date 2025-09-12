
import { CheckCircle, XCircle } from 'lucide-react';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Bias Mitigation & Fairness Audits', teamstation: true, competitor: false },
    { feature: 'Publicly Stated Delivery SLAs', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph', teamstation: true, competitor: false },
    { feature: 'Day-One Onboarding & Performance Diagnostics', teamstation: true, competitor: false },
];


export default function BairesDevComparisonPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/comparisons">Comparisons</a> / BairesDev
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. BairesDev</h1>
        <p className="lead max-w-3xl mx-auto">
          An objective comparison between TeamStation AI's integrated, science-driven platform and BairesDev's traditional staff augmentation model.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="card border-green-500/50">
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
        <div className="card border-red-500/50">
          <h2 className="h2 mt-0 text-center">BairesDev</h2>
           <p className="text-center text-sm text-slate-400 mb-6">Traditional Staff Augmentation</p>
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
        <h2 className="h2 text-center">Analysis: The Co-Pilot vs. The Vendor</h2>
        <p>
            BairesDev emphasizes that it hires the top 1% of LATAM engineers from over 1.5 million applicants per year and has a 96% client retention rate. While this signals a large operation, BairesDev’s vetting focuses on technical skills, English proficiency and experience; there is no disclosed cognitive-science or bias-mitigation layer. 
        </p>
        <p>
           TeamStation’s Axiom Cortex™ scores cognitive traits and ensures fair evaluation across language proficiencies. BairesDev offers broad project services, whereas TeamStation acts as a co-pilot—a controllable interface for hiring and ramping engineers under one SLA. With Nebula’s 2.6 million network and cognitive matching, TeamStation offers deeper bench access and more precise role fit than BairesDev’s published 4,000 engineers.
        </p>
        <h3 className="h3">The Vetting Process: Cognitive Science vs. Traditional Screening</h3>
        <p>
            This is perhaps the most significant philosophical divide. BairesDev's "top 1%" claim is based on their internal screening process. However, TeamStation AI's approach is grounded in a different kind of rigor: the cognitive science of our Axiom Cortex™ engine. We use 44 distinct psychometric and NLP signals to evaluate a candidate's problem-solving abilities, architectural instincts, and learning orientation.
        </p>
        <p>
            Crucially, our system includes a language-fairness calibration layer, designed to mitigate bias against non-native English speakers and focus on pure technical and logical signals. This science-driven, bias-aware methodology provides a level of insight into a candidate's true capabilities that traditional resume screening and technical tests cannot match.
        </p>
         <h3 className="h3">Transparency and Governance: Public SLAs vs. Opaque Operations</h3>
        <p>
            TeamStation AI operates with radical transparency, publishing key delivery metrics like Time-to-Offer (≈ 9 days), device provisioning time (≤ 5 days), and MDM enrollment success (≥ 99%). This provides clients with auditable, predictable performance. In contrast, traditional vendors, including BairesDev, typically do not publish these granular operational SLAs. The "how" of their delivery, especially regarding logistics like secure device management, remains a black box. For CTOs concerned with security, compliance, and operational excellence, this lack of transparency is a significant risk factor.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            Choosing between TeamStation AI and BairesDev is a choice between two fundamentally different models. BairesDev offers access to a large pool of talent. TeamStation AI offers a complete, scientifically-grounded system for hiring, running, and securing your nearshore engineering team. For leaders who prioritize operational excellence, governance, and a deeper, more accurate understanding of talent, the integrated platform model represents the clear evolution.
        </p>
        <a href="/comparisons" className="cta">Back to Main Comparison</a>
      </div>
    </main>
  );
}
