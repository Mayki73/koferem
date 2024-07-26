import queryClient from "@/constants/query-client";
import { GoogleTagManager } from "@next/third-parties/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <GoogleTagManager gtmId="GTM-NB3DKQBK" />
      <GoogleTagManager gtmId="GTM-PS3F7MK" />
    </>
  );
}
