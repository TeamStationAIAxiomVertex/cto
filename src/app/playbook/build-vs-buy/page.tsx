
import Link from 'next/link';
import type { Metadata } from 'next';
import { WithTooltip } from "../../../components/ui/tooltip";
import { CheckCircle, ArrowRight, BrainCircuit, ShieldCheck, UserCheck, Briefcase, FileText, DollarSign, AlertTriangle, Zap, Scale, Layers, HelpCircle, BookOpen } from 'lucide-react';
import { JsonLd } from "../../../components/seo/JsonLd";
import { DecisionCard } from "../../../components/ui/DecisionCard";

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
   {
     "@type": "Question",
     "name": "When should a CTO build vs buy software?",
     "acceptedAnswer": { "@type": "Answer", "text": "Build when your solution is a core differentiator; buy or nearshore when speed, cost, and scale matter more than proprietary code ownership." }
   },
   {
     "@type": "Question",
     "name": "How does TeamStation AI support the build vs buy decision?",
     "acceptedAnswer": { "@type": "Answer", "text": "TeamStation AI accelerates build capacity with vetted nearshore talent, secure devices, and single-SLA compliance, letting CTOs scale without losing control." }
   }
 ]
};

export const metadata: Metadata = {
  title: 'Build vs. Buy: The Definitive CTO Framework for Scaling Nearshore Teams',
  description: 'Should you build a nearshore operation from scratch or "buy" into an integrated platform? This data-driven playbook for CTOs models the trade-offs in Total Cost of Ownership (TCO), speed, and risk.',
};

const buildCosts = [
    { 
        area: "Recruitment & Hiring", 
        tax: "Months of your senior engineers' time wasted on screening and interviewing instead of building product. High agency fees and a low signal-to-noise ratio make this a costly gamble.", 
        impact: "$25,000 - $40,000", 
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        impactColor: "text-destructive"
    },
    { 
        area: "Legal & Entity Setup", 
        tax: "Navigating foreign labor laws, tax codes, and corporate registration is a legal minefield that requires expensive local counsel and months of administrative delay.", 
        impact: "$15,000 - $30,000+", 
        icon: <FileText className="h-8 w-8 text-primary" />,
        impactColor: "text-destructive"
    },
    { 
        area: "HR & Payroll Admin", 
        tax: "Managing international payroll, benefits, and compliance for each country is a full-time job you now own. This is a massive, ongoing operational drag on your internal resources.", 
        impact: "$10,000 - $15,000 (annual)", 
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        impactColor: "text-destructive"
    },
    { 
        area: "IT & Security", 
        tax: "Procuring, shipping, securing (MDM), and managing laptops globally without a dedicated international IT team is an operational nightmare and a significant security risk.", 
        impact: "$5,000 - $8,000 (per hire)", 
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        impactColor: "text-destructive"
    },
    { 
        area: "The 'Mis-Hire Tax'", 
        tax: "A bad hire costs 6-12 months of salary in lost productivity, team disruption, management overhead, and the cost of re-hiring. It's the most expensive mistake you can make.", 
        impact: "$75,000 - $150,000", 
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        impactColor: "text-destructive"
    },
    { 
        area: "The 'Vacancy Tax'", 
        tax: "Every day a critical role sits empty, your company pays a 'Vacancy Tax' in delayed features, missed revenue targets, and lost market share. The industry average is 45-60 days.", 
        impact: "≈$160,000 per $1M ARR", 
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        impactColor: "text-destructive"
    },
];

const buySolutions = [
    { 
        pain: "Is your recruiting process a high-risk gamble?", 
        solutionTitle: "From Resume Keywords to Cognitive Proof",
        solution: "Our Axiom Cortex™ engine provides scientifically-vetted shortlists, cutting your team's interview time by >80%. We find candidates with the right 'mental shape' for the role, not just the right keywords.", 
        proof: "Mismatch Rate ≤ 10%",
        href: "/technical-interview-evaluation",
        linkLabel: "See Our Vetting Process",
        icon: <UserCheck className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Are you drowning in legal and HR complexity?",
        solutionTitle: "From Multi-Vendor Chaos to One SLA",
        solution: "Our platform includes full Employer of Record (EOR) services. We handle all contracts, payroll, taxes, and benefits, ensuring full compliance in every LATAM country and eliminating your administrative burden.", 
        proof: "Zero legal or HR overhead",
        href: "/services/integrated-services",
        linkLabel: "Explore Integrated Services",
        icon: <FileText className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Is your security posture full of holes?",
        solutionTitle: "From 'Bring Your Own Device' to Audit-Ready",
        solution: "We provide secure, MDM-managed devices and comprehensive Cyber/E&O insurance. Your security posture is audit-ready from Day 1, with no work from your IT team. We own the risk.", 
        proof: "SOC 2 & ISO Aligned posture",
        href: "/trust",
        linkLabel: "Visit Our Trust Center",
        icon: <ShieldCheck className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Are you paying for vendors or for outcomes?",
        solutionTitle: "From Hidden Fees to Predictable TCO",
        solution: "Our all-inclusive pricing eliminates surprise fees. You get a predictable, CFO-ready Total Cost of Ownership that is often 40-60% lower than the fully-loaded cost of the 'Build' model.", 
        proof: "40-60% Lower TCO",
        href: "/playbook/latam-economics",
        linkLabel: "See the TCO Framework",
        icon: <Scale className="h-8 w-8 text-primary" />
    },
];


