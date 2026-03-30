import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../components/ProductData';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

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

      <main className="container shop-page-container">
        {/* Left Sidebar Filter */}
        <aside className="shop-sidebar">
          <h3 className="filter-title">Category</h3>
          <ul className="filter-list">
            {categories.map(cat => (
              <li key={cat}>
                <button 
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Product Listing */}
        <div className="shop-main-content">
          <div className="shop-header">
            <h1 className="shop-title">ALL PERFORMANCE GEAR</h1>
            <p className="shop-count">
              Showing ({filteredProducts.length}) results for your next victory.
            </p>
          </div>

          <div className="product-grid shop-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;
