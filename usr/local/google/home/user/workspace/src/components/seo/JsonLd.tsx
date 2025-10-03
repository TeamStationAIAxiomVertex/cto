import * as React from "react";
export function JsonLd({ data, json, id }: {data?: any; json?: any; id?: string}) {
  const payload = json ?? data ?? {};
  const text = JSON.stringify(payload).replace(/</g, "\\u003c");
  return <script type="application/ld+json" id={id} dangerouslySetInnerHTML={{ __html: text }} suppressHydrationWarning />;
}
export default JsonLd;
