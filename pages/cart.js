import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useQuote } from '../context/QuoteContext';
import { FaTrashAlt, FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import QuoteModal from '../components/QuoteModal';

const CartPage = () => {
    const { quoteItems, removeFromQuote } = useQuote();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <Head>
          <title>Quote Request List | ZALI INDUSTRY</title>
          <meta name="description" content="Review your selected technical gear and request a professional quote." />
        </Head>
  
        <Navbar />
  
        <main className="container pt-32 pb-24 min-h-screen">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '3rem', letterSpacing: '-1.5px' }}>
              Your Quote List <span style={{ color: '#aaa', marginLeft: '1rem' }}>({quoteItems.length})</span>
            </h1>
            
            <div className="cart-grid-system" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
              
              {/* Items List */}
              <div className="cart-items-section">
                {quoteItems.length === 0 ? (
                  <div className="empty-state" style={{ padding: '4rem 0', textAlign: 'center', border: '1.5px dashed #eee', borderRadius: '16px' }}>
                    <FaShoppingBag size={40} color="#ccc" style={{ marginBottom: '1.5rem' }} />
                    <h3 style={{ fontWeight: '800', marginBottom: '1rem' }}>YOUR LIST IS EMPTY</h3>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>You haven't added any technical gear to your quote request yet.</p>
                    <Link href="/products" className="add-btn" style={{ textDecoration: 'none', display: 'inline-block', padding: '1rem 2rem' }}>
                        Browse Collection
                    </Link>
                  </div>
                ) : (
                  <div className="items-stack" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {quoteItems.map((item) => (
                      <div key={item.id} className="cart-item-row" style={{ display: 'flex', gap: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #f0f0f0', alignItems: 'center' }}>
                        <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontWeight: '800', textTransform: 'uppercase', fontSize: '1rem', marginBottom: '0.3rem' }}>{item.name}</h4>
                          <p style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', fontWeight: '600' }}>#{item.id} | {item.category}</p>
                        </div>
                        <button 
                          onClick={() => removeFromQuote(item.id)}
                          style={{ background: 'none', border: 'none', color: '#ff3c00', cursor: 'pointer', padding: '1rem' }}
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary View */}
              <div className="cart-summary-card">
                <div style={{ background: '#000', color: '#fff', padding: '3rem', borderRadius: '24px', position: 'sticky', top: '100px' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Quote Request</h2>
                  <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    This list will be sent to our manufacturing team. We'll provide a custom proposal including bulk pricing, material alternatives, and lead dates.
                  </p>
                  
                  <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', marginBottom: '2.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ color: '#888' }}>Selected Items</span>
                      <span style={{ fontWeight: '800' }}>{quoteItems.length}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#888' }}>Estimated Lead Time</span>
                      <span style={{ fontWeight: '800' }}>14-21 Days</span>
                    </div>
                  </div>

                  <button 
                    className="add-btn" 
                    style={{ width: '100%', padding: '1.2rem', borderRadius: '8px', background: '#fff', color: '#000', fontWeight: '900', border: 'none', cursor: quoteItems.length > 0 ? 'pointer' : 'not-allowed' }}
                    disabled={quoteItems.length === 0}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Submit For Review
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
  
        <QuoteModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          items={quoteItems} 
        />

        <Footer />
        
        <style jsx>{`
          @media (max-width: 992px) {
            .cart-grid-system {
              grid-template-columns: 1fr !important;
            }
            .cart-summary-card {
              order: -1;
            }
          }
        `}</style>
      </>
    );
};

export default CartPage;
