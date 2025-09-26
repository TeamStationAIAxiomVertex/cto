
import Link from 'next/link';
import type { Metadata } from 'next';
import { GitCompare, UserCheck, ShieldCheck, Scale, Code } from 'lucide-react';
import { PSPCard } from '@/components/seo/PSPCard';

export const metadata: Metadata = {
  title: 'Hire Go Developers in Peru | Nearshore Golang Experts',
  description: 'Hire vetted Go developers in Peru with daylight overlap. Our senior Golang engineers ship secure, high-performance concurrent systems under a single, compliant SLA.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/hire/by-country/peru/go',
  },
};

const pspCards = [
    {
      title: "Daylight PR Flow (No Overnight Queues)",
      icon: GitCompare,
      body: {
        "problem": "Your offshore team pushes a Go microservice fix at the end of their day. You spot a channel deadlock issue the next morning. That simple question sits for 12 hours, delaying a critical infrastructure fix.",
        "stakes": "This 'human latency tax' kills your agile velocity and forces your senior engineers into late-night coordination. Your core services roadmap slips, one day at a time, for easily solvable issues.",
        "prescription": "Replace the overnight queue with a daylight-native cadence. We staff pods of senior Go engineers in Peru with a guaranteed 5–7 hours of daily overlap, ensuring a continuous, real-time workflow for building high-performance systems.",
        "proof": "Teams adopting this model reduce PR turnaround from 36 hours to under 8. This is a systemic acceleration detailed in our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs Offshore playbook</a>.",
        "recap": "Stop letting time zones dictate your release schedule. When you <strong>hire Go developers in Peru</strong>, you buy back your day with a team that operates on your clock."
      }
    },
    {
      "title": "Cognition-First Hiring for Go (Axiom Cortex™)",
      "icon": UserCheck,
      "body": {
        "problem": "You need a Go engineer who truly understands concurrency patterns with goroutines and channels, not just someone who has completed a tutorial. Traditional screening for Go expertise is unreliable.",
        "stakes": "A mis-hire who misuses concurrency primitives will introduce subtle race conditions and deadlocks that are a nightmare to debug in production, eroding the reliability that Go is known for.",
        "prescription": "Shift from resume theater to auditable evidence. Our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> engine evaluates a candidate's grasp of Go's concurrency model, idiomatic error handling, and interface design. You get scientific proof of their problem-solving ability in the Go paradigm.",
        "proof": "This evidence-based approach reduces mis-hire risk by over 90%. You get a candidate whose 'mental shape' is mapped to the specific demands of building high-performance, concurrent Go systems.",
        "recap": "Stop gambling on keywords. Build your team of <strong>nearshore Go developers in Peru</strong> with a partner that provides data-driven proof of cognitive ability and idiomatic language mastery."
      }
    },
    {
      "title": "Security, Compliance & Managed Devices",
      "icon": ShieldCheck,
      "body": {
        "problem": "You want to access Peru's Go talent for your backend services, but the operational overhead of compliance, secure devices, and legal is a blocker.",
        "stakes": "One unmanaged laptop is a compliance nightmare. Failing to align with local labor laws creates significant legal and financial risk. Enterprise deals stall without audit-ready security evidence.",
        "prescription": "Outsource the entire operational stack to our single, accountable SLA. Our platform includes compliant EOR, SSO/SAML/SCIM, and MDM-managed laptops for every engineer. You get the talent; we handle the operational chaos.",
        "proof": "Our SOC-aligned onboarding ensures every engineer starts with a secure workstation, detailed in our <a href='/trust' class='text-primary hover:underline'>Trust Center</a>. We absorb the risk, so you can focus on velocity.",
        "recap": "Don't let operational complexity stop you. Use an integrated platform that delivers a secure and audit-ready <strong>Peru Go development team</strong> from the start."
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
        "recap": "Choose a partner that provides a clear financial model and is accountable for a fast ramp-up. It's the smarter way to scale your <strong>Go team in Peru</strong>."
      }
    }
  ];

export default function HireGoPeruPage() {
  const country = "Peru";
  const technology = "Go";

  const faq = [
    {
      "q": `What core Go skills do you vet for in ${country}?`,
      "a": `We focus on deep understanding of Go's concurrency model (goroutines, channels), idiomatic error handling, effective use of interfaces for composition, and standard library proficiency. We test for practical application in building high-performance network services.`
    },
    {
      "q": `How do you find senior Go developers in ${country}?`,
      "a": `We use our Nebula™ Talent Graph of over 2.6 million LATAM profiles, filtering for candidates with proven experience in building and scaling production Go services, particularly for infrastructure and backend systems in hubs like Lima.`
    },
    {
      "q": `Is it complicated to hire Go developers in ${country}?`,
      "a": `Not with our platform. As your Employer of Record (EOR), we handle all local legal, HR, and payroll complexities.`
    },
    {
      "q": `Can a ${country}-based Go team work on projects involving sensitive data?`,
      "a": `Yes. Security is built-in. Every engineer gets a corporate-owned, MDM-managed laptop, and we enforce least-privilege access through SSO/SAML/SCIM from day one. Our process is SOC-aligned, as detailed in our <a href='/trust'>Trust Center</a>.`
    }
  ];

  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
        <Link href="/hire/by-country" className="hover:text-foreground">By Country</Link> / 
        <Link href="/hire/by-country/peru" className="hover:text-foreground">Peru</Link> / 
        <span>{technology}</span>
      </div>

      <header className="my-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire Go Developers in Peru</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: `Stop letting slow, memory-intensive services kill your performance. Hire senior <strong>Go developers in Peru</strong> and integrate them directly into your US time-zone workflow. Our platform provides elite, pre-vetted Golang experts who build fast, reliable, and highly concurrent systems under a single, compliant SLA.` }}></p>
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
            Let's build a TCO model for your Peru-based Go team and map your roles to our <a href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Axiom Cortex™</a> evaluation process.
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
