import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

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

      <main style={{ minHeight: '100vh', background: '#F6F6F4' }}>
        <section className="page-hero">
          <div className="container">
            <p className="page-hero-eyebrow">Materials & Engineering</p>
            <h1>Technical Fabrics</h1>
            <p>
              The foundation of every victory. We source only the highest-quality materials engineered for durability, breathability, and motion.
            </p>
          </div>
        </section>

        <section className="section-new fabric-section">
          <div className="container-new">
            <div className="products-header" style={{ marginBottom: '44px' }}>
              <div>
                <p className="section-label reveal visible">Fabric Library</p>
                <h2 className="section-title reveal visible delay-1">Explore Our Core Materials</h2>
                <p className="section-sub reveal visible delay-2" style={{ maxWidth: '600px' }}>
                  Every fabric tested for print compatibility, stretch recovery, and durability. 
                  Select the right material for your performance needs.
                </p>
              </div>
            </div>

            <div className="fabric-grid reveal visible delay-3">
              {FABRICS.map((fabric) => (
                <div key={fabric.name} className="fabric-card">
                  <div className="fabric-card-img">
                    <img src={fabric.image} alt={fabric.name} />
                  </div>
                  <div className="fabric-body">
                    <div className="fabric-name">{fabric.name}</div>
                    <div className="fabric-desc">{fabric.description}</div>
                    <div style={{ marginTop: '16px' }}>
                       <span style={{ 
                         fontFamily: "'Barlow Condensed', sans-serif", 
                         fontSize: '10px', 
                         fontWeight: 700, 
                         letterSpacing: '.12em', 
                         textTransform: 'uppercase', 
                         background: '#E5E5E2', 
                         color: '#0A0A0A', 
                         padding: '4px 8px' 
                       }}>
                         Available for Custom Orders
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="fabric-explore reveal visible delay-4" style={{ marginTop: '64px' }}>
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6B6B68', marginBottom: '8px' }}>Fabric Sourcing</p>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: '#0A0A0A', lineHeight: 1, marginBottom: '8px' }}>Not Sure Which Fabric Is Right?</h3>
                <p style={{ fontSize: '13px', color: '#6B6B68', lineHeight: 1.7, maxWidth: '560px' }}>We carry additional options — different GSM weights, eco-certified materials, and specialty blends. Get in touch and we'll match the right fabric to your product and print method.</p>
              </div>
              <div className="fabric-explore-btns">
                <Link href="/contact" className="btn-primary-new" style={{ textAlign: 'center' }}>Request Fabric Samples</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
