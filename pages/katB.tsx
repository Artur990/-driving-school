import KatA from '@/components/KatB';
import Registration from '@/components/Registration';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - KatB prawo jazdy na samochód</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <KatA />
      <Registration />
    </>
  );
}
