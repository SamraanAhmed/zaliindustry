import Link from 'next/link';
import { useState } from 'react';
import { useQuote } from '../context/QuoteContext';
import ProductQuoteModal from './ProductQuoteModal';

const ProductCard = ({ product }) => {
  const { addToQuote, quoteItems } = useQuote();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const isAdded = quoteItems.find(item => item.id === product.id);

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

  return (
    <>
      <div className="product-card">
        <Link href={`/product?id=${product.id}`}>
          <div className="product-img-wrapper">
            <img src={product.image} alt={product.name} className="product-img" />
            <p className="product-category">{product.category}</p>
          </div>
        </Link>
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-actions" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <button 
              className={`add-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAdd}
              style={{ padding: '0.8rem', fontSize: '0.85rem' }}
            >
              {isAdded ? 'Already in Cart' : 'Add to Cart'}
            </button>
            <button 
              className="request-quote-btn"
              onClick={handleOpenQuote}
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                background: '#ff3c00', 
                color: '#fff', 
                fontWeight: '900', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '0.85rem',
                textTransform: 'uppercase'
              }}
            >
              Request Quote
            </button>
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
