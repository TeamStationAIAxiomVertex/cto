
import Link from 'next/link';
import { ArrowRight, Users, Scale, ShieldCheck, Briefcase, ExternalLink, Network } from 'lucide-react';
import type { Metadata } from 'next';
import ValuePropositionBlock from "../../components/seo/ValuePropositionBlock";
import CTOFieldManualBlock from "../../components/seo/CTOFieldManualBlock";
import FurtherReading from "../../components/seo/FurtherReading";
import { JsonLd } from "../../components/seo/JsonLd";
import {
  ExecutivePageFrame,
  ExecutivePanel,
  ExecutiveSection,
  SectionHeading,
  ChecklistSteps,
  ProofStrip,
  FAQList,
} from "../../components/ui/executive-primitives";

export const metadata: Metadata = {
  title: 'Nearshore Vendor Comparisons | TeamStation AI',
  description: 'Objective analysis of nearshore IT vendors. We compare against Body Shops, Freelance Networks, SIs, and EOR-only models.',
};

const models = [
    {
        name: 'The "Body Shop" Model',
        icon: <Users className="h-8 w-8 text-primary" />,
        pain: "Is your vendor just filling seats with unvetted talent?",
        problem: "These vendors focus on volume, placing bodies in seats with minimal vetting. You get a low hourly rate but inherit massive risk in quality, security, and retention.",
        vendors: [
            { name: "BairesDev", href: "/comparisons/bairesdev", website: "https://www.bairesdev.com/" },
            { name: "Nearsure", href: "/comparisons/nearsure", website: "https://nearsure.com/" },
            { name: "Unosquare", href: "/comparisons/unosquare", website: "https://www.unosquare.com/" },
            { name: "KMS", href: "/comparisons/kms", website: "https://kms-technology.com/" },
            { name: "Devlane", href: "/comparisons/devlane", website: "https://devlane.com/" },
        ],
        solution: "Our <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Axiom Cortex™</a> vetting provides scientific proof of skill, and our integrated platform handles all operations, creating a lower, predictable <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO</a>."
    },
    {
        name: 'The Freelance Network Model',
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        pain: "Are you building a team or just renting a temporary coder?",
        problem: "Elite talent, but at a premium price. The freelance model creates continuity risk and leaves you with the entire burden of security, compliance, and management.",
        vendors: [
            { name: "Toptal", href: "/comparisons/toptal", website: "https://www.toptal.com/" },
            { name: "Andela", href: "/comparisons/andela", website: "https://www.andela.com/" },
        ],
        solution: "We build dedicated, long-term teams of full-time employees, ensuring knowledge retention and deep integration, all at a sustainable cost."
    },
    {
        name: 'The Systems Integrator (SI) Model',
        icon: <Network className="h-8 w-8 text-primary" />,
        pain: "Do you need to augment your team or outsource your brain?",
        problem: "SIs are for large-scale project outsourcing, not staff augmentation. You lose control over architecture and team culture, creating long-term dependency.",
        vendors: [
            { name: "Globant", href: "/comparisons/globant", website: "https://www.globant.com/" }
        ],
        solution: "Our model is built for control. We provide elite engineers who integrate into your teams, your rituals, and your roadmap. You own the technical direction."
    },
    {
        name: 'The "EOR-Plus" Model',
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        pain: "Is your vendor solving payroll or the entire operational stack?",
        problem: "These vendors handle hiring and payroll but leave critical gaps. They don't provide secure devices, MDM, or insurance, forcing you to become a global IT and risk manager.",
        vendors: [
            { name: "Terminal", href: "/comparisons/terminal", website: "https://terminal.io/" },
            { name: "Deel", href: "/comparisons/deel", website: "https://www.deel.com/" },
            { name: "Revelo", href: "/comparisons/revelo", website: "https://www.revelo.com/" },
            { name: "ParallelStaff", href: "/comparisons/parallelstaff", website: "https://www.parallelstaff.com/" },
            { name: "TECLA", href: "/comparisons/tecla", website: "https://www.tecla.io/" },
            { name: "Howdy", href: "/comparisons/howdy", website: "https://www.howdy.com/" },
            { name: "CodersLink", href: "/comparisons/coderslink", website: "https://coderslink.com/" },
        ],
        solution: "We are a complete operational platform. We bundle all 'run-state' services EOR, devices, MDM, security, insurance into a single, accountable SLA."
    }
];

const checklistSteps = [
  {
    title: "Name the failure mode",
    body: "Start with the issue your leadership team is trying to fix such as review latency, vendor sprawl, compliance gaps, or budget uncertainty.",
  },
  {
    title: "Compare the operating model",
    body: "Evaluate execution control, operational coverage, and economic reality before evaluating recruiting claims or headline rates.",
  },
  {
    title: "Validate with proof",
    body: "Use case studies, TCO modeling, and research pages to confirm the model can support your governance and delivery requirements.",
  },
];

