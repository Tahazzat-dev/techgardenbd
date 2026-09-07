"use client";

import { useTranslations } from "@/lib/i18n/use-translations";
import { Headset, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "./Container";
import { BrandLogo, SocialLink } from "./Shared";

type FooterLink = {
  href: string;
  label: string;
};

type FooterProps = {
  brandName?: string;
  links?: FooterLink[];
};

export function Footer({brandName = "ScaleForge", links}: FooterProps) {
  const t = useTranslations("common");

  const footerLinks =
    links ??
    ([
      {href: "/products", label: t("nav.products")},
      {href: "/services", label: t("nav.services")},
      {href: "/pricing", label: t("nav.pricing")},
      {href: "/portfolio", label: t("nav.portfolio")},
      {href: "/process", label: t("nav.process")},
      {href: "/about", label: t("nav.about")},
      {href: "/privacy", label: t("privacy")},
      {href: "/terms", label: t("terms")},
    ] satisfies FooterLink[]);

  return (
    <footer className="border-t bg-primary text-white">
      <Container className="grid  gap-8 px-4 py-8 md:py-10 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
        <div className="flex flex-col gap-3">
        <BrandLogo />
        <p className="text-sm leading-6 text-white/90">{t("footer_des")}</p>

        <SocialLink className="w-full" />

        <p className="text-white mt-auto opacity-60 text-sm">{t("copyright", {year: new Date().getFullYear()})}</p>
        </div>

        <div className="grid grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-3 text-sm md:justify-end">
          <div className="flex flex-col gap-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:opacity-80">
              {item.label}
            </Link>
          ))}
          </div>
           <div className="flex flex-col gap-2">
             <h3 className="text-white opacity-60 text-lg font-bold">Others</h3>
           </div>

           {/* ========== contact links ========= */}
           <div className="flex flex-col gap-2">
             <h3 className="text-white opacity-60 text-lg font-bold">{t("contact")}</h3>
             <a
               href="tel:+8801234567890"
               className="flex items-center gap-2 transition hover:opacity-80"
             >
               <Phone className="h-4 w-4 shrink-0" />
              {t("contact_phone")}
             </a>
             <a
               href="tel:+8801234567890"
               className="flex items-center gap-2 transition hover:opacity-80"
             >
               <Phone className="h-4 w-4 shrink-0" />
               {t("contact_telephone")}
             </a>
             <a
               href="mailto:info@techgardenbd.com"
               className="flex items-center gap-2 transition hover:opacity-80"
             >
               <Mail className="h-4 w-4 shrink-0" />
              {t("contact_email")}
             </a>

             <div className="w-full mt-2">
              <Link href="/contact" className="flex items-center gap-2 transition hover:opacity-80">
              <Headset className="h-4 w-4 shrink-0" />
              {t("nav.support")}
              </Link>
           </div>
           </div>
        </div>
      </Container>
    </footer>
  );
}
