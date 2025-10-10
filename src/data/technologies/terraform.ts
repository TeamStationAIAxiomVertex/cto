
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const terraform: TechEntry = {
    name: "Terraform",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire Terraform Experts | Infrastructure as Code & DevOps Consultants",
    meta_description: "Build a consistent, portable, and efficient cloud infrastructure. Hire elite remote Terraform experts vetted for their deep understanding of infrastructure as code, from the resource block to the remote backend. Book a call.",
    intro: "Terraform is the de facto standard for infrastructure as code. You need an engineer who understands that building a modern cloud infrastructure is not just about writing code, but about a deep understanding of the entire infrastructure as code ecosystem, from the resource block and the provider to the remote backend and the module registry. Our vetting process identifies developers who are experts in the HashiCorp ecosystem—and can architect a cloud infrastructure that is as secure, efficient, and portable as it is scalable. By hiring a Terraform expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your cloud infrastructure a mess of snowflakes and manual configuration?",
            problem: "In many organizations, the cloud infrastructure is a mess of snowflakes and manual configuration. This can lead to a user experience that is filled with downtime and a codebase that is a mess of environment-specific hacks and workarounds.",
            solution: "We vet for experts in **Terraform and infrastructure as code**. Our engineers are proficient in using Terraform to build a fully automated, immutable infrastructure. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Fully Automated, Immutable, and Observable Infrastructure",
        },
        {
            icon: AlertTriangle,
            pain: "Is your application not portable across different cloud providers?",
            problem: "Many applications are not built to be portable across different cloud providers. This can lead to a codebase that is a mess of environment-specific hacks and workarounds, and a cloud bill that is out of control.",
            solution: "Our engineers are masters of **Terraform and the HashiCorp ecosystem**. They are vetted on their ability to use Terraform to build a portable, cloud-agnostic application. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Portable, Cloud-Agnostic Application",
        },
        {
            icon: AlertTriangle,
            pain: "Is your team not leveraging the full power of the infrastructure as code ecosystem?",
            problem: "The infrastructure as code ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
            solution: "We look for engineers proficient with **the infrastructure as code ecosystem and the Terraform module registry**. They are vetted on their ability to build applications that are powered by the best of the infrastructure as code ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
            kpi: "An Application That is Powered by the Best of the Infrastructure as Code Ecosystem",
        }
    ],
    evaluation: [
        "The Terraform CLI and the resource block",
        "Infrastructure as code and the HashiCorp ecosystem",
        "The Terraform module registry and the remote backend",
        "Terraform providers and the provider ecosystem",
        "Terraform security and best practices",
    ],
    technical_analysis: "The Terraform evaluation focuses on a candidate's ability to build a consistent, portable, and efficient cloud infrastructure. We assess their understanding of the entire infrastructure as code ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **the Terraform CLI and the resource block**; candidates must demonstrate how to use the Terraform CLI to manage the entire lifecycle of a cloud infrastructure, and how to use the resource block to define and configure a cloud resource. We also test their ability to build **portable and cloud-agnostic** applications that can run on any cloud provider. Finally, we assess their knowledge of the Terraform module registry, and their ability to leverage it to build a modern, high-performance backend.",
    interlink_slugs: ["aws", "azure", "google-cloud", "devops-engineering"],
};

export default terraform;
