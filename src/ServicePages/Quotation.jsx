import React, { useState } from "react";
import { FaMapMarkerAlt,FaShieldAlt, FaBoxes, FaCalendarAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import quotationImage from '../assets/Banner.jpeg';

const Quotation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    origin: '',
    destination: '',
    moveType: 'residential',
    inventory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Thank you for your request! We will contact you shortly with your quote.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Get Your <span className="text-blue-600">Free Moving Quote</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Receive a detailed, no-obligation estimate tailored to your specific moving needs
          </p>
        </div>

        {/* Form Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Request Your <span className="text-blue-600">Custom Quote</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Move Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Moving From</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      placeholder="Current address"
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Moving To</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="New address"
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Move Type</label>
                <select
                  name="moveType"
                  value={formData.moveType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial/Office</option>
                  <option value="international">International</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Inventory Details <span className="text-sm text-gray-500">(optional)</span>
                </label>
                <textarea
                  name="inventory"
                  value={formData.inventory}
                  onChange={handleChange}
                  placeholder="Special items, approximate volume, or specific requirements"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300"
              >
                Get My Free Quote
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Why Get a <span className="text-blue-600">Moving Quote</span>?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                    <FaBoxes />
                  </div>
                  <span className="text-gray-700">Accurate cost estimation for budgeting</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                    <FaCalendarAlt />
                  </div>
                  <span className="text-gray-700">Plan your move timeline effectively</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                    <FaShieldAlt />
                  </div>
                  <span className="text-gray-700">No hidden fees or surprises</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-700 text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-3" />
                  <span>quotes@bronyxpackers.com</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={quotationImage} 
                alt="Moving estimate process" 
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={quotationImage} 
                alt="Moving estimate process" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Trusted by Thousands of Happy Customers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
              <p className="text-gray-600">"The quote was accurate and the service was excellent!"</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
              <p className="text-gray-600">"No hidden costs - exactly what was quoted."</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
              <p className="text-gray-600">"Professional from quote to final delivery."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;