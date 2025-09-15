
export const dynamic = "force-static";

import faq from "@/data/faq.json";
import Link from "next/link";

const SITE = "https://cto.teamstation.dev";

function JsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
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
    <main className="container max-w-3xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>FAQ</span>
      </div>
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8">
        Answers for CTOs evaluating nearshore LATAM engineering with TeamStation AI.
      </p>

      <div className="space-y-6">
        {faq.map((item, i) => (
          <section key={i} className="border rounded-2xl p-6 bg-card shadow-lg">
            <h2 className="text-lg font-semibold mb-2 text-primary">{item.q}</h2>
            <p className="text-muted-foreground">{item.a}</p>
          </section>
        ))}
      </div>

      <hr className="my-8" />
      <nav className="text-sm space-x-4">
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
