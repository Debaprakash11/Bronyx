import React from "react";
import Services from "./Services";
import Booking from "./Booking";
import Contact from "./Contact";
import Page1 from "./Page1";
import Banner from "../assets/Truck.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function to redirect to the booking page

  const handleButtonClick = () => {
    // Add animation effect (like scale or fade out) before navigating
    const button = document.getElementById("getQuotationBtn");
    button.classList.add("scale-110", "opacity-0");

    // Wait for the animation to complete before redirecting
    setTimeout(() => {
      navigate("/booking"); // Navigate to the booking page
    }, 300); // Wait for 300ms for animation to complete
  };
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="relative w-full h-screen group">
      {/* Background Image */}
      <img
        src={Banner}
        alt="Logistics Service"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:blur-sm"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
        <h1 className="text-4xl font-semibold">Welcome to Our Logistics Service</h1>
        <p className="text-xl mt-2">We provide reliable shifting, packing, and moving services.</p>

        {/* Get Quotation Button */}
        <div className="absolute bottom-10">
          <button
            id="getQuotationBtn"
            onClick={handleButtonClick} // Handle button click
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-6"
          >
            Get Quotation
          </button>
        </div>
      </div>
    </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">

        {/* Services Component */}
        <div className="mb-12">
          <Services />
        </div>

        {/* Page1 Component */}
        <div className="mb-12">
          <Page1 />
        </div>

        {/* Booking Component */}
        <div className="mb-12">
          <Booking />
        </div>

        {/* Contact Component */}
        <div className="mb-12">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
