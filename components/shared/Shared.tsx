"use client";

import { useTranslations } from "@/lib/i18n/use-translations";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { Facebook, LinkedIn, WhatsApp, YouTube } from "./Icons";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({className}: BrandLogoProps) {
  const t = useTranslations("common");

  return (
    <Link href="/" className={cn("flex items-center gap-2 font-semibold", className)}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Rocket className="h-4 w-4 text-white" />
      </span>
      <div className="flex flex-col">
        <span className="font-bold text-lg text-white">{t("brandName", {defaultValue: "Tech Garden BD"})}</span>
        <span className="text-xs font-light text-white">
          {t("slogan", {defaultValue: "Your Business, Our Technology"})}
        </span>
      </div>
    </Link>
  );
}

export function SocialLink({className = ""}: {className?: string}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook className="text-white transition hover:opacity-80" />
      </Link>
      <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsApp className="text-white transition hover:opacity-80" />
      </Link>
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedIn className="text-white transition hover:opacity-80" />
      </Link>
      <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <YouTube className="w-8 text-white transition hover:opacity-80" />
      </Link>
    </div>
  );
}