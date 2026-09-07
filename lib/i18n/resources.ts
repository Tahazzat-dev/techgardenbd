import bnCommon from "@/public/locales/bn/common.json";
import bnContent from "@/public/locales/bn/content.json";
import bnHome from "@/public/locales/bn/home.json";
import bnLegal from "@/public/locales/bn/legal.json";
import bnPages from "@/public/locales/bn/pages.json";
import bnPricing from "@/public/locales/bn/pricing.json";
import bnProducts from "@/public/locales/bn/products.json";
import enCommon from "@/public/locales/en/common.json";
import enContent from "@/public/locales/en/content.json";
import enHome from "@/public/locales/en/home.json";
import enLegal from "@/public/locales/en/legal.json";
import enPages from "@/public/locales/en/pages.json";
import enPricing from "@/public/locales/en/pricing.json";
import enProducts from "@/public/locales/en/products.json";

export const i18nResources = {
  en: {
    common: enCommon,
    home: enHome,
    pages: enPages,
    content: enContent,
    products: enProducts,
    legal: enLegal,
    pricing: enPricing,
  },
  bn: {
    common: bnCommon,
    home: bnHome,
    pages: bnPages,
    content: bnContent,
    products: bnProducts,
    legal: bnLegal,
    pricing: bnPricing,
  },
} as const;
