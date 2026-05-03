import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useQuote } from '../context/QuoteContext';
import { 
  FaTrashAlt, 
  FaShoppingBag, 
  FaClipboardList, 
  FaArrowRight, 
  FaClock, 
  FaCheckCircle, 
  FaHashtag 
} from 'react-icons/fa';
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
  
        <main className="cart-page-wrapper container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <div className="cart-header">
              <h1>
                Your Quote List
                {quoteItems.length > 0 && (
                  <span className="cart-count-badge">{quoteItems.length}</span>
                )}
              </h1>
            </div>
            
            <div className="cart-grid">
              
              {/* Items List */}
              <div className="cart-items-section">
                {quoteItems.length === 0 ? (
                  <div className="cart-empty-state">
                    <FaShoppingBag className="cart-empty-icon" />
                    <h3>Your List is Empty</h3>
                    <p>You haven't added any technical gear to your quote request yet. Explore our precision-engineered catalog to get started.</p>
                    <Link href="/products" className="btn-browse">
                      Browse Collection
                    </Link>
                  </div>
                ) : (
                  <div className="cart-item-list animate-fade-up">
                    {quoteItems.map((item) => (
                      <div key={item.id} className="cart-item-card">
                        <div className="cart-item-img">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-details">
                          <span className="cart-item-category">{item.category}</span>
                          <h4 className="cart-item-name">{item.name}</h4>
                          <span className="cart-item-id">
                            <FaHashtag size={12} /> {item.id}
                          </span>
                        </div>
                        <button 
                          onClick={() => removeFromQuote(item.id)}
                          className="cart-item-remove"
                          aria-label={`Remove ${item.name}`}
                          title="Remove Item"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary View */}
              <div className="cart-summary animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="summary-title">
                  <FaClipboardList /> Quote Request
                </h2>
                <p className="summary-desc">
                  This list will be sent directly to our manufacturing engineers. We will provide a custom proposal including bulk pricing, material alternatives, and precise production timelines.
                </p>
                
                <div className="summary-details">
                  <div className="summary-row">
                    <span className="summary-label"><FaCheckCircle /> Selected Items</span>
                    <span className="summary-value">{quoteItems.length}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label"><FaClock /> Est. Lead Time</span>
                    <span className="summary-value">14-21 Days</span>
                  </div>
                </div>

                <button 
                  className="btn-submit-quote"
                  disabled={quoteItems.length === 0}
                  onClick={() => setIsModalOpen(true)}
                >
                  Submit For Review <FaArrowRight size={14} />
                </button>
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
      </>
    );
};

export default CartPage;
