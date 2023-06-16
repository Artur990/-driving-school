import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Carousel as CaruselCardd } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CaruselCard from './ui/CaruselCard';

const Carousel = ({}) => {
  const images1 = [
    ['/kursanci/kursant1.jpg', '/kursanci/kursant2.jpg'],
    ['/kursanci/kursant3.jpg', '/kursanci/kursant4.jpg'],
    ['/kursanci/kursant5.jpg', '/kursanci/kursant6.jpg'],
    ['/kursanci/kursant7.jpg', '/kursanci/kursant8.jpg'],
    ['/kursanci/kursant9.jpg', '/kursanci/kursant10.jpg'],
  ];
  const images2 = [
    [
      '/kursanci/kursant1.jpg',
      '/kursanci/kursant2.jpg',
      '/kursanci/kursant3.jpg',
      '/kursanci/kursant4.jpg',
      // '/kursanci/kursant5.jpg',
      // '/kursanci/kursant10.jpg',
    ],
    [
      '/kursanci/kursant6.jpg',
      '/kursanci/kursant7.jpg',
      '/kursanci/kursant8.jpg',
      '/kursanci/kursant9.jpg',
    ],
    [
      '/kursanci/kursant10.jpg',
      '/kursanci/kursant6.jpg',
      '/kursanci/kursant7.jpg',
      '/kursanci/kursant8.jpg',
    ],
  ];

  return (
    <section className="mx-auto my-16 w-full max-w-[1250px] lg:w-3/4">
      <div className="block sm:hidden">
        <CaruselCard images={images1} />
      </div>
      <div className="hidden sm:block">
        <CaruselCard images={images2} />
      </div>
      <Link
        href="onas"
        className="mx-auto mt-10 block w-[90%] rounded-lg bg-red-700 px-3 py-2.5 text-center text-2xl font-bold leading-7  text-white hover:opacity-80  lg:w-1/3"
      >
        Zobacz więcej opinii {'>>'}
      </Link>
    </section>
  );
};

export default Carousel;
