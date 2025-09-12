
'use client';

import { AccordionItem } from '@/components/Accordion';

const msaSections = [
  {
    title: '1. Services: Our Role & Your Role',
    summary: 'We provide top-tier nearshore IT professionals (Assigned Personnel) to work under your direction. You manage their work, tasks, and projects; we handle their employment, payroll, and HR. This is a staff augmentation model, not a project-based contract.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">1.1 Scope of Services</h4>
      <p class="text-sm text-mute">Contractor shall provide Nearshore IT Staff Augmentation Services to Customer by furnishing qualified personnel (“Assigned Personnel”) to perform professional services as directed by Customer. Contractor does not provide fixed deliverables, product development, or project-based services under this Agreement. Customer shall be responsible for managing, directing, and supervising Assigned Personnel in their work.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">1.2 Statement of Work (SOW)</h4>
      <p class="text-sm text-mute">Each engagement under this Agreement shall be governed by a mutually agreed-upon Statement of Work (SOW), which shall include: The role, responsibilities, and required qualifications of Assigned Personnel, The engagement duration and termination notice requirements, The compensation structure (hourly, fixed monthly, or retainer-based), Any Customer-provided tools, technologies, or resources required for the performance of services, The work location (remote, hybrid, or on-site if applicable). Each SOW shall be separately executed by both Parties and incorporated into this Agreement. Any amendments to an SOW must be agreed upon in writing.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">1.3 Independent Contractor Relationship</h4>
      <p class="text-sm text-mute">Contractor is an independent provider of staffing services and does not act as an agent, partner, or employee of Customer. Assigned Personnel shall work under Customer’s direct supervision and follow Customer’s instructions. Contractor shall not be responsible for: Project completion, business outcomes, or deliverables, Performance evaluations, disciplinary actions, or operational oversight of Assigned Personnel, Customer’s internal project management, budgeting, or technical decisions. Customer acknowledges that Assigned Personnel are not employees of Customer and shall not be entitled to benefits, insurance, or compensation outside of the scope defined in the SOW.</p>
    `,
  },
  {
    title: '2. Term: Our Agreement Duration',
    summary: 'The agreement has an initial term of one year and automatically renews for additional one-year periods unless either of us provides a 30-day notice of non-renewal.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">2.1 Initial Term</h4>
      <p class="text-sm text-mute">This Agreement shall commence on the Effective Date and shall remain in effect for a period of one (1) year, unless terminated earlier in accordance with the terms herein (the “Initial Term”).</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">2.2 Renewal Term</h4>
      <p class="text-sm text-mute">Upon the expiration of the Initial Term, this Agreement shall automatically renew for additional twelve (12)-month periods (each, a “Renewal Term”), unless either Party provides written notice of its intent not to renew at least thirty (30) days prior to the end of the then-current term.</p>
    `,
  },
  {
    title: '3. Compensation: How Billing Works',
    summary: 'You are billed monthly for the services of our Assigned Personnel, based on the hourly or fixed-rate defined in your Statement of Work (SOW). Payment is due within 30 days of invoicing.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">3.1 Fees and Billing</h4>
      <p class="text-sm text-mute">Customer shall compensate Contractor for the Nearshore IT Staff Augmentation Services provided under this Agreement as specified in each applicable Statement of Work (SOW). Fees shall be based on one or more of the following pricing structures: Hourly Rate – Based on the actual hours worked by Assigned Personnel, tracked and reported per the terms of the applicable SOW. Fixed Monthly Rate – A set fee per Assigned Personnel per month, as outlined in the applicable SOW.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">3.2 Invoicing</h4>
      <p class="text-sm text-mute">Contractor shall submit invoices to Customer on a monthly basis, unless otherwise specified in an SOW. Each invoice shall include: The name and role of Assigned Personnel, The billing period covered by the invoice, The total hours worked (if applicable), The total amount due.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">3.3 Payment Terms</h4>
      <p class="text-sm text-mute">Customer shall remit payment within [thirty (30) days] from the date of receipt of a valid invoice (“Net 30”). Payments shall be made via electronic funds transfer (EFT), wire transfer, or another mutually agreed-upon payment method.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">3.4 Late Payments</h4>
      <p class="text-sm text-mute">If any invoice remains unpaid beyond five (5) business days after the due date, Contractor reserves the right to: Charge a late fee of 1.5% per month (or the maximum legal interest rate) on outstanding balances. Suspend Assigned Personnel’s services until payment is received.</p>
    `,
  },
  {
    title: '5. Intellectual Property: You Own What You Build',
    summary: 'Any work product, software, or documentation created by our Assigned Personnel for you, using your tools and direction, is owned entirely by you. We retain no rights to the work they do for your projects.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">5.1 Pre-Existing Intellectual Property</h4>
      <p class="text-sm text-mute">Each Party shall retain all rights, title, and interest in and to any pre-existing intellectual property (“Pre-Existing IP”) that it owned or had rights to prior to the Effective Date of this Agreement. Nothing in this Agreement shall transfer ownership of any Pre-Existing IP from one Party to the other.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">5.2 No Work-For-Hire Arrangement</h4>
      <p class="text-sm text-mute">Contractor provides Nearshore IT Staff Augmentation Services and does not operate under a work-for-hire or product development model. Assigned Personnel shall provide services under Customer’s supervision, and any work performed shall be considered contributions to Customer’s business operations rather than proprietary creations of Contractor.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">5.3 Ownership of Work Performed by Assigned Personnel</h4>
      <p class="text-sm text-mute">To the extent Assigned Personnel produce work product, software, documentation, or other materials (“Work Product”) in the course of providing services under this Agreement: Such Work Product shall be deemed owned by Customer, provided that it is created solely using Customer’s proprietary information, tools, and direction. Contractor does not retain any rights to Work Product unless explicitly stated in an applicable SOW. Contractor shall ensure Assigned Personnel agree in writing to assign all rights in such Work Product to Customer to the extent legally permissible.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">5.4 Contractor’s Proprietary Tools and Methods</h4>
      <p class="text-sm text-mute">Notwithstanding the above, Contractor retains all rights to any of its proprietary tools, processes, methodologies, or technologies used in delivering staffing services. If Assigned Personnel utilize Contractor’s proprietary software, templates, or automation tools during service, such materials remain the property of Contractor and are not transferred to Customer unless explicitly agreed in writing.</p>
    `,
  },
  {
    title: '6. Confidentiality: Your Information is Secure',
    summary: 'We are legally bound to protect your confidential information with the same level of care we use for our own. This includes your business plans, software, and any proprietary data our personnel access. This obligation lasts for three years after our agreement ends.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">6.1 Definition of Confidential Information</h4>
      <p class="text-sm text-mute">For purposes of this Agreement, "Confidential Information" means any non-public, proprietary, or sensitive information disclosed by one Party ("Disclosing Party") to the other Party ("Receiving Party") in connection with this Agreement...Confidential Information includes, but is not limited to: Business plans, financial data, pricing structures...Software, technical documentation, processes...Customer lists, trade secrets, and intellectual property...</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">6.2 Obligations of Confidentiality</h4>
      <p class="text-sm text-mute">Each Party agrees to: Use Confidential Information only as necessary to fulfill its obligations under this Agreement. Not disclose Confidential Information to any third party without prior written consent. Take reasonable precautions to protect the confidentiality of disclosed information...</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">6.5 Duration of Confidentiality Obligations</h4>
      <p class="text-sm text-mute">The obligations under this Confidentiality section shall remain in effect for a period of [three (3)] years after the termination of this Agreement.</p>
    `,
  },
   {
    title: '8. Limitation of Liability: A Fair and Balanced Approach',
    summary: 'Our liability is capped to ensure a fair allocation of risk. Except for critical breaches like confidentiality, our total liability is limited to the amount you paid us in the 12 months preceding a claim. We are not liable for indirect damages like lost profits.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">8.1 No Indirect or Consequential Damages</h4>
      <p class="text-sm text-mute">EXCEPT FOR LIABILITY ARISING FROM A BREACH OF CONFIDENTIALITY OBLIGATIONS (SECTION 6), GROSS NEGLIGENCE, WILLFUL MISCONDUCT, OR INDEMNIFICATION OBLIGATIONS (SECTION 7), NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR: ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, ANY LOSS OF PROFITS, BUSINESS INTERRUPTION, OR LOSS OF DATA...</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">8.2 Cap on Liability</h4>
      <p class="text-sm text-mute">EXCEPT FOR LIABILITY ARISING FROM A BREACH OF CONFIDENTIALITY, INDEMNIFICATION OBLIGATIONS, OR CLAIMS INVOLVING FRAUD, GROSS NEGLIGENCE, OR WILLFUL MISCONDUCT, EACH PARTY’S TOTAL LIABILITY UNDER THIS AGREEMENT SHALL NOT EXCEED THE TOTAL AMOUNT PAID OR PAYABLE BY CUSTOMER TO CONTRACTOR UNDER THE APPLICABLE STATEMENT OF WORK (SOW) IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.</p>
    `,
  },
  {
    title: '9. Termination & Personnel Support: Flexibility and Assurance',
    summary: 'You can terminate our agreement with 30 days notice. If a team member isn\'t a good fit, we\'ll work with you on a performance plan or find a replacement. We offer a 60-day guarantee period for early departures, prioritizing a replacement at no extra placement cost.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">9.1 Termination for Convenience</h4>
      <p class="text-sm text-mute">Either Party may terminate this Agreement or any active Statement of Work (SOW) for convenience by providing thirty (30) days’ prior written notice to the other Party.</p>
       <h4 class="text-lg font-semibold mt-4 mb-2">9.4 Personnel Placement and Support</h4>
      <p class="text-sm text-mute"><strong>9.4b Performance Management and Resolution:</strong> Should Customer identify a significant and persistent performance deficiency... Contractor will... work collaboratively with Customer and the Personnel to understand the issues and develop a mutually agreeable performance improvement plan ("PIP")...</p>
      <p class="text-sm text-mute"><strong>9.4c Replacement for Unsatisfactory Performance:</strong> If, despite the implementation of a PIP, the Personnel's performance does not improve... Contractor will, at Customer's request, initiate the process to replace the Personnel...</p>
      <p class="text-sm text-mute"><strong>9.4d Early Departure or Unsuitability of Personnel:</strong> For the purposes of this section, an "Early Departure Period" shall be defined as the first sixty (60) calendar days... If Personnel voluntarily resigns, or if Contractor determines... that Personnel is not a suitable fit... during the Early Departure Period, Contractor will use commercially reasonable efforts to identify and propose suitable replacement Personnel as a top priority.</p>
    `,
  },
  {
    title: '11. Insurance: We Are Covered',
    summary: 'We maintain comprehensive insurance policies, including General Liability, Professional Liability (E&O), and Cyber Liability (up to $3M), to protect both parties and ensure a secure partnership.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">11.1 Required Insurance Coverage</h4>
      <p class="text-sm text-mute">Contractor shall maintain, at its own expense, during the term of this Agreement and any applicable SOWs, the following insurance coverage:</p>
      <ul class="list-disc pl-5 text-sm text-mute">
        <li><strong>Commercial General Liability Insurance:</strong> $1,000,000 per occurrence / $1,000,000 in the aggregate</li>
        <li><strong>Workers’ Compensation Insurance:</strong> As required by applicable law</li>
        <li><strong>Professional Liability / Errors and Omissions (E&O) Insurance:</strong> $1,000,000 per claim / $1,000,000 in the aggregate</li>
        <li><strong>Cyber Liability Insurance:</strong> $3,000,000 per claim / $3,000,000 in the aggregate</li>
      </ul>
    `,
  },
  {
    title: '19. Hiring of Employees: Our Direct Hire Policy',
    summary: 'We invest heavily in vetting and supporting our talent. If you wish to hire one of our team members directly, you can do so by paying a one-time "contract purchase" fee equivalent to three months of their billing rate, avoiding the standard 30% placement penalty.',
    content: `
      <h4 class="text-lg font-semibold mt-4 mb-2">19.1 No Direct Hiring of Assigned Personnel</h4>
      <p class="text-sm text-mute">During the term of this Agreement and for a period of twelve (12) months following the termination or expiration of any applicable Statement of Work (SOW), Customer agrees not to directly or indirectly solicit, hire, or engage any Assigned Personnel provided by Contractor, unless otherwise agreed in writing.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">19.2 Liquidated Damages for Unauthorized Hiring</h4>
      <p class="text-sm text-mute">If Customer hires or engages any Assigned Personnel in violation of Section 19.1, Customer shall pay Contractor a placement fee equal to 30% of the Assigned Personnel’s annual bill rate, unless Customer elects to execute a contract purchase to avoid the penalty.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2">19.3 Contract Purchase Option</h4>
      <p class="text-sm text-mute">To avoid the 30% annual bill rate placement fee, Customer may instead opt to purchase the contract by paying a one-time fee equivalent to three (3) months’ bill rate for the Assigned Personnel. This must be agreed upon in writing before the Assigned Personnel is hired.</p>
    `,
  },
];

