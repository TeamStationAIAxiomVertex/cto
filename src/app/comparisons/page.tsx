import Link from 'next/link';
import Tooltip from '@/components/Tooltip';
import { Layers, Gauge, Network, BrainCircuit, ShieldCheck, FileText, Scale, Package, Landmark } from 'lucide-react';

const vendors = [
  {
    name: 'BairesDev',
    slug: 'bairesdev',
    claim: 'Traditional nearshore dev shop & staff-aug vendor; markets “top 1 %” engineers from 1.5M applicants and 4,000+ timezone-aligned developers.',
    lacks: 'No integrated platform (devices, offices, insurance) or day-one onboarding; does not publish device/MDM logistics; no cognitive-science vetting or bias-mitigation layer.',
    url: 'bairesdev.com'
  },
  {
    name: 'Globant',
    slug: 'globant',
    claim: 'Global SI offering AI-infused CODA agents for software development and transformation.',
    lacks: 'Provides project delivery, not a staffing platform; lacks integrated EOR, devices, insurance and cognitive evaluations; doesn’t focus on nearshore squads or 2.6M-profile talent networks.',
    url: 'now.globant.com'
  },
  {
    name: 'TECLA',
    slug: 'tecla',
    claim: 'LATAM talent marketplace across 18+ countries; emphasises fast matching and cultural fit.',
    lacks: 'No combined EOR, device provisioning or workspace management; vetting process not grounded in cognitive science or fairness; no public SLAs on time-to-offer or MDM.',
    url: 'tecla.io'
  },
  {
    name: 'Revelo',
    slug: 'revelo',
    claim: 'Marketplace + EOR; claims 30–50 % cost savings, 400K engineers and 14-day hiring.',
    lacks: 'Handles payroll/benefits but not devices, workspaces, or insurance; vetting lacks cognitive AI; smaller talent graph (0.4 M vs 2.6 M) and no published onboarding metrics.',
    url: 'revelo.com'
  },
  {
    name: 'Terminal',
    slug: 'terminal',
    claim: 'Builds nearshore teams via hubs in MX/CO/CR/CL; markets cost savings and 40 % faster hiring.',
    lacks: 'No integrated devices, MDM or offices; no cyber/E&O insurance; no cognitive AI evaluation; unknown network size and ramp metrics.',
    url: 'terminal.io'
  },
  {
    name: 'Deel',
    slug: 'deel',
    claim: 'Global EOR/HRIS priced at $599 per employee per month.',
    lacks: 'Payroll & compliance only—not a talent-delivery or evaluation platform; clients must source and assess engineers; no devices, offices or insurance.',
    url: 'deel.com'
  },
  {
    name: 'Toptal',
    slug: 'toptal',
    claim: 'Premium freelance network; markets top 3 % talent and high hourly rates.',
    lacks: 'Focus on freelancers, not teams; no integrated EOR, devices, compliance or offices; no cognitive science; costs $60–150/h plus subscription.',
    url: 'toptal.com'
  },
  {
    name: 'Andela',
    slug: 'andela',
    claim: 'AI-powered talent cloud with 150K technologists; reduces time-to-hire by 66 %.',
    lacks: 'Global scope; lacks integrated devices, EOR, insurance or offices; vetting not cognitive-science based; smaller network; no published device or MDM SLAs.',
    url: 'andela.com'
  },
  {
    name: 'Nearsure',
    slug: 'nearsure',
    claim: 'Nearshore staff-aug; success story: filled 24 roles in 29 days and built an AI recruiter reducing hiring time by 30 %.',
    lacks: 'Traditional staff-aug; no mention of devices, MDM, compliance or insurance; vetting does not include cognitive AI; no 2.6M-profile network.',
    url: 'nearsure.com'
  },
  {
    name: 'ParallelStaff',
    slug: 'parallelstaff',
    claim: 'Nearshore staffing with risk-free guarantee; promises a shortlist in 5 days and cost savings of 30–50 %; TaaS framework offers security & onboarding and a project success office.',
    lacks: 'Good guarantees but lacks integrated platform (no EOR, devices, offices or cyber insurance); no cognitive-science evaluation; network size unknown; time-to-offer metrics not published.',
    url: 'parallelstaff.com'
  },
  {
    name: 'Unosquare',
    slug: 'unosquare',
    claim: 'Staff-augmentation and custom-software provider with 1,000+ professionals across multiple countries.',
    lacks: 'Services focused on development and consulting; no integrated EOR/devices/insurance; talent pool much smaller; no cognitive AI or BARS onboarding; no platform dashboards or SLAs.',
    url: 'n-ix.com'
  },
];

