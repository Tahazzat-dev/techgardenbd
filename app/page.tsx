import {CtaBanner} from "@/components/sections/cta-banner";
import {Features} from "@/components/sections/features";
import {Hero} from "@/components/sections/hero";
import {HowItWorks} from "@/components/sections/how-it-works";
import {Integrations} from "@/components/sections/integrations";
import {ProofBar} from "@/components/sections/proof-bar";
import {Testimonials} from "@/components/sections/testimonials";
import {getLocale, t} from "@/lib/i18n";
import {getLocalizedContent} from "@/lib/localized-content";

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = t(locale).home;
  const {capabilities, portfolioItems, processSteps, technologies, testimonials} = getLocalizedContent(locale);
  const featuredCaseStudy = portfolioItems[0];

  return (
    <main>
      <Hero
        eyebrow={dictionary.eyebrow}
        title={dictionary.title}
        description={dictionary.description}
        primaryCta={{href: "/contact", label: dictionary.primaryCta}}
        secondaryCta={{href: "/products", label: dictionary.secondaryCta}}
        featured={{
          label: dictionary.featured,
          title: featuredCaseStudy.title,
          summary: featuredCaseStudy.summary,
          stats: [
            {label: dictionary.outcome, value: featuredCaseStudy.metric},
            {label: dictionary.timeline, value: featuredCaseStudy.timeline},
          ],
        }}
      />
      <ProofBar items={dictionary.proof} />
      <Features
        eyebrow={dictionary.capabilitiesEyebrow}
        title={dictionary.capabilitiesTitle}
        description={dictionary.capabilitiesDescription}
        items={capabilities}
      />
      <HowItWorks eyebrow={dictionary.processEyebrow} title={dictionary.processTitle} steps={processSteps.slice(0, 6)} />
      <Integrations eyebrow={dictionary.stackEyebrow} title={dictionary.stackTitle} items={technologies} />
      <Testimonials eyebrow={dictionary.reviewsEyebrow} title={dictionary.reviewsTitle} items={testimonials} />
      <CtaBanner
        title={dictionary.finalTitle}
        description={dictionary.finalDescription}
        cta={{href: "/contact", label: dictionary.finalCta}}
      />
    </main>
  );
}
