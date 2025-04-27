import React from 'react';

const CarShifting = () => {
  return (
    <div className="bg-gradient-to-br from-blue-800 to-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          
          {/* Hero Section */}
          <div className="p-8 md:p-12 lg:px-16 lg:py-12">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  <span className="text-yellow-300">Hassle-Free</span> Car Transport Services Across India
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  We at <span className="font-bold text-yellow-300">Bronyx Packers Movers</span> specialize in safe and secure car relocation services nationwide. Whether you’re shifting a compact sedan, an SUV, or a luxury car, we ensure it reaches your destination in pristine condition.
                </p>
                <ul className="list-disc pl-5 text-white/80 mb-6">
                  <li>Door-to-door pickup and delivery</li>
                  <li>All-India network coverage</li>
                  <li>Customized solutions for single or multiple vehicles</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                    Get Instant Quote
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition flex items-center justify-center">
                    Call Our Experts
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1000&q=80" 
                  alt="Car Transport"
                  className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/5 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose <span className="text-yellow-300">Bronyx</span> for Car Transport?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-white/80">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Experienced Professionals</h3>
                <p>Our drivers and logistics team have over a decade of experience in car transportation across India.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Affordable Pricing</h3>
                <p>We offer transparent pricing with no hidden charges. Get the best rates without compromising quality.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Customer-Centric Approach</h3>
                <p>We prioritize your satisfaction with dedicated customer support throughout the transport process.</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-10">Our Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8 text-white/90">
              <div>
                <h3 className="text-xl font-semibold text-yellow-300">Safe & Secure</h3>
                <p>Modern carriers and strict safety protocols to ensure damage-free delivery.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300">On-Time Delivery</h3>
                <p>Real-time tracking and punctual delivery to your chosen destination.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300">Pan India Reach</h3>
                <p>We cover all cities and towns across India with a robust logistics network.</p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="p-8 md:p-12 bg-white/5">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Car Transport Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "https://images.unsplash.com/photo-1563720229543-df2c66e6b8f5",
                "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a",
                "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
              ].map((url, index) => (
                <img key={index} src={url + "?auto=format&fit=crop&w=500&q=80"} alt="Gallery" className="rounded-xl shadow-lg hover:scale-105 transition" />
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-blue-900 to-gray-800">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6 text-white/90 max-w-4xl mx-auto">
              <div>
                <h4 className="font-bold text-lg">How long does car transport usually take?</h4>
                <p>Depending on the distance, it may take anywhere from 2 to 10 days. We provide accurate delivery timelines upfront.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Is my vehicle insured during transit?</h4>
                <p>Yes, we offer full insurance coverage to protect your vehicle against any unforeseen incidents.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Do I need to prepare my car for transport?</h4>
                <p>We recommend removing personal belongings and ensuring your car is clean for inspection. Our team will guide you through it.</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="p-8 md:p-12 bg-white/5">
            <h2 className="text-3xl font-bold text-center text-white mb-10">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8 text-white/90">
              <div className="bg-white/10 p-6 rounded-xl shadow-lg">
                <p>"Bronyx made moving my car from Delhi to Bangalore stress-free. Professional, on time, and great support throughout!"</p>
                <span className="block mt-4 text-yellow-300 font-semibold">— Ramesh V., Delhi</span>
              </div>
              <div className="bg-white/10 p-6 rounded-xl shadow-lg">
                <p>"I had to shift my SUV to Pune and was worried about safety, but Bronyx handled it with great care and delivered ahead of schedule."</p>
                <span className="block mt-4 text-yellow-300 font-semibold">— Sneha M., Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="p-10 md:p-16 bg-yellow-400 text-blue-900 text-center rounded-b-3xl">
            <h2 className="text-4xl font-bold mb-4">Ready to Transport Your Car?</h2>
            <p className="text-lg mb-6">Get a free quote now and experience the smoothest car relocation service in India with Bronyx Packers Movers.</p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md transition">
              Get My Quote
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarShifting;
