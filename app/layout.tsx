import type {Metadata} from "next";
import {SiteFooter} from "@/components/layout/site-footer";
import {SiteHeader} from "@/components/layout/site-header";
import {StoreProvider} from "@/components/layout/store-provider";
import {ThemeProvider} from "@/components/layout/theme-provider";
import {getLocale, t} from "@/lib/i18n";
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
  const dictionary = t(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <StoreProvider>
          <ThemeProvider>
            <SiteHeader locale={locale} labels={dictionary.nav} />
            {children}
            <SiteFooter locale={locale} description={dictionary.footer} labels={dictionary.nav} />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
