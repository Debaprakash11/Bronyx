import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaTrophy, FaUsers, FaShieldAlt, FaTruckMoving } from 'react-icons/fa';
import pcc from '../assets/Banner4.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl w-full"
      >
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-12 p-8 md:p-12">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
              >
                About BRONYX
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              >
                For <strong className="text-blue-600">5+ years</strong>, BRONYX has redefined relocation excellence. 
                We blend cutting-edge logistics with personalized service to transform your moving experience.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <FaTruckMoving className="text-blue-600 text-3xl mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  Revolutionizing relocation through innovative solutions, unmatched safety standards, 
                  and a commitment to stress-free transitions for every client.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Values</h2>
                <div className="space-y-6">
                  {[
                    { icon: <FaHandshake />, title: "Integrity", text: "Transparent operations with ethical practices" },
                    { icon: <FaTrophy />, title: "Excellence", text: "Premium service quality assurance" },
                    { icon: <FaUsers />, title: "Customer First", text: "Tailored solutions for unique needs" },
                    { icon: <FaShieldAlt />, title: "Safety", text: "100% insured, damage-free guarantee" }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-4"
                    >
                      <div className="text-blue-600 text-2xl pt-1">{value.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                        <p className="text-gray-600">{value.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="mt-10 lg:mt-0 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={pcc}
                alt="Professional moving team"
                className="w-full h-full object-cover min-h-[400px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              
              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm font-semibold text-gray-600">Years Experience</div>
              </motion.div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { number: "5000+", label: "Items Moved" },
                { number: "98%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-md text-center"
                >
                  <div className="text-xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;