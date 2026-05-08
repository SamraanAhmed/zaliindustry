import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CATEGORIES = [
  { 
    name: 'T-Shirts', 
    sub: 'Performance jerseys, polos, and training tees',
    image: '/Demo Img/Black.png', 
    href: '/products?category=t-shirts' 
  },
  { 
    name: 'Shorts', 
    sub: 'Athletic shorts built for movement and comfort',
    image: '/Demo Img/Gray.jpg', 
    href: '/products?category=shorts' 
  },
  { 
    name: 'Sportswear', 
    sub: 'Compression tights, tracksuits, and athletic layers',
    image: '/Demo Img/Red.jpg', 
    href: '/products?category=sportswear' 
  },
  { 
    name: 'Accessories', 
    sub: 'Gloves, bags, caps, and essential equipment',
    image: '/Demo Img/White.jpg', 
    href: '/products?category=accessories' 
  },
];

export default function CategoriesPage() {
  return (
    <>
      <Head>
        <title>Shop by Category | ZALI INDUSTRY</title>
        <meta name="description" content="Browse our technical athletic apparel collections by category — engineered for peak performance." />
      </Head>

      <Navbar />

      <main className="hiw-page">
        {/* HERO */}
        <section className="page-hero">
          <div className="container">
            <p className="page-hero-eyebrow">BROWSE RANGE</p>
            <h1>Shop by<br />Category</h1>
            <p>
              Explore our specialized gear engineered for every discipline — from high-performance training apparel to essential accessories.
            </p>
          </div>
        </section>

        {/* CATEGORY GRID */}
        <section className="section">
          <div className="container">
            <p className="section-label">All Categories</p>
            <h2 className="section-title">Find Your Gear</h2>
            <div className="category-grid" style={{ marginTop: '36px' }}>
              {CATEGORIES.map((cat) => (
                <Link key={cat.name} href={cat.href} className="cat-card">
                  <img src={cat.image} alt={cat.name} />
                  <div className="cat-card-overlay"></div>
                  <div className="cat-card-content">
                    <div className="cat-name">{cat.name}</div>
                    <div className="cat-sub">{cat.sub}</div>
                    <span className="cat-arrow">Shop Now →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
