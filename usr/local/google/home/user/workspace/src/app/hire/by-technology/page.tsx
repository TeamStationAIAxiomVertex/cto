
import Link from 'next/link';
import { ArrowRight, Code, Database, BrainCircuit, GanttChartSquare, TestTube2, ShieldCheck, Server, Wallet, Layers, Component, Plane } from 'lucide-react';
import type { Metadata } from 'next';
import { techCategories } from "../../../lib/tech-categories";
import FurtherReading from "../../../components/seo/FurtherReading";

export const metadata: Metadata = {
  title: 'Hire Nearshore Developers by Technology | TS AI',
  description: 'Hire vetted LATAM engineers with expertise in your stack: React, Node, Python, AWS, Kubernetes, AI/ML, and more.',
  keywords: 'hire by technology, nearshore developers, latam engineers, react developers, node developers, python developers, aws experts, kubernetes experts, ai/ml engineers',
};

export default function HireByTechnologyPage() {
  return (
    <main className="container py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Technology</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Stop Hiring for Keywords. Start Hiring for Mastery.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You're here because finding an engineer who has simply "used" a technology isn't enough. You need someone who has mastered it to solve real-world problems. We provide experts with proven, deeply-rooted expertise in the specific technologies that power your business.
        </p>
         <nav className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
            <Link href="/hire/by-role" className="text-primary hover:underline">Hire by Role</Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {techCategories.map((category) => (
          <div key={category.name} className="group rounded-lg border bg-card p-6 flex flex-col">
             <p className="text-sm font-semibold text-primary">{category.pain}</p>
            <div className="flex items-center gap-3 mt-3">
              <category.icon className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {category.tech.map(tech => (
                  <Link href={`/hire/by-technology/${tech.slug}`} key={tech.slug} className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/30 transition-colors">
                    {tech.name}
                  </Link>
                )
              )}
            </div>
            <div className="flex-grow"></div>
            <Link href={`/hire/by-role/${category.slug}`} className="group mt-4 flex items-center text-sm font-semibold text-primary">
              Related Role: {category.name}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire for Your Stack?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss your specific technology needs. In 15 minutes, we can map your stack to our evaluation process and find the right experts for your team.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
      <FurtherReading />
    </main>
  );
}
