import React from "react";
import { FaTruckLoading, FaBoxes, FaShieldAlt, FaClock, FaTools, FaHandHolding, FaPallet } from "react-icons/fa";
import loadingImg from '../assets/Banner6.jpg';
import unloadingImg from '../assets/Car Shifting/WhatsApp Image 2025-03-29 at 00.53.06_0ccba030.jpg';
import equipmentImg from '../assets/Car Shifting/WhatsApp Image 2025-03-29 at 00.53.08_100dc3d7.jpg';

const LoadingAndUnloading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-yellow-300">Loading & Unloading</span> Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Complete end-to-end solutions for safe and efficient handling of your goods
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
              Get Free Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
              <FaTools className="mr-2" /> Schedule Service
            </button>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Comprehensive <span className="text-blue-600">Loading & Unloading</span> Solutions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ServiceSection 
            icon={<FaTruckLoading className="text-blue-600 text-4xl mb-4" />}
            title="Professional Loading Services"
            features={[
              "Proper weight distribution planning",
              "Secure item placement and strapping",
              "Specialized equipment for heavy items",
              "Inventory management and documentation"
            ]}
            image={loadingImg}
            imageAlt="Professional loading team"
          />
          
          <ServiceSection 
            icon={<FaBoxes className="text-blue-600 text-4xl mb-4" />}
            title="Expert Unloading Services"
            features={[
              "Careful handling of all items",
              "Damage protection protocols",
              "Systematic unloading process",
              "Placement according to your needs"
            ]}
            image={unloadingImg}
            imageAlt="Professional unloading team"
          />
        </div>

        {/* Combined Benefits */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            Benefits of Our <span className="text-blue-600">Loading & Unloading</span> Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={<FaShieldAlt className="text-blue-600 text-2xl" />}
              title="Damage Prevention"
              description="Professional techniques to protect your goods"
            />
            <BenefitCard 
              icon={<FaClock className="text-blue-600 text-2xl" />}
              title="Time Efficiency"
              description="Quick and organized processes save you time"
            />
            <BenefitCard 
              icon={<FaHandHolding className="text-blue-600 text-2xl" />}
              title="Stress-Free Experience"
              description="We handle all the heavy lifting for you"
            />
          </div>
        </div>

        {/* Equipment Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            Our <span className="text-blue-600">Specialized Equipment</span>
          </h3>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <ul className="space-y-6">
                  <EquipmentItem 
                    icon={<FaPallet />}
                    text="Forklifts and pallet jacks"
                  />
                  <EquipmentItem 
                    icon={<FaTools />}
                    text="Loading ramps and lifts"
                  />
                  <EquipmentItem 
                    icon={<FaShieldAlt />}
                    text="Protective padding and blankets"
                  />
                  <EquipmentItem 
                    icon={<FaTruckLoading />}
                    text="Dollies and hand trucks"
                  />
                  <EquipmentItem 
                    icon={<FaBoxes />}
                    text="Strapping and securing equipment"
                  />
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={equipmentImg} 
                  alt="Loading and unloading equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            Our <span className="text-blue-600">Service Process</span>
          </h3>
          <div className="space-y-8">
            <ProcessStep 
              number="1"
              title="Initial Consultation"
              description="We assess your specific loading/unloading needs"
            />
            <ProcessStep 
              number="2"
              title="Equipment Preparation"
              description="Selecting the right tools for your items"
            />
            <ProcessStep 
              number="3"
              title="Loading Phase"
              description="Secure and organized placement of goods"
            />
            <ProcessStep 
              number="4"
              title="Transportation"
              description="Safe transit with proper securing"
            />
            <ProcessStep 
              number="5"
              title="Unloading Phase"
              description="Careful handling and placement at destination"
            />
            <ProcessStep 
              number="6"
              title="Final Verification"
              description="Ensuring everything is properly placed and undamaged"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Professional Loading & Unloading?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Get a free quote for our comprehensive handling services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Your Free Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Call Now: (123) 456-7890
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const ServiceSection = ({ icon, title, features, image, imageAlt }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
    <div className="p-6">
      <div className="text-center">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{title}</h3>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <img 
      src={image} 
      alt={imageAlt} 
      className="w-full h-48 object-cover"
    />
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg text-center">
    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-lg mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EquipmentItem = ({ icon, text }) => (
  <li className="flex items-center">
    <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
      {icon}
    </span>
    <span className="font-medium">{text}</span>
  </li>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default LoadingAndUnloading;