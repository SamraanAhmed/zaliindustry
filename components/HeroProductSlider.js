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
  const [isHovered, setIsHovered] = useState(false);
  const total = PANELS.length;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, total]);

  return (
    <div 
      className="expand-panels-root"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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

/* ─── Mobile / Tablet: Sleek Scroller ───────────────────── */
function MobileCarousel() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Initialize scroll position to allow immediate backward scrolling
  useEffect(() => {
    if (scrollRef.current && scrollRef.current.scrollLeft === 0) {
      // Start in the middle of the track (beginning of the second duplicate set)
      // This gives us an entire set of items to the left to scroll backwards into!
      scrollRef.current.scrollLeft = 1; 
    }
  }, []);

  const handleScrollBounds = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const halfWidth = scrollContainer.scrollWidth / 2;
    
    // If scrolled past halfway going right
    if (scrollContainer.scrollLeft >= halfWidth) {
      scrollContainer.scrollLeft -= halfWidth;
    } 
    // If scrolled all the way left (backward)
    else if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft += halfWidth;
    }
  };

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;
    
    const play = () => {
      if (!isDragging && scrollContainer) {
        scrollContainer.scrollLeft += 1;
        handleScrollBounds();
      }
      animationFrameId = requestAnimationFrame(play);
    };
    
    play();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    handleScrollBounds(); // Check bounds during drag
  };
  
  const onTouchStart = () => setIsDragging(true);
  const onTouchEnd = () => setIsDragging(false);

  return (
    <div 
      className="mob-scroller-wrap"
      ref={scrollRef}
      onScroll={handleScrollBounds} // Check bounds during native touch scroll
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div className="mob-scroller-track">
        <div className="mob-scroller">
          {PANELS.map((panel) => (
            <Link key={panel.id} href={panel.href} className="mob-scroller__slide" draggable="false" onClick={(e) => isDragging && e.preventDefault()}>
              <img src={panel.image} alt={panel.name} className="mob-scroller__img" draggable="false" />
              <div className="mob-scroller__overlay" />
              <div className="mob-scroller__info">
                <span className="mob-scroller__tag">{panel.tag}</span>
                <h3 className="mob-scroller__name">{panel.name}</h3>
                <span className="mob-scroller__cta">View Collection →</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mob-scroller duplicate" aria-hidden="true">
          {PANELS.map((panel) => (
            <Link key={`dup-${panel.id}`} href={panel.href} className="mob-scroller__slide" tabIndex="-1" draggable="false" onClick={(e) => isDragging && e.preventDefault()}>
              <img src={panel.image} alt={panel.name} className="mob-scroller__img" draggable="false" />
              <div className="mob-scroller__overlay" />
              <div className="mob-scroller__info">
                <span className="mob-scroller__tag">{panel.tag}</span>
                <h3 className="mob-scroller__name">{panel.name}</h3>
                <span className="mob-scroller__cta">View Collection →</span>
              </div>
            </Link>
          ))}
        </div>
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
