import { useState, useEffect } from "react";
import { Menu, X, Phone } from "react-feather";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Applications", href: "#applications" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919825160955"
              className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
            >
              <Phone size={13} />
              +91 98251 60955
            </a>
            <a
              href="tel:+919824234142"
              className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
            >
              <Phone size={13} />
              +91 98242 34142
            </a>
          </div>
          <span className="text-primary-light text-xs tracking-wide">
            Trapaj-Bhavnagar Highway, Near Bridge, At. Trapaj, Dist: Bhavnagar
            (Gujarat)
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/logo.svg"
            alt="Hansvahini Cold Logo"
            className="h-10 md:h-16 w-auto"
          />
          <div className="flex flex-col">
            <span
              className={`text-lg md:text-2xl font-bold leading-tight tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              Hansvahini Cold
            </span>
            <span
              className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] ${
                scrolled ? "text-secondary-light" : "text-white/70"
              }`}
            >
              Partner of Skybee
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                scrolled ? "text-secondary" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919825160955"
            className="ml-4 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            <Phone size={15} />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-secondary" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-secondary hover:bg-primary-light hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919825160955"
            className="block mt-3 bg-primary text-white text-center px-4 py-3 rounded-lg font-semibold"
          >
            <Phone size={15} className="inline mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
