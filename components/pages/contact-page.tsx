import {DiscoveryForm} from "@/components/forms/discovery-form";
import {SectionHeading} from "@/components/sections/section-heading";
import {createTranslator, getDictionary, getLocale} from "@/lib/i18n/server";

export async function ContactPage() {
  const locale = await getLocale();
  const pages = await getDictionary(locale, "pages");
  const t = createTranslator(pages);

  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <SectionHeading eyebrow="Discovery" title={t("contactTitle")} description={t("contactDescription")} />
      <DiscoveryForm locale={locale} />
    </main>
  );
}