const sowContent = `
    <h3 class="text-xl font-semibold mt-4 mb-2">1. AGREEMENT</h3>
    <p class="text-sm text-mute">This Statement of Work (SOW-001) is issued pursuant to the Master Services Agreement (MSA) executed by and between Attom Data Solutions, LLC ("Customer") and TeamStation Artificial Intelligence, LLC ("Contractor" or "TeamStation AI"), with an effective date of 7/10/2025 (the “MSA”).</p>
    <ul class="list-disc pl-5 text-sm text-mute">
        <li><strong>SOW Number:</strong> 001</li>
        <li><strong>Project Duration:</strong> 12 Months, extended upon mutual agreement</li>
        <li><strong>Estimated Start Date:</strong> July 21, 2025</li>
        <li><strong>Project Name:</strong> Nearshore IT Staff Augmentation – Senior Full Stack .NET Developer</li>
        <li><strong>Terms & Conditions:</strong> Per executed MSA</li>
        <li><strong>Execution Model:</strong> Remote team based in Latin America (LATAM)</li>
        <li><strong>Payment Terms:</strong> Net 30</li>
    </ul>

    <h3 class="text-xl font-semibold mt-4 mb-2">2. DESCRIPTION OF ENGAGEMENT</h3>
    <p class="text-sm text-mute">Customer has selected TeamStation AI to provide Nearshore IT Staff Augmentation Services. The engineer(s) working on this project will be prescreened and vetted by TeamStation AI, selected by Customer’s technical leadership, and fully integrated into Customer’s development team.</p>

    <h3 class="text-xl font-semibold mt-4 mb-2">3. RESPONSIBILITIES</h3>
    <h4 class="text-lg font-semibold mt-4 mb-2">3.1 Responsibilities of TeamStation AI</h4>
    <ul class="list-disc pl-5 text-sm text-mute">
        <li>Provide pre-screened, qualified, and experienced personnel.</li>
        <li>Ensure Assigned Personnel attend all required meetings.</li>
        <li>Maintain communication and documentation.</li>
        <li>Facilitate onboarding of Assigned Personnel.</li>
        <li>Support resource replacement in a timely manner.</li>
    </ul>
    <h4 class="text-lg font-semibold mt-4 mb-2">3.2 Responsibilities of Customer</h4>
    <ul class="list-disc pl-5 text-sm text-mute">
        <li>Provide sufficient remote access to project environments and tools.</li>
        <li>Supply technical documentation and assets.</li>
        <li>Ensure clear direction and project oversight.</li>
        <li>Define and manage project scope and timelines.</li>
        <li>Provide timely feedback on performance.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-4 mb-2">4. RATES & PAYMENT TERMS</h3>
    <p class="text-sm text-mute">The monthly rate for the Senior Full Stack .NET Developer is <strong>$6,920 USD</strong>. Invoices are issued on the 1st of each month with Net 30 payment terms.</p>

    <h3 class="text-xl font-semibold mt-4 mb-2">6. TIME OFF & PAID TIME OFF (PTO)</h3>
    <p class="text-sm text-mute">Assigned Personnel may take up to 15 days of paid time off (PTO) per year, subject to Customer’s prior written approval. The SOW also lists observed holidays, with the note that the Customer's holiday schedule takes precedence.</p>
`;

