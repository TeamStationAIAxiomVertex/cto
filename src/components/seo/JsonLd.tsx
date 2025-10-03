import * as React from "react";

type JsonLdProps = {
  /** Your JSON-LD payload */
  data?: Record<string, any>;
  /** Alias prop for convenience/compatibility */
  json?: Record<string, any>;
  /** Optional: stable key if you render multiple blocks */
  id?: string;
};

function JsonLdImpl({ data, json, id }: JsonLdProps) {
  // Prefer `json`, fall back to `data`
  const payload = json ?? data ?? {};
  // Extra safety: escape "<" so it can’t prematurely close the script tag
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

// Default export
export default JsonLdImpl;

// Also export a named alias for flexibility
export { JsonLdImpl as JsonLd };
