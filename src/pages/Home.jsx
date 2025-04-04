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
      >
        <a 
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Home;