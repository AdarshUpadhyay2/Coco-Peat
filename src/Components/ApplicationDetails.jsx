import React, { useState, useEffect } from "react";
import applicationData from "./ApplicationFile";
import ProductDescription from "./ProductDescription";
import ProductSuitableFor from "./ProductSuitableFor";
import ProductBenefits from "./ProductBenefits";
import Hero2 from "./Hero2";
import Products from "./Products";
import { useNavigate, useParams } from "react-router-dom";

const ApplicationDetails = () => {
  const { applicationName } = useParams();
  const navigate = useNavigate();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    // Normalize product name by replacing hyphens with spaces and converting to lowercase
    const normalizedApplicationName = applicationName
      .replace(/-/g, " ")
      .toLowerCase();

    const foundProduct = applicationData.find(
      (pro) => pro.name.toLowerCase() === normalizedApplicationName // Match by normalized product name
    );
    setProd(foundProduct);
  }, [applicationName]);

  useEffect(() => {
    if (prod) {
      const applicationUrlName = prod.name.replace(/\s+/g, "-").toLowerCase();
      navigate(`/application/${applicationUrlName}`);
    }
  }, [prod]);

  return (
    <>
      <Hero2 product={prod} />
      <section className="flex flex-col items-center text-gray-700 body-font overflow-hidden">
        {prod ? (
          <div className="w-11/12 flex flex-col pl-6">
            <div className="w-full pt-6">
              {prod.description && <ProductDescription product={prod} />}
              {prod.suitableFor && prod.suitableFor.length > 0 && (
                <ProductSuitableFor product={prod} />
              )}
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
      <Products cat={prod.category} />
    </>
  );
};

export default ApplicationDetails;
