import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="/terms" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              We are a professional logistics company offering services like household shifting, packing, loading, unloading, and unpacking. We ensure safe and timely delivery of your goods.
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm">
          <p>&copy; 2025 Logistics Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
