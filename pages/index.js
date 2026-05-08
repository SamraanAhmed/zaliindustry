import Head from 'next/head';
import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../components/ProductData';
import LogoLoop from '../components/LogoLoop';
import { SiPaypal, SiStripe, SiWise, SiPayoneer, SiWesternunion, SiMoneygram } from 'react-icons/si';

const paymentLogos = [
  { node: <SiPaypal />, title: "PayPal" },
  { node: <SiStripe />, title: "Stripe" },
  { node: <SiWise />, title: "Wise" },
  { node: <SiPayoneer />, title: "Payoneer" },
  { node: <span style={{ fontWeight: 800, fontFamily: 'Arial, sans-serif' }}>Remitly</span>, title: "Remitly" },
  { node: <SiWesternunion />, title: "Western Union" },
  { node: <span style={{ fontWeight: 800, fontFamily: 'Arial, sans-serif', color: '#000000ff', textTransform: 'lowercase' }}>ria</span>, title: "Ria" },
  { node: <SiMoneygram />, title: "MoneyGram" },
];
const PRINT_METHODS = [
  {
    name: "Dye Sublimation",
    desc: "All-over print on polyester. Zero fade, zero cracking — our most popular method for fight wear, surfwear, and team kits.",
    img: "/prinitingMethods/Dye Sublimation.png"
  },
  {
    name: "DTF — Direct to Film",
    desc: "High-detail print on cotton and blended fabrics. Ideal for logo placement on casual and lifestyle garments.",
    img: "/prinitingMethods/Direct to Film.png"
  },
  {
    name: "DTG — Direct to Garment",
    desc: "Photographic-quality prints on light-colored garments. Best for short runs and intricate full-color artwork.",
    img: "/prinitingMethods/Direct to Garment.png"
  },
  {
    name: "Screen Printing",
    desc: "Bold, high-volume graphics on cotton. Cost-effective at scale for branded casual and team wear.",
    img: "/prinitingMethods/Screen Printing.png"
  },
  {
    name: "Technical Embroidery",
    desc: "Premium finish for logos, crests, and patches. Available on hats, jackets, polos, and fight wear.",
    img: "/prinitingMethods/Technical Embroidery.png"
  }
];

const PrintMethodsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % PRINT_METHODS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + PRINT_METHODS.length) % PRINT_METHODS.length);

  return (
    <div className="print-carousel reveal delay-3">
      <div className="print-carousel-img-container">
        <img src={PRINT_METHODS[activeIndex].img} alt={PRINT_METHODS[activeIndex].name} className="print-carousel-img" />
      </div>
      <div className="print-carousel-content">
        <div className="print-carousel-header">
           <div className="print-carousel-num">0{activeIndex + 1}</div>
           <div className="print-carousel-name">{PRINT_METHODS[activeIndex].name}</div>
        </div>
        <div className="print-carousel-desc">{PRINT_METHODS[activeIndex].desc}</div>
      </div>
      <div className="print-carousel-controls">
        <button onClick={prevSlide} className="print-carousel-btn" aria-label="Previous Print Method">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div className="print-carousel-dots">
          {PRINT_METHODS.map((_, i) => (
            <button key={i} className={`print-carousel-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)} aria-label={`Go to slide ${i + 1}`}></button>
          ))}
        </div>
        <button onClick={nextSlide} className="print-carousel-btn" aria-label="Next Print Method">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

const FABRICS = [
  { name: 'Chiffon Fabric', image: '/Fabrics/Chiffon Fabric.jpg', description: 'Lightweight and shear, perfect for delicate performance pieces.' },
  { name: 'Linen Fabric', image: '/Fabrics/Linen fabric.jpg', description: 'Highly breathable and moisture-wicking natural fiber.' },
  { name: 'Silk Fabric', image: '/Fabrics/Silk fabric.jpg', description: 'Luxury meets performance with unmatched smoothness.' },
  { name: 'Valvet Fabric', image: '/Fabrics/Valvet Fabric.jpg', description: 'Premium plush texture for elite lifestyle wear.' },
  { name: 'Wool Fabric', image: '/Fabrics/Wool fabric.jpg', description: 'Natural temperature regulation for all-weather comfort.' },
];

const FabricsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % FABRICS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + FABRICS.length) % FABRICS.length);

  return (
    <div className="print-carousel reveal delay-3">
      <div className="print-carousel-img-container">
        <Link href="/fabrics">
          <img src={FABRICS[activeIndex].image} alt={FABRICS[activeIndex].name} className="print-carousel-img" style={{ cursor: 'pointer' }} />
        </Link>
      </div>
      <div className="print-carousel-content">
        <div className="print-carousel-header">
           <div className="print-carousel-num">0{activeIndex + 1}</div>
           <Link href="/fabrics" style={{ textDecoration: 'none' }}>
             <div className="print-carousel-name">{FABRICS[activeIndex].name}</div>
           </Link>
        </div>
        <div className="print-carousel-desc">{FABRICS[activeIndex].description}</div>
      </div>
      <div className="print-carousel-controls">
        <button onClick={prevSlide} className="print-carousel-btn" aria-label="Previous Fabric">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div className="print-carousel-dots">
          {FABRICS.map((_, i) => (
            <button key={i} className={`print-carousel-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)} aria-label={`Go to slide ${i + 1}`}></button>
          ))}
        </div>
        <button onClick={nextSlide} className="print-carousel-btn" aria-label="Next Fabric">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Based on original index.js



  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>ZALI INDUSTRY | Peak Performance Sportswear</title>
        <meta name="description" content="Discover premium athletic apparel and footwear engineered for performance and style. Zali Industry sets the standard for contemporary sportswear." />
      </Head>

      <Navbar />

      {/* Hero is excluded from the new sections */}
      <HeroSection />

      <main>
        {/* STRIP */}
        <div className="cat-strip">
          <div className="cat-strip-inner" id="stripInner">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="cat-strip-item">Running Shoes<span className="cat-strip-dot"></span></span>
                <span className="cat-strip-item">Training Apparel<span className="cat-strip-dot"></span></span>
                <span className="cat-strip-item">Sportswear<span className="cat-strip-dot"></span></span>
                <span className="cat-strip-item">Accessories<span className="cat-strip-dot"></span></span>
                <span className="cat-strip-item">Equipment<span className="cat-strip-dot"></span></span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* SHOP BY CATEGORY */}
        <section className="section-new" style={{ paddingBottom: '36px', paddingTop: '64px' }}>
          <div className="products-header">
            <div className="reveal">
              <p className="section-label">Browse Range</p>
              <h2 className="section-title">Shop by Category</h2>
            </div>
          </div>
          <div className="category-grid">
            <Link href="/products?cat=Running Shoes" className="cat-card reveal">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80" alt="Running Shoes" />
              <div className="cat-card-overlay"></div>
              <div className="cat-card-content">
                <div className="cat-name">Running Shoes</div>
                <div className="cat-sub">High-performance footwear for athletes</div>
                <span className="cat-arrow">Shop Now →</span>
              </div>
            </Link>
            <Link href="/products?cat=Training Apparel" className="cat-card reveal delay-1">
              <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=700&q=80" alt="Training Apparel" />
              <div className="cat-card-overlay"></div>
              <div className="cat-card-content">
                <div className="cat-name">Training Apparel</div>
                <div className="cat-sub">Breathable tees, shorts, and activewear</div>
                <span className="cat-arrow">Shop Now →</span>
              </div>
            </Link>
            <Link href="/products?cat=Sportswear" className="cat-card reveal delay-2">
              <img src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=700&q=80" alt="Sportswear" />
              <div className="cat-card-overlay"></div>
              <div className="cat-card-content">
                <div className="cat-name">Sportswear</div>
                <div className="cat-sub">Compression tights and athletic layers</div>
                <span className="cat-arrow">Shop Now →</span>
              </div>
            </Link>
            <Link href="/products?cat=Accessories" className="cat-card reveal delay-3">
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&q=80" alt="Accessories" />
              <div className="cat-card-overlay"></div>
              <div className="cat-card-content">
                <div className="cat-name">Accessories & Gear</div>
                <div className="cat-sub">Gloves, bags, and essential equipment</div>
                <span className="cat-arrow">Shop Now →</span>
              </div>
            </Link>
          </div>
          <div className="section-footer-link">
            <Link href="/products" className="btn-ghost-new reveal">View All Categories →</Link>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="section-new">
          <div className="container-new">
            <div className="products-header">
              <div className="reveal">
                <p className="section-label">Selected Range</p>
                <h2 className="section-title">Featured Essentials</h2>
              </div>
            </div>
            <div className="products-grid">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            <div className="section-footer-link">
              <Link href="/products" className="btn-ghost-new reveal">View All Products →</Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section section-new">
          <div className="container-new">
            <div className="products-header" style={{ marginBottom: '44px' }}>
              <div>
                <p className="section-label" style={{ color: 'rgba(255,255,255,.3)' }}>
                  Production
                </p>
                <h2 className="section-title light reveal">How It Works</h2>
                <p className="section-sub light reveal delay-1">From your first sketch to the final shipment — we manage the entire production cycle in-house. No middlemen. No guesswork.</p>
              </div>
            </div>
            <div className="process-grid">
              <div className="process-step reveal">
                <span className="process-num">01</span>
                <div className="process-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.5">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="process-title">Send Your Brief</div>
                <p className="process-desc">Share design files, tech packs, or brand references. No brief is too early — we work with what you have.</p>
              </div>
              <div className="process-step reveal delay-1">
                <span className="process-num">02</span>
                <div className="process-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <div className="process-title">Mockup & Sample</div>
                <p className="process-desc">Digital mockups within 48 hours. Physical pre-production samples available before any bulk order is confirmed.</p>
              </div>
              <div className="process-step reveal delay-2">
                <span className="process-num">03</span>
                <div className="process-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                  </svg>
                </div>
                <div className="process-title">In-House Production</div>
                <p className="process-desc">Manufactured entirely in our Sialkot facility — sublimation printed, cut, stitched, and QC inspected under one roof.</p>
              </div>
              <div className="process-step reveal delay-3">
                <span className="process-num">04</span>
                <div className="process-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
                <div className="process-title">Shipped Worldwide</div>
                <p className="process-desc">Direct to the US, UK, EU, and beyond. Tracked, packaged to your spec, and retail-ready from day one.</p>
              </div>
            </div>
            <div className="section-footer-link">
              <Link href="/how-it-works-brands" className="btn-ghost-new reveal" style={{ color: 'rgba(255,255,255,.4)', borderColor: 'rgba(255,255,255,.15)' }}>
                Full Process →
              </Link>
            </div>
          </div>
        </section>
 
        {/* CUSTOM + PRINT */}
        <section className="section-new">
          <div className="container-new two-col">
            <div>
              <p className="section-label reveal">Manufacturing</p>
              <h2 className="section-title reveal delay-1">Fully Built to Your Spec</h2>
              <p className="section-sub reveal delay-2">We don't sell off-the-shelf. Every garment is made to order — your design, your labels, your packaging. OEM and white-label production available.</p>
              <div className="custom-features reveal delay-3">
                <div className="custom-feature">
                  <div className="feat-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                    </svg>
                  </div>
                  <span className="feat-text">Custom Patterns & Technical Cuts</span>
                </div>
                <div className="custom-feature">
                  <div className="feat-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
                      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08" />
                      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z" />
                    </svg>
                  </div>
                  <span className="feat-text">Flatlock, Overlock & Bonded Stitching</span>
                </div>
                <div className="custom-feature">
                  <div className="feat-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                  </div>
                  <span className="feat-text">Woven Labels, Neck Labels & Hang Tags</span>
                </div>
                <div className="custom-feature">
                  <div className="feat-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                  </div>
                  <span className="feat-text">Retail-Ready Custom Packaging</span>
                </div>
                <div className="custom-feature">
                  <div className="feat-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <span className="feat-text">White-Label & OEM Production</span>
                </div>
                <div className="custom-feature">
                  <div className="feat-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <span className="feat-text">MOQ-Friendly for Growing Brands</span>
                </div>
              </div>
            </div>
            <div>
              <p className="section-label reveal">Print Technologies</p>
              <h2 className="section-title reveal delay-1">Our Print Methods</h2>
              <p className="section-sub reveal delay-2">Five production methods, one facility. We recommend what works best for your fabric, design, and volume.</p>
              <PrintMethodsCarousel />
            </div>
          </div>
        </section>

        {/* FABRIC */}
        <section className="section-new fabric-section">
          <div className="container-new two-col">
            <div>
              <p className="section-label reveal">Materials</p>
              <Link href="/fabrics" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 className="section-title hover-link reveal delay-1" style={{ cursor: 'pointer' }}>Fabric Engineering</h2>
              </Link>
              <p className="section-sub reveal delay-2">
                Every fabric tested for print compatibility, stretch recovery, and durability. We carry options across different GSM weights, eco-certified materials, and specialty blends.
              </p>
              
              <div className="fabric-explore reveal delay-3" style={{ marginTop: '0', padding: '24px', flexWrap: 'wrap' }}>
                <div style={{ width: '100%' }}>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6B6B68', marginBottom: '8px' }}>Fabric Sourcing</p>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#0A0A0A', lineHeight: 1, marginBottom: '8px' }}>Not Sure Which Fabric Is Right?</h3>
                  <p style={{ fontSize: '13px', color: '#6B6B68', lineHeight: 1.7 }}>Get in touch and we'll match the right fabric to your product and print method.</p>
                </div>
                <div className="fabric-explore-btns" style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                  <Link href="/fabrics" className="btn-primary-new">Explore Fabrics</Link>
                  <Link href="/contact" className="btn-secondary-new">Request Samples</Link>
                </div>
              </div>
            </div>
            
            <div style={{ alignSelf: 'center' }}>
              <FabricsCarousel />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-new testimonials-section">
          <div className="container-new">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <p className="section-label" style={{ color: 'rgba(255,255,255,.3)' }}>
                Client Reviews
              </p>
              <h2 className="section-title light reveal">What Our Clients Say</h2>
            </div>
            <div className="testimonials-track-wrapper">
              <div className="testimonials-track">
                <div className="testimonials-grid">
                  <div className="testimonial-card reveal">
                    <div className="t-quote">"</div>
                    <p className="t-text">ZALI handles our entire fight wear line — rashguards, spats, MMA shorts. The sublimation quality is consistent batch after batch, which is everything when you're scaling a brand.</p>
                    <div className="t-divider"></div>
                    <div className="t-name">Jake T.</div>
                    <div className="t-role">Fight Wear Brand Owner — California, USA</div>
                  </div>
                  <div className="testimonial-card reveal delay-1">
                    <div className="t-quote">"</div>
                    <p className="t-text">First time sourcing overseas and ZALI made it easy. Samples arrived in under two weeks, the bulk order was flawless, and the packaging was retail-ready. We'll be back every season.</p>
                    <div className="t-divider"></div>
                    <div className="t-name">Coach Marcus R.</div>
                    <div className="t-role">Basketball Program — Hawaii, USA</div>
                  </div>
                  <div className="testimonial-card reveal delay-2">
                    <div className="t-quote">"</div>
                    <p className="t-text">Fast turnaround, clean communication, and the quality holds up. We've been running their boardshorts through our shop for two seasons. No complaints — just reorders.</p>
                    <div className="t-divider"></div>
                    <div className="t-name">Sophie L.</div>
                    <div className="t-role">Surf & Skate Retailer — United Kingdom</div>
                  </div>
                </div>
                
                <div className="testimonials-grid duplicate" aria-hidden="true">
                  <div className="testimonial-card">
                    <div className="t-quote">"</div>
                    <p className="t-text">ZALI handles our entire fight wear line — rashguards, spats, MMA shorts. The sublimation quality is consistent batch after batch, which is everything when you're scaling a brand.</p>
                    <div className="t-divider"></div>
                    <div className="t-name">Jake T.</div>
                    <div className="t-role">Fight Wear Brand Owner — California, USA</div>
                  </div>
                  <div className="testimonial-card">
                    <div className="t-quote">"</div>
                    <p className="t-text">First time sourcing overseas and ZALI made it easy. Samples arrived in under two weeks, the bulk order was flawless, and the packaging was retail-ready. We'll be back every season.</p>
                    <div className="t-divider"></div>
                    <div className="t-name">Coach Marcus R.</div>
                    <div className="t-role">Basketball Program — Hawaii, USA</div>
                  </div>
                  <div className="testimonial-card">
                    <div className="t-quote">"</div>
                    <p className="t-text">Fast turnaround, clean communication, and the quality holds up. We've been running their boardshorts through our shop for two seasons. No complaints — just reorders.</p>
                    <div className="t-divider"></div>
                    <div className="t-name">Sophie L.</div>
                    <div className="t-role">Surf & Skate Retailer — United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAYMENT METHODS */}
        <section className="section-new" style={{ paddingBottom: '40px', paddingTop: '40px', backgroundColor: '#fafafa', borderTop: '1px solid #eaeaea' }}>
          <div className="container-new">
             <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <p className="section-label" style={{ color: '#888', justifyContent: 'center' }}>
                  Supported Payment Methods
                </p>
             </div>
             <div style={{ position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={paymentLogos}
                  speed={80}
                  direction="left"
                  logoHeight={40}
                  gap={60}
                  hoverSpeed={20}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#fafafa"
                  ariaLabel="Payment methods"
                />
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
