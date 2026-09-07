import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

import {i18nResources} from "@/lib/i18n/resources";
import {namespaces} from "@/lib/i18n/types";

const isDev = process.env.NODE_ENV === "development";

function initI18n() {
  i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: i18nResources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "bn"],
    load: "languageOnly",
    ns: [...namespaces],
    defaultNS: "common",
    detection: {
      order: ["cookie", "localStorage"],
      caches: ["cookie", "localStorage"],
      lookupCookie: "locale",
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

if (!i18n.isInitialized) {
  initI18n();
} else if (isDev) {
  for (const [locale, namespacesMap] of Object.entries(i18nResources)) {
    for (const [namespace, dictionary] of Object.entries(namespacesMap)) {
      i18n.addResourceBundle(locale, namespace, dictionary, true, true);
    }
  }
}

export default i18n;
