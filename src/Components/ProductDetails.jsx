import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import productData from "./ProductFile";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
import ProductAdvantages from "./ProductAdvantages";
import ProductSuitableFor from "./ProductSuitableFor";
import ProductTypes from "./ProductTypes";
import ProductBenefits from "./ProductBenefits";
import ProductApplication from "./ProductApplication";
import ProductDelivery from "./ProductDelivery";
import Hero2 from "./Hero2";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ productId }) => {
  // State to keep track of the selected subcategory and product
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const navigate = useNavigate();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    // Find the product based on the productId from the URL
    const foundProduct = productData.find(
      (pro) => pro.id === Number(productId)
    );
    setProd(foundProduct);
  }, [productId]);

  // Update product when the selected subcategory changes
  useEffect(() => {
    if (selectedSubcategory) {
      const foundProduct = productData.find(
        (pro) => pro.name.toLowerCase() === selectedSubcategory.toLowerCase()
      );
      setProd(foundProduct);
      if (foundProduct) {
        navigate(`/product/${foundProduct.id}`); // Update the URL with the new product ID
      }
    }
  }, [selectedSubcategory]);

  return (
    <>
      {/* Update Hero2 with product information or selected subcategory */}
      <Hero2 product={prod} />
      <section className=" text-gray-700 body-font overflow-hidden">
        <div className="container mx-auto flex py-24">
          {/* Categories Component */}
          <Categories onSelectSubcategory={setSelectedSubcategory} />

          {/* Product Image and Details */}
          {prod ? (
            <div className="w-2/3 flex flex-col pl-6">
              {/* Product Image */}
              {prod.id < 19 && <ProductImage product={prod} />}

              {/* Product Details */}
              <div className="w-full pt-6">
                {/* Product Description */}
                {prod.description && <ProductDescription product={prod} />}

                {/* Product Specifications */}
                {prod.specifications && prod.specifications.length > 0 && (
                  <ProductSpecification product={prod} />
                )}

                {/* Suitable For */}
                {prod.suitableFor && prod.suitableFor.length > 0 && (
                  <ProductSuitableFor product={prod} />
                )}

                {/* Advantages */}
                {prod.advantages && prod.advantages.length > 0 && (
                  <ProductAdvantages product={prod} />
                )}

                {/* Types */}
                {prod.types && prod.types.length > 0 && (
                  <ProductTypes product={prod} />
                )}

                {/* Benefits */}
                {prod.benefits && prod.benefits.length > 0 && (
                  <ProductBenefits product={prod} />
                )}

                {/* Application */}
                {prod.application && prod.application.length > 0 && (
                  <ProductApplication product={prod} />
                )}

                {/* Delivery */}
                {prod.delivery && prod.delivery.length > 0 && (
                  <ProductDelivery product={prod} />
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
        </div>
      </section>
      {prod && prod.id > 18 && <Products />}
    </>
  );
};

export default ProductDetails;
