"use client";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav, type NavItem } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n/use-translations";
import { cn } from "@/lib/utils";
import { Headset } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./Shared";

type SiteHeaderProps = {
  navItems?: NavItem[];
  ctaHref?: string;
};

export function SiteHeader({
  navItems,
  ctaHref = "/contact",
}: SiteHeaderProps) {
  const t = useTranslations("common");

  const items =
    navItems ??
    ([
      {href: "/", label: t("nav.home")},
      {href: "/products", label: t("nav.products")},
      {href: "/services", label: t("nav.services")},
      {href: "/pricing", label: t("nav.pricing")},
      {href: "/portfolio", label: t("nav.portfolio")},
      {href: "/process", label: t("nav.process")},
      {href: "/about", label: t("nav.about")},
    ] satisfies NavItem[]);

  const pathname = usePathname();

  function isNavActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-primary text-white">
      <Container className="flex items-center justify-between gap-4">
        <BrandLogo />
        <nav className="hidden items-center gap-6  lg:gap-8 xl:gap-10 text-sm font-medium md:flex">
          {items.map((item) => {
            const active = isNavActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "nav-link relative py-5 text-base text-white transition hover:opacity-80",
                  active && "active",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button asChild variant="header" size="sm" className="hidden sm:inline-flex">
            <Link href={ctaHref}>
              <Headset />
              {t("nav.support")}
            </Link>
          </Button>
          <MobileNav items={[...items, {href: ctaHref, label: t("nav.support")}]} />
        </div>
      </Container>
    </header>
  );
}
