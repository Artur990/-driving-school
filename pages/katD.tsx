import Head from 'next/head';

import { Registration } from '@/components/Registration';

export default function Index() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - KatD prawo jazdy na autobusy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="container mx-auto max-w-7xl ">
        <h1 className="text-2xl">W trakcie realizacji...</h1>
        <p className="text-lg text-red-600">
          Kursy na Kat. D odbywają się regularnie. Skontaktuj się z nami, aby
          uzyskać więcej informacji. Wszystko zostanie dokładnie wyjaśnione.
        </p>
        <Registration />
      </div>
    </>
  );
}
