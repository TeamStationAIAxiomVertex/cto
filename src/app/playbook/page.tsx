
import Link from 'next/link';
import { getAllPlaybookSlugs } from '@/lib/playbook';
import { getPlaybookBySlug } from '@/lib/playbook';
import { ArrowRight, BookOpen, GitCompare, Scale, ShieldCheck, UserCheck, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'The CTO Playbook for Nearshore Software Development | TeamStation AI',
  description: 'The CTO Playbook: Deep-dive guides for building and scaling high-performance nearshore engineering teams in LATAM. Covering economics, security, and hiring.',
};

export default async function PlaybookHub() {
  const allPosts = await Promise.all(
    (await getAllPlaybookSlugs()).map(slug => getPlaybookBySlug(slug))
  );
  const posts = allPosts.filter(Boolean) as Awaited<ReturnType<typeof getPlaybookBySlug>>[];


  const playbookData = {
    'nearshore-vs-offshore': {
      pain: "Is time-zone lag killing your productivity?",
      icon: <GitCompare className="h-8 w-8 text-primary" />,
      kpi: "4-8 hour daily overlap",
      description: "A framework for CTOs to diagnose the true cost—and risk—of their global talent strategy, moving beyond cost per hour to Total Cost of Ownership."
    },
    'latam-economics': {
      pain: "Are you struggling to justify your budget?",
      icon: <Scale className="h-8 w-8 text-primary" />,
      kpi: "40-60% lower TCO",
      description: "A CFO-ready framework for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, covering salaries, hidden costs of mis-hires, and security risks."
    },
    'build-vs-buy': {
      pain: "Are hidden costs making your 'cheaper' option more expensive?",
      icon: <Zap className="h-8 w-8 text-primary" />,
      kpi: "1 accountable SLA",
       description: "Should you build a nearshore operation from scratch or 'buy' into an integrated platform? This playbook models the trade-offs in terms of Total Cost of Ownership (TCO), speed, and risk."
    },
    'bias-free-technical-hiring-axiom-cortex': {
      pain: "Is your hiring process a high-risk gamble?",
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      kpi: "Mismatch rate ≤ 10%",
      description: "A playbook for replacing your broken, high-risk hiring process with a faster, fairer, and more accurate hiring engine powered by cognitive science."
    },
    'security-compliance': {
      pain: "Is your next hire also your next compliance breach?",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      kpi: "SOC 2 & ISO Aligned",
      description: "The playbook for audit-ready nearshore operations. Learn about our nearshore compliance for GDPR, SSO, MDM & device control for LATAM teams."
    },
  };

  const orderedSlugs = [
    'nearshore-vs-offshore',
    'latam-economics',
    'build-vs-buy',
    'bias-free-technical-hiring-axiom-cortex',
    'security-compliance',
  ];

  const sortedPosts = posts.sort((a, b) => {
    const aIndex = orderedSlugs.indexOf(a!.slug);
    const bIndex = orderedSlugs.indexOf(b!.slug);
    return aIndex - bIndex;
  });

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>CTO Playbook</span>
      </div>
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The CTO Playbook</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">A series of battle-tested, data-driven guides for building and scaling high-performance nearshore engineering teams. This is the strategic framework for de-risking your roadmap and out-maneuvering the competition.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedPosts.map(post => {
            if (!post) return null;
            const data = playbookData[post.slug as keyof typeof playbookData] || { pain: "Gain a strategic advantage.", icon: <BookOpen className="h-8 w-8 text-primary" />, kpi: "Data-driven insights", description: "Learn more." };
            const href = post.slug === 'security-compliance' ? '/trust' : `/playbook/${post.slug}`;
            
            return (
              <div key={post.slug} className="group flex flex-col rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <p className="text-sm font-semibold text-primary">{data.pain}</p>
                <div className="flex items-center gap-3 mt-3">
                  {data.icon}
                  <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex-grow">{data.description?.replace('TCO', '')}
                   {data.description?.includes('TCO') && <Tooltip text="Total Cost of Ownership: Includes not just salary, but all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip>}
                </p>
                <div className="mt-6 border-t border-border pt-4 flex justify-between items-center">
                   <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                        Proof: {data.kpi.replace('TCO', '')}
                         {data.kpi.includes('TCO') && <Tooltip text="Total Cost of Ownership: Includes not just salary, but all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip>}
                    </p>
                   <Link href={href} className="flex items-center text-sm font-semibold text-primary stretched-link">
                    Read Chapter <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
        })}
      </div>
    </main>
  );
}
