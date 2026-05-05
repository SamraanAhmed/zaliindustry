import Link from 'next/link';
import { useEffect, useRef } from 'react';

const ProductCard = ({ product, index = 0 }) => {
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

  const delayClass = index > 0 ? `delay-${index}` : '';

  return (
    <div ref={cardRef} className={`product-card reveal ${delayClass}`} onClick={() => window.location.href = `/product?id=${product.id}`}>
      <div className="product-card-img">
        <img src={product.image} alt={product.name} />
        <span className="product-tag">{product.category}</span>
      </div>
      <div className="product-body">
        <div className="product-name">{product.name}</div>
        <div className="product-meta">
          <span className="product-moq">MOQ: {product.moq || '50'} pcs</span>
          <button className="product-btn">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
