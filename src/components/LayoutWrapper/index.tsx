import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<IProps> = ({ children, title, description }) => {
  return (
    <>
      <Header />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta name="og:image" content="/icon.png" />
        <meta name="twitter:image" content="/icon.png" />
      </Helmet>
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
