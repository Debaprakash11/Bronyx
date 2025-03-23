import React from 'react'

const CarShifting = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Reliable Car Carrier Services 2.0
        </h1>
        <p className="text-gray-700 text-lg">
          Our professional car carrier services ensure safe and timely 
          transportation of your vehicles across locations. We use 
          top-notch carriers with safety measures to prevent any damage 
          during transit.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?car,transport"
            alt="Car Carrier"
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


export default CarShifting
