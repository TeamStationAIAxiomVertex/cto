import { TechEntry } from "@/lib/tech";

import { Workflow, Zap, BarChart } from "lucide-react";

const jira: TechEntry = {
  name: "Jira",
  category: "Product, Design & Growth",
  categorySlug: "product-design-growth",
  seo_title: "Hire Jira Experts | TeamStation AI",
  meta_description:
    "Hire expert Jira administrators and consultants to optimize your workflows, automate processes, and manage your projects effectively. Get pre-vetted LATAM talent.",
  intro:
    "Jira is the industry standard for issue tracking and project management. Our certified Jira experts help you configure, optimize, and automate your Jira environment to match your team's specific workflows, whether you're running Agile sprints, managing a large-scale project, or operating a service desk.",
  pains: [
    {
      iconName: "AlertTriangle",
      pain: "Your Jira setup is a chaotic mess of confusing workflows and custom fields.",
      problem:
        "An unoptimized Jira instance slows your team down. Work gets lost, statuses are unclear, and reporting is impossible, leading to frustration and missed deadlines.",
      solution:
        "We audit your existing setup, design streamlined workflows, clean up custom fields and screens, and implement best practices to make Jira work for you, not against you.",
      kpi: "Improve team productivity by 25% with optimized workflows.",
    },
    {
      iconName: "AlertTriangle",
      pain: "Manual, repetitive tasks in Jira are consuming valuable developer and PM time.",
      problem:
        "Your team is wasting hours on manual ticket creation, status updates, and notifications that could be automated, taking them away from high-value work.",
      solution:
        "We leverage Jira Automation, scripting (ScriptRunner), and API integrations to automate repetitive tasks, enforce processes, and connect Jira to your other critical tools like Slack and GitHub.",
      kpi: "Save over 10 hours per week per team with workflow automation.",
    },
    {
      iconName: "AlertTriangle",
      pain: "You have no real visibility into your team's progress and can't generate meaningful reports.",
      problem:
        "Without proper configuration, you can't get reliable data out of Jira. Dashboards are useless, and you can't track key metrics like cycle time, lead time, or team velocity.",
      solution:
        "We configure JQL filters, build powerful dashboards, and set up advanced reporting using Jira's built-in tools and marketplace apps to give you real-time visibility into your projects.",
      kpi: "Achieve 100% accurate, real-time reporting on key project metrics.",
    },
  ],
  evaluation: [
    "Deep expertise in Jira Software, Jira Service Management, and Jira Work Management (Cloud and Data Center).",
    "Proven ability to design and implement complex workflows, permission schemes, and notification schemes.",
    "Hands-on experience with Jira automation, advanced JQL, and scripting with apps like ScriptRunner.",
    "Strong understanding of Agile methodologies (Scrum, Kanban) and how to configure Jira to support them effectively.",
  ],
  technical_analysis:
    "A well-configured Jira instance is a competitive advantage. Our expertise goes beyond basic project setup. We focus on creating a scalable and maintainable Jira architecture. This includes standardizing workflows where possible while allowing for team-specific customizations, implementing robust permission schemes to ensure security and data integrity, and leveraging the Atlassian Marketplace to extend Jira's capabilities. We are experts in migrating from other systems to Jira and in consolidating multiple Jira instances. Our approach ensures that your Jira instance is not just a ticketing system, but a central hub for collaboration, planning, and reporting that integrates seamlessly with your entire toolchain.",
  interlink_slugs: ["devops-engineering", "ci-cd", "snyk", "github-actions"],
};

export default jira;
