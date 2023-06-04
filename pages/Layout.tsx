import Food from '@/components/Food';
import Nav from '@/components/Nav';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
// import '../styles/globals.css';
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
        <meta
          name="description"
          content="Szkoła jazdy Strażak - Najlepsza szkoła jazdy w Bydgoszczy i okolicach
          w ofercie prawo jazdy kat. B, A, C, D, T, kwalifikacje(kod95)"
        />
        <meta
          property="og:image"
          content="https://www.strazak.edu.pl/_next/image?url=%2Flogo.jpg&w=3840&q=75"
        />
        <meta
          name="og:title"
          content="Szkoła jazdy Strażak - Najlepsza szkoła jazdy w Bydgoszczy i okolicach
          w ofercie prawo jazdy kat. B, A, C, D, T, kwalifikacje(kod95)"
        />
      </Head>
      <Nav />
      {children}
      <Food />
    </>
  );
};

export default Layout;
