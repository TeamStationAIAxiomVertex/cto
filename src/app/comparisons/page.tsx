
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';

const vendors = [
  {
    name: 'BairesDev',
    slug: 'bairesdev',
    claim: 'Traditional nearshore dev shop & staff-aug vendor; markets “top 1 %” engineers from 1.5M applicants and 4,000+ timezone-aligned developers.',
    lacks: 'No integrated platform (devices, offices, insurance) or day-one onboarding; does not publish device/MDM logistics; no cognitive-science vetting or bias-mitigation layer.',
  },
  {
    name: 'Globant',
    slug: 'globant',
    claim: 'Global SI offering AI-infused CODA agents for software development and transformation.',
    lacks: 'Provides project delivery, not a staffing platform; lacks integrated EOR, devices, insurance and cognitive evaluations; doesn’t focus on nearshore squads or 2.6M-profile talent networks.',
  },
  {
    name: 'TECLA',
    slug: 'tecla',
    claim: 'LATAM talent marketplace across 18+ countries; emphasises fast matching and cultural fit.',
    lacks: 'No combined EOR, device provisioning or workspace management; vetting process not grounded in cognitive science or fairness; no public SLAs on time-to-offer or MDM.',
  },
  {
    name: 'Revelo',
    slug: 'revelo',
    claim: 'Marketplace + EOR; claims 30–50 % cost savings, 400K engineers and 14-day hiring.',
    lacks: 'Handles payroll/benefits but not devices, workspaces, or insurance; vetting lacks cognitive AI; smaller talent graph (0.4 M vs 2.6 M) and no published onboarding metrics.',
  },
  {
    name: 'Terminal',
    slug: 'terminal',
    claim: 'Builds nearshore teams via hubs in MX/CO/CR/CL; markets cost savings and 40 % faster hiring.',
    lacks: 'No integrated devices, MDM or offices; no cyber/E&O insurance; no cognitive AI evaluation; unknown network size and ramp metrics.',
  },
  {
    name: 'Deel',
    slug: 'deel',
    claim: 'Global EOR/HRIS priced at $599 per employee per month.',
    lacks: 'Payroll & compliance only—not a talent-delivery or evaluation platform; clients must source and assess engineers; no devices, offices or insurance.',
  },
  {
    name: 'Toptal',
    slug: 'toptal',
    claim: 'Premium freelance network; markets top 3 % talent and high hourly rates.',
    lacks: 'Focus on freelancers, not teams; no integrated EOR, devices, compliance or offices; no cognitive science; costs $60–150/h plus subscription.',
  },
  {
    name: 'Andela',
    slug: 'andela',
    claim: 'AI-powered talent cloud with 150K technologists; reduces time-to-hire by 66 %.',
    lacks: 'Global scope; lacks integrated devices, EOR, insurance or offices; vetting not cognitive-science based; smaller network; no published device or MDM SLAs.',
  },
  {
    name: 'Nearsure',
    slug: 'nearsure',
    claim: 'Nearshore staff-aug; success story: filled 24 roles in 29 days and built an AI recruiter reducing hiring time by 30 %.',
    lacks: 'Traditional staff-aug; no mention of devices, MDM, compliance or insurance; vetting does not include cognitive AI; no 2.6M-profile network.',
  },
  {
    name: 'ParallelStaff',
    slug: 'parallelstaff',
    claim: 'Nearshore staffing with risk-free guarantee; promises a shortlist in 5 days and cost savings of 30–50 %; TaaS framework offers security & onboarding and a project success office.',
    lacks: 'Good guarantees but lacks integrated platform (no EOR, devices, offices or cyber insurance); no cognitive-science evaluation; network size unknown; time-to-offer metrics not published.',
  },
  {
    name: 'Unosquare',
    slug: 'unosquare',
    claim: 'Staff-augmentation and custom-software provider with 1,000+ professionals across multiple countries.',
    lacks: 'Services focused on development and consulting; no integrated EOR/devices/insurance; talent pool much smaller; no cognitive AI or BARS onboarding; no platform dashboards or SLAs.',
  },
];

const takeaways = [
    { title: 'Platform Unification', description: 'TeamStation AI bundles hiring, legal & payroll compliance, devices & MDM, secure workspaces and cyber/E&O insurance into a single contract with clear SLAs. Competitors typically provide one or two of these services but not all.' },
    { title: 'Cognitive AI & Fairness', description: 'Axiom Cortex™ uses 44 psychometric + NLP signals with a language-fairness calibration layer to evaluate candidates, producing BARS-mapped and expert-reviewed scores. None of the other vendors disclose cognitive-science methods or fairness audits.' },
    { title: 'Talent Coverage & Speed', description: 'Nebula Neural Search™ spans 2.6M+ LATAM profiles, delivering short-list relevance ≥ 85 % and Time-to-Offer ≈ 9 days. Most competitors manage significantly smaller pools or do not publish numbers.' },
    { title: 'Operational Guardrails', description: 'TeamStation’s SLAs include device procurement/activation within 5 days, MDM enrollment ≥ 99 %, workspace provisioning ≤ 3 days, and 90-day retention ≥ 96 %. Other vendors rarely publish such metrics.' },
    { title: 'Cost Transparency', description: 'Pricing tiers ($20/$30/$40/$50 per hour) include EOR, devices, compliance and insurance. Many competitors’ pricing is opaque or excludes critical services.' }
]

