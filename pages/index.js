import Head from "next/head";
import Image from "next/image";
import { Roboto } from "@next/font/google";

//Componentes
import Header from "@/components/Header";
import Banner from "@/components/Banner/index";
import Footer from "@/components/Footer/index";

import SocialMedia from "@/components/SocialMedia";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Traverso Alex Portfolio</title>
        <meta name='description' content='Traverso Alex Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main className={roboto.className}>
        <Header />
        <Banner />
        <SocialMedia />
        <Footer />
      </main>
    </>
  );
}
