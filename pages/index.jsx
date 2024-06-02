import Head from "next/head";

//Componentes

import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import Services from "@/components/ServicesComp";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import SocialMedia from "@/components/SocialMedia";
import AboutMe from "@/components/AboutMe";

import { motion } from "framer-motion";

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
			<motion.main
				id="home"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
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
			</motion.main>
		</>
	);
}
