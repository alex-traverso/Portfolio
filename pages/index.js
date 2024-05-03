import Head from "next/head";
import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";

//Componentes
import Banner from "@/components/Banner/index";
import Skills from "@/components/Skills";
import Services from "@/components/ServicesComp";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import SocialMedia from "@/components/SocialMedia";
import AboutMe from "@/components/AboutMe";

const roboto = Roboto({
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

export default function Home() {
	return (
		<>
			<Head>
				<title>Traverso Alex Portfolio</title>
				<meta
					name="description"
					content="Traverso Alex Portfolio, Desarrollador Front-End, HTML, CSS, Javascript, React Js, Next Js, MongoDB"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<main
				className={`${roboto.className} ${madeOuterRegular.variable} ${madeOuterBold.variable}`}
				id="home"
			>
				<NavBar />
				<Banner />
				<SocialMedia />
				<AboutMe />
				<Skills />
				<Services />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
