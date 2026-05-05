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
import '../styles/whatsapp.css';
import '../styles/cart.css';
import '../styles/home-new.css';
import { QuoteProvider } from '../context/QuoteContext';
import WhatsAppButton from '../components/WhatsAppButton';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600&family=Barlow+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <QuoteProvider>
        <Component {...pageProps} />
        <WhatsAppButton />
      </QuoteProvider>
    </>
  );
}
