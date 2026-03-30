import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaCheckCircle, FaFileAlt, FaDna, FaLayerGroup, FaShippingFast, FaWhatsapp } from 'react-icons/fa';

export default function HowItWorks() {
  const STEPS = [
    {
      num: "01",
      title: "Send Your Idea",
      desc: "Every great project starts with a spark. Whether it's a rough sketch or a fully developed tech pack, we transform your vision into reality.",
      details: ["Reference Images", "Brand Logos", "Technical Packs", "Existing Garments"],
      img: "/Demo Img/Black.png",
      side: "left"
    },
    {
      num: "02",
      title: "Mockup & Fabric Selection",
      desc: "Our material scientists evaluate the best fiber blends for your technical requirements. We finalize artwork and color science.",
      details: ["Fabric Recommendations", "Printing Methods", "Pantone Color Matching", "Sizing Confirmation"],
      img: "/Demo Img/Gray.jpg",
      side: "right"
    },
    {
      num: "03",
      title: "Technical Sampling",
      desc: "Before bulk production, we create precise prototypes to test fit, motion, and durability in real-world scenarios.",
      details: ["Prototype Sample", "Fit & Quality Check", "Technical Adjustments", "Performance Testing"],
      img: "/Demo Img/LightGray.png",
      side: "left"
    },
    {
      num: "04",
      title: "Bulk Production",
      desc: "Once samples are approved, our Sialkot facility initiates mass-scale precision manufacturing under strict oversight.",
      details: ["Laser Cutting", "Printing / Embroidery", "Industrial Stitching", "Rigorous QC"],
      img: "/Demo Img/Red.jpg",
      side: "right"
    },
    {
      num: "05",
      title: "Packaging & Delivery",
      desc: "The final product is inspected, tagged, and packaged for worldwide logistics, ensuring a direct manufacturer-to-door experience.",
      details: ["Tech Folding", "Custom Labels", "Poly Bagging", "Worldwide Delivery"],
      img: "/Demo Img/White.jpg",
      side: "left"
    }
  ];

  return (
    <>
      <Head>
        <title>Production Process | ZALI INDUSTRY</title>
        <meta name="description" content="Discover the 5-step technical manufacturing process at Zali Industry. Direct-from-factory sportswear engineering." />
      </Head>

      <Navbar />

      <main className="how-it-works-page">
        <div className="container">
          <div className="process-header">
             <h1>How it <span>Works</span></h1>
             <p>Our vertical manufacturing engine is built for speed, precision, and performance. Follow our 5-step technical walkthrough from concept to global delivery.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {STEPS.map((step, i) => (
              <section key={step.num} className="timeline-step">
                <div className="step-marker">{step.num}</div>
                
                <div className={`step-content ${step.side}`}>
                  <span className="step-tag-pill">Phase {step.num}</span>
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
               <h2>Start Your <br /><span>Production Inquiry</span></h2>
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
