import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const argocd: TechEntry = {
  name: "Argo CD",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire Argo CD Experts | GitOps & Continuous Delivery Specialists",
  meta_description: "Implement declarative, Git-driven deployments to Kubernetes. Hire elite remote Argo CD experts vetted for GitOps principles, application management, and progressive delivery. Book a call.",
  intro: "Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. You need an engineer who can leverage Argo CD to make Git the single source of truth for your application deployments. Our vetting process identifies developers who are experts in the GitOps workflow, from managing application manifests in Git to automating the sync process with the Kubernetes cluster. By hiring an Argo CD expert, you get a developer who can build a modern, automated, and observable deployment system that is a joy to use, and a joy to maintain.",
  pains: [
    {
      iconName: "\1",
      pain: "Is your deployment process manual, imperative, and impossible to audit?",
      problem: "Manually applying kubectl commands or using imperative CI scripts to deploy applications leads to configuration drift, where the live state of your cluster no longer matches what's in version control. This makes rollbacks risky and auditing impossible.",
      solution: "We vet for experts in <strong>GitOps and declarative deployments</strong>. Our engineers use Argo CD to continuously monitor a Git repository and automatically sync the desired state to your Kubernetes cluster, providing a complete, auditable history of every change.",
      kpi: "Auditable, Declarative Kubernetes Deployments"
    },
    {
      iconName: "\1",
      pain: "Are you struggling with complex rollouts and rollbacks?",
      problem: "Managing deployments for complex applications with many microservices is difficult. A failure in one service can cascade, and rolling back to a previous stable state is often a complex, manual process.",
      solution: "Our engineers are masters of <strong>Argo CD's sync and rollback strategies</strong>. They are vetted on their ability to configure automated sync policies, health checks, and use one-click rollbacks to instantly revert to any previous version, ensuring a safe and reliable deployment process.",
      kpi: "Automated Sync and One-Click Rollbacks"
    },
    {
      iconName: "\1",
      pain: "Is it difficult to visualize the state of your applications across different clusters?",
      problem: "Without a centralized dashboard, it's hard to get a clear, real-time view of what's running in your clusters, whether applications are in sync with Git, and the health of each component.",
      solution: "We look for engineers proficient with the <strong>Argo CD user interface</strong>. They are vetted on their ability to use the UI to visualize application components, identify sync issues, and manage the entire application lifecycle, providing a single pane of glass for your Kubernetes deployments.",
      kpi: "Centralized Visibility and Application Management"
    }
  ],
  evaluation: [
    "GitOps principles and declarative configuration",
    "Argo CD architecture and core concepts (Application, Project)",
    "Sync policies, health checks, and automated rollbacks",
    "Integration with Helm, Kustomize, and other templating tools",
    "Multi-cluster and multi-environment management",
  ],
  technical_analysis: "The Argo CD evaluation is focused on a candidate's ability to implement a robust GitOps workflow for Kubernetes. We assess their understanding of the core principles of declarative configuration and continuous reconciliation. A critical part of the evaluation is a practical exercise where the candidate must configure an Argo CD Application to deploy a Helm chart from a Git repository. We also test their ability to manage complex, multi-environment deployments using Kustomize overlays. Finally, we assess their knowledge of Argo CD's security model, including RBAC and project restrictions.",
  interlink_slugs: ["gitops", "kubernetes", "helm", "ci-cd"],
};

export default argocd;
