import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  const playbookLinks = [
    { href: '/playbook/nearshore-vs-offshore', label: 'Nearshore vs. Offshore' },
    { href: '/playbook/latam-economics', label: 'LATAM Economics' },
    { href: '/playbook/bias-free-technical-hiring-axiom-cortex', label: 'Bias-Free Hiring' },
    { href: '/playbook/security-compliance', label: 'Security & Compliance' },
  ];

  const servicesLinks = [
    { href: '/process', label: 'Our Process' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/nearshore-integrated-services', label: 'Integrated Services' },
    { href: '/technical-interview-evaluation', label: 'Talent Evaluations' },
  ];

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/research', label: 'Research' },
    { href: '/trust', label: 'Trust Center' },
    { href: '/case-studies', label: 'Case Studies' },
  ];
  
  const comparisonsLinks = [
    { href: '/comparisons/toptal', label: 'vs. Toptal' },
    { href: '/comparisons/andela', label: 'vs. Andela' },
    { href: '/comparisons/globant', label: 'vs. Globant' },
    { href: '/comparisons/bairesdev', label: 'vs. BairesDev' },
  ];

  return (
    <footer className="border-t border-line py-16 text-mute text-sm">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-text text-base mb-2">TeamStation AI</h3>
            <p>The integrated platform for building and scaling elite nearshore engineering teams.</p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4">Playbook</h4>
            <ul className="space-y-2">
              {playbookLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-text transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-text mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-text transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-text mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-text transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-text mb-4">Comparisons</h4>
            <ul className="space-y-2">
              {comparisonsLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-text transition-colors">{link.label}</Link></li>
              ))}
               <li><Link href="/comparisons" className="font-semibold text-accent-custom hover:text-accent-d-custom">See All →</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-line text-center">
            <p>© {year} TeamStation AI — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
