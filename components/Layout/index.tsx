import React, { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "./styles";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
