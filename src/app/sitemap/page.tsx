import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/case-studies';
import { getAllPlaybookSlugs } from '@/lib/playbook';
import { NAV, simpleNavItems } from '@/config/nav';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | TeamStation AI',
  description: 'A complete sitemap of the TeamStation AI CTO Playbook, including all playbooks, services, comparisons, and hiring options.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {children}
            </div>
        </section>
    );
}

function PageLink({ href, title }: { href: string; title: string }) {
    return (
        <Link href={href} className="text-muted-foreground hover:text-foreground hover:underline text-sm">
            {title}
        </Link>
    );
}


export default async function SitemapPage() {
    const caseStudies = await getAllCaseStudies();
    const playbookSlugs = await getAllPlaybookSlugs();

    const mainPages = [
        { href: '/', title: 'Home' },
        ...Object.values(NAV).flat().map(item => ({ href: item.href, title: item.label })),
        ...simpleNavItems,
    ];

    const hireByRolePages = roleCategories.map(r => ({ href: `/hire/by-role/${r.slug}`, title: r.name }));
    const hireByCountryPages = countries.map(c => ({ href: `/hire/by-country/${c.slug}`, title: c.name }));
    const hireByTechPages = techCategories.flatMap(cat => cat.tech).map(t => ({ href: `/hire/by-technology/${t.slug}`, title: t.name }));

    return (
        <main className="container max-w-7xl py-12">
            <div className="text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground">Home</Link> / <span>Sitemap</span>
            </div>
            <header className="text-center my-12">
                <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Sitemap</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    A complete overview of the TeamStation AI CTO Playbook and all available resources.
                </p>
            </header>

            <Section title="Main Navigation">
                {mainPages.map(page => <PageLink key={page.href} href={page.href} title={page.title} />)}
            </Section>

            <Section title="CTO Playbook">
                {playbookSlugs.map(slug => (
                    <PageLink key={slug} href={`/playbook/${slug}`} title={slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} />
                ))}
            </Section>

             <Section title="Case Studies">
                {caseStudies.map(study => (
                    <PageLink key={study.slug} href={`/case-studies/${study.slug}`} title={study.clientName} />
                ))}
            </Section>

            <Section title="Hire by Role">
                {hireByRolePages.map(page => <PageLink key={page.href} href={page.href} title={page.title} />)}
            </Section>

            <Section title="Hire by Country">
                {hireByCountryPages.map(page => <PageLink key={page.href} href={page.href} title={page.title} />)}
            </Section>

            <Section title="Hire by Technology">
                {hireByTechPages.map(page => <PageLink key={page.href} href={page.href} title={page.title} />)}
            </Section>
            
        </main>
    );
}
