import Link from 'next/link';
import { useQuote } from '../context/QuoteContext';

const ProductCard = ({ product }) => {
  const { addToQuote, quoteItems } = useQuote();
  const isAdded = quoteItems.find(item => item.id === product.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToQuote(product);
  };

  return (
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
            {isAdded ? 'In Quote List' : 'Add to Quote List'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
