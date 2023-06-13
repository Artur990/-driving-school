import Link from 'next/link';

const Car = () => {
  return (
    <div className="cartOfert">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          Kurs kat. B
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Zdobądź swoją wolność i niezależność dzięki naszemu kursowi na prawo
          jazdy kategorii B! Pod czujnym okiem doświadczonych instruktorów,
          nauczysz się bezpiecznej i pewnej jazdy, zdobywając niezbędne
          umiejętności, które otworzą przed Tobą nowe możliwości. Nasze
          elastyczne harmonogramy, nowoczesne metody nauczania i konkurencyjne
          ceny sprawiają, że jest to idealny moment, aby podjąć decyzję. Zapisz
          się już dzisiaj i zacznij swoją drogę do samodzielnej jazdy!{' '}
          <Link
            href="katB"
            className="text-lg font-semibold text-red-500 underline"
          >
            Więcej szegółów..
          </Link>
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="text-black-600 flex-none  text-sm font-bold leading-6">
            To oferujemy:
          </h4>
          <div className="h-px flex-auto bg-gray-400"></div>
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
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
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
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
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
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
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
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Egzamin wewnętrzny
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-400 ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-md px-1">
            <p className="text-2xl font-black text-gray-600 ">Możliwe raty!</p>
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
            <div className="flex">
              <Link
                href="Zapiszsie"
                className="mr-2 mt-5 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Zapisz się
              </Link>
              <Link
                href="Kontakt"
                className="ml-2 mt-5 block w-full rounded-md bg-indigo-500 px-3 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Mam pytanie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
