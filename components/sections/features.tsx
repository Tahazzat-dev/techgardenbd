import { CardGrid, type CardGridItem } from "@/components/sections/card-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { Section } from "@/components/shared/Section";

type FeaturesProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: CardGridItem[];
};

export function Features({id = "features", eyebrow, title, description, items}: FeaturesProps) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8">
        <CardGrid items={items} />
      </div>
    </Section>
  );
}
