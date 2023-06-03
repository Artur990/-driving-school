import KatCart from '@/components/ui/KatCart';
import Image from 'next/image';
import React from 'react';

const katA1Cart = ({}) => {
  return (
    <div className="ring-grey-400 m-4 max-w-[1500px]  rounded-3xl bg-gray-100 p-2  font-sans  text-gray-900  antialiased ring-1 sm:m-7 2xl:mx-auto">
      <h1 className="mb-4 text-center text-4xl font-bold">Kategoria A1</h1>
      <div className="h-full w-full lg:flex">
        <div className=" flex w-full flex-col lg:w-1/2 ">
          <Image
            width={500}
            height={300}
            className=" mx-auto h-72 w-full rounded-md object-cover  sm:w-3/4"
            src="/YBR125.png"
            alt="/YBR125.png"
          />

          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-red-600 sm:ml-20 ">
            <del className="text-black">2600 zł</del>
            {'  '} Cena wakacyjna 2200 zł
            <br />
            (pierwsze 10 osób)
          </div>
          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-black sm:ml-20 ">
            W cenie kursu wliczone są:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5 text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Materiały szkoleniowe </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Teoria 30h </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Praktyka 30h</span>{' '}
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Egzamin wewnętrzny teoretyczny i praktyczny
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Szkolenie z zakresu pierwszej pomocy z możliwością praktyk
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Konsultacje z instruktorem - wykładowcą
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Ubezpieczenie NNW</span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Jazdy dodatkowe 1h/80 zł</span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Jazdy dodatkowe pakiet 10h/700 zł{' '}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-10 text-start text-xl  font-semibold uppercase tracking-wide  text-black sm:ml-20 ">
            Raty:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5  text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Raty 0% - przez czas trwania kursu I rata - 500 zł przed
                  rozpoczęciem
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  zajęć teoretycznych, II rata - 500 zł przed rozpoczęciem zajęć
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  praktycznych III rata - 500 zł po wyjeżdżeniu 10 godzin zajęć
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  praktycznych IV rata - 500 zł po wyjeżdżeniu 20 godzin zajęć
                  praktycznych
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto  w-full p-0 lg:w-1/2">
          <KatCart title="To oferujemy:" imgSrc="/logo2.png">
            <ul className="mb-4 list-disc pl-5">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Asfaltowy, oświetlony plac manewrowy, największy w Bydgoszczy!
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Skuteczne metody szkolenia opracowane przez instruktorów i
                  pedagogów potwierdzone wysoką zdawalnością egzaminów
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  Możliwość wyboru dogodnych godzin jazd szkoleniowych (jazdy
                  prowadzone są także w soboty, niedziele oraz w godzinach
                  wieczornych)
                </span>
              </li>
            </ul>
          </KatCart>

          <KatCart title="Badanie lekarskie:" imgSrc="/badania-lekarskie.jpg">
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                Cena kursu nie obejmuje badania lekarskiego. Istnieje możliwość
                wykonania takiego badania w naszym OSK. W celu wyznaczenia
                terminu badania oraz umówienia wizyty w naszym ośrodku prosimy o
                kontakt telefoniczny z naszym biurem. Koszt badania lekarskiego
                dla osób, które zapiszą się na
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                Opłata za badanie przyjmowana jest przez lekarza w formie
                gotówki lub karty płatniczej.
              </span>
            </li>
          </KatCart>
        </div>
      </div>
    </div>
  );
};

export default katA1Cart;
