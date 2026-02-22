import { AlertTriangle } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const census: TechEntry = {
  name: "Census",
  category: "Cloud FinOps & BizTech",
  categorySlug: "finops-biztech",
  seo_title: "Hire Census Experts | Data Activation & Reverse ETL Consultants",
  meta_description:
    "Build a reliable, scalable, and automated data activation platform. Hire elite remote Census experts vetted for their deep understanding of data activation, from the data warehouse to the CRM. Book a call.",
  intro:
    "Census is a leading data activation platform. You need an engineer who understands that building a modern data activation platform is not just about moving data, but about a deep understanding of the entire data lifecycle, from the data warehouse and the data model to the CRM and the marketing automation platform. Our vetting process identifies developers who are experts in the modern data stack and can architect a data platform that is as secure, efficient, and automated as it is scalable. By hiring a Census expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Is your data activation platform a mess of brittle, ad-hoc scripts?",
      problem:
        "In many organizations, the data activation platform is a mess of brittle, ad-hoc scripts. This can lead to a user experience that is filled with stale data and a codebase that is a mess of environment-specific hacks and workarounds.",
      solution:
        "We vet for experts in **Census and the modern data stack**. Our engineers are proficient in using tools like dbt, Snowflake, and other modern libraries to build a fully automated, reliable, and efficient data activation platform. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Fully Automated, Reliable, and Efficient Data Activation Platform",
    },
    {
      icon: AlertTriangle,
      pain: "Is your application not taking full advantage of the cloud?",
      problem:
        "Many applications are not built to be truly modern. This can lead to a user experience that is slow, a codebase that is a mess of monolithic, hard-to-maintain code, and a cloud bill that is out of control.",
      solution:
        "Our engineers are masters of **modern, cloud-native architectures**. They are vetted on their ability to use services like AWS, Azure, and Google Cloud to build a modern, serverless, and container-based architecture. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Modern, Serverless, and Container-Based Architecture",
    },
    {
      icon: AlertTriangle,
      pain: "Is your team not leveraging the full power of the data ecosystem?",
      problem:
        "The data ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
      solution:
        "We look for engineers proficient with **the data ecosystem and the modern data stack**. They are vetted on their ability to build applications that are powered by the best of the data ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
      kpi: "An Application That is Powered by the Best of the Data Ecosystem",
    },
  ],
  evaluation: [
    "The modern data stack (e.g., Census, dbt, Snowflake, other modern libraries)",
    "Census and the modern web",
    "The data warehouse and the data model",
    "The CRM and the marketing automation platform",
    "Security and best practices",
  ],
  technical_analysis:
    "The Census evaluation focuses on a candidate's ability to build a reliable, scalable, and automated data activation platform. We assess their understanding of the entire data lifecycle, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **Census and the modern data stack**; candidates must demonstrate how to use tools like Census, dbt, and Snowflake to build a fully automated, reliable, and efficient data activation platform, and how to use the data warehouse and the data model to build a read model that is optimized for queries. We also test their ability to build **portable and environment-agnostic** applications that can run on any environment. Finally, we assess their knowledge of the data ecosystem, and their ability to leverage it to build a modern, high-performance backend.",
  interlink_slugs: ["dbt", "snowflake", "hightouch", "salesforce"],
};

export default census;
