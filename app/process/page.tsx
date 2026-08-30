import {HowItWorks} from "@/components/sections/how-it-works";
import {getLocale, t} from "@/lib/i18n";
import {getLocalizedContent} from "@/lib/localized-content";

export const metadata = {
  title: "Process | ScaleForge",
  description: "A structured SaaS product delivery process from discovery to launch and iteration.",
};

export default async function ProcessPage() {
  const locale = await getLocale();
  const dictionary = t(locale).pages;
  const {processSteps} = getLocalizedContent(locale);

  return (
    <main className="py-8">
      <HowItWorks
        eyebrow="Process"
        title={dictionary.processTitle}
        description={dictionary.processDescription}
        steps={processSteps}
        variant="list"
      />
    </main>
  );
}
