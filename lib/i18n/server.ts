import {readFile} from "fs/promises";
import {cookies} from "next/headers";
import path from "path";
import {cache} from "react";

import {defaultLocale, isLocale, type Locale, type Namespace} from "@/lib/i18n/types";

async function loadDictionary(locale: Locale, namespace: Namespace) {
  const filePath = path.join(process.cwd(), "public", "locales", locale, `${namespace}.json`);
  const content = await readFile(filePath, "utf-8");
  return JSON.parse(content) as Record<string, unknown>;
}

const getCachedDictionary = cache(loadDictionary);

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get("locale")?.value;
  return value && isLocale(value) ? value : defaultLocale;
}

export async function getDictionary(locale: Locale, namespace: Namespace) {
  if (process.env.NODE_ENV === "development") {
    return loadDictionary(locale, namespace);
  }

  return getCachedDictionary(locale, namespace);
}

export function createTranslator(dictionary: Record<string, unknown>) {
  return function t(key: string, fallback?: string): string {
    const parts = key.split(".");
    let value: unknown = dictionary;

    for (const part of parts) {
      if (value && typeof value === "object" && part in value) {
        value = (value as Record<string, unknown>)[part];
      } else {
        return fallback ?? key;
      }
    }

    return typeof value === "string" ? value : (fallback ?? key);
  };
}

export function getTranslationValue(dictionary: Record<string, unknown>, key: string): unknown {
  const parts = key.split(".");
  let value: unknown = dictionary;

  for (const part of parts) {
    if (value && typeof value === "object" && part in value) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }

  return value;
}
