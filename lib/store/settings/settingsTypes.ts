export type TThemeMode = "light" | "dark";
export type TTimeFormat = "12h" | "24h";
export type TDateFormat =
  | "MM/dd/yyyy"
  | "dd/MM/yyyy"
  | "yyyy-MM-dd"
  | "dd.MM.yyyy"
  | "MMM do, yyyy"
  | "MMMM d, yyyy"
  | "dd MMM yy"
  | "dd-MM-yyyy";

export interface ICurrency {
  code: "BDT" | "USD" | "CUSTOM";
  locale: string;
  symbol: string;
  position: "before" | "after";
}

export type TNumberFormat = {
  type: "INTL";
  locale: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export type TLanguage = {
  code: "en" | "bn";
  label: {short: string; long: string};
  flag: string;
};

export interface SettingsState {
  theme: TThemeMode;
  currency: ICurrency;
  dateFormat: TDateFormat;
  timeFormat: TTimeFormat;
  numberFormat: TNumberFormat;
}
