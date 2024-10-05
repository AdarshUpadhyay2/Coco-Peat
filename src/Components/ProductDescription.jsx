import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <>
      <h2 className="text-sm title-font text-green-600 tracking-widest">
        {product.brand}
      </h2>
      <h1 className="text-green-800 text-3xl title-font font-medium mb-1">
        {product.name}
      </h1>
      <p className="leading-relaxed text-justify mb-4 text-gray-600">
        {product.description}
      </p>
      <p className="leading-relaxed text-justify text-gray-600">
        {product.additionalInfo}
      </p>
    </>
  );
};

export default ProductDescription;
