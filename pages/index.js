import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import TestimonialSection from '../components/TestimonialSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';
import { products } from '../components/ProductData';

const SECTION_THEMES = [
  { id: 'home-category',     bg: '#ffffff' },
  { id: 'home-featured',     bg: '#f4f4f4' },
  { id: 'home-process',      bg: '#111111' },
  { id: 'home-testimonials', bg: '#fafafa' },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const [pageBg, setPageBg] = useState('#ffffff');

  useEffect(() => {
    const observers = [];
    SECTION_THEMES.forEach(({ id, bg }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setPageBg(bg); },
        { threshold: 0.25, rootMargin: '-10% 0px -10% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <Head>
        <title>ZALI INDUSTRY | Peak Performance Sportswear</title>
        <meta name="description" content="Discover premium athletic apparel and footwear engineered for performance and style. Zali Industry sets the standard for contemporary sportswear." />
      </Head>

      <Navbar />

      {/* Hero is excluded from the scroll color wrapper */}
      <HeroSection />

      <main
        className="home-scroll-main"
        style={{ backgroundColor: pageBg }}
      >
        {/* Category */}
        <div id="home-category">
          <CategorySection />
        </div>

        {/* Featured Products */}
        <div id="home-featured" className="home-featured-section container">
          <h2 className="section-title">Featured Essentials</h2>
          <div className="product-grid" style={{ paddingLeft: '0', paddingRight: '0' }}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Process — dark section */}
        <div id="home-process" className="home-process-wrapper">
          <ProcessSection />
        </div>

        {/* Testimonials */}
        <div id="home-testimonials">
          <TestimonialSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
