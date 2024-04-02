import { GoogleTagManager } from "@next/third-parties/google";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-NB3DKQBK" />
      <GoogleTagManager gtmId="GTM-PS3F7MK" />
    </>
  );
}
