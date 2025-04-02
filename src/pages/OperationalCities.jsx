import React from 'react'
import { motion } from "framer-motion";
import { FaShieldAlt, FaAward, FaHandHoldingHeart, FaMapMarkedAlt, FaTruckMoving, FaBoxes, FaUsers, FaCheckCircle } from "react-icons/fa";

const OperationalCities = () => {
    const cities = [
      "Mumbai", "Delhi", "Bangalore", "Hyderabad", 
      "Chennai", "Kolkata", "Pune", "Ahmedabad",
      "Jaipur", "Lucknow", "Surat", "Nagpur"
    ];
  
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Operational Cities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving across major Indian cities with the same commitment to excellence
            </p>
          </div>
  
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
          >
            {cities.map((city, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm text-center font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                {city}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };
  

export default OperationalCities
