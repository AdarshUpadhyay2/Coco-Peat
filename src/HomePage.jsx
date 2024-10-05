import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Features from "./Components/Features";
import MapSection from "./Components/MapSection";
import ContactUs from "./Components/Contact";
import Footer from "./Components/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Products />
      <Features />
      <MapSection />
      <Footer />
    </div>
  );
};

export default HomePage;
