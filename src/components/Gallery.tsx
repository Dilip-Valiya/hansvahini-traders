import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "react-feather";

const gridImages = [
  { src: "/hero/puf-2.jpg", caption: "PUF Panel Production Line" },
  { src: "/hero/puf-3.jpg", caption: "Automated Manufacturing Facility" },
  { src: "/hero/puf-4.jpg", caption: "Sandwich Panel Assembly" },
  { src: "/hero/puf-5.jpg", caption: "Quality Testing Process" },
  { src: "/hero/puf-6.jpg", caption: "Finished PUF Panels" },
  { src: "/hero/puf-7.jpg", caption: "Rockwool Panel Stack" },
  { src: "/hero/puf-8.jpg", caption: "Cold Room Installation" },
  { src: "/hero/hero-1.jpg", caption: "Cold Room Interior" },
  { src: "/hero/hero-2.jpg", caption: "Insulated Door System" },
];

const carouselImages = [
  { src: "/hero/puf-2.jpg", caption: "PUF Panel Production Line" },
  { src: "/hero/puf-3.jpg", caption: "Automated Manufacturing Facility" },
  { src: "/hero/puf-4.jpg", caption: "Sandwich Panel Assembly" },
  { src: "/hero/puf-5.jpg", caption: "Quality Testing Process" },
  { src: "/hero/puf-6.jpg", caption: "Finished PUF Panels" },
  { src: "/hero/puf-7.jpg", caption: "Rockwool Panel Stack" },
  { src: "/hero/puf-8.jpg", caption: "Cold Room Installation" },
  {
    src: "/carousel/Insulated-Puf-Roof-Panel.jpg",
    caption: "Insulated PUF Roof Panel",
  },
  { src: "/carousel/Puf-Panels.jpg", caption: "PUF Panels" },
  {
    src: "/carousel/Puf-Sandwich-Roof-Panel.webp",
    caption: "PUF Sandwich Roof Panel",
  },
  {
    src: "/carousel/Technical-Specifications-PUF-Panel.webp",
    caption: "Technical Specifications",
  },
  {
    src: "/carousel/Wall-Puf-Panel-60mm_2.jpg",
    caption: "Wall PUF Panel 60mm",
  },
  { src: "/carousel/images.jpeg", caption: "PUF Panel Application" },
  {
    src: "/carousel/industrial-foams-pvt-ltd--puf-insulated-roof-and-wall-panel-3a7.webp",
    caption: "Insulated Roof & Wall Panel",
  },
  { src: "/carousel/industrial-foams.webp", caption: "Industrial Foams Panel" },
  {
    src: "/carousel/insulated-puf-panel-roofing-sheet.jpg",
    caption: "PUF Panel Roofing Sheet",
  },
  { src: "/carousel/puf-panel.jpg", caption: "PUF Panel" },
  { src: "/carousel/puf-panels-250x250.webp", caption: "PUF Panels Closeup" },
  {
    src: "/carousel/puf-sandwich-panel-250x250.webp",
    caption: "PUF Sandwich Panel",
  },
  {
    src: "/carousel/sandwich-panels-60mm.webp",
    caption: "Sandwich Panels 60mm",
  },
  { src: "/carousel/2-500x500.webp", caption: "PUF Panel Detail" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [lightboxSource, setLightboxSource] = useState<"grid" | "carousel">(
    "grid",
  );

  // Carousel state
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  const activeLightboxImages =
    lightboxSource === "grid" ? gridImages : carouselImages;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((lightbox + 1) % activeLightboxImages.length);
      if (e.key === "ArrowLeft")
        setLightbox(
          (lightbox - 1 + activeLightboxImages.length) %
            activeLightboxImages.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, activeLightboxImages.length]);

  // Auto-scroll carousel
  const nextSlide = useCallback(() => {
    setCarouselIdx((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCarouselIdx(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Scroll carousel container to keep active slide visible
  useEffect(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const activeEl = container.children[carouselIdx] as HTMLElement;
    if (activeEl) {
      const scrollLeft =
        activeEl.offsetLeft -
        container.offsetWidth / 2 +
        activeEl.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [carouselIdx]);

  const openLightbox = (idx: number, source: "grid" | "carousel") => {
    setLightboxSource(source);
    setLightbox(idx);
  };

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            PUF Panel & Cold Storage{" "}
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto text-lg">
            A glimpse of our manufacturing facility, products, and completed
            projects.
          </p>
        </div>

        {/* === Image Carousel === */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6 text-center">
            Product <span className="text-primary">Showcase</span>
          </h3>

          <div className="relative group/carousel">
            {/* Prev / Next buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-secondary shadow-lg rounded-full p-2 md:p-3 -translate-x-1/2 md:translate-x-0 md:left-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-secondary shadow-lg rounded-full p-2 md:p-3 translate-x-1/2 md:translate-x-0 md:right-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollable track */}
            <div
              ref={carouselRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchMove={(e) => {
                touchEndX.current = e.touches[0].clientX;
              }}
              onTouchEnd={() => {
                const diff = touchStartX.current - touchEndX.current;
                if (Math.abs(diff) > 50) {
                  if (diff > 0) nextSlide();
                  else prevSlide();
                }
              }}
            >
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className={`shrink-0 w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-center cursor-pointer rounded-xl overflow-hidden transition-all duration-500 ${
                    i === carouselIdx
                      ? "ring-2 ring-primary shadow-xl scale-[1.02]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => openLightbox(i, "carousel")}
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-xs md:text-sm font-medium">
                        {img.caption}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === carouselIdx
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* === Masonry Grid === */}
        <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6 text-center">
          Project <span className="text-primary">Gallery</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gridImages.map((img, i) => (
            <div
              key={i}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                i === 0 || i === 5 ? "row-span-2" : ""
              } transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => openLightbox(i, "grid")}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  i === 0 || i === 5
                    ? "h-full min-h-48 md:min-h-75"
                    : "h-40 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <span className="text-white font-medium text-xs md:text-sm">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + activeLightboxImages.length) %
                  activeLightboxImages.length,
              );
            }}
          >
            <ChevronLeft size={30} />
          </button>
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % activeLightboxImages.length);
            }}
          >
            <ChevronRight size={30} />
          </button>
          <div
            className="max-w-5xl w-full max-h-[85vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeLightboxImages[lightbox].src}
              alt={activeLightboxImages[lightbox].caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white/80 text-center mt-3 md:mt-4 text-sm md:text-lg">
              {activeLightboxImages[lightbox].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
