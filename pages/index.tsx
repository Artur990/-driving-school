import Head from 'next/head';

import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { FiveSteps } from '@/components/FiveSteps';
import { Distinguishes } from '@/components/Distinguishes';
import { Features } from '@/components/Features';
import { Carousel } from '@/components/Carousel';
import { Oferts } from '@/components/Oferts';
import { Registration } from '@/components/Registration';

export default function Home() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - Najelsza szkoła w Bydgoszczy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div>
        <Header />
        <Oferts />
        <Gallery />
        <Distinguishes />
        <FiveSteps />
        <Carousel />
        <Features />
        <Registration />
      </div>
    </>
  );
}
