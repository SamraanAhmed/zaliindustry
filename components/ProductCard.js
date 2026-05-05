import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useQuote } from '../context/QuoteContext';
import { FaShoppingBag } from 'react-icons/fa';
import ProductQuoteModal from './ProductQuoteModal';

const ProductCard = ({ product, index = 0 }) => {
  const { addToQuote, quoteItems } = useQuote();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const isAdded = quoteItems.find(item => item.id === product.id);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    observer.observe(cardRef.current);
    
    return () => observer.disconnect();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToQuote(product);
  };

  const handleOpenQuote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuoteModalOpen(true);
  };

  const delayClass = index > 0 ? `delay-${index}` : '';

  return (
    <>
      <div ref={cardRef} className={`product-card reveal ${delayClass}`} onClick={() => window.location.href = `/product?id=${product.id}`}>
        <div className="product-card-img">
          <img src={product.image} alt={product.name} />
          <span className="product-tag">{product.category}</span>
        </div>
        <div className="product-body">
          <div className="product-name">{product.name}</div>
          <div className="product-meta">
            <span className="product-moq">MOQ: {product.moq || '50'} pcs</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                className={`product-btn ${isAdded ? 'added' : ''}`}
                onClick={handleAdd}
                style={{ padding: '10px', background: isAdded ? '#444' : '#0A0A0A' }}
                title={isAdded ? 'Added to Cart' : 'Add to Cart'}
              >
                <FaShoppingBag />
              </button>
              <button 
                className="product-btn"
                onClick={handleOpenQuote}
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        product={product} 
      />
    </>
  );
};

export default ProductCard;
