import React from "react";

const ProductDescription = ({ product }) => {
  return (
<<<<<<< HEAD
    <div className="px-5">
=======
    <>
>>>>>>> 71665aae09b76c508e59036e4f3408f1663aacf5
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
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> 71665aae09b76c508e59036e4f3408f1663aacf5
  );
};

export default ProductDescription;
