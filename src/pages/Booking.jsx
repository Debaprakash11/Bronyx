import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

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
      alert("Booking submitted successfully! We will contact you soon.");
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

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-full max-w-7xl bg-white shadow-xl rounded-3xl p-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Book a Service</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 text-lg rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 text-lg rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-4 text-lg rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-4 text-lg rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 transition"
            whileFocus={{ scale: 1.02 }}
          />

          {/* Select Dropdown with Validation */}
          <motion.select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="p-4 text-lg rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 transition"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="" disabled>Select a Service</option>
            {["Packing and Moving", "Household Shifting", "Office Shifting", "Car Shifting", "Bike Shifting", "Loading and Unloading", "Safe Storage"].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </motion.select>

          <motion.textarea
            name="message"
            placeholder="Additional Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            className="p-4 text-lg rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 transition md:col-span-2"
            rows="4"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`p-4 text-lg font-semibold rounded-xl transition ${loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-500"} text-white shadow-lg md:col-span-2`}
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }}
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Booking;
