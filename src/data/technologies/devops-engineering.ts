
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const devopsEngineering: TechEntry = {
    name: "DevOps Engineering",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire DevOps Engineers | Cloud, CI/CD, and Automation Experts",
    meta_description: "Build a reliable, scalable, and automated software delivery pipeline. Hire elite remote DevOps engineers vetted for their deep understanding of cloud, CI/CD, and infrastructure as code. Book a call.",
    intro: "DevOps is a set of practices that combines software development and IT operations. You need an engineer who understands that DevOps is not just about tools, but about a culture of collaboration, automation, and measurement. Our vetting process identifies developers who are experts in the entire DevOps lifecycle—from infrastructure as code and CI/CD to monitoring and observability—and can architect a software delivery pipeline that is as reliable as it is efficient. By hiring a DevOps expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your software delivery process slow, manual, and error-prone?",
            problem: "In many organizations, the software delivery process is a mess of manual handoffs, ad-hoc scripts, and long-running, error-prone deployments. This can lead to a user experience that is filled with bugs and a codebase that is a mess of hotfixes and rollbacks.",
            solution: "We vet for experts in **CI/CD and automation**. Our engineers are proficient in using tools like Jenkins, GitLab CI, and GitHub Actions to build a fully automated software delivery pipeline. This results in a codebase that is easy to reason about and a user experience that is free of bugs and regressions.",
            kpi: "A Fully Automated, Reliable, and Efficient Software Delivery Pipeline",
        },
        {
            icon: AlertTriangle,
            pain: "Is your infrastructure a mess of snowflakes and manual configuration?",
            problem: "In many organizations, the infrastructure is a mess of snowflakes and manual configuration. This can lead to a user experience that is filled with downtime and a codebase that is a mess of environment-specific hacks and workarounds.",
            solution: "Our engineers are masters of **infrastructure as code**. They are vetted on their ability to use tools like Terraform, Ansible, and CloudFormation to build a fully automated, immutable infrastructure. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Fully Automated, Immutable, and Observable Infrastructure",
        },
        {
            icon: AlertTriangle,
            pain: "Is your team flying blind when it comes to the health of your systems?",
            problem: "Many teams are not equipped to monitor and observe their systems in production. This can lead to a user experience that is frustrating and a codebase that is hard to maintain and test.",
            solution: "We look for engineers proficient with **monitoring and observability**. They are vetted on their ability to use tools like Prometheus, Grafana, and the ELK stack to build a modern, observable system. This results in a team that is equipped to monitor and observe their systems in production, and a user experience that is a joy to use for everyone.",
            kpi: "A Modern, Observable System That is a Joy to Use for Everyone",
        }
    ],
    evaluation: [
        "Infrastructure as code (e.g., Terraform, Ansible, CloudFormation)",
        "CI/CD and automation (e.g., Jenkins, GitLab CI, GitHub Actions)",
        "Containerization and orchestration (e.g., Docker, Kubernetes)",
        "Monitoring and observability (e.g., Prometheus, Grafana, ELK)",
        "Cloud platforms (e.g., AWS, Azure, Google Cloud)",
    ],
    technical_analysis: "The DevOps Engineering evaluation focuses on a candidate's ability to build a reliable, scalable, and automated software delivery pipeline. We assess their understanding of the entire DevOps lifecycle, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **infrastructure as code and CI/CD**; candidates must demonstrate how to use tools like Terraform, Ansible, and Jenkins to build a fully automated, immutable infrastructure and software delivery pipeline. We also test their ability to build **observable** systems that are easy to monitor and debug. Finally, we assess their knowledge of cloud platforms, and their ability to leverage them to build a modern, high-performance backend.",
    interlink_slugs: ["aws", "kubernetes", "docker", "terraform"],
};

export default devopsEngineering;
