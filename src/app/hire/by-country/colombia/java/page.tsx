
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, Code } from 'lucide-react';
import { PSPCard } from "@/components/seo/PSPCard";
import CTOFieldManualBlock from "../../../../../components/seo/CTOFieldManualBlock";
import ServiceSchema from "@/components/ServiceSchema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: 'Hire Java Developers in Colombia | Nearshore Experts',
  description: 'Hire vetted Java developers in Colombia with daylight overlap. Senior Spring Boot engineers under one compliant SLA.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/hire/by-country/colombia/java',
  },
};

const pspCards = [
    {
      title: "Daylight PR Flow (No Overnight Queues)",
      icon: GitCompare,
      body: {
        "problem": "Your offshore team pushes a Spring Boot fix at the end of their day. You spot an issue with a JPA query the next morning. That simple question sits for 12 hours, delaying a critical bug fix.",
        "stakes": "This 'human latency tax' kills your agile velocity and forces your senior engineers into late-night coordination. Your enterprise services roadmap slips, one day at a time.",
        "prescription": "Replace the overnight queue with a daylight-native cadence. We staff pods of senior Java engineers in Colombia with a guaranteed 5 7 hours of daily overlap, ensuring a continuous, real-time workflow.",
        "proof": "Teams adopting this model reduce PR turnaround from 36 hours to under 8. This is a systemic acceleration detailed in our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs Offshore playbook</a>.",
        "recap": "Stop letting time zones dictate your release schedule. When you <strong>hire Java developers in Colombia</strong>, you buy back your day with a team that operates on your clock."
      }
    },
    {
      "title": "Cognition-First Hiring for Java (Axiom Cortex™)",
      "icon": UserCheck,
      "body": {
        "problem": "You need a Java engineer who thinks in terms of the JVM, not just someone who lists 'Spring Boot' on their resume. Traditional screening can't tell the difference between a legacy J2EE developer and a modern cloud-native expert.",
        "stakes": "A mis-hire who doesn't understand JVM tuning or modern microservice patterns will build slow, monolithic applications that are expensive to run and create significant technical debt.",
        "prescription": "Shift from resume theater to auditable evidence. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine evaluates a candidate's grasp of modern Java architecture, JVM internals, and microservice resiliency patterns. You get scientific proof of their problem-solving ability.",
        "proof": "This evidence-based approach reduces mis-hire risk by over 90%. You get a candidate whose 'mental shape' is mapped to the specific demands of building high-performance Java systems.",
        "recap": "Stop gambling on keywords. Build your team of <strong>nearshore Java developers in Colombia</strong> with a partner that provides data-driven proof of cognitive ability."
      }
    },
    {
      "title": "Security, Compliance & Managed Devices",
      "icon": ShieldCheck,
      "body": {
        "problem": "You want to access Colombia's Java talent, but the operational overhead is daunting. How do you handle local labor laws, secure remote work, and manage devices?",
        "stakes": "One unmanaged laptop is a compliance nightmare. Failing to align with local labor laws creates significant legal and financial risk. Enterprise deals stall without audit-ready security evidence.",
        "prescription": "Outsource the entire operational stack to our single, accountable SLA. Our platform includes compliant EOR, SSO/SAML/SCIM, and MDM-managed laptops for every engineer. You get the talent; we handle the operational chaos.",
        "proof": "Our SOC-aligned onboarding ensures every engineer starts with a secure workstation, detailed in our <a href='/trust' class='text-primary hover:underline'>Trust Center</a>. We absorb the risk, so you can focus on velocity.",
        "recap": "Don't let operational complexity stop you. Use an integrated platform that delivers a secure and audit-ready <strong>Colombia Java development team</strong> from the start."
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
        "recap": "Choose a partner that provides a clear financial model and is accountable for a fast ramp-up. It's the smarter way to scale your <strong>Java team in Colombia</strong>."
      }
    }
  ];

const country = "Colombia";
const technology = "Java";
const siteUrl = "https://cto.teamstation.dev";

const faq = [
    {
      "q": `What core Java skills do you vet for in ${country}?`,
      "a": `We focus on modern Java (11+) and deep expertise in the Spring Boot ecosystem, including Spring Data JPA, Spring Security, and building cloud-native microservices. We also assess knowledge of JVM tuning and performance best practices.`
    },
    {
      "q": `How do you find senior Java developers in ${country}?`,
      "a": `We use our Nebula™ Talent Graph of over 2.6 million LATAM profiles, filtering for candidates with proven experience in building and scaling enterprise-grade Java systems, particularly from the major tech hubs of Bogotá and Medellín.`
    },
    {
      "q": `Is it complicated to hire Java developers in ${country}?`,
      "a": `Not with our platform. As your Employer of Record (EOR), we handle all local legal, HR, and payroll complexities.`
    },
    {
      "q": `Can a ${country}-based Java team work on projects involving sensitive data?`,
      "a": `Yes. Security is built-in. Every engineer gets a corporate-owned, MDM-managed laptop, and we enforce least-privilege access through SSO/SAML/SCIM from day one. Our process is SOC-aligned, as detailed in our <a href='/trust'>Trust Center</a>.`
    }
  ];

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Hire", "item": `${siteUrl}/hire` },
    { "@type": "ListItem", "position": 2, "name": "By Country", "item": `${siteUrl}/hire/by-country` },
    { "@type": "ListItem", "position": 3, "name": "Colombia", "item": `${siteUrl}/hire/by-country/colombia` },
    { "@type": "ListItem", "position": 4, "name": "Java", "item": `${siteUrl}/hire/by-country/colombia/java` }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a.replace(/<[^>]*>?/gm, '') }
  }))
};

export default function HireJavaColombiaPage() {
  return (
    <>
      <ServiceSchema
        name="Hire Java Developers in Colombia"
        serviceType="IT Staff Augmentation"
        areaServed="Colombia"
        description="Hire elite Java developers in Colombia. We provide senior, pre-vetted engineers specializing in Spring Boot with full US time-zone overlap."
        url="/hire/by-country/colombia/java"
      />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
          <Link href="/hire/by-country" className="hover:text-foreground">By Country</Link> / 
          <Link href="/hire/by-country/colombia" className="hover:text-foreground">Colombia</Link> / 
          <span>{technology}</span>
        </div>

        <header className="my-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire Java Developers in Colombia</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: `Stop letting a 12-hour time lag kill your development velocity. Hire senior <strong>Java and Spring Boot developers in Colombia</strong> and integrate them directly into your US time-zone workflow. Our platform provides elite, pre-vetted experts who ship secure, scalable enterprise systems under a single, compliant SLA.` }}></p>
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
                    <div key={i} className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 shadow-lg">
                        <h3 className="font-semibold text-primary">{item.q}</h3>
                        <p className="text-muted-foreground mt-2 text-sm" dangerouslySetInnerHTML={{ __html: item.a }}></p>
                    </div>
                ))}
            </div>
        </section>

        <CTOFieldManualBlock
            title={`CTO Field Manual for ${technology} Teams in ${country}`}
            focus={`${technology} execution outcomes in ${country}`}
        />

        <section className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">Build Your {country} {technology} Team</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
              Let's build a TCO model for your Colombia-based Java team and map your roles to our <a href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Axiom Cortex™</a> evaluation process.
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
