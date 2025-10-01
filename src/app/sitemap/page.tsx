
import Link from "next/link";
import type { Metadata } from "next";
import { countries } from "@/lib/countries";
import { roleCategories } from "@/lib/roles";
import { techCategories } from "@/lib/tech";

export const metadata: Metadata = {
  title: "HTML Sitemap | TeamStation AI",
  description:
    "Full sitemap of TeamStation AI: Playbook, Research, Comparisons, Case Studies, and programmatic SEO pages (by country, role, and technology).",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://cto.teamstation.dev/sitemap",
  },
};

export default function HtmlSitemap() {
  const navSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "name": "Playbook",
        "url": "https://cto.teamstation.dev/playbook/hub",
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Comparisons",
        "url": "https://cto.teamstation.dev/comparisons",
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Research",
        "url": "https://cto.teamstation.dev/research/hub",
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Case Studies",
        "url": "https://cto.teamstation.dev/case-studies",
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Hire Developers",
        "url": "https://cto.teamstation.dev/hire",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cto.teamstation.dev/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sitemap",
        "item": "https://cto.teamstation.dev/sitemap",
      },
    ],
  };

  return (
    <main className="container max-w-5xl py-12 prose dark:prose-invert">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([navSchema, breadcrumbSchema]),
        }}
      />

      <h1>HTML Sitemap</h1>
      <p>
        Explore <strong>TeamStation AI</strong>: nearshore engineering, cognitive
        AI vetting, and audit-ready compliance. This sitemap provides clear
        navigation for CTOs and search engines.
      </p>

      {/* Core Pages */}
      <section>
        <h2>Core Pages</h2>
        <ul>
          <li><Link href="/">Home – Nearshore IT Co-Pilot</Link></li>
          <li><Link href="/about">About TeamStation AI</Link></li>
          <li><Link href="/platform">Platform Overview</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/trust">Trust & Compliance</Link></li>
          <li><Link href="/faq">FAQ for CTOs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </section>

      {/* Playbook */}
      <section>
        <h2>CTO Playbook</h2>
        <ul>
          <li><Link href="/playbook/hub">Playbook Hub</Link></li>
          <li><Link href="/playbook/nearshore-vs-offshore">Nearshore vs Offshore</Link></li>
          <li><Link href="/playbook/latam-economics">LATAM Economics</Link></li>
          <li><Link href="/playbook/build-vs-buy">Build vs Buy</Link></li>
          <li><Link href="/playbook/bias-free-technical-hiring-axiom-cortex">Bias-Free Hiring</Link></li>
          <li><Link href="/playbook/tco-model">TCO Model</Link></li>
        </ul>
      </section>

      {/* Comparisons */}
      <section>
        <h2>Vendor Comparisons</h2>
        <ul>
          {[
            "bairesdev",
            "globant",
            "revelo",
            "tecla",
            "toptal",
            "unosquare",
            "andela",
            "terminal",
            "nearsure",
            "parallelstaff",
          ].map((vendor) => (
            <li key={vendor}>
              <Link href={`/comparisons/${vendor}`}>
                TeamStation vs {vendor.charAt(0).toUpperCase() + vendor.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Research */}
      <section>
        <h2>Research</h2>
        <ul>
          <li><Link href="/research/hub">Research Hub</Link></li>
          <li><Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ R&D Report</Link></li>
          <li><Link href="/research/heuristically-trained-ai">Heuristically Trained AI</Link></li>
          <li><Link href="/research/framework-for-measuring-capacity">Framework for Measuring Capacity</Link></li>
          <li><Link href="/research/performance-metrics-in-ai-age">Performance Metrics in AI Age</Link></li>
        </ul>
      </section>

      {/* Case Studies */}
      <section>
        <h2>Case Studies</h2>
        <ul>
          <li><Link href="/case-studies">Case Studies Hub</Link></li>
          <li><Link href="/case-studies/atticus">Atticus – Probate Tech</Link></li>
          <li><Link href="/case-studies/global-entertainment">Global Entertainment</Link></li>
          <li><Link href="/case-studies/global-ooh">Global OOH Advertising</Link></li>
          <li><Link href="/case-studies/healthcare-rcm">Healthcare RCM Platform</Link></li>
          <li><Link href="/case-studies/parsable">Parsable – Industrial Automation</Link></li>
          <li><Link href="/case-studies/rmj-technologies">RMJ Technologies – Fleet</Link></li>
        </ul>
      </section>

      {/* Hire Programmatic Pages */}
      <section>
        <h2>Hire Programmatic Pages</h2>

        <h3>By Country</h3>
        <ul>
          {countries.map((c) => (
            <li key={c.slug}>
              <Link href={`/hire/by-country/${c.slug}`}>
                Hire Developers in {c.name}
              </Link>
            </li>
          ))}
        </ul>

        <h3>By Role</h3>
        <ul>
          {roleCategories.map((r) => (
            <li key={r.slug}>
              <Link href={`/hire/by-role/${r.slug}`}>
                Hire {r.name}
              </Link>
            </li>
          ))}
        </ul>

        <h3>By Technology</h3>
        <ul>
          {techCategories.flatMap((cat) =>
            cat.tech.map((t) => (
              <li key={t.slug}>
                <Link href={`/hire/by-technology/${t.slug}`}>
                  Hire {t.name}
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>

      {/* Legal */}
      <section>
        <h2>Legal</h2>
        <ul>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service">Terms of Service</Link></li>
        </ul>
      </section>
    </main>
  );
}
