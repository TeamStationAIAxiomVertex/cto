export type CaseStudy = {
  slug: string;
  clientName?: string;
  industry?: string;
  summary?: string;
  lastModified?: string;
  ogImage?: { src?: { url?: string } };
};

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  // TODO: replace with real loader (FS, CMS, etc.)
  return [];
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const all = await getAllCaseStudies();
  return all.find(s => s.slug === slug) ?? null;
}
