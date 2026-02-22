import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

function FooterLink({ href, label, external }: NavLink) {
  const baseClasses =
    "inline-flex rounded-sm text-sm text-foreground transition-ui hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {label}
    </Link>
  );
}

const decisionLinks: NavLink[] = [
  { href: "/comparisons", label: "Compare vendors and models" },
  { href: "/pricing", label: "Pricing and engagement" },
  { href: "/case-studies", label: "Case studies and outcomes" },
  { href: "/hire", label: "Hire execution paths" },
];

const playbookResearchLinks: NavLink[] = [
  { href: "/playbook/hub", label: "CTO Playbook Hub" },
  { href: "/playbook/nearshore-vs-offshore", label: "Nearshore vs Offshore" },
  { href: "/playbook/tco-model", label: "TCO Model" },
  { href: "/playbook/latam-economics", label: "LATAM Economics" },
  { href: "/research/hub", label: "Research Hub" },
];

const hireLinks: NavLink[] = [
  { href: "/hire", label: "Hire Overview" },
  { href: "/hire/by-role", label: "Hire by Role" },
  { href: "/hire/by-technology", label: "Hire by Technology" },
  { href: "/hire/by-country", label: "Hire by Country" },
  { href: "/technical-interview-evaluation", label: "Technical Evaluation" },
];

const trustLegalLinks: NavLink[] = [
  { href: "/faq", label: "FAQ" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/sitemap", label: "HTML Sitemap" },
  { href: "/sitemap.xml", label: "XML Sitemap" },
];

const companyLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "https://jobs.teamstation.dev", label: "Careers", external: true },
  { href: "https://partner.teamstation.dev", label: "Partners", external: true },
  { href: "/platform", label: "Platform Overview" },
];

const externalHubs: NavLink[] = [
  { href: "https://teamstation.dev", label: "Corporate", external: true },
  { href: "https://app.teamstation.dev", label: "Application", external: true },
  { href: "https://hire.teamstation.dev", label: "Hiring Services", external: true },
  { href: "https://cto.teamstation.dev", label: "CTO Hub", external: true },
  { href: "https://cio.teamstation.dev", label: "CIO Hub", external: true },
  { href: "https://docs.teamstation.dev", label: "Documentation", external: true },
  { href: "https://research.teamstation.dev", label: "Research", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-20 border-t border-border/80">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="surface-card mb-8 p-5 md:p-6" aria-labelledby="footer-proof-cta">
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
            <div>
              <h3 id="footer-proof-cta" className="text-lg font-bold text-foreground">
                If hiring, delivery, and governance are split, speed collapses.
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                TeamStation AI is a distributed engineering operating system. We help executive teams diagnose delivery risk,
                confirm operating fit, and move to an execution plan without guesswork.
              </p>

              <div className="mt-4 rounded-lg border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Up front contract (how the call works)
                </p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Pain:</span> What is breaking speed right now (hiring, throughput, governance)
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Decision:</span> Who owns the decision and what is the deadline
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Constraints:</span> Budget model, security posture, and required overlap
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Outcome:</span> You leave with a fit or no fit answer and a next step plan
                  </li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Governance-ready delivery",
                  "Axiom Cortex evaluation",
                  "Operating model and TCO clarity",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                If we are not a fit, we will tell you fast and point you to a safer path.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:justify-start">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                className="cta-button a11y-tap-target"
              >
                Book discovery session
              </a>

              <div className="rounded-lg border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  Good fit if you need
                </p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-muted-foreground">
                  <li>Clear role definitions tied to execution</li>
                  <li>Hiring signal you can trust without resume noise</li>
                  <li>Delivery control with governance readiness</li>
                </ul>
              </div>

              <Link
                href="/playbook/tco-model"
                className="a11y-tap-target inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View TCO model
              </Link>
              <Link
                href="/comparisons"
                className="a11y-tap-target inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Compare vendors and models
              </Link>
            </div>
          </div>
        </section>

        <section className="surface-card p-6 md:p-8" aria-labelledby="footer-nav-heading">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
            <div>
              <h3 id="footer-nav-heading" className="text-lg font-bold text-foreground">
                TeamStation AI
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Distributed engineering operating model for US executive teams who need stronger delivery control,
                governance readiness, and measurable hiring signal quality.
              </p>
              <div className="mt-4 rounded-lg border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Trust surface</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Integrated operations, accountable SLA ownership, cognitive technical evaluation, and executive level
                  decision support across hiring and delivery.
                </p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Designed for regulated, security-sensitive, and compliance-driven environments.
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                US and LATAM operations with accountable delivery governance and executive support.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Need deep links? Use the <Link href="/sitemap" className="text-primary hover:underline">HTML sitemap</Link>.
              </p>
            </div>

            <nav aria-labelledby="footer-decision-paths">
              <h4 id="footer-decision-paths" className="text-sm font-bold uppercase tracking-wide text-foreground">
                Decide
              </h4>
              <ul className="mt-4 space-y-2.5">
                {decisionLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-playbook-research">
              <h4 id="footer-playbook-research" className="text-sm font-bold uppercase tracking-wide text-foreground">
                Playbook and Research
              </h4>
              <ul className="mt-4 space-y-2.5">
                {playbookResearchLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-hire">
              <h4 id="footer-hire" className="text-sm font-bold uppercase tracking-wide text-foreground">
                Hire
              </h4>
              <ul className="mt-4 space-y-2.5">
                {hireLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-8">
              <nav aria-labelledby="footer-trust-legal">
                <h4 id="footer-trust-legal" className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Trust and Legal
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {trustLegalLinks.map((link) => (
                    <li key={link.href}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-labelledby="footer-company">
                <h4 id="footer-company" className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Company
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-start">
              <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">
                Platform Ecosystem
              </h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {externalHubs.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="pt-6 text-center text-sm text-muted-foreground">
          © {year} TeamStation AI
        </div>
      </div>
    </footer>
  );
}