export default function BuildVsBuyPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="manual-page container max-w-5xl py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook/hub" className="hover:text-foreground">CTO Playbook</Link> / <span>Build vs. Buy</span>
        </div>

        <header className="my-8">
          <div className="glass-panel rounded-2xl p-6 md:p-10">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Build vs. Buy: The Definitive CTO Framework for Scaling Nearshore Teams</h1>
              <div className="mt-8 max-w-4xl space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-primary/20">
                      <h2 className="font-bold text-primary flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>Foreword: The Strategic Choice</h2>
                      <p className="mt-2 text-muted-foreground">You have the mandate to scale your engineering team. The budget is tight, the timeline is aggressive, and the cost of a mis-step is catastrophic. You're facing one of the most consequential decisions a technology leader can make: Do you take on the immense operational load of "building" a foreign entity from scratch, or do you "buy" into an integrated platform that abstracts away the complexity?</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border/50">
                      <p className="mt-2 text-muted-foreground">This is not a tactical choice; it's an architectural one with massive financial and operational consequences. Your CFO sees a lower salary on a spreadsheet and asks, "Why can't we just hire directly?" They see a number. You, the CTO, must see the system. You must see the hidden costs, the unseen risks, and the operational drag that can sink your entire strategy.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border/50">
                      <h3 className="font-bold text-primary flex items-center gap-2"><BookOpen className="h-5 w-5"/>The Playbook's Purpose</h3>
                      <div className="mt-2 text-muted-foreground">
                          <p>This guide is your strategic ammunition. It is a CFO-ready framework to move the conversation beyond misleading salary comparisons to the only metric that matters: <strong>Total Cost of Ownership (TCO)</strong>. We will diagnose the pain of the "Build" model, quantify its true cost, and present the data-driven case for the "Buy" model as a faster, safer, and more capital-efficient path to scaling your engineering team.</p>
                          <WithTooltip label="Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead."><span className="border-b border-dashed">Total Cost of Ownership</span></WithTooltip>
                      </div>
                  </div>
              </div>
          </div>
        </header>

        <section className="my-24">
          <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground">Part 1: The "Build" Model   A High-Risk, High-Cost Gamble</h2>
              <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">Building your own nearshore operation seems like it offers more control, but it's a trap. You become responsible for a mountain of non-core activities, each with hidden costs and significant risks. Your finance team sees a lower salary; you, the CTO, are saddled with a dozen hidden "taxes" on your time and budget.</p>
          </div>

          <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {buildCosts.map((item) => (
                  <div key={item.area} className="rounded-lg border border-destructive/20 bg-card p-6 flex flex-col">
                      <div className="flex items-center gap-3">
                          {item.icon}
                          <h3 className="text-lg font-semibold text-foreground">{item.area}</h3>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground flex-grow">
                          {item.tax.includes("MDM") ? 
                          <>Procuring, shipping, securing (<WithTooltip label="Mobile Device Management: software that secures, monitors, and manages devices like laptops."><span className="border-b border-dashed">MDM</span></WithTooltip>), and managing laptops globally without a dedicated international IT team is an operational nightmare and a significant security risk.</>
                          : item.tax
                      }</p>
                      <p className={`mt-4 text-base font-mono bg-destructive/10 rounded px-3 py-2 inline-block self-start ${item.impactColor}`}>
                          {item.impact}
                      </p>
                  </div>
              ))}
          </div>
          <div className="text-center my-8 p-6 rounded-lg bg-background border border-destructive/30">
              <h3 className="text-xl font-bold text-foreground">Total Hidden Cost (1st Year, per hire):</h3>
              <p className="text-4xl font-mono font-bold text-destructive mt-2">$97,000 - $185,000+</p>
              <p className="text-sm text-muted-foreground mt-1">This is <em className="font-bold">in addition</em> to the engineer's salary. The "cheaper" build model is often twice as expensive in the first year.</p>
          </div>
        </section>

        <section className="my-24">
          <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground">Part 2: The "Buy" Model   An Integrated Platform That Absorbs Risk</h2>
              <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">Partnering with TeamStation AI means you "buy" a complete, managed operating system for your nearshore team. We absorb all the risk and operational overhead into a single, predictable, all-inclusive rate, allowing you to focus on your core competency: building world-class software.</p>
          </div>

          <div className="my-16">
              <h3 className="text-center text-3xl font-bold text-primary">How We Eliminate the Hidden Taxes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  {buySolutions.map((item) => (
                      <div key={item.pain} className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 flex flex-col">
                          <p className="text-sm font-semibold text-primary">{item.pain}</p>
                          <div className="flex items-center gap-3 mt-3">
                              {item.icon}
                              <h3 className="text-lg font-semibold text-foreground">{item.solutionTitle}</h3>
                          </div>
                          <p className="mt-4 text-sm text-muted-foreground flex-grow">
                              {item.solution}
                          </p>
                          <div className="mt-6 border-t border-border pt-4">
                            <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Evidence: {item.proof}</p>
                            <Link href={item.href} className="mt-4 flex items-center text-sm font-semibold text-primary">
                                  {item.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
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
      </main>
    </>
  );
}
