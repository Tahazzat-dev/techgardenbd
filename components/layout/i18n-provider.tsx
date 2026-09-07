"use client";

import {useEffect} from "react";
import {I18nextProvider} from "react-i18next";

import i18n from "@/lib/i18n/config";

type I18nProviderProps = {
  children: React.ReactNode;
};

export function I18nProvider({children}: I18nProviderProps) {
  useEffect(() => {
    document.documentElement.lang = i18n.language;

    const syncLang = (language: string) => {
      document.documentElement.lang = language;
    };

    i18n.on("languageChanged", syncLang);
    return () => {
      i18n.off("languageChanged", syncLang);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
