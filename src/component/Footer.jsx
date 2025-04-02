import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTruck, FaBoxes, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import About from "../pages/About";

const Footer = () => {
  const linkVariants = {
    hover: {
      y: -2,
      color: "#93c5fd",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      y: -3,
      scale: 1.1,
      color: "#93c5fd",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 w-full border-t border-gray-700">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaTruck className="text-blue-400 text-2xl" />
              <span className="text-2xl font-bold text-white">LogiMove</span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional logistics solutions for your moving needs. We provide safe, efficient, and reliable transportation services nationwide.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center text-sm text-blue-400">
                <FaShieldAlt className="mr-2" />
                <span>Certified</span>
              </div>
              <div className="flex items-center text-sm text-blue-400">
                <FaBoxes className="mr-2" />
                <span>Insured</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-3">
              {['About','Home', 'Services', 'Pricing', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-700">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>123 Business Ave, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@logimove.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-700">Stay Connected</h4>
            <p className="text-sm mb-5">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, url: "https://facebook.com" },
                { icon: <FaTwitter />, url: "https://twitter.com" },
                { icon: <FaInstagram />, url: "https://instagram.com" },
                { icon: <FaLinkedin />, url: "https://linkedin.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white bg-gray-800 p-3 rounded-full"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LogiMove. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;