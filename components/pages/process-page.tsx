import {HowItWorks} from "@/components/sections/how-it-works";
import {getSiteContent} from "@/lib/i18n/get-site-content";
import {createTranslator, getDictionary, getLocale} from "@/lib/i18n/server";

export async function ProcessPage() {
  const locale = await getLocale();
  const pages = await getDictionary(locale, "pages");
  const t = createTranslator(pages);
  const {processSteps} = await getSiteContent(locale);

  return (
    <main className="py-8">
      <HowItWorks
        eyebrow="Process"
        title={t("processTitle")}
        description={t("processDescription")}
        steps={processSteps}
        variant="list"
      />
    </main>
  );
}
