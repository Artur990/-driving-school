import Food from "@/components/Food";
import Nav from "@/components/Nav";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Nav />
      {children}
      <Food />
    </>
  );
};

export default Layout;
