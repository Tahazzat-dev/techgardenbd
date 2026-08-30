import {SectionHeading} from "@/components/sections/section-heading";

export const metadata = {
  title: "Terms | ScaleForge",
  description: "Terms information for the ScaleForge agency website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Legal" title="Terms" />
      <p className="mt-6 text-sm leading-7 text-muted-foreground">
        Website content is provided for general service information. Formal project terms,
        pricing, scope, timelines, and deliverables should be defined in a separate agreement.
      </p>
    </main>
  );
}
