import React from 'react'
import { motion } from "framer-motion";
import { FaShieldAlt, FaAward, FaHandHoldingHeart, FaMapMarkedAlt, FaTruckMoving, FaBoxes, FaUsers, FaCheckCircle } from "react-icons/fa";


const FeaturedAssociations = () => {
    const partners = [
      { name: "Indian Packers Association", logo: "/path/to/logo1.png" },
      { name: "Logistics India", logo: "/path/to/logo2.png" },
      { name: "Transport Guild", logo: "/path/to/logo3.png" },
      { name: "Safety First Movers", logo: "/path/to/logo4.png" }
    ];
  
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Associated with leading organizations in the relocation industry
            </p>
          </div>
  
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Replace with actual logo images */}
                <div className="w-32 h-20 bg-gray-100 flex items-center justify-center text-gray-400">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

export default FeaturedAssociations
