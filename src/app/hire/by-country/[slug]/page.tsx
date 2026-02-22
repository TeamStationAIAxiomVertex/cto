import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getCountryData,
  getCountrySlugs,
  generateFaqSchema,
  generateVerdictRows,
} from "@/lib/programmatic-data";
import VerdictTable from "@/components/VerdictTable";
import Breadcrumbs from "@/components/Breadcrumbs";
export async function generateStaticParams() {
  const slugs = await getCountrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getCountryData(params.slug);

  if (!data) {
    return {};
  }

  return {
    title: data.title,
    description: data.meta,
    alternates: {
      canonical: `https://cto.teamstation.dev/hire/by-country/${params.slug}`,
    },
  };
}

export default async function HireByCountryPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getCountryData(params.slug);

  if (!data) {
    notFound();
  }

  const { country, h1, legal_note, salary_note, internal_links, faqs } = data;

  const faqSchema = generateFaqSchema(data.faqs);
  const verdictRows = generateVerdictRows(data);

  return (
    <main className="container mx-auto max-w-7xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            /* BreadcrumbList Schema here */
          }),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Hire", path: "/hire" },
          { label: "By Country", path: "/hire/by-country" },
          { label: country, path: `/hire/by-country/${params.slug}` },
        ]}
      />

      <h1 className="mt-6 mb-4 text-4xl font-extrabold">{h1}</h1>

      <section className="prose max-w-none lg:prose-xl">
        <p className="text-lg text-muted-foreground">{data.meta}</p>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">
          Why TeamStation AI Wins in {country}
        </h2>

        <VerdictTable
          title={`Talent Vetting: TeamStation AI vs. The Status Quo in ${country}`}
          competitorName="Typical Staff Augmentation"
          rows={verdictRows}
          className="mb-8"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Legal and EOR Guidance
            </h3>
            <p className="text-muted-foreground">{legal_note}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Compensation Insights
            </h3>
            <p className="text-muted-foreground">{salary_note}</p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-lg border bg-card p-8">
        <h2 className="text-3xl font-bold">
          Operating Model for {country} Engineering Pods
        </h2>
        <div className="mt-5 space-y-4">
          <p>
            Start with a clear control model. Define role boundaries, delivery ownership, and
            review loops before onboarding. This lowers coordination friction and gives your team a
            stable execution cadence in the first thirty days.
          </p>
          <p>
            Use one operating rhythm across architecture, implementation, and quality gates.
            High trust delivery comes from clear handoffs, consistent review standards, and shared
            service level expectations. This is how distributed teams keep velocity and quality at
            the same time.
          </p>
          <p>
            Run governance as a weekly system review. Track delivery throughput, incident recovery,
            and compliance posture together. When leadership sees these signals in one view, they
            can make better staffing and roadmap decisions without guesswork.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t pt-8">
        <h2 className="mb-4 text-xl font-semibold">
          Explore Related Engineering Strategy Hubs
        </h2>
        <div className="flex flex-wrap gap-3">
          {internal_links.slice(0, 6).map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {link.text}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-lg border bg-card p-8">
        <h2 className="text-3xl font-bold">
          Frequently Asked Questions About Hiring in {country}
        </h2>
        <div className="mt-6 space-y-4">
          {(faqs || []).slice(0, 6).map((faq, index) => (
            <article key={`${country}-faq-${index}`} className="rounded-lg border bg-background p-5">
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
