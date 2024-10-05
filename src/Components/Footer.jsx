import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./Contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-footerGreen sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 lg:grid-cols-6 gap-x-10">
          <div className="flex flex-col items-center md:col-span-2 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28"
              src="https://topazinfotech.in/koreagro/images/koreinternationallogo.png"
              alt="Company Logo"
            />
            <p className="text-base leading-relaxed text-white mt-7 text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ul className="flex items-center space-x-4 mt-9 justify-center">
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-white text-2xl hover:text-blue-600 transition-all duration-200"></i>
                </a>
              </li>
              {/* Twitter */}
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-white text-2xl hover:text-blue-400 transition-all duration-200"></i>
                </a>
              </li>
              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-white text-2xl hover:text-pink-600 transition-all duration-200"></i>
                </a>
              </li>
              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-white text-2xl hover:text-blue-700 transition-all duration-200"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section with Icons */}
          <div>
            <p className="text-xl font-bold text-white">Address</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-base text-white">
                <i className="fas fa-map-marker-alt mr-4"></i>
                Paldi, Ahmedabad, India, 380007
              </li>
              <li className="flex items-center text-base text-white">
                <i className="fas fa-phone-alt mr-4"></i>
                +0123456789
              </li>
              <li className="flex items-center text-base text-white">
                <i className="fas fa-envelope mr-4"></i>
                info@example.com
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <p className="text-xl font-bold text-white">Company</p>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/about"
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/application/1"
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600"
                >
                  Application
                </Link>
              </li>
              <li>
                <Link
                  to="/product/19"
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <ContactUs />
        </div>

        {/* All Rights Reserved Section */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-base text-white">
            All rights reserved &copy; {currentYear} KoreAgro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
