import Link from "next/link";
import { countries } from "@/lib/countries";
import { roleCategories } from "@/lib/roles";
import { techCategories } from "@/lib/tech-categories";

type FooterLink = {
  href: string;
  label: string;
  subtitle?: string;
};

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <section className="rounded-xl border bg-card p-5 md:p-6">
      <h4 className="text-base font-bold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.href}`}>
            <Link
              href={link.href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
            {link.subtitle ? (
              <p className="mt-1 text-sm text-muted-foreground">{link.subtitle}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

const navigationLinks: FooterLink[] = [
  {
    href: "/playbook/hub",
    label: "Playbook",
    subtitle: "Frameworks for CTO decisions under delivery pressure",
  },
  {
    href: "/research/hub",
    label: "Research",
    subtitle: "Evidence and operating models for distributed teams",
  },
  {
    href: "/comparisons",
    label: "Comparisons",
    subtitle: "Side by side vendor and model comparison pages",
  },
  {
    href: "/case-studies",
    label: "Case Studies",
    subtitle: "Outcome stories with delivery context and constraints",
  },
  {
    href: "/engineering-doctrine",
    label: "Engineering Doctrine",
    subtitle: "Team topologies and system level operating doctrine",
  },
  {
    href: "/trust",
    label: "Trust",
    subtitle: "Security, compliance, and governance posture",
  },
];

const roleLinks: FooterLink[] = [
  {
    href: "/hire/by-role",
    label: "Hire by Role Hub",
    subtitle: "Select role fit before team scale begins",
  },
  ...roleCategories.map((role) => ({
    href: `/hire/by-role/${role.slug}`,
    label: `Hire ${role.name}`,
  })),
];

const countryLinks: FooterLink[] = [
  {
    href: "/hire/by-country",
    label: "Hire by Country Hub",
    subtitle: "Compare country fit by overlap, cost, and delivery readiness",
  },
  ...countries.map((country) => ({
    href: `/hire/by-country/${country.slug}`,
    label: `Hire in ${country.name}`,
  })),
];

const uniqueTech = Array.from(
  new Map(techCategories.flatMap((cat) => cat.tech).map((tech) => [tech.slug, tech])).values(),
);

const technologyLinks: FooterLink[] = [
  {
    href: "/hire/by-technology",
    label: "Hire by Technology Hub",
    subtitle: "Map hiring to your exact stack and platform needs",
  },
  ...uniqueTech.slice(0, 42).map((tech) => ({
    href: `/hire/by-technology/${tech.slug}`,
    label: `Hire ${tech.name}`,
  })),
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border py-12">
      <div className="container mx-auto max-w-7xl space-y-6 px-4 md:px-6">
        <section className="rounded-xl border bg-card p-5 md:p-7">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground">
                Diagnose your delivery risk before you hire
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Not sure if nearshore is right for you? We help CTO teams identify delivery risk,
                capacity gaps, and operating constraints before committing.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-foreground md:grid-cols-2">
                <li>Discovery and operating constraints</li>
                <li>Risk and capacity assessment</li>
                <li>Fit and operating model alignment</li>
                <li>Delivery plan and cost model</li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                We only engage when there is a measurable delivery fit. If we are not the right
                solution, we will tell you.
              </p>
            </div>
            <div className="flex items-start lg:justify-end">
              <Link
                href="/hire"
                className="inline-flex rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a 20 minute discovery session
              </Link>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-border bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">Nearshore engineering for CTO teams</p>
            <p className="mt-1 text-sm text-muted-foreground">
              LATAM engineering teams, delivery assurance, AI assisted hiring, risk controlled
              scaling, and distributed engineering teams.
            </p>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <LinkGroup title="Explore by Interest" links={navigationLinks} />
          <LinkGroup title="Hire by Role" links={roleLinks} />
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <LinkGroup title="Hire by Country" links={countryLinks} />
          <LinkGroup title="Hire by Technology" links={technologyLinks} />
        </section>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {year} TeamStation AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
