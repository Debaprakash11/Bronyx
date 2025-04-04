import React from 'react';
import { FaBoxOpen, FaShieldAlt, FaTools, FaClock, FaTruck, FaHandHolding } from 'react-icons/fa';
import materialsImage from '../assets/Banner5.jpg';
import fragileImage from '../assets/Banner2.jpg';

const PackingAndMoving = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Packing & Moving</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive packing solutions with premium materials to ensure your belongings arrive safely
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard 
            icon={<FaBoxOpen className="text-blue-600 text-3xl" />}
            title="Full Packing Service"
            description="We handle all packing from start to finish with premium materials"
          />
          <ServiceCard 
            icon={<FaTools className="text-blue-600 text-3xl" />}
            title="Partial Packing"
            description="Custom packing for just the items you need help with"
          />
          <ServiceCard 
            icon={<FaHandHolding className="text-blue-600 text-3xl" />}
            title="Self-Packing Support"
            description="Quality materials and expert guidance for DIY packers"
          />
        </div>

        {/* Packing Materials Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Premium <span className="text-blue-600">Packing Materials</span>
              </h2>
              <ul className="space-y-4">
                <MaterialItem 
                  icon={<FaShieldAlt className="text-blue-600" />}
                  text="Heavy-duty boxes in various sizes"
                />
                <MaterialItem 
                  icon={<FaShieldAlt className="text-blue-600" />}
                  text="Bubble wrap and foam padding"
                />
                <MaterialItem 
                  icon={<FaShieldAlt className="text-blue-600" />}
                  text="Specialty containers for fragile items"
                />
                <MaterialItem 
                  icon={<FaShieldAlt className="text-blue-600" />}
                  text="Furniture blankets and padding"
                />
                <MaterialItem 
                  icon={<FaShieldAlt className="text-blue-600" />}
                  text="High-quality packing tape and tools"
                />
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src={materialsImage} 
                alt="Packing materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Specialty Packing Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <img 
              src={fragileImage} 
              alt="Fragile item packing" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Specialty Item</span> Packing
            </h2>
            <div className="space-y-6">
              <SpecialtyItem 
                title="Fragile Items"
                description="Extra care for glassware, artwork, and electronics with custom crating when needed"
              />
              <SpecialtyItem 
                title="Valuable Collections"
                description="Special handling for antiques, wine collections, and memorabilia"
              />
              <SpecialtyItem 
                title="Large Items"
                description="Professional packing for pianos, pool tables, and heavy machinery"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of <span className="text-blue-600">Professional Packing</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={<FaShieldAlt className="text-blue-600 text-2xl" />}
              title="Damage Protection"
              description="Significantly reduces risk of damage during transit"
            />
            <BenefitCard 
              icon={<FaClock className="text-blue-600 text-2xl" />}
              title="Time Savings"
              description="Saves you dozens of hours of packing work"
            />
            <BenefitCard 
              icon={<FaTruck className="text-blue-600 text-2xl" />}
              title="Efficient Moving"
              description="Proper packing makes loading and transport easier"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Stress-Free Packing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free quote from our packing specialists today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Your Free Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Download Packing Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 h-full">
    <div className="text-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const MaterialItem = ({ icon, text }) => (
  <li className="flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
      {icon}
    </span>
    <span className="font-medium">{text}</span>
  </li>
);

const SpecialtyItem = ({ title, description }) => (
  <div className="border-l-4 border-blue-600 pl-4">
    <h4 className="font-bold text-lg text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-center mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default PackingAndMoving;