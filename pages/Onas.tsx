import Head from "next/head";
import { FC } from "react";
import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";

interface InstructorProps {
  name: string;
  image: string;
}

const Instructor: FC<InstructorProps> = ({ name, image }) => {
  return (
    <div className="flex lg:flex-col w-full lg:w-1/3 h-3/4  m-6 ">
      <div className="w-full h-1/4 sm:w-full sm:h-1/4 mr-4">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="rounded-lg w-full h-full"
        />
      </div>
      <div className="w-full h-24 sm:w-1/2 sm:h-32 mr-4">
        <h3 className="text-2xl m-2 font-semibold">{name}</h3>
      </div>
    </div>
  );
};

const Onas: FC = () => {
  const instructors = [
    { name: "Marcin", image: "/onas/marcin.jpg" },
    { name: "Bartek", image: "/onas/bartek.jpg" },
    { name: "Szczepan", image: "/onas/szczepan.jpg" },
  ];
  const photos = [
    "/onas/opinions/opinion1.png",
    "/onas/opinions/opinion2.png",
    "/onas/opinions/opinion3.png",
    "/onas/opinions/opinion4.png",
    "/onas/opinions/opinion5.png",
    "/onas/opinions/opinion6.png",
  ];

  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - o nas szkoła w Bydgoszczy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <section className="bg-gray-100 py-10">
        <div className=" mx-auto px-1">
          <h1 className="text-2xl font-bold mb-8 text-center">
            Szkoła Jazdy Strażak w Bydgoszczy
          </h1>
          <p className="text-lg mb-8 text-gray-800 px-10">
            Szkoła Jazdy Strażak została stworzona z ideą pomagania ludziom, aby
            mogli łatwo zdobyć wymarzone prawo jazdy i cieszyć się
            niezależnością oraz przyjemnością samodzielnej jazdy. Uczymy przede
            wszystkim jeździć, a nie tylko zdać egzamin. Możesz być pewny, że po
            odbyciu praktyki z naszymi instruktorami, do egzaminu przystąpisz z
            naturalnym spokojem i bez stresu, zdając go za pierwszym razem!
          </p>

          <div className="flex justify-center items-center mb-8">
            <Image src="/onas/team.jpg" alt="" width={900} height={900} />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Instruktorzy:</h2>
          <div className="lg:flex xl:p-10 bg-[#fffff]">
            {instructors.map((instructor, index) => (
              <Instructor
                key={index}
                name={instructor.name}
                image={instructor.image}
              />
            ))}
          </div>
          <div className="bg-zinc-800 w-full h-36 flex items-center justify-center">
            <p className="text-3xl font-extrabold text-white mb-8 text-center">
              Zobacz co mówią o nas kursanci:
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {photos.map((photo, index) => (
              <div key={index} className="w-3/4 lg:w-2/5 min-h-40 h-auto m-5">
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            <a
              href="https://www.superprawojazdy.pl/opinie-o-szkole/szkola-jazdy-strazak-bydgoszcz/"
              target="_blank"
              rel="noopener noreferrer"
              className="block  bg-red-700 max-w-[500px] w-auto text-white text-center rounded-lg py-3 px-6 font-semibold text-lg hover:bg-gray-800"
            >
              Zobacz więcej zaufanych opinii na stronie superprawojazdy.pl
              &gt;&gt;
            </a>
          </div>
        </div>
      </section>

      <RegistrationForm />
    </>
  );
};

export default Onas;
