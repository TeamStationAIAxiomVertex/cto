import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Please read these Terms of Service carefully before using the TeamStation AI CTO Playbook website.',
  robots: {
    index: false, // It's common to no-index legal pages
    follow: true,
  },
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfServicePage() {
  const siteName = "TeamStation AI's CTO Playbook";
  const mainSiteUrl = "https://teamstation.dev";
  const effectiveDate = "August 1, 2024";

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Terms of Service</span>
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <h1>Terms of Service</h1>
        <p className="lead"><strong>Effective Date:</strong> {effectiveDate}</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using our website, {siteName}, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of TeamStation AI and its licensors. Our content, including the playbooks found in our <Link href="/playbook/hub">Playbook Hub</Link> and our research in the <Link href="/research/hub">Research Hub</Link>, is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>

        <h2>3. Use of Our Service</h2>
        <p>
          You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
        </p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
          <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
        </ul>
        
        <h2>4. Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by TeamStation AI, such as our main corporate site at <a href={mainSiteUrl} target="_blank" rel="noopener noreferrer">{mainSiteUrl}</a>.
        </p>
        <p>
          TeamStation AI has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that TeamStation AI shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          The information provided on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. The TCO models and financial frameworks presented in our <Link href="/playbook/tco-model">TCO Model</Link> are for illustrative purposes and do not constitute financial advice.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall TeamStation AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
        </p>

        <h2>8. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          Questions? Email <a href="mailto:support@teamstation.ai">support@teamstation.ai</a> or{' '}
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
            target="_blank" rel="noopener noreferrer"
          >
            book a call
          </a>.
        </p>
         <p className="text-sm text-muted-foreground border-t border-border pt-4 mt-8">
            <strong>Disclaimer:</strong> This is a placeholder document and should be reviewed by counsel.
        </p>
      </article>
    </main>
  );
}
