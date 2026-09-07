"use client";

import {useTranslation} from "react-i18next";

import type {Namespace} from "@/lib/i18n/types";

export function useTranslations(namespace: Namespace = "common") {
  const {t} = useTranslation(namespace);
  return t;
}
