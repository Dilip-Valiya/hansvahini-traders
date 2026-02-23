import {
  Settings,
  Thermometer,
  Zap,
  Shield,
  Award,
  Tool,
  Headphones,
  TrendingUp,
} from "react-feather";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: Settings,
    title: "State-of-the-Art Facility",
    desc: "Fully automated continuous PUF panel production line ensuring consistent quality.",
  },
  {
    icon: Thermometer,
    title: "Superior Insulation",
    desc: "Industry-best thermal performance with advanced PU/PIR & Rockwool core technology.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Quick production cycles and timely delivery across India with our efficient logistics.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Every panel undergoes rigorous testing to meet international standards.",
  },
  {
    icon: Award,
    title: "Skybee Partnership",
    desc: "Backed by our partnership with Skybee for premium materials and global expertise.",
  },
  {
    icon: Tool,
    title: "Custom Solutions",
    desc: "Bespoke panel sizes, thicknesses, and configurations to match your exact requirements.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    desc: "Dedicated technical support team for installation guidance and maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    desc: "Best-in-class products at market-competitive rates without compromising quality.",
  },
];

export default function WhyChooseUs() {
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
    <section id="why-us" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            The <span className="text-primary">Hansvahini</span> Advantage
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto text-lg">
            With years of expertise and cutting-edge technology, we deliver
            insulated panel solutions that set industry benchmarks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-primary-dark rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <r.icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {r.title}
              </h3>
              <p className="text-secondary-light text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
