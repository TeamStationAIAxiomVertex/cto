
import type { Faq } from "./comparisonFaqs";

type AnyFaq = { q?: string; a?: string; question?: string; answer?: string };

function normalizeFaqs(faqs: AnyFaq[]) {
  return (faqs || [])
    .map((f) => ({
      question: (f as any).question ?? (f as any).q,
      answer: (f as any).answer ?? (f as any).a,
    }))
    .filter((f) => f.question && f.answer);
}

type Args = {
  // accept both old and new shapes
  name?: string;
  url?: string;
  competitorName?: string;
  competitorUrl?: string;
  slug?: string;
  faqs?: Faq[];
};

const SITE = "https://cto.teamstation.dev";

/** Returns either a single WebPage object or [WebPage, FAQPage] */
export function generateComparisonSchema(args: Args) {
  const name = args.name ?? args.competitorName ?? "Competitor";
  const url = args.url ?? args.competitorUrl;
  const slug = args.slug ?? name.toLowerCase();
  const faqs = normalizeFaqs(args.faqs as AnyFaq[]);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `TeamStation AI vs. ${name}`,
    url: `${SITE}/comparisons/${slug}`,
    about: { "@type": "Organization", "name": name, ...(url ? { url } : {}) },
  };

  if (!faqs.length) return webPage;

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // JSON-LD arrays are valid and handled by your <JsonLd> component
  return [webPage, faqPage];
}

export default { generateComparisonSchema };
