import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slides from "./Slides.jsx";

const Hero2 = ({ product }) => {
  // Get slides for the selected category or use default slides
  const selectedSlides = (product && slides[product]) || slides["Coco Disks"]; // Default to Coco Peat

  return (
    <div className="container-fluid p-0 mb-5">
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        showStatus={true}
        showThumbs={false}
        interval={5000}
        swipeable={true}
        className="h-full"
      >
        {selectedSlides.map((slide, index) => (
          <div className="relative" key={index}>
            <img
              className="w-full h-[80vh] object-cover"
              src={slide.imgSrc}
              alt={slide.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-5 animate-slideInDown">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero2;