const proofMetrics = [
  { label: "Cost range", value: "40 to 60 percent lower TCO", note: "Versus legacy vendor structures in many scenarios" },
  { label: "Review speed", value: "Faster daylight decision loops", note: "Lower queue time and reduced handoff delay" },
  { label: "Forecast confidence", value: "Lower variance planning", note: "When governance and delivery telemetry are connected" },
  { label: "Buyer outcome", value: "Stronger executive control", note: "Clearer accountability across hiring and execution" },
];

const comparisonFaq = [
  {
    q: "How should a CTO compare vendors when every firm claims senior talent?",
    a: "Compare the operating model first. Ask who owns technical quality, how decisions are escalated, what security controls are included, and how delivery performance is measured after onboarding.",
  },
  {
    q: "Why is hourly rate a weak comparison metric for executive decisions?",
    a: "Rate alone ignores review latency, management overhead, rework, vacancies, and compliance burden. These costs often decide the real outcome more than the rate card.",
  },
  {
    q: "What is the best next step if we are unsure which model fits our team?",
    a: "Start with a short strategy discussion to identify the actual delivery constraint. Once the constraint is clear, the vendor comparison becomes much easier and more objective.",
  },
];

const comparisonSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cto.teamstation.dev" },
      { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://cto.teamstation.dev/comparisons" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparisonFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function ComparisonsPage() {
  return (
    <main className="py-12">
      <JsonLd data={comparisonSchemas} />
      <ExecutivePageFrame>
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / <span>Comparisons</span>
        </div>

        <ExecutivePanel as="header" className="p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                CTO Comparison Hub for Nearshore Vendor Models
              </h1>
              <p className="mt-5 max-w-4xl text-lg text-muted-foreground leading-8">
                This page is a decision map for CTO and CIO teams comparing operating models, not just vendor names.
                Most vendors optimize for seat fill or rate card optics. That creates hidden delivery risk, weak governance,
                and slow execution loops. Use this hub to identify the model failure first, then evaluate the right comparison path.
              </p>
              <nav className="mt-6 flex flex-wrap gap-4 text-sm">
                <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
                <Link href="/research/hub" className="text-primary hover:underline">Our Research</Link>
                <Link href="/hire" className="text-primary hover:underline">Hire Talent</Link>
                <a href="https://research.teamstation.dev/protocols/economics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Economics Protocols</a>
              </nav>
            </div>

            <aside className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-primary">What CTO buyers are trying to avoid</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-6">
                <li>Slow review loops that stall releases</li>
                <li>Vendor sprawl with unclear accountability</li>
                <li>Rate savings that become rework cost later</li>
                <li>Security and compliance gaps pushed back to your team</li>
              </ul>
              <div className="mt-5 border-t border-border/60 pt-4">
                <p className="text-sm font-semibold text-foreground">Best next step</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use this page to identify the broken model first, then open the matching detailed comparison page.
                </p>
              </div>
            </aside>
          </div>
        </ExecutivePanel>

        <ExecutiveSection>
          <ExecutivePanel>
            <SectionHeading
              title="How to use this comparison page"
              description="Use a simple three step workflow so the conversation stays on delivery risk and executive accountability instead of vendor marketing."
            />
            <ChecklistSteps items={checklistSteps} className="mt-6" />
          </ExecutivePanel>
        </ExecutiveSection>

        <ExecutiveSection>
          <ExecutivePanel>
            <SectionHeading
              title="Proof and outcomes executives care about"
              description="Use these outcome categories as your evaluation baseline when comparing any vendor model."
            />
            <ProofStrip items={proofMetrics} className="mt-6" />
          </ExecutivePanel>
        </ExecutiveSection>

        <ExecutiveSection>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {models.map(model => (
                  <article key={model.name} className="surface-card card-hover-lift flex h-full flex-col p-6 md:p-7 shadow-lg">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Pain Pattern</p>
                          <p className="mt-1 text-sm text-muted-foreground leading-6">{model.pain}</p>
                        </div>
                        <div className="shrink-0 rounded-lg border border-primary/20 bg-primary/10 p-2">
                          {model.icon}
                        </div>
                      </div>

                      <h2 className="mt-4 text-xl font-bold text-foreground">{model.name}</h2>

                      <div className="mt-4 grid gap-4">
                        <div className="rounded-lg border bg-background p-4">
                          <h3 className="text-sm font-semibold text-primary">What breaks for technical leaders</h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-6">{model.problem}</p>
                        </div>

                        <div className="rounded-lg border bg-background p-4">
                          <h3 className="text-sm font-semibold text-primary">Compare against these vendors</h3>
                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {model.vendors.map(vendor => (
                              <div key={vendor.href} className="flex min-w-0 items-center justify-between gap-2 rounded-md border border-primary/15 bg-primary/5 px-3 py-2">
                                <Link href={vendor.href} className="truncate text-sm font-medium text-primary hover:underline">
                                  {vendor.name}
                                </Link>
                                <a href={vendor.website} target="_blank" rel="nofollow noopener noreferrer" className="shrink-0 text-primary/70 hover:text-primary" aria-label={`Open ${vendor.name} website`}>
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-lg border bg-background p-4">
                          <h3 className="text-sm font-semibold text-primary">TeamStation response model</h3>
                          <p className="mt-2 text-sm leading-6 text-foreground" dangerouslySetInnerHTML={{ __html: model.solution }} />
                        </div>
                      </div>

                      <div className="mt-5 border-t border-border/50 pt-4">
                        <Link href={model.vendors[0]?.href ?? '/comparisons'} className="inline-flex items-center text-sm font-semibold text-primary">
                          Open comparison path <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                  </article>
              ))}
          </div>
        </ExecutiveSection>

        <ExecutiveSection>
          <ExecutivePanel>
            <SectionHeading
              title="What CTO teams should validate before choosing any vendor"
              description="Use this matrix in evaluation calls and procurement reviews. It keeps the conversation on control, coverage, and financial reality."
            />
            <div className="mt-6 overflow-x-auto rounded-lg border">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead className="bg-background">
                  <tr>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">Decision Dimension</th>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">What to Ask</th>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">Risk if Weak</th>
                    <th className="border-b px-4 py-3 text-left font-semibold text-foreground">What Good Looks Like</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      d: "Execution Control",
                      q: "Who owns architecture decisions, review standards, and escalation during delivery failure?",
                      r: "Roadmap drift, slow incident recovery, and no accountable technical owner.",
                      g: "Clear ownership, documented escalation path, and measurable review cadence.",
                    },
                    {
                      d: "Operational Coverage",
                      q: "Are devices, access, security controls, and compliance handled in the operating model?",
                      r: "Internal team becomes the hidden IT and risk manager.",
                      g: "Integrated run state controls with explicit accountability and support paths.",
                    },
                    {
                      d: "Economic Reality",
                      q: "How are delay, rework, vacancy, and management overhead modeled in cost decisions?",
                      r: "Rate card looks efficient while total delivery cost increases.",
                      g: "TCO model ties delivery behavior to financial outcomes leadership can validate.",
                    },
                  ].map((row) => (
                    <tr key={row.d} className="align-top">
                      <td className="border-b px-4 py-3 font-semibold text-primary">{row.d}</td>
                      <td className="border-b px-4 py-3 text-muted-foreground leading-6">{row.q}</td>
                      <td className="border-b px-4 py-3 text-muted-foreground leading-6">{row.r}</td>
                      <td className="border-b px-4 py-3 text-muted-foreground leading-6">{row.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ExecutivePanel>
        </ExecutiveSection>

        <ExecutiveSection>
          <ValuePropositionBlock
              pain="CTOs face hidden risks in cost, compliance, and velocity."
              stakes="Without addressing these, budgets spiral and projects miss critical deadlines."
              prescription="TeamStation AI delivers audit-ready compliance, Axiom Cortex™ cognitive vetting, and predictable TCO."
              proof="40 60% lower TCO vs legacy models. Case studies: [Currance](/case-studies), [Parsable](/case-studies/parsable)."
              ctaHref="/comparisons"
              ctaText="See All Vendor Comparisons"
          />
        </ExecutiveSection>

        <ExecutiveSection>
          <ExecutivePanel>
            <SectionHeading
              title="Related decision paths"
              description="Use these pages when the conversation needs budget validation, execution planning, or methodology proof."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { href: "/playbook/hub", title: "CTO Playbook Hub", body: "Decision frameworks for topology, economics, and risk control." },
                { href: "/playbook/latam-economics", title: "LATAM Economics", body: "Budget and operating cost logic for executive approval." },
                { href: "/playbook/tco-model", title: "TCO Model", body: "Financial model for hidden cost, delay, and delivery impact." },
                { href: "/research/hub", title: "Research Hub", body: "Methodology and evidence paths for leadership validation." },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg border bg-background p-4 transition-ui hover:border-primary/40 hover:text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-6">{item.body}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary">Open path <ArrowRight className="ml-2 h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </ExecutivePanel>
        </ExecutiveSection>

        <CTOFieldManualBlock
          title="CTO Field Manual for Vendor Comparison Decisions"
          focus="vendor model diagnosis, execution control, and cost of delivery validation"
        />

        <ExecutiveSection>
        <ExecutivePanel>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Diagnose delivery risk before you choose a vendor</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground leading-7">
                If the main issue is unclear, the comparison will be noisy. A short strategy session helps identify the real constraint first
                so the vendor decision aligns to delivery outcomes and executive accountability.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <li>Delivery constraint review</li>
                <li>Risk and coverage gap check</li>
                <li>Economic model alignment</li>
                <li>Decision path for next steps</li>
              </ul>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-primary">Strategy discussion</p>
              <p className="mt-2 text-sm text-muted-foreground leading-6">
                We only engage when there is a measurable fit. If your current model is already working, we will tell you.
              </p>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                className="cta-button mt-5"
              >
                Book strategy discussion <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </ExecutivePanel>
        </ExecutiveSection>

        <ExecutiveSection>
          <ExecutivePanel>
            <SectionHeading
              title="FAQ for executive objections"
              description="Short answers for the most common concerns during vendor evaluation and internal alignment."
            />
            <FAQList items={comparisonFaq} className="mt-6" />
          </ExecutivePanel>
        </ExecutiveSection>

        <FurtherReading comparison="bairesdev" />
      </ExecutivePageFrame>
    </main>
  );
}
