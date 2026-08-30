import Link from "next/link";
import {SectionHeading} from "@/components/sections/section-heading";
import {getLocale, t} from "@/lib/i18n";

export const metadata = {
  title: "About | ScaleForge",
  description: "Learn about the SaaS frontend agency focused on Next.js experiences and Laravel API integration.",
};

export default async function AboutPage() {
  const locale = await getLocale();
  const dictionary = t(locale).pages;

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title={dictionary.aboutTitle}
        description={dictionary.aboutDescription}
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          ["Specialized", "We focus on SaaS workflows, dashboards, onboarding, billing UI, and product marketing pages."],
          ["API-aware", "The frontend is built to integrate cleanly with Laravel endpoints and backend validation."],
          ["Accessible", "Navigation, forms, themes, and interactive states are designed for keyboard and screen reader users."],
          ["Maintainable", "Typed content, reusable components, and centralized theme tokens keep the project easy to extend."],
        ].map(([title, description]) => (
          <article key={title} className="rounded-md border bg-card p-5">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        Start a Discovery Call
      </Link>
    </main>
  );
}
