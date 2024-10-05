import React, { useState } from "react";
import categoriesData from "./CategoriesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faChevronRight,
  faMinus,
  faPlus,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

// Single Category with Expandable Subcategories
const Category = ({
  categoryName,
  subcategories,
  isOpen,
  onToggle,
  onSelectSubcategory,
  onCategoryClick,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center cursor-pointer p-1 rounded hover:bg-green-200 transition duration-200">
        <span
          className="text-md font-medium text-black flex items-center"
          onClick={() => onCategoryClick(categoryName)}
        >
          <FontAwesomeIcon icon={faSeedling} className="mr-2" />
          {categoryName}
        </span>
        <button className="text-lg text-black" onClick={onToggle}>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </button>
      </div>

      {isOpen && (
        <ul className="ml-4 mt-1 space-y-1">
          {subcategories.map((sub, index) => (
            <React.Fragment key={index}>
              <li
                className="text-sm text-black cursor-pointer hover:underline flex items-center"
                onClick={() => onSelectSubcategory(sub)}
              >
                <FontAwesomeIcon icon={faLeaf} className="mr-2" />
                {sub}
              </li>
              {index < subcategories.length - 1 && (
                <div className="border-b border-gray-500 my-1"></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

// Categories List Component
const Categories = ({ onSelectSubcategory }) => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  const handleCategoryClick = (categoryName) => {
    onSelectSubcategory(categoryName);
  };

  return (
    <div className="w-1/4 rounded-lg shadow-md mb-8 h-full max-h-[600px] overflow-hidden border-4 border-green-800">
      <div className="bg-categoriesHeadingGreen p-4 rounded-t-lg">
        <h2 className="text-xl font-bold text-white flex items-center justify-center">
          {/* <FontAwesomeIcon icon={faLeaf} className="mr-2" /> */}
          Categories
        </h2>
      </div>
      <div className="bg-categoriesGreen p-3 overflow-y-auto max-h-[calc(600px-2.5rem)]">
        <ul className="space-y-2">
          {categoriesData.map((category, index) => (
            <React.Fragment key={index}>
              <li>
                <Category
                  categoryName={category.name}
                  subcategories={category.subcategories}
                  isOpen={openCategoryIndex === index}
                  onToggle={() => toggleCategory(index)}
                  onSelectSubcategory={onSelectSubcategory}
                  onCategoryClick={handleCategoryClick}
                />
              </li>
              {index < categoriesData.length - 1 && (
                <div className="border-t border-gray-700 my-2"></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
