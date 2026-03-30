import { useState } from 'react';
import Link from 'next/link';
import { FaPencilRuler, FaCheckCircle, FaIndustry, FaShippingFast, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    { title: "Send Your Design", icon: <FaPencilRuler />, desc: "Submit your tech packs or visual concepts." },
    { title: "Mockup & Sample", icon: <FaCheckCircle />, desc: "We create digital mockups and a physical sample for approval." },
    { title: "Production Starts", icon: <FaIndustry />, desc: "Mass production in our high-tech facilities." },
    { title: "Worldwide Delivery", icon: <FaShippingFast />, desc: "Fast and secure shipping to your doorstep." }
  ];

  const CUSTOM = ["Premium Fabrics", "Stitching Patterns", "Custom Labels & Tags", "Customized Packaging"];
  const PRINTING = ["Sublimation", "DTF (Direct to Film)", "DTG (Direct to Garment)", "Screen Printing", "Technical Embroidery"];

  const FABRICS = [
    { name: 'Chiffon Fabric', image: '/Fabrics/Chiffon Fabric.jpg', description: 'Lightweight and shear, perfect for delicate performance pieces.' },
    { name: 'Linen Fabric', image: '/Fabrics/Linen fabric.jpg', description: 'Highly breathable and moisture-wicking natural fiber.' },
    { name: 'Silk Fabric', image: '/Fabrics/Silk fabric.jpg', description: 'Luxury meets performance with unmatched smoothness.' },
    { name: 'Valvet Fabric', image: '/Fabrics/Valvet Fabric.jpg', description: 'Premium plush texture for elite lifestyle wear.' },
    { name: 'Wool Fabric', image: '/Fabrics/Wool fabric.jpg', description: 'Natural temperature regulation for all-weather comfort.' },
  ];

  const handlePrev = () => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setActiveStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));

  return (
    <section className="process-section container">
      {/* 1. Production Process (Stepper) */}
      <h2 className="section-title">Production Process</h2>
      
      {/* Desktop Stepper (Visible 1024px and up) */}
      <div className="stepper-container desktop-only">
        {STEPS.map((step, idx) => (
          <div key={idx} className="step-card">
            <div className="step-num-bubble">{idx + 1}</div>
            <div className="step-icon-box">{step.icon}</div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-desc">{step.desc}</p>
            {idx < STEPS.length - 1 && <div className="step-line" />}
          </div>
        ))}
      </div>

      {/* Mobile Stepper View (Hidden above 1024px) */}
      <div className="mobile-stepper-view">
         <div className="mobile-step-navigation">
            <button 
                onClick={handlePrev} 
                className={`nav-arrow ${activeStep === 0 ? 'disabled' : ''}`}
                disabled={activeStep === 0}
            >
                <FaChevronLeft />
            </button>
            
            <div className="active-step-content">
                <div className="step-num-bubble">{activeStep + 1}</div>
                <div className="step-icon-box">{STEPS[activeStep].icon}</div>
                <h4 className="step-title">{STEPS[activeStep].title}</h4>
                <p className="step-desc">{STEPS[activeStep].desc}</p>
            </div>

            <button 
                onClick={handleNext} 
                className={`nav-arrow ${activeStep === STEPS.length - 1 ? 'disabled' : ''}`}
                disabled={activeStep === STEPS.length - 1}
            >
                <FaChevronRight />
            </button>
         </div>
         <div className="step-dots">
            {STEPS.map((_, i) => (
                <div key={i} className={`dot ${i === activeStep ? 'active' : ''}`} />
            ))}
         </div>
      </div>

      <div className="specs-row">
        {/* 2. Custom Manufacturing */}
        <div className="spec-col">
          <h2 className="section-title" style={{ padding: '2rem 0' }}>Customization</h2>
          <div className="spec-list-card">
            {CUSTOM.map((item, idx) => (
              <div key={idx} className="spec-tag">
                <FaCheckCircle className="spec-check" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Printing Methods */}
        <div className="spec-col">
          <h2 className="section-title" style={{ padding: '2rem 0' }}>Printing Tech</h2>
          <div className="spec-list-card">
            {PRINTING.map((item, idx) => (
              <div key={idx} className="spec-tag">
                <FaCheckCircle className="spec-check" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Fabric Engineering (Live Data) */}
      <div className="fabric-placeholder-section">
          <Link href="/fabrics" className="section-link">
            <h2 className="section-title hover-link" style={{ padding: '2rem 0' }}>Fabric Engineering</h2>
          </Link>
          <div className="fabric-grid-mini">
              {FABRICS.slice(0, 4).map((f) => (
                <Link key={f.name} href="/fabrics" className="fabric-mini-card-link">
                  <div className="fabric-mini-card">
                      <div className="f-mini-img">
                          <img src={f.image} alt={f.name} />
                      </div>
                      <div className="f-mini-info">
                          <h5>{f.name}</h5>
                          <p>{f.description}</p>
                      </div>
                  </div>
                </Link>
              ))}
          </div>
      </div>
    </section>
  );
}
