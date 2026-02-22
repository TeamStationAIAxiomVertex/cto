
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, Code } from 'lucide-react';
import { PSPCard } from "../../../../../components/seo/PSPCard";
import CTOFieldManualBlock from "../../../../../components/seo/CTOFieldManualBlock";

export const metadata: Metadata = {
  title: 'Hire .NET Developers in Brazil | Nearshore Experts',
  description: 'Hire vetted .NET developers in Brazil with daylight overlap. Our senior C# & ASP.NET Core engineers ship secure, scalable code under a single, compliant SLA.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/hire/by-country/brazil/net',
  },
};

const pspCards = [
    {
      title: "Daylight PR Flow (No Overnight Queues)",
      icon: GitCompare,
      body: {
        "problem": "Your offshore team pushes a .NET API fix at the end of their day. You find a simple issue with an EF Core query the next morning. That question sits for 12 hours, delaying a critical bug fix.",
        "stakes": "This 'human latency tax' kills your agile velocity and forces your senior engineers into late-night coordination. Your roadmap slips, one day at a time, for easily solvable issues.",
        "prescription": "Replace the overnight queue with a daylight-native cadence. We staff pods of senior .NET engineers in Brazil with a guaranteed 4 6 hours of daily overlap, ensuring a continuous, real-time workflow.",
        "proof": "Teams adopting this model reduce PR turnaround from 36 hours to under 8. This is a systemic acceleration detailed in our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs Offshore playbook</a>.",
        "recap": "Stop letting time zones dictate your release schedule. When you <strong>hire .NET developers in Brazil</strong>, you buy back your day with a team that operates on your clock."
      }
    },
    {
      "title": "Cognition-First Hiring for .NET (Axiom Cortex™)",
      "icon": UserCheck,
      "body": {
        "problem": "You need a .NET engineer who deeply understands modern ASP.NET Core and cloud-native patterns, not just someone with legacy .NET Framework experience. Traditional screening is a lottery.",
        "stakes": "A mis-hire who can't build for the cloud will produce slow, monolithic applications that are expensive to run and hard to scale, creating significant technical debt.",
        "prescription": "Shift from resume theater to auditable evidence. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine evaluates a candidate's grasp of modern .NET architecture, dependency injection, and EF Core performance tuning. You get scientific proof of their problem-solving ability.",
        "proof": "This evidence-based approach reduces mis-hire risk by over 90%. You get a candidate whose 'mental shape' is mapped to the specific demands of building high-performance .NET applications.",
        "recap": "Stop gambling on keywords. Build your team of <strong>nearshore .NET developers in Brazil</strong> with a partner that provides data-driven proof of cognitive ability."
      }
    },
    {
      "title": "Security, Compliance & Managed Devices",
      "icon": ShieldCheck,
      "body": {
        "problem": "You want to access Brazil's .NET talent, but the operational overhead is daunting. How do you handle local labor laws, secure remote work, and manage devices?",
        "stakes": "One unmanaged laptop is a compliance nightmare. Failing to align with local labor laws creates significant legal and financial risk. Enterprise deals stall without audit-ready security evidence.",
        "prescription": "Outsource the entire operational stack to our single, accountable SLA. Our platform includes compliant EOR, SSO/SAML/SCIM, and MDM-managed laptops for every engineer. You get the talent; we handle the operational chaos.",
        "proof": "Our SOC-aligned onboarding ensures every engineer starts with a secure workstation, detailed in our <a href='/trust' class='text-primary hover:underline'>Trust Center</a>. We absorb the risk, so you can focus on velocity.",
        "recap": "Don't let operational complexity stop you. Use an integrated platform that delivers a secure and audit-ready <strong>Brazil .NET development team</strong> from the start."
      }
    },
    {
      "title": "Fast Ramp, Lower TCO, Reversible",
      "icon": Scale,
      "body": {
        "problem": "Onboarding a new engineer can take months to show productivity, and the true cost is far more than just their salary. You're paying a hidden 'time-to-productivity' tax.",
        "stakes": "A slow ramp-up means delayed features and a lower ROI. Without a clear Total Cost of Ownership (TCO) model, you can't make a strategic business case.",
        "prescription": "We engineer for a fast ramp, targeting a first PR in under 10 business days. Our all-inclusive pricing provides a predictable TCO that is often 40-60% lower than the fully-loaded cost of a US hire.",
        "proof": "Our <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO framework</a> gives you the ammunition to make a compelling case to your finance team, as shown in our <a href='/playbook/build-vs-buy' class='text-primary hover:underline'>Build vs. Buy analysis</a>.",
        "recap": "Choose a partner that provides a clear financial model and is accountable for a fast ramp-up. It's the smarter way to scale your <strong>.NET team in Brazil</strong>."
      }
    }
  ];

