import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { KatACart } from './categories/a/KatACart';
import { KatAmCart } from './categories/a/KatAmCart';
import { KatA1Cart } from './categories/a/KatA1Cart';
import { KatA2Cart } from './categories/a/KatA2Cart';

export const KatA = () => {
  const [activeTab, setActiveTab] = useState('A');
  return (
    <div>
      <div className="mx-auto max-w-4xl p-5 lg:text-center">
        <div className="flex items-center justify-center">
          <Image
            width={120}
            height={100}
            className="h-20 w-28"
            src="/logo.jpg"
            alt="logo"
          />
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
          Szkoła jazdy Strażak
        </h2>
        <div className="mt-10 bg-white ">
          <h2 className="mb-5 text-2xl font-bold">Informacje:</h2>
          <p className="mb-8 text-lg text-gray-800">
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
        <div className="p5x- flex flex-col items-center justify-start py-10">
          <h2 className="mb-5 text-2xl font-bold">
            {' '}
            Ile trzeba mieć lat, aby móc starać się o prawo jazdy poszczególnych
            kategorii?
          </h2>
          <ul className="space-y-4 text-left">
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria AM</strong> - minimalny wiek: 14 lat. Pozwala
                na kierowanie pojazdami o pojemności do 50 cm³ lub o mocy do 4
                kW oraz Składając wniosek o wydanie prawa jazdy, osoba ta
                powinna przedstawić zgodę rodziców.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A1</strong> - minimalny wiek: 16 lat. Pozwala
                na kierowanie motocyklem o pojemności do 125 cm³ i mocy do 11 kW
                oraz Składając wniosek o wydanie prawa jazdy, osoba ta powinna
                przedstawić zgodę rodziców.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A2</strong> - minimalny wiek: 18 lat. Pozwala
                na kierowanie motocyklem o mocy do 35 kW.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A</strong> - minimalny wiek: 24 lata. Pozwala
                na kierowanie motocyklem bez ograniczeń mocy.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Kategoria A</strong> - minimalny wiek: 20 lat, ale tylko
                dla osób posiadających prawo jazdy kategorii A2 od minimum 2
                lat. Pomimo niższego wieku, możliwość kierowania motocyklem bez
                ograniczeń mocy.
              </span>
            </li>
          </ul>
        </div>
        <h3 className=" mb-5 mt-10 text-center text-2xl font-bold tracking-tight text-black sm:text-xl">
          wybierz kategorie:
        </h3>
        <div className="m-4 flex justify-center space-x-4">
          <div
            onClick={() => setActiveTab('AM')}
            className={`border-b-4 ${
              activeTab === 'AM' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              AM
            </div>
          </div>
          <div
            onClick={() => setActiveTab('A1')}
            className={`border-b-4 ${
              activeTab === 'A1' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              A1
            </div>
          </div>
          <div
            onClick={() => setActiveTab('A2')}
            className={`border-b-4 ${
              activeTab === 'A2' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              A2
            </div>
          </div>
          <div
            onClick={() => setActiveTab('A')}
            className={`border-b-4 ${
              activeTab === 'A' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              A
            </div>
          </div>
        </div>
      </div>
      {activeTab === 'A' && <KatACart />}
      {activeTab === 'AM' && <KatAmCart />}
      {activeTab === 'A1' && <KatA1Cart />}
      {activeTab === 'A2' && <KatA2Cart />}
    </div>
  );
};
