import type { Metadata } from "next";
import "../globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { ThemeProvider } from "next-themes";
import { Noto_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import viMessages from "@/messages/vi.json";
import jaMessages from "@/messages/ja.json";
import { Suspense } from "react";
import Loading from "./loading";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duc Le",
  description: "Duc Le app",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Load messages directly for static export compatibility
  const messages = locale === "ja" ? jaMessages : viMessages;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={notoSans.className}>
        <NextIntlClientProvider
          key={locale}
          locale={locale}
          messages={messages}
        >
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            enableColorScheme={false}
          >
            <Header />
            <div className="wrap">{children}</div>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
