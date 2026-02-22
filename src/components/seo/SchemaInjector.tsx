import * as React from "react";

type JsonLdInput = Record<string, unknown> | Array<Record<string, unknown>>;

export default function SchemaInjector({
  data,
  id,
}: {
  data: JsonLdInput;
  id?: string;
}) {
  const payload = Array.isArray(data) ? data : [data];
  const jsonText = JSON.stringify(payload.length === 1 ? payload[0] : payload).replace(
    /</g,
    "\\u003c"
  );

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonText }}
      suppressHydrationWarning
    />
  );
}

