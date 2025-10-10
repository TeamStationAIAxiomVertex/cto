
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const soc: TechEntry = {
    name: "SOC 2",
    category: "Security & GRC",
    categorySlug: "security-grc",
    seo_title: "Hire SOC 2 Experts | Compliance & Trust Services Consultants",
    meta_description: "Achieve and maintain SOC 2 compliance. Hire elite remote compliance experts vetted for their deep understanding of the Trust Services Criteria. Book a call.",
    intro: "SOC 2 is a critical compliance framework for any SaaS company, demonstrating to customers that you have the necessary controls in place to protect their data. You need an expert who understands the nuances of the five Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Our vetting process identifies professionals who have hands-on experience preparing for and successfully completing SOC 2 audits.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you unprepared for your SOC 2 audit?",
            problem: "Going into a SOC 2 audit unprepared is a recipe for failure. It can be a long, expensive process that distracts your team from building product, and a failed audit can damage customer trust and sales.",
            solution: "We vet for experts in **SOC 2 readiness and audit preparation**. Our professionals can perform gap analyses, help you define your controls, and gather the necessary evidence to ensure a smooth and successful audit process.",
            kpi: "Successful SOC 2 Type I & Type II Attestation"
        }
    ],
    evaluation: [
        "Deep knowledge of the 5 Trust Services Criteria",
        "Experience with SOC 2 readiness assessments and gap analysis",
        "Control design and implementation",
        "Evidence collection and audit management",
        "Integration with automated compliance platforms"
    ],
    technical_analysis: "The SOC 2 evaluation is focused on a candidate's practical experience with the audit lifecycle. Candidates are assessed on their ability to interpret the Trust Services Criteria and map them to specific technical and process controls within an organization. We test their ability to design controls for a cloud-native environment, covering areas like logical access, change management, and security monitoring. A key part of the evaluation is their experience interacting with auditors and managing the evidence collection process, ensuring they can guide a company to a successful attestation.",
    interlink_slugs: ["iso", "security-engineering", "devops-engineering", "aws"]
};

export default soc;
