import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 md:p-16 rounded-3xl shadow-xl max-w-4xl mx-auto my-12 mt-16 text-white"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl font-extrabold text-center mb-6"
      >
        Contact Us
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-center mb-10 opacity-80"
      >
        We’d love to hear from you. Reach out to us through the following channels:
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-16 md:space-y-0"
      >
        <div className="flex items-center space-x-4">
          <span className="text-4xl">📧</span>
          <p className="text-xl font-medium">support@logistics.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-4xl">📞</span>
          <p className="text-xl font-medium">+91 8917340255</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;