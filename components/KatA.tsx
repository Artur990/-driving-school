import Head from "next/head";
import { FC } from "react";

interface KatAProps {}
const Card = ({ title, children, imgSrc }: any) => (
  <div
    className="w-[90%] max-w-md rounded-xl overflow-hidden md:max-w-2xl m-4 transform hover:scale-105 transition-transform duration-200 ease-in-out"
    style={{
      boxShadow: "0px 0px 10px 0px #393e46",
    }}
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0 flex h-48 items-center justify-center my-auto md:h-3/4 md:w-48 max-h-[340px] ">
        <img
          className=" w-[90%] h-full object-cover  rounded-md"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
          {title}
        </div>
        <div className="mt-2 text-gray-500">{children}</div>
      </div>
    </div>
  </div>
);

const KatA: FC<KatAProps> = ({}) => {
  return (
    <div className="font-sans ring-1 ring-grey-400 m-7  rounded-3xl text-gray-900 antialiased bg-gray-100 min-h-screen">
      <Head>
        <title>Kategoria B</title>
        <meta name="description" content="Informacje o kursie kategorii B" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl text-center font-bold mb-4">Kategoria B</h1>
      <div className="lg:flex w-full h-full">
        <div className="w-1/2 flex flex-col ">
          <img
            className=" w-3/4 h-52 mx-auto object-cover  rounded-md"
            src="/car-szkola.png"
            alt="/car-szkola1.png"
          />
          <div className=" mt-10 text-xl ml-2 uppercase tracking-wide  text-black font-semibold ">
            W cenie kursu wliczone są:
          </div>
          <div className="mt-2 ml-4  ">
            <ul className="list-disc pl-5 mb-4 text-gray-500 ">
              <li className="">Materiały szkoleniowe</li>
              <li>Teoria 30h</li>
              <li>Praktyka 30h</li>
              <li>Egzamin wewnętrzny teoretyczny i praktyczny</li>
              <li>
                Szkolenie z zakresu pierwszej pomocy z możliwością praktyk
              </li>
              <li>Konsultacje z instruktorem - wykładowcą</li>
              <li>Ubezpieczenie NNW</li>
              <li className="font-bold">Jazdy dodatkowe 1h/80 zł</li>
              <li className="font-bold">Jazdy dodatkowe pakiet 10h/700 zł</li>
            </ul>
          </div>
          <div className=" mt-10 text-xl ml-2 uppercase tracking-wide text-start  text-black font-semibold ">
            Raty:
          </div>
          <div className="mt-2 ml-4  ">
            <ul className="list-disc pl-5 mb-4  text-gray-500 ">
              <li>
                Raty 0% - przez czas trwania kursu I rata - 600 zł przed
                rozpoczęciem
              </li>
              <li>
                {" "}
                zajęć teoretycznych, II rata - 600 zł przed rozpoczęciem zajęć
              </li>
              <li>
                praktycznych III rata - 500 zł po wyjeżdżeniu 10 godzin zajęć
              </li>
              <li>
                {" "}
                praktycznych IV rata - 500 zł po wyjeżdżeniu 20 godzin zajęć
                praktycznych
              </li>
            </ul>
          </div>
        </div>
        <div className="container w-1/2 mx-auto p-6">
          {/* <Card title="W cenie kursu wliczone są:" imgSrc="/car-szkola1.png">
            <ul className="list-disc pl-5 mb-4">
              <li>Materiały szkoleniowe</li>
              <li>Teoria 30h</li>
              <li>Praktyka 30h</li>
              <li>Egzamin wewnętrzny teoretyczny i praktyczny</li>
              <li>
                Szkolenie z zakresu pierwszej pomocy z możliwością praktyk
              </li>
              <li>Konsultacje z instruktorem - wykładowcą</li>
              <li>Ubezpieczenie NNW</li>
            </ul>
          </Card> */}

          <Card title="To oferujemy:" imgSrc="/logo2.png">
            <ul className="list-disc pl-5 mb-4">
              <li>
                Asfaltowy, oświetlony plac manewrowy, największy w Bydgoszczy!
              </li>
              <li>
                Skuteczne metody szkolenia opracowane przez instruktorów i
                pedagogów potwierdzone wysoką zdawalnością egzaminów
              </li>
              <li>
                Możliwość wyboru dogodnych godzin jazd szkoleniowych (jazdy
                prowadzone są także w soboty, niedziele oraz w godzinach
                wieczornych)
              </li>
              <li>
                Jazdy zaczynamy i kończymy w dogodnym miejscu - przy rondzie
                fordońskim (węzeł komunikacyjny)
              </li>
            </ul>
          </Card>

          <Card title="Badanie lekarskie:" imgSrc="/badania-lekarskie.jpg">
            <p className="mb-4">
              Cena kursu nie obejmuje badania lekarskiego. Istnieje możliwość
              wykonania takiego badania w naszym OSK. W celu wyznaczenia terminu
              badania oraz umówienia wizyty w naszym ośrodku prosimy o kontakt
              telefoniczny z naszym biurem. Koszt badania lekarskiego dla osób,
              które zapiszą się na
            </p>
            <p>
              Opłata za badanie przyjmowana jest przez lekarza w formie gotówki
              lub karty płatniczej.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KatA;