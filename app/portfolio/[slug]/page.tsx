import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import {SectionHeading} from "@/components/sections/section-heading";
import {portfolioItems} from "@/lib/content";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({slug: item.slug}));
}

export async function generateMetadata({params}: CaseStudyPageProps) {
  const {slug} = await params;
  const item = portfolioItems.find((caseStudy) => caseStudy.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} Case Study | ScaleForge`,
    description: item.summary,
  };
}

export default async function CaseStudyPage({params}: CaseStudyPageProps) {
  const {slug} = await params;
  const item = portfolioItems.find((caseStudy) => caseStudy.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>

      <div className="mt-8">
        <SectionHeading eyebrow={item.category} title={item.title} description={item.summary} />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-md border bg-card p-5">
          <p className="text-sm text-muted-foreground">Outcome</p>
          <p className="mt-2 font-semibold">{item.metric}</p>
        </div>
        <div className="rounded-md border bg-card p-5">
          <p className="text-sm text-muted-foreground">Timeline</p>
          <p className="mt-2 font-semibold">{item.timeline}</p>
        </div>
        <div className="rounded-md border bg-card p-5">
          <p className="text-sm text-muted-foreground">Engagement</p>
          <p className="mt-2 font-semibold">Frontend + Laravel API</p>
        </div>
      </div>

      <div className="mt-10 grid gap-5">
        {[
          {
            title: "The Challenge",
            body: "The team needed a SaaS experience that made a complex workflow feel trustworthy, fast, and easy to evaluate during demos.",
          },
          {
            title: "The Solution",
            body: "We shaped the frontend information architecture, built reusable TypeScript components, and prepared the interface for Laravel API validation and data flows.",
          },
          {
            title: "The Outcome",
            body: `The project shipped with a clearer product story, a polished responsive interface, and a measurable result: ${item.metric}.`,
          },
        ].map((section) => (
          <section key={section.title} className="rounded-md border bg-card p-6">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-md border bg-card p-6">
        <h2 className="text-xl font-semibold">Architecture & Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((technology) => (
            <span key={technology} className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
              {technology}
            </span>
          ))}
        </div>
      </section>

      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        Discuss a similar project
      </Link>
    </main>
  );
}
