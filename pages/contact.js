import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function ContactPage() {
  const CONTACT_CARDS = [
    {
      title: "WhatsApp Direct",
      desc: "Instant technical support and order inquiries.",
      btnText: "Start Chat",
      icon: <FaWhatsapp />,
      href: "https://wa.me/#",
      color: "#25D366"
    },
    {
        title: "Technical Email",
        desc: "Send us your tech packs and bulk order RFQs.",
        btnText: "Send Email",
        icon: <FaEnvelope />,
        href: "mailto:support@zaliindustry.com",
        color: "#000"
    },
    {
        title: "Instagram",
        desc: "Follow our daily manufacturing operations and gear drops.",
        btnText: "Follow Us",
        icon: <FaInstagram />,
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

      <main className="contact-page container pt-32 pb-24">
        <div className="contact-header">
           <h1>Connect With <span>Technical Ops</span></h1>
           <p>Our manufacturing and engineering teams operate on a global scale. Choose your preferred communication channel for technical support, sample tracking, or bulk production inquiries.</p>
        </div>

        {/* Action Cards */}
        <div className="contact-grid-main">
            {CONTACT_CARDS.map((card, i) => (
                <a key={i} href={card.href} target="_blank" rel="noopener noreferrer" className="contact-card-box">
                    <div className="c-icon-circle">
                        {card.icon}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span 
                        style={{ 
                            color: '#000', 
                            fontWeight: '900', 
                            textTransform: 'uppercase', 
                            fontSize: '0.8rem',
                            borderBottom: '2px solid #000',
                            paddingBottom: '2px',
                            marginTop: '0.5rem'
                        }}
                    >
                        {card.btnText}
                    </span>
                </a>
            ))}
        </div>

        {/* Factory Info */}
        <section className="factory-location-section">
            <div className="location-info">
                <h2>The <span>Manufacturing Hub</span></h2>
                <p>Located in the heart of the global sports manufacturing industry, our high-tech facility serves as the engine for all ZALI engineering. We manage the entire lifecycle from raw material selection to final technical inspection.</p>
                <div className="location-tag">
                    <FaMapMarkerAlt size={20} color="#ff3c00" />
                    <span>Sialkot, Pakistan</span>
                </div>
            </div>
            <div className="location-map-stub">
                <div className="map-circle"></div>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <div style={{ fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', color: '#666' }}>Active Hub</div>
                    <div style={{ color: '#fff', fontWeight: '900', fontSize: '1.2rem', marginTop: '0.5rem' }}>Pakistan Production Center</div>
                </div>
                <div style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '40px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#aaa', marginTop: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                   Export Status: Active
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
