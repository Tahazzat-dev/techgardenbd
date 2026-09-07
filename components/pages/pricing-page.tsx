import {CtaBanner} from "@/components/sections/cta-banner";
import {FaqAccordion} from "@/components/sections/faq-accordion";
import {PricingTable, type PricingPlan} from "@/components/sections/pricing-table";
import {asTranslationArray} from "@/lib/i18n/as-translation-array";
import {createTranslator, getDictionary, getLocale, getTranslationValue} from "@/lib/i18n/server";

type PlanText = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: {
    href: string;
    label: string;
  };
  highlighted?: boolean;
};

type FaqText = {
  question: string;
  answer: string;
};

const plansFallback: PlanText[] = [];

export async function PricingPage() {
  const locale = await getLocale();
  const pricing = await getDictionary(locale, "pricing");
  const t = createTranslator(pricing);

  const plans = asTranslationArray<PlanText>(getTranslationValue(pricing, "plans"), plansFallback).map(
    (plan) =>
      ({
        ...plan,
        highlighted: plan.highlighted ?? false,
      }) satisfies PricingPlan,
  );

  const faqs = asTranslationArray<FaqText>(getTranslationValue(pricing, "faqs"), []);

  return (
    <main>
      <PricingTable
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        plans={plans}
      />
      <section className="mx-auto max-w-3xl px-4 pb-4 text-center text-sm leading-6 text-muted-foreground sm:px-6">
        {t("note")}
      </section>
      <FaqAccordion eyebrow={t("faqEyebrow")} title={t("faqTitle")} items={faqs} />
      <CtaBanner
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        cta={{href: "/contact", label: t("ctaLabel")}}
      />
    </main>
  );
}
