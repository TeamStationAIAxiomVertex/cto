import Link from "next/link";
import { Tooltip } from "./Tooltip";

export function Footer() {
  const year = new Date().getFullYear();

  const links = {
      "Playbook": [
        { href: '/case-studies/atticus', label: 'Case Studies' },
        { href: '/#contact', label: 'Contact' },
      ],
      "Services": [
        { href: '#', label: <Tooltip text="Cognitive AI Validation">AI Vetting</Tooltip> },
        { href: '#', label: <Tooltip text="Employer of Record">EOR & Payroll</Tooltip> },
        { href: '#', label: <Tooltip text="Secure Device & Mobile Device Management">Secure Onboarding</Tooltip> },
      ],
      "Company": [
        { href: '#', label: 'About Us' },
        { href: '#', label: 'Research' },
        { href: '#', label: 'Trust Center' },
      ]
  }

  return (
    <footer className="mt-24 border-t border-border py-16 text-muted-foreground">
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
