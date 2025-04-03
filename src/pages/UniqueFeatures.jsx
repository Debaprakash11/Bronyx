import React from 'react'
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaBoxes, FaUsers, FaCheckCircle } from "react-icons/fa";

const UniqueFeatures = () => {
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Makes Us Unique?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the BRONYX difference - where every move is handled with precision and care.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Premium Packing", 
                text: "Military-grade packing materials for maximum protection",
                icon: <FaBoxes className="text-blue-600" />
              },
              { 
                title: "Trained Professionals", 
                text: "Our crew undergoes rigorous training annually",
                icon: <FaUsers className="text-blue-600" />
              },
              { 
                title: "GPS Tracking", 
                text: "Real-time tracking of your shipment",
                icon: <FaMapMarkedAlt className="text-blue-600" />
              },
              { 
                title: "White Glove Service", 
                text: "From packing to unpacking at destination",
                icon: <FaCheckCircle className="text-blue-600" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 pl-12">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

export default UniqueFeatures
