
import type { ElementType } from 'react';
import type { Icon } from "lucide-react";
import allTechData from '@/data/technologies'; // Corrected to be the single source of truth

export interface PainPoint {
  icon: Icon;
  pain: string;
  problem: string;
  solution: string;
  kpi: string;
}

export interface TechEntry {
  name: string;
  category: string;
  categorySlug: string;
  seo_title: string;
  meta_description: string;
  intro: string;
  pains: PainPoint[];
  evaluation: string[];
  technical_analysis: string;
  interlink_slugs: string[];
}

export type TechSlug = keyof typeof allTechData;

export interface AllTech {
  [key: string]: TechEntry;
}

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;


export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}
