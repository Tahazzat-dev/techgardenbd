import Link from "next/link";
import type {Locale} from "@/lib/i18n";

type FooterLink = {
  href: string;
  label: string;
};

type SiteFooterProps = {
  locale: Locale;
  description: string;
  brandName?: string;
  labels: {
    products: string;
    services: string;
    portfolio: string;
    process: string;
    about: string;
    contact: string;
  };
  links?: FooterLink[];
};

export function SiteFooter({
  description,
  brandName = "ScaleForge",
  labels,
  links,
}: SiteFooterProps) {
  const footerLinks =
    links ??
    ([
      {href: "/products", label: labels.products},
      {href: "/services", label: labels.services},
      {href: "/portfolio", label: labels.portfolio},
      {href: "/process", label: labels.process},
      {href: "/about", label: labels.about},
      {href: "/contact", label: labels.contact},
      {href: "/privacy", label: "Privacy"},
      {href: "/terms", label: "Terms"},
    ] satisfies FooterLink[]);

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <p className="font-semibold text-foreground">{brandName}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground md:justify-end">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
