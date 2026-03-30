"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HERO_SLIDES = [
  { name: "Velocity Strike Tee", image: "/Demo Img/Black.png" },
  { name: "Apex Runner Short", image: "/Demo Img/Gray.jpg" },
  { name: "ProTech Full-Zip Jacket", image: "/Demo Img/LightGray.png" },
];

export default function HeroProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cycles every 3 seconds automatically without buttons
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center animate-float slider-container">
      <div className="relative w-hero-slider h-hero-slider sm:w-hero-slider-sm sm:h-hero-slider-sm">
        {/* Soft shadow ring (cleaned from old neon classes) */}
        <div className="absolute inset-0 rounded-full bg-black-5 blur-3xl scale-90 shadow-ring" />
        
        {/* Image Mask */}
        <div className="absolute inset-4 rounded-32 overflow-hidden border-light bg-light-gray image-mask">
          {HERO_SLIDES.map((slide, index) => (
            <Image
              key={slide.name}
              src={slide.image}
              alt={slide.name}
              fill
              className={`object-cover transition-hero-slide ${
                index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Floating cards (Industrial Design) */}
        <div className="absolute -left-10 sm:-left-20 top-70 rounded-xl p-4 z-20 product-name-tag">
          <div className="flex items-center gap-2">
            <div className="relative h-4 overflow-hidden min-w-140">
              {HERO_SLIDES.map((slide, index) => (
                <p 
                  key={slide.name} 
                  className={`product-name-text text-black text-xs absolute top-0 left-0 w-full transition-text-slide ${
                    index === currentIndex ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
                  }`}
                >
                  {slide.name}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
