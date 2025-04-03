import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTruckMoving, FaBoxes, FaShieldAlt, FaHandHoldingHeart } from "react-icons/fa";
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
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-700">
        <motion.div
          className="text-white max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            BRONYX <br />
            <span className="text-blue-300 text-3xl sm:text-4xl">PACKERS & MOVERS</span>
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Trusted relocation services with a commitment to excellence. We make your move seamless, safe, and stress-free.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/booking")}
            className="mt-6 px-6 py-3 bg-white text-blue-800 font-bold rounded-lg shadow-md hover:bg-blue-100"
          >
            <FaTruckMoving className="inline-block mr-2" /> Get Your Free Quote
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <div className="py-6 md:py-12 bg-white text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[{ icon: FaTruckMoving, title: "Fast Delivery", text: "Timely transportation" },
            { icon: FaBoxes, title: "Secure Packing", text: "Professional materials" },
            { icon: FaShieldAlt, title: "Fully Insured", text: "Your goods protected" },
            { icon: FaHandHoldingHeart, title: "24/7 Support", text: "Always available" }].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <feature.icon className="text-blue-600 text-3xl mx-auto mb-2" />
              <h3 className="font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12">
        <Services />
        <Booking />
        <WelcomeSection />
        <OurProcess />
        <FeaturedAssociations />
        <OperationalCities />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
