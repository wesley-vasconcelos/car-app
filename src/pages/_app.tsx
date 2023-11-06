import type { AppProps } from 'next/app';
import { CarrosProvider } from '../context/CarrosContext'; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarrosProvider>
      <Component {...pageProps} />
    </CarrosProvider>
  );
}
