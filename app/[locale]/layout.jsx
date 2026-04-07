"use client";

import * as React from "react";
import "/styles/global.css";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const madeOuterRegular = localFont({
  src: "../../public/fonts/madeOuter/MADE Outer Sans Regular.otf",
  variable: "--font-madeOuterRegular",
});

const madeOuterBold = localFont({
  src: "../../public/fonts/madeOuter/MADE Outer Sans Bold.otf",
  variable: "--font-madeOuterBold",
});

const NextThemesProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  },
);

export default function RootLayout({ children }) {
  const { locale } = useParams();

  const messages = require(`../../messages/${locale}.json`);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} ${madeOuterRegular.variable} ${madeOuterBold.variable}`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
