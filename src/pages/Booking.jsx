import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Household Shifting",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We will contact you soon.");
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Household Shifting",
      date: "",
      message: "",
    });
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
            className="p-3 text-lg bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
