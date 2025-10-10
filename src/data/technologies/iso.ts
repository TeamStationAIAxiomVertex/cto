
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const iso: TechEntry = {
    name: "ISO 27001",
    category: "Security & GRC",
    categorySlug: "security-grc",
    seo_title: "Hire ISO 27001 Experts | Compliance & Information Security",
    meta_description: "Achieve and maintain ISO 27001 certification. Hire elite remote compliance experts vetted for their deep understanding of ISMS implementation. Book a call.",
    intro: "ISO 27001 is the international standard for information security management. You need an expert who understands that achieving compliance is not just about a checklist, but about building a robust Information Security Management System (ISMS). Our vetting process identifies professionals who are experts in the ISO 27001 framework, from risk assessment to control implementation and internal audits.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you struggling to navigate the complexities of ISO 27001?",
            problem: "The ISO 27001 standard is extensive and can be overwhelming. Without expert guidance, companies often struggle to interpret the requirements, leading to a long, expensive, and ultimately unsuccessful certification process.",
            solution: "We vet for experts in **ISO 27001 implementation**. Our professionals have hands-on experience building an ISMS from the ground up, conducting risk assessments, and selecting appropriate controls from Annex A to ensure a smooth path to certification.",
            kpi: "Successful ISO 27001 Certification"
        }
    ],
    evaluation: [
        "Deep knowledge of ISO 27001 clauses and Annex A controls",
        "Experience with ISMS implementation and documentation",
        "Risk assessment and treatment methodologies",
        "Internal audit and management review processes",
        "Integration with other compliance frameworks (e.g., SOC 2)"
    ],
    technical_analysis: "The ISO 27001 evaluation focuses on a candidate's practical experience and deep understanding of the standard. Candidates are assessed on their ability to design and implement an ISMS, including the creation of key documentation like the Statement of Applicability. We test their knowledge of risk assessment methodologies and their ability to map business risks to specific Annex A controls. A key part of the evaluation is their experience with the audit process, both internal and external, ensuring they can successfully guide an organization through certification.",
    interlink_slugs: ["soc", "security-engineering", "devops-engineering", "aws"]
};

export default iso;
