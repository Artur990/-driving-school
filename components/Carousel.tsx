import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Carousel as CaruselCardd } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CaruselCard from "./ui/CaruselCard";

const Carousel = ({}) => {
  const images1 = [
    ["/kursanci/kursant1.jpg", "/kursanci/kursant2.jpg"],
    ["/kursanci/kursant3.jpg", "/kursanci/kursant4.jpg"],
    ["/kursanci/kursant5.jpg", "/kursanci/kursant6.jpg"],
    ["/kursanci/kursant7.jpg", "/kursanci/kursant8.jpg"],
    ["/kursanci/kursant9.jpg", "/kursanci/kursant10.jpg"],
  ];
  const images2 = [
    [
      "/kursanci/kursant1.jpg",
      "/kursanci/kursant2.jpg",
      "/kursanci/kursant3.jpg",
      "/kursanci/kursant4.jpg",
      "/kursanci/kursant5.jpg",
    ],
    [
      "/kursanci/kursant6.jpg",
      "/kursanci/kursant7.jpg",
      "/kursanci/kursant8.jpg",
      "/kursanci/kursant9.jpg",
    ],
    [
      "/kursanci/kursant10.jpg",
      "/kursanci/kursant6.jpg",
      "/kursanci/kursant7.jpg",
      "/kursanci/kursant8.jpg",
    ],
  ];

  return (
    <section className="w-full lg:w-3/4 max-w-[1250px] my-16 mx-auto">
      <div className="block sm:hidden">
        <CaruselCard images={images1} />
      </div>
      <div className="hidden sm:block">
        <CaruselCard images={images2} />
      </div>
      <Link
        href="Onas"
        className="bg-red-700 w-[90%] lg:w-1/3 text-white text-center mx-auto block rounded-lg px-3 py-2.5 mt-10 font-bold  text-2xl leading-7  hover:bg-gray-50"
      >
        Zobacz więcej opinii {">>"}
      </Link>
    </section>
  );
};

export default Carousel;
