import {
  capabilities as capabilityIcons,
  portfolioItems as portfolioStacks,
  processSteps as processStepsFallback,
  services as servicesFallback,
  technologies,
  testimonials as testimonialsFallback,
} from "@/lib/content";
import {asTranslationArray} from "@/lib/i18n/as-translation-array";
import {getDictionary} from "@/lib/i18n/server";
import type {Locale} from "@/lib/i18n/types";

type CapabilityText = {
  title: string;
  description: string;
};

type ServiceText = {
  title: string;
  description: string;
  bullets: string[];
};

type ProcessStepText = {
  title: string;
  description: string;
};

type TestimonialText = {
  quote: string;
  name: string;
  role: string;
};

type PortfolioText = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  metric: string;
  timeline: string;
};

const capabilitiesTextFallback: CapabilityText[] = capabilityIcons.map(({title, description}) => ({
  title,
  description,
}));

const portfolioTextFallback: PortfolioText[] = portfolioStacks.map(
  ({slug, title, category, summary, metric, timeline}) => ({
    slug,
    title,
    category,
    summary,
    metric,
    timeline,
  }),
);

export async function getSiteContent(locale: Locale) {
  const content = await getDictionary(locale, "content");

  const capabilitiesData = asTranslationArray<CapabilityText>(
    content.capabilities,
    capabilitiesTextFallback,
  );
  const capabilities = capabilitiesData.map((item, index) => ({
    ...item,
    icon: capabilityIcons[index]?.icon ?? capabilityIcons[0].icon,
  }));

  const services = asTranslationArray<ServiceText>(content.services, servicesFallback);
  const processSteps = asTranslationArray<ProcessStepText>(content.processSteps, processStepsFallback);
  const testimonials = asTranslationArray<TestimonialText>(content.testimonials, testimonialsFallback);

  const portfolioData = asTranslationArray<PortfolioText>(content.portfolioItems, portfolioTextFallback);
  const portfolioItems = portfolioData.map((item, index) => ({
    ...item,
    stack: portfolioStacks[index]?.stack ?? [],
  }));

  return {
    capabilities,
    services,
    processSteps,
    testimonials,
    portfolioItems,
    technologies,
  };
}
