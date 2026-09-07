import {CardGrid} from "@/components/sections/card-grid";
import {SectionHeading} from "@/components/sections/section-heading";
import {getSiteContent} from "@/lib/i18n/get-site-content";
import {createTranslator, getDictionary, getLocale} from "@/lib/i18n/server";

export async function ServicesPage() {
  const locale = await getLocale();
  const pages = await getDictionary(locale, "pages");
  const t = createTranslator(pages);
  const {services} = await getSiteContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title={t("servicesTitle")}
        description={t("servicesDescription")}
      />
      <div className="mt-10">
        <CardGrid items={services} />
      </div>
    </main>
  );
}
