import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Registration from '@/components/Registration';
import InstructorCard from '@/components/ui/InstructorCard';

export default function Index() {
  const instructors = [
    { name: 'Marcin', image: '/onas/marcin.jpg' },
    { name: 'Bartek', image: '/onas/bartek.jpg' },
    { name: 'Szczepan', image: '/onas/szczepan.jpg' },
  ];
  const photos = [
    '/onas/opinions/opinion1.png',
    '/onas/opinions/opinion4.png',
    '/onas/opinions/opinion3.png',
    '/onas/opinions/opinion2.png',
    '/onas/opinions/opinion5.png',
    '/onas/opinions/opinion6.png',
  ];

  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - o nas szkoła jazdy w Bydgoszczy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <section className=" bg-[#F7FBFC] py-16">
        <div className="mx-auto  px-1">
          <h1 className="mb-8 text-center text-4xl font-bold ">
            Szkoła Jazdy Strażak w Bydgoszczy
          </h1>
          <p className="text-gray-800, mb-8 px-10 text-lg ">
            Szkoła Jazdy Strażak została stworzona z ideą pomagania ludziom, aby
            mogli łatwo zdobyć wymarzone prawo jazdy i cieszyć się
            niezależnością oraz przyjemnością samodzielnej jazdy. Uczymy przede
            wszystkim jeździć, a nie tylko zdać egzamin. Możesz być pewny, że po
            odbyciu praktyki z naszymi instruktorami, do egzaminu przystąpisz z
            naturalnym spokojem i bez stresu, zdając go za pierwszym razem!
          </p>

          <div className="mb-8 flex items-center justify-center">
            <Image src="/onas/team.jpg" alt="" width={900} height={900} />
          </div>
          <div className="mt-10 bg-[#F7FBFC]">
            <h2 className="mb-4 py-10 text-center text-2xl font-bold ">
              Instruktorzy:
            </h2>
            <div className=" lg:flex xl:p-10">
              {instructors.map((instructor, index) => (
                <InstructorCard
                  key={index}
                  name={instructor.name}
                  image={instructor.image}
                />
              ))}
            </div>
          </div>
          <div className="flex h-36 w-full items-center justify-center bg-zinc-800">
            <p className="text-regular mb-8 text-center text-3xl font-extrabold text-white">
              Zobacz co mówią o nas kursanci:
            </p>
          </div>
          <div className="flex flex-wrap justify-center bg-[#323232]">
            {photos.map((photo, index) => (
              <div key={index} className="min-h-40 m-5 h-auto w-3/4 lg:w-2/5">
                <Image
                  width={500}
                  height={150}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-[#323232] py-10 ">
            <a
              href="https://www.superprawojazdy.pl/szkola-jazdy-strazak,21769.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="block  w-auto max-w-[500px] rounded-lg bg-red-700 px-6 py-3 text-center text-lg font-semibold text-white hover:bg-indigo-500"
            >
              Zobacz więcej zaufanych opinii na stronie superprawojazdy.pl
              &gt;&gt;
            </a>
          </div>
        </div>
      </section>
      <Registration />
    </>
  );
}
