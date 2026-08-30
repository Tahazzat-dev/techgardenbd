import Link from "next/link";
import {Check} from "lucide-react";
import {SectionHeading} from "@/components/sections/section-heading";
import {cn} from "@/lib/utils";

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
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "flex flex-col rounded-md border bg-card p-6 text-card-foreground",
              plan.highlighted && "border-primary shadow-sm",
            )}
          >
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
            <Link
              href={plan.cta.href}
              className={cn(
                "mt-8 inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold",
                plan.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "border bg-background text-foreground",
              )}
            >
              {plan.cta.label}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
