import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MapSection from "./Components/MapSection";
import ApplicationDetails from "./Components/ApplicationDetails";
import Products from "./Components/Products";
const ApplicationPage = () => {
  return (
    <div>
      <Header />
      <ApplicationDetails />
      <Products />
      <MapSection />
      <Footer />
    </div>
  );
};

export default ApplicationPage;
