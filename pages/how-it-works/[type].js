import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { howItWorksData } from '../../data/howItWorksData';

export default function HowItWorksDetail() {
  const router = useRouter();
  const { type } = router.query;
  
  // Handle loading or invalid type
  if (!type || !howItWorksData[type]) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
        <p>Loading Technical Documentation...</p>
      </div>
    );
  }

  const data = howItWorksData[type];

  return (
    <>
      <Head>
        <title>How it Works for {data.title} | ZALI INDUSTRY</title>
        <meta name="description" content={`Discover the technical manufacturing process for ${data.title}s at Zali Industry.`} />
      </Head>

      <Navbar />

      <main className="how-it-works-page">
        <div className="container">
          <div className="process-header">
             <h1>How it Works for <span>{data.title}s</span></h1>
             <p>{data.desc}</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {data.steps.map((step, i) => (
              <section key={step.num} className="timeline-step">
                <div className="step-marker">{step.num}</div>
                
                <div className={`step-content ${step.side}`}>
                  <span className="step-tag-pill">{data.accent} | Phase {step.num}</span>
                  <h2>{step.title}</h2>
                  <p style={{ marginBottom: '2rem', lineHeight: '1.7', color: '#666' }}>{step.desc}</p>
                  
                  <div className="step-details-grid">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="detail-bubble">
                        <FaCheckCircle size={12} color="#ff3c00" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="step-img-box">
                  <img src={step.img} alt={step.title} />
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="how-it-works-cta container">
           <div className="cta-inner">
               <h2>Start Your <br /><span>{data.title} Inquiry</span></h2>
               <div className="cta-actions">
                  <Link href="/cart" className="cta-primary">
                    Submit Quote List
                  </Link>
                  <a href="https://wa.me/#" className="cta-secondary" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp style={{ marginRight: '1rem' }} />
                    Direct WhatsApp
                  </a>
               </div>
           </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
