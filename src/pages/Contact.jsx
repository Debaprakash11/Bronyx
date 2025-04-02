import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset submission status after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.1, 0.7, 0.3, 1]
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Contact BRONYX PACKERS & MOVERS
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Get in touch with our team for inquiries, quotes, or support. We're here to make your moving experience seamless.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 cursor-default"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-2">Available 24/7 for urgent inquiries</p>
                  <a href="tel:+918917340255" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    +91 891-734-0255
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 cursor-default"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">Typically respond within 1 business day</p>
                  <a href="mailto:info@bronyxpackers.com" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    info@bronyxpackers.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 cursor-default"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h3>
                  <p className="text-gray-600">
                    123 Business Park Avenue<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-100 text-green-600 p-4 rounded-full inline-flex mb-6">
                    <FaCheck className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting BRONYX PACKERS & MOVERS. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center px-6 py-3 rounded-lg text-white font-medium ${
                      isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                    } transition-colors`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;