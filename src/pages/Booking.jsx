import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore configuration

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Household Shifting",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // For submit button state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add booking data to Firestore
      await addDoc(collection(db, "bookings"), formData);
      alert("Booking submitted successfully! We will contact you soon.");
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Household Shifting",
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16 md:mt-20 lg:mt-24">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Book a Service
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          >
            <option>Household Shifting</option>
            <option>Packing</option>
            <option>Loading</option>
            <option>Unloading</option>
            <option>Unpacking</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            className="p-3 text-lg rounded border border-gray-300 focus:border-gray-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className={`p-3 text-lg rounded transition ${
              loading ? "bg-gray-500" : "bg-gray-800 hover:bg-gray-700"
            } text-white`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
