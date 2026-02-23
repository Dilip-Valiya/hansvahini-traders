import { useEffect, useRef, useState } from "react";
import { Box, Users, Package, MapPin } from "react-feather";

const stats = [
  { icon: Box, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 300, suffix: "+", label: "Happy Clients" },
  { icon: Package, value: 50000, suffix: "+", label: "Panels Delivered" },
  { icon: MapPin, value: 15, suffix: "+", label: "States Served" },
];

function AnimatedCounter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [active, target]);

  const display =
    target >= 10000
      ? `${(count / 1000).toFixed(count >= target ? 0 : 0)}K`
      : count.toLocaleString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero/puf-3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary-dark/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Trusted PUF Panel <span className="text-primary">Manufacturer</span>{" "}
            in Numbers
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Our track record of excellence reflected through the trust of our
            valued partners and clients.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center group transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/15">
                <s.icon
                  size={28}
                  className="text-primary mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform md:[&]:w-9 md:[&]:h-9"
                />
                <div className="text-2xl md:text-4xl font-extrabold text-white mb-1 md:mb-2">
                  <AnimatedCounter
                    target={s.value}
                    suffix={s.suffix}
                    active={visible}
                  />
                </div>
                <p className="text-white/60 text-sm font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
