
import type { ElementType } from 'react';
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

export interface PainPoint {
  icon: ElementType;
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
