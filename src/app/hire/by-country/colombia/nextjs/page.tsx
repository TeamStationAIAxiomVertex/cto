
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, Layers } from 'lucide-react';
import { PSPCard } from '@/components/seo/PSPCard';

export const metadata: Metadata = {
  title: 'Hire Next.js Developers in Colombia | Nearshore Experts',
  description: 'Hire vetted Next.js developers in Colombia with daylight overlap. Our senior React engineers ship secure, high-performance applications under a single, compliant SLA.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/hire/by-country/colombia/nextjs',
  },
};

const pspCards = [
    {
      title: "Daylight PR Flow (No Overnight Queues)",
      icon: GitCompare,
      body: {
        "problem": "Your offshore team pushes a Next.js fix at the end of their day. You spot a simple issue with a Server Component the next morning. That question sits for 12 hours, delaying a critical performance improvement.",
        "stakes": "This 'human latency tax' kills your agile velocity. Your Core Web Vitals suffer, and your roadmap slips, one day at a time, for easily solvable issues.",
        "prescription": "Replace the overnight queue with a daylight-native cadence. We staff pods of senior Next.js engineers in Colombia with a guaranteed 5–7 hours of daily overlap, ensuring a continuous, real-time workflow for building high-performance web applications.",
        "proof": "Teams adopting this model reduce PR turnaround from 36 hours to under 8. This is a systemic acceleration detailed in our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs Offshore playbook</a>.",
        "recap": "Stop letting time zones dictate your release schedule. When you <strong>hire Next.js developers in Colombia</strong>, you buy back your day with a team that operates on your clock."
      }
    },
    {
      "title": "Cognition-First Hiring for Next.js (Axiom Cortex™)",
      "icon": UserCheck,
      "body": {
        "problem": "You need a Next.js engineer who deeply understands the App Router, caching strategies, and the trade-offs between Server and Client Components. Traditional screening for these nuanced skills is a lottery.",
        "stakes": "A mis-hire who misuses Client Components will build a slow, bloated application that performs poorly. A lack of caching knowledge will lead to an expensive, inefficient backend. This creates significant technical debt.",
        "prescription": "Shift from resume theater to auditable evidence. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine evaluates a candidate's grasp of modern Next.js architecture, data fetching patterns, and performance optimization. You get scientific proof of their problem-solving ability.",
        "proof": "This evidence-based approach reduces mis-hire risk by over 90%. You get a candidate whose 'mental shape' is mapped to the specific demands of building high-performance Next.js applications.",
        "recap": "Stop gambling on keywords. Build your team of <strong>nearshore Next.js developers in Colombia</strong> with a partner that provides data-driven proof of cognitive ability and framework mastery."
      }
    },
    {
      "title": "Security, Compliance & Managed Devices",
      "icon": ShieldCheck,
      "body": {
        "problem": "You want to access Colombia's Next.js talent, but the operational overhead is daunting. How do you handle local labor laws, secure remote work, and manage devices?",
        "stakes": "One unmanaged laptop is a compliance nightmare. Failing to align with local labor laws creates significant legal and financial risk. Enterprise deals stall without audit-ready security evidence.",
        "prescription": "Outsource the entire operational stack to our single, accountable SLA. Our platform includes compliant EOR, SSO/SAML/SCIM, and MDM-managed laptops for every engineer. You get the talent; we handle the operational chaos.",
        "proof": "Our SOC-aligned onboarding ensures every engineer starts with a secure workstation, detailed in our <a href='/trust' class='text-primary hover:underline'>Trust Center</a>. We absorb the risk, so you can focus on velocity.",
        "recap": "Don't let operational complexity stop you. Use an integrated platform that delivers a secure and audit-ready <strong>Colombia Next.js development team</strong> from the start."
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
        "recap": "Choose a partner that provides a clear financial model and is accountable for a fast ramp-up. It's the smarter way to scale your <strong>Next.js team in Colombia</strong>."
      }
    }
  ];

const country = "Colombia";
const technology = "Next.js";
const siteUrl = "https://cto.teamstation.dev";

const faq = [
    {
      "q": `What core Next.js skills do you vet for in ${country}?`,
      "a": `We focus on the modern App Router. Our vetting emphasizes deep understanding of Server Components, advanced data fetching and caching strategies (ISR, on-demand revalidation), and performance optimization for Core Web Vitals.`
    },
    {
      "q": `How do you find senior Next.js developers in ${country}?`,
      "a": `We use our Nebula™ Talent Graph of over 2.6 million LATAM profiles, filtering for candidates with proven experience in building production Next.js applications, especially in hubs like Bogotá and Medellín.`
    },
    {
      "q": `Is it complicated to hire Next.js developers in ${country}?`,
      "a": `Not with our platform. As your Employer of Record (EOR), we handle all local legal, HR, and payroll complexities.`
    },
    {
      "q": `Can a ${country}-based Next.js team work on projects involving sensitive data?`,
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
      { "@type": "ListItem", "position": 3, "name": "Colombia", "item": `${siteUrl}/hire/by-country/colombia` },
      { "@type": "ListItem", "position": 4, "name": "Next.js", "item": `${siteUrl}/hire/by-country/colombia/nextjs` }
    ]
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Staff Augmentation",
    "provider": { "@type": "Organization", "name": "TeamStation AI" },
    "areaServed": { "@type": "Country", "name": "Colombia" },
    "description": `Hire elite Next.js developers in Colombia. We provide senior, pre-vetted engineers specializing in the App Router and advanced React patterns with full US time-zone overlap.`,
    "name": `Hire Next.js Developers in Colombia`,
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

export default function HireNextJsColombiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.faq) }} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
          <Link href="/hire/by-country" className="hover:text-foreground">By Country</Link> / 
          <Link href="/hire/by-country/colombia" className="hover:text-foreground">Colombia</Link> / 
          <span>{technology}</span>
        </div>

        <header className="my-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire Next.js Developers in Colombia</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: `Stop letting a slow, bloated frontend kill your user experience. Hire senior <strong>Next.js developers in Colombia</strong> and integrate them directly into your US time-zone workflow. Our platform provides elite, pre-vetted experts who ship secure, high-performance React applications under a single, compliant SLA.` }}></p>
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

        <section className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">Build Your {country} {technology} Team</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
              Let's build a TCO model for your Colombia-based Next.js team and map your roles to our <a href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Axiom Cortex™</a> evaluation process.
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
