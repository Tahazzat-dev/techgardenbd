import type {Config} from "tailwindcss";

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
        card: "var(--bg-card)",
        "card-foreground": "var(--text-card)",
        primary: "var(--brand-primary)",
        "primary-foreground": "var(--brand-primary-fg)",
        muted: "var(--bg-muted)",
        "muted-foreground": "var(--text-muted)",
        border: "var(--border-subtle)",
        input: "var(--border-input)",
      },
      borderRadius: {
        md: "var(--radius-md)",
      },
    },
  },
  plugins: [],
};

export default config;
