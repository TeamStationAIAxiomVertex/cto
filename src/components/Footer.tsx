import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import {
  BookOpen,
  Building2,
  Compass,
  FileCheck2,
  Network,
  ShieldCheck,
} from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

function FooterLink({ href, label, external }: NavLink) {
  const baseClasses =
    "inline-flex rounded-sm text-sm text-foreground/90 transition-ui hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

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
  icon: Icon,
  children,
}: {
  title: string;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border/70 bg-background/70 p-4 sm:p-5">
      <div className="flex items-start gap-3">
        {Icon ? (
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
        <div className="min-w-0">
          <h4 className="text-sm font-semibold tracking-wide text-foreground">{title}</h4>
          {description ? (
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-4">{children}</div>
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
    <footer role="contentinfo" className="mt-20 border-t border-border/80">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section
          className="surface-card relative mb-8 overflow-hidden border border-border/70 p-5 md:p-6"
          aria-labelledby="footer-proof-cta"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_50%)]" />
          <div className="relative grid gap-5 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
            <div>
              <h3 id="footer-proof-cta" className="text-lg font-bold text-foreground">
                If hiring, delivery, and governance are split, speed collapses.
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                TeamStation AI is a distributed engineering operating system. We help executive teams diagnose delivery risk,
                confirm operating fit, and move to an execution plan without guesswork.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "We start with where delivery speed is breaking across hiring, throughput, and governance.",
                  "We clarify who owns the decision, what timeline matters, and what has to be true to move forward.",
                  "We map the operating constraints that usually block execution, including budget model, security posture, and overlap requirements.",
                  "You leave with a fit or no fit answer and a concrete next step plan.",
                ].map((line, idx) => (
                  <div
                    key={line}
                    className="rounded-xl border border-border/70 bg-background/80 p-3"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-primary/90">
                      {idx === 0
                        ? "Operating reality"
                        : idx === 1
                          ? "Decision path"
                          : idx === 2
                            ? "Constraints"
                            : "Next step"}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{line}</p>
                  </div>
                ))}
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
                className="cta-button a11y-tap-target justify-center"
              >
                Book discovery session
              </a>

              <div className="rounded-xl border border-border/70 bg-background/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  Usually a strong fit when you need
                </p>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
                  <li className="rounded-lg border border-border/60 bg-background px-3 py-2">
                    Clear role definitions tied to execution
                  </li>
                  <li className="rounded-lg border border-border/60 bg-background px-3 py-2">
                    Hiring signal you can trust without resume noise
                  </li>
                  <li className="rounded-lg border border-border/60 bg-background px-3 py-2">
                    Delivery control with governance readiness
                  </li>
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
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
          </div>
        </section>

        <section className="surface-card border border-border/70 p-6 md:p-8" aria-labelledby="footer-nav-heading">
          <div className="grid gap-6 xl:grid-cols-[1.18fr_1.82fr]">
            <div className="rounded-2xl border border-border/70 bg-background/60 p-5">
              <h3 id="footer-nav-heading" className="text-lg font-bold text-foreground">
                TeamStation AI
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Distributed engineering operating model for US executive teams who need stronger delivery control,
                governance readiness, and measurable hiring signal quality.
              </p>
              <div className="mt-4 rounded-xl border border-border/70 bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Executive trust surface</p>
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
                Need deep links? Use the{" "}
                <Link href="/sitemap" className="font-medium text-primary hover:underline">
                  HTML sitemap
                </Link>
                .
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              <FooterGroup
                title="Decide"
                description="Buyer journey links for evaluation, cost, and proof."
                icon={Compass}
              >
                <nav aria-labelledby="footer-decision-paths">
                  <h4 id="footer-decision-paths" className="sr-only">
                    Decide
                  </h4>
                  <ul className="space-y-2.5">
                    {decisionLinks.map((link) => (
                      <li key={link.href}>
                        <FooterLink {...link} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </FooterGroup>

              <FooterGroup
                title="Playbook and Research"
                description="Decision guides, economics, and evidence paths."
                icon={BookOpen}
              >
                <nav aria-labelledby="footer-playbook-research">
                  <h4 id="footer-playbook-research" className="sr-only">
                    Playbook and Research
                  </h4>
                  <ul className="space-y-2.5">
                    {playbookResearchLinks.map((link) => (
                      <li key={link.href}>
                        <FooterLink {...link} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </FooterGroup>

              <FooterGroup
                title="Hire"
                description="Primary crawl paths for capability, geography, and stack fit."
                icon={Network}
              >
                <nav aria-labelledby="footer-hire">
                  <h4 id="footer-hire" className="sr-only">
                    Hire
                  </h4>
                  <ul className="space-y-2.5">
                    {hireLinks.map((link) => (
                      <li key={link.href}>
                        <FooterLink {...link} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </FooterGroup>

              <div className="space-y-4">
                <FooterGroup
                  title="Trust and Legal"
                  description="Policy, support, and crawl control pages."
                  icon={ShieldCheck}
                >
                  <nav aria-labelledby="footer-trust-legal">
                    <h4 id="footer-trust-legal" className="sr-only">
                      Trust and Legal
                    </h4>
                    <ul className="space-y-2.5">
                      {trustLegalLinks.map((link) => (
                        <li key={link.href}>
                          <FooterLink {...link} />
                        </li>
                      ))}
                    </ul>
                  </nav>
                </FooterGroup>

                <FooterGroup
                  title="Company"
                  description="Corporate and platform context for buyers and partners."
                  icon={Building2}
                >
                  <nav aria-labelledby="footer-company">
                    <h4 id="footer-company" className="sr-only">
                      Company
                    </h4>
                    <ul className="space-y-2.5">
                      {companyLinks.map((link) => (
                        <li key={link.href}>
                          <FooterLink {...link} />
                        </li>
                      ))}
                    </ul>
                  </nav>
                </FooterGroup>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <FileCheck2 className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-foreground">
                    Platform Ecosystem
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Cross domain paths for application, executive hubs, documentation, and research authority.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-[65%] lg:justify-end">
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
