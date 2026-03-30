import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import TestimonialSection from '../components/TestimonialSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';
import { products } from '../components/ProductData';

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Just show the first 3

  return (
    <>
      <Head>
        <title>ZALI INDUSTRY | Peak Performance Sportswear</title>
        <meta name="description" content="Discover premium athletic apparel and footwear engineered for performance and style. Zali Industry sets the standard for contemporary sportswear." />
      </Head>

      <Navbar />
      
      <main>
        <HeroSection />

        <CategorySection />
        
        <section className="container">
          <h2 className="section-title">
            Featured Essentials
          </h2>
          <div className="product-grid" style={{ paddingLeft: '0', paddingRight: '0' }}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <ProcessSection />

        <TestimonialSection />
      </main>

      <Footer />
    </>
  );
}
