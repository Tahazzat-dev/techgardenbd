import type {LucideIcon} from "lucide-react";
import {SectionHeading} from "@/components/sections/section-heading";

export type IntegrationItem = {
  name: string;
  category: string;
  icon: LucideIcon;
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
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.name} className="flex items-center gap-3 rounded-md border bg-card p-4">
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
