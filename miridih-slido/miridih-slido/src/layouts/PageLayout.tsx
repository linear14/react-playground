import { PropsWithChildren } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

interface Props extends PropsWithChildren {}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
