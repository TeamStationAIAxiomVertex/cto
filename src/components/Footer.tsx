import Link from "next/link";
import type { ReactNode } from "react";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

function FooterLink({ href, label, external }: NavLink) {
  const baseClasses =
    "inline-flex rounded-sm text-sm leading-5 text-foreground/90 transition-ui hover:text-primary hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

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

function FooterGroup({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="self-start">
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/90">{title}</h4>
      {description ? (
        <p className="mt-1 text-xs leading-4 text-muted-foreground">{description}</p>
      ) : null}
      <div className="mt-2.5">{children}</div>
    </section>
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
    <footer role="contentinfo" className="mt-14 border-t border-border/80 bg-background/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section
          className="surface-card glass-panel relative mb-4 overflow-hidden border border-border/70 p-4 md:p-5"
          aria-labelledby="footer-proof-cta"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_50%)]" />
          <div className="relative grid gap-4 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
            <div>
              <h3 id="footer-proof-cta" className="text-lg font-bold text-foreground">
                If hiring, delivery, and governance are split, speed collapses.
              </h3>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
                TeamStation AI is a distributed engineering operating system. We help executive teams diagnose delivery risk,
                confirm operating fit, and move to an execution plan without guesswork.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
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
              <p className="mt-2 text-xs text-muted-foreground">
                If we are not a fit, we will tell you fast and point you to a safer path.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 lg:items-end">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                className="cta-button a11y-tap-target justify-center lg:min-w-[220px]"
              >
                Book discovery session
              </a>
              <div className="grid w-full gap-2.5 sm:grid-cols-2 lg:max-w-[320px] lg:grid-cols-1">
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
              <div className="w-full rounded-lg border border-border/70 bg-background/70 p-2.5 lg:max-w-[320px]">
                <p className="text-[11px] leading-4 text-muted-foreground">
                  Good fit for teams that need execution control, trusted technical evaluation, and governance readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-card glass-panel border border-border/70 p-4 md:p-5" aria-labelledby="footer-nav-heading">
          <div className="grid items-start gap-5 lg:grid-cols-12">
            <div className="self-start rounded-xl border border-border/70 bg-background/60 p-4 lg:col-span-5">
              <h3 id="footer-nav-heading" className="text-lg font-bold text-foreground">
                TeamStation AI
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-primary">
                Distributed Engineering OS for CTO and CIO teams
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Distributed engineering operating model for US executive teams who need stronger delivery control,
                governance readiness, and measurable hiring signal quality.
              </p>
              <div className="mt-3 rounded-lg border border-border/70 bg-background/70 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Executive trust surface</p>
                <ul className="mt-2 space-y-1 text-xs leading-5 text-muted-foreground">
                  <li>Accountable SLA ownership and delivery governance</li>
                  <li>Cognitive technical evaluation and decision support</li>
                  <li>Designed for regulated and security sensitive environments</li>
                </ul>
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                US and LATAM operations with accountable delivery governance and executive support.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Need deep links? Use the{" "}
                <Link href="/sitemap" className="font-medium text-primary hover:underline">
                  HTML sitemap
                </Link>
                .
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid items-start gap-x-6 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
                <FooterGroup title="Decide" description="Compare options, economics, and proof.">
                <nav aria-labelledby="footer-decision-paths">
                  <h4 id="footer-decision-paths" className="sr-only">
                    Decide
                  </h4>
                  <ul className="space-y-2">
                    {decisionLinks.map((link) => (
                      <li key={link.href}>
                        <FooterLink {...link} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </FooterGroup>

              <FooterGroup title="Playbook and Research" description="Decision guides, doctrine, and evidence.">
                <nav aria-labelledby="footer-playbook-research">
                  <h4 id="footer-playbook-research" className="sr-only">
                    Playbook and Research
                  </h4>
                  <ul className="space-y-2">
                    {playbookResearchLinks.map((link) => (
                      <li key={link.href}>
                        <FooterLink {...link} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </FooterGroup>

              <FooterGroup title="Hire" description="Primary crawl paths by role, stack, and country.">
                <nav aria-labelledby="footer-hire">
                  <h4 id="footer-hire" className="sr-only">
                    Hire
                  </h4>
                  <ul className="space-y-2">
                    {hireLinks.map((link) => (
                      <li key={link.href}>
                        <FooterLink {...link} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </FooterGroup>

              <FooterGroup title="Trust and Company" description="Policies, support, and corporate paths.">
                <div className="space-y-3">
                  <nav aria-labelledby="footer-trust-legal">
                    <h4 id="footer-trust-legal" className="sr-only">
                      Trust and Legal
                    </h4>
                    <ul className="space-y-2">
                      {trustLegalLinks.map((link) => (
                        <li key={link.href}>
                          <FooterLink {...link} />
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="border-t border-border/60" />
                  <p className="pt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/70">
                    Company
                  </p>
                  <nav aria-labelledby="footer-company">
                    <h4 id="footer-company" className="sr-only">
                      Company
                    </h4>
                    <ul className="space-y-2">
                      {companyLinks.map((link) => (
                        <li key={link.href}>
                          <FooterLink {...link} />
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </FooterGroup>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-border/70 pt-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-foreground">
                  Platform Ecosystem
                </h4>
                <p className="mt-1 text-xs leading-4 text-muted-foreground">
                  Cross domain paths for application, executive hubs, documentation, and research authority.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-[62%] lg:justify-end">
                {externalHubs.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-foreground/90 transition-ui hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-4 flex flex-col gap-2 border-t border-border/70 pt-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TeamStation AI</p>
          <p>Governance ready delivery infrastructure for US and LATAM operations</p>
        </div>
      </div>
    </footer>
  );
}
