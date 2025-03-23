import React from 'react'

const BikeShifting = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Secure Your Move with Insurance Coverage
        </h1>
        <p className="text-gray-700 text-lg">
          Protect your valuable belongings during transit with our comprehensive 
          moving insurance. Our coverage ensures compensation in case of damage 
          or loss, giving you peace of mind while relocating.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?insurance,safety"
            alt="Moving Insurance"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Insured Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeShifting
