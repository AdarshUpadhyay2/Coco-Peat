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
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productName } = useParams();
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const navigate = useNavigate();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    if (productName) {
      // Normalize product name by replacing hyphens with spaces and converting to lowercase
      const normalizedProductName = productName
        .replace(/-/g, " ")
        .toLowerCase();

      const foundProduct = productData.find(
        (pro) => pro.name.toLowerCase() === normalizedProductName // Match by normalized product name
      );
      setProd(foundProduct);
    }
  }, [productName]);

  useEffect(() => {
    if (selectedSubcategory) {
      const foundProduct = productData.find(
        (pro) => pro.name.toLowerCase() === selectedSubcategory.toLowerCase()
      );
      setProd(foundProduct);
      if (foundProduct) {
        const productUrlName = foundProduct.name
          .replace(/\s+/g, "-")
          .toLowerCase();
        navigate(`/product/${productUrlName}`); // Navigate using only the product name
      }
    }
  }, [selectedSubcategory]);

  return (
    <>
      <Hero2 product={prod} />
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="flex flex-col items-center justify-center container mx-auto py-36 lg:flex-row lg:items-start md:py-24">
          <Categories onSelectSubcategory={setSelectedSubcategory} />

          {prod ? (
            <div className="w-full md:w-2/3 flex flex-col pl-6">
              {prod.id < 19 && <ProductImage product={prod} />}

              <div className="w-full pt-6">
                {prod.description && <ProductDescription product={prod} />}
                {prod.specifications && prod.specifications.length > 0 && (
                  <ProductSpecification product={prod} />
                )}
                {prod.suitableFor && prod.suitableFor.length > 0 && (
                  <ProductSuitableFor product={prod} />
                )}
                {prod.advantages && prod.advantages.length > 0 && (
                  <ProductAdvantages product={prod} />
                )}
                {prod.types && prod.types.length > 0 && (
                  <ProductTypes product={prod} />
                )}
                {prod.benefits && prod.benefits.length > 0 && (
                  <ProductBenefits product={prod} />
                )}
                {prod.application && prod.application.length > 0 && (
                  <ProductApplication product={prod} />
                )}
                {prod.delivery && prod.delivery.length > 0 && (
                  <ProductDelivery product={prod} />
                )}
              </div>
            </div>
          ) : (
            <div className="w-full md:w-2/3 flex items-center justify-center">
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
