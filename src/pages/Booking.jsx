import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaCheckCircle, FaTruckMoving, FaCalendarAlt, FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.service) {
      alert("Please select a service before submitting.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "bookings"), formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Error submitting booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { name: "Packing and Moving", icon: <FaTruckMoving /> },
    { name: "Household Shifting", icon: <FaTruckMoving /> },
    { name: "Office Shifting", icon: <FaTruckMoving /> },
    { name: "Car Shifting", icon: <FaTruckMoving /> },
    { name: "Bike Shifting", icon: <FaTruckMoving /> },
    { name: "Loading and Unloading", icon: <FaTruckMoving /> },
    { name: "Safe Storage", icon: <FaTruckMoving /> }
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 mt-25">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Book Your Moving Service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the form below and our team will contact you to arrange your perfect move.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Steps */}
          <div className="flex border-b border-gray-200">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setSelectedStep(step)}
                className={`flex-1 py-4 px-2 text-center font-medium transition-colors ${selectedStep === step ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <div className="flex items-center justify-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 ${selectedStep === step ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                    {step}
                  </span>
                  {step === 1 && 'Your Info'}
                  {step === 2 && 'Service Details'}
                  {step === 3 && 'Confirmation'}
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-8 sm:p-12 text-center"
              >
                <FaCheckCircle className="mx-auto text-6xl text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Submitted Successfully!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for choosing BRONYX PACKERS & MOVERS. Our team will contact you shortly to confirm your booking details.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSuccess(false)}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Make Another Booking
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 md:p-12"
              >
                {selectedStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          whileFocus="focus"
                          variants={inputVariants}
                          placeholder="John Doe"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          whileFocus="focus"
                          variants={inputVariants}
                          placeholder="john@example.com"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="relative">
                        <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <motion.input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          whileFocus="focus"
                          variants={inputVariants}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                      <div className="relative">
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <motion.input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          whileFocus="focus"
                          variants={inputVariants}
                        />
                      </div>
                    </motion.div>
                  </div>
                )}

                {selectedStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Select Service</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service) => (
                          <motion.button
                            key={service.name}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: service.name })}
                            className={`p-4 rounded-xl border-2 flex items-center space-x-3 transition-colors ${formData.service === service.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                            whileHover={{ y: -2 }}
                          >
                            <span className={`text-xl ${formData.service === service.name ? 'text-blue-500' : 'text-gray-400'}`}>
                              {service.icon}
                            </span>
                            <span className="font-medium text-gray-700">{service.name}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <motion.div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Additional Message</label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        whileFocus="focus"
                        variants={inputVariants}
                        rows="4"
                        placeholder="Any special requirements or notes..."
                      />
                    </motion.div>
                  </div>
                )}

                {selectedStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="font-medium text-lg text-gray-900 mb-4">Booking Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{formData.name || "Not provided"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Contact:</span>
                          <span className="font-medium">{formData.phone || "Not provided"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service:</span>
                          <span className="font-medium">{formData.service || "Not selected"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{formData.date || "Not selected"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                      <p className="text-yellow-700 text-sm">
                        Please review your information before submitting. Our team will contact you within 24 hours to confirm your booking.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {selectedStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={() => setSelectedStep(selectedStep - 1)}
                      className="px-6 py-2 text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Back
                    </motion.button>
                  )}

                  {selectedStep < 3 ? (
                    <motion.button
                      type="button"
                      onClick={() => setSelectedStep(selectedStep + 1)}
                      className="ml-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Continue
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className={`ml-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors ${loading ? 'opacity-70' : ''}`}
                      whileHover={!loading ? { scale: 1.03 } : {}}
                      whileTap={!loading ? { scale: 0.97 } : {}}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Confirm Booking"
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Booking;