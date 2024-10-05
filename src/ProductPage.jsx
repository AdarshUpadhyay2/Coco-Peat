import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MapSection from "./Components/MapSection";
import ProductDetails from "./Components/ProductDetails";
const ProductPage = () => {
<<<<<<< HEAD
  return (
    <div>
      <Header />
      <ProductDetails />
=======
  const { productId } = useParams();
  return (
    <div>
      <Header />
      <ProductDetails productId={productId} />
>>>>>>> 71665aae09b76c508e59036e4f3408f1663aacf5
      <MapSection />
      <Footer />
    </div>
  );
};

export default ProductPage;
