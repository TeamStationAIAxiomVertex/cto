
import { CheckCircle, XCircle } from 'lucide-react';

const teamStationFeatures = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', included: true },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', included: true },
    { feature: 'Bias Mitigation & Fairness Audits', included: true },
    { feature: 'Publicly Stated Delivery SLAs (Time-to-Offer, MDM Enrollment)', included: true },
    { feature: '2.6M+ LATAM Talent Graph (Nebula Neural Search)', included: true },
    { feature: 'Day-One Onboarding & Performance Diagnostics', included: true },
];

const bairesDevFeatures = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', included: false },
    { feature: 'Cognitive Science-Based Vetting (Axiom Cortex™)', included: false },
    { feature: 'Bias Mitigation & Fairness Audits', included: false },
    { feature: 'Publicly Stated Delivery SLAs (Time-to-Offer, MDM Enrollment)', included: false },
    { feature: '2.6M+ LATAM Talent Graph (Nebula Neural Search)', included: false },
    { feature: 'Day-One Onboarding & Performance Diagnostics', included: false },
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
        <div className="card">
          <h2 className="h2 mt-0 text-center">TeamStation AI</h2>
          <p className="text-center text-sm text-slate-400 mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <ul className="space-y-4">
            {teamStationFeatures.map(item => (
              <li key={item.feature} className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{item.feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card border-red-500/50">
          <h2 className="h2 mt-0 text-center">BairesDev</h2>
           <p className="text-center text-sm text-slate-400 mb-6">Traditional Staff Augmentation Vendor</p>
           <ul className="space-y-4">
            {bairesDevFeatures.map(item => (
              <li key={item.feature} className="flex items-start">
                <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{item.feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Analysis: The Platform vs. The Vendor</h2>
        <p>
            BairesDev represents a scaled-up version of the traditional nearshore staff augmentation model. They market access to a large talent pool—"the top 1% of 1.5M applicants"—and emphasize time-zone alignment. While effective at sourcing a high volume of candidates, their model remains fundamentally a service for providing personnel, not an integrated platform for running engineering teams.
        </p>
        <p>
            The critical difference lies in what happens *after* sourcing. TeamStation AI provides a comprehensive, end-to-end operating system. This isn't just about finding a developer; it's about handling their legal employment (EOR), providing them with a secure, managed device (MDM), covering them with cybersecurity insurance, and integrating them through a structured onboarding process—all under a single, transparent SLA. BairesDev, like most traditional vendors, does not bundle these crucial operational and governance layers into their core offering.
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
