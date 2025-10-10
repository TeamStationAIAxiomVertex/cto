
import type { ElementType } from 'react';
import type { Icon } from "lucide-react";
import {
  AlertTriangle,
  AppWindow,
  BadgeCheck,
  BarChart,
  BookOpen,
  BrainCircuit,
  Bug,
  CheckCircle,
  ChevronsRight,
  ClipboardList,
  Clock,
  Cloud,
  Code,
  CodeSquare,
  Codepen,
  Component,
  Compass,
  Contact,
  Cpu,
  Database,
  Dna,
  DollarSign,
  DraftingCompass,
  ExternalLink,
  FileLock,
  FileText,
  GanttChartSquare,
  GitBranch,
  GitCompare,
  Github,
  Gitlab,
  Globe,
  Handshake,
  HelpCircle,
  Key,
  KeyRound,
  Laptop,
  Layers,
  Link,
  Linkedin,
  Mail,
  Map,
  MessageCircle,
  MessageSquare,
  Package,
  PenTool,
  PersonStanding,
  Plane,
  Pyramid,
  RadioTower,
  Rocket,
  Scale,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Siren,
  Slack,
  Sprout,
  Star,
  Target,
  TestTube2,
  TrendingUp,
  Trophy,
  UserCheck,
  UserCog,
  UserPlus,
  UserX,
  Users,
  Wallet,
  Webhook,
  Workflow,
  Youtube,
  Zap,
} from "lucide-react";

import allTechData from '@/data/technologies';


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

// Dynamically generate the TechSlug type from the keys of the imported data.
// This is the robust, long-term solution.
export type TechSlug = keyof typeof allTechData;

export interface AllTech {
  [key: string]: TechEntry;
}

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;


export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}
export interface TechCategory {
  name: string;
  slug: string;
  pain: string;
  icon: ElementType;
  tech: {
    name: string;
    slug: string;
  }[];
}
