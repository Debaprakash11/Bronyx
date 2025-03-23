import React from "react";

const Quotation = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Get a Free Moving Quotation
        </h1>
        <p className="text-gray-700 text-lg">
          Plan your move with confidence! Request a free quotation today and 
          get a detailed estimate tailored to your relocation needs. Our transparent 
          pricing ensures no hidden costs, making your move stress-free.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?contract,estimate"
            alt="Quotation Request"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
