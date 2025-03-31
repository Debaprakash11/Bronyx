import React from "react";
import { Link } from "react-router-dom";
import HouseholdImg from "../assets/Banner4.jpg";
import LoadingImg from "../assets/Banner6.jpg";
import PackImg from "../assets/Banner2.jpg";
import Unpack from "../assets/Banner.jpeg";
import Unload from "../assets/Banner5.jpg";

const services = [
  { name: "Packing And Moving", img: PackImg, path: "/services/packingandmoving" },
  { name: "Car Shifting", img: HouseholdImg, path: "/services/carshifting" },
  { name: "Bike  Shifting", img: HouseholdImg, path: "/services/bikeshifting" },
  { name: "Home Shifting", img: HouseholdImg, path: "/services/householdshifting" },
  { name: "Insurance", img: HouseholdImg, path: "/services/insurance" },
  { name: "Loading & Unloading", img: LoadingImg, path: "/services/loadingandunloading" },
  { name: "Office Moving", img: HouseholdImg, path: "/services/officeshifting" },
  { name: "Pre-Moving", img: HouseholdImg, path: "/services/premoving" },
  { name: "Quotation", img: HouseholdImg, path: "/services/quotation" },
  { name: "Safe Storage", img: HouseholdImg, path: "/services/safestorage" },
  // { name: "Smart Move Budget", img: HouseholdImg, path: "/services/smartmovebudget" },
];




const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={service.img} alt={service.name} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
              <p className="text-gray-600 mt-2">Reliable {service.name} services with professional care.</p>
              <Link to={service.path}>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                  More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
