export type SeoIntent =
  | "informational"
  | "commercial"
  | "comparison"
  | "research";

export type SeoSchemaType =
  | "Article"
  | "Service"
  | "FAQPage"
  | "Organization"
  | "Product"
  | "WebPage"
  | "ScholarlyArticle";

export type InternalLinkCategory = "hub" | "lateral" | "programmatic";

export type SeoInternalLink = {
  href: string;
  anchor: string;
  category: InternalLinkCategory;
};

export type SeoPersonRef = {
  name: string;
  role?: string;
};

export type SeoContentContract = {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: SeoIntent;
  canonical: string;
  lastModified: string;
  author: SeoPersonRef;
  reviewer: SeoPersonRef;
  internalLinks: SeoInternalLink[];
  schemaType: SeoSchemaType;
  thinPageMinWords?: number;
  noindex?: boolean;
};

export function defineSeoContentContract(
  contract: SeoContentContract
): SeoContentContract {
  return contract;
}

