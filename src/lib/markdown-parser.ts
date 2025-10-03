import { remark } from 'remark';
import html from 'remark-html';

/** Convert Markdown → HTML (used by case-study pages). */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown || '');
  return String(result);
}
