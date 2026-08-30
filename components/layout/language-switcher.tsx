"use client";

import {useRouter} from "next/navigation";
import type {Locale} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({locale, label}: LanguageSwitcherProps) {
  const router = useRouter();
  const nextLocale: Locale = locale === "en" ? "bn" : "en";

  function switchLanguage() {
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={switchLanguage}
      className="inline-flex h-10 min-w-12 items-center justify-center rounded-md border bg-card px-3 text-sm font-semibold"
      aria-label={label}
      title="Language switcher"
    >
      {locale === "en" ? "BN" : "EN"}
    </button>
  );
}
