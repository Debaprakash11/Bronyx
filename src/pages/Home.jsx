import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaTruckMoving,
  FaBoxes,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import Services from "./Services";
import Booking from "./Booking";
import Contact from "./Contact";
import WelcomeSection from "./WelcomeSection";
import OurProcess from "./OurProcess";
import FeaturedAssociations from "./FeaturedAssociations";
import OperationalCities from "./OperationalCities";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-[70vh] md:h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/80 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/moving-truck.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div
          className="text-white max-w-4xl relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white drop-shadow-lg">BRONYX</span>
              <br />
              <span className="text-yellow-300 text-3xl sm:text-4xl font-medium">PACKERS & MOVERS</span>
            </h1>
          </motion.div>

          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Trusted relocation services with a commitment to excellence. We make your move seamless, safe, and stress-free.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/booking")}
              className="px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all flex items-center justify-center"
            >
              <FaTruckMoving className="inline-block mr-2" /> Get Your Free Quote
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              <FaPhoneAlt className="inline-block mr-2" /> Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Scrolling indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-8 h-8 border-r-2 border-b-2 border-white rotate-45"></div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 text-2xl mr-2" />
              <span className="text-gray-800 font-medium">4.9/5 (1200+ Reviews)</span>
            </div>
            <div className="flex items-center">
              <FaTruckMoving className="text-blue-600 text-2xl mr-2" />
              <span className="text-gray-800 font-medium">5000+ Successful Moves</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-2" />
              <span className="text-gray-800 font-medium">Serving 25+ Cities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Why Choose <span className="text-blue-600">Bronyx Packers?</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaTruckMoving className="text-blue-600 text-4xl mb-4" />,
                title: "Fast & Efficient",
                text: "Timely transportation with GPS-tracked vehicles",
                color: "bg-blue-100"
              },
              {
                icon: <FaBoxes className="text-blue-600 text-4xl mb-4" />,
                title: "Secure Packing",
                text: "Professional materials and techniques for all items",
                color: "bg-yellow-100"
              },
              {
                icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />,
                title: "Fully Insured",
                text: "Comprehensive coverage for complete peace of mind",
                color: "bg-green-100"
              },
              {
                icon: <FaHandHoldingHeart className="text-blue-600 text-4xl mb-4" />,
                title: "24/7 Support",
                text: "Dedicated team available round the clock",
                color: "bg-purple-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className={`p-8 rounded-xl shadow-md hover:shadow-lg transition-all ${feature.color}`}
              >
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections with Enhanced Animations */}
      <div className="space-y-20 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Booking />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <WelcomeSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <OurProcess />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FeaturedAssociations />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <OperationalCities />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="https://wa.me/917090950255?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M380.9 97.1C339-2.6 239.4-18.6 148.6 23.3 86.8 50.8 43.8 106.5 35.6 174.7c-8.2 68.2 12.3 136.1 55.8 187.8l-23.6 84.5 86.4-22.7c50.7 28.4 109.5 34.9 164.4 18.7 54.8-16.2 99.3-55.7 123-106.4 23.7-50.7 25.6-108.5 5.3-160.5zM223.8 392c-35.4 0-70-10.5-99.4-30.2l-7.1-4.7-51.3 13.5 13.7-49.7-4.7-7c-36.8-53-47.6-120.5-28.9-181.7C73 101.4 113.2 60.9 165.1 38.7c51.9-22.2 111-20 160.3 6 49.2 26 83.7 71.4 95.6 124.5 11.9 53-1.2 108.5-36.2 151-35 42.5-86.4 66.8-140.9 66.8zm101.8-138.6c-5.5-2.8-32.4-16-37.5-17.8-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 17.8-17.6 21.5-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.6-66.2-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30-17.1-41.1-4.5-10.8-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.7 6.9c-5.1 5.6-19.5 19-19.5 46.3s20 53.7 22.8 57.4c2.8 3.7 39.5 60.3 95.8 84.6 13.4 5.8 23.8 9.3 31.9 11.9 13.4 4.2 25.6 3.6 35.2 2.2 10.7-1.6 32.4-13.2 37-26 4.6-12.8 4.6-23.7 3.2-26.3-1.3-2.6-5-4.2-10.5-7z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Home;