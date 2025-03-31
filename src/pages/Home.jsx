import React from "react";
import Services from "./Services";
import Booking from "./Booking";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/booking");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-700"></div>

        {/* Decorative Blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-indigo-400 opacity-40 rounded-full blur-3xl top-16 left-4 sm:w-80 sm:h-80"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute w-80 h-80 bg-purple-400 opacity-40 rounded-full blur-3xl bottom-10 right-4 sm:w-96 sm:h-96"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>

        {/* Text Section */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4 sm:px-6">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-extrabold mb-6"
          >
            Moving with Love, Moving with Care
          </motion.h1>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-extrabold mb-6"
          >
            Moving with Love, Moving with Care
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-base sm:text-lg mb-8 max-w-lg sm:max-w-xl"
          >
            Experience a stress-free move with our expert services. We ensure every move is handled with utmost care and professionalism.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
            className="px-12 py-4 bg-white text-indigo-600 font-semibold text-lg rounded-full shadow-lg transition-all"
          >
            Get Your Free Quote
          </motion.button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <Services />
        <Booking />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
