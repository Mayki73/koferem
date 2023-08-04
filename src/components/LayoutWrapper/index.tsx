import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
