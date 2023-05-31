import { FC, useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SliderProps {}

const Carousell: FC<SliderProps> = ({}) => {
  const images = [
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
      "/kursanci/kursant7.jpg",
      "/kursanci/kursant3.jpg",
      "/kursanci/kursant6.jpg",
    ],
  ];

  return (
    <section className="w-full lg:w-3/4 my-16 mx-auto">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={3000}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={60}
      >
        {images.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex justify-center items-center space-x-4"
          >
            {group.map((img, imgIndex) => (
              <div key={imgIndex} className="w-[400px]  h-32 lg:w-40 lg:h-40">
                <img
                  src={img}
                  alt={`happy client ${groupIndex * 4 + imgIndex + 1}`}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <a
        href="#"
        className="bg-red-700 w-full lg:w-1/3 text-white text-center mx-auto block rounded-lg px-3 py-2.5 mt-10 font-bold  text-2xl leading-7  hover:bg-gray-50"
      >
        Zobacz więcej opinii {">>"}
      </a>
    </section>
  );
};

export default Carousell;
