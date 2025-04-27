import React from 'react'
import { motion } from "framer-motion";
import { FiTruck, FiBox, FiMap, FiClipboard, FiHome } from 'react-icons/fi';

const OurProcess = () => {
    const steps = [
      {
        title: "Free Consultation",
        description: "We assess your requirements and provide a detailed quote",
        icon: <FiClipboard className="w-6 h-6"/>,
        color: "from-purple-400 to-purple-600"
      },
      {
        title: "Customized Plan",
        description: "Tailored moving plan based on your specific needs",
        icon: <FiMap className="w-6 h-6"/>,
        color: "from-blue-400 to-blue-600"
      },
      {
        title: "Professional Packing",
        description: "Expert packing using high-quality materials",
        icon: <FiBox className="w-6 h-6"/>,
        color: "from-green-400 to-green-600"
      },
      {
        title: "Safe Transportation",
        description: "GPS-tracked vehicles with trained personnel",
        icon: <FiTruck className="w-6 h-6"/>,
        color: "from-orange-400 to-orange-600"
      },
      {
        title: "Unpacking & Setup",
        description: "We unpack and arrange items at your new location",
        icon: <FiHome className="w-6 h-6"/>,
        color: "from-red-400 to-red-600"
      }
    ];

    const lineVariants = {
      hidden: { pathLength: 0 },
      visible: { 
        pathLength: 1,
        transition: { 
          duration: 1.5,
          delay: 0.5
        }
      }
    };

    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Seamless Process
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-48 h-1.5 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            >
              A carefully crafted journey to your stress-free relocation
            </motion.p>
          </div>

          <div className="relative">
            {/* Animated SVG line for desktop */}
            <motion.svg
              className="hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2"
              viewBox="0 0 2 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M1 0 V100"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </motion.svg>

            <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                    {/* Animated icon container */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`mb-6 p-1 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}
                    >
                      <div className="bg-white p-4 rounded-full flex items-center justify-center shadow-md">
                        <motion.div
                          whileHover={{ rotate: 20, scale: 1.1 }}
                          className="text-gray-800"
                        >
                          {step.icon}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="lg:max-w-[200px]">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Mobile connector */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden h-8 w-0.5 bg-gray-300 my-4 mx-auto relative">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-600 origin-top"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    );
};

export default OurProcess;