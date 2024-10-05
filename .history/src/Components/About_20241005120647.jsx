import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full">
      {" "}
      {/* Container with background color */}
      <div className="px-10 py-10 md:px-28 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          {/* Image Section with border and animation */}
          <div
            className="lg:w-1/2 animate-fadeIn"
            style={{
              animationDelay: "0.1s",
              animation: "fadeIn 1.5s ease-in-out",
              visibility: "visible",
            }}
          >
            <div className="relative overflow-hidden border-[5.5px] border-borderGreen p-5 pr-0 rounded-3xl">
              {" "}
              {/* Add border and rounded corners */}
              <img
                className="w-full object-cover rounded-lg" // rounded corners on the image
                src="https://i.ibb.co/Gvhc9M6/main-About.png"
                alt="About Image"
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            className="lg:w-1/2 animate-fadeIn"
            style={{
              animationDelay: "0.5s",
              animation: "fadeIn 1.5s ease-in-out",
              visibility: "visible",
            }}
          >
            <h1 className="flex flex-col items-center text-3xl lg:text-5xl font-bold mb-6 text-titleGreen">
              About Us
            </h1>
            <p className="text-xl lg:text-2xl mb-6 text-textGreen font-semibold">
            We grow Quality, We harvest Trust.
            </p>
            <p className="mb-6 text-base text-[#555]">
              Welcome to Kore International, a trusted exporter of eco-friendly
              coco peat, coco fibers, fiber ropes, and premium gardening tools.
              With decades of experience, we are committed to providing
              high-quality products that meet the diverse needs of agriculture
              and horticulture.
            </p>
            <p className="mb-6 text-base text-[#555]">
              Through strong partnerships with well-trained farmers and
              sustainable sourcing practices, we ensure competitive pricing
              without compromising on quality.
            </p>
            <p className="mb-6 text-base text-[#555]">
              Customer satisfaction is at the heart of what we do. We offer
              reliable service, timely deliveries, and transparent communication
              to help you succeed.
            </p>
            <p className="mb-6 text-base text-[#555]">
              Together, let's cultivate a greener future.
            </p>
            <Link
              className="inline-block rounded-full bg-footerGreen text-white px-6 py-3 mt-4"
              to="/about"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
