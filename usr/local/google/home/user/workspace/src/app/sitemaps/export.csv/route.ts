import { collectCoreUrls, collectPlaybookUrls } from "@/lib/sitemap-data";
import type { SitemapUrl } from "@/lib/sitemap-data";

function toCsv(records: SitemapUrl[]): string {
  const header = "url,lastmod,changefreq,priority\n";
  const rows = records.map(
    (r) => `${r.loc},${r.lastmod},${r.changefreq},${r.priority}`
  );
  return header + rows.join("\n");
}

export async function GET() {
  const coreUrls = await collectCoreUrls();
  const playbookUrls = await collectPlaybookUrls();
  const allUrls = [...coreUrls, ...playbookUrls];

  const csvData = toCsv(allUrls as SitemapUrl[]);

  return new Response(csvData, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="sitemap.csv"`,
    },
  });
}
