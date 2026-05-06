import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../components/ProductData';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Get unique categories and counts
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? products.length : products.filter(p => p.category === cat).length;
    return acc;
  }, {});

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <Head>
        <title>Shop All Products | ZALI INDUSTRY</title>
        <meta name="description" content="Explore our complete range of high-performance sportswear, footwear, and accessories. Designed for athletes by athletes." />
      </Head>

      <Navbar />

      <main className="products-page">
        <div className="shop-header" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: '#6B6B68', marginBottom: '16px' }}>Catalog</p>
          <h1 className="shop-title" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 5vw, 72px)', color: '#0A0A0A', marginBottom: '16px', lineHeight: 1 }}>ALL PERFORMANCE GEAR</h1>
          <p className="shop-count" style={{ fontSize: '15px', color: '#6B6B68', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            Showing {filteredProducts.length} results. Custom-manufactured across nine categories. MOQ-friendly, export-ready.
          </p>
        </div>

        {/* Top Horizontal Filter Section */}
        <div className="products-filters">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="products-grid-full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;
