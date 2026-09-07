import {SectionHeading} from "@/components/sections/section-heading";
import {createTranslator, getDictionary, getLocale} from "@/lib/i18n/server";

export async function PrivacyPage() {
  const locale = await getLocale();
  const legal = await getDictionary(locale, "legal");
  const t = createTranslator(legal);

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t("privacy.eyebrow")} title={t("privacy.title")} />
      <p className="mt-6 text-sm leading-7 text-muted-foreground">{t("privacy.body")}</p>
    </main>
  );
}
