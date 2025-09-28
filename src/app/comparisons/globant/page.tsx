
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, FileSearch, Layers, HelpCircle } from 'lucide-react';
import { PSPCard, type PSPBody } from '@/components/seo/PSPCard';

const pageData = {
  "type": "comparison",
  "competitor": "Globant",
  "pageSEO": {
    "title": "TeamStation vs Globant: Daylight Delivery",
    "description": "Compare our team-building platform with Globant's project outsourcing model. See how Cortex-vetted pods with device control and measurable PR flow differ from the global SI posture.",
    "canonical": "https://cto.teamstation.dev/comparisons/globant"
  },
  "intro": "You need to scale engineering, and Globant's global reach is impressive. But are you buying a team that integrates, or are you outsourcing your architecture? This is a CTO's guide to the trade-offs between a Systems Integrator (SI) model and TeamStation AI's integrated platform, which gives you direct control over elite, pre-vetted LATAM pods.",
  "h1": "TeamStation vs Globant: What Actually Ships Faster?",
  "pspCards": [
    {
      "title": "Verdict Snapshot vs Globant",
      "icon": "visibility",
      "body": {
        "problem": "<strong>Problem.</strong> Choosing Globant feels like buying a black box. You get a project quote, but have zero visibility into the individual engineers, their cognitive abilities, or the security of their work environment. You're buying a brand, not a transparent system.",
        "stakes": "<strong>Stakes.</strong> This opacity creates massive risk. You could be staffed with junior talent on a senior budget. The architecture might not align with your long-term vision, creating expensive integration debt. You're ceding control of your core IP to a vendor's process.",
        "prescription": "<strong>Prescription.</strong> Demand evidence and control. An integrated platform like TeamStation AI gives you an auditable trail: scientific vetting reports from <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™</a>, device security attestations from our MDM, and direct management of your team. It's a system built for visibility, not vendor lock-in.",
        "proof": "<strong>Proof.</strong> Our platform is your 'single pane of glass.' You see the evidence for a candidate's skills, you own the roadmap, and you control the engineering culture. We provide the talent and the secure operational wrapper; you drive the outcome.",
        "recap": "<strong>Recap.</strong> Stop outsourcing your brain. Choose a partner that gives you the data and control to de-risk your most critical projects."
      }
    },
    {
      "title": "Vetting Model: Team Augmentation vs. Project Outsourcing",
      "icon": "hiring",
      "body": {
        "problem": "<strong>Problem.</strong> Globant sells project outcomes, not talent transparency. Their internal staffing process is opaque. You get the team they assign, not necessarily the team you need. It’s a model optimized for their resource allocation, not your specific technical challenges.",
        "stakes": "<strong>Stakes.</strong> This is the core conflict of the SI model for staff augmentation. You might get a 'B-team' staffed with whoever is on the bench, leading to slower delivery and lower quality. You have no way to verify the seniority or specific skills of the individuals building your product.",
        "prescription": "<strong>Prescription.</strong> Hire the engineer, not the project. We are purpose-built for staff augmentation. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine provides scientific proof of an individual's cognitive ability, ensuring you know exactly who you're hiring and that they have the right 'mental shape' to solve your problems.",
        "proof": "<strong>Proof.</strong> Our process delivers a full <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Evidence Locker</a> for every candidate. This reduces mis-hire risk by over 90% and ensures you are building your team with individuals who have been scientifically vetted for excellence.",
        "recap": "<strong>Recap.</strong> Don't buy a black box team. Build your own elite squad with a partner that provides radical transparency into talent quality."
      }
    },
    {
      "title": "Control & Culture: Integration vs. Isolation",
      "icon": "compliance",
      "body": {
        "problem": "<strong>Problem.</strong> When you hire a large SI, you are outsourcing your engineering culture. Their teams operate within their own ecosystem, with their own processes and tools. The team is not truly integrated into yours.",
        "stakes": "<strong>Stakes.</strong> This leads to long-term dependency, architectural drift, and a painful integration process when the project is 'done.' The knowledge and context built during the project walk out the door with the vendor team.",
        "prescription": "<strong>Prescription.</strong> Own your culture and your roadmap. Our model is built for control and integration. We provide elite, pre-vetted LATAM engineers who join your teams, adopt your rituals (stand-ups, PR reviews, sprint planning), and work in your toolchain. They are your team members, just on our payroll.",
        "proof": "<strong>Proof.</strong> Our <a href='/process' class='text-primary hover:underline'>structured onboarding process</a> ensures engineers are Day-1 ready in your environment, targeting a first PR in under 10 business days. This leads to deep integration and knowledge retention, not vendor lock-in.",
        "recap": "<strong>Recap.</strong> Don't rent a siloed team. Build an integrated one. Choose a partner that empowers your leadership, doesn't replace it."
      }
    },
    {
      "title": "Ramp, TCO & When They’re a Fit",
      "icon": "cost",
      "body": {
        "problem": "<strong>Problem.</strong> A fixed-bid project from an SI seems predictable, but it often hides the massive Total Cost of Ownership (TCO) in vendor management, change orders, and the cost of eventually reintegrating the outsourced project back into your core systems.",
        "stakes": "<strong>Stakes.</strong> You pay a premium for the project management layer, and any deviation from the original scope results in expensive change orders. The upfront 'predictability' quickly becomes a source of budget overruns and friction.",
        "prescription": "<strong>Prescription.</strong> Focus on a predictable TCO for building capacity, not just a project price. Our all-inclusive rate gives you a clear, CFO-ready TCO for elite engineering talent. By bundling all operational costs, we deliver a lower true cost than managing an SI engagement.",
        "proof": "<strong>Proof.</strong> Our <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO framework</a> demonstrates how our model delivers a 40-60% lower true TCO than a fragmented approach. Globant is a world-class fit for massive, multi-year digital transformation projects where you want to outsource the entire function. For CTOs who need to augment their existing teams with top-tier talent they can direct, our integrated platform is the faster, safer, and more capital-efficient choice.",
        "recap": "<strong>Recap.</strong> Choose Globant for large-scale outsourcing. Choose TeamStation AI for building and scaling your own high-performing nearshore team."
      }
    }
  ],
  "verdictRows": [
    {"criterion":"Vetting Model","teamstation":"Cognition-first (Axiom Cortex™); transparent evidence","competitor":"Internal project staffing; opaque to client"},
    {"criterion":"Best For","teamstation":"Team augmentation; client-led projects","competitor":"Full project outsourcing; digital transformation"},
    {"criterion":"Control & Culture","teamstation":"Client retains full control over architecture and team culture","competitor":"Vendor controls process and culture"},
    {"criterion":"Pricing Posture","teamstation":"All-in pod rate; predictable TCO for talent capacity","competitor":"Project-based or SOW-based pricing"},
    {"criterion":"Devices & MDM","teamstation":"Corporate-owned, MDM-managed; included","competitor":"Managed within their environment; no direct client control"},
    {"criterion":"Identity (SSO/SCIM)","teamstation":"Integrated with client's IdP from Day 1","competitor":"Managed within their own corporate systems"},
    {"criterion":"Time-zone Overlap","teamstation":"Guaranteed 4-8 hours daily overlap","competitor":"Varies; global delivery model, not LATAM-specific"},
    {"criterion":"Ramp Speed","teamstation":"First PR targeted in <10 business days","competitor":"Varies by project scope and SOW"},
    {"criterion":"Core Competency","teamstation":"Building & operating elite nearshore engineering teams","competitor":"Large-scale systems integration & digital consulting"}
  ],
  "faq": [
    {"q":"When is Globant a better fit than TeamStation AI?","a":"If your goal is to outsource an entire, well-defined digital transformation project and hand off management responsibility to a large-scale Systems Integrator, Globant is a world-class choice. They are built for taking on massive projects end-to-end."},
    {"q":"How is your vetting process different if I'm just augmenting my team?","a":"Our process is designed specifically for augmentation. We vet for individuals with high 'Collaborative Mindset' and 'Learning Orientation' because we know they need to integrate deeply with your existing team and culture. We provide you with a full <a href='/technical-interview-evaluation'>Evidence Locker</a> for each candidate, giving you transparency that project-based outsourcing doesn't offer."},
    {"q":"Does TeamStation provide Project Managers?","a":"While our core model is providing elite engineers that you manage, we can and often do provide full pods that include Product Managers, Delivery Managers, and QA Leads when the engagement requires it. It's a flexible model designed to fit your needs."},
    {"q":"Can a TeamStation AI team work on a fixed-scope project?","a":"Yes. We can operate on a time-and-materials basis or scope out a fixed-price SOW for a specific outcome. The key difference is that you retain full transparency and direct access to the team, their vetting data, and their security posture."},
    {"q":"How do you ensure your team integrates with our tools and processes?","a":"Our onboarding process is built around toolchain convergence. From Day 1, our engineers are in your Slack, your Jira, your GitHub, and your stand-ups. They adopt your rituals, not the other way around."},
    {"q":"What if I need to scale the team up or down?","a":"Our model is elastic. You can scale your team up with new, fully-vetted engineers or scale down with a standard notice period, giving you far more flexibility than a rigid, multi-year SI contract."}
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
  latency: GitCompare,
  hiring: UserCheck,
  compliance: ShieldCheck,
  cost: Scale,
  visibility: FileSearch,
};

export default function GlobantComparisonPage() {
  const { intro, pspCards, verdictRows, faq, h1 } = pageData;
  const siteUrl = "https://cto.teamstation.dev";
  const schema = {
    breadcrumbs: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Comparisons", "item": `${siteUrl}/comparisons` },
        { "@type": "ListItem", "position": 2, "name": "Globant Alternative", "item": `${siteUrl}/comparisons/globant` }
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
          <Link href="/comparisons" className="hover:text-foreground">All Comparisons</Link> / <span>vs. Globant</span>
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
                            <th className="p-2 font-semibold">Globant</th>
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
            <h2 className="text-2xl font-bold text-foreground">Ready for a Real TCO Analysis?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Let's move beyond project quotes. In a 15-minute call, we can build a CFO-ready business case for a nearshore platform that delivers predictable velocity and lower total cost of ownership.
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

    