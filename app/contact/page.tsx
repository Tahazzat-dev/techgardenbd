import {DiscoveryForm} from "@/components/forms/discovery-form";
import {SectionHeading} from "@/components/sections/section-heading";
import {getLocale, t} from "@/lib/i18n";

export const metadata = {
  title: "Contact | ScaleForge",
  description: "Share your SaaS project details through a multi-step discovery form.",
};

export default async function ContactPage() {
  const locale = await getLocale();
  const dictionary = t(locale).pages;

  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <SectionHeading
        eyebrow="Discovery"
        title={dictionary.contactTitle}
        description={dictionary.contactDescription}
      />
      <DiscoveryForm locale={locale} />
    </main>
  );
}
