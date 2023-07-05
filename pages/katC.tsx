import Head from 'next/head';

import { Registration } from '@/components/Registration';

export default function Index() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - KatC prawojazdy na ciężarówki </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="container mx-auto max-w-7xl ">
        <h1 className="my-3 text-2xl">W trakcie realizacji...</h1>
        <p className="my-2 text-lg text-red-600">
          Kursy na Kat. C, C+E odbywają się regularnie. Skontaktuj się z nami,
          aby uzyskać więcej informacji. Wszystko zostanie dokładnie wyjaśnione.
        </p>
        <Registration />
      </div>
    </>
  );
}
