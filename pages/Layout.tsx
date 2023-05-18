import Contsct from "@/components/Contsct";
import Food from "@/components/Food";
import Form from "@/components/Form";
import Nav from "@/components/Nav";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Contsct />
      <Food />
    </div>
  );
};

export default Layout;
