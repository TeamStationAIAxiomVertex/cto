import Link from "next/link";
import { countries } from "@/lib/countries";
import { roleCategories } from "@/lib/roles";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

function FooterLink({ href, label, external }: NavLink) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-foreground hover:text-primary"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className="text-sm text-foreground hover:text-primary">
      {label}
    </Link>
  );
}

const companyLinks: NavLink[] = [
  { href: "https://teamstation.dev", label: "TeamStation AI Corporate Home", external: true },
  { href: "https://app.teamstation.dev", label: "Application Platform Login", external: true },
  { href: "https://hire.teamstation.dev", label: "Hiring and Nearshore Services", external: true },
  { href: "https://cto.teamstation.dev", label: "CTO Playbook Hub", external: true },
  { href: "https://cio.teamstation.dev", label: "CIO Governance Hub", external: true },
  { href: "https://docs.teamstation.dev", label: "Documentation Hub", external: true },
  { href: "https://engineering.teamstation.dev", label: "Engineering Blog and Systems", external: true },
  { href: "https://research.teamstation.dev", label: "Research and Scientific Publications", external: true },
  { href: "https://articles.teamstation.dev", label: "Articles and Editorials", external: true },
  { href: "https://partner.teamstation.dev", label: "Partner Portal", external: true },
  { href: "https://jobs.teamstation.dev", label: "Careers and Job Listings", external: true },
];

const resourceLinks: NavLink[] = [
  { href: "/platform", label: "Nearshore Platform Overview" },
  { href: "/playbook/latam-economics", label: "LATAM Engineering Hub" },
  { href: "/playbook/tco-model", label: "Engineering Cost Models" },
  { href: "/research/hub", label: "Research Hub" },
  { href: "/research/framework-for-measuring-capacity", label: "Physics of Distributed Delivery" },
  { href: "/engineering-doctrine", label: "CTO Team Topology Guide" },
  { href: "/playbook/nearshore-vs-offshore", label: "Nearshore vs Offshore Playbook" },
  { href: "/comparisons/bairesdev", label: "TeamStation AI vs BairesDev" },
  { href: "/faq", label: "Nearshore Engineering Glossary" },
];

const practiceAreaLinks: NavLink[] = roleCategories.map((role) => ({
  href: `/hire/by-role/${role.slug}`,
  label: role.name,
}));

const frontendLinks: NavLink[] = [
  { href: "/hire/by-technology/react", label: "Hire Elite React TypeScript Software Developers" },
  { href: "/hire/by-technology/typescript", label: "Hire Elite TypeScript Software Developers" },
  { href: "/hire/by-technology/nextjs", label: "Hire Elite Next.js Software Developers" },
  { href: "/hire/by-technology/angular", label: "Hire Elite Angular Software Developers" },
  { href: "/hire/by-technology/vue", label: "Hire Elite Vue.js Software Developers" },
  { href: "/hire/by-technology/pinia", label: "Hire Elite Pinia Vue State Software Developers" },
  { href: "/hire/by-technology/remix", label: "Hire Elite Remix Software Developers" },
  { href: "/hire/by-technology/svelte", label: "Hire Elite Svelte SvelteKit Software Developers" },
];

const backendLinks: NavLink[] = [
  { href: "/hire/by-technology/node", label: "Hire Elite Node.js Software Engineers" },
  { href: "/hire/by-technology/java", label: "Hire Elite Java Spring JVM Software Engineers" },
  { href: "/hire/by-technology/python", label: "Hire Elite Python Software Engineers" },
  { href: "/hire/by-technology/net", label: "Hire Elite C# .NET Software Engineers" },
  { href: "/hire/by-technology/rust", label: "Hire Elite Rust Software Engineers" },
  { href: "/hire/by-technology/php", label: "Hire Elite PHP Software Engineers" },
  { href: "/hire/by-technology/ruby", label: "Hire Elite Ruby on Rails Software Engineers" },
  { href: "/hire/by-technology/go", label: "Hire Elite Go Golang Software Engineers" },
];

