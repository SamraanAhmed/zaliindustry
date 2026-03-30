import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../components/ProductData';

const FABRICS = [
  { name: 'Chiffon', image: '/Fabrics/Chiffon Fabric.jpg' },
  { name: 'Linen', image: '/Fabrics/Linen fabric.jpg' },
  { name: 'Silk', image: '/Fabrics/Silk fabric.jpg' },
  { name: 'Velvet', image: '/Fabrics/Valvet Fabric.jpg' },
  { name: 'Wool', image: '/Fabrics/Wool fabric.jpg' },
];

const DEMO_IMAGES = [
  '/images/shoe1.jpg',
  '/Demo Img/Black.png',
  '/Demo Img/Gray.jpg',
  '/Demo Img/LightGray.png',
  '/Demo Img/Red.jpg',
];

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeImage, setActiveImage] = useState('');
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0].name);

  // Find product by id from query
  const product = products.find(p => p.id === parseInt(id));

  // Initialize active image when product is found
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h2>Product not found</h2>
        <button onClick={() => router.push('/products')}>Back to Shop</button>
      </div>
    );
  }

  // Get related products (same category first, then others if empty)
  let relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id);
  
  if (relatedProducts.length === 0) {
    // If no related products in the same category, show other products as "Featured Gear"
    relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);
  } else {
    relatedProducts = relatedProducts.slice(0, 4);
  }

  return (
    <>
      <Head>
        <title>{product.name} | ZALI INDUSTRY</title>
        <meta name="description" content={`Experience peak performance with the ${product.name}. ${product.description}`} />
      </Head>

      <Navbar />

      <main className="product-detail-container">
        <div className="product-detail-layout">
          {/* LEFT: Image System */}
          <div className="product-images-system">
             <div className="image-thumbnails">
                {[product.image, ...DEMO_IMAGES.slice(1,4)].map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`thumb-box ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`variation-${idx}`} />
                  </div>
                ))}
             </div>
             <div className="main-display-image">
                <img src={activeImage} alt={product.name} />
             </div>
          </div>
          
          {/* RIGHT: Info & Options */}
          <div className="product-detail-info">
            <div className="breadcrumb-category">{product.category}</div>
            <h1 className="product-page-title">{product.name}</h1>
            <p className="product-page-desc">{product.description}</p>
            
            {/* Fabric Selection */}
            <div className="options-section">
                <h4 className="options-label">Available fabrics</h4>
                <div className="fabric-select-grid">
                    {FABRICS.map(fabric => (
                        <div 
                            key={fabric.name} 
                            className={`fabric-option ${selectedFabric === fabric.name ? 'active' : ''}`}
                            onClick={() => setSelectedFabric(fabric.name)}
                        >
                            <img src={fabric.image} alt={fabric.name} />
                            <span>{fabric.name}</span>
                            <Link 
                              href="/fabrics" 
                              className="fabric-info-icon" 
                              onClick={(e) => e.stopPropagation()}
                              title="View Fabric Detail"
                            >
                                <FaInfoCircle />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="action-stack">
                <button className="add-btn-large">
                    Add to Quote List
                </button>
                <button className="secondary-btn-large">
                    Save to Wishlist
                </button>
            </div>
          </div>
        </div>

        {/* BOTTOM: Related Collection */}
        {relatedProducts.length > 0 && (
          <section className="related-section">
            <h2 className="section-title">Related Items</h2>
            <div className="product-grid" style={{ padding: '0' }}>
              {relatedProducts.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
