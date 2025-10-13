import { TechEntry } from "@/lib/tech";

import { Search, Map, Users } from "lucide-react";

const notion: TechEntry = {
  name: "Notion",
  category: "Product, Design & Growth",
  categorySlug: "product-design-growth",
  seo_title: "Hire Notion Experts | TeamStation AI",
  meta_description:
    "Hire expert Notion consultants to build your company wiki, manage your product roadmap, and create a central source of truth. Get pre-vetted LATAM talent.",
  intro:
    "Notion is a flexible, all-in-one workspace for your team's documentation, project management, and knowledge base. Our Notion experts help you tame the chaos and turn Notion into a powerful, organized system that fuels your team's productivity.",
  pains: [
    {
      icon: Search,
      pain: "Information is scattered across Google Docs, Slack, and email, making it impossible to find anything.",
      problem:
        "Your team wastes precious time searching for documents, product specs, or meeting notes. There is no single source of truth, leading to confusion and duplicated work.",
      solution:
        "We design and build a centralized knowledge base in Notion, creating a structured, searchable, and interconnected home for all your important information, from product roadmaps to HR policies.",
      kpi: "Reduce time spent searching for information by 50%.",
    },
    {
      icon: Map,
      pain: "Your product roadmap is a static presentation that no one looks at.",
      problem:
        "Roadmaps in slide decks or spreadsheets quickly become outdated. There's no connection between high-level strategy and the actual work being done in Jira or Linear.",
      solution:
        "We create dynamic, database-driven roadmaps in Notion that are connected to your task management system, providing a real-time view of progress from strategic initiatives down to individual tasks.",
      kpi: "Increase roadmap alignment and visibility across the entire organization.",
    },
    {
      icon: Users,
      pain: "Onboarding new team members is a slow, manual, and inconsistent process.",
      problem:
        "New hires are overwhelmed and struggle to find the information they need to get started. The onboarding experience is inconsistent and depends heavily on their manager's availability.",
      solution:
        "We build a comprehensive and interactive onboarding portal in Notion, with checklists, resources, and company information, ensuring every new hire has a consistent and efficient start.",
      kpi: "Decrease new hire ramp-up time by 30%.",
    },
  ],
  evaluation: [
    "Deep expertise in Notion's database and relational features to create dynamic systems.",
    "Proven ability to design and implement company-wide knowledge bases and documentation systems.",
    "Experience in integrating Notion with other tools like Slack, Jira, and GitHub to create a unified workflow.",
    "A strong sense of information architecture and user experience to ensure the Notion workspace is intuitive and easy to navigate.",
  ],
  technical_analysis:
    "Notion's power lies in its database-first architecture, which allows for the creation of highly customized and interconnected systems. Our experts are masters of Notion's relational databases, rollups, and formulas. We don't just create pretty documents; we build systems. We focus on designing a scalable information architecture, creating standardized templates for recurring processes like meeting notes and project specs, and implementing clear governance so the workspace stays organized over time. We also leverage the Notion API to build custom integrations and automate workflows, turning Notion from a simple documentation tool into a core part of your operational stack.",
  interlink_slugs: [
    "jira",
    "product-design-growth",
    "devops-engineering",
    "snyk",
  ],
};

export default notion;
