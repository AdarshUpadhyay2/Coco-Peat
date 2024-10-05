import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MapSection from "./Components/MapSection";
import ProductDetails from "./Components/ProductDetails";
const ProductPage = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
      <MapSection />
      <Footer />
    </div>
  );
};

export default ProductPage;
