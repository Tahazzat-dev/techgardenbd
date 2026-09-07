import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-main)",
        foreground: "var(--text-main)",
        card: {
          DEFAULT: "var(--bg-card)",
          foreground: "var(--text-card)",
        },
        primary: {
          DEFAULT: "var(--brand-primary)",
          foreground: "var(--brand-primary-fg)",
          300: "var(--brand-primary-300)",
          500: "var(--brand-primary-500)",
          // alias: header/components still use bg-primary-700
          700: "var(--brand-primary-500)",
        },
        muted: {
          DEFAULT: "color-mix(in srgb, var(--border-subtle) 45%, var(--bg-main))",
          foreground: "var(--text-muted)",
        },
        border: "var(--border-subtle)",
        input: "var(--border-input)",
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--brand-primary-fg)",
        },
        secondary: {
          DEFAULT: "var(--border-subtle)",
          foreground: "var(--text-main)",
        },
        ring: "var(--brand-primary)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      fontSize: {
        "3xs": ["var(--text-3xs)", {lineHeight: "130%"}],
        xxs: ["var(--text-xxs)", {lineHeight: "130%"}],
        xs: ["var(--text-xs)", {lineHeight: "130%"}],
        sm: ["var(--text-sm)", {lineHeight: "130%"}],
        base: ["var(--text-base)", {lineHeight: "130%"}],
        md: ["var(--text-md)", {lineHeight: "120%"}],
        lg: ["var(--text-lg)", {lineHeight: "120%"}],
        xl: ["var(--text-xl)", {lineHeight: "120%"}],
        "2xl": ["var(--text-2xl)", {lineHeight: "120%"}],
        "3xl": ["var(--text-3xl)", {lineHeight: "120%"}],
        hero: ["var(--text-hero)", {lineHeight: "120%"}],
        big: ["var(--fs-big)", {lineHeight: "120%"}],
      },
    },
  },
  plugins: [],
};

export default config;
