import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";
import { FaBusAlt, FaCar, FaMotorcycle, FaTruckMoving } from "react-icons/fa";
import KatACart from "./A/KatACart";
import KatAmCart from "./A/KatAmCart";
import KatA1Cart from "./A/KatA1Cart";
import KatA2Cart from "./A/KatA2Cart";
// import KatACart form '../components/A/KatACart'
interface KatAProps {}

const KatA: FC<KatAProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("A");
  return (
    <div>
      <Head>
        <title>Kategoria A</title>
        <meta name="description" content="Informacje o kursie kategorii A" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-2xl sm:text-center">
        <div className="flex items-center justify-center">
          <img className="h-20 w-28" src="/logo.jpg" alt="logo" />
        </div>
        <h2 className="text-3xl text-center font-bold tracking-tight text-red-600 sm:text-4xl">
          Szkoła jazdy Strażak
        </h2>
        <p className="mt-6 text-lg leading-8 font-bold text-gray-700">
          W naszej szkole stawiamy na nowoczesne metody nauczania, aby zapewnić
          naszym klientom jak najwyższą jakość edukacji. Dlatego też, zajęcia
          teoretyczne przeprowadzane są przy użyciu najnowszych materiałów
          dydaktycznych oraz innowacyjnych metod, które umożliwiają skuteczne
          przyswajanie wiedzy. Ponadto, we współpracy z Polskim Związkiem
          Motorowym, posiadamy dodatkowe możliwości, które pozwalają nam
          wprowadzać najnowsze rozwiązania edukacyjne. Dzięki temu możemy
          zapewnić naszym uczniom kompleksową i efektywną naukę jazdy. Oprócz
          tradycyjnych zajęć stacjonarnych, oferujemy także metodę
          e-learningową. Dostęp do bazy pytań egzaminacyjnych oraz wykładów w
          trybie zdalnym umożliwia naszym klientom naukę w dogodnym dla siebie
          czasie i miejscu. To szczególnie ważne dla osób, które mają napięty
          grafik lub mieszkają daleko od szkoły jazdy. Nasze zajęcia praktyczne
          odbywają się na najnowszych motocyklach marki Yamaha MT07, BMW G310 R,
          Yamaha YBR125 oraz Volcano 50. Dzięki temu nasi uczniowie uczą się
          jazdy na sprzęcie wysokiej jakości, co pozwala na bezpieczne i
          skuteczne doskonalenie umiejętności. Korzystamy ze zmodernizowanego
          placu (Kartodrom) przy ulicy Fordońskiej 116, który jest idealnym
          miejscem do nauki jazdy na motocyklu. Jest to przestrzeń wyposażona w
          nowoczesne urządzenia, pozwalające na bezpieczną naukę jazdy. Jeśli
          chcesz nauczyć się jazdy na motocyklu w bezpieczny i skuteczny sposób,
          nasza szkoła to idealne miejsce dla Ciebie.
        </p>
        <div className="flex flex-col items-center justify-start py-10 p5x- ">
          <ul className="space-y-4">
            <li className="font-medium text-gray-800">
              <span className="font-bold">Kategoria AM</span> - minimalny wiek:
              14 lat. Pozwala na kierowanie pojazdami o pojemności do 50 cm³ lub
              o mocy do 4 kW.
            </li>
            <li className="font-medium text-gray-800">
              <span className="font-bold">Kategoria A1</span> - minimalny wiek:
              16 lat. Pozwala na kierowanie motocyklem o pojemności do 125 cm³ i
              mocy do 11 kW.
            </li>
            <li className="font-medium text-gray-800">
              <span className="font-bold">Kategoria A2</span> - minimalny wiek:
              18 lat. Pozwala na kierowanie motocyklem o mocy do 35 kW.
              {/* Możliwość zdobycia, jeżeli posiadane jest prawo jazdy kategorii
              A1. */}
            </li>
            <li className="font-medium text-gray-800">
              <span className="font-bold">Kategoria A</span> - minimalny wiek:
              24 lata. Pozwala na kierowanie motocyklem bez ograniczeń mocy.
            </li>
            <li className="font-medium text-gray-800">
              <span className="font-bold">Kategoria A</span> - minimalny wiek:
              20 lat, ale tylko dla osób posiadających prawo jazdy kategorii A2
              od minimum 2 lat. Pomimo niższego wieku, możliwość kierowania
              motocyklem bez ograniczeń mocy.
            </li>
          </ul>
          {/* </div> */}
        </div>

        <div className="flex justify-center space-x-4 m-4">
          <div
            onClick={() => setActiveTab("AM")}
            className={`border-b-4 ${
              activeTab === "AM" ? "border-red-500" : "border-gray-300"
            }`}
          >
            <div className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer font-black text-2xl ">
              AM
            </div>
          </div>
          <div
            onClick={() => setActiveTab("A1")}
            className={`border-b-4 ${
              activeTab === "A1" ? "border-red-500" : "border-gray-300"
            }`}
          >
            <div className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer font-black text-2xl ">
              A1
            </div>
          </div>
          <div
            onClick={() => setActiveTab("A2")}
            className={`border-b-4 ${
              activeTab === "A2" ? "border-red-500" : "border-gray-300"
            }`}
          >
            <div className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer font-black text-2xl ">
              A2
            </div>
          </div>
          <div
            onClick={() => setActiveTab("A")}
            className={`border-b-4 ${
              activeTab === "A" ? "border-red-500" : "border-gray-300"
            }`}
          >
            <div className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer font-black text-2xl ">
              A
            </div>
          </div>
        </div>
      </div>
      {activeTab === "A" && <KatACart />}
      {activeTab === "AM" && <KatAmCart />}
      {activeTab === "A1" && <KatA1Cart />}
      {activeTab === "A2" && <KatA2Cart />}
      {/* <KatACart /> */}
    </div>
  );
};

export default KatA;
