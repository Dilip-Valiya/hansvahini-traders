import { ArrowRight } from "react-feather";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    title: "PUF Sandwich Panels",
    desc: "High-density PU/PIR insulated sandwich panels for roofing, wall cladding, and cold storage. Superior thermal performance with fire-retardant options.",
    image: "/hero/puf-6.jpg",
    features: ["Thermal Insulation", "Fire Retardant", "Lightweight"],
  },
  {
    title: "Rockwool Panels",
    desc: "Mineral wool-based insulated panels offering excellent fire resistance and acoustic insulation for industrial and commercial buildings.",
    image: "/hero/puf-7.jpg",
    features: ["Fireproof", "Soundproof", "Non-combustible"],
  },
  {
    title: "Cold Room Doors",
    desc: "Precision-engineered insulated doors for cold rooms, freezer rooms, and controlled atmosphere stores with airtight sealing technology.",
    image: "/hero/hero-2.jpg",
    features: ["Airtight Seal", "Heavy Duty", "Custom Sizes"],
  },
  {
    title: "Cold Room Construction",
    desc: "Turnkey cold room solutions including design, fabrication, and installation of complete cold storage facilities for various industries.",
    image: "/hero/puf-8.jpg",
    features: ["Turnkey Solutions", "Custom Design", "Energy Efficient"],
  },
];

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            Premium <span className="text-primary">PUF Panel</span> Solutions
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto text-lg">
            Comprehensive range of insulated panel products designed for
            superior thermal performance, durability, and energy efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-48 md:h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-secondary-light text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((f, j) => (
                    <span
                      key={j}
                      className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Get Quote
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
