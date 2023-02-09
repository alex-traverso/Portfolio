import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

//Componentes
import Navbar from "@/components/Navbar/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <div>
          <h1 className='text-red-400'>Hola</h1>
        </div>
      </main>
    </>
  );
}
