import React from 'react'

const OfficeShifting = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Efficient Office Moving Services
        </h1>
        <p className="text-gray-700 text-lg">
          Relocate your office smoothly with our professional moving services. 
          We ensure a hassle-free transition with minimal downtime, handling 
          everything from packing to setup at your new location.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?office,moving"
            alt="Office Moving"
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

export default OfficeShifting
