import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals'; 
import { CarrosProvider } from '../context/CarrosContext'; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarrosProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CarrosProvider>
  );
}
