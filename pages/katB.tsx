import KatA from "@/components/KatB";
import Registration from "@/components/Registration";
import Head from "next/head";
import { FC } from "react";

const index: FC = ({}) => {
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
};

export default index;
