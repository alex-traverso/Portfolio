import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

//Componentes
import Header from "@/components/Header";
import Banner from "@/components/Banner/index";
import Footer from "@/components/Footer/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Traverso Alex Portfolio</title>
        <meta name='description' content='Traverso Alex Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>
        <Header />
        <Banner />
        <Footer />
      </main>
    </>
  );
}
