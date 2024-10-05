import React from "react";
import Header from "./Components/Header";
import Hero3 from "./Components/Hero3";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Hero3 product={"About Us"} />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutPage;
