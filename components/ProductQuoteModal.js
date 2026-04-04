import { useState } from 'react';
import { FaTimes, FaCheckCircle, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ProductQuoteModal({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    address: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call or notification
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="pq-modal-overlay">
      <div className="pq-modal-backdrop" onClick={onClose} />
      
      <div className="pq-modal-content">
        <button className="pq-modal-close" onClick={onClose}>
          <FaTimes size={18} />
        </button>

        {submitted ? (
          <div className="pq-success-view">
            <FaCheckCircle size={60} color="#000" />
            <h2>Order Request Confirmed</h2>
            <p>Our team will contact you shortly to finalize the manufacturing details for <strong>{product.name}</strong>.</p>
          </div>
        ) : (
          <div className="pq-form-container">
            <div className="pq-product-header">
              <div className="pq-product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="pq-product-info">
                <h3>{product.name}</h3>
                <span>{product.category} | SKU: #{product.id}</span>
              </div>
            </div>

            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1.5rem', opacity: 0.6 }}>Technical Direct Order</h4>

            <form onSubmit={handleSubmit} className="pq-main-form">
              <div className="pq-input-group">
                <label><FaUser size={12} /> Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="pq-input-group">
                <label><FaPhone size={12} /> Contact Number / WhatsApp</label>
                <input 
                  type="text" 
                  placeholder="+1 234 567 890" 
                  required 
                  value={formData.number}
                  onChange={(e) => setFormData({...formData, number: e.target.value})}
                />
              </div>

              <div className="pq-input-group">
                <label><FaMapMarkerAlt size={12} /> Shipping / Delivery Address</label>
                <textarea 
                  placeholder="Detailed address with city/postal code" 
                  required 
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div className="pq-input-group">
                <label>Production Notes (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Size, quantities per size, color, etc." 
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>

              <button type="submit" className="pq-submit-btn">
                Confirm Order Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
