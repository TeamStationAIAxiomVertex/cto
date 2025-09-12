import Link from 'next/link';
import { Package, BrainCircuit, CheckCircle, XCircle } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const vendors = [
  { 
    name: 'TeamStation AI', 
    slug: null,
    basePricing: '$20–50/hr inclusive', 
    additionalCosts: 'None – all services bundled',
    risk: 'Low: Cognitive AI, integrated EOR, secure devices & MDM.',
    riskLevel: 'low'
  },
  { 
    name: 'Terminal', 
    slug: 'terminal',
    basePricing: 'Not disclosed (claims 40% savings)',
    additionalCosts: 'EOR, devices, MDM, insurance, workspaces',
    risk: 'High: No cognitive vetting; compliance & security gaps.',
    riskLevel: 'high'
  },
  { 
    name: 'BairesDev', 
    slug: 'bairesdev',
    basePricing: '$35-60/hr (est.)',
    additionalCosts: 'EOR, devices, MDM, insurance, offices',
    risk: 'High: Vetting on experience, not cognitive science; client handles compliance.',
    riskLevel: 'high'
  },
  { 
    name: 'Globant', 
    slug: 'globant',
    basePricing: 'Project-based fees',
    additionalCosts: 'Not a staff-aug model',
    risk: 'High: Mis-alignment for staff-aug needs.',
    riskLevel: 'high'
  },
  { 
    name: 'TECLA', 
    slug: 'tecla',
    basePricing: 'Per placement',
    additionalCosts: 'EOR, devices, insurance, offices',
    risk: 'Moderate: Network vetting but no cognitive science.',
    riskLevel: 'moderate'
  },
  { 
    name: 'Revelo', 
    slug: 'revelo',
    basePricing: '30-50% less than US',
    additionalCosts: 'Devices, insurance, offices',
    risk: 'Moderate: No cognitive eval; slower ramp; hidden costs.',
    riskLevel: 'moderate'
  },
  { 
    name: 'Andela', 
    slug: 'andela',
    basePricing: 'Not public (claims 30-50% savings)',
    additionalCosts: 'EOR, devices, insurance, offices',
    risk: 'Moderate: No integrated hardware or compliance.',
    riskLevel: 'moderate'
  },
  { 
    name: 'Toptal', 
    slug: 'toptal',
    basePricing: '$60-150+/hr + subscription',
    additionalCosts: 'EOR, devices, insurance, offices',
    risk: 'High: Expensive; freelance model; no integrated compliance.',
    riskLevel: 'high'
  },
  { 
    name: 'Deel', 
    slug: 'deel',
    basePricing: '$599/mo EOR fee',
    additionalCosts: 'Talent sourcing, devices, MDM, insurance',
    risk: 'High: EOR only; must be combined with other vendors.',
    riskLevel: 'high'
  },
   { 
    name: 'Nearsure', 
    slug: 'nearsure',
    basePricing: 'Not public',
    additionalCosts: 'EOR, devices, insurance, offices',
    risk: 'Moderate: No cognitive vetting; hidden costs.',
    riskLevel: 'moderate'
  },
  { 
    name: 'ParallelStaff', 
    slug: 'parallelstaff',
    basePricing: 'Not public',
    additionalCosts: 'EOR, devices, insurance, offices',
    risk: 'Moderate: "Try-before-buy" mitigates some risk, but no cognitive AI.',
    riskLevel: 'moderate'
  },
  { 
    name: 'Unosquare', 
    slug: 'unosquare',
    basePricing: '$30-60/hr (est.)',
    additionalCosts: 'EOR, devices, insurance, offices',
    risk: 'High: No cognitive vetting; compliance not included.',
    riskLevel: 'high'
  },
];

