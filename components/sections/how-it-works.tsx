import {SectionHeading} from "@/components/sections/section-heading";

export type ProcessStep = {
  title: string;
  description: string;
};

type HowItWorksProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
  variant?: "grid" | "list";
};

export function HowItWorks({
  id = "how-it-works",
  eyebrow,
  title,
  description,
  steps,
  variant = "grid",
}: HowItWorksProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className={variant === "list" ? "mx-auto max-w-5xl" : "mx-auto max-w-7xl"}>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {variant === "list" ? (
          <div className="mt-10 space-y-4">
            {steps.map((step, index) => (
              <article key={step.title} className="grid gap-4 rounded-md border bg-card p-5 sm:grid-cols-[80px_1fr]">
                <p className="text-2xl font-bold text-primary">0{index + 1}</p>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-md border bg-card p-5">
                <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
