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
          Hansvahini Cold | PUF Panel Manufacturer & Cold Room Solutions India
        </title>
        <meta
          name="description"
          content="Hansvahini Cold — India's leading manufacturer and trader of PU/PIR & Rockwool Sandwich PUF Panels. Premium cold rooms, insulated doors & panel solutions for food processing, pharma & logistics."
        />
        <meta
          name="keywords"
          content="PUF panels, PU panels, PIR panels, Rockwool sandwich panels, cold room manufacturer, insulated panels India, cold storage solutions, Hansvahini Cold, PUF panel manufacturer Gujarat, insulated doors, PUF panel in Bhavanagar, PUF Panel in Alang, PUF Panel in Gujarat, PUF Panel in India, PUF Panel dealers in Alang, Puf panel dealers in Bhavanagar, PUF Panel dealers in Gujarat, PUF Panel dealers in India, PUF Panel suppliers in Alang, PUF Panel suppliers in Bhavanagar, PUF Panel suppliers in Gujarat, PUF Panel suppliers in India, PUF Panel exporters in Alang, PUF Panel exporters in Bhavanagar, PUF Panel exporters in Gujarat, PUF Panel exporters in India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hansvahinicold.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hansvahini Cold | PUF Panel Manufacturer & Cold Room Solutions"
        />
        <meta
          property="og:description"
          content="India's leading manufacturer of PU/PIR & Rockwool Sandwich PUF Panels. Cold rooms, insulated doors & panel solutions."
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
          content="Hansvahini Cold | PUF Panel Manufacturer & Cold Room Solutions"
        />
        <meta
          name="twitter:description"
          content="India's leading manufacturer of PU/PIR & Rockwool Sandwich PUF Panels. Cold rooms, insulated doors & panel solutions."
        />
        <meta
          name="twitter:image"
          content="https://hansvahinicold.com/hero/hero-1.jpg"
        />
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
