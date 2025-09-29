
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, FileSearch, Layers, HelpCircle } from 'lucide-react';
import { PSPCard, type PSPBody } from '@/components/seo/PSPCard';

const pageData = {
  "type": "comparison",
  "competitor": "Revelo",
  "pageSEO": {
    "title": "TeamStation vs Revelo: Platform vs. Pod",
    "description": "Marketplace sourcing vs Cortex-vetted squads with devices/MDM and audit evidence. A balanced verdict for CTOs.",
    "canonical": "https://cto.teamstation.dev/comparisons/revelo"
  },
  "intro": "You need elite LATAM talent, and Revelo's promise of a 14-day time-to-hire from their marketplace is compelling. But is a marketplace that handles payroll enough to de-risk your operation? This is a CTO's guide to the trade-offs between a sourcing platform and an integrated operational platform like TeamStation AI.",
  "h1": "TeamStation vs Revelo: What Actually Ships Faster?",
  "pspCards": [
    {
      "title": "Verdict Snapshot vs Revelo",
      "icon": "visibility",
      "body": {
        "problem": "<strong>Problem.</strong> Revelo offers a marketplace of pre-screened talent and handles the EOR component, which is a great start. But you're still left with significant operational gaps—device security, MDM, insurance, and audit readiness—that become your problem to solve.",
        "stakes": "<strong>Stakes.</strong> This creates a false sense of security. You've solved the payroll problem but inherited the much larger, higher-risk problems of enterprise compliance and security. One unmanaged laptop or a gap in your security posture can still block a major deal.",
        "prescription": "<strong>Prescription.</strong> Demand a complete operational wrapper, not just a partial solution. An integrated platform like TeamStation AI provides an auditable trail for every step: scientific vetting reports from our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™</a> engine, device security attestations from our MDM, and a single, accountable SLA for the entire operation.",
        "proof": "<strong>Proof.</strong> Our platform is your 'single pane of glass' for the entire nearshore operation. You see the vetting data, the device compliance status, and the onboarding checklist in one place. It replaces the fragmented responsibility of a marketplace-plus-DIY-ops model with a single, auditable system.",
        "recap": "<strong>Recap.</strong> Stop buying half a solution. Choose a platform that delivers a secure, compliant, and productive team, not just a new hire."
      }
    },
    {
      "title": "Vetting Model: Marketplace Screening vs. Axiom Cortex™",
      "icon": "hiring",
      "body": {
        "problem": "<strong>Problem.</strong> Revelo's vetting focuses on skills and English proficiency. This is a solid baseline, but it doesn't measure the deeper cognitive traits—like architectural instinct or problem-solving agility—that separate a good engineer from a great one.",
        "stakes": "<strong>Stakes.</strong> You end up with a team that can execute well-defined tasks but may struggle with novel problems, complex system design, or proactive ownership. The risk of a mis-hire who 'passed the test' but can't truly solve problems remains high.",
        "prescription": "<strong>Prescription.</strong> Move from skills testing to cognitive evaluation. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine provides scientific proof of an individual's cognitive ability. We evaluate how they think, not just what they know. You get a candidate whose 'mental shape' is mapped to your specific challenges.",
        "proof": "<strong>Proof.</strong> Our methodology, detailed in our peer-reviewed research, reduces mis-hire risk by over 90%. We provide a complete <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Evidence Locker</a> for every candidate—transcripts, scores, and rationale—so you can make a data-driven decision.",
        "recap": "<strong>Recap.</strong> Don't settle for a skills-based match. Demand scientific evidence of a candidate's cognitive ability to truly de-risk your hiring."
      }
    },
    {
      "title": "Operational Scope: EOR vs. Full Stack",
      "icon": "compliance",
      "body": {
        "problem": "<strong>Problem.</strong> Revelo's model provides talent and an Employer of Record (EOR), which handles payroll and local compliance. But you are still responsible for providing and securing laptops, managing device policies (MDM), and ensuring your security posture meets enterprise standards.",
        "stakes": "<strong>Stakes.</strong> This is the most common point of failure. A single unmanaged laptop can lead to a data breach. Without centralized device control, you cannot pass a SOC 2 audit or an enterprise security review. The 'convenience' of the marketplace is undermined by a massive, unresolved security and compliance burden.",
        "prescription": "<strong>Prescription.</strong> Outsource the entire operational stack to a single, accountable SLA. The TeamStation AI platform is a complete operational wrapper. Every engineer receives a corporate-owned, MDM-managed laptop before day one. We handle all EOR, compliance, security, and insurance. It's a secure, audit-ready team in a box.",
        "proof": "<strong>Proof.</strong> Our <a href='/trust' class='text-primary hover:underline'>Trust Center</a> details our SOC 2-aligned controls. We provide auditable evidence of device compliance, access control, and HR processes, ensuring you are enterprise-ready from day one. We absorb the risk so you can focus on building your product.",
        "recap": "<strong>Recap.</strong> Don't just solve the payroll problem. Solve the entire operational and security problem with an integrated platform."
      }
    },
    {
      "title": "Ramp, TCO & When They’re a Fit",
      "icon": "cost",
      "body": {
        "problem": "<strong>Problem.</strong> The Total Cost of Ownership (TCO) for a marketplace model is more than just the vendor's fee. You have to add the hidden costs of your own IT and security teams' time spent managing devices and compliance for your new hires.",
        "stakes": "<strong>Stakes.</strong> These hidden costs can inflate your true TCO by 20-30% or more. You're paying for a service and then paying your own team to fill the gaps. It's an inefficient use of capital that erodes your budget.",
        "prescription": "<strong>Prescription.</strong> Use a comprehensive TCO model that accounts for all costs. Our all-inclusive rate provides a predictable, CFO-ready TCO. We engineer for a fast ramp, targeting a first PR in under 10 business days, which minimizes the 'Vacancy Tax' and maximizes your ROI.",
        "proof": "<strong>Proof.</strong> Our <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO framework</a> allows you to model these hidden costs and make a data-driven business case. Revelo is a strong fit if you already have a mature, global IT and security infrastructure and only need to solve talent sourcing and payroll. For most companies, an integrated platform that bundles these services offers a faster, safer, and more capital-efficient path to scale.",
        "recap": "<strong>Recap.</strong> Choose Revelo if you have a robust internal operations team. Choose TeamStation AI if you want a single partner to handle the entire operational stack for you."
      }
    }
  ],
  "verdictRows": [
    {"criterion":"Vetting Model","teamstation":"Cognition-first (Axiom Cortex™); evidence-based","competitor":"Skills and English proficiency screening"},
    {"criterion":"Operational Scope","teamstation":"Full-stack: EOR, Devices, MDM, Security, Insurance","competitor":"Sourcing + EOR/Payroll"},
    {"criterion":"Devices & MDM","teamstation":"Corporate-owned, MDM-managed; included","competitor":"Client's responsibility"},
    {"criterion":"Security & Compliance","teamstation":"SOC 2 aligned; audit-ready from Day 1","competitor":"EOR compliance only; security is client's responsibility"},
    {"criterion":"Time-to-Offer","teamstation":"≈9 days","competitor":"≈14 days"},
    {"criterion":"Best For","teamstation":"Teams needing a complete, secure operational platform","competitor":"Teams with mature internal IT/security that only need sourcing & payroll"}
  ],
  "faq": [
    {"q":"When is Revelo a better fit than TeamStation AI?","a":"If you have a mature internal IT and security infrastructure that can handle global device management and compliance, and your primary need is to source talent and process payroll in LATAM, Revelo's model can be very effective."},
    {"q":"Does Revelo provide secure laptops for their developers?","a":"No. Device provisioning and security (MDM) are typically the client's responsibility. TeamStation AI provides a corporate-owned, MDM-managed laptop for every engineer as part of our core service."},
    {"q":"How does your vetting process differ from a marketplace like Revelo?","a":"Marketplaces typically screen for skills and experience. Our <a href='/research/axiom-cortex-scientific-report'>Axiom Cortex™</a> engine goes deeper, providing a scientific measure of a candidate's cognitive abilities, like problem-solving and architectural instinct. We de-risk the hire at a more fundamental level."},
    {"q":"Is your time-to-offer really faster?","a":"Yes. Because our vetting is so deep, clients can move to a final decision with much higher confidence after fewer interviews. This collapses the decision-making part of the funnel, leading to a faster time-to-offer."},
    {"q":"What is the real difference in your operational models?","a":"Revelo solves the 'HR' part of the problem (hiring and payroll). TeamStation AI solves the entire operational stack—HR, IT, security, legal, and compliance—under a single, accountable SLA."},
    {"q":"Can I use TeamStation AI just for sourcing and handle EOR myself?","a":"Our value is in the integrated platform. We deliver a complete, managed solution because a fragmented approach creates the exact risks (security gaps, compliance issues) that our platform is designed to eliminate."}
  ]
};

