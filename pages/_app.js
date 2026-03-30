import Head from 'next/head';
import '../styles/global.css';
import '../styles/navbar.css';
import '../styles/product.css';
import '../styles/footer.css';
import '../styles/fabrics.css';
import '../styles/about.css';
import '../styles/HeroProductSlider.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="public\favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
