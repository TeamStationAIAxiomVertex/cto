import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  GitCompare,
  UserCheck,
  ShieldCheck,
  Scale,
  CheckCircle,
  Code,
  Layers,
  ArrowRight,
} from "lucide-react";
import argentinaData from "../../../../data/countries/argentina.json";
import { PSPCard } from "../../../../components/seo/PSPCard";
import { roleCategories } from "../../../../lib/roles";
import FurtherReading from "../../../../components/seo/FurtherReading";

// Define icons map
const iconMap: { [key: string]: React.FC<any> } = {
  latency: GitCompare,
  hiring: UserCheck,
  compliance: ShieldCheck,
  cost: Scale,
};

// Generate metadata from the JSON file
export async function generateMetadata(): Promise<Metadata> {
  if (!argentinaData) {
    return {
      title: "Hire Developers in Argentina",
      description:
        "Information about hiring nearshore developers in Argentina.",
    };
  }
  return {
    title: "Hire Developers in Argentina | Nearshore Engineers",
    description: argentinaData.pageSEO.description,
    alternates: {
      canonical: argentinaData.pageSEO.canonical,
      languages: argentinaData.pageSEO.hreflang,
    },
  };
}

const JsonLd = ({ data }: { data: any }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default function ArgentinaPage() {
  const data = argentinaData;

  if (!data) {
    notFound();
  }

  const { pageSEO, intro, pspCards, countrySections, faq, cta, schema } = data;

  const popularTech = [
    {
      name: "Python",
      slug: "python",
      description:
        "Build scalable backend systems, data pipelines, and AI/ML applications with expert Python engineers.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      name: "React",
      slug: "react",
      description:
        "Build modern, performant, and scalable web applications with expert React and TypeScript engineers.",
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
    {
      name: "Node.js",
      slug: "node",
      description:
        "Build high-throughput, non-blocking APIs and backend services that can handle real-world scale.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      name: ".NET",
      slug: "net",
      description:
        "Build robust, high-performance, and cloud-native applications on the modern .NET platform.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      name: "Java",
      slug: "java",
      description:
        "Build resilient, high-performance, and scalable systems using modern Java frameworks, not just legacy J2EE.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      name: "Go",
      slug: "go",
      description:
        "Build fast, reliable, and highly concurrent systems for modern cloud infrastructure.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      name: "Next.js",
      slug: "nextjs",
      description:
        "Build high-performance, server-rendered React applications with the leading full-stack framework.",
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
    {
      name: "Angular",
      slug: "angular",
      description:
        "Build robust, enterprise-scale applications with Google's mature and opinionated frontend framework.",
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
    {
      name: "Vue.js",
      slug: "vue",
      description:
        "Create approachable, performant, and incrementally adoptable user interfaces with a progressive framework.",
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <>
      <JsonLd data={schema.breadcrumbs} />
      <JsonLd data={schema.service} />
      <JsonLd data={schema.faqpage} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/hire" className="hover:text-foreground">
            Hire
          </Link>{" "}
          /
          <Link href="/hire/by-country" className="hover:text-foreground">
            By Country
          </Link>{" "}
          /<span>{data.country}</span>
        </div>

        <header className="my-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {data.h1}
          </h1>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: intro }}
          ></p>
        </header>

        <section className="my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pspCards.map((card) => {
              const Icon =
                iconMap[card.icon as keyof typeof iconMap] || GitCompare;
              return (
                <PSPCard
                  key={card.title}
                  title={card.title}
                  icon={<Icon className="h-8 w-8 text-primary" />}
                  body={card.body}
                />
              );
            })}
          </div>
        </section>

        <section className="my-24 space-y-16">
          <div className="glass-panel gradient-ring rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center">
              {countrySections.whyDaylight.h2}
            </h2>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {countrySections.whyDaylight.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 bg-background p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-16">
            <h2 className="text-center text-3xl font-bold mb-8">
              Explore Popular Technologies in {data.country}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 justify-center">
              {popularTech.map((tech) => (
                <Link
                  href={`/hire/by-country/argentina/${tech.slug}`}
                  key={tech.slug}
                  className="group flex flex-col glass-panel gradient-ring rounded-2xl p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="flex justify-between items-start">
                    {tech.icon}
                  </div>
                  <h2 className="mt-4 text-xl font-bold transition-colors group-hover:text-primary">
                    {tech.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground flex-grow">
                    {tech.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                    Hire {tech.name} Developers{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <h2 className="text-center text-3xl font-bold mb-8">
            Explore Available Roles in {data.country}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {roleCategories.map((details) => (
              <Link
                href={`/hire/by-role/${details.slug}`}
                key={details.slug}
                className="group flex flex-col glass-panel gradient-ring rounded-2xl p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex justify-between items-start">
                  <details.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mt-4 text-xl font-bold transition-colors group-hover:text-primary">
                  {details.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">
                  {details.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                  Explore {details.name} Roles{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel gradient-ring rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold">{countrySections.hubs.h2}</h2>
              <div className="mt-4 space-y-4">
                {countrySections.hubs.cities.map((city) => (
                  <div key={city.name}>
                    <h3 className="font-semibold text-foreground">
                      {city.name}
                    </h3>
                    <p className="text-sm text-muted-foreground m-0">
                      {city.why}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel gradient-ring rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold">{countrySections.legal.h2}</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                {countrySections.legal.body}
              </p>
              <Link
                href={countrySections.legal.cta.href}
                className="text-primary font-medium hover:underline text-sm mt-4 inline-block"
              >
                {countrySections.legal.cta.label} →
              </Link>
            </div>

            <div className="glass-panel gradient-ring rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold">
                {countrySections.security.h2}
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                {countrySections.security.body}
              </p>
              <Link
                href={countrySections.security.link}
                className="text-primary font-medium hover:underline text-sm mt-4 inline-block"
              >
                Visit our Trust Center →
              </Link>
            </div>

            <div className="glass-panel gradient-ring rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold">
                {countrySections.timeCost.h2}
              </h2>
              <table className="w-full text-left text-sm mt-4">
                <tbody>
                  {countrySections.timeCost.table
                    .slice(1)
                    .map(([key, value]) => (
                      <tr key={key} className="border-b border-border/50">
                        <th
                          scope="row"
                          className="py-2 font-medium text-foreground"
                        >
                          {key}
                        </th>
                        <td className="py-2 text-muted-foreground">{value}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="my-24">
          <h2 className="text-3xl font-bold text-center">
            Questions on Hiring in {data.country}
          </h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="glass-card-interactive gradient-ring rounded-lg border border-border/70 bg-background/70 p-6 shadow-lg">
                <h3 className="font-semibold text-primary">{item.q}</h3>
                <p
                  className="text-muted-foreground mt-2 text-sm"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                ></p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-foreground">
            {cta.primary.label} for Your {data.country} Team
          </h2>
          <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's build a TCO model for your Argentina team and map your roles
            to our{" "}
            <a
              href="/playbook/bias-free-technical-hiring-axiom-cortex"
              className="text-primary hover:underline"
            >
              Axiom Cortex™
            </a>{" "}
            evaluation process.
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <Link href={cta.primary.href} className="cta-button">
              Book a 30-minute plan
            </Link>
            <Link
              href={cta.secondary.href}
              className="font-semibold text-primary hover:underline"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </section>
        <FurtherReading country={data.slug} />
      </main>
    </>
  );
}
