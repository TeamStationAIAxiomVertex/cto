
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TeamStation AI',
  description: 'This Privacy Policy explains how TeamStation AI collects, uses, and discloses information about you through our CTO Playbook website and services.',
  robots: {
    index: false, // It's common to no-index legal pages
    follow: true,
  },
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  const siteName = "TeamStation AI's CTO Playbook";
  const mainSiteUrl = "https://teamstation.dev";
  const effectiveDate = "August 1, 2024";

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Privacy Policy</span>
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <h1>Privacy Policy</h1>
        <p className="lead"><strong>Effective Date:</strong> {effectiveDate}</p>

        <h2>Introduction</h2>
        <p>
          Welcome to {siteName}. We are committed to protecting your privacy. This Privacy Policy is designed to help you understand how we collect, use, and safeguard the information you provide to us when you visit our website ({' '}
          <Link href="/">cto.teamstation.dev</Link>) or use our services. This policy is written to be as clear and straightforward as possible.
        </p>
        <p>
          For information about our main corporate services, please visit our main company website at <a href={mainSiteUrl} target="_blank" rel="noopener noreferrer">{mainSiteUrl}</a>.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information that you voluntarily provide to us, such as your name and email address when you book a strategy call. We may also collect non-personal information automatically as you navigate the site, such as your IP address, browser type, and operating system, through server logs and analytics tools like Google Analytics.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our website and services.</li>
          <li>Respond to your comments, questions, and requests.</li>
          <li>Communicate with you about our services, including scheduling calls and sending informational content if you opt-in.</li>
          <li>Analyze usage and trends to improve our website and user experience.</li>
          <li>Prevent fraudulent activity and ensure the security of our platform, as outlined in our <Link href="/trust">Trust Center</Link>.</li>
        </ul>

        <h2>3. Information Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
        </p>
        
        <h2>4. Data Retention</h2>
        <p>
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
        </p>

        <h2>5. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have certain rights under data protection laws, including the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us.
        </p>

        <h2>6. Cookies and Tracking Technologies</h2>
        <p>
          We may use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2>7. Links to Other Websites</h2>
        <p>
          Our Service may contain links to other websites that are not operated by us, including our main corporate site (<a href={mainSiteUrl} target="_blank" rel="noopener noreferrer">{mainSiteUrl}</a>) and research papers hosted on sites like SSRN. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
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
