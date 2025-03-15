import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown for services
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const location = useLocation();
  const dropdownRef = useRef(null); // Ref for dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine the active link
  const isActiveLink = (path) => location.pathname === path ? "text-blue-400" : "";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${location.pathname === "/" && !isScrolled
          ? "bg-transparent text-white"
          : "bg-gray-800 text-white shadow-lg"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 md:px-6">
        {/* Logo */}

        {/* <h2 className="text-xl md:text-2xl font-bold text-white">
          Bronyx Packers
        </h2> */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-white">
          Bronyx Packers
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="/"
              className={`text-lg py-2 px-4 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out ${isActiveLink("/")}`}
            >
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span
              className={`block text-lg py-2 px-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300 ease-in-out ${isActiveLink("/services")}`}
            >
              Services
            </span>
            {/* Services Dropdown */}
            <ul className={`absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg rounded-md overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}>
              {[
                { name: "Household Shifting", path: "/services/household-shifting" },
                { name: "Packing", path: "/services/packing" },
                { name: "Loading", path: "/services/loading" },
                { name: "Unloading", path: "/services/unloading" },
                { name: "Unpacking", path: "/services/unpacking" },
                { name: "More", path: "/services" }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="block px-4 py-2 hover:bg-gray-600 transition duration-300 ease-in-out"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              to="/booking"
              className={`text-lg py-2 px-4 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out ${isActiveLink("/booking")}`}
            >
              Booking
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`text-lg py-2 px-4 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out ${isActiveLink("/contact")}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Phone Call Button */}
        <a
          href="tel:+18917340255"
          className="hidden md:flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 md:px-4 py-2 rounded-full transition duration-300 ease-in-out text-sm md:text-base"
        >
          <FaPhoneAlt className="text-lg md:text-xl" />
          <span className="hidden md:inline font-semibold">+91 891-734-0255</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 md:hidden">
          <ul>
            <li>
              <Link
                to="/"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>

            {/* Services Dropdown for Mobile */}
            <li className="relative group">
              <button
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                Services
              </button>
              <ul className="bg-gray-700 text-white shadow-lg rounded-md pl-4 group-hover:block hidden">
                {[
                  { name: "Household Shifting", path: "/services/household-shifting" },
                  { name: "Packing", path: "/services/packing" },
                  { name: "Loading", path: "/services/loading" },
                  { name: "Unloading", path: "/services/unloading" },
                  { name: "Unpacking", path: "/services/unpacking" },
                  { name: "More", path: "/services" }
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="block px-4 py-2 hover:bg-gray-600 transition duration-300 ease-in-out"
                      onClick={toggleMobileMenu}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Phone Button */}
            <li>
              <a
                href="tel:+18917340255"
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                <FaPhoneAlt className="inline-block mr-2" />
                +91 891-734-0255
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
