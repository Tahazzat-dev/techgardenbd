import { CtaBanner } from "@/components/sections/cta-banner";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { ProofBar } from "@/components/sections/proof-bar";
import { Testimonials } from "@/components/sections/testimonials";
import { asTranslationArray } from "@/lib/i18n/as-translation-array";
import { getSiteContent } from "@/lib/i18n/get-site-content";
import { createTranslator, getDictionary, getLocale, getTranslationValue } from "@/lib/i18n/server";

const proofFallback = ["Laravel-ready", "Typed frontend", "Dark/light mode", "Accessible forms", "SEO-first pages"];

export async function HomePage() {
  const locale = await getLocale();
  const home = await getDictionary(locale, "home");
  const t = createTranslator(home);
  const {capabilities, portfolioItems, processSteps, technologies, testimonials} = await getSiteContent(locale);
  const featuredCaseStudy = portfolioItems[0];
  const proof = asTranslationArray(
    getTranslationValue(home, "proof"),
    proofFallback,
  );

  return (
    <main>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        description={t("description")}
        primaryCta={{href: "/contact", label: t("primaryCta")}}
        secondaryCta={{href: "/products", label: t("secondaryCta")}}       
      />
      <ProofBar items={proof} />
      <Features
        eyebrow={t("capabilitiesEyebrow")}
        title={t("capabilitiesTitle")}
        description={t("capabilitiesDescription")}
        items={capabilities}
      />
      <HowItWorks
        eyebrow={t("processEyebrow")}
        title={t("processTitle")}
        steps={processSteps.slice(0, 6)}
      />
      <Integrations eyebrow={t("stackEyebrow")} title={t("stackTitle")} items={technologies} />
      <Testimonials eyebrow={t("reviewsEyebrow")} title={t("reviewsTitle")} items={testimonials} />
      <CtaBanner
        title={t("finalTitle")}
        description={t("finalDescription")}
        cta={{href: "/contact", label: t("finalCta")}}
      />
    </main>
  );
}
