
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nearshore Vendor Comparison | TeamStation AI vs. Competitors',
  description: 'An objective analysis of nearshore IT staff augmentation vendors. Compare TeamStation AI with BairesDev, Globant, Toptal, and more on TCO, risk, and services.',
};

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

export default function ComparisonsPage() {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'moderate': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  }
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Comparisons</span>
      </div>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Promises, or Proof?</h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
          Every vendor sells promises with expensive marketing ploys and shiny websites. That era is over. Science and proven brilliant minds change the world. Here, we move beyond marketing claims to provide a data-driven analysis of Total Cost of Ownership (TCO), operational risk, and true value.
        </p>
      </header>

       <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl text-center">
        <h2>Key Findings</h2>
         <p>
            TeamStation AI bundles hiring, compliance, devices, MDM, workspace, insurance and performance under one contract. Competitors require clients to assemble multiple vendors. Our transparent <Link href="/pricing">pricing</Link> includes all services, while competitor rates exclude critical services, leading to a higher Total Cost of Ownership (TCO). Our <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ engine</Link> reduces mis-hire risk, and our integrated model eliminates compliance gaps and security vulnerabilities.
        </p>
      </div>

      <div className="my-16">
        <h2 className="text-3xl font-bold text-center text-foreground">Cost & Risk Summary Table</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          Aggregating base pricing, hidden costs, and risk factors for each vendor. Note that competitor TCO often exceeds TeamStation’s all-in pricing once hidden costs are factored in.
        </p>
        <div className="overflow-x-auto mt-8">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">Vendor</th>
                <th className="px-4 py-3 font-semibold text-foreground">Base Pricing</th>
                <th className="px-4 py-3 font-semibold text-foreground">Additional Costs / Hidden Fees</th>
                <th className="px-4 py-3 font-semibold text-foreground">Key Risk Factors</th>
                <th className="px-4 py-3 font-semibold text-foreground text-right">Analysis</th>
              </tr>
            </thead>
            <tbody>
              {vendors.sort((a,b) => a.name === 'TeamStation AI' ? -1 : b.name === 'TeamStation AI' ? 1 : 0).map((vendor) => (
                <tr key={vendor.name} className={`border-b border-border/50 ${vendor.name === 'TeamStation AI' ? 'bg-primary/5' : ''}`}>
                  <td className="px-4 py-4 font-bold text-foreground">
                    {vendor.slug ? (
                      <Link href={`/comparisons/${vendor.slug}`} className="hover:text-primary">{vendor.name}</Link>
                    ) : (
                      <span className='text-primary'>{vendor.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">{vendor.basePricing}</td>
                  <td className={`px-4 py-4 ${vendor.additionalCosts !== 'None – all services bundled' ? 'text-yellow-400' : 'text-muted-foreground'}`}>{vendor.additionalCosts}</td>
                  <td className={`px-4 py-4 ${getRiskColor(vendor.riskLevel)}`}>{vendor.risk}</td>
                  <td className="px-4 py-4 text-right">
                    {vendor.slug ? (
                       <Link href={`/comparisons/${vendor.slug}`} className="font-semibold text-primary hover:underline flex items-center justify-end">
                        See Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    ) : (
                      <span className='font-semibold text-foreground'>Integrated Platform</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-4 text-center">Note: Additional costs are market-rate estimates for <Tooltip text="Employer of Record: A third-party organization that legally employs workers on behalf of another company.">EOR</Tooltip>, device leasing, <Tooltip text="Mobile Device Management: Software that allows IT to manage, secure, and enforce policies on devices.">MDM</Tooltip>, insurance, and workspace access.</p>
        </div>
      </div>
      <div className="my-16">
        <h2 className="text-4xl font-bold text-center">The TCO Knockout: U.S. Hire vs. TeamStation AI</h2>
         <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">This is the slide to show your finance team. It's a simple, powerful comparison of the true first-year cost.</p>
        <div className="overflow-x-auto mt-8">
          <table className="w-full max-w-4xl mx-auto text-sm text-left">
            <thead className="border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">Cost Area</th>
                <th className="px-4 py-3 font-semibold text-foreground text-center">Typical U.S. Onboarding</th>
                <th className="px-4 py-3 font-semibold text-primary text-center">TeamStation AI (Included)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Recruitment</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$5,000–$8,000</td>
                  <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Hardware & Software Setup</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$3,000–$5,000</td>
                  <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Training & Onboarding</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$2,000–$5,000</td>
                   <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-medium text-foreground">Compliance & Payroll Setup</td>
                  <td className="px-4 py-3 text-muted-foreground text-center">$1,000–$2,000</td>
                   <td className="px-4 py-3 font-semibold text-green-400 text-center">Included</td>
              </tr>
               <tr className="border-b border-border/50 bg-card">
                  <td className="px-4 py-3 font-bold text-foreground">Total Onboarding Cost</td>
                  <td className="px-4 py-3 font-bold text-red-400 text-center">$11,000–$20,000</td>
                   <td className="px-4 py-3 font-bold text-green-400 text-center">$0</td>
              </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3 font-bold text-foreground">Est. Annual Salary (Senior)</td>
                  <td className="px-4 py-3 font-bold text-red-400 text-center">~$180,000</td>
                   <td className="px-4 py-3 font-bold text-green-400 text-center">~$83,040</td>
              </tr>
              <tr className="bg-primary/10">
                  <td className="px-4 py-4 font-extrabold text-foreground text-lg">First-Year TCO</td>
                  <td className="px-4 py-4 font-extrabold text-red-400 text-center text-lg">~$191,000+</td>
                   <td className="px-4 py-4 font-extrabold text-green-400 text-center text-lg">~$83,040</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       <div className="text-center rounded-lg bg-primary/10 p-8 mt-16">
        <h2 className="text-2xl font-bold">Strategic Recommendation</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            For technology leaders seeking to scale nearshore talent with quality, predictable cost, and mitigated risk, TeamStation AI is the clear choice. While competitors offer point solutions, our integrated platform provides the only end-to-end, science-backed solution on the market.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
