import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        showStatus={true}
        showThumbs={false}
        interval={5000}
        swipeable={true}
        className="h-full" // Set fixed height for the carousel
      >
        {/* Slide 1 */}
        <div className="relative">
          <img
            className="w-full h-[60vh] md:h-screen object-cover"
            src="https://static.wixstatic.com/media/399d64_f1abfda623394768ac3e2dbdd614612d~mv2.jpg/v1/fill/w_1480,h_988,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/399d64_f1abfda623394768ac3e2dbdd614612d~mv2.jpg"
            alt="Coco peat is good for Plants Growth"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              {" "}
              {/* Centered text */}
              <h1 className="text-white text-3xl md:text-6xl font-bold mb-10 animate-slideInDown">
              Coco Peat for Stronger, Greener Growth
              </h1>
              <div className="flex justify-center">
                <Link
                  to="/product/19"
                  className="btn bg-buttonGreen text-footerGreen font-semibold rounded-full py-4 px-8"
                >
                  Products
                </Link>
                <Link
                  to="/application/19"
                  className="btn bg-buttonOrange text-footerGreen font-semibold rounded-full py-4 px-8 ml-8"
                >
                  Application
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="w-full h-[60vh] md:h-screen object-cover"
            src="https://images.unsplash.com/photo-1627674362101-76a6d157c7d1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coco Peat is 100% Natural"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              {" "}
              {/* Centered text */}
              <h1 className="text-white text-3xl md:text-6xl font-bold mb-10 animate-slideInDown">
              Sustainable Farming Starts Here
              </h1>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="btn bg-buttonGreen text-footerGreen font-semibold rounded-full py-4 px-8"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="btn bg-buttonOrange text-footerGreen font-semibold rounded-full py-4 px-8 ml-8"
                >
                  Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
