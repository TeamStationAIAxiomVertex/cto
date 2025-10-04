
import { collectCoreUrls, collectPlaybookUrls, type UrlRec } from '../../../lib/sitemap-data';
import { NextResponse } from 'next/server';

function toCsv(records: UrlRec[]): string {
    const header = 'url,lastmod,changefreq,priority\n';
    const rows = records.map(rec => `${rec.url},${rec.lastmod},${rec.changefreq},${rec.priority}`).join('\n');
    return header + rows;
}

export async function GET() {
    const coreUrls = await collectCoreUrls();
    const playbookUrls = await collectPlaybookUrls();
    const allUrls = [...coreUrls, ...playbookUrls];
    const csvData = toCsv(allUrls);

    return new NextResponse(csvData, {
        status: 200,
        headers: {
            'Content-Type': 'text/csv; charset=utf-8',
            'Content-Disposition': 'attachment; filename="sitemap.csv"',
        },
    });
}
