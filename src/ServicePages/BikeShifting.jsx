import React from 'react';

const BikeShifting = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white/30 backdrop-blur-lg shadow-2xl border border-white/40 rounded-2xl p-8 max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-6">
          🚛 Shift Your Bike with Care, Deliver with Love 🏍️
        </h1>
        <p className="text-white text-lg font-light leading-relaxed">
          At <span className="font-semibold">[Company Name]</span>, we provide **hassle-free bike shifting services**
          with care, safety, and efficiency. Whether moving to a new city or needing transport for servicing,
          we ensure a **secure, seamless, and worry-free experience**.
        </p>

        {/* 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            src="https://immediad.com/wp-content/uploads/2022/05/194-1945076_super-bike-png-bike-images-free-download-searchpng.png"
            alt="Bike Transport"
            className="rounded-lg shadow-lg border-4 border-white/50 w-full"
          />
          <img
            src="https://immediad.com/wp-content/uploads/2022/05/194-1945076_super-bike-png-bike-images-free-download-searchpng.png" 
            alt="Bike Shipping"
            className="rounded-lg shadow-lg border-4 border-white/50 w-full"
          />
          <img
            src="https://immediad.com/wp-content/uploads/2022/05/194-1945076_super-bike-png-bike-images-free-download-searchpng.png"
            alt="Bike Logistics"
            className="rounded-lg shadow-lg border-4 border-white/50 w-full"
          />
          <img
            src="https://immediad.com/wp-content/uploads/2022/05/194-1945076_super-bike-png-bike-images-free-download-searchpng.png" 
            alt="Bike Moving"
            className="rounded-lg shadow-lg border-4 border-white/50 w-full"
          />
        </div>

        <div className="mt-8">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg border-2 border-transparent hover:bg-blue-600 hover:text-white hover:border-white transition-all duration-300">
            🚀 Book Your Bike Shift Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeShifting;
