import { Check } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/sections/section-heading";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: {
    href: string;
    label: string;
  };
  highlighted?: boolean;
};

type PricingTableProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
};

export function PricingTable({id = "pricing", eyebrow, title, description, plans}: PricingTableProps) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn("flex flex-col p-6", plan.highlighted && "border-primary shadow-sm")}
          >
            <CardContent className="flex flex-1 flex-col space-y-0 p-0">
              <p className="text-sm font-semibold text-primary">{plan.name}</p>
              <p className="mt-4 text-4xl font-bold">
                {plan.price}
                <span className="ml-1 text-base font-medium text-muted-foreground">{plan.period}</span>
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.highlighted ? "default" : "outline"} className="mt-8">
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
