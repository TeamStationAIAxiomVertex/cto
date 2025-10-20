import { notFound } from "next/navigation";
import { Metadata } from "next";

// --- REVERTING TO ALIAS IMPORTS ---
import {
  getCountryData,
  getCountrySlugs,
  generateFaqSchema,
  generateVerdictRows,
} from "@/lib/programmatic-data";

// --- REVERTING TO ALIAS COMPONENT IMPORTS ---
import VerdictTable from "@/components/VerdictTable";
import Breadcrumbs from "@/components/Breadcrumbs";

// --- 1. NEXT.JS STATIC PARAMS GENERATION ---
export async function generateStaticParams() {
  const slugs = await getCountrySlugs();
  return slugs.map((slug) => ({ slug }));
}

// --- 2. DYNAMIC METADATA GENERATION (SEO WAR PLAN EXECUTION) ---

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

// --- 3. MAIN PAGE COMPONENT ---

export default async function HireByCountryPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getCountryData(params.slug);

  if (!data) {
    notFound();
  }

  const { country, h1, legal_note, salary_note, internal_links } = data;

  const faqSchema = generateFaqSchema(data.faqs);
  const verdictRows = generateVerdictRows(data);

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
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

      <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">{h1}</h1>

      <section className="prose lg:prose-xl max-w-none">
        <p className="text-lg text-muted-foreground">{data.meta}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Why TeamStation AI Wins in {country}
        </h2>

        <VerdictTable
          title={`Talent Vetting: TeamStation AI vs. The Status Quo in ${country}`}
          competitorName="Typical Staff Augmentation"
          rows={verdictRows}
          className="mb-8"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">
              Legal and EOR Guidance
            </h3>
            <p className="text-gray-700">{legal_note}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Compensation Insights
            </h3>
            <p className="text-gray-700">{salary_note}</p>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">
          Explore Related Engineering Strategy Hubs
        </h2>
        <div className="flex flex-wrap gap-3">
          {internal_links.slice(0, 6).map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
