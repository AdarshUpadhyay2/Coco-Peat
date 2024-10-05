import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isSmallHeaderVisible, setSmallHeaderVisible] = useState(true);
  const [isApplicationsDropdownOpen, setApplicationsDropdownOpen] =
    useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the screen width is less than 1024 pixels
      if (screen.width < 1024) {
        setSmallHeaderVisible(false);
      } else if (window.scrollY > 50) {
        setSmallHeaderVisible(false);
      } else {
        setSmallHeaderVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll once to set the initial state
    handleScroll();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run this effect once on mount

  const handleMouseEnter = (dropdownSetter, otherDropdownSetter) => {
    clearTimeout(hoverTimeout);
    dropdownSetter(true);
    otherDropdownSetter(false);
  };

  const handleMouseLeaveWithDelay = (dropdownSetter) => {
    const timeout = setTimeout(() => {
      dropdownSetter(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prev) => !prev);
  };

  const slugify = (name) => name.toLowerCase().replace(/ /g, "-");

  return (
    <>
      {/* Small Header */}
      <div
        className={`bg-headerGreen border-solid border-[1.5px] border-footerGreen text-footerGreen py-1 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out border-b ${
          isSmallHeaderVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        {/* Address and Email Section */}
        <div className="flex space-x-16 items-center text-sm">
          {/* Address Icon */}
          <div className="flex items-center text-sm font-normal">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Paldi, Ahmedabad, India, 380007
          </div>
          {/* Email Icon */}
          <div className="flex items-center text-sm font-normal">
            <i className="fas fa-envelope mr-2"></i>
            tech@koreagro.com
          </div>
        </div>
        {/* Social Media Section */}
        <div className="flex space-x-6 items-center text-sm">
          <span className="font-normal">Follow Us:</span>
          <ul className="flex items-center space-x-6 mt-0">
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footerGreen text-lg transition-all duration-200 hover:text-[#1877F2]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            {/* Twitter */}
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footerGreen text-lg transition-all duration-200 hover:text-[#1DA1F2]"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footerGreen text-lg transition-all duration-200 hover:text-[#E1306C]"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footerGreen text-lg transition-all duration-200 hover:text-[#0077B5]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-headerGreen fixed border-solid border-[1.5px] border-footerGreen left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isSmallHeaderVisible ? "top-[35px]" : "top-0"
        }`}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[80px]">
            <div className="flex items-center flex-shrink-0 ml-1 lg:ml-0">
              <Link to="/" title="" className="inline-flex">
                <span className="sr-only">Company logo</span>
                <img
                  className="w-auto h-12"
                  src="https://topazinfotech.in/koreagro/images/koreinternationallogo.png"
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:ml-16 xl:ml-24 lg:space-x-8">
              {/* Home */}
              <Link
                to="/"
                className="text-base font-medium text-footerGreen transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Home
              </Link>
              {/* About Us */}
              <Link
                to="/about"
                className="text-base font-medium text-footerGreen transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                About Us
              </Link>

              {/* Applications Dropdown */}
              <div
                className="relative"
                onMouseEnter={() =>
                  handleMouseEnter(
                    setApplicationsDropdownOpen,
                    setProductsDropdownOpen
                  )
                }
                onMouseLeave={() =>
                  handleMouseLeaveWithDelay(setApplicationsDropdownOpen)
                }
              >
                <button className="text-base font-medium text-footerGreen transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex items-center">
                  Applications{" "}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`ml-1 transition-transform duration-200 ${
                      isApplicationsDropdownOpen
                        ? "rotate-180 font-bold"
                        : "font-normal"
                    }`}
                  />
                </button>
                <div
                  className={`absolute bg-green w-52 rounded-lg shadow-lg py-2 transform transition-all duration-700 ease-in-out ${
                    isApplicationsDropdownOpen
                      ? "opacity-100 translate-y-[30px]"
                      : "opacity-0 translate-y-0 pointer-events-none"
                  }`}
                >
                  {[
                    "Substrate Manufacturing",
                    "Greenhouse Cultivation",
                    "Seed Germination",
                    "Hobby Gardening",
                    "Soil Erosion Control",
                    "Upholstery and Insulation",
                    "Natural Plant Protection",
                  ].map((item, index) => (
                    <React.Fragment key={index}>
                      <Link
                        to={`/application/${slugify(item)}`}
                        className="block px-4 py-2 text-sm text-white hover:bg-hoverGreen hover:text-footerGreen"
                      >
                        {item}
                      </Link>
                      {index < 6 && (
                        <div className="border-t border-gray-300 mx-2" />
                      )}{" "}
                      {/* Separator */}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() =>
                  handleMouseEnter(
                    setProductsDropdownOpen,
                    setApplicationsDropdownOpen
                  )
                }
                onMouseLeave={() =>
                  handleMouseLeaveWithDelay(setProductsDropdownOpen)
                }
              >
                <button className="text-base font-medium text-footerGreen transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex items-center">
                  Products{" "}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`ml-1 transition-transform duration-200 ${
                      isProductsDropdownOpen
                        ? "rotate-180 font-bold"
                        : "font-normal"
                    }`}
                  />
                </button>
                <div
                  className={`absolute bg-green w-52 rounded-lg shadow-lg py-2 transform transition-all duration-700 ease-in-out ${
                    isProductsDropdownOpen
                      ? "opacity-100 translate-y-[30px]"
                      : "opacity-0 translate-y-0 pointer-events-none"
                  }`}
                >
                  {[
                    "Coco Substrates",
                    "Coir Fiber",
                    "Erosion Control",
                    "Garden Articles",
                    "Growbags",
                    "Plant Protection",
                  ].map((item, index) => (
                    <React.Fragment key={index}>
                      <Link
                        to={`/product/${slugify(item)}`}
                        className="block px-4 py-2 text-sm text-white hover:bg-hoverGreen hover:text-footerGreen"
                      >
                        {item}
                      </Link>
                      {index < 5 && (
                        <div className="border-t border-gray-300 mx-2" />
                      )}{" "}
                      {/* Separator */}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="text-base font-medium text-footerGreen transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Contact Us
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleHamburgerMenu}
                className="text-footerGreen focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Items */}
        {isHamburgerMenuOpen && (
          <div className="lg:hidden bg-green py-4 px-4 transition-transform transform duration-500 ease-in-out">
            <Link
              to="/"
              className="block py-2 text-white"
              onClick={() => setHamburgerMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-white"
              onClick={() => setHamburgerMenuOpen(false)}
            >
              About Us
            </Link>
            <div>
              <button
                className="flex justify-between items-center w-full py-2 text-white"
                onClick={() => setApplicationsDropdownOpen((prev) => !prev)}
              >
                Applications
                <BsChevronDown
                  className={`transition-transform duration-200 ${
                    isApplicationsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isApplicationsDropdownOpen && (
                <div className="pl-4">
                  {[
                    "Substrate Manufacturing",
                    "Greenhouse Cultivation",
                    "Seed Germination",
                    "Hobby Gardening",
                    "Soil Erosion Control",
                    "Upholstery and Insulation",
                    "Natural Plant Protection",
                  ].map((item, index) => (
                    <Link
                      to={`/application/${slugify(item)}`}
                      className="block py-1 text-white"
                      key={index}
                      onClick={() => setHamburgerMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                className="flex justify-between items-center w-full py-2 text-white"
                onClick={() => setProductsDropdownOpen((prev) => !prev)}
              >
                Products
                <BsChevronDown
                  className={`transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsDropdownOpen && (
                <div className="pl-4">
                  {[
                    "Coco Substrates",
                    "Coir Fiber",
                    "Erosion Control",
                    "Garden Articles",
                    "Growbags",
                    "Plant Protection",
                  ].map((item, index) => (
                    <Link
                      to={`/product/${slugify(item)}`}
                      className="block py-1 text-white"
                      key={index}
                      onClick={() => setHamburgerMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="block py-2 text-white"
              onClick={() => setHamburgerMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
