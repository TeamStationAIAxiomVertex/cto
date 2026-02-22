export const dynamic = "force-static";

import faqData from "../../data/faq.json";
import Link from "next/link";
import type { Metadata } from 'next';
import { HelpCircle } from "lucide-react";
import CTOFieldManualBlock from "../../components/seo/CTOFieldManualBlock";

export const metadata: Metadata = {
    title: 'CTO FAQs: Nearshore Talent, TCO & Security',
    description: 'Questions for CTOs on nearshore talent, TCO, security, and ops. Learn how our platform de-risks hiring.',
    keywords: 'cto faq, nearshore faq, technical hiring faq, nearshore tco, teamstation ai faq',
};

const SITE = "https://cto.teamstation.dev";

function JsonLd() {
  const allQuestions = faqData.flatMap(category => 
    category.questions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  );

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

export default function FAQPage() {
  return (
    <main className="container max-w-4xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>FAQ</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Frequently Asked Questions for CTOs</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Real questions, direct answers. This is a playbook for navigating the strategic decisions around building a high-performance nearshore engineering team.
        </p>
      </header>

      <div className="space-y-12">
        {faqData.map((category) => (
          <section key={category.category}>
            <h2 className="text-3xl font-bold text-center text-foreground">{category.category}</h2>
            <div className="mt-8 space-y-6">
              {category.questions.map((item, i) => (
                <div key={i} className="rounded-lg border bg-card p-6 shadow-lg">
                    <h3 className="font-semibold text-primary flex items-start gap-3">
                        <HelpCircle className="h-6 w-6 mt-1 shrink-0"/>
                        <span>{item.q}</span>
                    </h3>
                    <p className="text-muted-foreground mt-4 border-t border-border pt-4">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <hr className="my-12 border-border" />
      <nav className="text-center text-sm space-x-4">
        <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
        <Link href="/research/hub" className="text-primary hover:underline">Research</Link>
        <Link href="/comparisons" className="text-primary hover:underline">Comparisons</Link>
        <Link href="/hire" className="text-primary hover:underline">Hire Pages</Link>
      </nav>

      <section className="surface-card my-14 p-8 text-left">
        <h2 className="text-2xl font-bold text-foreground">How to Use This FAQ as a Decision System</h2>
        <div className="mt-5 space-y-4 text-muted-foreground leading-7">
          <p>
            Treat each question as an operating signal, not just a content entry. If your concern is speed, move from this page to
            the <Link href="/playbook/tco-model" className="text-primary hover:underline">TCO model</Link> and{' '}
            <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics</Link>.
            If your concern is hiring quality, move to <Link href="/hire/by-role" className="text-primary hover:underline">role design</Link> and{' '}
            <Link href="/research/technical-talent-evaluation-system" className="text-primary hover:underline">evaluation method</Link>.
          </p>
          <p>
            For subdomain depth, use{' '}
            <a href="https://research.teamstation.dev/protocols/evaluation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">research.teamstation.dev evaluation protocols</a>{' '}
            and{' '}
            <a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering.teamstation.dev</a>.
            This gives CTO and CIO teams a consistent path from question to implementation.
          </p>
        </div>
      </section>

      <CTOFieldManualBlock
        title="CTO Field Manual for High Stakes Hiring and Delivery Questions"
        focus="executive FAQ workflows for delivery risk reduction and governance clarity"
      />

      <link rel="canonical" href={`${SITE}/faq`} />
      <JsonLd />
    </main>
  );
}
