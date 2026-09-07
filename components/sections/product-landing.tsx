import {LeadForm} from "@/components/forms/lead-form";
import {CtaBanner} from "@/components/sections/cta-banner";
import {FaqAccordion} from "@/components/sections/faq-accordion";
import {Features} from "@/components/sections/features";
import {Hero} from "@/components/sections/hero";
import {HowItWorks} from "@/components/sections/how-it-works";
import {Integrations} from "@/components/sections/integrations";
import {PricingTable} from "@/components/sections/pricing-table";
import {ProofBar} from "@/components/sections/proof-bar";
import {Testimonials} from "@/components/sections/testimonials";
import {getLocale} from "@/lib/i18n/server";
import type {ProductLandingContent} from "@/lib/products/types";

type ProductLandingProps = {
  product: ProductLandingContent;
};

export async function ProductLanding({product}: ProductLandingProps) {
  const locale = await getLocale();

  return (
    <main>
      <Hero
        eyebrow={product.eyebrow}
        title={product.title}
        description={product.description}
        primaryCta={product.primaryCta}
        secondaryCta={product.secondaryCta}
        featured={product.featured}
      />
      <ProofBar items={product.proof} />
      <Features
        eyebrow={product.featuresEyebrow}
        title={product.featuresTitle}
        description={product.featuresDescription}
        items={product.features}
      />
      <HowItWorks eyebrow={product.processEyebrow} title={product.processTitle} steps={product.steps} />
      <Integrations eyebrow={product.stackEyebrow} title={product.stackTitle} items={product.integrations} />
      <PricingTable
        eyebrow={product.pricingEyebrow}
        title={product.pricingTitle}
        description={product.pricingDescription}
        plans={product.plans}
      />
      <Testimonials eyebrow={product.reviewsEyebrow} title={product.reviewsTitle} items={product.testimonials} />
      <FaqAccordion eyebrow={product.faqEyebrow} title={product.faqTitle} items={product.faqs} />
      <CtaBanner
        title={product.ctaTitle}
        description={product.ctaDescription}
        cta={{href: "#contact", label: product.ctaLabel}}
      />
      <LeadForm productSlug={product.slug} productName={product.name} locale={locale} />
    </main>
  );
}
