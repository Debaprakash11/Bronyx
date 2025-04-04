import React from "react";
import { FaShieldAlt, FaTemperatureLow, FaCamera, FaLock, FaBoxOpen, FaCalendarAlt } from "react-icons/fa";
import storageImage from '../assets/Banner6.jpg';
import securityImage from '../assets/Banner6.jpg';

const SafeStorage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
          <FaShieldAlt className="mr-2" />
          <span>Secure Storage</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">Safe Storage</span> Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          State-of-the-art facilities with advanced security to protect your belongings
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <img 
              src={storageImage} 
              alt="Storage facility exterior" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Our <span className="text-blue-600">Storage</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              Our facilities are designed to provide maximum protection and convenience for your stored items, whether for short-term or long-term needs.
            </p>
            <ul className="space-y-4">
              <FeatureItem 
                icon={<FaTemperatureLow className="text-blue-600" />}
                title="Climate Controlled"
                description="Maintain optimal temperature and humidity levels"
              />
              <FeatureItem 
                icon={<FaCamera className="text-blue-600" />}
                title="24/7 Surveillance"
                description="Continuous monitoring with CCTV cameras"
              />
              <FeatureItem 
                icon={<FaLock className="text-blue-600" />}
                title="Restricted Access"
                description="Biometric entry and individual unit alarms"
              />
            </ul>
          </div>
        </div>

        {/* Storage Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Storage</span> Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StoragePlan 
              title="Short-Term"
              size="5'x5' to 10'x20'"
              price="From $49/month"
              description="Perfect for temporary storage during moves or renovations"
              icon={<FaCalendarAlt className="text-blue-600 text-2xl" />}
            />
            <StoragePlan 
              title="Long-Term"
              size="10'x10' to 10'x30'"
              price="From $89/month"
              description="Ideal for extended storage with discounted rates"
              icon={<FaBoxOpen className="text-blue-600 text-2xl" />}
              featured
            />
            <StoragePlan 
              title="Specialty"
              size="Custom sizes"
              price="Custom pricing"
              description="For vehicles, wine, documents, and sensitive items"
              icon={<FaShieldAlt className="text-blue-600 text-2xl" />}
            />
          </div>
        </div>

        {/* Security Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Advanced <span className="text-blue-600">Security</span> Measures
            </h2>
            <p className="text-gray-600 text-lg">
              Your peace of mind is our priority. We implement multiple layers of security to ensure your belongings are always protected.
            </p>
            <ul className="space-y-4">
              <SecurityFeature 
                feature="Perimeter Fencing"
                description="High-security fencing around the entire facility"
              />
              <SecurityFeature 
                feature="Motion Sensors"
                description="Advanced detection systems throughout"
              />
              <SecurityFeature 
                feature="Fire Protection"
                description="Sprinkler systems and smoke detectors"
              />
              <SecurityFeature 
                feature="Insurance Options"
                description="Available for additional protection"
              />
            </ul>
          </div>
          <div>
            <img 
              src={securityImage} 
              alt="Storage security features" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Our <span className="text-blue-600">Storage</span> Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep 
              number="1"
              title="Choose Your Unit"
              description="Select the right size and features for your needs"
            />
            <ProcessStep 
              number="2"
              title="Schedule Delivery"
              description="We can pick up your items or you can bring them"
            />
            <ProcessStep 
              number="3"
              title="Secure Storage"
              description="Your items are safely stored and monitored"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Reserve Your Storage Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free quote and tour our facilities today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              View Storage Plans
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Schedule Facility Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const FeatureItem = ({ icon, title, description }) => (
  <li className="flex">
    <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </li>
);

const StoragePlan = ({ title, size, price, description, icon, featured = false }) => (
  <div className={`border rounded-xl p-6 h-full ${featured ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
    {featured && (
      <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
        POPULAR CHOICE
      </div>
    )}
    <div className="text-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{title}</h3>
    <div className="bg-blue-50 p-4 rounded-lg mb-4 text-center">
      <p className="font-semibold text-blue-800">{size}</p>
      <p className="text-gray-700">{price}</p>
    </div>
    <p className="text-gray-600 text-center mb-4">{description}</p>
    <button className={`w-full py-2 px-4 rounded-lg font-medium ${featured ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
      Learn More
    </button>
  </div>
);

const SecurityFeature = ({ feature, description }) => (
  <li className="border-l-4 border-blue-600 pl-4 py-1">
    <h4 className="font-bold text-gray-800">{feature}</h4>
    <p className="text-gray-600">{description}</p>
  </li>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 mx-auto">
      {number}
    </div>
    <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default SafeStorage;