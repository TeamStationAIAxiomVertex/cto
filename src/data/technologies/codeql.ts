
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const codeql: TechEntry = {
    name: "CodeQL",
    category: "Security & GRC",
    categorySlug: "security-grc",
    seo_title: "Hire CodeQL Experts | Static Analysis & Code Security Consultants",
    meta_description: "Find and prevent vulnerabilities at scale. Hire elite remote CodeQL experts vetted for writing custom queries and integrating static analysis into your CI/CD pipeline. Book a call.",
    intro: "CodeQL is the industry-leading semantic code analysis engine, allowing you to query your code as if it were data. You need an engineer who can go beyond running the standard query pack to write custom CodeQL queries to find novel, domain-specific vulnerabilities in your codebase. Our vetting process identifies developers who are experts in the CodeQL language and its application to modern DevSecOps. By hiring a CodeQL expert, you get a developer who can build a powerful, automated bug-finding machine tailored to your specific application and threat model.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you struggling to find complex, business-logic vulnerabilities?",
            problem: "Standard static analysis tools are good at finding common vulnerabilities but often miss complex, multi-step exploits or bugs specific to your application's business logic. This leaves you exposed to attacks that automated scanners can't see.",
            solution: "We vet for experts in **custom CodeQL query development**. Our engineers can write sophisticated queries to model your application's data flow and identify unique vulnerabilities, providing a level of security assurance that off-the-shelf tools cannot match.",
            kpi: "Custom Vulnerability Detection with CodeQL"
        }
    ],
    evaluation: [
        "Deep understanding of the CodeQL language and standard libraries",
        "Custom query development for vulnerability research",
        "Integration of CodeQL into CI/CD pipelines (e.g., GitHub Actions)",
        "Triage and validation of CodeQL findings",
        "Variant analysis to find similar bugs across a codebase"
    ],
    technical_analysis: "The CodeQL evaluation is focused on a candidate's ability to perform variant analysis and write custom queries. We assess their understanding of the CodeQL schema for languages like Java, JavaScript, and Python. A critical part of the evaluation is a practical exercise where the candidate must write a new CodeQL query to find a specific type of vulnerability in a sample codebase. We also test their ability to integrate CodeQL scanning into a CI/CD pipeline and automate the process of finding and reporting bugs.",
    interlink_slugs: ["github-actions", "security-engineering", "devops-engineering", "ci-cd"]
};

export default codeql;
