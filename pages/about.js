import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFlask,
  FaIndustry,
  FaGlobeAmericas,
  FaLightbulb,
  FaRulerCombined,
  FaHandshake,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function useCountUp(target, duration = 1800, start = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function StatCard({ value, suffix = "", label }) {
  const count = useCountUp(value, 1800, true);
  return (
    <div style={{ padding: '32px 24px', background: '#FFFFFF', border: '1px solid #E5E5E2', borderRadius: '4px', textAlign: 'center' }}>
      <p style={{ fontSize: '48px', fontFamily: "'Alumni Sans', sans-serif", color: '#0A0A0A', lineHeight: 1, marginBottom: '8px' }}>
        {count}{suffix}
      </p>
      <p style={{ fontFamily: "'Alumni Sans', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B6B68' }}>
        {label}
      </p>
    </div>
  );
}

const VALUES = [
  { Icon: FaFlask,          title: "Material Science",       desc: "We engineer at the fiber level — fabrics that adapt to body temperature, manage moisture, and endure elite demands." },
  { Icon: FaIndustry,       title: "Zero Outsourcing",       desc: "Every stitch happens under our roof. Full vertical integration means absolute quality control, end to end." },
  { Icon: FaGlobeAmericas,  title: "Ethical Origin",         desc: "Complete transparency in our supply chain. Fair wages, safe facilities, and responsible manufacturing — always." },
  { Icon: FaLightbulb,      title: "Relentless Iteration",   desc: "Continuous R&D drives every product line. We prototype, test, and refine until performance is measurably superior." },
  { Icon: FaRulerCombined,  title: "Precision Engineering",  desc: "Biomechanically informed patterns and wind-tunnel tested cuts ensure every garment moves the way your body needs." },
  { Icon: FaHandshake,      title: "Long-Term Partnerships", desc: "We build lasting relationships with brands, teams, and individuals who demand the best — not one-off transactions." },
];

export default function AboutPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>About Us — Zali Industry</title>
        <meta name="description" content="Discover the heritage and manufacturing excellence behind every Zali Industry piece — engineered in Sialkot, delivered worldwide." />
      </Head>
      <Navbar />

      <main className="hiw-page">
        {/* HERO */}
        <section className="page-hero reveal">
          <div className="container">
            <p className="page-hero-eyebrow">ABOUT ZALI INDUSTRY</p>
            <h1>Built by Engineers,<br />Not Marketers.</h1>
            <p>
              Zali Industry is a direct manufacturer of high-performance sports apparel. No middlemen. No compromises. Just precision — from our factory floor to you.
            </p>
          </div>
        </section>

        {/* INTRO & SIDEBAR */}
        <section className="section reveal">
          <div className="container">
            <div className="hiw-intro">
              <div>
                <p className="section-label">Our Philosophy</p>
                <h2 className="section-title">Factory-Direct. No Compromises.</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary, #6B6B68)', marginBottom: '20px' }}>
                  We are not a clothing brand. We are a <strong>materials laboratory</strong> dedicated to the science of human movement — built on obsessive R&amp;D and a relentless commitment to outperforming the industry standard.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary, #6B6B68)' }}>
                  Operating from our state-of-the-art facility in <strong>Sialkot, Pakistan</strong> — the world's capital for sports manufacturing — we combine centuries of craftsmanship with modern engineering to produce apparel for elite athletes and everyday warriors alike.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text-secondary, #6B6B68)' }}>
                    <span style={{ color: 'var(--black, #000)', fontWeight: 700, flexShrink: 0 }}>—</span>
                    <strong>Model:</strong> Direct-to-Customer
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text-secondary, #6B6B68)' }}>
                    <span style={{ color: 'var(--black, #000)', fontWeight: 700, flexShrink: 0 }}>—</span>
                    <strong>Expertise:</strong> 25+ Years Technical Textiles
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--text-secondary, #6B6B68)' }}>
                    <span style={{ color: 'var(--black, #000)', fontWeight: 700, flexShrink: 0 }}>—</span>
                    <strong>Capacity:</strong> 10,000+ Units / Month
                  </div>
                </div>
              </div>
              
              <div className="hiw-sidebar">
                <div className="hiw-cta-box">
                  <p style={{ fontFamily: "'Alumni Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: '12px' }}>
                    Ready to start?
                  </p>
                  <h3 style={{ fontFamily: "'Alumni Sans', sans-serif", fontSize: '28px', color: '#fff', lineHeight: 1, marginBottom: '16px' }}>
                    Experience the Zali Difference
                  </h3>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.45)', marginBottom: '24px', lineHeight: 1.7 }}>
                    Whether you're a brand looking for a manufacturing partner, a team needing custom kits, or an individual seeking factory-direct quality — we're ready.
                  </p>
                  <Link href="/products" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS GRID */}
        <section className="section reveal" style={{ background: '#F6F6F4' }}>
          <div className="container">
            <p className="section-label">Global Impact</p>
            <h2 className="section-title">Engineered in Pakistan.<br/>Worn Worldwide.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '36px' }}>
              <StatCard value={25}  suffix="+" label="Years of Manufacturing" />
              <StatCard value={40}  suffix="+" label="Countries Served" />
              <StatCard value={100} suffix="%" label="In-House Production" />
              <StatCard value={0}   suffix=""  label="Middlemen. Ever." />
            </div>
          </div>
        </section>

        {/* VALUES / PRINCIPLES */}
        <section className="section reveal">
          <div className="container">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Six Principles.<br/>One Standard.</h2>
            <div style={{ maxWidth: '680px', marginTop: '36px' }}>
              {VALUES.map((val, i) => (
                <div key={i} className={`step-block reveal delay-${i+1}`}>
                  <div className="step-num">0{i+1}</div>
                  <div>
                    <div className="step-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <val.Icon size={16} /> {val.title}
                    </div>
                    <p className="step-body">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
