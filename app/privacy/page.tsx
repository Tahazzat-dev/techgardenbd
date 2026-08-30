import {SectionHeading} from "@/components/sections/section-heading";

export const metadata = {
  title: "Privacy | ScaleForge",
  description: "Privacy policy for the ScaleForge agency website.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <p className="mt-6 text-sm leading-7 text-muted-foreground">
        Discovery form data is submitted to the configured Laravel backend and should be used only
        to respond to project inquiries. Production implementations must document retention,
        analytics, third-party integrations, and user data rights.
      </p>
    </main>
  );
}
