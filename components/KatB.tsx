import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";
import KatBCart from "./categories/b/KatBCart";
import KatBECart from "./categories/b/KatBECart";

interface KatAProps {}

const KatB: FC<KatAProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("B");
  return (
    <div>
      <Head>
        <title>Kategoria B</title>
        <meta name="description" content="Informacje o kursie kategorii B" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="flex items-center justify-center">
        <Image
          width={100}
          height={100}
          className="h-20 w-28"
          src="/logo.jpg"
          alt="logo"
        />
      </div>
      <h2 className="text-3xl text-center font-bold tracking-tight text-red-600 sm:text-4xl">
        Szkoła jazdy Strażak
      </h2>
      <h3 className=" text-center text-2xl font-bold mb-5 tracking-tight text-black sm:text-xl mt-10">
        wybierz kategorie:
      </h3>
      <div className="flex justify-center space-x-4 m-4 mt-1">
        <div
          onClick={() => setActiveTab("B")}
          className={`border-b-4 ${
            activeTab === "B" ? "border-red-500" : "border-gray-300"
          }  cursor-pointer`}
        >
          <div className="px-3 h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer font-black text-2xl ">
            B
          </div>
        </div>
        <div
          onClick={() => setActiveTab("B+E")}
          className={`border-b-4 ${
            activeTab === "B+E" ? "border-red-500" : "border-gray-300"
          }  cursor-pointer`}
        >
          <div className=" h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer font-black text-2xl ">
            B+E
          </div>
        </div>
      </div>
      {activeTab === "B" && <KatBCart />}
      {activeTab === "B+E" && <KatBECart />}
    </div>
  );
};

export default KatB;
