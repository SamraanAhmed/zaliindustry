import Link from 'next/link';

const CATEGORIES = [
  { name: 'T-Shirts', image: '/Demo Img/Black.png', href: '/products?category=t-shirts' },
  { name: 'Shorts', image: '/Demo Img/Gray.jpg', href: '/products?category=shorts' },
  { name: 'Sportswear', image: '/Demo Img/Red.jpg', href: '/products?category=sportswear' },
  { name: 'Accessories', image: '/Demo Img/White.jpg', href: '/products?category=accessories' },
];

export default function CategorySection({ showTitle = true }) {
  return (
    <section className="category-section container">
      {showTitle && (
        <Link href="/categories" className="section-link">
          <h2 className="section-title hover-link">Shop by Category</h2>
        </Link>
      )}
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <Link key={cat.name} href={cat.href} className="category-card">
            <div className="category-img-wrapper">
              <img src={cat.image} alt={cat.name} />
            </div>
            <div className="category-overlay">
              <h3>{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
