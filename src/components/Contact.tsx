import { Phone, MapPin, Clock, MessageCircle } from "react-feather";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      { text: "+91 98251 60955", href: "tel:+919825160955" },
      { text: "+91 98242 34142", href: "tel:+919824234142" },
    ],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      {
        text: "Plot No. 486, Trapaj-Bhavnagar Highway, Near Bridge, At. Trapaj, Dist: Bhavnagar (Gujarat)",
        href: "#",
      },
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      { text: "Mon – Sat: 9:00 AM – 7:00 PM", href: "#" },
      { text: "Sunday: Closed", href: "#" },
    ],
  },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            Let's Build <span className="text-primary">Together</span>
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto text-lg">
            Get in touch for quotes, technical consultation, or any queries
            about our PUF panel solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Info + Map */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {contactInfo.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <c.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">{c.title}</h4>
                    {c.lines.map((l, j) => (
                      <a
                        key={j}
                        href={l.href}
                        className="block text-secondary-light text-sm hover:text-primary transition-colors leading-relaxed"
                      >
                        {l.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/919825160955?text=Hello%2C%20I%20am%20interested%20in%20your%20PUF%20Panel%20products."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-green-500/25 w-full"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 h-48 md:h-52">
              <iframe
                title="Hansvahini Cold Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1608.5524090897668!2d72.11076629702364!3d21.43380683224562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI2JzAyLjQiTiA3MsKwMDYnMzguNiJF!5e1!3m2!1sen!2sin!4v1771836872808!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
