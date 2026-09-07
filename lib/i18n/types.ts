export type Locale = "en" | "bn";

export const locales: Locale[] = ["en", "bn"];

export const defaultLocale: Locale = "en";

export const namespaces = ["common", "home", "pages", "content", "products", "legal", "pricing"] as const;

export type Namespace = (typeof namespaces)[number];

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "bn";
}
