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
                  Beyond the <span>Ordinary</span>
                </h2>
                <p>
                  Our journey began with a single question: Why does athletic apparel fail when athletes push hardest? We spent three years in research and development before releasing our first prototype.
                </p>
                <p className="heritage-subtext">
                  Today, Zali Industry supplies precision gear to Olympic-level athletes and elite teams globally. Every seam, every fiber, and every weave is calculated to minimize friction and maximize efficiency.
                </p>
              </div>

              <div className="heritage-stats-grid">
                 <div className="stat-item">
                    <h4>Scientific Rigor</h4>
                    <p>We test materials at extreme temperatures and atmospheric pressures to ensure absolute durability.</p>
                 </div>
                 <div className="stat-item">
                    <h4>Ethical Origin</h4>
                    <p>Our supply chain is fully transparent, from raw fiber to final inspection in our own facilities.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Stats */}
        <section className="grid-stats-section">
            <div className="max-w-7xl">
              <div className="stats-grid">
                 {[
                   { val: "24/7", label: "Production Capacity" },
                   { val: "100%", label: "Moisture Wicking" },
                   { val: "Odor-X", label: "Tech Integrated" },
                   { val: "40+", label: "Global Partners" },
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
