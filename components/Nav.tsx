import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCar, FaMotorcycle, FaTruckMoving, FaBusAlt } from "react-icons/fa";

import Head from "next/head";
import { FC, useEffect, useState } from "react";
import { GrGallery } from "react-icons/gr";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [openMobile, SetIsOpenMobile] = useState(false);
  const [activePage, setActivePage] = useState("");

  // const [activePage, setActivePage] = useState(""); // Dodajemy stan

  // Funkcja do obsługi kliknięcia zakładki GALERIA
  const handleGalleryClick = () => {
    // setActivePage("GALERIA");
    // Dodatkowe kod dla nawigacji do strony GALERIA
  };
  const handleNavigation = (target: string, href: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      window.location.href = href + "?section=" + target;
      setIsOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuMobile = () => {
    SetIsOpenMobile(!openMobile);
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const lastSegment = url.split("/").pop();
      console.log(lastSegment);
      const section = router.query.section;
      console.log(section);
      if (lastSegment === "Galeria") {
        setActivePage("Galeria");
      } else if (lastSegment === "Onas") {
        setActivePage("Onas");
      } else if (lastSegment === "Kontakt") {
        setActivePage("Kontakt");
      } else if (lastSegment === "katB" || lastSegment === "katA") {
        setActivePage("Nasze kursy");
      } else if (lastSegment === "co-nas-wyroznia") {
        setActivePage("section=co-nas-wyroznia");
      } else {
        setActivePage("");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Czyszczenie nasłuchiwacza zdarzeń przy odmontowywaniu komponentu
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  console.log(activePage);
  return (
    <header
      // onClick={() => SetIsOpenMobile(false)}
      className=" relative z-40 bg-white"
    >
      <nav
        className="mx-auto w-full h-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              height={100}
              width={100}
              className="h-28 w-36"
              src="/logo.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            className={`flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 
              ${
                activePage.toLowerCase() === "nasze kursy"
                  ? " border-b-4 border-red-600"
                  : " link-with-border "
              }`}
            aria-expanded="false"
            onClick={toggleMenuMobile}
          >
            MENU
            <svg
              className="h-5 w-5 flex-none text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className={` flex items-center font-regular  gap-x-1 text-sm font-semibold leading-6 text-gray-900
              ${
                activePage.toLowerCase() === "nasze kursy"
                  ? " border-b-4 border-red-600"
                  : " link-with-border "
              }`}
              aria-expanded="false"
              onClick={toggleMenu}
            >
              Nasze kursy
              <svg
                className="h-5 w-5 flex-none text-gray-400 link-with-border "
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <Link
                    href="/katB"
                    onClick={() => setIsOpen(false)}
                    // onClick={() => route("katB")}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaCar
                        // icon={faCar}
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katB"
                        className="block font-semibold text-gray-900"
                      >
                        Kat. B<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Toyota Auris, Nissan</p>
                    </div>
                  </Link>
                  <Link
                    href="/katA"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaMotorcycle className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katA"
                        className="block font-semibold text-gray-900"
                      >
                        Kat. AM, A1, A2, A
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Yamaha MT07 i YBR 125, BMW G310R, Volcano 50
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/katC-E"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaTruckMoving className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katC"
                        className="block font-semibold text-gray-900"
                      >
                        Kat. C, E<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Man</p>
                    </div>
                  </Link>

                  <Link
                    href="/katD"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaBusAlt className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katD"
                        className="block font-semibold text-gray-900"
                      >
                        Kat, D<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Autobus</p>
                    </div>
                  </Link>
                  <Link
                    href="/katD"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <Image
                        width={50}
                        height={50}
                        src="/95.png"
                        alt="95"
                        className="h-8 w-8 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/kod95"
                        className="block font-semibold text-gray-900"
                      >
                        kod95<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Kwalifikacje </p>
                    </div>
                  </Link>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <Link
                    href="/Galeria"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <GrGallery />
                    Galeria
                  </Link>
                  <div
                    onClick={() => handleNavigation("five-steps", "/")}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    Prawo jazdy w 5 ktrokach
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href={"/Onas"}
            // onClick={() => handleNavigation("Onas", "/")}
            className={`text-sm font-semibold  leading-6 ext-gray-900 ${
              activePage.toLowerCase() === "onas"
                ? " border-b-4 border-red-600"
                : " link-with-border "
            }`}
          >
            O NAS
          </Link>
          <Link
            href="/Kontakt"
            className={`text-sm font-semibold  leading-6 ext-gray-900 ${
              activePage.toLowerCase() === "kontakt"
                ? " border-b-4 border-indigo-500"
                : " link-with-border "
            }`}
          >
            KONTAKT
          </Link>

          <Link
            href="Galeria"
            className={`text-sm font-semibold  leading-6 ext-gray-900 ${
              activePage.toLowerCase() === "galeria"
                ? "text-red-600 border-b-4 border-red-600"
                : " link-with-border "
            }`}
            // onClick={handleGalleryClick}
          >
            GALERIA
          </Link>

          <div
            onClick={() => handleNavigation("co-nas-wyroznia", "/")}
            className={`text-sm font-semibold  leading-6 ext-gray-900 ${
              activePage.toLowerCase() === "section=co-nas-wyroznia"
                ? "text-red-600 border-b-4 border-red-600"
                : " link-with-border "
            }`}
          >
            CO NAS WYRÓŻNIA?
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/Zapiszsie"
            className="text-lg font-semibold leading-6 text-white bg-red-600 border-2 border-red-600 px-1 xl:px-8 py-1 rounded"
            // style={{ height: "40px", width: "160px" }}
          >
            ZAPISZ SIĘ ONLINE
          </Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        {openMobile && (
          <div className="fixed inset-0 z-10">
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div
                className="flex items-center justify-between"
                onClick={toggleMenuMobile}
              >
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Szkoła jazdy strażak</span>
                  <Image
                    width={62}
                    height={62}
                    className="h-8 w-auto"
                    src="/logo.jpg"
                    alt="logo"
                  />
                </Link>
                <button
                  onClick={toggleMenuMobile}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <button
                        type="button"
                        className="flex items-center pl-2 gap-x-1 text-lg font-semibold leading-6 text-gray-900"
                        aria-expanded="false"
                        onClick={toggleMenu}
                      >
                        Nasze kursy
                        <svg
                          className="h-5 w-5 flex-none text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                            transition: "transform 0.3s ease-in-out",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="mt-2 space-y-2" id="disclosure-1">
                          <Link
                            href="/katB"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Kat. B
                          </Link>
                          <Link
                            href="/katA"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Kat. AM, A1, A2, A
                          </Link>
                          <Link
                            href="katC"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Kat. C, E
                          </Link>
                          <Link
                            href="/katD"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Kat, D
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/Onas"
                      className="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      O NAS
                    </Link>
                    <Link
                      href="/Kontakt"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      KONTAKT
                    </Link>
                    <div
                      onClick={() => handleNavigation("co-nas-wyroznia", "/")}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      CO NAS WYRÓŻNIA?
                    </div>
                  </div>

                  <div className="py-6">
                    <Link
                      href="zapiszsie"
                      className="bg-red-700 text-white text-center -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:bg-gray-50"
                    >
                      ZAPISZ SIĘ ONILNE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
