export type CaseStudy = {
  slug: string;
  clientName?: string;
  industry?: string;
  summary?: string;
  lastModified?: string;
  ogImage?: { src?: { url?: string } };
};

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  // TODO: wire to real content store; safe empty list for compile/runtime
  return [];
}

export async function getCaseStudyBySlug(_slug: string): Promise<CaseStudy | null> {
  return null;
}
