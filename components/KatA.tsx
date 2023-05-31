import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";
import { FaBusAlt, FaCar, FaMotorcycle, FaTruckMoving } from "react-icons/fa";
import KatACart from "./a/KatACart";
import KatAmCart from "./a/KatAmCart";
import KatA1Cart from "./a/KatA1Cart";
import KatA2Cart from "./a/KatA2Cart";
// import KatACart form '../components/A/KatACart'
interface KatAProps {}

const KatA: FC<KatAProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("A");
  return (
    <div>
      <Head>
        <title>Kategoria A</title>
        <meta name="description" content="Informacje o kursie kategorii A" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="mx-auto max-w-4xl lg:text-center p-5">
        <div className="flex items-center justify-center">
          <img className="h-20 w-28" src="/logo.jpg" alt="logo" />
        </div>
        <h2 className="text-3xl text-center font-bold tracking-tight text-red-600 sm:text-4xl">
          Szkoła jazdy Strażak
        </h2>
        <div className="bg-white mt-10 ">
          <h2 className="text-2xl font-bold mb-5">Informacje:</h2>
          <p className="text-lg text-gray-800 mb-8">
            W naszej szkole stawiamy na nowoczesne metody nauczania, zapewniając
            wysoką jakość edukacji. Zajęcia teoretyczne korzystają z najnowszych
            materiałów dydaktycznych i innowacyjnych metod, które sprzyjają
            efektywnemu przyswajaniu wiedzy. We współpracy z Polskim Związkiem
            Motorowym wprowadzamy również nowoczesne rozwiązania edukacyjne, co
            pozwala na kompleksową naukę jazdy. Oferujemy zarówno zajęcia
            stacjonarne, jak i e-learningowe, dzięki czemu nasi uczniowie mają
            możliwość nauki w dogodnym czasie i miejscu. Dostęp do bazy pytań
            egzaminacyjnych oraz wykładów online umożliwia elastyczne planowanie
            nauki, co szczególnie doceniają osoby o ograniczonym czasie lub
            mieszkające daleko od szkoły jazdy. Nasze zajęcia praktyczne
            odbywają się na najnowszych motocyklach renomowanych marek, takich
            jak Yamaha i BMW, co zapewnia wysoką jakość sprzętu i umożliwia
            skuteczne doskonalenie umiejętności. Wykorzystujemy zmodernizowany
            plac (Kartodrom) przy ulicy Fordońskiej 116, który zapewnia
            bezpieczne warunki do nauki jazdy na motocyklu. Jeśli szukasz
            bezpiecznego i skutecznego miejsca do nauki jazdy na motocyklu,
            nasza szkoła jest idealnym wyborem dla Ciebie.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start py-10 p5x-">
          <h2 className="text-2xl font-bold mb-5">
            {" "}
            Ile trzeba mieć lat, aby móc starać się o prawo jazdy poszczególnych
            kategorii?
          </h2>
          <ul className="space-y-4 text-left">
            <li className="font-medium list-disc text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria AM</strong> - minimalny wiek: 14 lat. Pozwala
                na kierowanie pojazdami o pojemności do 50 cm³ lub o mocy do 4
                kW oraz Składając wniosek o wydanie prawa jazdy, osoba ta
                powinna przedstawić zgodę rodziców.
              </span>
            </li>
            {/* <hr className="border-red-600 antialiased" /> */}

            <li className="font-medium list-disc text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A1</strong> - minimalny wiek: 16 lat. Pozwala
                na kierowanie motocyklem o pojemności do 125 cm³ i mocy do 11 kW
                oraz Składając wniosek o wydanie prawa jazdy, osoba ta powinna
                przedstawić zgodę rodziców.
              </span>
            </li>
            {/* <hr className="border-red-600 antialiased" /> */}

            <li className="font-medium list-disc text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A2</strong> - minimalny wiek: 18 lat. Pozwala
                na kierowanie motocyklem o mocy do 35 kW.
              </span>
              {/* Możliwość zdobycia, jeżeli posiadane jest prawo jazdy kategorii A1. */}
            </li>
            {/* <hr className="border-red-600 antialiased" /> */}

            <li className="font-medium list-disc text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A</strong> - minimalny wiek: 24 lata. Pozwala
                na kierowanie motocyklem bez ograniczeń mocy.
              </span>
            </li>
            {/* <hr className="border-red-600 antialiased" /> */}

            <li className="font-medium list-disc text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A</strong> - minimalny wiek: 20 lat, ale tylko
                dla osób posiadających prawo jazdy kategorii A2 od minimum 2
                lat. Pomimo niższego wieku, możliwość kierowania motocyklem bez
                ograniczeń mocy.
              </span>
            </li>
            {/* <hr className="border-red-600 antialiased" /> */}
          </ul>
        </div>
        <h3 className=" text-center text-2xl font-bold mb-5 tracking-tight text-black sm:text-xl mt-10">
          wybierz kategorie:
        </h3>
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
