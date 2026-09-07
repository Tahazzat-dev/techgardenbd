import Link from "next/link";

import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type CtaBannerProps = {
  id?: string;
  title: string;
  description: string;
  cta: {
    href: string;
    label: string;
  };
};

export function CtaBanner({id, title, description, cta}: CtaBannerProps) {
  return (
    <Section id={id}>
      <Card className="border-none bg-primary text-primary-foreground">
        <CardContent className="p-8 md:p-10">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-3 max-w-2xl opacity-90">{description}</p>
          <Button asChild variant="inverse" className="mt-6">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
