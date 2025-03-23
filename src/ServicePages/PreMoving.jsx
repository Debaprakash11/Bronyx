import React from "react";

const PreMoving = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Pre-Moving Consultation & Planning
        </h1>
        <p className="text-gray-700 text-lg">
          Make your relocation smooth and stress-free with our pre-moving services. 
          We offer expert consultation, packing guidance, and logistics planning to 
          ensure a hassle-free move tailored to your needs.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?planning,moving"
            alt="Pre-Moving Planning"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreMoving;
