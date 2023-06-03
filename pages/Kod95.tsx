import Head from "next/head";
import RegistrationForm from "@/components/Registration";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Szkoła jazdy Strażak - kwalifikacje kod 95 przewóz rzeczy, prawo jazdy
          na autobusy
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <h1 className="text-2xl">W trakcie realizacji...</h1>
      <RegistrationForm />
    </>
  );
}
