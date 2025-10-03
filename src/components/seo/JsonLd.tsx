
import * as React from "react";

/** Renders JSON-LD in a safe way for SSR/CSR */
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify ensures valid JSON; no user input here
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}
