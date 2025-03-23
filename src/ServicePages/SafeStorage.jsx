import React from "react";

const SafeStorage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Secure & Reliable Storage Solutions
        </h1>
        <p className="text-gray-700 text-lg">
          Need a safe place to store your belongings? Our state-of-the-art 
          storage facilities offer climate control, 24/7 surveillance, and 
          flexible storage plans to keep your valuables protected.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?storage,warehouse"
            alt="Safe Storage"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Explore Storage Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafeStorage;
