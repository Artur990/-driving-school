import Image from "next/image";
import { Inter } from "next/font/google";
// import Nav from "@/components/Nav";
import Nav from "@/components/Nav";
import Ofert from "@/components/Ofert";
import Header from "@/components/Header";
import Contsct from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Food from "@/components/Food";
import KatA from "@/components/KatB";
import FiveSteps from "@/components/FiveSteps";
import Distinguishes from "@/components/Distinguishes";
import Features from "@/components/Features";
import Carousell from "@/components/Slaider";
import Head from "next/head";
import RegistrationForm from "@/components/RegistrationForm";
// import Carousel from "@/components/Slaider";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - Najelsza szkoła w Bydgoszczy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div>
        <Header />
        <Ofert />
        <Gallery />
        <Distinguishes />
        <FiveSteps />
        <Carousell />
        <Features />
        <RegistrationForm />
      </div>
    </>
  );
}
