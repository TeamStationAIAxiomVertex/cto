
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const hightouch: TechEntry = {
    name: "Hightouch",
    category: "Cloud FinOps & BizTech",
    categorySlug: "finops-biztech",
    seo_title: "Hire Hightouch Experts | Reverse ETL & Data Activation Consultants",
    meta_description: "Activate your data warehouse. Hire elite remote Hightouch experts vetted for their deep understanding of Reverse ETL, from the data model to the destination. Book a call.",
    intro: "Hightouch is a leading Reverse ETL platform. You need an engineer who understands that activating your data warehouse is not just about moving data, but about a deep understanding of the entire data lifecycle, from the data model and the sync to the destination and the API. Our vetting process identifies developers who are experts in the modern data stack—and can architect a data activation platform that is as secure, efficient, and automated as it is scalable. By hiring a Hightouch expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your data stuck in your warehouse, not in the hands of your go-to-market teams?",
            problem: "Your data warehouse is a goldmine of customer data, but if it's not accessible to your sales, marketing, and success teams, it's not providing any value. This leads to missed opportunities and a disconnected customer experience.",
            solution: "We vet for experts in <strong>Reverse ETL and data activation</strong>. Our engineers are proficient in using Hightouch to sync data from your warehouse to your go-to-market tools, empowering your teams with the data they need to drive growth.",
            kpi: "Data-Driven Go-to-Market Teams"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to build personalized customer experiences?",
            problem: "Without a single source of truth for your customer data, it's impossible to build personalized experiences across all your channels. This leads to a fragmented customer journey and a lot of wasted marketing spend.",
            solution: "Our engineers are masters of <strong>customer data activation</strong>. They are vetted on their ability to use Hightouch to build a single, unified view of your customer and sync it to all your go-to-market tools, enabling you to build personalized experiences that drive engagement and revenue.",
            kpi: "A Single, Unified View of Your Customer"
        },
        {
            icon: AlertTriangle,
            pain: "Is your data team spending all their time building and maintaining custom integrations?",
            problem: "Building and maintaining custom integrations to sync data from your warehouse to your go-to-market tools is a massive time sink for your data team. This takes them away from higher-value work and slows down your go-to-market teams.",
            solution: "We look for engineers proficient with <strong>no-code data integration</strong>. They are vetted on their ability to use Hightouch to build and maintain data syncs without writing any code, freeing up your data team to focus on more strategic initiatives.",
            kpi: "A More Productive Data Team"
        }
    ],
    evaluation: [
        "Reverse ETL and data activation",
        "Data modeling and SQL",
        "Hightouch platform and features",
        "Integration with go-to-market tools",
        "Security and best practices"
    ],
    technical_analysis: "The Hightouch evaluation focuses on a candidate's ability to build and maintain a modern data activation platform. We assess their understanding of the entire data lifecycle, requiring them to design a complex data activation strategy for a multi-channel go-to-market motion. A critical part of the evaluation is their mastery of **Reverse ETL and SQL**; candidates must demonstrate how to use SQL to model data in the warehouse and how to use Hightouch to sync that data to various destinations. We also test their ability to build **secure and compliant** data syncs that protect customer data. Finally, we assess their knowledge of the modern data stack, and their ability to leverage it to build a modern, high-performance data activation platform.",
    interlink_slugs: ["salesforce", "hubspot", "dbt", "snowflake"]
};

export default hightouch;