const takeaways = [
    { 
        icon: <Package className="icon" />,
        title: 'The All-in-One Platform', 
        description: 'One contract bundles everything: AI-powered hiring, EOR/payroll, compliance, secure devices (MDM), a network of offices, and comprehensive cyber/E&O insurance. It replaces the complexity and risk of managing multiple vendors.',
        link: { href: '/trust', text: 'Explore our MSA' } 
    },
    { 
        icon: <BrainCircuit className="icon" />,
        title: 'Cognitive AI & Fairness', 
        description: 'Our Axiom Cortex™ engine analyzes 44+ psychometric and NLP signals to evaluate talent. A language-fairness layer mitigates bias against non-native English speakers, ensuring we assess pure engineering capability.',
        link: { href: '/research/axiom-cortex-scientific-report', text: 'Read the science' } 
    },
    { 
        icon: <Network className="icon" />,
        title: 'Unmatched Talent Scale & Speed', 
        description: 'Our Nebula Neural Search™ maps over 2.6M LATAM profiles. This unmatched scale allows us to deliver a curated shortlist in days and achieve an average Time-to-Offer of just 9 days.',
        link: { href: '/process', text: 'See our process' }
    },
    { 
        icon: <Gauge className="icon" />,
        title: 'Published Operational SLAs', 
        description: 'We operate with radical transparency. Our SLAs are public: device procurement in ≤5 days, MDM enrollment ≥99%, workspace provisioning in ≤3 days, and a 90-day retention rate of ≥96%.',
        link: { href: '/pricing', text: 'View our public SLAs' } 
    },
];

export default function ComparisonsPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Comparisons
      </div>
      <header className="text-center my-8">
        <h1 className="h1">TeamStation AI vs. The Competition</h1>
        <p className="lead max-w-3xl mx-auto">
          We're not another staff-aug vendor. We are the first fully integrated nearshore platform for hiring and running LATAM engineering teams, unifying every operational layer under a single, science-driven SLA.
        </p>
      </header>

      <div className="my-12">
        <h2 className="h2 text-center">Why TeamStation AI Stands Alone</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {takeaways.map(item => (
                <div key={item.title} className="icon-card items-start !flex-col">
                    {item.icon}
                    <div>
                        <h3 className="h3 mt-4 text-base">{item.title}</h3>
                        <p className="text-sm m-0 text-mute">{item.description}</p>
                        <Link href={item.link.href} className="text-sm font-semibold mt-2 inline-block text-accent-custom hover:text-accent-d-custom">
                            {item.link.text} →
                        </Link>
                    </div>
                </div>
            ))}
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
                    The platform unifies hiring, employer-of-record (EOR)/payroll, compliance and benefits, device provisioning and MDM, offices & workspaces across 45+ hubs, cybersecurity and errors-and-omissions insurance, day-one onboarding and performance diagnostics under one SLA. Key delivery metrics are public: Time-to-Offer ≈ 9 days, device MTPD ≤ 5 days, MDM enrollment ≥ 99% in 24h; the talent graph covers 2.6M+ LATAM IT profiles with bias-aware cognitive evaluations; offices and on-demand workspaces are provisioned in ≤ 3 business days; and every engagement includes cybersecurity & E&O insurance.
                </td>
                <td className="text-center">—</td>
              </tr>
              {vendors.map((vendor) => (
                <tr key={vendor.name}>
                  <td className="font-bold">
                    <Link href={`/comparisons/${vendor.slug}`}>{vendor.name}</Link>
                  </td>
                  <td>{vendor.claim} (<a href={`https://${vendor.url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-custom hover:text-accent-d-custom">{vendor.url}</a>)</td>
                  <td>{vendor.lacks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Conclusion</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
          TeamStation AI occupies a different galaxy in the nearshore landscape. By unifying recruitment, cognitive AI evaluation, device and workspace provisioning, payroll/EOR, compliance and insurance under one SLA, TeamStation replaces multi-vendor complexity with a single accountable platform. Its bias-aware Axiom Cortex™ ensures fair, evidence-based hiring; Nebula’s 2.6M+ talent graph guarantees reach; and transparent delivery metrics (TTO ≈ 9 days, MTPD ≤ 5 days, MDM ≥ 99 %) set a standard none of the competition currently publishes. Traditional vendors may excel at one or two aspects—staffing, project delivery or EOR—but only TeamStation AI offers a scientifically grounded, end-to-end nearshore operating system.
        </p>
         <div className="mt-6">
            <a href="/hire" className="cta">Book a Strategy Call</a>
        </div>
      </div>

    </main>
  );
}
