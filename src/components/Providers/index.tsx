import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../constants/query-client";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
