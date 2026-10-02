import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export type HeroCta = {
  href: string;
  label: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type HeroFeatured = {
  label: string;
  title: string;
  summary: string;
  stats: HeroStat[];
};

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  subtitle?: string;
  featured?: HeroFeatured;
};

function highlightAi(text: string) {
  return text.split(/(AI)/g).map((part, index) =>
    part === "AI" ? (
      <span key={index} className="text-xl font-semibold md:text-2xl">
        AI
      </span>
    ) : (
      part
    ),
  );
}

export function Hero({eyebrow, title, subtitle, description, primaryCta, secondaryCta, featured}: HeroProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-[#007db34d] dark:from-[#007db328] to-transparent">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="" >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{highlightAi(subtitle)}</p>
          ) : null}
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={primaryCta.href}>
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondaryCta ? (
              <Button asChild variant="outline">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        {featured ? (
          <div className="rounded-md border bg-card p-5 text-card-foreground">
            <p className="text-sm font-medium text-muted-foreground">{featured.label}</p>
            <h2 className="mt-3 text-2xl font-bold">{featured.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{featured.summary}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {featured.stats.map((stat) => (
                <div key={stat.label} className="rounded-md bg-muted p-4">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-full max-h-[350px] rounded-md overflow-hidden">
            <Image src="/assets/images/home-banner.png" className="w-full h-full" alt="Hero Image" width={500} height={500} />
          </div>
        )}
      </Container>
    </section>
  );
}
