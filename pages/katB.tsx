import KatA from "@/components/KatB";
import Head from "next/head";
import { FC } from "react";
import RegistrationForm from "@/components/RegistrationForm";
interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - KatB prawo jazdy na samochód</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <KatA />
      <RegistrationForm />
    </>
  );
};

export default index;
