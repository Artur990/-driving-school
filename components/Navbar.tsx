import { FaCar, FaMotorcycle, FaTruckMoving, FaBusAlt } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { useNavigation } from '@/hooks/useNavigation';
import Link from 'next/link';

export const Navbar = () => {
  const {
    isOpen,
    setIsOpen,
    openMobile,
    activePage,
    handleNavigation,
    toggleMenu,
    toggleMenuMobile,
  } = useNavigation();
  return (
    <header className=" relative left-0 right-0 top-0 z-50 border-b border-gray-400 ">
      <nav
        className="container mx-auto flex  h-auto w-full max-w-7xl items-center justify-between  bg-white p-1 shadow-sm backdrop-blur-md lg:px-8"
        aria-label="Global"
      >
        {/* <div className="container mx-auto  "> */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Firma szkoła jazdyy</span>
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
                activePage.toLowerCase() === 'nasze kursy'
                  ? ' border-b-4 border-red-600'
                  : ' link-with-border '
              }`}
            aria-expanded="false"
            onClick={toggleMenuMobile}
          >
            MENU
            <span className="sr-only">otwórz główne menu</span>
            <svg
              className="h-5 w-5 flex-none text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className={` font-regular flex items-center  gap-x-1 text-sm font-semibold leading-6 text-gray-900
              ${
                activePage.toLowerCase() === 'nasze kursy'
                  ? ' border-b-4 border-red-600'
                  : ' link-with-border '
              }`}
              aria-expanded="false"
              onClick={toggleMenu}
            >
              NASZE KURSY
              <svg
                className="link-with-border h-5 w-5 flex-none text-gray-400 "
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease-in-out',
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
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaCar className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katB"
                        className="block font-semibold text-gray-900"
                      >
                        KAT. B<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Toyota Auris, Nissan</p>
                    </div>
                  </Link>
                  <Link
                    href="/katA"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaMotorcycle className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katA"
                        className="block font-semibold text-gray-900"
                      >
                        KAT. AM, A1, A2, A
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
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaTruckMoving className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katC"
                        className="block font-semibold text-gray-900"
                      >
                        KAT. C, E<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Man</p>
                    </div>
                  </Link>

                  <Link
                    href="/katD"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaBusAlt className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/katD"
                        className="block font-semibold text-gray-900"
                      >
                        Kat. D<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Autobus</p>
                    </div>
                  </Link>
                  <Link
                    href="/katD"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
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
                    href="/galeria"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
                  >
                    <GrGallery />
                    GALERIA
                  </Link>
                  <button
                    onClick={() => handleNavigation('w-5-krokach', '/')}
                    className="flex  items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
                  >
                    PRAWO JAZDY W 5 KROKACH
                  </button>
                </div>
              </div>
            )}
          </div>

          <Link
            href={'/o-nas'}
            className={`ext-gray-900 text-sm  font-semibold leading-6 ${
              activePage.toLowerCase() === 'o-nas'
                ? ' border-b-4 border-red-600'
                : ' link-with-border '
            }`}
          >
            O NAS
          </Link>
          <Link
            href="/kontakt"
            className={`ext-gray-900 text-sm  font-semibold leading-6 ${
              activePage.toLowerCase() === 'kontakt'
                ? ' border-b-4 border-red-600'
                : ' link-with-border '
            }`}
          >
            KONTAKT
          </Link>

          <Link
            href="galeria"
            className={`ext-gray-900 text-sm  font-semibold leading-6 ${
              activePage.toLowerCase() === 'galeria'
                ? 'border-b-4 border-red-600'
                : ' link-with-border '
            }`}
          >
            GALERIA
          </Link>

          <div
            onClick={() => handleNavigation('co-nas-wyroznia', '/')}
            className={`ext-gray-900 cursor-pointer   text-sm font-semibold leading-6 ${
              activePage.toLowerCase() === 'section=co-nas-wyroznia'
                ? 'border-b-4 border-red-600 text-red-600'
                : ' link-with-border '
            }`}
          >
            CO NAS WYRÓŻNIA?
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/zapisz-sie"
            className="rounded bg-red-600 px-1  py-2 text-lg font-semibold leading-6 text-white  hover:bg-indigo-500 lg:px-3 lg:py-2 lg:text-base xl:px-8 xl:text-lg"
          >
            ZAPISZ SIĘ ONLINE
          </Link>
        </div>
        {/* </div> */}
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
                  <span className="sr-only">Zamknij menu</span>
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
                        className="flex items-center gap-x-1 pl-2 text-lg font-semibold leading-6 text-gray-900"
                        aria-expanded="false"
                        onClick={toggleMenu}
                      >
                        NASZE KURSY
                        <svg
                          className="h-5 w-5 flex-none text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.3s ease-in-out',
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
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            KAT. B
                          </Link>
                          <Link
                            href="/katA"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            KAT. AM, A1, A2, A
                          </Link>
                          <Link
                            href="katC"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            KAT. C, E
                          </Link>
                          <Link
                            href="/katD"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            KAT. D
                          </Link>
                          <Link
                            href="/kod95"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            KWALIFIKACJE kod95
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/o-nas"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      O NAS
                    </Link>
                    <Link
                      href="/kontakt"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      KONTAKT
                    </Link>
                    <Link
                      href="/galeria"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      GALERIA
                    </Link>
                    <div
                      onClick={() => handleNavigation('co-nas-wyroznia', '/')}
                      className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      CO NAS WYRÓŻNIA?
                    </div>
                  </div>

                  <div className="py-6">
                    <Link
                      href="zapisz-sie"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg bg-red-700 px-3 py-2.5 text-center text-base font-semibold leading-7 text-white  hover:bg-indigo-500"
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
};
