import React from "react";
import HouseholdImg from "../assets/Banner4.jpg"
import LoadingImg from "../assets/Banner6.jpg";
import PackImg from "../assets/Banner2.jpg"
import Unpack from "../assets/Banner.jpeg"
import Unload from "../assets/Banner5.jpg"


const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Our Services</h1>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Service 1: Household Shifting */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={HouseholdImg} // Replace with actual image URL
            alt="Household Shifting"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Household Shifting</h2>
            <p className="text-gray-600 mt-2">
              We provide reliable household shifting services ensuring your belongings are safely transported.
            </p>
          </div>
        </div>

        {/* Service 2: Packing */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={PackImg} // Replace with actual image URL
            alt="Packing"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Packing</h2>
            <p className="text-gray-600 mt-2">
              Our packing experts ensure all your items are carefully packed to avoid damage during transit.
            </p>
          </div>
        </div>

        {/* Service 3: Loading */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={LoadingImg} // Replace with actual image URL
            alt="Loading"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Loading</h2>
            <p className="text-gray-600 mt-2">
              We provide professional loading services to ensure your items are loaded securely.
            </p>
          </div>
        </div>

        {/* Service 4: Unloading */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={Unload}// Replace with actual image URL
            alt="Unloading"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Unloading</h2>
            <p className="text-gray-600 mt-2">
              Our team will carefully unload your items, ensuring that everything arrives in perfect condition.
            </p>
          </div>
        </div>

        {/* Service 5: Unpacking */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={Unpack}// Replace with actual image URL
            alt="Unpacking"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">Unpacking</h2>
            <p className="text-gray-600 mt-2">
              Our unpacking services make settling into your new home easy, unpacking all your items with care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
