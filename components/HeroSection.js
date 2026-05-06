import Link from "next/link";
import HeroProductSlider from "./HeroProductSlider";
import GradientText from "./GradientText";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-white" />

      <div className="hero-layout-container">
        {/* Left: Text */}
        <div className="hero-text-content animate-fade-up">
          <h1 className="hero-tagline">
            <GradientText colors={["#000000", "#777777", "#000000"]} animationSpeed={5} className="hero-gradient-text">
              Built by<br />
              <em>Engineers,</em><br />
              Not Marketers.
            </GradientText>
          </h1>

          <p className="hero-description">
            Premium athletic wear built for athletes who refuse to settle. Every piece engineered to elevate your performance.
          </p>

          <div className="hero-actions">
            <Link
              href="/products"
              className="btn-primary-hero"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="btn-secondary-hero"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Right: Hero Product Slider */}
        <div className="hero-slider-wrapper">
          <HeroProductSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