export default function ComparisonsPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Comparisons
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. Top Nearshore Vendors</h1>
        <p className="lead max-w-3xl mx-auto">
          TeamStation AI is not just another staff-augmentation vendor. It is the first fully integrated nearshore platform for hiring and running LATAM engineering teams, unifying every operational layer under a single, science-driven SLA.
        </p>
      </header>

      <div className="section">
         <div className="prose mx-auto">
            <h2 className="h2 text-center mt-0">Why TeamStation AI Stands Alone</h2>
            <p>The platform unifies every operational layer under one SLA, providing an end-to-end solution that traditional vendors cannot match. This includes:</p>
            <ul>
                <li><strong>Core Services:</strong> Employer-of-Record (EOR) payroll, compliance, and benefits management.</li>
                <li><strong>Infrastructure:</strong> Secure device provisioning with MDM, plus access to 45+ office hubs.</li>
                <li><strong>Governance:</strong> Day-one onboarding, performance diagnostics, and comprehensive cyber/E&O insurance.</li>
            </ul>
            <p>Key delivery metrics are public and transparent:</p>
            <ul>
                <li><strong>Speed:</strong> Time-to-Offer ≈ 9 days, device procurement ≤ 5 days, workspace access ≤ 3 days.</li>
                <li><strong>Reliability:</strong> MDM enrollment ≥ 99% within 24 hours.</li>
                <li><strong>Scale:</strong> A talent graph covering 2.6M+ LATAM IT profiles with bias-aware cognitive evaluations.</li>
            </ul>
            <p>
                <Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates for traits like problem-solving, architectural instinct, and learning orientation.">
                    Axiom Cortex™
                </Tooltip>
                —TeamStation’s cognitive AI—uses 44 psychometric + NLP signals and a language-fairness calibration layer to judge problem solving, architecture and collaboration. These signals are mapped to{' '}
                <Tooltip text="Behaviorally Anchored Rating Scales (BARS) are assessment tools that link specific behavioral examples to varying levels of performance to facilitate objective evaluation.">
                 BARS
                </Tooltip>
                {' '}(behaviorally anchored rating scales) and reviewed by experts, producing explainable evaluations. Combined with Nebula Neural Search™ (2.6M+ profiles) and BARS-anchored onboarding, TeamStation delivers pre-vetted engineers with 90-day retention ≥ 96%—while most vendors merely promise “top talent.”
            </p>
         </div>
      </div>
      
      <div className="my-12">
        <h2 className="h2 text-center">Comparative Table</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Their Model & Claims</th>
                <th>What They Lack vs. TeamStation AI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-900/20">
                <td className="font-bold">TeamStation AI (Reference)</td>
                <td>
                    Integrated Nearshore IT Co-Pilot: EOR, payroll, compliance, secure devices & MDM, offices & workspaces, cyber/E&O insurance, day-one onboarding, performance diagnostics—all under one contract. Cognitive AI evaluations (44 signals), bias-aware interviews, 2.6M+ talent graph and time-to-offer ≈ 9 days. Device MTPD ≤ 5 days; MDM ≥ 99%.
                </td>
                <td className="text-center">—</td>
              </tr>
              {vendors.map((vendor) => (
                <tr key={vendor.name}>
                  <td className="font-bold">
                    <Link href={`/comparisons/${vendor.slug}`}>{vendor.name}</Link>
                  </td>
                  <td>{vendor.claim}</td>
                  <td>{vendor.lacks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

       <div className="my-12">
        <h2 className="h2 text-center">Key Takeaways</h2>
         <div className="grid grid-2 mt-6 gap-6">
            {takeaways.map(item => (
                <div key={item.title} className="card">
                    <h3 className="h3 mt-0">{item.title}</h3>
                    <p className="text-sm m-0 text-slate-400">{item.description}</p>
                </div>
            ))}
         </div>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem'}}>
          TeamStation AI occupies a different galaxy in the nearshore landscape. By unifying recruitment, cognitive AI evaluation, device and workspace provisioning, payroll/EOR, compliance and insurance under one SLA, TeamStation replaces multi-vendor complexity with a single accountable platform. Its bias-aware Axiom Cortex™ ensures fair, evidence-based hiring; Nebula’s 2.6M+ talent graph guarantees reach; and transparent delivery metrics (TTO ≈ 9 days, MTPD ≤ 5 days, MDM ≥ 99 %) set a standard none of the competition currently publishes. Traditional vendors may excel at one or two aspects—staffing, project delivery or EOR—but only TeamStation AI offers a scientifically grounded, end-to-end nearshore operating system.
        </p>
         <div className="mt-6">
            <a href="/hire" className="cta">Book a Strategy Call</a>
        </div>
      </div>

    </main>
  );
}
