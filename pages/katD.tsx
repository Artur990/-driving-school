import Head from "next/head";
import { FC } from "react";
import RegistrationForm from "@/components/RegistrationForm";
interface indexProps {}

export default function Index() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - KatD prawojazdy na autobusy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <h1 className="text-2xl">W trakcie realizacji...</h1>
      <RegistrationForm />
    </>
  );
}

// export default index;
