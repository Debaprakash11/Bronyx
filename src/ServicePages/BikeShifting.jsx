import React from 'react';
import BikeImg from "../assets/Trusted Partner/TP_Blue.webp"
import { useNavigate } from "react-router-dom";
const BikeShifting = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <div className="p-8 md:p-12 lg:px-16 lg:py-12">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  <span className="text-yellow-300">Shift Your Bike with Care,</span><br />
                  Deliver with Love
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  At <span className="font-bold text-yellow-300">BRONYX PACKERS MOVERS</span>, we understand the thrill of riding your bike, the freedom it brings, and the memories you create on two wheels. We treat every bike with the same care and passion you pour into every ride.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition flex items-center justify-center"
                  onClick={() => navigate("/booking")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Book the Service
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition flex items-center justify-center"
                  onClick={() => navigate("/contact")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src={BikeImg}
                  alt="Bike Transport with Care"
                  className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Features Section - Updated with emotional benefits */}
          <div className="bg-white/5 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Trust <span className="text-yellow-300">Your Passion</span> to Us?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-yellow-300 transition">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Contact Us</h3>
                <p className="text-white/80 text-center">We treat your bike like the cherished companion it is, using specialized packing and gentle handling techniques.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-yellow-300 transition">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Memory-Safe Journey</h3>
                <p className="text-white/80 text-center">Timely delivery that respects the memories you've created and the adventures yet to come.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-yellow-300 transition">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Stress-Free Experience</h3>
                <p className="text-white/80 text-center">Transparent pricing with door-to-door service that lets you focus on the road ahead.</p>
              </div>
            </div>
          </div>

          {/* Updated Trusted Section */}
          <div className="bg-white/10 p-10 rounded-xl mt-10 shadow-inner">
            <h2 className="text-3xl text-white font-bold text-center mb-6">
              Loved by Riders Across <span className="text-yellow-300">India</span>
            </h2>
            <p className="text-white/90 max-w-4xl mx-auto text-center text-lg">
              Over 25,000 riders have entrusted us with their mechanical soulmates. From the bustling streets of Mumbai to the serene valleys of Himachal, we deliver not just bikes - but cherished companions. Our family of satisfied riders keeps growing because we pour our heart into every transport.
            </p>
          </div>

          {/* Enhanced Assurance Section */}
          <div className="bg-blue-900/50 mt-10 p-10 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold text-yellow-300 text-center mb-6">
              Our Heartfelt Commitment
            </h3>
            <ul className="text-white/90 max-w-4xl mx-auto list-disc list-inside space-y-4 text-lg">
              <li>Every bike wrapped in protective care as if it were our own</li>
              <li>Real-time updates so you never miss a moment of your bike's journey</li>
              <li>24/7 support from fellow riders who truly understand</li>
              <li>Environmentally conscious packing materials that care for your bike and our planet</li>
              <li>Personalized service that remembers every bike has a story</li>
            </ul>
          </div>

          {/* Updated CTA Section */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for a Bike Move That Feels Like Home?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Let's create a stress-free moving story for your beloved bike. Start with a caring conversation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Book with Care
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Chat About Your Bike
              </button>
            </div>
          </div>

          {/* Rest of the sections (Gallery, FAQs) remain with similar structure but can be updated with emotional language as needed */}

        </div>
      </div>
    </div>
  );
};

export default BikeShifting;