import { FC } from "react";
import { useState } from "react";
import { FaCar, FaMotorcycle, FaTruckMoving, FaBusAlt } from "react-icons/fa";

interface OfertProps {}

const Ofert = () => {
  const [activeTab, setActiveTab] = useState("car");
  return (
    <div className="bg-white py-12 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <div className="flex items-center justify-center">
            <img className="h-20 w-28" src="/logo.jpg" alt="logo" />
          </div>
          <h2 className="text-3xl text-center font-bold tracking-tight text-red-600 sm:text-4xl">
            Szkoła jazdy Strażak
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dołącz do grona zadowolonych kierowców i zacznij swoją przygodę z
            prowadzeniem pojazdów w najlepszej szkole jazdy w Bydgoszczy.
            Oferujemy kompleksowe kursy na samochód, motor, ciężarówkę i
            autobus, które przygotują Cię do bezpiecznej i pewnej jazdy na
            każdym rodzaju drogi. Skorzystaj z naszej bogatej oferty i zapisz
            się już dzisiaj na kurs, który otworzy przed Tobą nowe możliwości i
            da Ci wolność poruszania się na własnych zasadach!
          </p>
          <div className="flex justify-center space-x-4 m-4">
            <div
              onClick={() => setActiveTab("car")}
              className={`border-b-4 ${
                activeTab === "car" ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaCar className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
            <div
              onClick={() => setActiveTab("motorcycle")}
              className={`border-b-4 ${
                activeTab === "motorcycle"
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <FaMotorcycle className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
            <div
              onClick={() => setActiveTab("truck")}
              className={`border-b-4 ${
                activeTab === "truck" ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaTruckMoving className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
            <div
              onClick={() => setActiveTab("bus")}
              className={`border-b-4 ${
                activeTab === "bus" ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaBusAlt className="h-9 w-9 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
          </div>
        </div>
        {activeTab === "car" && (
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Kurs kat. B
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Zdobądź swoją wolność i niezależność dzięki naszemu kursowi na
                prawo jazdy kategorii B! Pod czujnym okiem doświadczonych
                instruktorów, nauczysz się bezpiecznej i pewnej jazdy,
                zdobywając niezbędne umiejętności, które otworzą przed Tobą nowe
                możliwości. Nasze elastyczne harmonogramy, nowoczesne metody
                nauczania i konkurencyjne ceny sprawiają, że jest to idealny
                moment, aby podjąć decyzję. Zapisz się już dzisiaj i zacznij
                swoją drogę do samodzielnej jazdy!
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm  leading-6 text-black-600 font-bold">
                  To oferujemy:
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Teoria 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Praktyka 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Multimedialna książka
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Egzamin wewnętrzny
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-2xl font-black text-gray-600 ">
                    Możliwe raty!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      2200
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      Zł
                    </span>
                  </p>
                  <span className="text-red-600">
                    Cena wakacyjna (pierwsze 10 osób)
                  </span>
                  <br />
                  <del>2600 zł</del>
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Zapisz się
                  </a>
                  {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "motorcycle" && (
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Kurs kat. AM, A1, A2, A
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Zdobądź swoją wolność i niezależność dzięki naszemu kursowi na
                prawo jazdy kategorii A! Pod czujnym okiem doświadczonych
                instruktorów, nauczysz się bezpiecznej i pewnej jazdy,
                zdobywając niezbędne umiejętności, które otworzą przed Tobą nowe
                możliwości. Nasze elastyczne harmonogramy, nowoczesne metody
                nauczania i konkurencyjne ceny sprawiają, że jest to idealny
                moment, aby podjąć decyzję. Zapisz się już dzisiaj i zacznij
                swoją drogę do samodzielnej jazdy!
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm  leading-6 text-red-600 font-bold">
                  To oferujemy:
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Teoria 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Praktyka 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Multimedialna książka
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Egzamin wewnętrzny
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-2xl font-black text-gray-600 ">
                    Możliwe raty!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      2200
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      Zł
                    </span>
                  </p>
                  <span className="text-red-600">
                    Cena wakacyjna (pierwsze 10 osób)
                  </span>
                  <br />
                  <del>2600 zł</del>
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Zapisz się
                  </a>
                  {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "truck" && (
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Kurs kat. C i C + E
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Zdobądź swoją wolność i niezależność dzięki naszemu kursowi na
                prawo jazdy kategorii C i C+E! Pod czujnym okiem doświadczonych
                instruktorów, nauczysz się bezpiecznej i pewnej jazdy,
                zdobywając niezbędne umiejętności, które otworzą przed Tobą nowe
                możliwości. Nasze elastyczne harmonogramy, nowoczesne metody
                nauczania i konkurencyjne ceny sprawiają, że jest to idealny
                moment, aby podjąć decyzję. Zapisz się już dzisiaj i zacznij
                swoją drogę do samodzielnej jazdy!
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm  leading-6 text-red-600 font-bold">
                  To oferujemy:
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Teoria 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Praktyka 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Multimedialna książka
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Egzamin wewnętrzny
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-2xl font-black text-gray-600 ">
                    Możliwe raty!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      3300
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      Zł
                    </span>
                  </p>
                  <span className="text-red-600">
                    Cena wakacyjna (pierwsze 10 osób)
                  </span>
                  <br />
                  <del>3600 zł</del>
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Zapisz się
                  </a>
                  {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "bus" && (
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Kurs kat. D
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Zdobądź swoją wolność i niezależność dzięki naszemu kursowi na
                prawo jazdy kategorii D! Pod czujnym okiem doświadczonych
                instruktorów, nauczysz się bezpiecznej i pewnej jazdy,
                zdobywając niezbędne umiejętności, które otworzą przed Tobą nowe
                możliwości. Nasze elastyczne harmonogramy, nowoczesne metody
                nauczania i konkurencyjne ceny sprawiają, że jest to idealny
                moment, aby podjąć decyzję. Zapisz się już dzisiaj i zacznij
                swoją drogę do samodzielnej jazdy!
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm  leading-6 text-red-600 font-bold">
                  To oferujemy:
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Teoria 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Praktyka 30h
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Multimedialna książka
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Egzamin wewnętrzny
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-2xl font-black text-gray-600 ">
                    Możliwe raty!
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      2200
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      Zł
                    </span>
                  </p>
                  <span className="text-red-600">
                    Cena wakacyjna (pierwsze 10 osób)
                  </span>
                  <br />
                  <del>2600 zł</del>
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Zapisz się
                  </a>
                  {/* <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ofert;
