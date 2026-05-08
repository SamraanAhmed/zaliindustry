import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaGlobe, FaPhone, FaSms, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  const [mode, setMode] = useState('chat'); // 'chat' or 'email'

  const CHAT_OPTIONS = [
    {
      title: "Direct Mobile",
      desc: "Speak directly to technical ops.",
      btnText: "Call Now",
      icon: <FaPhone size={20} color="#0A0A0A" />,
      href: "tel:+923001234567",
      color: "#0A0A0A"
    },
    {
      title: "WhatsApp",
      desc: "Instant tech support & RFQs.",
      btnText: "Start Chat",
      icon: <FaWhatsapp size={22} color="#25D366" />,
      href: "https://wa.me/923001234567",
      color: "#25D366"
    },
    {
      title: "Direct SMS",
      desc: "Send a quick text inquiry.",
      btnText: "Send Text",
      icon: <FaSms size={22} color="#007AFF" />,
      href: "sms:+923001234567",
      color: "#007AFF"
    },
    {
      title: "Instagram",
      desc: "DM for gear drops & updates.",
      btnText: "Message",
      icon: <FaInstagram size={22} color="#E1306C" />,
      href: "https://instagram.com/zaliindustry",
      color: "#E1306C"
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | ZALI INDUSTRY</title>
        <meta name="description" content="Connect with the Zali Industry technical manufacturing team for custom apparel and bulk order inquiries." />
      </Head>

      <Navbar />

      <main className="hiw-page">
        {/* HERO */}
        <section className="page-hero">
          <div className="container">
            <p className="page-hero-eyebrow">COMMUNICATION CHANNELS</p>
            <h1>Connect With<br />Technical Ops</h1>
            <p>
              Our manufacturing and engineering teams operate on a global scale. Choose your preferred communication channel for technical support, sample tracking, or bulk production inquiries.
            </p>
          </div>
        </section>

        {/* INTERACTION HUB */}
        <section className="section" style={{ paddingBottom: '0' }}>
          <div className="container">
            <p className="section-label">Interaction Hub</p>
            <h2 className="section-title">How can we help?</h2>
            
            <div className="contact-mode-tabs">
              <button 
                className={`mode-tab ${mode === 'chat' ? 'active' : ''}`}
                onClick={() => setMode('chat')}
              >
                Direct Chat
                <span>Instant response via mobile or social</span>
              </button>
              <button 
                className={`mode-tab ${mode === 'email' ? 'active' : ''}`}
                onClick={() => setMode('email')}
              >
                Email Inquiry
                <span>Formal technical & bulk inquiries</span>
              </button>
            </div>

            <div className="contact-mode-content">
              {mode === 'chat' ? (
                <div className="chat-options-grid">
                  {CHAT_OPTIONS.map((opt, i) => (
                    <a key={i} href={opt.href} target="_blank" rel="noopener noreferrer" className="chat-opt-card">
                      <div className="chat-opt-icon" style={{ background: `${opt.color}10` }}>
                        {opt.icon}
                      </div>
                      <div className="chat-opt-info">
                        <h3>{opt.title}</h3>
                        <p>{opt.desc}</p>
                        <span>{opt.btnText} →</span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="quick-email-form">
                  <div className="form-inner">
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" placeholder="e.g. Technical Question, Order Update" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea placeholder="How can our technical team assist you today?" rows={4}></textarea>
                    </div>
                    <button className="btn-primary-new" style={{ width: '100%', marginTop: '12px' }}>
                      Send Message <FaPaperPlane style={{ marginLeft: '10px', fontSize: '10px' }} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* MAIN INQUIRY FORM */}
        <section className="section">
          <div className="container">
             <div className="inquiry-form-section">
                <div className="inquiry-text">
                   <p className="section-label" style={{ justifyContent: 'flex-start' }}>Formal RFQ</p>
                   <h2 className="section-title" style={{ textAlign: 'left' }}>Bulk Production Inquiry</h2>
                   <p style={{ color: '#666', lineHeight: 1.8, maxWidth: '440px', marginTop: '16px' }}>
                      Ready to start your next collection? Fill out our technical inquiry form with your production details, and our manufacturing lead will get back to you within 24–48 hours.
                   </p>
                   
                   <div className="factory-mini-card">
                      <div className="f-icon"><FaMapMarkerAlt /></div>
                      <div>
                         <strong>Sialkot Manufacturing Hub</strong>
                         <p>Direct export operations globally.</p>
                      </div>
                   </div>
                </div>

                <div className="inquiry-form-card">
                   <form className="main-rfq-form">
                      <div className="form-row">
                         <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                         </div>
                         <div className="form-group">
                            <label>Company / Brand</label>
                            <input type="text" placeholder="Your Brand Name" />
                         </div>
                      </div>
                      <div className="form-group">
                         <label>Email Address</label>
                         <input type="email" placeholder="john@example.com" />
                      </div>
                      <div className="form-group">
                         <label>Product Category</label>
                         <select>
                            <option>Custom T-Shirts</option>
                            <option>Performance Shorts</option>
                            <option>Sublimation Sportswear</option>
                            <option>Hoodies & Outerwear</option>
                            <option>Other / Mixed Order</option>
                         </select>
                      </div>
                      <div className="form-group">
                         <label>Estimated Quantity</label>
                         <input type="text" placeholder="e.g. 100 units" />
                      </div>
                      <div className="form-group">
                         <label>Project Details</label>
                         <textarea placeholder="Describe your technical requirements, fabric preferences, and branding needs..." rows={5}></textarea>
                      </div>
                      <button type="submit" className="btn-primary-new" style={{ width: '100%' }}>Submit Inquiry</button>
                   </form>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .contact-mode-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .mode-tab {
          background: #F9F9F7;
          border: 1px solid #E5E5E2;
          padding: 24px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 1px;
          color: #6B6B68;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          overflow: hidden;
        }
        .mode-tab::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #0A0A0A;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        .mode-tab span {
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          text-transform: none;
          letter-spacing: 0;
          color: #888;
          font-weight: 400;
        }
        .mode-tab:hover {
          border-color: #0A0A0A;
          color: #0A0A0A;
          background: #FFF;
        }
        .mode-tab.active {
          background: #FFF;
          color: #0A0A0A;
          border-color: #0A0A0A;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        .mode-tab.active::after {
          transform: translateY(0);
        }
        .mode-tab.active span { color: #444; }
        
        .chat-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          animation: slideUp 0.4s ease-out;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-opt-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px;
          background: #FFF;
          border: 1px solid #E5E5E2;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .chat-opt-card:hover {
          border-color: #0A0A0A;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .chat-opt-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .chat-opt-info h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: #0A0A0A;
          margin-bottom: 4px;
        }
        .chat-opt-info p { font-size: 13px; color: #6B6B68; margin-bottom: 8px; }
        .chat-opt-info span {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #0A0A0A;
        }

        .quick-email-form {
          max-width: 600px;
          margin: 0 auto;
          background: #FFF;
          border: 1px solid #E5E5E2;
          padding: 40px;
        }
        .form-group { margin-bottom: 20px; }
        .form-group label {
          display: block;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
          color: #0A0A0A;
        }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #E5E5E2;
          font-family: 'Barlow', sans-serif;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #0A0A0A; }

        .inquiry-form-section {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
          margin-top: 60px;
          padding-top: 80px;
          border-top: 1px solid #E5E5E2;
        }
        .factory-mini-card {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #F6F6F4;
          border-left: 3px solid #0A0A0A;
        }
        .f-icon { font-size: 20px; color: #0A0A0A; }
        .factory-mini-card strong { font-family: 'Barlow Condensed', sans-serif; font-size: 16px; text-transform: uppercase; }
        .factory-mini-card p { font-size: 13px; color: #6B6B68; }

        .inquiry-form-card {
          background: #FFF;
          border: 1px solid #0A0A0A;
          padding: 48px;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        @media (max-width: 768px) {
          .contact-mode-tabs { 
            grid-template-columns: 1fr 1fr; 
            gap: 8px; 
          }
          .mode-tab {
            padding: 16px 8px;
            font-size: 18px;
          }
          .mode-tab span {
            font-size: 11px;
            display: none; /* Hide subtext on mobile to save space */
          }
          .chat-options-grid { grid-template-columns: 1fr; }
          .inquiry-form-section { grid-template-columns: 1fr; gap: 40px; }
          .inquiry-form-card { padding: 24px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
