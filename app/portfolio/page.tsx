import {PortfolioFilter} from "@/components/portfolio-filter";
import {SectionHeading} from "@/components/sections/section-heading";
import {getLocale, t} from "@/lib/i18n";

export const metadata = {
  title: "Portfolio | ScaleForge",
  description: "Filterable SaaS case studies across FinTech, B2B SaaS, DevTools, and more.",
};

export default async function PortfolioPage() {
  const locale = await getLocale();
  const dictionary = t(locale).pages;

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title={dictionary.portfolioTitle}
        description={dictionary.portfolioDescription}
      />
      <div className="mt-10">
        <PortfolioFilter />
      </div>
    </main>
  );
}
