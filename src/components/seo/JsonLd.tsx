
import * as React from "react";
type JsonLdProps = { data?: Record<string, any>; json?: Record<string, any>; id?: string };
function JsonLdImpl({ data, json, id }: JsonLdProps) {
  const payload = json ?? data ?? {};
  const jsonText = JSON.stringify(payload).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: jsonText }}
      suppressHydrationWarning
    />
  );
}
export default JsonLdImpl;
export { JsonLdImpl as JsonLd };
