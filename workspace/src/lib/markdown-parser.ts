import { remark } from "remark";
import html from "remark-html";

/** Markdown → HTML for server use */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown || "");
  return String(result);
}
export default markdownToHtml;
