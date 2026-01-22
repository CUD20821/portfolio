import type { Metadata } from "next";
import "@/app/global.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { ThemeProvider } from "next-themes";
import { Noto_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import viMessages from "@/messages/vi.json";
import jaMessages from "@/messages/ja.json";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ducle97.vercel.app/vi"),
  title: { default: "Portfolio", template: "%s | My Site" },
  description: "Welcome to My Portfolio",
  alternates: {
    canonical: "https://ducle97.vercel.app/",
    languages: {
      "ja-JP": "https://ducle97.vercel.app/ja",
      "vi-VN": "https://ducle97.vercel.app/vi",
    },
  },
  openGraph: {
    title: "My Portfolio",
    description: "Welcome to My Portfolio",
    url: "https://ducle97.vercel.app/vi",
    siteName: "My Portfolio",
    images: [{ url: "https://ducle97.vercel.app/personal.png" }],
  },
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
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        enableColorScheme={false}
      >
        <Header />
        <div className={`${notoSans.className} w-full max-w-5xl my-0 mx-auto min-h-[calc(100vh-130px)] py-20 px-8`}>{children}</div>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
