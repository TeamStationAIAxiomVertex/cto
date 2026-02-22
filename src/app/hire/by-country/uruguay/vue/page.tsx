
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, Layers } from 'lucide-react';
import { PSPCard } from "../../../../../components/seo/PSPCard";
import CTOFieldManualBlock from "../../../../../components/seo/CTOFieldManualBlock";

export const metadata: Metadata = {
  title: 'Hire Vue.js Developers in Uruguay | Nearshore Experts',
  description: 'Hire vetted Vue.js developers from Uruguay. Our senior engineers from this stable, high-skill market ship approachable, performant UIs under a single, compliant SLA.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/hire/by-country/uruguay/vue',
  },
};

const pspCards = [
    {
      title: "Daylight Collaboration from a Stable, High-Skill Hub",
      icon: GitCompare,
      body: {
        "problem": "You need senior talent that can build sophisticated UIs, but can't risk project disruptions from regional instability or time-zone lag.",
        "stakes": "Slow feedback loops and communication gaps lead to rework and missed deadlines. You need a partner in a predictable environment.",
        "prescription": "Leverage Uruguay's stable, business-friendly environment and its export-focused talent pool. We staff your team with senior Vue.js engineers from Montevideo, ensuring 5-7 hours of consistent daily overlap, backed by LATAM's most reliable digital infrastructure.",
        "proof": "This combination of stability and time-zone alignment minimizes operational risk and maximizes productivity. Explore the data in our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs Offshore playbook</a>.",
        "recap": "When you <strong>hire Vue.js developers in Uruguay</strong>, you get real-time collaboration with a team from a low-risk, stable operational base."
      }
    },
    {
      "title": "Vetting for Modern Vue.js Expertise",
      "icon": UserCheck,
      "body": {
        "problem": "You need a Vue.js engineer who understands the Composition API and can manage state effectively with Pinia, not just someone who has used Vue 2.",
        "stakes": "A developer who misuses the reactivity system or builds a messy store will create a slow, buggy application that is difficult to maintain and scale.",
        "prescription": "Tap into Uruguay's highly-educated talent. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine vets for a deep understanding of modern Vue architecture, state management patterns, and performance optimization.",
        "proof": "Our evidence-based approach reduces mis-hire risk by over 90%, ensuring you get a candidate whose 'mental shape' is mapped to the demands of building high-performance Vue applications.",
        "recap": "Stop gambling on keywords. Build your team of <strong>nearshore Vue.js developers in Uruguay</strong> with a partner that provides data-driven proof of framework mastery."
      }
    },
    {
      "title": "A Fully Integrated & Secure Operational Platform",
      "icon": ShieldCheck,
      "body": {
        "problem": "You want to access Uruguay's elite talent, but the legal, IT, and security overhead of managing a remote team is a significant blocker.",
        "stakes": "One unmanaged personal laptop can lead to a compliance disaster. Misunderstanding local labor laws creates significant legal and financial risk.",
        "prescription": "Outsource the entire operational stack to our single, accountable platform. Our service includes a fully compliant Employer of Record (EOR), MDM-managed laptops, and comprehensive security and insurance coverage.",
        "proof": "Our SOC-aligned onboarding process, detailed in our <a href='/trust' class='text-primary hover:underline'>Trust Center</a>, ensures every engineer operates from a secure, managed workstation. We absorb the risk so you can focus on velocity.",
        "recap": "Use an integrated platform that delivers a secure and compliant <strong>Uruguay Vue.js development team</strong> from day one."
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
        "recap": "Choose a partner that offers a clear financial model for scaling your <strong>Vue.js team in Uruguay</strong>."
      }
    }
  ];

export default function HireVueUruguayPage() {
  const country = "Uruguay";
  const technology = "Vue.js";

  const faq = [
    {
      "q": `What core Vue.js skills do you vet for in ${country}?`,
      "a": `We focus on modern Vue 3, with deep expertise in the Composition API, state management with Pinia, and a thorough understanding of Vue's reactivity system. We also assess experience with the broader ecosystem, including Vite and Vue Router.`
    },
    {
      "q": `How do you find senior Vue.js developers in ${country}?`,
      "a": `We use our Nebula™ Talent Graph of over 2.6 million LATAM profiles, filtering for candidates with proven experience in building and maintaining production-grade Vue.js applications from Montevideo's high-skill talent pool.`
    },
    {
      "q": `Is it complicated to hire Vue.js developers in ${country}?`,
      "a": `Not with our platform. As your Employer of Record (EOR), we handle all local legal, HR, and payroll complexities.`
    },
    {
      "q": `Can a ${country}-based Vue.js team work on projects involving sensitive data?`,
      "a": `Yes. Security is built-in. Every engineer gets a corporate-owned, MDM-managed laptop, and we enforce least-privilege access through SSO/SAML/SCIM from day one. Our process is SOC-aligned, as detailed in our <a href='/trust'>Trust Center</a>.`
    }
  ];

  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
        <Link href="/hire/by-country" className="hover:text-foreground">By Country</Link> / 
        <Link href="/hire/by-country/uruguay" className="hover:text-foreground">Uruguay</Link> / 
        <span>{technology}</span>
      </div>

      <header className="my-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire Vue.js Developers in Uruguay</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: `Build approachable, performant user interfaces with elite <strong>Vue.js developers from Uruguay</strong>. Our platform provides senior, pre-vetted experts from a stable, high-skill market who ship clean, maintainable code under a single, compliant SLA.` }}></p>
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
            Let's build a TCO model for your Uruguay-based Vue.js team and map your roles to our <a href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Axiom Cortex™</a> evaluation process.
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
