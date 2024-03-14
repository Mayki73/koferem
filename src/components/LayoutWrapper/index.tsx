import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { NextSeo } from "next-seo";

interface IProps {
  title: string;
  description: string;
  url: string;
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<IProps> = ({
  children,
  title,
  description,
  url,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        twitter={{
          handle: "koferem",
          site: "Koferem",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          locale: "ru_BY",
          url: url,
          siteName: "Koferem",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/icon.png",
          },
        ]}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
