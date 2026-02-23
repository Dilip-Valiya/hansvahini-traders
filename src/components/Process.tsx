import { Clipboard, Settings, Filter, Truck, Tool } from "react-feather";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Clipboard,
    step: "01",
    title: "Consultation",
    desc: "Understanding your requirements, space constraints, and application needs for tailored solutions.",
  },
  {
    icon: Filter,
    step: "02",
    title: "Design & Engineering",
    desc: "Our engineers design custom panel specifications with optimal insulation thickness and material selection.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Manufacturing",
    desc: "Fully automated continuous production ensures precision, consistency, and high output quality.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Delivery & Logistics",
    desc: "Carefully packed and shipped with our reliable logistics network for timely delivery across India.",
  },
  {
    icon: Tool,
    step: "05",
    title: "Installation & Support",
    desc: "Expert team for site installation guidance and ongoing after-sales technical support.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            Our PUF Panel{" "}
            <span className="text-primary">Manufacturing Process</span>
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto text-lg">
            From initial consultation to final installation, we ensure a
            seamless experience at every step.
          </p>
        </div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`relative text-center transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    {s.step}
                  </div>
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <s.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-secondary-light text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
