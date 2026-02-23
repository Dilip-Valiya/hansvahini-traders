import { ArrowRight, ChevronLeft, ChevronRight } from "react-feather";
import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    image: "/hero/hero-1.jpg",
    title: "Hansvahini Cold",
    subtitle:
      "Your trusted partner for world-class PUF panel & cold room solutions",
  },
  {
    image: "/hero/hero-2.jpg",
    title: "Quality Manufacturing",
    subtitle:
      "State-of-the-art facility producing premium insulated panels & doors",
  },
  {
    image: "/hero/hero-3.jpg",
    title: "Complete Cold Storage",
    subtitle:
      "End-to-end cold room construction with cutting-edge insulation technology",
  },
  {
    image: "/hero/puf-2.jpg",
    title: "India's Leading Manufacturer",
    subtitle:
      "Fully Automated Continuous PU/PIR & Rockwool Sandwich PUF Panel Line",
  },
  {
    image: "/hero/puf-3.jpg",
    title: "Premium PUF Panels",
    subtitle:
      "High-quality insulated panels for cold rooms, warehouses & industrial applications",
  },
  {
    image: "/hero/puf-4.jpg",
    title: "Cold Room Solutions",
    subtitle:
      "Complete cold storage solutions with world-class insulation technology",
  },
  {
    image: "/hero/puf-5.jpg",
    title: "Trusted by Industries",
    subtitle:
      "Serving food processing, pharma, logistics & agricultural sectors across India",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section
      id="home"
      className="relative h-[90vh] md:h-screen min-h-125 md:min-h-150 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-secondary-dark/90 via-secondary-dark/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary-light text-sm font-medium">
                Partner of Skybee
              </span>
            </div>

            <h1
              key={`title-${current}`}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 md:mb-4 animate-fade-in-up"
            >
              {slides[current].title}
              <span className="block text-primary mt-1 md:mt-2">& Traders</span>
            </h1>

            <p
              key={`sub-${current}`}
              className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[current].subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 md:px-7 md:py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 group"
              >
                Explore Products
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-5 py-3 md:px-7 md:py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows — hidden on mobile to avoid overlap */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 border border-white/10 items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 border border-white/10 items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots + mobile arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        <button
          onClick={prev}
          className="md:hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-10 h-3 bg-primary"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <button
          onClick={next}
          className="md:hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent z-20" />
    </section>
  );
}
