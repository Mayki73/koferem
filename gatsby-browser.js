import "./src/styles/global.css";
import React from "react";
import Providers from "./src/components/Providers";

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};
