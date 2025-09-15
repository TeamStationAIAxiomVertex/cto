
import Link from 'next/link';
import type { Metadata } from 'next';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ for CTOs | Nearshore IT Staff Augmentation | TeamStation AI',
  description: 'Get answers to your critical questions about nearshore IT staff augmentation, risk management, total cost of ownership (TCO), and talent evaluation for LATAM engineers.',
  keywords: 'cto faq, nearshore faq, latam faq, staff augmentation faq, it outsourcing faq',
};

const faqSections = [
    {
        category: 'Vetting & Talent Quality',
        questions: [
            {
                pain: "How can I be sure a candidate who interviews well will actually perform?",
                question: "I've been burned by charisma before. How do you separate signal from noise?",
                answer: "This is the exact problem our <a href='/playbook/bias-free-technical-hiring-axiom-cortex' class='text-primary hover:underline'>Axiom Cortex™</a> was built to solve. Traditional interviews are flawed because they conflate communication style with technical ability. Our process measures 'Problem-Solving Agility' through structured, bias-aware evaluations. We provide an auditable <a href='/technical-interview-evaluation' class='text-primary hover:underline'>Evidence Locker</a> so you're judging the logic, not just the presentation. This is how we de-risk the hire."
            },
            {
                pain: "How is your 'Cognitive AI' different from a keyword scanner?",
                question: "Everyone claims to use AI in hiring. What makes you different?",
                answer: "Simple: we use Cognitive AI for psychometric analysis, not just resume parsing. While others use a generic LLM API call to find keywords, we use our proprietary, peer-reviewed models to score a candidate's latent cognitive traits. Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>research</a> outlines how we separate the signal (true ability) from the noise (jargon, fluency). It's the difference between finding someone who has 'used' a tool and someone who can 'think' with it."
            },
            {
                pain: "How do you ensure you're hiring for seniority, not just years of experience?",
                question: "I need a senior who can lead, not just a developer with 10 years on their resume.",
                answer: "We measure seniority through demonstrated behaviors, not years. Our evaluation for 'Architectural Instinct' and 'Collaborative Mindset' specifically looks for evidence of leadership, mentorship, and systems-level thinking. We find engineers who can take ownership of complex problems and elevate the team around them, which is the true definition of seniority."
            }
        ]
    },
    {
        category: 'Operations, Security & Risk',
        questions: [
            {
                pain: "How do you handle the security risk of remote developers?",
                question: "I can't have unmanaged laptops accessing my source code.",
                answer: "We agree. Security is our default. Our platform is built on a foundation of <a href='/trust' class='text-primary hover:underline'>Zero Trust</a>. We provide every engineer with a corporate-owned, MDM-enrolled laptop with enforced security policies (disk encryption, patching, endpoint monitoring). We absorb the IT overhead and the security risk, giving you an audit-ready posture from day one."
            },
            {
                pain: "How do you manage legal and HR compliance in multiple LATAM countries?",
                question: "I don't have the resources to become an expert in Brazilian labor law.",
                answer: "You don't have to. Our integrated platform includes full <a href='/services/integrated-services' class='text-primary hover:underline'>Employer of Record (EOR)</a> services. We handle all contracts, payroll, taxes, and statutory benefits, ensuring full compliance in every country we operate in. We manage the complexity so you can focus on your product."
            },
            {
                pain: "What happens if a developer leaves? How do you ensure continuity?",
                question: "I can't afford to lose all the project knowledge when someone quits.",
                answer: "Our model is designed for long-term retention, not short-term contracts. We achieve a 96%+ 90-day retention rate. Furthermore, our process emphasizes documentation and knowledge sharing. In the rare event of a departure, our rapid backfill process (sourcing from our pre-vetted talent pool) and structured onboarding ensures minimal disruption to your roadmap."
            }
        ]
    },
    {
        category: 'Financials & Total Cost of Ownership (TCO)',
        questions: [
            {
                pain: "How can I justify this to my CFO when a competitor's hourly rate is lower?",
                question: "My CFO only sees the sticker price. How do I prove the value?",
                answer: "You use our <a href='/playbook/tco-model' class='text-primary hover:underline'>TCO Model</a>. This framework moves the conversation from the misleading hourly rate to the only number that matters: Total Cost of Ownership. We help you quantify the massive 'hidden taxes' of traditional models—the cost of slow hiring, management overhead, and poor quality. Our all-inclusive model is often 40-60% cheaper than the fully-loaded cost of a seemingly 'cheaper' option."
            },
            {
                pain: "What's actually included in your rate? What are the hidden fees?",
                question: "I've been burned by vendors with a dozen add-on fees. What's the real cost?",
                answer: "There are no hidden fees. Our <a href='/pricing' class='text-primary hover:underline'>pricing</a> is all-inclusive and transparent. It bundles EOR, payroll, secure devices, MDM, insurance, and our full platform services into one predictable monthly rate. You get one contract, one invoice, and zero surprises."
            }
        ]
    },
     {
        category: 'Nearshore Model & Strategy',
        questions: [
            {
                pain: "Why should I choose nearshore over offshore?",
                question: "I can get a lower hourly rate in Asia. Why pay more for LATAM?",
                answer: "Because you're not paying for hours; you're paying for velocity. Our <a href='/playbook/nearshore-vs-offshore' class='text-primary hover:underline'>Nearshore vs. Offshore playbook</a> quantifies the 'human latency tax.' A 12-hour time difference means a simple question can take 24 hours to resolve. Our model's 4-8 hours of daily overlap enables the real-time collaboration that agile development demands, dramatically reducing rework and accelerating your time-to-market."
            },
            {
                pain: "How do I choose the right country in Latin America?",
                question: "Is Mexico better than Colombia? Or should I look at Brazil?",
                answer: "The 'best' country depends entirely on your specific needs for talent density, skill specialization, and cost. Our <a href='/hire/by-country' class='text-primary hover:underline'>Hire by Country guide</a> provides a detailed breakdown of the top tech hubs. We work with you to choose a location strategy that aligns with your specific role requirements and business goals."
            }
        ]
    }
];

export default function FAQPage() {
    const allFaqs = faqSections.flatMap(section => section.questions);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<a href/g, ' <a href').replace(/<\/a>/g, '</a> ')
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
                <Link href="/" className="hover:text-foreground">Home</Link> / <span>FAQ for CTOs</span>
            </div>
            <header className="text-center my-12">
                <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">CTO Frequently Asked Questions</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Straight answers to the hard questions CTOs face when evaluating nearshore partners. We address the pain points of risk, cost, and quality head-on.
                </p>
            </header>

            <div className="space-y-12">
                {faqSections.map(section => (
                    <section key={section.category}>
                        <h2 className="text-3xl font-bold text-center mb-8">{section.category}</h2>
                        <Accordion>
                            {section.questions.map((faq) => (
                                <AccordionItem
                                    key={faq.question}
                                    title={
                                        <div className="flex items-start gap-3">
                                            <HelpCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground text-left">{faq.question}</p>
                                                <p className="text-sm font-normal text-destructive text-left">{faq.pain}</p>
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                ))}
            </div>

             <div className="text-center rounded-lg bg-primary/10 p-8 mt-24 shadow-lg">
                <h2 className="text-2xl font-bold">Have a Different Question?</h2>
                <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                    Let's talk. In a 15-minute call, we can address your specific concerns and build a business case that makes sense for your organization.
                </p>
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
            </div>
        </main>
    );
}
