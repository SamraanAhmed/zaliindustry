import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us — Zali Industry</title>
        <meta name="description" content="Discover the heritage of precision and performance engineering behind every Zali Industry piece." />
      </Head>

      <Navbar />

      <div className="about-container">
        
        {/* Editorial Hero */}
        <section className="editorial-hero max-w-7xl">
          <div className="hero-text-wrap">
            <h1>
              Engineered <br />
              <span>Excellence</span>
            </h1>
            <p>
              Zali Industry is not a clothing brand. We are a materials laboratory dedicated to the science of human movement and performance apparel.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* Heritage & Mission */}
        <section className="heritage-section max-w-7xl">
          <div className="heritage-grid">
            <div className="heritage-img-box">
              <Image
                src="/Demo Img/Gray.jpg"
                alt="Precision Manufacturing"
                fill
                className="heritage-img"
              />
            </div>

            <div className="heritage-text-content">
              <div className="h-space-y">
                <h2>
                  Direct <span>Manufacturer</span>
                </h2>
                <p>
                  At Zali Industry, we eliminate the middleman. We are a direct manufacturer with complete vertical integration, ensuring that every piece of gear is produced under our own roof and shipped directly from our factory to your doorstep.
                </p>
                <p className="heritage-subtext">
                  This direct relationship allows us to maintain unparalleled quality control, rapid prototyping, and significantly lower costs for high-performance apparel compared to traditional retail brands.
                </p>
              </div>

              <div className="heritage-stats-grid">
                 <div className="stat-item">
                    <h4>No Middlemen</h4>
                    <p>Transparent pricing and direct-from-origin manufacturing for every order.</p>
                 </div>
                 <div className="stat-item">
                    <h4>Ethical Origin</h4>
                    <p>Absolute transparency—from raw fiber selection to the final quality inspection.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Source Section */}
        <section className="manufacturing-hub max-w-7xl" style={{ borderTop: '1px solid #f0f0f0', paddingTop: '6rem', marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                   <h2 style={{ fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '2rem' }}>Our Global <span className="text-secondary" style={{ color: '#aaa' }}>Production Hub</span></h2>
                   <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                      Operating from our state-of-the-art facility in <strong style={{color: '#000'}}>Sialkot, Pakistan</strong>—the world's capital for sports manufacturing—we utilize advanced machinery and centuries-old craftsmanship to engineer world-class apparel.
                   </p>
                   <div style={{ display: 'flex', gap: '2rem' }}>
                       <div>
                          <h4 style={{ fontWeight: '900', marginBottom: '0.5rem' }}>Location</h4>
                          <p style={{ fontSize: '0.9rem', color: '#666' }}>Sialkot, Pakistan</p>
                       </div>
                       <div>
                          <h4 style={{ fontWeight: '900', marginBottom: '0.5rem' }}>Team Experience</h4>
                          <p style={{ fontSize: '0.9rem', color: '#666' }}>25+ Years of Technical Textile Mastery</p>
                       </div>
                   </div>
                </div>
                <div style={{ background: '#f5f5f5', borderRadius: '24px', overflow: 'hidden', height: '400px', position: 'relative' }}>
                    <Image src="/Demo Img/LightGray.png" alt="Zali Factory" fill style={{ objectFit: 'cover' }} />
                </div>
            </div>
        </section>

        {/* Grid Stats */}
        <section className="grid-stats-section">
            <div className="max-w-7xl">
              <div className="stats-grid">
                 {[
                   { val: "Factory", label: "Direct-to-Customer" },
                   { val: "100%", label: "In-House Production" },
                   { val: "Elite", label: "Material Sourcing" },
                   { val: "Global", label: "Technical Export" },
                 ].map((item, i) => (
                   <div key={i} className="stat-box">
                      <span className="big-val">{item.val}</span>
                      <span className="stat-label">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
        </section>

        {/* Principles Section */}
        <section className="principles-section max-w-7xl">
          <div className="principles-header">
             <h2>
                Our Core <br />
                <span className="text-outline italic">Principles</span>
              </h2>
          </div>

          <div className="principles-grid">
             {[
               { title: "Material Science", desc: "We utilize atomic-level engineering to create fabrics that respond to body temperature changes through intelligent fiber expansion." },
               { title: "Aerodynamics", desc: "Our designs are wind-tunnel tested to provide a documented speed advantage for high-velocity athletes by reducing drag at critical points." },
               { title: "Human Ergonomics", desc: "Every cut follows the natural muscular anatomy to prevent restriction during explosive movement and facilitate blood flow." }
             ].map((v, i) => (
               <div key={i} className="principle-card">
                  <div className="c-wrap">
                      <span className="card-num">0{i+1}</span>
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                  </div>
                  
                  <div className="learn-more-box">
                     <div className="l-line" />
                     <span className="l-text">Learn Research</span>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
           <div className="cta-box">
              <div className="cta-content">
                 <h2>
                   Experience The <br />
                   <span>Difference</span>
                 </h2>
                 <div className="cta-actions">
                    <Link href="/products" className="ctaBtn btn-white">
                      View Catalog
                    </Link>
                    <Link href="/fabrics" className="ctaBtn btn-outline">
                      Fabric Guide
                    </Link>
                 </div>
              </div>
           </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
