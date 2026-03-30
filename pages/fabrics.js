import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FABRICS = [
  { name: 'Chiffon Fabric', image: '/Fabrics/Chiffon Fabric.jpg', description: 'Lightweight and shear, perfect for delicate performance pieces.' },
  { name: 'Linen Fabric', image: '/Fabrics/Linen fabric.jpg', description: 'Highly breathable and moisture-wicking natural fiber.' },
  { name: 'Silk Fabric', image: '/Fabrics/Silk fabric.jpg', description: 'Luxury meets performance with unmatched smoothness.' },
  { name: 'Valvet Fabric', image: '/Fabrics/Valvet Fabric.jpg', description: 'Premium plush texture for elite lifestyle wear.' },
  { name: 'Wool Fabric', image: '/Fabrics/Wool fabric.jpg', description: 'Natural temperature regulation for all-weather comfort.' },
];

export default function FabricsPage() {
  return (
    <>
      <Head>
        <title>Our Fabrics | ZALI INDUSTRY</title>
        <meta name="description" content="Explore the premium fabrics used in our technical athletic apparel collections." />
      </Head>

      <Navbar />

      <main className="container fabrics-page">
        <div className="fabrics-header">
          <h1 className="fabrics-title">Technical Fabrics</h1>
          <p className="fabrics-subtitle">
            The foundation of every victory. We source only the highest-quality materials engineered for durability, breathability, and motion.
          </p>
        </div>

        <div className="fabrics-grid">
          {FABRICS.map((fabric) => (
            <div key={fabric.name} className="fabric-card">
              <div className="fabric-img-wrapper">
                <img src={fabric.image} alt={fabric.name} />
              </div>
              <div className="fabric-info">
                <h3>{fabric.name}</h3>
                <p>{fabric.description}</p>
                <div className="fabric-status">Available for Custom Orders</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
