
import Link from "next/link";

export const metadata = {
  title: "HTML Sitemap | TeamStation AI",
  description:
    "Explore all pages on TeamStation AI: playbook, research, comparisons, case studies, and programmatic SEO pages for hiring by country, role, and technology.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://cto.teamstation.dev/sitemap",
  },
};

export default function HtmlSitemap() {
  return (
    <main className="container max-w-5xl py-12 prose dark:prose-invert">
      <h1>HTML Sitemap</h1>
      <p>
        This sitemap lists all key sections of <strong>TeamStation AI</strong> —
        optimized for CTOs looking for{" "}
        <strong>nearshore software development, secure hiring, and audit-ready operations</strong>.
      </p>

      {/* Core Pages */}
      <section>
        <h2>Core Pages</h2>
        <ul>
          <li><Link href="/">Home – Nearshore IT Co-Pilot</Link></li>
          <li><Link href="/about">About TeamStation AI</Link></li>
          <li><Link href="/platform">Platform Overview</Link></li>
          <li><Link href="/pricing">Pricing & Engagement Models</Link></li>
          <li><Link href="/trust">Trust & Compliance Center</Link></li>
          <li><Link href="/faq">FAQ for CTOs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </section>

      {/* Playbook */}
      <section>
        <h2>CTO Playbook</h2>
        <ul>
          <li><Link href="/playbook/hub">Playbook Hub</Link></li>
          <li><Link href="/playbook/nearshore-vs-offshore">Nearshore vs. Offshore</Link></li>
          <li><Link href="/playbook/latam-economics">LATAM Economics</Link></li>
          <li><Link href="/playbook/build-vs-buy">Build vs. Buy</Link></li>
          <li><Link href="/playbook/bias-free-technical-hiring-axiom-cortex">Bias-Free Hiring</Link></li>
          <li><Link href="/playbook/tco-model">TCO Model</Link></li>
        </ul>
      </section>

      {/* Comparisons */}
      <section>
        <h2>Vendor Comparisons</h2>
        <ul>
          <li><Link href="/comparisons/bairesdev">TeamStation vs BairesDev</Link></li>
          <li><Link href="/comparisons/globant">TeamStation vs Globant</Link></li>
          <li><Link href="/comparisons/revelo">TeamStation vs Revelo</Link></li>
          <li><Link href="/comparisons/tecla">TeamStation vs TECLA</Link></li>
          <li><Link href="/comparisons/toptal">TeamStation vs Toptal</Link></li>
          <li><Link href="/comparisons/unosquare">TeamStation vs Unosquare</Link></li>
          <li><Link href="/comparisons/andela">TeamStation vs Andela</Link></li>
          <li><Link href="/comparisons/terminal">TeamStation vs Terminal</Link></li>
          <li><Link href="/comparisons/nearsure">TeamStation vs Nearsure</Link></li>
          <li><Link href="/comparisons/parallelstaff">TeamStation vs ParallelStaff</Link></li>
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

      {/* Hire Pages */}
      <section>
        <h2>Hire Programmatic Pages</h2>
        <h3>By Country</h3>
        <ul>
          <li><Link href="/hire/by-country/mexico">Hire Developers in Mexico</Link></li>
          <li><Link href="/hire/by-country/colombia">Hire Developers in Colombia</Link></li>
          <li><Link href="/hire/by-country/brazil">Hire Developers in Brazil</Link></li>
          <li><Link href="/hire/by-country/argentina">Hire Developers in Argentina</Link></li>
          <li><Link href="/hire/by-country/chile">Hire Developers in Chile</Link></li>
        </ul>

        <h3>By Role</h3>
        <ul>
          <li><Link href="/hire/by-role/frontend">Hire Frontend Developers</Link></li>
          <li><Link href="/hire/by-role/backend">Hire Backend Developers</Link></li>
          <li><Link href="/hire/by-role/devops">Hire DevOps Engineers</Link></li>
          <li><Link href="/hire/by-role/data-engineer">Hire Data Engineers</Link></li>
          <li><Link href="/hire/by-role/ml-ai">Hire ML/AI Engineers</Link></li>
        </ul>

        <h3>By Technology</h3>
        <ul>
          <li><Link href="/hire/by-technology/react">Hire React Developers</Link></li>
          <li><Link href="/hire/by-technology/node">Hire Node.js Developers</Link></li>
          <li><Link href="/hire/by-technology/python">Hire Python Developers</Link></li>
          <li><Link href="/hire/by-technology/java">Hire Java Developers</Link></li>
          <li><Link href="/hire/by-technology/aws">Hire AWS Engineers</Link></li>
          <li><Link href="/hire/by-technology/kubernetes">Hire Kubernetes Engineers</Link></li>
        </ul>
      </section>

      {/* Legal */}
      <section>
        <h2>Legal Pages</h2>
        <ul>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service">Terms of Service</Link></li>
        </ul>
      </section>
    </main>
  );
}
