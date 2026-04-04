import Head from 'next/head';
import '../styles/global.css';
import '../styles/navbar.css';
import '../styles/product.css';
import '../styles/footer.css';
import '../styles/fabrics.css';
import '../styles/about.css';
import '../styles/how-it-works.css';
import '../styles/contact.css';
import '../styles/HeroProductSlider.css';
import '../styles/prodCardBorder.css';
import '../styles/ProductQuoteModal.css';
import { QuoteProvider } from '../context/QuoteContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <QuoteProvider>
        <Component {...pageProps} />
      </QuoteProvider>
    </>
  );
}
