import {PortfolioFilter} from "@/components/portfolio-filter";
import {SectionHeading} from "@/components/sections/section-heading";
import {getSiteContent} from "@/lib/i18n/get-site-content";
import {createTranslator, getDictionary, getLocale} from "@/lib/i18n/server";

export async function PortfolioPage() {
  const locale = await getLocale();
  const [pages, home] = await Promise.all([
    getDictionary(locale, "pages"),
    getDictionary(locale, "home"),
  ]);
  const t = createTranslator(pages);
  const tHome = createTranslator(home);
  const {portfolioItems} = await getSiteContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title={t("portfolioTitle")}
        description={t("portfolioDescription")}
      />
      <div className="mt-10">
        <PortfolioFilter portfolioItems={portfolioItems} outcomeLabel={tHome("outcome")} />
      </div>
    </main>
  );
}
