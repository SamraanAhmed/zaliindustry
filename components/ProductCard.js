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
          <div className="product-actions">
            <button 
              className={`add-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAdd}
            >
              {isAdded ? 'Already in Cart' : 'Add to Cart'}
            </button>
            <button 
              className="request-quote-btn"
              onClick={handleOpenQuote}
            >
              Request Quote
            </button>
          </div>
        </div>

        <style jsx>{`
          .product-actions {
            display: flex;
            gap: 0.5rem;
            width: 100%;
          }
          .add-btn, .request-quote-btn {
            flex: 1;
            padding: 0.8rem 0.5rem;
            font-size: 0.75rem;
            font-weight: 900;
            text-transform: uppercase;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            white-space: nowrap;
          }
          .add-btn {
            background: #000;
            color: #fff;
          }
          .add-btn.added {
            background: #eee;
            color: #888;
            cursor: default;
          }
          .request-quote-btn {
             background: #ff3c00;
             color: #fff;
          }
          
          @media (max-width: 480px) {
            .product-actions {
              flex-direction: column;
            }
            .add-btn, .request-quote-btn {
              padding: 1rem;
              font-size: 0.85rem;
            }
          }
        `}</style>
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
