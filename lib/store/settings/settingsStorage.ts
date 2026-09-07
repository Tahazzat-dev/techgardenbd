import type {SettingsState, TDateFormat, TThemeMode, TTimeFormat} from "@/lib/store/settings/settingsTypes";

export const SETTINGS_STORAGE_KEY = "techgarden_app_settings";

export const createDefaultSettingsState = (): SettingsState => ({
  theme: "light",
  currency: {
    code: "CUSTOM",
    symbol: "Tk",
    locale: "en-US",
    position: "before",
  },
  dateFormat: "dd-MM-yyyy",
  timeFormat: "12h",
  numberFormat: {
    type: "INTL",
    locale: "en-US",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
});

const isTheme = (value: unknown): value is TThemeMode => value === "light" || value === "dark";
const isTimeFormat = (value: unknown): value is TTimeFormat => value === "12h" || value === "24h";

export const normalizeSettingsState = (value: unknown): SettingsState => {
  const defaults = createDefaultSettingsState();

  if (!value || typeof value !== "object") {
    return defaults;
  }

  const partial = value as Partial<SettingsState>;

  return {
    theme: isTheme(partial.theme) ? partial.theme : defaults.theme,
    currency: {
      ...defaults.currency,
      ...(partial.currency ?? {}),
    },
    dateFormat: (partial.dateFormat as TDateFormat | undefined) ?? defaults.dateFormat,
    timeFormat: isTimeFormat(partial.timeFormat) ? partial.timeFormat : defaults.timeFormat,
    numberFormat: {
      ...defaults.numberFormat,
      ...(partial.numberFormat ?? {}),
    },
  };
};

export const loadPersistedSettings = (): SettingsState | undefined => {
  if (typeof localStorage === "undefined") {
    return undefined;
  }

  const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
  if (!raw) {
    return undefined;
  }

  try {
    return normalizeSettingsState(JSON.parse(raw));
  } catch {
    localStorage.removeItem(SETTINGS_STORAGE_KEY);
    return undefined;
  }
};
