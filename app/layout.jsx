"use client";
import "/styles/global.css";
import { ThemeProvider } from "next-themes";
import { Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import { useState, useEffect } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const madeOuterRegular = localFont({
  src: "../public/fonts/madeOuter/MADE Outer Sans Regular.otf",
  variable: "--font-madeOuterRegular",
});

const madeOuterBold = localFont({
  src: "../public/fonts/madeOuter/MADE Outer Sans Bold.otf",
  variable: "--font-madeOuterBold",
});

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="es">
      <body
        className={`${inter.className} ${madeOuterRegular.variable} ${madeOuterBold.variable}`}
      >
        {mounted ? (
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider>
        ) : null}
      </body>
    </html>
  );
}
