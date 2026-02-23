import {
  CloudSnow,
  Grid,
  Star,
  BookOpen,
  Activity,
  Feather,
  Shield,
  Zap,
  Archive,
  Home,
  Briefcase,
  Server,
  Send,
  Droplet,
  Coffee,
  Box,
} from "react-feather";
import { useEffect, useRef, useState } from "react";

const bulletApps = [
  { icon: CloudSnow, label: "Cold Room / Storage" },
  { icon: Grid, label: "Pre Engineered Building" },
  { icon: Star, label: "Clean Rooms" },
  { icon: BookOpen, label: "School / College" },
  { icon: Activity, label: "Hospital & Health Care Centres" },
  { icon: Feather, label: "Agriculture & Horticulture" },
  { icon: Shield, label: "Defense" },
  { icon: Zap, label: "Power Industries" },
  { icon: Archive, label: "Warehouse" },
  { icon: Home, label: "Prefab Skybee-house" },
  { icon: Briefcase, label: "Site Office" },
  { icon: Server, label: "Industrial Enclosure & Control Rooms" },
  { icon: Send, label: "Aircraft Hangars" },
  { icon: Droplet, label: "Oil & Gas" },
  { icon: Coffee, label: "Meat Processing" },
  { icon: Box, label: "Commercial Building" },
];

const cardApps = [
  {
    image: "/applications/cold-storage-refrigeration.jpg",
    title: "Cold Storage & Refrigeration",
    desc: "High-performance insulated panels for temperature-controlled environments, ensuring optimal cold chain management.",
  },
  {
    image: "/applications/dairy-food-processing.jpg",
    title: "Dairy & Food Processing",
    desc: "Hygienic, food-safe panel solutions for dairy plants and food processing facilities with superior thermal retention.",
  },
  {
    image: "/applications/cleanrooms-laboratories.jpg",
    title: "Cleanrooms & Laboratories",
    desc: "Precision-engineered panels for contamination-free environments meeting stringent cleanroom standards.",
  },
  {
    image: "/applications/agricultural-buildings.jpg",
    title: "Agricultural Buildings",
    desc: "Durable insulated structures for crop storage, poultry farms, and agricultural produce preservation.",
  },
  {
    image: "/applications/new-construction.jpg",
    title: "New Construction & PEB",
    desc: "Lightweight, strong sandwich panels for pre-engineered buildings, warehouses, and modern commercial structures.",
  },
  {
    image: "/applications/porta-cabin.jpg",
    title: "Porta Cabin & Prefab",
    desc: "Quick-assembly insulated cabins for site offices, temporary shelters, and modular prefabricated buildings.",
  },
];

export default function Applications() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="applications" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Applications
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            Applications of{" "}
            <span className="text-primary">PU/PIR & Rockwool</span> Panels
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto text-lg">
            Our insulated panel solutions serve a wide range of industries and
            applications across India.
          </p>
        </div>

        {/* Bullet-point grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {bulletApps.map((app, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-xl px-4 py-3.5 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <app.icon
                size={20}
                className="text-primary shrink-0 group-hover:scale-110 transition-transform"
              />
              <span className="text-secondary text-sm font-medium leading-tight">
                {app.label}
              </span>
            </div>
          ))}
        </div>

        {/* Application cards with images */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary">
            Featured <span className="text-primary">Applications</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardApps.map((app, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="relative h-44 md:h-52 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {app.title}
                </h4>
                <p className="text-secondary-light text-sm leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
