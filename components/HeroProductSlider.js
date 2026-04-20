import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PANELS = [
  {
    id: 1,
    label: "01",
    name: "Velocity Strike Tee",
    tag: "T-SHIRTS",
    image: "/Demo Img/Black.png",
    href: "/products?category=t-shirts",
  },
  {
    id: 2,
    label: "02",
    name: "Apex Runner Short",
    tag: "SHORTS",
    image: "/Demo Img/Gray.jpg",
    href: "/products?category=shorts",
  },
  {
    id: 3,
    label: "03",
    name: "ProTech Full-Zip",
    tag: "SPORTSWEAR",
    image: "/Demo Img/LightGray.png",
    href: "/products?category=sportswear",
  },
  {
    id: 4,
    label: "04",
    name: "Strike Polo Red",
    tag: "SPORTSWEAR",
    image: "/Demo Img/Red.jpg",
    href: "/products?category=sportswear",
  },
  {
    id: 5,
    label: "05",
    name: "Core Fit Tee",
    tag: "T-SHIRTS",
    image: "/Demo Img/White.jpg",
    href: "/products?category=t-shirts",
  },
];

/* ─── Desktop: Expandable Accordion ─────────────────────── */
function DesktopAccordion() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="expand-panels-root">
      {PANELS.map((panel, i) => (
        <Link
          key={panel.id}
          href={panel.href}
          className={`expand-panel ${activeIndex === i ? "expand-panel--active" : ""}`}
          onMouseEnter={() => setActiveIndex(i)}
          aria-label={`View ${panel.name}`}
        >
          <div className="expand-panel__bg">
            <img src={panel.image} alt={panel.name} className="expand-panel__img" />
            <div className="expand-panel__overlay" />
          </div>
          <div className="expand-panel__content">
            <span className="expand-panel__tag">{panel.tag}</span>
            <h3 className="expand-panel__name">{panel.name}</h3>
            <span className="expand-panel__cta">
              View Collection <span className="expand-panel__arrow">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ─── Mobile / Tablet: Touch Carousel ───────────────────── */
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const timerRef = useRef(null);
  const total = PANELS.length;

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (idx) => {
    setCurrent((idx + total) % total);
    resetTimer();
  };

  /* ── Touch & Mouse Drag ── */
  const onDragStart = (clientX) => {
    setDragging(true);
    setDragStartX(clientX);
    setDragDelta(0);
    clearInterval(timerRef.current);
  };

  const onDragMove = (clientX) => {
    if (!dragging) return;
    setDragDelta(clientX - dragStartX);
  };

  const onDragEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta < -50) goTo(current + 1);
    else if (dragDelta > 50) goTo(current - 1);
    else resetTimer();
    setDragDelta(0);
  };

  return (
    <div className="mob-carousel">
      {/* Track */}
      <div
        className="mob-carousel__track-wrap"
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
        style={{ cursor: dragging ? "grabbing" : "grab" }}
      >
        <div
          className="mob-carousel__track"
          style={{
            transform: `translateX(calc(${-current * 100}% + ${dragDelta}px))`,
            transition: dragging ? "none" : "transform 0.55s cubic-bezier(0.77, 0, 0.175, 1)",
          }}
        >
          {PANELS.map((panel) => (
            <Link
              key={panel.id}
              href={panel.href}
              className="mob-carousel__slide"
              draggable={false}
              onClick={(e) => { if (Math.abs(dragDelta) > 5) e.preventDefault(); }}
            >
              <img src={panel.image} alt={panel.name} className="mob-carousel__img" draggable={false} />
              <div className="mob-carousel__overlay" />
              <div className="mob-carousel__info">
                <span className="mob-carousel__tag">{panel.tag}</span>
                <h3 className="mob-carousel__name">{panel.name}</h3>
                <span className="mob-carousel__cta">View Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        className="mob-carousel__arrow mob-carousel__arrow--prev"
        onClick={() => goTo(current - 1)}
        aria-label="Previous"
      >‹</button>
      <button
        className="mob-carousel__arrow mob-carousel__arrow--next"
        onClick={() => goTo(current + 1)}
        aria-label="Next"
      >›</button>

      {/* Dot indicators */}
      <div className="mob-carousel__dots">
        {PANELS.map((_, i) => (
          <button
            key={i}
            className={`mob-carousel__dot ${i === current ? "mob-carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Export: renders the right version per screen ──────── */
export default function HeroProductSlider() {
  return (
    <>
      {/* Desktop: accordion panels (hidden on ≤1024px via CSS) */}
      <div className="hero-slider--desktop">
        <DesktopAccordion />
      </div>

      {/* Tablet / Mobile: touch carousel (hidden on >1024px via CSS) */}
      <div className="hero-slider--mobile">
        <MobileCarousel />
      </div>
    </>
  );
}
