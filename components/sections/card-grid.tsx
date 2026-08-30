import type {LucideIcon} from "lucide-react";

export type CardGridItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  bullets?: string[];
};

export function CardGrid({items}: Readonly<{items: CardGridItem[]}>) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article key={item.title} className="rounded-md border bg-card p-5 text-card-foreground">
            {Icon ? (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted text-primary">
                <Icon className="h-5 w-5" />
              </span>
            ) : null}
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            {item.bullets ? (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
