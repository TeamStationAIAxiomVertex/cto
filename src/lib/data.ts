export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: { text: string }[];
  chartData: { name: string; value: number }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'atticus',
    title: 'Atticus: From Broken POC to App Store MVP in <3 Months',
    subtitle: 'TeamStation AI assembled a nearshore squad that took a non-functional POC and delivered a full web/iOS estate settlement MVP, saving an estimated $550,000.',
    metrics: [
      { label: 'Industry', value: 'LegalTech' },
      { label: 'Time to MVP', value: '<3 Months' },
      { label: 'Cost Savings', value: '$550,000+' }
    ],
    challenge: 'Atticus faced a tight budget and a three-month deadline to deliver a production-ready probate and estate-settlement experience on both web and iOS, starting from a non-functional proof of concept and requiring a complete technology stack migration.',
    solution: 'TeamStation AI assembled a precision-matched LATAM squad, including senior engineers and a product manager, who took ownership of the project. We orchestrated a rapid, structured discovery process, defined a shippable MVP, and executed a pragmatic stack transition to accelerate development.',
    results: [
      { text: 'Shipped a production-ready MVP in under 3 months, and a complete system in under 6.' },
      { text: 'Achieved successful Apple App Store approval and release to the market.' },
      { text: 'Saved an estimated $550,000 in development costs compared to typical alternatives.' },
      { text: 'Generated approximately 750 lifetime downloads and an estimated $100K in lifetime revenue.' }
    ],
    chartData: [
      { name: 'Q1 (Before)', value: 5 },
      { name: 'Q2', value: 25 },
      { name: 'Q3 (MVP)', value: 80 },
      { name: 'Q4 (GA)', value: 120 },
    ],
  },
  {
    slug: 'rmj-technologies',
    title: 'RMJ Technologies: Rescuing a Monolith to Scale to 15,000 Users',
    subtitle: 'See how TeamStation AI stabilized a fragile monolithic platform, enabling multi-million dollar growth and massive user-scaling for an automotive fleet optimization provider.',
    metrics: [
        { label: 'Industry', value: 'Automotive Fleet' },
        { label: 'Users Scaled', value: '15,000+' },
        { label: 'Core Problem', value: 'Monolith Rescue' }
    ],
    challenge: 'RMJ Technologies was struggling with a semi-functional monolithic platform built offshore. The system suffered from critical onboarding failures, delayed driver training schedules, and an inability to generate reports, blocking significant growth opportunities.',
    solution: 'TeamStation AI deployed a dedicated nearshore squad with deep .NET and Vue.js experience. The team included delivery and product management to enforce discipline, refactor critical modules, and launch a progressive microservices program to decouple key functionalities.',
    results: [
      { text: 'Stabilized the platform and restored on-time delivery of driver training, ensuring compliance.' },
      { text: 'Unlocked scalability, enabling the platform to onboard users toward a goal of 15,000.' },
      { text: 'Enabled multi-million-dollar revenue expansion by unblocking enterprise client onboarding.' },
      { text: 'Reduced operational risk through improved observability and safer, more frequent deployments.' }
    ],
    chartData: [
      { name: 'Q1 (Before)', value: 10 },
      { name: 'Q2', value: 15 },
      { name: 'Q3', value: 50 },
      { name: 'Q4 (Scaling)', value: 150 },
    ],
  },
  {
    slug: 'parsable',
    title: 'Parsable: Resolving Enterprise SSO Failures After 18 Vendors Failed',
    subtitle: 'TeamStation AI\'s nearshore squad resolved a critical Okta SSO issue for a marquee enterprise client, restoring access and unlocking new revenue streams.',
    metrics: [
        { label: 'Industry', value: 'Industrial Automation' },
        { label: 'Challenge', value: 'Critical SSO Failure' },
        { label: 'Key Tech', value: 'Okta, SAML' }
    ],
    challenge: 'Parsable faced a persistent, mission-critical Okta SSO failure impacting a major enterprise client, blocking daily user access and halting the onboarding of new billable users. After 18 other vendors failed to solve the issue, the pressure was immense.',
    solution: 'TeamStation AI was selected for its superior talent quality and security governance. We deployed a targeted squad of senior engineers with deep identity and SSO experience. The team executed a non-disruptive diagnostic plan, identified the failure path in the SAML exchange, and shipped a targeted fix.',
    results: [
      { text: 'Restored stable SSO authentication for the affected enterprise client without any platform downtime.' },
      { text: 'Unlocked the onboarding of additional billable users, directly impacting revenue.' },
      { text: 'Established a trusted, long-term partnership, with the team remaining embedded to drive product velocity.' },
      { text: 'Succeeded where 18 previous vendors had failed, demonstrating superior diagnostic and execution capabilities.' }
    ],
    chartData: [
      { name: 'Week 1-4', value: 0 },
      { name: 'Week 5-8', value: 5 },
      { name: 'Week 9 (Fix)', value: 200 },
      { name: 'Week 10+', value: 250 },
    ],
  },
];


