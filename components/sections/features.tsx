import {CardGrid, type CardGridItem} from "@/components/sections/card-grid";
import {SectionHeading} from "@/components/sections/section-heading";

type FeaturesProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: CardGridItem[];
};

export function Features({id = "features", eyebrow, title, description, items}: FeaturesProps) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8">
        <CardGrid items={items} />
      </div>
    </section>
  );
}
