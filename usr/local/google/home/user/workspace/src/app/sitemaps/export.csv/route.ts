
import { collectCoreUrls, collectPlaybookUrls } from '@/lib/sitemap-data';
import type { UrlRec } from '@/lib/sitemap-data';

function toCsv(records: UrlRec[]): string {
    const header = "url,lastmod,changefreq,priority\n";
    const rows = records.map(r => `${r.url},${r.lastmod},${r.changefreq},${r.priority}`);
    return header + rows.join("\n");
}

export async function GET() {
    const coreUrls = await collectCoreUrls();
    const playbookUrls = await collectPlaybookUrls();
    const allUrls = [...coreUrls, ...playbookUrls];

    const csvData = toCsv(allUrls);
    
    return new Response(csvData, {
        status: 200,
        headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="sitemap.csv"`,
        },
    });
}