const devopsLinks: NavLink[] = [
  { href: "/hire/by-technology/devops-engineering", label: "Hire Elite DevOps Engineering Software Architects" },
  { href: "/hire/by-technology/aws", label: "Hire Elite Amazon Web Services Software Architects" },
  { href: "/hire/by-technology/azure", label: "Hire Elite Microsoft Azure Software Engineers" },
  { href: "/hire/by-technology/google-cloud", label: "Hire Elite Google Cloud Platform Software Architects" },
  { href: "/hire/by-technology/kubernetes", label: "Hire Elite Kubernetes Software Architects" },
  { href: "/hire/by-technology/docker", label: "Hire Elite Docker Software Architects" },
  { href: "/hire/by-technology/terraform", label: "Hire Elite Terraform Software Architects" },
  { href: "/hire/by-technology/ci-cd", label: "Hire Elite CI CD Pipeline Architecture Software Architects" },
];

const dataAiLinks: NavLink[] = [
  { href: "/hire/by-technology/data-engineering", label: "Hire Elite Data Engineering IT Talent" },
  { href: "/hire/by-technology/sql", label: "Hire Elite SQL IT Talent" },
  { href: "/hire/by-technology/etl-elt", label: "Hire Elite ETL ELT IT Talent" },
  { href: "/hire/by-technology/apache-spark", label: "Hire Elite Apache Spark IT Talent" },
  { href: "/hire/by-technology/dbt", label: "Hire Elite dbt Data Build Tool IT Talent" },
  { href: "/hire/by-technology/machine-learning", label: "Hire Elite Machine Learning IT Talent" },
  { href: "/hire/by-technology/llms", label: "Hire Elite LLMs IT Talent" },
  { href: "/hire/by-technology/langchain", label: "Hire Elite LangChain Developer IT Talent" },
];

const systemsLinks: NavLink[] = [
  { href: "/hire/by-technology/salesforce-apex", label: "Hire Elite Salesforce Apex IT Talent" },
  { href: "/hire/by-technology/salesforce-lwc", label: "Hire Elite Salesforce LWC IT Talent" },
  { href: "/hire/by-technology/sap-abap", label: "Hire Elite SAP ABAP IT Talent" },
  { href: "/hire/by-technology/sap-fiori-ui5", label: "Hire Elite SAP Fiori UI5 IT Talent" },
  { href: "/hire/by-technology/power-platform", label: "Hire Elite Microsoft Power Platform IT Talent" },
  { href: "/hire/by-technology/dynamics-365", label: "Hire Elite Microsoft Dynamics 365 IT Talent" },
  { href: "/hire/by-technology/oracle-database", label: "Hire Elite Oracle Database IT Talent" },
  { href: "/hire/by-technology/oracle-apex", label: "Hire Elite Oracle APEX IT Talent" },
];

const insightLinks: NavLink[] = [
  { href: "/platform", label: "Nearshore Software Development" },
  { href: "/playbook/nearshore-vs-offshore", label: "Nearshore vs Offshore" },
  { href: "/playbook/new-gen-nearshore", label: "IT Staff Augmentation" },
  { href: "/playbook/build-vs-buy", label: "Software Development Outsourcing" },
  { href: "/hire/by-country", label: "Hire Nearshore Engineers in LATAM" },
  { href: "/hire/by-technology/llm-engineer", label: "Hire AI Engineers" },
  { href: "/hire/by-technology/data-science", label: "Hire Data Scientists" },
  { href: "/hire/by-technology/devops-engineering", label: "Hire DevOps Engineers" },
  { href: "/hire/by-technology/react", label: "Hire React Developers" },
  { href: "/hire/by-technology/python", label: "Hire Python Developers" },
  { href: "/hire/by-technology/node", label: "Hire Node.js Developers" },
  { href: "/hire/by-technology/java", label: "Hire Java Developers" },
];

