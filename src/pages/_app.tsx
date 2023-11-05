import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globals.ts";
import { CarrosProvider } from '../context/CarrosContext.tsx';

export default function App({ Component, pageProps }: AppProps) {

    return (
         <CarrosProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CarrosProvider>
    );
}
