"use client";

import { languages } from "@/lib/data/languageData";
import { isLocale } from "@/lib/i18n/types";
import type { ICurrency, TLanguage } from "@/lib/store/settings/settingsTypes";
import type { RootState } from "@/lib/store/store";
import {
    addSeconds,
    differenceInDays,
    differenceInMinutes,
    differenceInMonths,
    format,
    formatDistanceToNow,
    startOfDay,
    subMonths,
} from "date-fns";
import { bn } from "date-fns/locale/bn";
import { enUS } from "date-fns/locale/en-US";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function resolveLanguage(languageCode: string): TLanguage {
  const code = isLocale(languageCode) ? languageCode : "en";
  const meta = languages[code];

  return {
    code,
    label: meta.label,
    flag: meta.flag,
  };
}

function resolveCurrency(languageCode: TLanguage["code"]): ICurrency {
  const meta = languages[languageCode];

  return {
    code: meta.currencyCode,
    symbol: meta.symbol.native,
    locale: meta.locale.native,
    position: meta.defaultPosition,
  };
}

const useSettings = () => {
  const {dateFormat, timeFormat, numberFormat} = useSelector((state: RootState) => state.settings);
  const {i18n} = useTranslation();
  const language = resolveLanguage(i18n.language);
  const currency = resolveCurrency(language.code);
  const numberLocale =
    languages[language.code]?.locale.native ?? (language.code === "bn" ? "bn-BD" : "en-US");

  const convertNumber = (value: number) => {
    return new Intl.NumberFormat(numberLocale, {
      useGrouping: false,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(value);
  };

  const convertDigits = (value: string | number) => {
    return String(value).replace(/\d/g, (digit) =>
      new Intl.NumberFormat(numberLocale, {useGrouping: false}).format(Number(digit)),
    );
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat(numberLocale).format(value);
  };

  const formatAmount = (value: number) => {
    const maxFractionDigits = numberFormat.maximumFractionDigits ?? 0;
    const minFractionDigits = numberFormat.minimumFractionDigits ?? 0;

    return new Intl.NumberFormat(numberLocale, {
      minimumFractionDigits: minFractionDigits,
      maximumFractionDigits: maxFractionDigits,
    }).format(value);
  };

  const formatCurrency = (amount: number) => {
    const formattedAmount = convertDigits(formatAmount(amount));

    if (currency.code === "CUSTOM") {
      return currency.position === "before"
        ? `${currency.symbol} ${formattedAmount}`
        : `${formattedAmount} ${currency.symbol}`;
    }

    return currency.position === "before"
      ? `${currency.symbol}${formattedAmount}`
      : `${formattedAmount}${currency.symbol}`;
  };

  const formatDate = (date: Date) => {
    return convertDigits(
      format(date, dateFormat, {
        locale: language.code === "bn" ? bn : enUS,
      }),
    );
  };

  const formatTime = (date: Date) => {
    const pattern = timeFormat === "12h" ? "hh:mm a" : "HH:mm";
    return convertDigits(format(date, pattern));
  };

  const convertTime = (seconds: number) => {
    const date = addSeconds(startOfDay(new Date()), seconds);
    const pattern = timeFormat === "12h" ? "hh:mm a" : "HH:mm";
    return convertDigits(format(date, pattern));
  };

  const convertDays = (minutes: number) => {
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const mins = minutes % 60;

    const dayStr = days > 0 ? `${days}d ` : "";
    const hourStr = hours > 0 ? `${hours}h ` : "";
    const minStr = `${mins}m`;

    return `${dayStr}${hourStr}${minStr}`.trim();
  };

  const formatRelativeTime = (date: Date | string | number) => {
    const now = new Date();
    const past = new Date(date);
    const months = differenceInMonths(now, past);
    const dateAfterMonths = subMonths(now, months);
    const days = differenceInDays(dateAfterMonths, past);

    const translations: Record<string, {month: string; day: string; ago: string}> = {
      "bn-BD": {month: "মাস", day: "দিন", ago: "আগে"},
      "en-US": {month: "month", day: "day", ago: "ago"},
    };

    const t = translations[numberLocale] ?? translations["en-US"];
    const parts = [];

    if (months > 0) {
      const monthLabel = language.code === "en" && months > 1 ? `${t.month}s` : t.month;
      parts.push(`${months} ${monthLabel}`);
    }

    if (days > 0) {
      const dayLabel = language.code === "en" && days > 1 ? `${t.day}s` : t.day;
      parts.push(`${days} ${dayLabel}`);
    }

    if (parts.length === 0) {
      return language.code === "bn" ? "এইমাত্র" : "just now";
    }

    return convertDigits(`${parts.join(", ")} ${t.ago}`);
  };

  const formatRelativeMinutes = (date: Date | string | number) => {
    const now = new Date();
    const past = new Date(date);
    const totalMinutes = differenceInMinutes(now, past);

    const translations: Record<string, {hour: string; minute: string; justNow: string}> = {
      "bn-BD": {hour: "ঘ:", minute: "মি:", justNow: "এইমাত্র"},
      "en-US": {hour: "h", minute: "m", justNow: "just now"},
    };

    const t = translations[numberLocale] ?? translations["en-US"];

    if (totalMinutes < 1) {
      return t.justNow;
    }

    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const parts = [];

    if (hours > 0) {
      parts.push(`${convertNumber(hours)}${t.hour}`);
    }

    if (mins > 0 || hours === 0) {
      parts.push(`${convertNumber(mins)}${t.minute}`);
    }

    return parts.join(" ");
  };

  const formatDistanceAgo = (date: Date | string | number, prefix = true, suffix = true) => {
    let result = formatDistanceToNow(new Date(date), {
      addSuffix: suffix,
      locale: language.code === "bn" ? bn : enUS,
    });

    if (!prefix) {
      result = result.replace(/^about\s+/i, "").replace(/^প্রায়\s+/, "");
    }

    return result;
  };

  return {
    language,
    currency,
    dateFormat,
    timeFormat,
    numberFormat,
    formatCurrency,
    formatAmount,
    formatDate,
    formatTime,
    formatNumber,
    convertNumber,
    convertTime,
    convertDays,
    convertDigits,
    formatRelativeTime,
    formatRelativeMinutes,
    formatDistanceAgo,
  };
};

export default useSettings;
