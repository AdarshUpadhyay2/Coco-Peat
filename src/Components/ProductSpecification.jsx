import React from "react";

const ProductSpecification = ({ product }) => {
  return (
    <div className="mt-8 bg-gradient-to-br from-green-50 to-green-100 shadow-xl rounded-xl overflow-hidden border border-green-200">
      <div className="bg-gradient-to-r from-green-600 to-green-500 py-4 px-6">
        <h3 className="text-3xl font-bold text-black tracking-wide">
          Specifications
        </h3>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-footerGreen text-white text-green-800 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left rounded-tl-lg">Property</th>
                <th className="py-3 px-6 text-left rounded-tr-lg">Value</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {product.specifications.map((spec, index) => (
                <tr
                  key={index}
                  className={`hover:bg-green-100 transition-colors duration-300 ease-in-out ${
                    index % 2 === 0
                      ? "bg-white bg-opacity-60"
                      : "bg-headerGreen bg-opacity-60"
                  }`}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium text-green-700">
                        {spec.property}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span className="text-green-800 py-1 px-3 rounded-full text-xs">
                        {spec.value}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
