import { I18nProvider } from "@/components/layout/i18n-provider";
import { StoreProvider } from "@/components/layout/store-provider";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ThemeScript } from "@/components/layout/theme-script";
import { Footer } from "@/components/shared/Footer";
import { SiteHeader } from "@/components/shared/Header";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "SaaS Development Agency",
  description: "A conversion-focused SaaS development agency website built with Next.js.",
  openGraph: {
    title: "SaaS Development Agency",
    description: "Next.js frontend experiences for SaaS teams integrating with Laravel APIs.",
    type: "website",
  },
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-[var(--app-height)] bg-background text-foreground antialiased">
        <I18nProvider>
          <StoreProvider>
            <ThemeProvider>
              <SiteHeader />
              {children}
              <Footer />
            </ThemeProvider>
          </StoreProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
