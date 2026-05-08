import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  const CONTACT_CARDS = [
    {
      title: "WhatsApp Direct",
      desc: "Instant technical support and order inquiries.",
      btnText: "Start Chat",
      icon: <FaWhatsapp size={24} color="#25D366" />,
      href: "https://wa.me/#",
      color: "#25D366"
    },
    {
        title: "Technical Email",
        desc: "Send us your tech packs and bulk order RFQs.",
        btnText: "Send Email",
        icon: <FaEnvelope size={22} color="#111" />,
        href: "mailto:support@zaliindustry.com",
        color: "#111"
    },
    {
        title: "Instagram",
        desc: "Follow our daily manufacturing operations and gear drops.",
        btnText: "Follow Us",
        icon: <FaInstagram size={24} color="#E1306C" />,
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

        {/* INTRO & SIDEBAR */}
        <section className="section">
          <div className="container">
            <div className="hiw-intro">
              <div>
                <p className="section-label">Direct Channels</p>
                <h2 className="section-title">Reach Out.</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginTop: '24px' }}>
                  {CONTACT_CARDS.map((card, i) => (
                    <a key={i} href={card.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', background: '#F6F6F4', border: '1px solid #E5E5E2', borderRadius: '4px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: `${card.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#0A0A0A', lineHeight: 1, marginBottom: '6px' }}>{card.title}</h3>
                        <p style={{ fontSize: '13px', color: '#6B6B68', lineHeight: 1.5, marginBottom: '8px' }}>{card.desc}</p>
                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#0A0A0A' }}>
                          {card.btnText} →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="hiw-sidebar">
                <div className="hiw-cta-box">
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: '12px' }}>
                    Manufacturing Hub
                  </p>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: '#fff', lineHeight: 1, marginBottom: '16px' }}>
                    Pakistan Production Center
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)', marginBottom: '24px', lineHeight: 1.7 }}>
                    Located in the heart of the global sports manufacturing industry, our high-tech facility serves as the engine for all ZALI engineering. We manage the entire lifecycle from raw material selection to final technical inspection.
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '16px' }}>
                    <FaMapMarkerAlt size={16} color="rgba(255,255,255,0.6)" />
                    <span style={{ fontSize: '13px', color: '#fff' }}>Sialkot, Pakistan</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                    <FaGlobe size={16} color="#25D366" />
                    <span style={{ fontSize: '13px', color: '#fff', fontWeight: 600 }}>Export Status: Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
