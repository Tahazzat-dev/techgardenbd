import Link from "next/link";

import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { asTranslationArray } from "@/lib/i18n/as-translation-array";
import { createTranslator, getDictionary, getLocale, getTranslationValue } from "@/lib/i18n/server";

type AboutCard = {
  title: string;
  description: string;
};

const aboutCardsFallback: AboutCard[] = [
  {
    title: "Specialized",
    description: "We focus on SaaS workflows, dashboards, onboarding, billing UI, and product marketing pages.",
  },
  {
    title: "API-aware",
    description: "The frontend is built to integrate cleanly with Laravel endpoints and backend validation.",
  },
  {
    title: "Accessible",
    description: "Navigation, forms, themes, and interactive states are designed for keyboard and screen reader users.",
  },
  {
    title: "Maintainable",
    description: "Typed content, reusable components, and centralized theme tokens keep the project easy to extend.",
  },
];

export async function AboutPage() {
  const locale = await getLocale();
  const pages = await getDictionary(locale, "pages");
  const t = createTranslator(pages);
  const aboutCards = asTranslationArray<AboutCard>(
    getTranslationValue(pages, "aboutCards"),
    aboutCardsFallback,
  );

  return (
    <main className="py-16">
      <Container className="max-w-5xl">
        <SectionHeading eyebrow="About" title={t("aboutTitle")} description={t("aboutDescription")} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {aboutCards.map((card) => (
            <Card key={card.title} className="p-5">
              <CardContent className="space-y-0 p-0">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild className="mt-10">
          <Link href="/contact">{t("aboutCta")}</Link>
        </Button>
      </Container>
    </main>
  );
}
