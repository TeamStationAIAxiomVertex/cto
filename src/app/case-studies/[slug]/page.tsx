'use client';

import { caseStudies, type CaseStudy } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as ChartTooltip } from 'recharts';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { DisclosureDrawer } from '@/components/DisclosureDrawer';

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
      <span className="font-semibold text-foreground">{label}:</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
}

function ResultCard({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
      <p className="text-foreground">{text}</p>
    </div>
  );
}

function ChartCard({ data, title }: { data: any[], title: string }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 10 }}>
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <ChartTooltip
                cursor={{ fill: 'hsl(var(--background))' }}
                contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))'
                }}
            />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CallToAction() {
    return (
        <div className="mt-16 rounded-lg bg-primary/10 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Ready to Build Your Elite Team?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Let TeamStation AI provide the talent, governance, and infrastructure you need to ship faster and more securely.
            </p>
            <Link href="/#contact" className="cta-button mt-6">
                Book a Strategy Call
            </Link>
        </div>
    );
}


export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(c => c.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      <header className="text-center">
        <h1 className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          {study.title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          {study.subtitle}
        </p>
      </header>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {study.metrics.map(metric => (
          <MetricPill key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h2>The Challenge</h2>
          <p>{study.challenge}</p>

          <h2>The Solution</h2>
          <p>{study.solution}</p>

          <h2>The Results</h2>
          <div className="not-prose mt-8 grid gap-6 md:grid-cols-2">
            {study.results.map((result, i) => (
              <ResultCard key={i} text={result.text} />
            ))}
          </div>

          <div className="not-prose mt-12">
            <ChartCard data={study.chartData} title="Feature Velocity: Pre vs. Post-TeamStation" />
          </div>

           <DisclosureDrawer title="View Cost Analysis Formula">
                <div className="mt-4 rounded-md bg-card p-4 text-sm">
                    <p className="font-mono text-foreground">
                        Cost Savings = (Previous_Vendor_TCO - TeamStation_TCO)
                    </p>
                     <p className="mt-2 text-xs text-muted-foreground">
                        Where TCO (Total Cost of Ownership) includes salaries, overhead, recruitment, and management costs.
                    </p>
                </div>
            </DisclosureDrawer>

        </article>

        <CallToAction />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return caseStudies.map(study => ({
    slug: study.slug,
  }));
}
