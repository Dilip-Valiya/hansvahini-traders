import { useEffect, useRef, useState } from "react";
import { Sliders, Layers, Package } from "react-feather";

const roofSpecs = [
  { label: "Infill Material", value: "PUR/PIR & Rockwool Panel" },
  {
    label: "Outer & Inner Skin Sheet",
    value: "PPGI, PPGL, BGL, Stainless Steel, Aluminium, Craft Paper",
  },
  { label: "Skin Thickness", value: "0.30 mm to 0.80 mm" },
  { label: "Effective Width", value: "1000 mm" },
  { label: "Overall Width", value: "1075 mm" },
  { label: "Length", value: "2 meters to 16 meters (customizable)" },
  {
    label: "Panel Thickness",
    value: "40, 50, 60, 80, 100, 120, 150, 200 mm available",
  },
];

const wallSpecs = [
  {
    label: "Infill Material",
    value: "PUR/PIR & Rockwool Panels with tongue and groove joints",
  },
  {
    label: "Density",
    value: "PUR 40 ± 2 kg/m³ and PIR 40 ± 2 kg/m³ (as per requirement)",
  },
  {
    label: "Outer & Inner Skin Sheet",
    value: "PPGI, PPGL, BGL, Stainless Steel, Aluminium, Craft Paper",
  },
  { label: "Skin Thickness", value: "0.30 mm to 0.80 mm" },
  { label: "Sheet Profile", value: "Baby Rib, Plain" },
  {
    label: "Length",
    value: "2 meters to 16 meters (also customized length available)",
  },
  { label: "Covered Width", value: "1118 mm" },
  {
    label: "Panel Thickness",
    value: "50, 60, 80, 100, 120, 150, 200 mm available",
  },
];

export default function Specifications() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"roof" | "wall">("roof");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const specs = activeTab === "roof" ? roofSpecs : wallSpecs;

  return (
    <section
      id="specifications"
      ref={ref}
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Specifications
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            PUF Panel{" "}
            <span className="text-primary">Specifications & Dimensions</span>
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto text-lg">
            Technical specifications for our roof and wall sandwich PUF panels —
            available in a wide range of thicknesses and customizable lengths.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex justify-center mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-md border border-gray-100">
            <button
              onClick={() => setActiveTab("roof")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "roof"
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "text-secondary-light hover:text-secondary"
              }`}
            >
              <Layers size={18} />
              Roof Sandwich Panel
            </button>
            <button
              onClick={() => setActiveTab("wall")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "wall"
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "text-secondary-light hover:text-secondary"
              }`}
            >
              <Package size={18} />
              Wall Sandwich Panel
            </button>
          </div>
        </div>

        {/* Specs table */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Table header */}
            <div className="bg-linear-to-r from-primary to-primary-dark px-6 py-4 flex items-center gap-3">
              <Sliders size={22} className="text-white" />
              <h3 className="text-lg font-bold text-white">
                {activeTab === "roof"
                  ? "Roof Sandwich Panel Specifications"
                  : "Wall Sandwich Panel Specifications"}
              </h3>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {specs.map((spec, i) => (
                <div
                  key={`${activeTab}-${i}`}
                  className="flex flex-col sm:flex-row group hover:bg-primary/3 transition-colors"
                >
                  <div className="sm:w-2/5 px-6 py-4 bg-gray-50/70 group-hover:bg-primary/5 transition-colors">
                    <span className="text-secondary font-semibold text-sm">
                      {spec.label}
                    </span>
                  </div>
                  <div className="sm:w-3/5 px-6 py-4">
                    <span className="text-secondary-light text-sm leading-relaxed">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-secondary-light text-sm mt-6">
            * Custom dimensions and specifications available on request.{" "}
            <a
              href="#contact"
              className="text-primary font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            for tailored solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
