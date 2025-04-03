import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/new Logo.png"; // Converted to WebP for better performance

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  // Throttle scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Mobile menu handling
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setIsDropdownOpen(false);
  }, []);

  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !mobileMenuRef.current?.contains(event.target) &&
        !mobileMenuButtonRef.current?.contains(event.target)
      ) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, closeAllMenus]);

  // Active link style
  const isActiveLink = (path) => 
    location.pathname === path ? "text-blue-600 before:w-full" : "";

  // Services data for DRY principle
  const services = [
    { name: "Household Shifting", path: "/services/householdshifting" },
    { name: "Packing And Moving", path: "/services/packingandmoving" },
    { name: "Car Shifting", path: "/services/carshifting" },
    { name: "Bike Shifting", path: "/services/bikeshifting" },
    { name: "Loading And Unloading", path: "/services/loadingandunloading" },
    { name: "More Services", path: "/services" }
  ];

  return (
    <>
      {/* Backdrop overlay with fade-in animation */}
      <div
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 md:hidden" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeAllMenus}
      />

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo with enhanced hover effect */}
            <Link
              to="/"
              className="group flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Logo}
                alt="SafeShift Logo"
                className="h-12 sm:h-14 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="flex space-x-6 lg:space-x-8">
                <NavLink to="/" label="Home" isActive={isActiveLink("/")} />
                
                {/* Services Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className={`nav-link ${isActiveLink("/services")} group`}>
                    Services
                    <ChevronIcon isOpen={isDropdownOpen} />
                  </button>

                  <div className={`absolute top-full left-0 mt-2 w-56 origin-top rounded-xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 ${
                    isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}>
                    <div className="py-2">
                      {services.map((service, index) => (
                        <DropdownLink
                          key={index}
                          to={service.path}
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </DropdownLink>
                      ))}
                    </div>
                  </div>
                </div>

                <NavLink to="/booking" label="Booking" isActive={isActiveLink("/booking")} />
                <NavLink to="/contact" label="Contact" isActive={isActiveLink("/contact")} />
              </div>

              {/* Phone Button with animated ring */}
              <a
                href="tel:+18917340255"
                className="ml-4 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FaPhoneAlt className="text-sm shrink-0" />
                <span className="text-sm font-semibold whitespace-nowrap">
                  +91 891-734-0255
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide-in animation */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed top-16 sm:top-20 right-0 w-64 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] bg-white shadow-xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-4 pt-4 pb-8 h-full flex flex-col">
            <MobileNavLink to="/" onClick={closeAllMenus}>Home</MobileNavLink>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:text-blue-600"
              >
                <span className="font-medium">Services</span>
                <ChevronIcon isOpen={isDropdownOpen} className="text-gray-400" />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? "max-h-96" : "max-h-0"
              }`}>
                {services.map((service, index) => (
                  <MobileDropdownLink
                    key={index}
                    to={service.path}
                    onClick={closeAllMenus}
                  >
                    {service.name}
                  </MobileDropdownLink>
                ))}
              </div>
            </div>

            <MobileNavLink to="/booking" onClick={closeAllMenus}>Booking</MobileNavLink>
            <MobileNavLink to="/contact" onClick={closeAllMenus}>Contact</MobileNavLink>

            <a
              href="tel:+18917340255"
              className="mt-auto mx-2 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-colors"
              onClick={closeAllMenus}
            >
              <FaPhoneAlt className="text-sm" />
              <span className="text-sm font-semibold">Call Now</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

// Reusable components for better maintainability
const NavLink = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={`nav-link ${isActive}`}
  >
    {label}
  </Link>
);

const DropdownLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:pl-5 transition-all duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="px-3 py-3.5 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
  >
    {children}
  </Link>
);

const MobileDropdownLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block pl-6 pr-3 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
  >
    {children}
  </Link>
);

const ChevronIcon = ({ isOpen, className = "" }) => (
  <svg
    className={`ml-1.5 h-4 w-4 transition-transform ${className} ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = ({ isOpen }) => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {!isOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    )}
  </svg>
);

// Add this to your CSS or Tailwind config for underline animation
// .nav-link {
//   @apply relative px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-600;
// }

// .nav-link::before {
//   @apply content-[''] absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300;
// }

// .nav-link:hover::before {
//   @apply w-full;
// }

// .nav-link.text-blue-600::before {
//   @apply w-full;
// }

export default Navbar;