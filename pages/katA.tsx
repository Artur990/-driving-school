import KatA from "@/components/KatA";
import Head from "next/head";
import Registration from "@/components/Registration";

export default function Index() {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - KatA prawo jazdy na motocykl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <KatA />
      <Registration />
    </>
  );
}
