// src/lib/case-studies.ts
export type CaseStudy = {
  slug: string;
  clientName?: string;
  industry?: string;
  summary?: string;
  lastModified?: string;
  ogImage?: { 
    src?: { 
      url?: string;
      width?: number;
      height?: number;
    },
    aiHint?: string;
  };
  challenge?: string;
  outcomes?: string;
  techStack?: { name: string; link: string }[];
  canonical?: string;
  content?: string;
};

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  // This is a stub. In a real app, you'd fetch this from a CMS or filesystem.
  // For now, returning an empty array is sufficient to unblock the build.
  return [];
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const all = await getAllCaseStudies();
  return all.find(s => s.slug === slug) ?? null;
}
