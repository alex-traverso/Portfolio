import "styles/global.css";
import { ThemeProvider } from "next-themes";

import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

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

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<main
				className={`${inter.className} ${madeOuterRegular.variable} ${madeOuterBold.variable}`}
			>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
