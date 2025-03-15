import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State for detecting scroll
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for services dropdown
  const location = useLocation(); // Get current route
  const dropdownRef = useRef(null); // Reference for dropdown menu
  const menuRef = useRef(null); // Reference for mobile menu

  // Handle scroll event to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Change navbar background on scroll past 50px
      setIsScrolled(scrollPosition > 50);
    };

    // Attach event listener for scrolling
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Close menu and dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu and dropdown if clicked outside
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close mobile menu
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside); // Cleanup
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true); // Open dropdown on hover
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false); // Close dropdown when mouse leaves
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        location.pathname === "/" && !isScrolled
          ? "bg-transparent text-white"
          : "bg-gray-800 text-white shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h2 className="text-xl md:text-2xl font-bold">Bronyx Packers</h2>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Full-Screen Mobile Menu */}
        <ul
          ref={menuRef}
          className={`fixed top-0 left-0 w-full h-screen bg-gray-800 text-white z-50 flex flex-col justify-center items-center space-y-6 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:h-auto md:w-auto md:bg-transparent md:flex-row md:space-y-0 md:space-x-8 md:translate-x-0`}
        >
          <li>
            <Link
              to="/"
              className="text-lg py-2 px-4 hover:bg-gray-700 rounded transition"
              onClick={() => setIsOpen(false)} // Close mobile menu on click
            >
              Home
            </Link>
          </li>

          {/* Services Dropdown - Open on hover */}
          <li
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleDropdownMouseEnter} // Open dropdown on hover
            onMouseLeave={handleDropdownMouseLeave} // Close dropdown when mouse leaves
          >
            <span className="block text-lg py-2 px-4 hover:bg-gray-700 rounded transition cursor-pointer">
              Services
            </span>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg rounded-md overflow-hidden">
                {[
                  { name: "Household Shifting", path: "/services/household-shifting" },
                  { name: "Packing", path: "/services/packing" },
                  { name: "Loading", path: "/services/loading" },
                  { name: "Unloading", path: "/services/unloading" },
                  { name: "Unpacking", path: "/services/unpacking" },
                  { name: "More", path: "/services" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={() => setIsOpen(false)} // Close mobile menu when clicking
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/booking"
              className="text-lg py-2 px-4 hover:bg-gray-700 rounded transition"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Booking
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-lg py-2 px-4 hover:bg-gray-700 rounded transition"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Phone Call Button */}
        <a
          href="tel:+18917340255"
          className="hidden md:flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 md:px-4 py-2 rounded-full transition text-sm md:text-base"
        >
          <FaPhoneAlt className="text-lg md:text-xl" />
          <span className="hidden md:inline font-semibold">+91 891-734-0255</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
