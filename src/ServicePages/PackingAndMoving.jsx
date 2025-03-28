import React from 'react';
import Picture2 from '../assets/Banner4.jpg'

const PackingAndMoving = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-24 px-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
          Professional Packing Services
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Our expert packers use high-quality materials to ensure your belongings 
          are protected during transit. We offer customized packing solutions to fit your specific needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Packing Options</h2>
            <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
              <li><strong>Full Packing:</strong> Our team packs all your belongings, including fragile items and specialty goods.</li>
              <li><strong>Partial Packing:</strong> We pack only the items you need help with, such as fragile items or bulky furniture.</li>
              <li><strong>Self-Packing:</strong> We provide packing materials and guidance, and you pack your own belongings.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Packing Materials</h2>
            <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
              <li>Sturdy boxes and cartons</li>
              <li>Bubble wrap and foam inserts</li>
              <li>Packing paper and tape</li>
              <li>Furniture covers and blankets</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Specialty Packing</h2>
            <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
              <li><strong>Fragile Items:</strong> Extra care for glassware, artwork, and antiques.</li>
              <li><strong>Specialty Goods:</strong> Expertise in packing pianos, motorcycles, and heavy machinery.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Benefits of Our Packing Services</h2>
            <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2">
              <li>Reduced risk of damage during transit</li>
              <li>Saved time and effort</li>
              <li>Customized packing solutions to fit your needs</li>
              <li>High-quality packing materials used</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
          <img
            src={Picture2}
            alt="Packing Services"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600">Get a Quote</h2>
          <p className="text-gray-600 text-lg mb-4">
            Fill out our online quote form to get a free estimate for our packing services.
            Contact us to schedule a consultation with one of our packing experts.
          </p>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-800 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackingAndMoving;