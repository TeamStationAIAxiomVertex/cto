
import Link from "next/link";
import { Tooltip } from "./Tooltip";

export function Footer() {
  const year = new Date().getFullYear();

  const links = {
      "Playbook": [
        { href: '/playbook/nearshore-vs-offshore', label: 'Nearshore vs. Offshore' },
        { href: '/playbook/latam-economics', label: 'LATAM Economics' },
        { href: '/playbook/build-vs-buy', label: 'Build vs. Buy' },
        { href: '/playbook/security-compliance', label: 'Security & Compliance' },
      ],
      "Services": [
        { href: '/process', label: 'Our Process' },
        { href: '/technical-interview-evaluation', label: 'Talent Evaluations' },
        { href: '/nearshore-integrated-services', label: 'Integrated Services' },
      ],
      "Company": [
        { href: '/about', label: 'About Us' },
        { href: '/research', label: 'Research' },
        { href: '/trust', label: 'Trust Center' },
        { href: '/hire', label: 'Contact' },
      ]
  }

  return (
    <footer className="mt-32 border-t border-border py-16 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-foreground">TeamStation AI</h3>
            <p className="mt-2 text-sm">The integrated platform for building and scaling elite nearshore engineering teams.</p>
          </div>
          {Object.entries(links).map(([title, linkItems]) => (
             <div key={title}>
                <h4 className="font-semibold text-foreground">{title}</h4>
                <ul className="mt-4 space-y-3">
                    {linkItems.map((link, i) => (
                        <li key={i} className="text-sm">
                            <Link href={link.href} className="transition-colors hover:text-foreground">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
            <p>© {year} TeamStation AI — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
