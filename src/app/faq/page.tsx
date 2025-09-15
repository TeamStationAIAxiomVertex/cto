
import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nearshore Engineering FAQs for CTOs | TeamStation AI',
  description: 'Get answers to your key questions about nearshore software development, talent vetting, security, and the total cost of ownership for LATAM engineering teams.',
  keywords: 'nearshore faq, cto faq, latam engineering faq, nearshore security, nearshore tco',
};

const faqs = [
    {
        question: "How can I be sure a candidate who interviews well will actually perform?",
        subQuestion: "I've been burned by charisma before.",
        answer: "<strong>The Pain:</strong> Traditional interviews are a gamble. They reward good speakers, not necessarily the best engineers, leading to costly mis-hires.<br/><br/><strong>Our Solution:</strong> We replace 'gut feel' with data. Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™</a> AI analyzes a structured, bias-aware interview to measure a candidate's true problem-solving ability. We provide you with an auditable <a href='/technical-interview-evaluation' class='text-primary hover:underline'>'Evidence Locker'</a> that proves their skill.<br/><br/><strong>The Proof:</strong> This scientific approach reduces mis-hire risk by over 90%, giving you confidence that you're hiring for capability, not just credentials. Our mismatch rate is ≤10%."
    },
    {
        question: "Isn't a direct US hire safer and easier to manage?",
        subQuestion: "This nearshore model seems complex.",
        answer: "<strong>The Pain:</strong> The 'safety' of a US hire comes with a massive price tag and a slow hiring process. The complexity you're worried about is the operational and legal overhead of building a nearshore team yourself.<br/><br/><strong>Our Solution:</strong> We absorb 100% of that complexity. Our platform is a complete 'business-in-a-box' that includes EOR, payroll, compliance, secure devices, and insurance. You get all the benefits of nearshore talent without any of the operational drag.<br/><br/><strong>The Proof:</strong> Our all-inclusive <a href='/playbook/latam-economics' class='text-primary hover:underline'>Total Cost of Ownership (TCO)</a> is often 40-60% lower than a fully-loaded US hire, and our time-to-offer is ≈9 days, not 60."
    },
    {
        question: "How do you handle security and compliance with a remote LATAM team?",
        subQuestion: "I can't afford a breach from an unmanaged laptop.",
        answer: "<strong>The Pain:</strong> Most nearshore vendors leave security entirely up to you, creating a massive liability. A single unmanaged device can fail a compliance audit or lead to a breach.<br/><br/><strong>Our Solution:</strong> Security is our default setting. Every engineer gets a corporate-owned, MDM-managed laptop with enforced security policies (encryption, patching). Our entire operation is SOC 2 / ISO 27001 aligned, and all work is covered by our Cyber/E&O insurance.<br/><br/><strong>The Proof:</strong> We provide an <a href='/trust' class='text-primary hover:underline'>audit-ready security posture</a> from Day 1. You don't take on the risk; we do."
    },
    {
        question: "What's the real difference between you and a staffing agency like BairesDev?",
        subQuestion: "They also promise the 'Top 1%'.",
        answer: "<strong>The Pain:</strong> Traditional staffing agencies are 'body shops.' They find a resume that matches keywords and place a contractor. You are left to handle everything else: compliance, security, IT, and management.<br/><br/><strong>Our Solution:</strong> We are a technology company, not a staffing agency. Our product is an integrated platform that provides not just the talent, but the entire operational and security wrapper to run that talent effectively. Our 'Top 1%' claim is backed by peer-reviewed, <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>scientific AI evaluation</a>, not just resume screening.<br/><br/><strong>The Proof:</strong> A single, predictable invoice covers everything under one accountable SLA. Read our full <a href='/comparisons/bairesdev' class='text-primary hover:underline'>BairesDev comparison</a>."
    },
    {
        question: "How do you guarantee a daylight-native workflow and avoid the 'offshore lag'?",
        subQuestion: "I've been burned by 12-hour time differences.",
        answer: "<strong>The Pain:</strong> The 12+ hour time difference with offshore teams creates a 'human latency tax.' A simple question takes 24 hours to answer, killing agile velocity and forcing your US team into late-night meetings.<br/><br/><strong>Our Solution:</strong> We only operate in LATAM, ensuring a minimum of 4-8 hours of daily overlap with US time zones. This enables real-time collaboration, pairing, and code reviews.<br/><br/><strong>The Proof:</strong> Our clients see PR review times drop from 36-72 hours to less than 8 hours within the first two sprints. It's a quantifiable boost to velocity that you can see in your DORA metrics."
    },
];

export default function FaqPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<[^>]*>?/gm, '') // Strip HTML for schema
            }
        }))
    };

    return (
        <main className="container max-w-4xl py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground">Home</Link> / <span>FAQs</span>
            </div>
            <header className="text-center my-12">
                <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Frequently Asked Questions for CTOs</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Straight answers to the hard questions about nearshore engineering, security, and value.
                </p>
            </header>

            <section className="my-16">
                 <div className="space-y-4">
                    <Accordion>
                        {faqs.map((faq, index) => (
                           <div key={index} className="rounded-lg border bg-card p-4 shadow-lg">
                             <AccordionItem title={
                                 <div className="flex items-start gap-3">
                                     <HelpCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                      <div>
                                          <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                                          <p className="text-sm text-muted-foreground m-0 font-normal text-left">{faq.subQuestion}</p>
                                      </div>
                                 </div>
                             }>
                                 <div className="prose dark:prose-invert max-w-none text-sm" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                             </AccordionItem>
                           </div>
                        ))}
                    </Accordion>
                </div>
            </section>
            
            <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
                <h2 className="text-2xl font-bold">Have a Different Question?</h2>
                <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                    Let's have a candid conversation. In 15 minutes, we can address your specific concerns and show you how our platform provides a solution.
                </p>
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                    Book a No-Bullshit Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </main>
    );
}
