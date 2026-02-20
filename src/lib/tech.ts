import type { LucideIcon } from "lucide-react";
import allTechData from "@/data/technologies";

export interface PainPoint {
  icon: LucideIcon;
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
  comparison_slugs?: string[];
  is_ready?: boolean;
}

export type TechSlug =
  // This will be a union of all the keys from allTechData
  keyof typeof allTechData;

export type AllTech = {
  [key in TechSlug]: TechEntry;
};

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;

export function getAllTechSlugs(): string[] {
  return Object.keys(allTech).filter((key) => {
    const tech = allTech[key as TechSlug];
    return Boolean(tech);
  });
}
