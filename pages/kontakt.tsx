import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Contact from '@/components/Contact';

export default function Index() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - kontak na prawo jazdy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="mx-auto max-w-2xl py-16 sm:text-center">
        <div className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            className="h-20 w-28"
            src="/logo.jpg"
            alt="logo"
          />
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
          Szkoła jazdy Strażak
        </h2>
        <p className="mt-6 px-5 text-lg leading-8 text-gray-600">
          Dołącz do grona zadowolonych kierowców i zacznij swoją przygodę z
          prowadzeniem pojazdów w najlepszej szkole jazdy w Bydgoszczy.
          Oferujemy kompleksowe kursy na samochód, motor, ciężarówkę i autobus,
          które przygotują Cię do bezpiecznej i pewnej jazdy na każdym rodzaju
          drogi. Skorzystaj z naszej bogatej oferty i zapisz się już dzisiaj na
          kurs, który otworzy przed Tobą nowe możliwości i da Ci wolność
          poruszania się na własnych zasadach!
        </p>
      </div>
      <Contact />
    </>
  );
}
