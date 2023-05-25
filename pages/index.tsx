import Image from "next/image";
import { Inter } from "next/font/google";
// import Nav from "@/components/Nav";
import Nav from "@/components/Nav";
import Ofert from "@/components/Ofert";
import Header from "@/components/Header";
import Contsct from "@/components/Contsct";
import Gallery from "@/components/Gallery";
import Food from "@/components/Food";
import KatA from "@/components/KatB";
import FiveSteps from "@/components/FiveSteps";
// import Carousel from "@/components/Slaider";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <Nav /> */}
      <Header />
      <Ofert />

      <Gallery />
      {/* <KatA /> */}
      <FiveSteps />
      {/* <Carousel /> */}
    </main>
  );
}