const methodologyLinks: NavLink[] = [
  { href: "/technical-interview-evaluation", label: "Cognitive Hiring Framework" },
  { href: "/research/performance-metrics-in-ai-age", label: "LATAM Tech Market Report" },
  { href: "/playbook/tco-model", label: "Nearshore ROI Calculator" },
  { href: "/research/framework-for-measuring-capacity", label: "Engineering Velocity Benchmarks" },
  { href: "/engineering-doctrine", label: "Team Topology Research" },
  { href: "/research/technical-talent-evaluation-system", label: "AI Vetting Methodology" },
  { href: "/research/performance-evaluation-framework", label: "Cognitive Team Performance" },
  { href: "/playbook/nearshore-vs-offshore", label: "Nearshore vs Offshore TCO" },
  { href: "/playbook/latam-economics", label: "LATAM Salary Benchmarks" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-20 border-t border-border py-12">
      <div className="container mx-auto max-w-7xl space-y-6 px-4 md:px-6">
        <section className="rounded-xl border bg-card p-5 md:p-7">
          <h3 className="text-2xl font-bold text-foreground">TeamStation AI</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The integrated platform for building and scaling elite nearshore engineering teams.
          </p>
          <div className="mt-4 grid gap-1 text-sm text-muted-foreground">
            <p>One Seaport Square, 77 Sleeper St</p>
            <p>5830 E 2nd St, Ste 7000 #14687</p>
            <p>Boston, MA 02210</p>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Research and Resources</h4>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Hire by Practice Area</h4>
            <ul className="mt-4 space-y-2">
              {practiceAreaLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Frontend and UI UX</h4>
            <ul className="mt-4 space-y-2">
              {frontendLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Backend and APIs</h4>
            <ul className="mt-4 space-y-2">
              {backendLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">DevOps and Cloud</h4>
            <ul className="mt-4 space-y-2">
              {devopsLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Data and AI</h4>
            <ul className="mt-4 space-y-2">
              {dataAiLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Enterprise Ecosystems</h4>
            <ul className="mt-4 space-y-2">
              {systemsLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-5 md:p-6">
            <h4 className="text-base font-bold text-foreground">Engineering Insights</h4>
            <ul className="mt-4 space-y-2">
              {insightLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-xl border bg-card p-5 md:p-7">
          <h4 className="text-base font-bold text-foreground">Research and Methodology</h4>
          <ul className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {methodologyLinks.map((link) => (
              <li key={link.href}>
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border bg-card p-5 md:p-7">
          <h4 className="text-lg font-bold text-foreground">
            Need US time zone overlap with a massive talent pool
          </h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore our core nearshore markets, each vetted for engineering excellence,
            English proficiency, and cultural alignment with US teams.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/hire/by-country" className="font-semibold text-foreground hover:text-primary">
              Visit the Hire by Country Hub
            </Link>
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <article key={country.slug} className="rounded-lg border border-border bg-background/70 p-4">
                <h5 className="text-base font-semibold text-foreground">{country.name}</h5>
                <p className="mt-2 text-sm text-muted-foreground">{country.solution}</p>
                <p className="mt-2 text-xs font-semibold text-foreground">{country.kpi}</p>
                <Link
                  href={`/hire/by-country/${country.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-foreground hover:text-primary"
                >
                  Explore Talent in {country.name}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border bg-card p-5 md:p-7">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-bold text-foreground">Diagnose delivery risk before you hire</h4>
              <p className="mt-3 text-sm text-muted-foreground">
                Not sure nearshore is right for you? We identify constraints, delivery risk,
                and operating fit before you commit.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-foreground md:grid-cols-2">
                <li>Discovery and constraints</li>
                <li>Risk and capacity analysis</li>
                <li>Fit validation</li>
                <li>Delivery roadmap</li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                We only engage when there is measurable delivery fit.
              </p>
            </div>
            <div className="flex items-start lg:justify-end">
              <Link
                href="/hire"
                className="inline-flex rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a discovery session
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-xl border bg-card p-5 md:p-6">
          <h4 className="text-base font-bold text-foreground">Support and Compliance</h4>
          <ul className="mt-4 grid gap-2 text-sm md:grid-cols-3">
            <li><FooterLink href="/pricing" label="Pricing" /></li>
            <li><FooterLink href="/faq" label="FAQ" /></li>
            <li><FooterLink href="/privacy-policy" label="Privacy Policy" /></li>
            <li><FooterLink href="/terms-of-service" label="Terms of Service" /></li>
            <li><FooterLink href="/sitemap" label="HTML Sitemap" /></li>
            <li><FooterLink href="/sitemap.xml" label="XML Sitemap" /></li>
          </ul>
        </section>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {year} TeamStation AI
        </div>
      </div>
    </footer>
  );
}
