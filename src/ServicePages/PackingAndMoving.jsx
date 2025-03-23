import React from 'react'

const PackingAndMoving = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Professional Packing and Moving Services B#n#
        </h1>
        <p className="text-gray-700 text-lg">
          Ensure the safety of your belongings with our expert packing services. 
          We use high-quality materials and efficient techniques to securely pack 
          your items, making transportation damage-free and hassle-free.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?packing,boxes"
            alt="Packing Services"
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
export default PackingAndMoving
