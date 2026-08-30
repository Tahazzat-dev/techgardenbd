import {SectionHeading} from "@/components/sections/section-heading";

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: TestimonialItem[];
};

export function Testimonials({id, eyebrow, title, description, items}: TestimonialsProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <blockquote key={item.name} className="rounded-md border bg-card p-6">
              <p className="text-base leading-7 text-card-foreground">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5 text-sm text-muted-foreground">
                <strong className="text-foreground">{item.name}</strong>, {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
