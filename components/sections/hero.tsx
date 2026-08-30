import Link from "next/link";
import {ArrowRight} from "lucide-react";

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
  featured?: HeroFeatured;
};

export function Hero({eyebrow, title, description, primaryCta, secondaryCta, featured}: HeroProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            {primaryCta.label} <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center rounded-md border bg-card px-5 py-3 text-sm font-semibold text-card-foreground"
            >
              {secondaryCta.label}
            </Link>
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
      ) : null}
    </section>
  );
}
