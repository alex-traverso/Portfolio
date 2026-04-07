"use client";
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

export default function HomePageContainer({ projects }) {
  return (
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
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </motion.main>
  );
}
