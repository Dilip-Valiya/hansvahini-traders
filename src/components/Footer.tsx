import { Phone, MapPin, ArrowUp, Heart } from "react-feather";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "PUF Sandwich Panels", href: "#products" },
      { label: "Rockwool Panels", href: "#products" },
      { label: "Cold Room Doors", href: "#products" },
      { label: "Cold Room Construction", href: "#products" },
      { label: "Custom Solutions", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Our Process", href: "#process" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Quick Contact",
    links: [
      { label: "+91 98251 60955", href: "tel:+919825160955" },
      { label: "+91 98242 34142", href: "tel:+919824234142" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-secondary-dark text-white">
      {/* CTA Banner */}
      <div className="bg-linear-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/80">
              Get in touch today for a free consultation and quote.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:+919825160955"
              className="bg-white text-primary hover:bg-primary-light px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt="Hansvahini Cold"
                className="h-16 w-auto"
              />
              <div>
                <h4 className="text-2xl font-bold">Hansvahini Cold</h4>
                <span className="text-white/50 text-xs uppercase tracking-widest">
                  Partner of Skybee
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-5 max-w-sm">
              India's leading manufacturer and trader of fully automated
              continuous PU/PIR & Rockwool Sandwich PUF Panel Line. Delivering
              quality insulation solutions since over a decade.
            </p>
            <div className="flex items-start gap-2 text-white/50 text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Plot No. 486, Trapaj-Bhavnagar Highway, Near Bridge, At. Trapaj,
              Dist: Bhavnagar (Gujarat)
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold mb-5 relative">
                {col.title}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Hansvahini Cold. Made with{" "}
            <Heart size={13} className="text-red-400" fill="currentColor" /> in
            India.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-lg transition-all duration-200 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