const takeaways = [
    { 
        icon: <Package className="icon" />,
        title: 'The All-in-One Platform', 
        description: 'One contract bundles everything: AI-powered hiring, EOR/payroll, compliance, secure devices (MDM), a network of offices, and comprehensive cyber/E&O insurance.',
    },
    { 
        icon: <BrainCircuit className="icon" />,
        title: 'Cognitive AI & Fairness', 
        description: 'Our Axiom Cortex™ engine analyzes 44+ psychometric and NLP signals to evaluate talent, with a language-fairness layer to mitigate bias.',
    },
];

export default function ComparisonsPage() {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-accent-custom';
      case 'moderate': return 'text-yellow-500';
      case 'high': return 'text-warn-custom';
      default: return 'text-mute';
    }
  }
  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / Comparisons
      </div>
      <header className="text-center mb-12">
        <h1 className="h1">TeamStation AI vs. The Competition</h1>
        <p className="lead max-w-4xl mx-auto">
          A comparative analysis of features, cost, and risk. We synthesize vendor claims, pricing, and public data to compare TeamStation AI with prominent competitors, showing how our model delivers lower TCO and reduced operational risk.
        </p>
      </header>

       <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Key Findings</h2>
         <p>
            TeamStation AI bundles hiring, compliance, devices, MDM, workspace, insurance and performance under one contract. Competitors require clients to assemble multiple vendors. Our transparent <Link href="/pricing">pricing</Link> includes all services, while competitor rates exclude critical services, leading to a higher Total Cost of Ownership (TCO). Our <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ engine</Link> reduces mis-hire risk, and our integrated model eliminates compliance gaps and security vulnerabilities.
        </p>
      </div>

      <div className="my-16">
        <h2 className="h2 text-center">Cost & Risk Summary Table</h2>
        <p className="lead max-w-3xl mx-auto text-center" style={{fontSize: '1rem', marginBottom: '24px'}}>
          Aggregating base pricing, hidden costs, and risk factors for each vendor. Note that competitor TCO often exceeds TeamStation’s all-in pricing once hidden costs are factored in.
        </p>
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Base Pricing</th>
                <th>Additional Costs / Hidden Fees</th>
                <th>Key Risk Factors</th>
                <th>Analysis</th>
              </tr>
            </thead>
            <tbody>
              {vendors.sort((a,b) => a.name === 'TeamStation AI' ? -1 : b.name === 'TeamStation AI' ? 1 : 0).map((vendor) => (
                <tr key={vendor.name} className={vendor.name === 'TeamStation AI' ? 'bg-surface-2' : ''}>
                  <td className="font-bold">
                    {vendor.slug ? (
                      <Link href={`/comparisons/${vendor.slug}`} className="hover:text-accent-custom">{vendor.name}</Link>
                    ) : (
                      <span className='text-accent-custom'>{vendor.name}</span>
                    )}
                  </td>
                  <td>{vendor.basePricing}</td>
                  <td className={vendor.additionalCosts !== 'None – all services bundled' ? 'text-warn-custom' : ''}>{vendor.additionalCosts}</td>
                  <td className={getRiskColor(vendor.riskLevel)}>{vendor.risk}</td>
                  <td>
                    {vendor.slug ? (
                       <Link href={`/comparisons/${vendor.slug}`} className="font-semibold text-accent-custom hover:text-accent-d-custom">
                        Read Analysis →
                      </Link>
                    ) : (
                      <span className='font-semibold'>Integrated Platform</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-mute mt-2 text-center">Note: Additional costs are market-rate estimates for EOR, device leasing, MDM, insurance, and workspace access.</p>
        </div>
      </div>
       <div className="section text-center">
        <h2 className="h2 mt-0">Strategic Recommendation</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            For technology leaders seeking to scale nearshore talent with quality, predictable cost, and mitigated risk, TeamStation AI is the clear choice. While competitors offer point solutions, our integrated platform provides the only end-to-end, science-backed solution on the market.
        </p>
        <Link href="/hire" className="cta">Book a Strategy Call</Link>
      </div>
    </div>
  );
}
