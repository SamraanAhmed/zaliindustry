import Link from 'next/link';

const ProductCard = ({ product }) => {
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
          <button className="add-btn">Add to Quote List</button>
          {/* <Link href={`/product?id=${product.id}`} className="view-btn">
            View Details
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
