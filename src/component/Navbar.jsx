import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/Logo3.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (path) => (location.pathname === path ? "text-blue-600 font-semibold" : "");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdown when toggling mobile menu
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActiveLink("/")}`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className={`hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActiveLink("/services")}`}>
                  Services
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

                  </svg>
                </button>

                <div className={`absolute left-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                  <div className="py-1">
                    {[{ name: "Household Shifting", path: "/services/householdshifting" },
                    { name: "Packing And Moving", path: "/services/packingandmoving" },
                    { name: "Car Shifting", path: "/services/carshifting" },
                    { name: "Bike Shifting", path: "/services/bikeshifting" },
                    { name: "Loading And Unloading", path: "/services/loadingandunloading" },
                    { name: "More", path: "/services" }].map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/booking"
                className={`hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${isActiveLink("/booking")}`}
              >
                Booking
              </Link>

              <Link
                to="/contact"
                className={`hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${isActiveLink("/contact")}`}
              >
                Contact
              </Link>
            </div>

            {/* Phone Button Desktop */}
            <a
              href="tel:+18917340255"
              className="ml-4 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <FaPhoneAlt className="text-sm" />
              <span className="text-sm font-medium">+91 891-734-0255</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              ref={mobileMenuButtonRef}
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100 visible h-auto max-h-[calc(100vh-4rem)] overflow-y-auto"
            : "-translate-y-4 opacity-0 invisible h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Services
              <svg
                className={`h-5 w-5 transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`pl-4 mt-1 ${isDropdownOpen ? "block" : "hidden"}`}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                {[{ name: "Household Shifting", path: "/services/householdshifting" },
                { name: "Packing And Moving", path: "/services/packingandmoving" },
                { name: "Car Shifting", path: "/services/carshifting" },
                { name: "Bike Shifting", path: "/services/bikeshifting" },
                { name: "Loading And Unloading", path: "/services/loadingandunloading" },
                { name: "More", path: "/services" }].map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/booking"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Booking
          </Link>

          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>

          <a
            href="tel:+18917340255"
            className="mt-4 w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            <FaPhoneAlt className="text-sm" />
            <span className="text-sm font-medium">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;