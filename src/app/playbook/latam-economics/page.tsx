import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaybookContentRenderer from "@/components/PlaybookContentRenderer";
import TableOfContents from "@/components/TableOfContents";
import { getPlaybookData } from "@/lib/playbook-data";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPlaybookData("latam-economics");
  if (!data) return {};
  return {
    title: data.title,
    description: data.meta,
    alternates: {
      canonical: "https://cto.teamstation.dev/playbook/latam-economics",
    },
    keywords: data.keywords.join(", "),
  };
}

export default async function PlaybookPage() {
  const data = await getPlaybookData("latam-economics");
  if (!data) notFound();

  const { title, date, toc, keywords } = data;

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <Breadcrumbs
        items={[
          { label: "Playbook", path: "/playbook" },
          { label: title, path: "/playbook/latam-economics" },
        ]}
      />

      <article className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-8 space-y-8">
            <TableOfContents items={toc} />
          </div>
        </aside>

        <div className="lg:col-span-3">
          <header className="mb-8 border-b pb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-gray-500 mt-2">
              Published: <time dateTime={date}>{date}</time>
            </p>
          </header>

          <section className="prose prose-xl max-w-none">
            <PlaybookContentRenderer slug="latam-economics" />
          </section>

          <section className="mt-16 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Further Reading & Related Strategy</h2>
            <div className="flex flex-wrap gap-3">
              {keywords.slice(0, 5).map((kw, index) => (
                <a
                  key={index}
                  href={`/playbook?tag=${kw}`}
                  className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                >
                  {kw}
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
