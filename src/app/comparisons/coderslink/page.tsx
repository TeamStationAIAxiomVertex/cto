
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from "../../../components/seo/JsonLd";
import { generateComparisonSchema } from "../../../lib/comparisonSchema";
import { defaultComparisonFaqs } from "../../../lib/comparisonFaqs";
import FurtherReading from "../../../components/seo/FurtherReading";
import { DecisionCard } from "../../../components/ui/DecisionCard";

const competitor = {
  name: "CodersLink",
  url: "https://coderslink.com/",
  slug: "coderslink"
};

export const metadata: Metadata = {
  title: `CodersLink Alternative: TeamStation AI vs. ${competitor.name}`,
  description: `Compare our integrated platform with EOR, device management, and AI-vetting against ${competitor.name}'s recruitment marketplace model for hiring LATAM developers.`,
  alternates: {
    canonical: `https://cto.teamstation.dev/comparisons/${competitor.slug}`,
  },
};

const comparisonPoints = {
    "Vetting": {
        pain: "Is your vetting just a keyword match?",
        traditional: `${competitor.name} operates a recruitment marketplace, connecting you with a large pool of talent. Their process is effective for sourcing but relies on traditional screening.`,
        teamstation: "Our Axiom Cortex™ provides scientific proof of a candidate\'s problem-solving ability, not just their credentials. We de-risk the hiring decision with data.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Operations": {
        pain: "Who handles the operational complexity?",
        traditional: `The marketplace model leaves you to manage EOR, device security, and insurance. It\'s a significant operational burden you inherit.`,
        teamstation: "Our integrated platform is a complete operational wrapper. We bundle all services under a single, accountable SLA, so you can focus on your product.",
        proof: "1 accountable SLA"
    },
    "Cost": {
        pain: "Are you seeing the full picture on cost?",
        traditional: "The placement fee or hourly rate hides the significant 'hidden costs' of managing your own legal, IT, and compliance for a remote team.",
        teamstation: "Our all-inclusive pricing provides a predictable, CFO-ready TCO that is often 40-60% lower than the fully-loaded cost of other models.",
        proof: "40-60% Lower TCO"
    }
};

const faqs = defaultComparisonFaqs(competitor.name);
const schema = generateComparisonSchema({ 
  competitorName: competitor.name, 
  competitorUrl: competitor.url, 
  slug: competitor.slug, 
  faqs 
});

export default function CodersLinkComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="manual-page container py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>{competitor.name}</span>
        </div>
        <header className="glass-panel gradient-ring hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-foreground">TeamStation AI vs. {competitor.name}</h1>
          <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">
            A comparison between TeamStation AI’s integrated platform and {competitor.name}’s recruitment marketplace model.
          </p>
          <div className="mt-4 text-sm">
              <a href={competitor.url} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Vendor home: {new URL(competitor.url).hostname} <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </header>

        <div className="my-12">
          <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. The Recruitment Marketplace</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {Object.entries(comparisonPoints).map(([key, value]) => (
              <div key={key} className="glass-card-interactive gradient-ring rounded-2xl border border-border/70 bg-background/70 p-6 flex flex-col shadow-lg">
                <p className="text-sm font-semibold text-primary">{value.pain}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
                
                <div className="mt-4 flex-grow space-y-4">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      {competitor.name} Model
                    </h4>
                    <p className="text-sm text-muted-foreground m-0" dangerouslySetInnerHTML={{ __html: value.traditional }} />
                  </div>
                  <div className="mt-4 border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      TeamStation AI approach
                    </h4>
                     <p className="text-sm text-foreground m-0" dangerouslySetInnerHTML={{ __html: value.teamstation }}></p>
                  </div>
                </div>
                <p className="mt-6 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Evidence: {value.proof}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel gradient-ring prose prose-xl dark:prose-invert mx-auto my-10 max-w-4xl rounded-2xl p-6 md:p-8">
          <h2 className="text-center">Analysis: The Integrated Platform vs. The Marketplace</h2>
          <p>
            {competitor.name} operates as a recruitment marketplace for LATAM talent, effective for sourcing candidates. However, this model places the significant burden of compliance, payroll, device security, and HR management on the client.
          </p>
          <p>
             As a {competitor.name} alternative, TeamStation AI provides a fully integrated platform. We don't just find talent; we provide the entire operational infrastructure. This includes EOR, secure MDM-managed devices, and comprehensive insurance, all bundled into a single, predictable rate.
          </p>
        </div>

        <div className="glass-panel gradient-ring text-center rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you have the internal resources to manage international hiring, compliance, and IT security, a marketplace like {competitor.name} can be a good sourcing tool. For companies seeking a complete, secure, and scalable solution that reduces risk and operational burden, TeamStation AI's integrated platform offers a clear advantage.
          </p>
          <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
        </div>
        <DecisionCard
          problem="CTOs face hidden risks in cost, compliance, and velocity when using legacy staffing models."
          stakes="Without addressing these fundamental issues, budgets spiral, projects miss critical deadlines, and security incidents become inevitable."
          approach="TeamStation AI's integrated platform delivers pre-vetted LATAM talent, audit-ready compliance with secure devices, and a predictable Total Cost of Ownership."
          evidence="On average, clients see a 40 60% lower TCO versus traditional models and US hiring. Case studies like [Currance](/case-studies) and [Parsable](/case-studies/parsable) demonstrate measurable improvements in velocity and security posture."
          related={[
            { label: "CTO Playbook", href: "/playbook/hub" },
            { label: "Our Vetting Process", href: "/technical-interview-evaluation" },
            { label: "Hire in Mexico", href: "/hire/by-country/mexico" }
          ]}
        />
        <FurtherReading comparison="coderslink" />
      </main>
    </>
  );
}
