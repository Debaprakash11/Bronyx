import React from "react";
import Services from "./Services";
import Booking from "./Booking";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTruckMoving, FaBoxes, FaShieldAlt, FaHandHoldingHeart } from "react-icons/fa";
import WelcomeSection from "./WelcomeSection";
import OurProcess from "./OurProcess";
import FeaturedAssociations from "./FeaturedAssociations";
import OperationalCities from "./OperationalCities";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/booking");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const featureCardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:h-screen overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-95"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl -top-20 -left-20"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div
          className="absolute w-80 h-80 bg-indigo-400 opacity-20 rounded-full blur-3xl -bottom-20 -right-20"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 sm:px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="block">BRONYX</span>
              <span className="block text-blue-300 text-2xl xs:text-3xl sm:text-4xl md:text-5xl mt-2">
                PACKERS & MOVERS
              </span>
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl leading-relaxed px-2"
          >
            Trusted relocation services with a commitment to excellence. We make your move seamless, safe, and stress-free.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleButtonClick}
              className="px-6 py-2 md:px-8 md:py-3 bg-white text-blue-800 text-sm md:text-base font-bold rounded-full shadow-lg
                         hover:bg-blue-100 hover:text-blue-900 flex items-center"
            >
              <FaTruckMoving className="mr-2 text-lg" />
              Get Your Free Quote
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features Floating Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-4 md:py-6 shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              {[
                { icon: <FaTruckMoving />, title: "Fast Delivery", text: "Timely transportation" },
                { icon: <FaBoxes />, title: "Secure Packing", text: "Professional materials" },
                { icon: <FaShieldAlt />, title: "Fully Insured", text: "Your goods protected" },
                { icon: <FaHandHoldingHeart />, title: "24/7 Support", text: "Always available" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-white p-3 md:p-4 rounded-lg shadow-md border border-gray-100 text-center cursor-default"
                >
                  <div className="text-blue-600 mb-2 md:mb-3 flex justify-center">
                    {React.cloneElement(feature.icon, { className: "w-6 h-6 md:w-7 md:h-7" })}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          
          <Services />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <Booking />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <WelcomeSection/>

        </motion.section>
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <OurProcess/>
          
        </motion.section>
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <FeaturedAssociations/>
          
        </motion.section>
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <OperationalCities/>
          
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;