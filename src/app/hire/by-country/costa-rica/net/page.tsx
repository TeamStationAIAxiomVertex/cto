
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, Code } from 'lucide-react';
import { PSPCard } from "../../../../../components/seo/PSPCard";
import CTOFieldManualBlock from "../../../../../components/seo/CTOFieldManualBlock";

export const metadata: Metadata = {
  title: 'Hire .NET Developers in Costa Rica | Nearshore C# Experts',
  description: 'Hire vetted .NET developers in Costa Rica. Our senior C# & ASP.NET Core engineers from this stable, enterprise-focused market ship secure, scalable code under a single, compliant SLA.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/hire/by-country/costa-rica/net',
  },
};

const pspCards = [
    {
      title: "Daylight Collaboration from a Stable, Enterprise Hub",
      icon: GitCompare,
      body: {
        "problem": "You need real-time collaboration for your enterprise .NET services but are concerned about regional instability or time-zone lag.",
        "stakes": "Project disruptions and communication delays lead to missed deadlines and erode confidence. You need a partner in a predictable, politically stable environment with maximum US time-zone overlap.",
        "prescription": "Leverage Costa Rica's stable, business-friendly environment and its highly educated, bilingual workforce. We staff your team with senior .NET engineers from San José, ensuring 7-8 hours of consistent daily overlap.",
        "proof": "This combination of political stability and perfect time-zone alignment provides a low-risk, high-velocity environment for enterprise software development. Explore our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs Offshore playbook</a>.",
        "recap": "When you <strong>hire .NET developers in Costa Rica</strong>, you are investing in a low-risk, high-skill environment built for daylight collaboration."
      }
    },
    {
      "title": "Vetting for Enterprise .NET & Cloud-Native Expertise",
      "icon": UserCheck,
      "body": {
        "problem": "You need a .NET engineer who deeply understands modern ASP.NET Core and cloud-native patterns, not just someone with legacy .NET Framework experience.",
        "stakes": "A developer who can't build for the cloud will produce slow, monolithic applications that are expensive to run and hard to scale, creating significant technical debt.",
        "prescription": "Tap into Costa Rica's enterprise-focused talent pool. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine vets for a deep understanding of modern .NET architecture, dependency injection, and EF Core performance tuning.",
        "proof": "Our evidence-based approach reduces mis-hire risk by over 90%, ensuring you get a candidate whose 'mental shape' is mapped to the specific demands of building high-performance .NET applications.",
        "recap": "Stop gambling on keywords. Build your team of <strong>nearshore .NET developers in Costa Rica</strong> with a partner that provides data-driven proof of cognitive ability and modern framework mastery."
      }
    },
    {
      "title": "A Fully Integrated & Secure Operational Platform",
      "icon": ShieldCheck,
      "body": {
        "problem": "You want to tap into Costa Rica's elite talent, but the legal, IT, and security overhead of managing a remote team is a significant blocker.",
        "stakes": "One unmanaged personal laptop can lead to a compliance disaster. Misunderstanding local labor laws creates significant legal and financial risk.",
        "prescription": "Outsource the entire operational burden to our single, accountable platform. Our service includes a fully compliant Employer of Record (EOR), MDM-managed laptops, and comprehensive security and insurance coverage.",
        "proof": "Our SOC-aligned onboarding process, detailed in our <a href='/trust' class='text-primary hover:underline'>Trust Center</a>, ensures every engineer operates from a secure, managed workstation. We absorb the risk so you can focus on velocity.",
        "recap": "Use an integrated platform that delivers a secure and compliant <strong>Costa Rica .NET development team</strong> from day one."
      }
    },
    {
      "title": "Predictable Costs for a CFO-Ready Business Case",
      "icon": Scale,
      "body": {
        "problem": "You need to make a solid business case for your hiring, but the hidden costs of a DIY approach make it impossible to predict your true Total Cost of Ownership (TCO).",
        "stakes": "Without a clear TCO model, you can't get budget approval, and you risk major cost overruns.",
        "prescription": "We provide a transparent, all-inclusive pricing model that bundles all services, giving you a predictable TCO that is often 40-60% lower than the fully-loaded cost of a US hire.",
        "proof": "Our <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO framework</a> provides the data to make a compelling financial case. See our <a href='/playbook/build-vs-buy' class='text-primary hover:underline'>Build vs. Buy analysis</a>.",
        "recap": "Choose a partner that offers a clear financial model for scaling your <strong>.NET team in Costa Rica</strong>."
      }
    }
  ];

export default function HireDotNetCostaRicaPage() {
  const country = "Costa Rica";
  const technology = ".NET";

  const faq = [
    {
      "q": `What core .NET skills do you vet for in ${country}?`,
      "a": `We focus on modern, cross-platform .NET (6+), with deep expertise in ASP.NET Core patterns (middleware, DI), Entity Framework Core mastery for data access, and advanced LINQ proficiency for efficient query writing.`
    },
    {
      "q": `How do you find senior .NET developers in ${country}?`,
      "a": `We use our Nebula™ Talent Graph of over 2.6 million LATAM profiles, filtering for candidates with proven experience in building and scaling production .NET systems, especially in the San José tech hub.`
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

  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
        <Link href="/hire/by-country" className="hover:text-foreground">By Country</Link> / 
        <Link href="/hire/by-country/costa-rica" className="hover:text-foreground">Costa Rica</Link> / 
        <span>{technology}</span>
      </div>

      <header className="my-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire .NET Developers in Costa Rica</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: `Build your enterprise applications with elite <strong>.NET developers from Costa Rica</strong>. Our platform provides senior, pre-vetted C# and ASP.NET Core experts from a stable, enterprise-focused market who ship secure and scalable code under a single, compliant SLA.` }}></p>
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
            Let's build a TCO model for your Costa Rica-based .NET team and map your roles to our <a href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Axiom Cortex™</a> evaluation process.
          </p>
           <div className="mt-6 flex justify-center items-center gap-4">
              <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" className="cta-button">
                  Book a 30-minute plan
              </Link>
          </div>
      </section>
    </main>
  );
}
