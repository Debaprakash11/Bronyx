import React from "react";
import Services from "./Services";
import Booking from "./Booking";
import Contact from "./Contact";

import Banner from "../assets/Banner 3.jpg";
import { useNavigate } from "react-router-dom";
// import GetQuotationModal from "./GetQuotationModal";

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
    <div className="bg-gray-100 min-h-screen">
    {/* Hero Section with Background Image */}
    <div className="relative w-full h-screen group">
      <img
        src={Banner}
        alt="Logistics Service"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out "
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Welcome to Bronyx Packers & Movers
        </h1>
        <p className="text-xl mb-30 max-w-2xl mx-auto">
          Your trusted partner in seamless household shifting, expert packing, and hassle-free moving services. We ensure a smooth transition to your new home with care and efficiency.
        </p>
        {/* Get Quotation Button */}
        <div className="absolute bottom-20">
          <button
            id="getQuotationBtn"
            onClick={handleButtonClick}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Get Your Quotation
          </button>
        </div>
      </div>
    </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Services Component */}
        <div className="mb-16">
          <Services />
        </div>

        {/* Page1 Component */}
        {/* <div className="mb-16">
          <Page1 />
          </div> */}  

        {/* Booking Component */}
        <div className="mb-16">
          <Booking />
        </div>

        {/* Contact Component */}
        <div className="mb-16">
          <Contact />
        </div>
      </div>

      {/* Footer Section (optional) */}
     
      </div>
    
  );
};

export default Home;
