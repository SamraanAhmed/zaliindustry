import { useState } from 'react';
import { FaTimes, FaCloudUploadAlt, FaCheckCircle } from 'react-icons/fa';

export default function QuoteModal({ isOpen, onClose, items }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        onClose();
    }, 3000);
  };

  return (
    <div className="quote-modal-overlay">
      <div className="quote-modal-backdrop" onClick={onClose} />
      
      <div className="quote-modal-content">
        <button className="quote-modal-close" onClick={onClose}>
          <FaTimes size={18} />
        </button>

        {submitted ? (
          <div className="quote-success-view">
             <FaCheckCircle size={60} color="#000" style={{ marginBottom: '2rem' }} />
             <h2 style={{ fontWeight: '900', textTransform: 'uppercase' }}>Request Received</h2>
             <p>Our technical team is reviewing your gear requirements. We will contact you via Email/WhatsApp shortly.</p>
          </div>
        ) : (
          <div className="quote-form-layout">
            {/* Left: Summary */}
            <div className="quote-modal-summary">
                <h3 className="modal-section-title">Reviewing Gear ({items.length})</h3>
                <div className="modal-items-list">
                    {items.map(item => (
                        <div key={item.id} className="modal-item-mini">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h5>{item.name}</h5>
                                <span>ID: #{item.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Form */}
            <div className="quote-modal-form">
                <h3 className="modal-section-title">Technical Specifications</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Email / WhatsApp</label>
                            <input type="text" placeholder="+1 234 567 890" required />
                        </div>
                        <div className="form-group">
                            <label>Product Type</label>
                            <input type="text" defaultValue={items.map(i => i.name).join(', ')} placeholder="e.g. Hoodies, T-Shirts" required />
                        </div>
                        <div className="form-group">
                            <label>Rough Quantity</label>
                            <input type="number" placeholder="e.g. 50" required />
                        </div>
                        <div className="form-group full-width">
                            <label>Fabric Preference</label>
                            <input type="text" placeholder="e.g. 100% Cotton, Mesh, Lycra" required />
                        </div>
                        <div className="form-group full-width">
                            <label>Upload Design / Tech Pack</label>
                            <div className="file-upload-box">
                                <FaCloudUploadAlt size={24} />
                                <span>Drop file here or click to upload</span>
                                <input type="file" className="file-input-hidden" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="modal-submit-btn">
                        Generate Manufacturing Proposal
                    </button>
                </form>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .quote-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 2rem;
        }
        .quote-modal-backdrop {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(15px);
        }
        .quote-modal-content {
          background: #fff;
          width: 100%;
          max-width: 1000px;
          min-height: 500px;
          border-radius: 20px;
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.15);
          overflow: hidden;
          animation: modalSlideUp 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        @keyframes modalSlideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .quote-modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          z-index: 10;
        }
        .quote-form-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          height: 100%;
        }
        .quote-modal-summary {
          background: #fafafa;
          padding: 3rem;
          border-right: 1px solid #eee;
        }
        .quote-modal-form {
          padding: 3rem;
        }
        .modal-section-title {
          font-weight: 900;
          text-transform: uppercase;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          letter-spacing: 0.5px;
        }
        .modal-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .modal-item-mini {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .modal-item-mini img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 4px;
        }
        .modal-item-mini h5 {
          font-weight: 800;
          font-size: 0.85rem;
          margin-bottom: 0.2rem;
        }
        .modal-item-mini span {
          font-size: 0.75rem;
          color: #888;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-group label {
          display: block;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 0.7rem;
          margin-bottom: 0.6rem;
          color: #888;
        }
        .form-group input {
          width: 100%;
          padding: 1rem;
          border: 1px solid #eee;
          border-radius: 8px;
          background: #fdfdfd;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .form-group input:focus {
          border-color: #000;
        }
        .full-width {
          grid-column: span 2;
        }
        .file-upload-box {
          border: 2px dashed #eee;
          padding: 2.5rem;
          border-radius: 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: #aaa;
          cursor: pointer;
          position: relative;
        }
        .file-input-hidden {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .modal-submit-btn {
          margin-top: 2.5rem;
          width: 100%;
          background: #000;
          color: #fff;
          border: none;
          padding: 1.5rem;
          border-radius: 12px;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .modal-submit-btn:hover {
          transform: translateY(-2px);
        }
        .quote-success-view {
          padding: 5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        @media (max-width: 768px) {
          .quote-form-layout {
            grid-template-columns: 1fr;
          }
          .quote-modal-summary {
            display: none;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .full-width {
            grid-column: span 1;
          }
          .quote-modal-overlay {
            padding: 0;
          }
          .quote-modal-content {
            border-radius: 0;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
