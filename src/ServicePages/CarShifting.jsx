import React from 'react';

const CarShifting = () => {
  return (
    <div className="bg-gradient-to-br from-blue-800 to-gray-900 py-12 px-4 sm:px-6">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          {/* Hero Section */}
          <div className="p-8 md:p-12 lg:px-16 lg:py-12">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  <span className="text-yellow-300">Premium</span> Car Transport Services
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  At <span className="font-bold text-yellow-300">Bronyx Packers Movers</span>, we provide nationwide car transportation with enclosed carriers, GPS tracking, and insurance coverage for complete peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Instant Quote
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional Car Transport"
                  className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white/5 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our <span className="text-yellow-300">Car Transport</span> Advantages</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-yellow-300 transition">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Enclosed Carriers</h3>
                <p className="text-white/80 text-center">Protect your vehicle from weather and road debris with our fully enclosed transport trailers.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-yellow-300 transition">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Real-Time Tracking</h3>
                <p className="text-white/80 text-center">Monitor your vehicle's location 24/7 through our GPS tracking system.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-yellow-300 transition">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Full Insurance</h3>
                <p className="text-white/80 text-center">Comprehensive coverage for complete protection during transit.</p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="p-8 md:p-12 bg-white/5">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our <span className="text-yellow-300">Transport</span> Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Enclosed Transport"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">Enclosed Transport</h3>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Open Carrier"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">Open Carrier</h3>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Luxury Vehicle Transport"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">Luxury Vehicle Transport</h3>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-700 to-gray-900 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transport Your Vehicle?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Get a free, no-obligation quote for your car transport needs today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for Instant Booking
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Get Online Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarShifting;