import React, { createContext, useContext, useState, useEffect } from 'react';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [quoteItems, setQuoteItems] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '' });

  // Load from localStorage on mount
  useEffect(() => {
    const savedQuote = localStorage.getItem('zali_quote_list');
    if (savedQuote) {
      try {
        setQuoteItems(JSON.parse(savedQuote));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to localStorage whenever quoteItems change
  useEffect(() => {
    if (quoteItems.length > 0) {
        localStorage.setItem('zali_quote_list', JSON.stringify(quoteItems));
    }
  }, [quoteItems]);

  const showToast = (message) => {
    setToast({ show: true, message: message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  const addToQuote = (product) => {
    setQuoteItems((prev) => {
      if (prev.find(item => item.id === product.id)) {
        showToast(`"${product.name}" is already in your cart.`);
        return prev;
      }
      showToast(`Added "${product.name}" to your cart!`);
      return [...prev, product];
    });
  };

  const removeFromQuote = (productId) => {
    setQuoteItems((prev) => prev.filter(item => item.id !== productId));
  };

  const clearQuote = () => {
    setQuoteItems([]);
    localStorage.removeItem('zali_quote_list');
  };

  return (
    <QuoteContext.Provider value={{ quoteItems, addToQuote, removeFromQuote, clearQuote }}>
      {children}
      
      {/* Proprietary Toast Component */}
      <div className={`proprietary-toast ${toast.show ? 'show' : ''}`}>
          {toast.message}
      </div>

      <style jsx>{`
        .proprietary-toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #000;
          color: #fff;
          padding: 1.2rem 2.5rem;
          border-radius: 8px;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          z-index: 99999;
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .proprietary-toast.show {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}
