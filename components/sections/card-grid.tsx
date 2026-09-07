import type {IconName} from "@/lib/icons";

import {Card, CardContent} from "@/components/ui/card";
import {getIcon} from "@/lib/icons";

export type CardGridItem = {
  title: string;
  description: string;
  icon?: IconName;
  bullets?: string[];
};

export function CardGrid({items}: Readonly<{items: CardGridItem[]}>) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = getIcon(item.icon);

        return (
          <Card key={item.title} className="p-5">
            <CardContent className="space-y-0 p-0">
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
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
