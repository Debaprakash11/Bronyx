import React from "react";

const LoadingAndUnloading = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Professional Loading & Unloading Services
        </h1>
        <p className="text-gray-700 text-lg">
          Our trained professionals ensure the safe handling of your goods during 
          loading and unloading. We use the right techniques and equipment to prevent 
          damage and make your relocation smooth and hassle-free.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?logistics,warehouse"
            alt="Loading and Unloading"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadingAndUnloading;
