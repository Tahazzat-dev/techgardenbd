import Link from "next/link";
import {Rocket} from "lucide-react";
import {LanguageSwitcher} from "@/components/layout/language-switcher";
import {MobileNav, type NavItem} from "@/components/layout/mobile-nav";
import {ThemeToggle} from "@/components/layout/theme-toggle";
import type {Locale} from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  labels: {
    home: string;
    products: string;
    services: string;
    portfolio: string;
    process: string;
    about: string;
    contact: string;
    cta: string;
    languageLabel: string;
  };
  brandName?: string;
  navItems?: NavItem[];
  ctaHref?: string;
};

export function SiteHeader({
  locale,
  labels,
  brandName = "ScaleForge",
  navItems,
  ctaHref = "/contact",
}: SiteHeaderProps) {
  const items =
    navItems ??
    ([
      {href: "/", label: labels.home},
      {href: "/products", label: labels.products},
      {href: "/services", label: labels.services},
      {href: "/portfolio", label: labels.portfolio},
      {href: "/process", label: labels.process},
      {href: "/about", label: labels.about},
    ] satisfies NavItem[]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Rocket className="h-4 w-4" />
          </span>
          <span>{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={labels.languageLabel} />
          <ThemeToggle />
          <Link
            href={ctaHref}
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:inline-flex"
          >
            {labels.cta}
          </Link>
          <MobileNav items={[...items, {href: ctaHref, label: labels.contact}]} />
        </div>
      </div>
    </header>
  );
}
