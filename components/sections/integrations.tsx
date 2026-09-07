import { SectionHeading } from "@/components/sections/section-heading";
import { Section } from "@/components/shared/Section";
import { getIcon, type IconName } from "@/lib/icons";

export type IntegrationItem = {
  name: string;
  category: string;
  icon: IconName;
};

type IntegrationsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: IntegrationItem[];
};

export function Integrations({id, eyebrow, title, description, items}: IntegrationsProps) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = getIcon(item.icon);

          return (
            <div key={item.name} className="flex items-center gap-3 rounded-md border bg-card p-4">
              {Icon ? <Icon className="h-5 w-5 text-primary" /> : null}
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
