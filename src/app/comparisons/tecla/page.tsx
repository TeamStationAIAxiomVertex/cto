
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, FileSearch, HelpCircle } from 'lucide-react';
import { PSPCard, type PSPBody } from '@/components/seo/PSPCard';
import { JsonLd } from '@/components/seo/JsonLd';

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
   {
     "@type": "Question",
     "name": "How does TeamStation AI compare to BairesDev?",
     "acceptedAnswer": { "@type": "Answer", "text": "BairesDev focuses on staffing volume, while TeamStation AI delivers vetted nearshore squads, compliance, and single-SLA governance designed for U.S. CTOs and CFOs." }
   },
   {
     "@type": "Question",
     "name": "What are common issues with legacy vendors like BairesDev?",
     "acceptedAnswer": { "@type": "Answer", "text": "Clients report long hiring cycles, variable quality, and vendor sprawl. TeamStation AI eliminates these with cognitive vetting and integrated compliance." }
   }
 ]
};

const pageData = {
  "type": "comparison",
  "competitor": "TECLA",
  "pageSEO": {
    "title": "TECLA Alternative: TeamStation AI vs. TECLA",
    "description": "Compare our integrated platform with EOR, device management, and AI-vetting against TECLA's talent marketplace for hiring LATAM developers.",
    "canonical": "https://cto.teamstation.dev/comparisons/tecla"
  },
  "intro": "You're sourcing LATAM talent, and TECLA's marketplace offers access. But is finding a developer the same as building a secure, productive team? This CTO's guide compares a talent marketplace with TeamStation AI's integrated platform, which bundles scientific vetting, device security, and full compliance into a single, accountable SLA.",
  "h1": "TeamStation AI vs. TECLA: What Ships Faster?",
  "pspCards": [
    {
      "title": "Verdict Snapshot vs TECLA",
      "icon": "visibility",
      "body": {
        "problem": "<strong>Problem.</strong> TECLA is a talent marketplace that connects you with engineers. But their model stops there. You get a candidate, but you inherit the entire operational risk and complexity: managing device security, compliance, local labor laws, and insurance.",
        "stakes": "<strong>Stakes.</strong> This creates significant hidden costs and unmitigated security risks. Your IT and HR teams are pulled into managing global compliance they aren't equipped for, and one unmanaged laptop can fail an enterprise audit, blocking a major deal.",
        "prescription": "<strong>Prescription.</strong> Demand a complete operational platform, not just a talent source. An integrated platform like TeamStation AI provides a single, accountable SLA for the entire nearshore operation. We bundle elite talent, scientific vetting with <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™</a>, EOR, secure devices, and compliance into one predictable package.",
        "proof": "<strong>Proof.</strong> Our platform is your 'single pane of glass.' You see the auditable vetting data, the compliance status of their managed device, and the onboarding checklist in one place. It replaces a fragmented, high-risk approach with a secure, unified system.",
        "recap": "<strong>Recap.</strong> Stop buying half a solution. Choose a platform that delivers a secure, compliant, and productive team, not just a new hire."
      }
    },
    {
      "title": "Vetting Model: Cognitive AI vs. Marketplace Screening",
      "icon": "hiring",
      "body": {
        "problem": "<strong>Problem.</strong> Marketplace vetting is designed to qualify talent for a broad audience. It relies on self-reported skills and basic technical tests, which is a good baseline but doesn't provide a deep signal on a candidate's ability to solve your specific, complex problems.",
        "stakes": "<strong>Stakes.</strong> You risk hiring a developer who is technically competent but lacks the architectural instinct or problem-solving agility to navigate ambiguity and drive a feature to completion. The risk of a mis-hire who 'passed the test' but can't truly innovate remains high.",
        "prescription": "<strong>Prescription.</strong> Move from skills testing to scientific, cognitive evaluation. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine provides proof of an individual's cognitive abilities, ensuring their 'mental shape' is a precise match for your challenges. We're not just checking if they can code; we're validating how they think.",
        "proof": "<strong>Proof.</strong> Our methodology, detailed in our peer-reviewed research, reduces mis-hire risk by over 90%. We provide a complete <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Evidence Locker</a> for every candidate, giving you a data-driven and auditable hiring decision.",
        "recap": "<strong>Recap.</strong> Don't settle for a skills-based match. Demand scientific evidence of a candidate's cognitive ability to truly de-risk your most critical hires."
      }
    },
    {
      "title": "Operations: Integrated Platform vs. DIY Security & Compliance",
      "icon": "compliance",
      "body": {
        "problem": "<strong>Problem.</strong> The TECLA model solves sourcing, but you are still responsible for providing and securing laptops, managing device policies (MDM), and ensuring your security posture meets enterprise standards. This is a massive, unresolved operational burden.",
        "stakes": "<strong>Stakes.</strong> This is the most common point of failure for remote teams. One unmanaged laptop can lead to a data breach or a failed SOC 2 audit. You're not just a CTO; you become a global IT, HR, and risk manager overnight, pulling focus from your core mission.",
        "prescription": "<strong>Prescription.</strong> Outsource the entire operational stack to a single, accountable SLA. The TeamStation AI platform is a complete operational wrapper. Every engineer receives a corporate-owned, MDM-managed laptop before day one. We handle all EOR, compliance, security, and insurance. It's a secure, audit-ready team in a box.",
        "proof": "<strong>Proof.</strong> Our <a href='/trust' class='text-primary hover:underline'>Trust Center</a> details our SOC 2-aligned controls. We provide auditable evidence of device compliance, access control, and HR processes, ensuring you are enterprise-ready from day one. We absorb the risk so you can focus on building product.",
        "recap": "<strong>Recap.</strong> Don't just solve the sourcing problem. Solve the entire operational and security problem with an integrated platform."
      }
    },
    {
      "title": "TCO: All-Inclusive Rate vs. Unbundled Costs",
      "icon": "cost",
      "body": {
        "problem": "<strong>Problem.</strong> A marketplace model's hourly rate or placement fee is deceptive. It's not your Total Cost of Ownership (TCO). You must add the significant unbundled costs of EOR services, IT management, legal review, and your internal team's time.",
        "stakes": "<strong>Stakes.</strong> These hidden costs can easily inflate your true TCO by 30-50% or more. You win the hourly rate argument with Finance but lose the war on budget and velocity. It's a classic false economy that puts your roadmap at risk.",
        "prescription": "<strong>Prescription.</strong> Use a comprehensive TCO model. Our all-inclusive rate provides a predictable, CFO-ready TCO. We engineer for a fast ramp, targeting a first PR in under 10 business days. This minimizes the 'Vacancy Tax' and maximizes your ROI.",
        "proof": "<strong>Proof.</strong> Our <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO framework</a> allows you to model these hidden costs and make a data-driven business case. By factoring in velocity and risk, our platform often delivers a 40-60% lower true TCO than a fragmented, multi-vendor approach.",
        "recap": "<strong>Recap.</strong> Choose a partner that provides a predictable TCO, not just an attractive hourly rate. It's the only way to make a sound financial decision."
      }
    }
  ],
  "verdictRows": [
    {"criterion":"Vetting Model","teamstation":"Cognition-first (Axiom Cortex™); evidence-based","competitor":"Marketplace screening; skills and experience focus"},
    {"criterion":"Operational Scope","teamstation":"Full-stack: Sourcing, Vetting, EOR, Devices, Security, Insurance","competitor":"Sourcing-focused; client handles most operations"},
    {"criterion":"Devices & MDM","teamstation":"Corporate-owned, MDM-managed; included","competitor":"Client's responsibility"},
    {"criterion":"Pricing Model","teamstation":"All-in pod rate; predictable TCO","competitor":"Placement fees or hourly rates (ops not included)"},
    {"criterion":"Best For","teamstation":"Teams needing a complete, secure LATAM operational platform","competitor":"Teams with mature internal ops who just need a sourcing channel"}
  ],
  "faq": [
    {"q":"When is TECLA a better fit than TeamStation AI?","a":"If you have a mature internal HR, IT, and security infrastructure capable of managing a global workforce and your primary need is simply a channel to source LATAM talent, TECLA's marketplace model can be effective."},
    {"q":"How does your vetting process differ from a talent marketplace?","a":"Talent marketplaces vet for broad technical competency. Our <a href='/research/axiom-cortex-scientific-report'>Axiom Cortex™</a> engine vets for a deep cognitive and cultural fit for your specific role. We provide scientific evidence of problem-solving ability, de-risking the hire at a more fundamental level."},
    {"q":"Does TECLA provide secure laptops for their talent?","a":"No. Like most marketplaces, device provisioning and security (MDM) are the client's responsibility. TeamStation AI provides a corporate-owned, MDM-managed laptop for every engineer as part of our core service."},
    {"q":"What is the main difference in your operational models?","a":"TECLA provides access to talent. TeamStation AI provides a complete, managed operating system for that talent, including legal, HR, IT, security, and compliance, all under a single SLA."},
    {"q":"How does the Total Cost of Ownership (TCO) compare?","a":"With a marketplace, you pay their fee plus the unbundled costs of EOR, IT, legal, and your internal team's time. Our all-inclusive rate bundles these, leading to a lower and more predictable TCO. See our <a href='/playbook/tco-model'>TCO framework</a> to compare."},
    {"q":"Why specialize in an integrated platform instead of just sourcing?","a":"Because sourcing is only 20% of the problem. A fragmented approach creates the exact security and operational risks our platform is designed to eliminate. We solve the whole problem to ensure your success."}
  ]
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

const iconMap: { [key: string]: React.FC<any> } = {
  visibility: FileSearch,
  hiring: UserCheck,
  compliance: ShieldCheck,
  cost: Scale,
};

export default function TeclaComparisonPage() {
  const { intro, pspCards, verdictRows, faq, h1 } = pageData;
  const siteUrl = "https://cto.teamstation.dev";
  const schema = {
    breadcrumbs: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
        { "@type": "ListItem", "position": 2, "name": "TECLA Alternative", "item": `${siteUrl}/comparisons/tecla` }
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
      <JsonLd data={faqSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.faq) }} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/comparisons" className="hover:text-foreground">All Comparisons</Link> / <span>vs. TECLA</span>
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
                            <th className="p-2 font-semibold">TECLA</th>
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
                Move beyond sourcing and build a CFO-ready business case for a nearshore platform that delivers a complete, secure, and productive team.
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
