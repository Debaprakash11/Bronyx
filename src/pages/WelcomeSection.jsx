import React from 'react'
import { motion } from "framer-motion";
import { FaShieldAlt, FaAward, FaHandHoldingHeart } from "react-icons/fa";

const WelcomeSection = () => {
    return (
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-blue-600">BRONYX</span> PACKERS  MOVERS
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience in relocation services, we provide seamless moving solutions 
              tailored to your needs. Our commitment to excellence ensures your belongings are handled with 
              the utmost care and professionalism.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaShieldAlt className="text-4xl text-blue-600" />, 
                title: "Fully Insured", 
                text: "Comprehensive coverage for complete peace of mind" 
              },
              { 
                icon: <FaAward className="text-4xl text-blue-600" />, 
                title: "Award Winning", 
                text: "Recognized for excellence in relocation services" 
              },
              { 
                icon: <FaHandHoldingHeart className="text-4xl text-blue-600" />, 
                title: "Customer First", 
                text: "98% customer satisfaction rate" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

export default WelcomeSection