const country = "Brazil";
const technology = ".NET";
const siteUrl = "https://cto.teamstation.dev";

const faq = [
    {
      "q": `What core .NET skills do you vet for in ${country}?`,
      "a": `We focus on modern, cross-platform .NET (6+), with deep expertise in ASP.NET Core patterns (middleware, DI), Entity Framework Core mastery for data access, and advanced LINQ proficiency for efficient query writing.`
    },
    {
      "q": `How do you find senior .NET developers in ${country}?`,
      "a": `We use our Nebula™ Talent Graph of over 2.6 million LATAM profiles, filtering for candidates with proven experience in building and scaling production .NET systems, especially in hubs like São Paulo and Rio de Janeiro.`
    },
    {
      "q": `Is it complicated to hire .NET developers in ${country}?`,
      "a": `Not with our platform. As your Employer of Record (EOR), we handle all local legal, HR, and payroll complexities.`
    },
    {
      "q": `Can a ${country}-based .NET team work on projects involving sensitive data?`,
      "a": `Yes. Security is built-in. Every engineer gets a corporate-owned, MDM-managed laptop, and we enforce least-privilege access through SSO/SAML/SCIM from day one. Our process is SOC-aligned, as detailed in our <a href='/trust'>Trust Center</a>.`
    }
  ];

  const schema = {
  breadcrumbs: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Hire", "item": `${siteUrl}/hire` },
      { "@type": "ListItem", "position": 2, "name": "By Country", "item": `${siteUrl}/hire/by-country` },
      { "@type": "ListItem", "position": 3, "name": "Brazil", "item": `${siteUrl}/hire/by-country/brazil` },
      { "@type": "ListItem", "position": 4, "name": ".NET", "item": `${siteUrl}/hire/by-country/brazil/net` }
    ]
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Staff Augmentation",
    "provider": { "@type": "Organization", "name": "TeamStation AI" },
    "areaServed": { "@type": "Country", "name": "Brazil" },
    "description": `Hire elite .NET developers in Brazil. We provide senior, pre-vetted engineers specializing in C# and ASP.NET Core with full US time-zone overlap.`,
    "name": `Hire .NET Developers in Brazil`,
    "offers": { "@type": "Offer", "price": "Contact for pricing" }
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

export default function HireDotNetBrazilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.faq) }} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
          <Link href="/hire/by-country" className="hover:text-foreground">By Country</Link> / 
          <Link href="/hire/by-country/brazil" className="hover:text-foreground">Brazil</Link> / 
          <span>{technology}</span>
        </div>

        <header className="my-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire .NET Developers in Brazil</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: `Stop letting a 12-hour time lag kill your development velocity. Hire senior <strong>.NET developers in Brazil</strong> and integrate them directly into your US time-zone workflow. Our platform provides elite, pre-vetted C# and ASP.NET Core experts who ship secure, scalable code under a single, compliant SLA.` }}></p>
        </header>

        <section className="my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pspCards.map(card => {
                    const Icon = card.icon;
                    return (
                        <PSPCard key={card.title} title={card.title} icon={<Icon className="h-8 w-8 text-primary" />} body={card.body} />
                    );
                })}
            </div>
        </section>

        <section className="my-24">
            <h2 className="text-3xl font-bold text-center">Questions on Hiring {technology} Developers in {country}</h2>
            <div className="mt-8 max-w-3xl mx-auto space-y-4">
                {faq.map((item, i) => (
                    <div key={i} className="rounded-lg border bg-card p-6 shadow-lg">
                        <h3 className="font-semibold text-primary">{item.q}</h3>
                        <p className="text-muted-foreground mt-2 text-sm" dangerouslySetInnerHTML={{ __html: item.a }}></p>
                    </div>
                ))}
            </div>
        </section>

        <CTOFieldManualBlock
            title={`CTO Field Manual for  Teams in `}
            focus={` execution outcomes in `}
        />

        <section className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">Build Your {country} {technology} Team</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
              Let's build a TCO model for your Brazil-based .NET team and map your roles to our <a href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Axiom Cortex™</a> evaluation process.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4">
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" className="cta-button">
                    Book a 30-minute plan
                </Link>
            </div>
        </section>
      </main>
    </>
  );
}
