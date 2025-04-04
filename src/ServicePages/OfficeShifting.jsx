import React from 'react';
import { FaBuilding, FaTruckMoving, FaLaptop, FaChair, FaTools, FaShieldAlt } from 'react-icons/fa';
import officeMoving1 from '../assets/Banner4.jpg';
import officeMoving2 from '../assets/Banner6.jpg';
import officeSetup from '../assets/Banner.jpeg';

const OfficeShifting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-yellow-300">Office Relocation</span> Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Minimize downtime with our comprehensive office moving solutions tailored for businesses of all sizes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Free Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-blue-600">Office Moving</span> Solutions
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard 
            icon={<FaBuilding className="text-blue-600 text-3xl" />}
            title="Complete Office Packing"
            description="Professional packing of all office equipment, furniture, and documents"
          />
          <ServiceCard 
            icon={<FaTruckMoving className="text-blue-600 text-3xl" />}
            title="Secure Transportation"
            description="Specialized vehicles for safe transport of office assets"
          />
          <ServiceCard 
            icon={<FaLaptop className="text-blue-600 text-3xl" />}
            title="IT Equipment Handling"
            description="Expert relocation of computers, servers, and network systems"
          />
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            Our <span className="text-blue-600">Office Moving</span> Process
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={officeMoving1} 
                alt="Office moving process" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <ol className="space-y-6">
                <ProcessStep 
                  number="1"
                  title="Pre-Move Planning"
                  description="Detailed assessment and customized moving plan"
                />
                <ProcessStep 
                  number="2"
                  title="Inventory Management"
                  description="Comprehensive cataloging of all office items"
                />
                <ProcessStep 
                  number="3"
                  title="Secure Packing"
                  description="Professional packing with appropriate materials"
                />
                <ProcessStep 
                  number="4"
                  title="Efficient Transportation"
                  description="Timely relocation with tracking"
                />
                <ProcessStep 
                  number="5"
                  title="New Office Setup"
                  description="Complete reassembly and arrangement"
                />
              </ol>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            <span className="text-blue-600">Business-Centric</span> Features
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-6">
                <FeatureItem 
                  icon={<FaShieldAlt className="text-blue-600" />}
                  title="Minimal Downtime"
                  description="After-hours and weekend moves available to avoid business disruption"
                />
                <FeatureItem 
                  icon={<FaChair className="text-blue-600" />}
                  title="Furniture Services"
                  description="Disassembly, transport, and reassembly of office furniture"
                />
                <FeatureItem 
                  icon={<FaTools className="text-blue-600" />}
                  title="Specialty Equipment"
                  description="Handling of lab equipment, medical devices, and other specialized items"
                />
              </ul>
            </div>
            <div>
              <img 
                src={officeSetup} 
                alt="Office setup" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            Why Choose <span className="text-blue-600">Our Office Moving</span> Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard 
              title="Experienced Teams"
              description="Specialists trained in office relocations"
            />
            <BenefitCard 
              title="Insurance Coverage"
              description="Comprehensive protection for your assets"
            />
            <BenefitCard 
              title="Custom Solutions"
              description="Tailored plans for your specific needs"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            Our <span className="text-blue-600">Office Moving</span> Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src={officeMoving1} 
              alt="Office moving project 1" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={officeMoving2} 
              alt="Office moving project 2" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Office Move?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Get a free consultation with our office relocation specialists
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Your Free Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Download Moving Checklist
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

const ProcessStep = ({ number, title, description }) => (
  <li className="flex">
    <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </li>
);

const FeatureItem = ({ icon, title, description }) => (
  <li className="flex">
    <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </li>
);

const BenefitCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
    <h4 className="font-bold text-lg mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default OfficeShifting;