import React, { useState, useEffect } from "react";
import applicationData from "./ApplicationFile";
import ProductDescription from "./ProductDescription";
import ProductSuitableFor from "./ProductSuitableFor";
import ProductBenefits from "./ProductBenefits";
import Hero2 from "./Hero2";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ applicationId }) => {
  // State to keep track of the selected subcategory and product
  const navigate = useNavigate();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    // Find the product based on the applicationId from the URL
    const foundProduct = applicationData.find(
      (pro) => pro.id === Number(applicationId)
    );
    setProd(foundProduct);
  }, [applicationId]);

  return (
    <>
      {/* Update Hero2 with product information or selected subcategory */}
      <Hero2 product={prod} />
      <section className=" flex flex-col items-center text-gray-700 body-font overflow-hidden">
        {/* Product Image and Details */}
        {prod ? (
          <div className="w-2/3 flex flex-col pl-6">
            {/* Product Details */}
            <div className="w-full pt-6">
              {/* Product Description */}
              {prod.description && <ProductDescription product={prod} />}

              {/* Suitable For */}
              {prod.suitableFor && prod.suitableFor.length > 0 && (
                <ProductSuitableFor product={prod} />
              )}

              {/* Benefits */}
              {prod.benefits && prod.benefits.length > 0 && (
                <ProductBenefits product={prod} />
              )}
            </div>
          </div>
        ) : (
          <div className="w-2/3 flex items-center justify-center">
            <p className="text-gray-500">
              Select a subcategory to view product details.
            </p>
          </div>
        )}
      </section>
      {prod && prod.id > 18 && <Products />}
    </>
  );
};

export default ProductDetails;
