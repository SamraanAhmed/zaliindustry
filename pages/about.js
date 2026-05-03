import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

function useCountUp(target, duration = 1800, start = false) {
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

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function StatCard({ value, suffix = "", label, inView }) {
  const count = useCountUp(value, 1800, inView);
  return (
    <div className="about-stat-card">
      <span className="about-stat-val">{count}{suffix}</span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
}

const SECTION_THEMES = [
  { id: "s-hero",     bg: "#0a0a0a" },
  { id: "s-intro",    bg: "#ffffff" },
  { id: "s-stats",    bg: "#111111" },
  { id: "s-origin",   bg: "#f4f4f4" },
  { id: "s-values",   bg: "#fafafa" },
  { id: "s-world",    bg: "#161616" },
  { id: "s-cta",      bg: "#f0f0f0" },
];



const VALUES = [
  { Icon: FaFlask,          title: "Material Science",       desc: "We engineer at the fiber level — fabrics that adapt to body temperature, manage moisture, and endure elite demands." },
  { Icon: FaIndustry,       title: "Zero Outsourcing",       desc: "Every stitch happens under our roof. Full vertical integration means absolute quality control, end to end." },
  { Icon: FaGlobeAmericas,  title: "Ethical Origin",         desc: "Complete transparency in our supply chain. Fair wages, safe facilities, and responsible manufacturing — always." },
  { Icon: FaLightbulb,      title: "Relentless Iteration",   desc: "Continuous R&D drives every product line. We prototype, test, and refine until performance is measurably superior." },
  { Icon: FaRulerCombined,  title: "Precision Engineering",  desc: "Biomechanically informed patterns and wind-tunnel tested cuts ensure every garment moves the way your body needs." },
  { Icon: FaHandshake,      title: "Long-Term Partnerships", desc: "We build lasting relationships with brands, teams, and individuals who demand the best — not one-off transactions." },
];

export default function AboutPage() {
  const [pageBg, setPageBg] = useState("#0a0a0a");
  const [statsRef, statsInView] = useInView(0.3);
  const [tlRef,    tlInView]    = useInView(0.1);
  const [valRef,   valInView]   = useInView(0.1);
  const [heroRef,  heroInView]  = useInView(0.1);

  useEffect(() => {
    const obs = [];
    SECTION_THEMES.forEach(({ id, bg }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setPageBg(bg); },
        { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <Head>
        <title>About Us — Zali Industry</title>
        <meta name="description" content="Discover the heritage and manufacturing excellence behind every Zali Industry piece — engineered in Sialkot, delivered worldwide." />
      </Head>
      <Navbar />

      <main className="about-page" style={{ backgroundColor: pageBg }}>

        {/* ── HERO ── */}
        <section className="about-hero" id="s-hero" ref={heroRef}>
          <div className="about-hero-content">
            <h1 className={`about-hero-title ${heroInView ? "fade-up-in delay-1" : ""}`}>
              Built by <br /><em>Engineers,</em><br />Not Marketers.
            </h1>
            <p className={`about-hero-sub ${heroInView ? "fade-up-in delay-2" : ""}`}>
              Zali Industry is a direct manufacturer of high-performance sports apparel.
              No middlemen. No compromises. Just precision — from our factory floor to you.
            </p>
            <div className={`about-hero-actions ${heroInView ? "fade-up-in delay-3" : ""}`}>
              <Link href="/products" className="about-btn-primary">Explore Products</Link>
              <Link href="/contact" className="about-btn-ghost">Get in Touch</Link>
            </div>
          </div>

          {/* CSS-only geometric accent */}
          <div className="hero-geo" aria-hidden="true">
            <div className="geo-ring r1" />
            <div className="geo-ring r2" />
            <div className="geo-ring r3" />
          </div>

        </section>

        {/* ── INTRO ── */}
        <section className="about-intro-section" id="s-intro">
          <div className="about-wrap">
            <div className="about-intro-grid">
              <div className="about-intro-label"><span>Our Philosophy</span></div>
              <div className="about-intro-text">
                <p>We are not a clothing brand. We are a <strong>materials laboratory</strong> dedicated to the science of human movement — built on obsessive R&amp;D and a relentless commitment to outperforming the industry standard.</p>
                <p>Headquartered in Sialkot — the world's capital for sports manufacturing — we combine centuries of craftsmanship with modern engineering to produce apparel for elite athletes and everyday warriors alike.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="about-stats-section" id="s-stats" ref={statsRef}>
          <div className="about-wrap">
            <div className="about-stats-grid">
              <StatCard value={25}  suffix="+" label="Years of Manufacturing" inView={statsInView} />
              <StatCard value={40}  suffix="+" label="Countries Served"        inView={statsInView} />
              <StatCard value={100} suffix="%" label="In-House Production"     inView={statsInView} />
              <StatCard value={0}   suffix=""  label="Middlemen. Ever."        inView={statsInView} />
            </div>
          </div>
        </section>

        {/* ── ORIGIN ── */}
        <section className="about-origin-section" id="s-origin">
          <div className="about-wrap">
            <div className="about-origin-grid">
              <div className="about-origin-panel">
                <div className="origin-panel-year">1998</div>
                <div className="origin-panel-sub">Year Founded</div>
                <div className="origin-panel-divider" />
                <div className="origin-panel-facts">
                  {[
                    { v: "Sialkot", k: "Location" },
                    { v: "10K+",    k: "Units / Month" },
                    { v: "25+",     k: "Yrs Experience" },
                  ].map((f, i) => (
                    <div key={i} className="origin-fact">
                      <span className="fact-val">{f.v}</span>
                      <span className="fact-key">{f.k}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-origin-text-col">
                <span className="section-eyebrow">Our Origin</span>
                <h2 className="about-section-title">
                  Factory-Direct.<br /><span className="title-muted">No Compromises.</span>
                </h2>
                <p className="about-section-body">
                  Operating from our state-of-the-art facility in <strong>Sialkot, Pakistan</strong> — the world's capital for sports manufacturing — we utilize advanced machinery and decades of expertise to engineer world-class apparel.
                </p>
                <p className="about-section-body muted">
                  Our vertical integration model means we control every step: raw fiber selection, weaving, cutting, stitching, quality inspection, and shipping — guaranteeing consistency and dramatically lower costs.
                </p>
                <div className="about-origin-tags">
                  {[
                    { k: "Model",    v: "Direct-to-Customer" },
                    { k: "Expertise",v: "25+ Years Technical Textiles" },
                    { k: "Capacity", v: "10,000+ Units / Month" },
                  ].map((t, i) => (
                    <div key={i} className="origin-tag">
                      <strong>{t.k}</strong><span>{t.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* ── VALUES ── */}
        <section className="about-values-section" id="s-values" ref={valRef}>
          <div className="about-wrap">
            <div className="about-values-header">
              <span className="section-eyebrow">What We Stand For</span>
              <h2 className="about-section-title">Six Principles.<br /><span className="title-muted">One Standard.</span></h2>
            </div>
            <div className="about-values-grid">
              {VALUES.map(({ Icon, title, desc }, i) => (
                <div key={i} className={`about-value-card ${valInView ? "fade-up-in" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="value-icon"><Icon /></span>
                  <h3 className="value-title">{title}</h3>
                  <p className="value-desc">{desc}</p>
                  <div className="value-card-line" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORLD STATS ── */}
        <section className="about-world-section" id="s-world">
          <div className="about-wrap">
            <span className="section-eyebrow light">Global Impact</span>
            <h2 className="about-section-title light">Engineered in Pakistan.<br /><em>Worn Worldwide.</em></h2>
            <p className="about-section-body light-muted">
              From professional European football clubs to individual athletes training in New York — Zali-made gear is pushing human performance across every continent.
            </p>
            <div className="about-world-stats">
              {[
                { v: "40+",  l: "Countries" },
                { v: "500+", l: "Brand Partners" },
                { v: "1M+",  l: "Units Produced" },
              ].map((s, i) => (
                <div key={i} className="world-stat">
                  <span>{s.v}</span><label>{s.l}</label>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="about-cta-section" id="s-cta">
          <div className="about-wrap">
            <div className="about-cta-inner">
              <div className="about-cta-text">
                <span className="section-eyebrow">Ready to Work Together?</span>
                <h2>Experience the <br /><span className="cta-accent">Zali Difference.</span></h2>
                <p>Whether you're a brand looking for a manufacturing partner, a team needing custom kits, or an individual seeking factory-direct quality — we're ready.</p>
              </div>
              <div className="about-cta-buttons">
                <Link href="/products" className="about-btn-primary large">View Catalog</Link>
                <Link href="/contact" className="about-btn-outline large">Request a Quote</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
