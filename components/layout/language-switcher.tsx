"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import { isLocale, type Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const languages = [
  {code: "en", label: "EN"},
  {code: "bn", label: "BN"},
] as const;

type LanguageSwitcherProps = {
  className?: string;
  triggerStyle?: string;
};

export function LanguageSwitcher({className = "", triggerStyle = ""}: LanguageSwitcherProps) {
  const router = useRouter();
  const {i18n, t} = useTranslation("common");
  const activeLanguage: Locale = isLocale(i18n.language) ? i18n.language : "en";

  function toggleLanguage(lng: Locale) {
    if (activeLanguage === lng) return;

    void i18n.changeLanguage(lng);
    document.cookie = `locale=${lng};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  }

  function toggleOppositeLanguage() {
    toggleLanguage(activeLanguage === "en" ? "bn" : "en");
  }

  return (
    <button
      type="button"
      onClick={toggleOppositeLanguage}
      aria-label={t("nav.languageLabel")}
      title="Language switcher"
      className={cn(
        "inline-flex items-center rounded-full bg-background p-0.5 text-foreground",
        className,
      )}
    >
      {languages.map((lang) => {
        const isActive = activeLanguage === lang.code;

        return (
          <span
            key={lang.code}
            className={cn(
              "flex h-6 min-w-6 items-center justify-center rounded-full px-1 font-semibold transition-colors duration-200 md:min-w-7",
              isActive ? "bg-primary" : "opacity-60 hover:opacity-100",
              triggerStyle,
            )}
          >
            <span
              className={cn(
                isActive ? "text-white text-[12px]" : "text-[12px] text-foreground opacity-60 hover:opacity-100",
              )}
            >
              {lang.label}
            </span>
          </span>
        );
      })}
    </button>
  );
}
