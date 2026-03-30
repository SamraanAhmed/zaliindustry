import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';

export default function CategoriesPage() {
  return (
    <>
      <Head>
        <title>Shop by Category | ZALI INDUSTRY</title>
        <meta name="description" content="Browse our technical athletic apparel collections by category." />
      </Head>

      <Navbar />

      <main className="container" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="fabrics-title">Product Categories</h1>
            <p className="fabrics-subtitle">Explore our specialized gear engineered for every discipline.</p>
        </div>
        
        {/* Re-use the grid from CategorySection */}
        <CategorySection showTitle={false} />
      </main>

      <Footer />
    </>
  );
}
