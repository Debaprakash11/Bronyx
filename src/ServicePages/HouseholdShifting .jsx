import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaQuoteRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const HouseholdShifting = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-blue-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-12 px-6 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Seamless Household Shifting with Bronyx Packers Movers
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Experience a hassle-free move with our expert household shifting services tailored for your comfort and convenience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quote"
            className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Get Instant Quote
          </a>
          <a
            href="tel:+917090950255"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
          >
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 lg:px-20 py-10 bg-white grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="."
            alt="Professional Household Shifting Services in India"
            className="rounded-2xl shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-blue-800">Why Choose Us?</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>Experienced & Verified Professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>Quality Packing Materials & Techniques</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>Real-Time Tracking & Timely Delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>Affordable Rates with No Hidden Charges</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-blue-50 py-12 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Book a Free Survey",
            "Get a Transparent Quote",
            "We Pack & Move",
            "Safe Delivery to Your New Home",
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl font-bold text-yellow-500 mb-3">{index + 1}</div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Our Promise to You</h2>
        <div className="flex flex-wrap justify-center gap-6 text-blue-800 text-lg font-medium">
          <div className="flex items-center gap-2">
            <MdVerified className="text-green-500" /> 30 Years Combined Experience
          </div>
          <div className="flex items-center gap-2">
            <MdVerified className="text-green-500" /> Government Approved Packers
          </div>
          <div className="flex items-center gap-2">
            <MdVerified className="text-green-500" /> 4.9/5 Google Ratings
          </div>
          <div className="flex items-center gap-2">
            <MdVerified className="text-green-500" /> 100% Customer Satisfaction
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-blue-50 to-yellow-100 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote:
                "Bronyx made our house relocation stress-free. Their team was professional, quick, and handled everything with care!",
              name: "Rohit Sharma, Delhi",
            },
            {
              quote:
                "Fantastic service! I would recommend Bronyx Packers to anyone looking for a reliable household shifting partner.",
              name: "Neha Verma, Bangalore",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-400"
            >
              <p className="text-gray-800 italic mb-4 flex items-start gap-2">
                <FaQuoteRight className="text-yellow-400 mt-1" /> {review.quote}
              </p>
              <div className="text-right font-semibold text-blue-700">{review.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HouseholdShifting;
