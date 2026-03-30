import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CartPage = () => {
    return (
      <>
        <Head>
          <title>Quote Request | ZALI INDUSTRY</title>
          <meta name="description" content="Review your selected gear and request a professional quote from ZALI INDUSTRY." />
        </Head>
  
        <Navbar />
  
        <main className="cart-page">
          <h1 className="cart-title">Your Quote Request</h1>
          
          <div className="cart-container">
            <div className="cart-items">
                <p className="cart-empty">Your list is currently empty.</p>
                <div style={{ padding: '2rem 1.5rem', background: '#f5f5f5', borderRadius: '12px', marginTop: '3rem' }}>
                    <h3 style={{ marginBottom: '1rem', fontWeight: '800' }}>PROFESSIONAL QUOTES</h3>
                    <p style={{ fontSize: '0.9rem', color: '#444' }}>Submit your request and our team will get back to you with a detailed proposal tailored to your requirements.</p>
                </div>
            </div>
            
            <div className="cart-summary" style={{ background: '#fafafa', padding: '3rem', height: 'fit-content' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '800', textTransform: 'uppercase' }}>Review</h2>
                <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#666' }}>
                    Once you submit your list, we will provide pricing and availability for your selected items.
                </div>
                
                <button className="add-btn" style={{ width: '100%', padding: '1.5rem', borderRadius: '40px', fontWeight: '900', fontSize: '1.1rem' }}>
                    Submit Quote Request
                </button>
            </div>
          </div>
        </main>
  
        <Footer />
      </>
    );
};

export default CartPage;
