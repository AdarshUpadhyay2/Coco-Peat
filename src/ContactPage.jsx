import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MapSection from "./Components/MapSection";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Hero3 from "./Components/Hero3";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Hero3 product={"Contact Us"} />
      <ContactUs />
      <MapSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