export type PlaybookPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const playbookData: PlaybookPost[] = [
    {
        slug: 'nearshore-vs-offshore',
        title: 'Is Your Offshore Team a Strategic Asset or a Hidden Drain?',
        description: 'A framework for CTOs to diagnose the true cost—and risk—of their global talent strategy, moving beyond "cost per hour" to Total Cost of Ownership.',
        content: `
## The Core Diagnosis: Latency, Fidelity, and Control

The choice between a nearshore or offshore model isn't just about budget; it's a strategic bet on how you plan to build, innovate, and compete. While offshore teams in distant time zones might seem cheaper on a spreadsheet, the Total Cost of Ownership (TCO) often skyrockets due to hidden friction.

The core issue is latency. Not network latency, but human latency. Waiting 12 hours for a simple answer to unblock your team is a silent killer of velocity. Nearshore teams, typically in LATAM, eliminate this bottleneck. That real-time overlap is the single biggest lever you have to reclaim lost productivity.

## Decision Framework: A Tool for Diagnosing Your Risk

| Factor | Nearshore (e.g., TeamStation AI) | Offshore (e.g., Southeast Asia) |
| :--- | :--- | :--- |
| **Time-Zone Overlap** | High (4-8 hours). Enables real-time pairing and problem-solving. | Low (0-2 hours). Forces asynchronous handoffs and late-night calls. |
| **Collaboration Fidelity** | High. Ad-hoc conversations are possible, leading to faster feedback. | Low. Communication is formal, ticket-based, and prone to misunderstanding. |
| **Cultural & Language Alignment** | High. Strong affinity with U.S. work culture reduces friction. | Varies. Can introduce communication barriers that slow down projects. |
| **On-Site Escalation Path** | Simple. Faster, cheaper travel for critical workshops or crisis resolution. | Complex. Expensive, multi-day travel, making it impractical for urgent needs. |
| **Compliance & Legal Risk** | Lower. Our integrated security and compliance framework handles EOR, data privacy, and IP laws. | Higher. Navigating different legal frameworks can be complex and risky. |

## Common Pains of Outsourcing & How to Cure Them

*   **The Pain of Vendor Churn:** Does your offshore partner rotate engineers, causing constant knowledge loss and forcing your team to re-train them? This churn is a hidden tax on your budget and timeline.
*   **The Pain of "Vendor Fog":** Can you get a straight answer on project status, or is it lost in a fog of vague updates and delayed reports? A lack of direct access to source control, CI/CD, and telemetry is a red flag.
*   **The Pain of Productivity Mismatch:** Do lower hourly rates actually translate to lower costs per feature, or is velocity half of what you expect? Ineffective collaboration can burn through your budget with nothing to show for it.

`
    },
    {
        slug: 'latam-economics',
        title: 'LATAM Economics for CTOs: A CFO-Ready Framework',
        description: 'A playbook for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, accounting for hidden risks and productivity multipliers.',
        content: `
## Modeling the True Cost: A Tale of Two Budgets

An engineer’s salary is just the tip of the iceberg. A CTO who presents a plan based solely on salary comparisons is walking into a financial trap. Below, we model the true TCO for a senior engineer, comparing the risky "Do-It-Yourself" approach with TeamStation AI's predictable, all-in-one platform model.

| Cost Component | DIY "Build" Model (Annual Estimate) | TeamStation AI "Buy" Model |
| :--- | :--- | :--- |
| Senior Engineer Salary | ~$85,000 | All-inclusive in one rate |
| Recruitment & Agency Fees (20%) | ~$17,000 | Included |
| Legal, EOR & Payroll Admin | ~$12,000 | Included |
| Hardware, MDM & Security Tools | ~$3,500 | Included |
| Benefits & Statutory Costs | ~$17,000 | Included |
| Management & HR Overhead | ~$5,000 | Included |
| **True TCO (Estimated)** | **~$139,500** | **~$83,040** |

## The "Vacancy Tax": How Slow Hiring Burns Your Budget

Beyond direct costs, there's a powerful hidden cost: the value you lose every day a critical role sits empty. We call this the Vacancy Tax. Faster, more accurate hiring doesn't just save time; it pulls future revenue forward.

*(36 days saved / 365) \* $1,000,000 ARR = $98,630*
*ARR pulled forward by hiring in 9 days vs. the industry average of 45.*

## Productivity: The Ultimate Economic Lever

Time-zone alignment is not a "nice-to-have"; it's a direct multiplier on output. A nearshore team operating in real-time with your U.S. engineers eliminates the communication lags that kill velocity in offshore models.
`
    },
    {
        slug: 'build-vs-buy',
        title: 'Build vs. Buy: A Framework for Scaling Your Team',
        description: 'Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of cost, speed, and risk.',
        content: `
## The True Cost of "Building" a Nearshore Operation

Building an in-house team in a new region involves far more than just salaries. These are the hidden costs—the "gotchas" that sink budgets and timelines.

**Direct & Indirect Costs:**
*   Recruitment fees or internal recruiter salaries.
*   Legal fees for setting up a local entity.
*   HR and payroll administration costs.
*   Hardware procurement and IT setup.
*   Time spent by your existing team on interviewing and onboarding.

**Risks & Liabilities:**
*   Compliance risk with local labor laws.
*   High cost of a mis-hire (often 6-12 months of salary).
*   Security risk from unmanaged devices.
*   Slow time-to-market as you build the team.

## The Value of "Buying" into a Nearshore Co-Pilot

Partnering with TeamStation AI abstracts away the complexity and risk, allowing you to focus on building your product.

**What You Get:**
*   Access to a 2.6M+ talent graph, vetted by cognitive AI.
*   One simple, all-inclusive monthly rate.
*   EOR, payroll, and local compliance handled for you.
*   Secure, MDM-managed devices for all team members.
*   Cyber & E&O insurance included.
*   Faster time-to-market (Time-to-Offer ≈ 9 days).

## The Verdict

For most growth-stage companies, the "Build" model presents significant hidden costs and risks. The "Buy" model, offered by an integrated platform like TeamStation AI, provides a faster, safer, and more cost-effective path to scaling your engineering team.
`
    },
    {
        slug: 'security-compliance',
        title: 'The Playbook for Audit-Ready Nearshore Operations',
        description: 'Security isn\'t an afterthought; it\'s the foundation of a scalable and trustworthy nearshore strategy. This playbook details how TeamStation AI builds a secure, compliant operational environment from day one.',
        content: `
## The Three Pillars of Nearshore Security

*   **SOC 2 / ISO 27001 Alignment:** Our operational controls for security, availability, processing integrity, confidentiality, and privacy are aligned with leading industry standards, providing you an audit-ready posture.
*   **Secure Device & MDM:** We provision, secure, and manage all developer laptops with enterprise-grade Mobile Device Management (MDM), enforcing policies like disk encryption, strong passwords, and remote wipe.
*   **Integrated EOR & Compliance:** We handle all Employer of Record (EOR) complexities, ensuring compliance with local labor laws in every LATAM country we operate in, mitigating your legal and financial risk.

## The Security Checklist for Vetting Any Partner

When evaluating any remote talent partner, your due diligence should include these critical questions. A "no" to any of these is a major red flag.
*   **Device Management:** Do you provide and manage corporate-owned devices for all engineers? Are they enrolled in an MDM solution?
*   **Access Control:** Do you enforce MFA/SSO and role-based access control (RBAC) with least-privilege principles?
*   **Data Handling:** Is there a clear policy for handling sensitive data and PII? Is data encrypted in transit and at rest?
*   **Compliance:** Can you provide evidence of alignment with frameworks like SOC 2 or ISO 27001?
*   **Insurance:** Do you carry Cyber and Errors & Omissions (E&O) insurance?
*   **Onboarding & Offboarding:** Is there a formal, secure process for provisioning and de-provisioning access?
`
    },
     {
        slug: 'bias-free-technical-hiring-axiom-cortex',
        title: 'Beyond Resumes: A Playbook for Bias-Free Technical Hiring',
        description: 'This playbook outlines how to use the Axiom Cortex™ engine to build a fairer, faster, and more accurate hiring process.',
        content: `
## The Problem: Why Resumes and Unstructured Interviews Fail

Relying on resumes is like navigating with an old, inaccurate map. They tell you where a candidate has been, but not how they think, how they solve problems, or how quickly they learn. Unstructured interviews are equally flawed, often devolving into conversations that favor charismatic speakers over deep thinkers, introducing unconscious bias. The result? You miss out on exceptional talent.

## The Solution: Three Pillars of Science-Based Hiring

*   **Cognitive Science over Credentials:** Axiom Cortex™ analyzes 44 distinct psychometric and NLP signals to evaluate problem-solving, architectural instinct, and learning orientation—traits that resumes cannot capture.
*   **Language Fairness Calibration:** Our system is designed to mitigate bias against non-native English speakers. It focuses on the logical and technical substance of an answer, not just linguistic fluency.
*   **Structured, Auditable Evidence:** Every evaluation is based on a structured interview and work-sample tests. The entire process is recorded and analyzed, creating an auditable evidence locker for every candidate.

## Putting It Into Practice: The Axiom Cortex™ Workflow

1.  **Role Definition:** We work with you to define the ideal cognitive and technical profile for the role.
2.  **Structured Interview:** Candidates undergo a standardized technical interview designed to test specific competencies and cognitive traits.
3.  **AI-Powered Analysis:** The Axiom Cortex™ engine analyzes the interview, scoring the candidate against the ideal profile.
4.  **Evidence-Based Decision:** You receive a detailed report, including a cognitive fingerprint and an evidence locker, allowing you to make a data-driven decision.
`
    }
];
