export const dynamic = "force-static";

import faqData from "../../data/faq.json";
import Link from "next/link";
import type { Metadata } from 'next';
import { HelpCircle } from "lucide-react";

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

      <link rel="canonical" href={`${SITE}/faq`} />
      <JsonLd />
    </main>
  );
}
