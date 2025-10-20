
import { Cloud, DollarSign, AlertTriangle, Key } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const aws: TechEntry = {
    name: "AWS",
    category: "DevOps & Cloud Infrastructure",
    categorySlug: "devops-cloud",
    seo_title: "Hire Senior AWS Cloud Architects | VPC, EC2, Lambda, and Security Experts",
    meta_description: "Hire pre-vetted AWS Cloud Architects specializing in high-scale infrastructure, FinOps, cost optimization, and leveraging advanced services like Lambda, ECS/EKS, and security best practices.",
    intro: "AWS mastery goes far beyond launching an EC2 instance. Our vetting process identifies engineers who can architect secure, resilient, and cost-optimized infrastructure using the full AWS suite (VPC, S3, RDS, Lambda, EKS). You get a developer who treats infrastructure as code and ensures cloud spend provides maximum business value.",
    pains: [
        {
            iconName: "AlertTriangle",
            pain: "Our monthly AWS bill is skyrocketing and unpredictable.",
            problem: "Lack of FinOps discipline and over-provisioning of resources (like EC2 or RDS) leads to unnecessary cloud waste. Organizations often fail to leverage reserved instances, spot instances, or serverless elasticity.",
            solution: "Our experts focus on **FinOps**. They are vetted to optimize infrastructure for cost using techniques like rightsizing, automated resource termination, serverless adoption (Lambda), and detailed cost allocation tagging.",
            kpi: "15-25% Reduction in Monthly Cloud Spend (via FinOps)"
        },
        {
            iconName: "AlertTriangle",
            pain: "Our infrastructure is manually managed, slow, and error-prone.",
            problem: "Relying on the AWS console or manual scripts for provisioning leads to configuration drift, security vulnerabilities, and slow disaster recovery times.",
            solution: "We vet for mastery in **Infrastructure as Code (IaC)** using Terraform or CloudFormation. Our engineers build fully self-healing, codified environments that are version-controlled, auditable, and deployable across multiple regions.",
            kpi: "99% Reduction in Configuration Drift"
        },
        {
            iconName: "AlertTriangle",
            pain: "We have constant security vulnerabilities and audit failures.",
            problem: "Misconfigured IAM policies, public S3 buckets, and non-compliant VPC settings are common. Lack of security auditing and monitoring exposes the business to massive risk.",
            solution: "Our experts focus on **DevSecOps** and AWS security services (GuardDuty, Security Hub). They are tested on implementing Zero Trust networking, least-privilege IAM policies, and VPC segmentation to create highly secure, auditable environments.",
            kpi: "Zero Critical Security Audit Findings"
        }
    ],
    evaluation: [
        "Deep architectural knowledge of VPC, Subnets, and Network ACLs.",
        "Expertise in Infrastructure as Code (Terraform or CloudFormation).",
        "Mastery of compute services: EC2, Lambda, ECS, and EKS (Kubernetes on AWS).",
        "IAM policies, roles, and least-privilege access implementation.",
        "FinOps and cost optimization strategies (Reserved Instances, Spot Instances).",
    ],
    technical_analysis: "The AWS evaluation moves past certification knowledge and focuses on real-world architecture. Candidates must design a multi-tier, multi-AZ application with disaster recovery baked in. We specifically test their ability to debug complex networking issues within a VPC and troubleshoot security problems related to IAM roles and policies. For modern cloud platforms, mastery of serverless (Lambda/API Gateway) and containerization (EKS/ECS) is mandatory. The core assessment asks: Can the candidate build, secure, and justify the *cost* of the proposed architecture?",
    interlink_slugs: ["devops-engineering", "terraform", "kubernetes", "serverless", "api-security"],
    is_ready: true,
};

export default aws;
