import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  // Sample categories
  const categories = [
    "Coco Substrates",
    "Growbags",
    "Coir Fiber",
    "Garden Articles",
    "Erosion Control",
    "Plant Protection",
  ];

  // Sample products data
  const productData = [
    {
      id: 1,
      name: "Coco Substrate Custom Mix",
      price: 99.0,
      category: "Coco Substrates",
      image: "/img/Product/CocoSubstrates/CocoSubstrateCustomMix.png",
    },
    {
      id: 2,
      name: "Coco Substrate Fiber",
      price: 299.0,
      category: "Coco Substrates",
      image: "/img/Product/CocoSubstrates/CocoSubstrateFiber.png",
    },
    {
      id: 3,
      name: "Coco Substrate Husk Chip Mix",
      price: 299.0,
      category: "Coco Substrates",
      image: "/img/Product/CocoSubstrates/husk-chip-mix.png",
    },
    {
      id: 4,
      name: "Coco Substrate Fine or Coarse",
      price: 299.0,
      category: "Coco Substrates",
      image: "/img/Product/CocoSubstrates/cooc-fine-coarses.jpeg",
    },
    {
      id: 5,
      name: "Coco Substrates Buffered",
      price: 299.0,
      category: "Coco Substrates",
      image: "/img/Product/CocoSubstrates/CocoSubstratesBuffered.png",
    },
    {
      id: 6,
      name: "GrowBags Bar Type",
      price: 299.0,
      category: "Growbags",
      image: "/img/Product/GrowBags/BarType.png",
    },
    {
      id: 7,
      name: "Open Top GrowBags",
      price: 299.0,
      category: "Growbags",
      image: "/img/Product/GrowBags/OpenTop.png",
    },
    {
      id: 8,
      name: "Coir Fiber Bales",
      price: 299.0,
      category: "Coir Fiber",
      image: "/img/Product/CoirFiber/Bales.png",
    },
    {
      id: 9,
      name: "Coir Fiber Twisted Spool",
      price: 299.0,
      category: "Coir Fiber",
      image: "/img/Product/CoirFiber/TwistedSpool.png",
    },
    {
      id: 10,
      name: "Coco Basket",
      price: 299.0,
      category: "Garden Articles",
      image: "/img/Product/GardenArticles/CocoBasket.png",
    },
    {
      id: 11,
      name: "Coco Bricks",
      price: 299.0,
      category: "Garden Articles",
      image: "/img/Product/GardenArticles/CocoBricks.png",
    },
    {
      id: 12,
      name: "Coco Pot",
      price: 299.0,
      category: "Garden Articles",
      image: "/img/Product/GardenArticles/CocoPot.png",
    },
    {
      id: 13,
      name: "Coco Tabs or Disk",
      price: 299.0,
      category: "Garden Articles",
      image: "/img/Product/GardenArticles/CocoDisks.png",
    },
    {
      id: 14,
      name: "Growkit",
      price: 299.0,
      category: "Garden Articles",
      image: "/img/Product/GardenArticles/CocoGrowKit.webp",
    },
    {
      id: 15,
      name: "Coir Logs",
      price: 299.0,
      category: "Erosion Control",
      image: "/img/Product/ErosionControl/CoirLogs.png",
    },
    {
      id: 16,
      name: "Geo Textiles",
      price: 299.0,
      category: "Erosion Control",
      image: "/img/Product/ErosionControl/GeoTextiles.png",
    },
    {
      id: 17,
      name: "Neem Oil",
      price: 299.0,
      category: "Plant Protection",
      image: "/img/Product/PlantProtection/NeemOil.png",
    },
    {
      id: 18,
      name: "Neem Seed Powder",
      price: 299.0,
      category: "Plant Protection",
      image: "/img/Product/PlantProtection/NeemSeedPowder.png",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Coco Substrates");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const slugify = (name) => name.toLowerCase().replace(/ /g, "-");
  return (
    <section className="py-12 mx-auto sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-titleGreen lg:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-xl lg:text-2xl font-semibold leading-7 text-textGreen">
            Browse our latest items by category.
          </p>
        </div>

        {/* Category Filter */}
        <div className="text-center my-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-4 my-4 px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-footerGreen text-white"
                  : "bg-buttonGreen text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-9 mt-10 place-items-center lg:mt-16 lg:gap-6 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="absolute left-3 top-3">
                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                  New
                </p>
              </div>
              <div className="flex items-start justify-center mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <Link
                      to={`/product/${slugify(product.name)}`}
                      title={product.name}
                    >
                      {product.name}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