export default function TrustPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Trust Center
      </div>
      <header className="my-8 text-center">
        <h1 className="h1">The Trust Center: Our MSA & SOW, Explained</h1>
        <p className="lead max-w-3xl mx-auto">
          We believe a strong partnership starts with clarity. Our Master Services Agreement (MSA) and a sample Statement of Work (SOW) are designed to be fair, transparent, and easy to understand. Here’s a breakdown of the key sections, explained in plain English.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className='mb-12'>
            <h2 className='h2 text-center mb-6'>Master Services Agreement (MSA)</h2>
            {msaSections.map((section) => (
            <div key={section.title} className="card mb-4 p-6">
                <h3 className="h3 mt-0">{section.title}</h3>
                <p className="text-mute">{section.summary}</p>
                <AccordionItem title="View Full Legal Text">
                <div
                    dangerouslySetInnerHTML={{ __html: section.content }}
                />
                </AccordionItem>
            </div>
            ))}
        </div>
        
        <div>
            <h2 className='h2 text-center mb-6'>Sample Statement of Work (SOW)</h2>
            <div className="card p-6">
                <h3 className="h3 mt-0">SOW-001: Sample Engagement</h3>
                <p className="text-mute">This is a real-world example of an SOW for a Senior Full Stack .NET Developer, showing how we define roles, responsibilities, and rates for a specific engagement.</p>
                <AccordionItem title="View SOW Details">
                    <div
                        dangerouslySetInnerHTML={{ __html: sowContent }}
                    />
                </AccordionItem>
            </div>
        </div>
      </div>
    </main>
  );
}