const iconMap: { [key: string]: React.FC<any> } = {
  latency: GitCompare,
  hiring: UserCheck,
  compliance: ShieldCheck,
  cost: Scale,
  visibility: FileSearch,
};

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, canonical } = pageData.pageSEO;
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export default function ReveloComparisonPage() {
  const { intro, pspCards, verdictRows, faq, h1 } = pageData;
  const siteUrl = "https://cto.teamstation.dev";
  const schema = {
    breadcrumbs: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
        { "@type": "ListItem", "position": 2, "name": "Revelo Alternative", "item": `${siteUrl}/comparisons/revelo` }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a.replace(/<[^>]*>?/gm, '') }
      }))
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.faq) }} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/comparisons" className="hover:text-foreground">All Comparisons</Link> / <span>vs. Revelo</span>
        </div>

        <header className="my-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{h1}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: intro }}></p>
        </header>

        <section className="my-24">
           <h2 className="text-3xl font-bold text-center">Verdict Snapshot</h2>
           <div className="overflow-x-auto mt-6">
                <table className="w-full min-w-[700px] text-sm text-left">
                    <thead>
                        <tr className="border-b-2 border-border">
                            <th className="p-2 font-semibold">Criterion</th>
                            <th className="p-2 font-semibold text-primary">TeamStation AI</th>
                            <th className="p-2 font-semibold">Revelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verdictRows.map(row => (
                            <tr key={row.criterion} className="border-b border-border/50">
                                <td className="p-2 font-semibold text-foreground">{row.criterion}</td>
                                <td className="p-2 text-primary">{row.teamstation}</td>
                                <td className="p-2 text-muted-foreground">{row.competitor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           </div>
        </section>

        <section className="my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pspCards.map(card => {
                    const Icon = iconMap[card.icon as keyof typeof iconMap] || HelpCircle;
                    return (
                        <PSPCard key={card.title} title={card.title} icon={<Icon className="h-8 w-8 text-primary" />} body={card.body as PSPBody} />
                    );
                })}
            </div>
        </section>

        <section className="my-24">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-8 max-w-3xl mx-auto space-y-4">
                {faq.map((item, i) => (
                    <div key={i} className="rounded-lg border bg-card p-6 shadow-lg">
                        <h3 className="font-semibold text-primary">{item.q}</h3>
                        <p className="text-muted-foreground mt-2 text-sm" dangerouslySetInnerHTML={{ __html: item.a }}></p>
                    </div>
                ))}
            </div>
        </section>

        <section className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">Ready for a True Platform Solution?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Let's move beyond sourcing and payroll. In a 15-minute call, we can build a CFO-ready business case for a nearshore platform that delivers a complete, secure, and productive team.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4">
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" className="cta-button">
                    Book a TCO Strategy Call
                </Link>
            </div>
        </section>
      </main>
    </>
  );
}
