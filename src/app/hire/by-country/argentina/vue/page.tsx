
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, Layers } from 'lucide-react';
import { PSPCard } from '@/components/seo/PSPCard';

export const metadata: Metadata = {
  title: 'Hire Vue.js Developers in Argentina | Nearshore Experts',
  description: 'Hire vetted Vue.js developers in Argentina with daylight overlap. Our senior engineers ship approachable, performant UIs under a single, compliant SLA.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/hire/by-country/argentina/vue',
  },
};

const pspCards = [
    {
      title: "Daylight PR Flow (No Overnight Queues)",
      icon: GitCompare,
      body: {
        "problem": "Your offshore team pushes a Vue.js component fix at the end of their day. You spot an issue with a computed property the next morning. That simple question sits for 12 hours, delaying a critical UI improvement.",
        "stakes": "This 'human latency tax' kills your agile velocity and forces your senior engineers into late-night coordination. Your roadmap for building approachable, modern user interfaces slips, one day at a time.",
        "prescription": "Replace the overnight queue with a daylight-native cadence. We staff pods of senior Vue.js engineers in Argentina with a guaranteed 5–7 hours of daily overlap, ensuring a continuous, real-time workflow for building performant applications.",
        "proof": "Teams adopting this model reduce PR turnaround from 36 hours to under 8. This is a systemic acceleration detailed in our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs Offshore playbook</a>.",
        "recap": "Stop letting time zones dictate your release schedule. When you <strong>hire Vue.js developers in Argentina</strong>, you buy back your day with a team that operates on your clock."
      }
    },
    {
      "title": "Cognition-First Hiring for Vue.js (Axiom Cortex™)",
      "icon": UserCheck,
      "body": {
        "problem": "You need a Vue.js engineer who understands the Composition API and can manage state effectively with Pinia, not just someone who has used Vue 2. Traditional screening fails to distinguish this modern expertise.",
        "stakes": "A mis-hire who misuses the reactivity system or builds a messy store will create a slow, buggy application that is difficult to maintain and scale, creating significant technical debt.",
        "prescription": "Shift from resume theater to auditable evidence. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine evaluates a candidate's grasp of modern Vue architecture, state management patterns, and performance optimization. You get scientific proof of their problem-solving ability.",
        "proof": "This evidence-based approach reduces mis-hire risk by over 90%. You get a candidate whose 'mental shape' is mapped to the specific demands of building high-performance Vue applications.",
        "recap": "Stop gambling on keywords. Build your team of <strong>nearshore Vue.js developers in Argentina</strong> with a partner that provides data-driven proof of cognitive ability and framework mastery."
      }
    },
    {
      "title": "Security, Compliance & Managed Devices",
      "icon": ShieldCheck,
      "body": {
        "problem": "You want to access Argentina's Vue.js talent, but the operational overhead is daunting. How do you handle local labor laws, secure remote work, and manage devices?",
        "stakes": "One unmanaged laptop is a compliance nightmare. Failing to align with local labor laws creates significant legal and financial risk. Enterprise deals stall without audit-ready security evidence.",
        "prescription": "Outsource the entire operational stack to our single, accountable SLA. Our platform includes compliant EOR, SSO/SAML/SCIM, and MDM-managed laptops for every engineer. You get the talent; we handle the operational chaos.",
        "proof": "Our SOC-aligned onboarding ensures every engineer starts with a secure workstation, detailed in our <a href='/trust' class='text-primary hover:underline'>Trust Center</a>. We absorb the risk, so you can focus on velocity.",
        "recap": "Don't let operational complexity stop you. Use an integrated platform that delivers a secure and audit-ready <strong>Argentina Vue.js development team</strong> from the start."
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
        "recap": "Choose a partner that provides a clear financial model and is accountable for a fast ramp-up. It's the smarter way to scale your <strong>Vue.js team in Argentina</strong>."
      }
    }
  ];

export default function HireVueArgentinaPage() {
  const country = "Argentina";
  const technology = "Vue.js";

  const faq = [
    {
      "q": `What core Vue.js skills do you vet for in ${country}?`,
      "a": `We focus on modern Vue 3, with deep expertise in the Composition API, state management with Pinia, and a thorough understanding of Vue's reactivity system. We also assess experience with the broader ecosystem, including Vite and Vue Router.`
    },
    {
      "q": `How do you find senior Vue.js developers in ${country}?`,
      "a": `We use our Nebula™ Talent Graph of over 2.6 million LATAM profiles, filtering for candidates with proven experience in building and maintaining production-grade Vue.js applications from hubs like Buenos Aires and Córdoba.`
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
        <Link href="/hire/by-country/argentina" className="hover:text-foreground">Argentina</Link> / 
        <span>{technology}</span>
      </div>

      <header className="my-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire Vue.js Developers in Argentina</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: `Leverage Argentina's mature talent pool to build sophisticated UIs with senior <strong>Vue.js developers</strong>. Our platform connects you with pre-vetted experts who excel at creating approachable and performant applications, all within a daylight-aligned, single-SLA workflow that eliminates time-zone friction.` }}></p>
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
            Let's build a TCO model for your Argentina-based Vue.js team and map your roles to our <a href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Axiom Cortex™</a> evaluation process.
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
