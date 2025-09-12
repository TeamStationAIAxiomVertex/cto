import Link from 'next/link';
import { Package, BrainCircuit, Network, Gauge } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const vendors = [
  { name: 'BairesDev', slug: 'bairesdev', claim: 'Markets "top 1%" engineers.' },
  { name: 'Globant', slug: 'globant', claim: 'Global SI for large-scale projects.' },
  { name: 'Andela', slug: 'andela', claim: 'Global talent cloud.' },
  { name: 'Toptal', slug: 'toptal', claim: 'Premium freelance network.' },
  { name: 'Terminal', slug: 'terminal', claim: 'Remote team building.' },
  { name: 'Deel', slug: 'deel', claim: 'Global HR & Payroll Platform.' },
  { name: 'Nearsure', slug: 'nearsure', claim: 'Traditional Staff Augmentation.' },
  { name: 'ParallelStaff', slug: 'parallelstaff', claim: 'Talent-as-a-Service (TaaS).' },
  { name: 'Unosquare', slug: 'unosquare', claim: 'Staff Augmentation & Consulting.' },
];

const takeaways = [
    { 
        icon: <Package className="icon" />,
        title: 'The All-in-One Platform', 
        description: 'One contract bundles everything: AI-powered hiring, EOR/payroll, compliance, secure devices (MDM), a network of offices, and comprehensive cyber/E&O insurance.',
        link: { href: '/trust', text: 'Explore our MSA' } 
    },
    { 
        icon: <BrainCircuit className="icon" />,
        title: 'Cognitive AI & Fairness', 
        description: 'Our Axiom Cortex™ engine analyzes 44+ psychometric and NLP signals to evaluate talent, with a language-fairness layer to mitigate bias.',
        link: { href: '/research/axiom-cortex-scientific-report', text: 'Read the science' } 
    },
];

export default function ComparisonsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="h1">TeamStation AI vs. The Competition</h1>
        <p className="lead max-w-3xl mx-auto">
          We're not another staff-aug vendor. We are the first fully integrated nearshore platform for hiring and running LATAM engineering teams.
        </p>
      </header>

      <div className="my-12">
        <h2 className="h2 text-center">Why We Are Different</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {takeaways.map(item => (
                <div key={item.title} className="card flex flex-col p-6">
                    <div className="flex items-center gap-4">
                        {item.icon}
                        <h3 className="h3 m-0 text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm m-0 text-mute mt-4 flex-grow">{item.description}</p>
                    <Link href={item.link.href} className="text-sm font-semibold mt-4 inline-block text-accent-custom hover:text-accent-d-custom">
                        {item.link.text} →
                    </Link>
                </div>
            ))}
         </div>
      </div>

      <div className="my-12">
        <h2 className="h2 text-center">Comparative Table</h2>
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Claim</th>
                <th>TeamStation AI Advantage</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.name}>
                  <td className="font-bold">
                    <Link href={`/comparisons/${vendor.slug}`} className="hover:text-accent-custom">{vendor.name}</Link>
                  </td>
                  <td>{vendor.claim}</td>
                  <td>
                    <Link href={`/comparisons/${vendor.slug}`} className="font-semibold text-accent-custom hover:text-accent-d-custom">
                        Read Analysis →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
