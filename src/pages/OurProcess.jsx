import React from 'react'
import { motion } from "framer-motion";
import { FaShieldAlt, FaAward, FaHandHoldingHeart, FaMapMarkedAlt, FaTruckMoving, FaBoxes, FaUsers, FaCheckCircle } from "react-icons/fa";

const OurProcess = () => {
    const steps = [
      {
        title: "Free Consultation",
        description: "We assess your requirements and provide a detailed quote",
        icon: "1"
      },
      {
        title: "Customized Plan",
        description: "Tailored moving plan based on your specific needs",
        icon: "2"
      },
      {
        title: "Professional Packing",
        description: "Expert packing using high-quality materials",
        icon: "3"
      },
      {
        title: "Safe Transportation",
        description: "GPS-tracked vehicles with trained personnel",
        icon: "4"
      },
      {
        title: "Unpacking & Setup",
        description: "We unpack and arrange items at your new location",
        icon: "5"
      }
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures a stress-free moving experience
            </p>
          </div>
  
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center lg:text-left"
                >
                  <div className="flex justify-center lg:justify-start items-center mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.icon}
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-gray-800 lg:hidden">{step.title}</h3>
                  </div>
                  <div className="lg:ml-16">
                    <h3 className="hidden lg:block text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  

export default OurProcess
