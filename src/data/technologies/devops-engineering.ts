import { AlertTriangle } from "lucide-react";
import { GitBranch, Server, Cloud, Shield } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const devopsEngineering: TechEntry = {
  name: "DevOps Engineering",
  category: "DevOps & Cloud Infrastructure",
  categorySlug: "devops-cloud",
  seo_title:
    "Hire Senior DevOps Engineers | CI/CD, Kubernetes, and Cloud Automation Experts",
  meta_description:
    "Hire elite DevOps Engineers specializing in CI/CD, Kubernetes, Infrastructure as Code (IaC), and cloud-native observability to accelerate your software delivery lifecycle.",
  intro:
    "DevOps is not just a role; it's a culture of ownership and automation. Our DevOps Engineers are vetted for their expertise in building and maintaining the entire software delivery lifecycle, from CI/CD pipelines to container orchestration and cloud-native observability. They are the force multipliers who enable your development teams to ship faster and more reliably.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Our release process is slow, manual, and stressful.",
      problem:
        "Manual deployments are error-prone and create bottlenecks, leading to infrequent releases and a fear of pushing to production.",
      solution:
        "We vet for mastery in **CI/CD automation** using tools like Jenkins, GitLab CI, or GitHub Actions. Our engineers build fully automated, zero-downtime deployment pipelines that make releases a non-event.",
      kpi: "95% Reduction in Manual Deployment Steps",
    },
    {
      icon: AlertTriangle,
      pain: "Our infrastructure is unstable and hard to manage.",
      problem:
        "Manually configured servers lead to configuration drift, making it impossible to replicate environments or recover from failures quickly.",
      solution:
        "Our experts are tested on **Infrastructure as Code (IaC)** using Terraform or Ansible. They build immutable, version-controlled infrastructure that is self-healing and easy to manage.",
      kpi: "99.9% Environment Consistency",
    },
    {
      icon: AlertTriangle,
      pain: "We are not taking full advantage of the cloud.",
      problem:
        "Simply lifting and shifting applications to the cloud doesn't unlock its full potential. You're likely over-provisioning resources and not using cloud-native services effectively.",
      solution:
        "We vet for expertise in **cloud-native architecture**, including containerization (Docker/Kubernetes) and serverless (Lambda/Cloud Functions), to build scalable, resilient, and cost-effective systems.",
      kpi: "40% Improvement in Resource Utilization",
    },
  ],
  evaluation: [
    "Mastery of CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions).",
    "Deep expertise in Infrastructure as Code (Terraform, Ansible).",
    "Proficiency in containerization and orchestration (Docker, Kubernetes).",
    "Experience with cloud-native observability (Prometheus, Grafana, OpenTelemetry).",
    "Strong scripting and automation skills (Python, Bash, Go).",
  ],
  technical_analysis:
    "The DevOps Engineering vetting focuses on practical, hands-on skills. Candidates must design and implement a complete CI/CD pipeline for a microservices-based application, including automated testing, security scanning, and deployment to a Kubernetes cluster. We specifically test their ability to debug complex infrastructure issues and their understanding of cloud-native security best practices.",
  interlink_slugs: ["ci-cd", "kubernetes", "terraform", "aws", "google-cloud"],
  is_ready: true,
};

export default devopsEngineering;
