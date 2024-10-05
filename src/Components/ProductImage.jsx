import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};

// Destructure `images` prop from the parent component
const ProductImage = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 max-h-80 overflow-hidden mb-6">
        <Slider {...carouselSettings}>
          {product.images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                alt={`Product image ${index + 1}`}
                className="w-80 h-80 object-cover rounded border border-gray-200 mx-auto"
                src={image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImage;
