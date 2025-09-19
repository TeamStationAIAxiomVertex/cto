
export type PSPCard = {
  id: string;
  title: string;
  recap: string;
  href?: string;
  icon?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  summary: string;
  content: string;
  challenge: string;
  why: string;
  outcomes: string;
  ogImage?: { 
    src?: { 
      url?: string;
      width?: number;
      height?: number;
    },
    aiHint?: string;
  };
  techStack: { name: string; link: string }[];
  canonical: string;
  pspCards?: PSPCard[];
  faq?: { q: string; a: string }[];
};
