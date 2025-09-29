
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, FileSearch, HelpCircle } from 'lucide-react';
import { PSPCard, type PSPBody } from '@/components/seo/PSPCard';

const pageData = {
  "type": "comparison",
  "competitor": "Nearsure",
  "pageSEO": {
    "title": "Nearsure Alternative: TeamStation AI vs. Nearsure",
    "description": "Compare our integrated nearshore platform with Nearsure's traditional staff augmentation for LATAM developers.",
    "canonical": "https://cto.teamstation.dev/comparisons/nearsure"
  },
  "intro": "You need elite LATAM talent, and Nearsure's focus on nearshore staff augmentation is a step in the right direction. But is finding talent enough? This is a CTO's guide to the trade-offs between a recruiting partner and an integrated platform that handles the entire operational stack.",
  "h1": "TeamStation vs Nearsure: What Actually Ships Faster?",
  "pspCards": [
    {
      "title": "Verdict Snapshot vs Nearsure",
      "icon": "visibility",
      "body": {
        "problem": "<strong>Problem.</strong> Nearsure is effective at sourcing talent, but their model stops at placement. You get a developer, but you inherit the entire operational burden: local labor law compliance, device security, IT management, and insurance. The 'simple' hire becomes a complex, multi-vendor problem you have to solve.",
        "stakes": "<strong>Stakes.</strong> This creates significant hidden costs and unmitigated risk. Your IT and HR teams are pulled into work they aren't equipped for, and a single unmanaged laptop can become a compliance disaster that puts enterprise deals at risk. You're paying for a developer, then paying again in internal time and risk to manage them.",
        "prescription": "<strong>Prescription.</strong> Demand a complete operational platform, not just a recruiting service. An integrated platform like TeamStation AI provides a single, accountable SLA for the entire nearshore operation. We bundle talent, EOR, secure devices, and compliance into one predictable package.",
        "proof": "<strong>Proof.</strong> Our platform is your 'single pane of glass.' You see the scientific vetting data from <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™</a>, the compliance status of their managed device, and the onboarding checklist in one place. It replaces a fragmented, high-risk approach with a secure, auditable system.",
        "recap": "<strong>Recap.</strong> Stop buying half a solution. Choose a platform that delivers a secure, productive team, not just a new hire."
      }
    },
    {
      "title": "Vetting Model: 'AI Recruiter' vs. Cognitive AI",
      "icon": "hiring",
      "body": {
        "problem": "<strong>Problem.</strong> Nearsure uses an 'AI recruiter' to speed up sourcing, which is an improvement over manual methods. However, the final evaluation still relies on traditional interviews, which are prone to the same biases and false positives as any standard hiring funnel. It's faster sourcing, but not necessarily more accurate vetting.",
        "stakes": "<strong>Stakes.</strong> This means the risk of a mis-hire remains high. You can still end up with a candidate who interviews well but lacks the deep problem-solving skills to handle complex challenges, leading to lost time, money, and team morale.",
        "prescription": "<strong>Prescription.</strong> Move from faster sourcing to more accurate, evidence-based vetting. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine provides scientific proof of an individual's cognitive ability. We evaluate how they think, not just what's on their resume, ensuring a candidate's 'mental shape' maps to your specific needs.",
        "proof": "<strong>Proof.</strong> Our methodology, detailed in our peer-reviewed research, reduces mis-hire risk by over 90%. We provide a complete <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Evidence Locker</a> for every candidate, giving you a data-driven and auditable hiring decision.",
        "recap": "<strong>Recap.</strong> Don't just source faster; hire better. Demand scientific evidence of a candidate's ability to truly de-risk your most critical hires."
      }
    },
    {
      "title": "Operational Scope: Recruiting vs. Full Stack",
      "icon": "compliance",
      "body": {
        "problem": "<strong>Problem.</strong> A traditional staff augmentation vendor's job is done once the contract is signed. You are left to figure out how to compliantly hire the person, how to provide and secure their laptop, and how to ensure your security posture meets enterprise standards.",
        "stakes": "<strong>Stakes.</strong> This is the most common point of failure. A single unmanaged laptop can fail a SOC 2 audit. Misunderstanding local labor laws creates legal exposure. You're not just a CTO; you're now a global IT, HR, and legal manager.",
        "prescription": "<strong>Prescription.</strong> Outsource the entire operational stack to a single, accountable SLA. The TeamStation AI platform is a complete operational wrapper. Every engineer receives a corporate-owned, MDM-managed laptop before day one. We handle all EOR, compliance, security, and insurance. It's a secure, audit-ready team in a box.",
        "proof": "<strong>Proof.</strong> Our <a href='/trust' class='text-primary hover:underline'>Trust Center</a> details our SOC 2-aligned controls. We provide auditable evidence of device compliance, access control, and HR processes, ensuring you are enterprise-ready from day one. We absorb the risk so you can focus on building your product.",
        "recap": "<strong>Recap.</strong> Don't just augment your staff; augment your entire operational capability. Choose an integrated platform that delivers a secure and compliant team, not just a person."
      }
    },
    {
      "title": "Ramp, TCO & When They’re a Fit",
      "icon": "cost",
      "body": {
        "problem": "<strong>Problem.</strong> The low hourly rate from a traditional vendor is not your Total Cost of Ownership (TCO). You must add the hidden costs of your own team's time spent managing vendors, plus the direct costs of EOR, IT, legal, and security services you now have to procure yourself.",
        "stakes": "<strong>Stakes.</strong> These hidden costs can inflate your true TCO by 30-50% or more. You win the hourly rate argument with Finance but lose the war on budget and velocity. It's a classic false economy that puts your roadmap at risk.",
        "prescription": "<strong>Prescription.</strong> Use a comprehensive TCO model that accounts for all costs. Our all-inclusive rate provides a predictable, CFO-ready TCO. We engineer for a fast ramp, targeting a first PR in under 10 business days, which minimizes the 'Vacancy Tax' and maximizes your ROI.",
        "proof": "<strong>Proof.</strong> Our <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO framework</a> allows you to model these hidden costs. Nearsure is a fit if you have a mature internal infrastructure to manage global HR, IT, and security. For most companies, our integrated platform offers a faster, safer, and more capital-efficient path to scale.",
        "recap": "<strong>Recap.</strong> Choose Nearsure if you just need a recruiting partner. Choose TeamStation AI if you need a complete operational platform for your nearshore team."
      }
    }
  ],
  "verdictRows": [
    {"criterion":"Vetting Model","teamstation":"Cognition-first (Axiom Cortex™); evidence-based","competitor":"'AI Recruiter' for sourcing + traditional interviews"},
    {"criterion":"Operational Scope","teamstation":"Full-stack: EOR, Devices, MDM, Security, Insurance","competitor":"Recruiting/Placement only"},
    {"criterion":"Devices & MDM","teamstation":"Corporate-owned, MDM-managed; included","competitor":"Client's responsibility"},
    {"criterion":"EOR / Compliance","teamstation":"Bundled as a core service","competitor":"Client's responsibility to source and manage"},
    {"criterion":"Pricing Posture","teamstation":"All-in pod rate; predictable TCO for talent capacity","competitor":"Recruiting fees or staff augmentation rates (no ops included)"},
    {"criterion":"Time-to-Offer","teamstation":"≈9 days","competitor":"Varies; sourcing is fast but client must manage hiring process"},
    {"criterion":"Best For","teamstation":"Teams needing a complete, secure operational platform","competitor":"Teams with mature internal ops who only need sourcing help"}
  ],
  "faq": [
    {"q":"When is Nearsure a better fit than TeamStation AI?","a":"If you have a robust internal HR, legal, and IT infrastructure capable of managing international employment, compliance, and device security, Nearsure can be an effective partner for sourcing LATAM talent."},
    {"q":"Does Nearsure provide secure laptops for their developers?","a":"No. Device provisioning and security (MDM) are the client's responsibility. TeamStation AI provides a corporate-owned, MDM-managed laptop for every engineer as part of our core service."},
    {"q":"How is your vetting process different from Nearsure's 'AI Recruiter'?","a":"Nearsure's AI focuses on sourcing efficiency. Our <a href='/research/axiom-cortex-scientific-report'>Axiom Cortex™</a> focuses on vetting accuracy, providing a scientific measure of a candidate's cognitive abilities to de-risk the hiring decision at a more fundamental level."},
    {"q":"What's the real difference in your operational models?","a":"Nearsure solves the 'finding talent' problem. TeamStation AI solves the entire operational stack—finding, hiring, paying, securing, and managing—under a single, accountable SLA."},
    {"q":"Is the Total Cost of Ownership (TCO) really that different?","a":"Yes. With Nearsure, you pay their fee plus the separate, unbundled costs of EOR, IT management, legal review, and your internal team's time. Our all-inclusive rate bundles these, leading to a lower and more predictable TCO. See our <a href='/playbook/tco-model'>TCO framework</a>."},
    {"q":"Can I trial an engineer from TeamStation AI?","a":"Yes. We often begin with a scoped 3-6 month engagement. This allows you to validate the team's performance and our platform's value before committing to a larger partnership."}
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

export default function NearsureComparisonPage() {
  const { intro, pspCards, verdictRows, faq, h1 } = pageData;
  const siteUrl = "https://cto.teamstation.dev";
  const schema = {
    breadcrumbs: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
        { "@type": "ListItem", "position": 2, "name": "Nearsure Alternative", "item": `${siteUrl}/comparisons/nearsure` }
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
          <Link href="/comparisons" className="hover:text-foreground">All Comparisons</Link> / <span>vs. Nearsure</span>
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
                            <th className="p-2 font-semibold">Nearsure</th>
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
            <h2 className="text-2xl font-bold text-foreground">Ready for an Integrated Platform?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Let's move beyond sourcing and build a CFO-ready business case for a nearshore platform that delivers a complete, secure, and productive team.
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
