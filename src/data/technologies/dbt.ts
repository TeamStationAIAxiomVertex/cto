
import { Database, GitBranch, TestTube, Workflow } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const dbt: TechEntry = {
    name: "dbt",
    category: "Data & AI Engineering",
    categorySlug: "data-ai",
    seo_title: "Hire Senior dbt Developers | Data Transformation and Modeling Experts",
    meta_description: "Hire elite dbt developers specializing in building, managing, and scaling reliable, and maintainable data transformation pipelines.",
    intro: "dbt is the industry standard for data transformation. Our dbt experts are vetted for their ability to write clean, modular, and maintainable SQL that can be used to build complex, production-ready data transformation pipelines. They are the specialists who enable your teams to build and manage data with confidence.",
    pains: [
        {
            icon: Database,
            pain: "Our data is a mess of spaghetti code.",
            problem: "Poorly written SQL is difficult to understand, maintain, and reuse, leading to data quality issues and a lack of confidence in your data.",
            solution: "We vet for mastery in **dbt best practices**. Our engineers write clean, modular, and well-documented SQL that is easy to understand, maintain, and reuse.",
            kpi: "90% Code Reusability"
        },
        {
            icon: GitBranch,
            pain: "We're struggling to manage our data transformation pipelines.",
            problem: "Managing data transformation pipelines is complex and error-prone, leading to inconsistent data and a lack of visibility.",
            solution: "Our experts are tested on **data transformation pipelines**. They use dbt to create a single, unified workflow for managing data transformation pipelines.",
            kpi: "100% Data Consistency"
        },
        {
            icon: TestTube,
            pain: "Our data is not tested.",
            problem: "A lack of testing makes it impossible to know if your data is accurate, leading to data quality issues and a lack of confidence in your data.",
            solution: "We vet for expertise in building **data tests**. Our engineers use dbt to create a version-controlled, auditable, and reproducible data that can be deployed with confidence.",
            kpi: "100% Reproducibility"
        }
    ],
    evaluation: [
        "Deep understanding of dbt's core concepts (models, sources, tests).",
        "Mastery of dbt best practices (clean, modular, and maintainable SQL).",
        "Proficiency in managing complex, production-ready data transformation pipelines.",
        "Experience with building and managing CI/CD pipelines for dbt.",
        "Expertise in writing and using dbt packages.",
    ],
    technical_analysis: "The dbt vetting process is rigorous and hands-on. Candidates are required to write dbt code to build a complex, production-ready data transformation pipeline from scratch. We test their ability to write clean, modular, and maintainable SQL, as well as their understanding of dbt best practices. We also assess their experience with building and managing CI/CD pipelines for dbt, and their ability to write and use dbt packages.",
    interlink_slugs: ["snowflake", "bigquery", "redshift", "python", "sql"],
    is_ready: true,
};

export default dbt;
