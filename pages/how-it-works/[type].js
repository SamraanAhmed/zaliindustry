import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { howItWorksData } from '../../data/howItWorksData';

export default function HowItWorksDetail() {
  const router = useRouter();
  const { type } = router.query;
  const [openFaq, setOpenFaq] = useState(null);
  const [eyebrowOpen, setEyebrowOpen] = useState(false);
  const eyebrowRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (eyebrowRef.current && !eyebrowRef.current.contains(event.target)) {
        setEyebrowOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  }, [type]); // Re-run when switching between Brands/Suppliers/Teams

  if (!type || !howItWorksData[type]) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0E0E0C', color: '#fff' }}>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.1em' }}>LOADING DOCUMENTATION...</p>
      </div>
    );
  }

  const data = howItWorksData[type];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>{`For ${type.charAt(0).toUpperCase() + type.slice(1)} — ZALI Industries`}</title>
      </Head>

      <Navbar />

      <main className="hiw-page">
        <section className="page-hero reveal">
          <div className="container">
            <div className="page-hero-eyebrow">
               <span>HOW IT WORKS</span>
               <div className="eyebrow-dropdown" ref={eyebrowRef}>
                  <div className="eyebrow-dropdown-trigger" onClick={() => setEyebrowOpen(!eyebrowOpen)}>
                    / For {type.charAt(0).toUpperCase() + type.slice(1)} 
                    <span style={{ fontSize: '10px', marginLeft: '6px', opacity: 0.5 }}>▼</span>
                  </div>
                  <div className={`eyebrow-menu ${eyebrowOpen ? 'open' : ''}`}>
                    <Link href="/how-it-works/brands" className={`eyebrow-item ${type === 'brands' ? 'active' : ''}`}>For Brands</Link>
                    <Link href="/how-it-works/suppliers" className={`eyebrow-item ${type === 'suppliers' ? 'active' : ''}`}>For Suppliers</Link>
                    <Link href="/how-it-works/teams" className={`eyebrow-item ${type === 'teams' ? 'active' : ''}`}>For Teams</Link>
                  </div>
               </div>
            </div>
            <h1>{data.heroTitle}</h1>
            <p>{data.heroDesc}</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="hiw-intro">
              <div>
                <p className="section-label">{data.introLabel}</p>
                <h2 className="section-title">{data.introTitle}</h2>
                {data.introParagraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary, #6B6B68)', marginBottom: i === 0 && data.introList ? '16px' : '20px' }}>
                    {p}
                  </p>
                ))}
                
                {data.introList && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
                    {data.introList.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: 'var(--text-secondary, #6B6B68)' }}>
                        <span style={{ color: 'var(--black, #000)', fontWeight: 700, flexShrink: 0 }}>—</span>
                        {item.replace('— ', '')}
                      </div>
                    ))}
                  </div>
                )}
                
                {data.minOrderInfo && (
                  <div style={{ marginTop: '24px' }}>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text-secondary, #6B6B68)', marginBottom: '14px' }}>
                      {data.minOrderInfo.label}
                    </p>
                    <p style={{ fontSize: '32px', fontFamily: "'Bebas Neue', sans-serif", color: 'var(--black, #000)' }}>
                      {data.minOrderInfo.title}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary, #6B6B68)', marginTop: '6px' }}>
                      {data.minOrderInfo.desc}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="hiw-sidebar">
                <div className="hiw-cta-box">
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: '12px' }}>
                    {data.sidebar.eyebrow}
                  </p>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: '#fff', lineHeight: 1, marginBottom: '16px' }}>
                    {data.sidebar.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)', marginBottom: '24px', lineHeight: 1.7 }}>
                    {data.sidebar.desc}
                  </p>
                  <Link href={data.sidebar.btnLink} className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                    {data.sidebar.btnText}
                  </Link>
                </div>
              </div>
            </div>

            <p className="section-label" style={type === 'teams' ? { marginTop: '64px' } : {}}>{data.processLabel}</p>
            <h2 className="section-title">{data.processTitle}</h2>
            <div style={{ maxWidth: '680px', marginTop: '36px' }}>
              {data.steps.map((step, i) => (
                <div key={i} className={`step-block reveal delay-${i+1}`}>
                  <div className="step-num">{step.num}</div>
                  <div>
                    <div className="step-title">{step.title}</div>
                    <p className="step-body">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.hasMoq && (
          <section className="section reveal" style={{ background: 'var(--off-white, #F6F6F4)' }}>
            <div className="container">
              <p className="section-label">{data.moqLabel}</p>
              <h2 className="section-title">{data.moqTitle}</h2>
              <p className="section-sub">{data.moqSub}</p>
              <table className="moq-table">
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Minimum</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {data.moqTable.map((row, i) => (
                    <tr key={i}>
                      <td>{row.stage}</td>
                      <td>{row.min}</td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {data.hasFaq && (
          <section className="section reveal">
            <div className="container">
              <p className="section-label">{data.faqLabel}</p>
              <h2 className="section-title">{data.faqTitle}</h2>
              <div style={{ maxWidth: '680px', marginTop: '36px' }}>
                {data.faqs.map((faq, i) => (
                  <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                    <div className="faq-q" onClick={() => toggleFaq(i)}>
                      {faq.q}
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-a">
                      <div className="faq-a-inner">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
