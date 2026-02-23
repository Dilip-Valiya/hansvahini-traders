import { CheckCircle, Award, Truck, Shield } from "react-feather";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    icon: Award,
    title: "Industry Leading Quality",
    desc: "State-of-the-art manufacturing with rigorous quality control",
  },
  {
    icon: Shield,
    title: "Durable & Reliable",
    desc: "Products engineered for long-lasting performance",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    desc: "Seamless logistics across all major states",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero/hero-1.jpg"
                alt="Hansvahini Cold - PUF Panel Manufacturing"
                className="w-full h-64 md:h-96 lg:h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-primary rounded-lg p-3">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-lg">
                      10+ Years
                    </p>
                    <p className="text-secondary-light text-sm">
                      of Manufacturing Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight mb-6">
              India's Leading <span className="text-primary">PUF Panel</span>{" "}
              Manufacturer & Trader
            </h2>
            <p className="text-secondary-light leading-relaxed mb-4 text-lg">
              <strong className="text-secondary">Hansvahini Cold</strong>,
              operating under the banner of{" "}
              <strong className="text-secondary">Hansvahini Traders</strong>, is
              a trusted name in the manufacturing and trading of fully automated
              continuous PU/PIR & Rockwool Sandwich PUF Panel Line. Partnered
              with <strong className="text-secondary">Skybee</strong>, we
              deliver world-class insulated panel solutions.
            </p>
            <p className="text-secondary-light leading-relaxed mb-8">
              Located at Plot No. 486, Trapaj-Bhavnagar Highway, we specialize
              in PUF Panels, Insulated Doors, Cold Room construction, and
              advanced refrigeration machinery for industries spanning food
              processing, pharmaceuticals, logistics, and agriculture.
            </p>

            <div className="space-y-5 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="bg-primary/10 rounded-xl p-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <h.icon
                      size={22}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">{h.title}</h4>
                    <p className="text-secondary-light text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-primary/25"
              >
                Contact Us
              </a>
              <div className="flex items-center gap-2 text-sm text-secondary-light">
                <CheckCircle size={18} className="text-green-500" />
                ISO Certified Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
