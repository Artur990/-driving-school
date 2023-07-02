import React from 'react';
import Registration from '@/components/Registration';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - zapisz się </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Registration />
    </>
  );
}
