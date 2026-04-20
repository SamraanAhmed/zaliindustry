import Link from 'next/link';
import { useState } from 'react';
import { useQuote } from '../context/QuoteContext';
import { FaShoppingBag } from 'react-icons/fa';
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
          <div className="product-actions" style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', width: '100%', marginTop: 'auto', paddingTop: '1rem' }}>
            <button 
              className={`add-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAdd}
              style={{ 
                flex: '0 0 auto',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                borderRadius: '8px',
                background: isAdded ? '#444' : '#000',
                color: '#fff',
                fontSize: '1.1rem'
              }}
              title={isAdded ? 'Added to Cart' : 'Add to Cart'}
            >
              <FaShoppingBag />
            </button>
            <button 
              className="request-quote-btn"
              onClick={handleOpenQuote}
              style={{ 
                flex: '1', 
                height: '45px',
                padding: '0 1rem', 
                borderRadius: '8px', 
                background: '#fff', 
                color: '#000', 
                fontWeight: '800', 
                border: '1px solid #000', 
                cursor: 'pointer',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
