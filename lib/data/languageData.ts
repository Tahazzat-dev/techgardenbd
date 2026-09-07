import type {ICurrency} from "@/lib/store/settings/settingsTypes";

type LanguageCode = "en" | "bn";

type LanguagePreferences = {
  label: {short: string; long: string};
  locale: {english: string; native: string};
  symbol: {english: string; native: string};
  flag: string;
  currencyCode: ICurrency["code"];
  defaultPosition: ICurrency["position"];
};

export const languages: Record<LanguageCode, LanguagePreferences> = {
  en: {
    currencyCode: "CUSTOM",
    label: {short: "EN", long: "English"},
    locale: {english: "en-US", native: "en-US"},
    symbol: {english: "Tk", native: "Tk"},
    flag: "https://flagcdn.com/w20/us.png",
    defaultPosition: "before",
  },
  bn: {
    currencyCode: "BDT",
    label: {short: "BN", long: "বাংলা"},
    locale: {english: "en-BD", native: "bn-BD"},
    symbol: {english: "৳", native: "৳"},
    flag: "https://flagcdn.com/w20/bd.png",
    defaultPosition: "before",
  },
};
