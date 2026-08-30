import {CardGrid} from "@/components/sections/card-grid";
import {SectionHeading} from "@/components/sections/section-heading";
import {getLocale, t} from "@/lib/i18n";
import {getLocalizedContent} from "@/lib/localized-content";

export const metadata = {
  title: "Services | ScaleForge",
  description: "Product strategy, UI/UX, Next.js frontend development, and Laravel API integration services.",
};

export default async function ServicesPage() {
  const locale = await getLocale();
  const dictionary = t(locale).pages;
  const {services} = getLocalizedContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title={dictionary.servicesTitle}
        description={dictionary.servicesDescription}
      />
      <div className="mt-10">
        <CardGrid items={services} />
      </div>
    </main>
  );
}
