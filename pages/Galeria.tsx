import { FC } from "react";
import SliderGallery from "../components/SliderGallery";
import Head from "next/head";
import RegistrationForm from "@/components/RegistrationForm";
import Image from "next/image";
interface OnasProps {}

const images = [
  "/o-nas/o-nas1.jpg",
  "/o-nas/o-nas2.jpg",
  "/o-nas/o-nas3.jpg",
  "/o-nas/o-nas4.jpg",
  "/o-nas/o-nas5.jpg",
  "/o-nas/o-nas6.jpg",
  "/o-nas/o-nas7.jpg",
  "/o-nas/o-nas8.jpg",
];

const Onas: FC<OnasProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - galeria zdjęć</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="mx-auto max-w-2xl mb-10 sm:text-center">
        <div className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            className="h-20 w-28"
            src="/logo.jpg"
            alt="logo"
          />
        </div>
        <h2 className="text-3xl text-center font-bold tracking-tight text-red-600 sm:text-4xl">
          Szkoła jazdy Strażak
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Dołącz do grona zadowolonych kierowców i zacznij swoją przygodę z
          prowadzeniem pojazdów w najlepszej szkole jazdy w Bydgoszczy.
          Oferujemy kompleksowe kursy na samochód, motor, ciężarówkę i autobus,
          które przygotują Cię do bezpiecznej i pewnej jazdy na każdym rodzaju
          drogi. Skorzystaj z naszej bogatej oferty i zapisz się już dzisiaj na
          kurs, który otworzy przed Tobą nowe możliwości i da Ci wolność
          poruszania się na własnych zasadach!
        </p>
      </div>
      <SliderGallery images={images} />
      <RegistrationForm />
    </>
  );
};

export default Onas;
