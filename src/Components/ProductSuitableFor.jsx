import React from "react";

const ProductSuitableFor = ({ product }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2 text-green-600">
        Suitable For:
      </h3>
      <ul className="list-none space-y-4">
        {" "}
        {/* Use space-y-4 for spacing */}
        {product.suitableFor.map((item, index) => (
          <li key={index} className="flex items-center">
            {" "}
            {/* Flexbox for alignment */}
            <img
              src="/coconut-tree.png" // Path to your bullet image
              alt="Bullet"
              className="w-4 h-4 mr-2" // Adjust width and height as needed
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSuitableFor;
