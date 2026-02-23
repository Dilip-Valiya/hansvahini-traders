import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Applications from "./components/Applications";
import Specifications from "./components/Specifications";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          PUF Panel Manufacturer in India | Cold Storage Solutions — Hansvahini
          Cold
        </title>
        <meta
          name="description"
          content="Hansvahini Cold — India's leading PUF panel manufacturer & cold storage solutions provider. PU/PIR & Rockwool sandwich panels, cold room construction, insulated doors. Factory in Gujarat, delivering pan-India."
        />
        <meta
          name="keywords"
          content="PUF panel, PUF panels, PUF panel manufacturer, PUF panel manufacturer in India, PUF panel manufacturer in Gujarat, cold storage, cold storage solutions, cold room manufacturer, cold room construction, PU panels, PIR panels, Rockwool sandwich panels, insulated panels India, cold storage manufacturer Gujarat, insulated doors, PUF panel Bhavnagar, PUF panel Alang, PUF panel Gujarat, PUF panel India, PUF panel dealers, PUF panel suppliers, PUF panel exporters, cold room panels, sandwich panel manufacturer, Hansvahini Cold, Hansvahini Traders, cold storage room, cold storage India, PUF insulation panels, industrial PUF panels, commercial cold storage"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hansvahinicold.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="PUF Panel Manufacturer in India | Cold Storage Solutions — Hansvahini Cold"
        />
        <meta
          property="og:description"
          content="India's leading manufacturer of PU/PIR & Rockwool Sandwich PUF Panels. Cold storage rooms, insulated doors & panel solutions."
        />
        <meta property="og:url" content="https://hansvahinicold.com/" />
        <meta property="og:site_name" content="Hansvahini Cold" />
        <meta
          property="og:image"
          content="https://hansvahinicold.com/hero/hero-1.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PUF Panel Manufacturer in India | Cold Storage Solutions — Hansvahini Cold"
        />
        <meta
          name="twitter:description"
          content="India's leading manufacturer of PU/PIR & Rockwool Sandwich PUF Panels. Cold storage rooms, insulated doors & panel solutions."
        />
        <meta
          name="twitter:image"
          content="https://hansvahinicold.com/hero/hero-1.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://hansvahinicold.com/#organization",
                name: "Hansvahini Cold",
                alternateName: "Hansvahini Traders",
                url: "https://hansvahinicold.com",
                logo: "https://hansvahinicold.com/logo.svg",
                image: "https://hansvahinicold.com/hero/hero-1.jpg",
                description:
                  "India's leading manufacturer and trader of PU/PIR & Rockwool Sandwich PUF Panels. Premium cold rooms, cold storage solutions, insulated doors & panel solutions.",
                telephone: ["+91-98251-60955", "+91-98242-34142"],
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Plot No. 486, Trapaj-Bhavnagar Highway, Near Bridge, At. Trapaj",
                  addressLocality: "Bhavnagar",
                  addressRegion: "Gujarat",
                  addressCountry: "IN",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
                sameAs: [],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://hansvahinicold.com/#localbusiness",
                name: "Hansvahini Cold",
                image: "https://hansvahinicold.com/hero/hero-1.jpg",
                url: "https://hansvahinicold.com",
                telephone: "+91-98251-60955",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Plot No. 486, Trapaj-Bhavnagar Highway, Near Bridge, At. Trapaj",
                  addressLocality: "Bhavnagar",
                  addressRegion: "Gujarat",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 21.4338,
                  longitude: 72.1108,
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://hansvahinicold.com/#website",
                url: "https://hansvahinicold.com",
                name: "Hansvahini Cold",
                publisher: {
                  "@id": "https://hansvahinicold.com/#organization",
                },
              },
              {
                "@type": "Product",
                name: "PUF Sandwich Panels",
                description:
                  "High-quality PU/PIR insulated sandwich panels for cold rooms, warehouses, clean rooms and industrial applications. Available in custom sizes and thicknesses.",
                brand: {
                  "@type": "Brand",
                  name: "Hansvahini Cold",
                },
                manufacturer: {
                  "@id": "https://hansvahinicold.com/#organization",
                },
                category: "PUF Panels",
                offers: {
                  "@type": "AggregateOffer",
                  url: "https://hansvahinicold.com/#products",
                  priceCurrency: "INR",
                  lowPrice: "1200",
                  highPrice: "3500",
                  offerCount: "10",
                  availability: "https://schema.org/InStock",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "120",
                  bestRating: "5",
                },
              },
              {
                "@type": "Product",
                name: "Cold Storage Room Solutions",
                description:
                  "Complete cold storage construction with PUF panel insulation. End-to-end cold room solutions for food processing, pharma, logistics and agriculture.",
                brand: {
                  "@type": "Brand",
                  name: "Hansvahini Cold",
                },
                manufacturer: {
                  "@id": "https://hansvahinicold.com/#organization",
                },
                category: "Cold Storage Solutions",
                offers: {
                  "@type": "AggregateOffer",
                  url: "https://hansvahinicold.com/#products",
                  priceCurrency: "INR",
                  lowPrice: "50000",
                  highPrice: "500000",
                  offerCount: "5",
                  availability: "https://schema.org/InStock",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "85",
                  bestRating: "5",
                },
              },
              {
                "@type": "Product",
                name: "Rockwool Sandwich Panels",
                description:
                  "Fire-resistant Rockwool insulated sandwich panels for industrial and commercial buildings. Superior fire resistance and acoustic insulation.",
                brand: {
                  "@type": "Brand",
                  name: "Hansvahini Cold",
                },
                manufacturer: {
                  "@id": "https://hansvahinicold.com/#organization",
                },
                category: "Rockwool Panels",
                offers: {
                  "@type": "AggregateOffer",
                  url: "https://hansvahinicold.com/#products",
                  priceCurrency: "INR",
                  lowPrice: "1500",
                  highPrice: "4000",
                  offerCount: "8",
                  availability: "https://schema.org/InStock",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.7",
                  reviewCount: "65",
                  bestRating: "5",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />
      <Hero />
      <About />
      <Products />
      <Applications />
      <WhyChooseUs />
      <Stats />
      <Process />
      <Gallery />
      <Specifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
