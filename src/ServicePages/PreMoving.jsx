import React from "react";
import { FaClipboardCheck, FaCalendarAlt, FaBoxes, FaMapMarkedAlt, FaTools, FaHeadset } from "react-icons/fa";
import planningImage from '../assets/Banner4.jpg';
import checklistImage from '../assets/Banner6.jpg';

const PreMoving = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">Pre-Moving</span> Consultation & Planning
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert guidance to streamline your relocation process and eliminate moving-day stress
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Services Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <img 
              src={planningImage} 
              alt="Moving planning session" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Your <span className="text-blue-600">Stress-Free Move</span> Starts Here
            </h2>
            <p className="text-gray-600 text-lg">
              Our pre-moving consultation service helps you anticipate challenges, create a customized moving plan, 
              and ensure nothing gets overlooked during your relocation.
            </p>
            <ul className="space-y-4">
              <ServiceFeature 
                icon={<FaClipboardCheck className="text-blue-600" />}
                text="Customized moving timeline"
              />
              <ServiceFeature 
                icon={<FaCalendarAlt className="text-blue-600" />}
                text="Priority task scheduling"
              />
              <ServiceFeature 
                icon={<FaBoxes className="text-blue-600" />}
                text="Packing strategy development"
              />
            </ul>
          </div>
        </div>

        {/* Consultation Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of <span className="text-blue-600">Pre-Moving</span> Consultation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<FaMapMarkedAlt className="text-blue-600 text-2xl" />}
              title="Strategic Planning"
              description="Custom roadmap for your entire moving process"
            />
            <BenefitCard 
              icon={<FaTools className="text-blue-600 text-2xl" />}
              title="Resource Optimization"
              description="Right-size services to fit your needs and budget"
            />
            <BenefitCard 
              icon={<FaHeadset className="text-blue-600 text-2xl" />}
              title="Expert Guidance"
              description="Professional advice from experienced movers"
            />
          </div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Consultation</span> Includes
            </h2>
            <ul className="space-y-4">
              <ConsultationItem 
                title="Inventory Assessment"
                description="Detailed evaluation of all items to be moved"
              />
              <ConsultationItem 
                title="Timeline Creation"
                description="Custom schedule from packing to final setup"
              />
              <ConsultationItem 
                title="Specialty Item Review"
                description="Plan for fragile, valuable, or bulky items"
              />
              <ConsultationItem 
                title="Logistics Planning"
                description="Parking, elevator reservations, and access considerations"
              />
            </ul>
          </div>
          <div>
            <img 
              src={checklistImage} 
              alt="Moving checklist" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Consultation</span> Process
          </h2>
          <div className="space-y-8">
            <ProcessStep 
              number="1"
              title="Initial Contact"
              description="We discuss your moving needs and schedule a consultation"
            />
            <ProcessStep 
              number="2"
              title="On-Site Assessment"
              description="Walkthrough of your current space (in-person or virtual)"
            />
            <ProcessStep 
              number="3"
              title="Custom Plan Development"
              description="We create a tailored moving strategy"
            />
            <ProcessStep 
              number="4"
              title="Recommendation Review"
              description="Detailed discussion of our proposed solutions"
            />
            <ProcessStep 
              number="5"
              title="Service Scheduling"
              description="Booking your moving services with confidence"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Stress-Free Move?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your pre-moving consultation today and take the first step toward an organized relocation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Book Consultation
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Download Planning Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const ServiceFeature = ({ icon, text }) => (
  <li className="flex items-start">
    <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4 flex-shrink-0">
      {icon}
    </span>
    <span className="font-medium text-gray-700">{text}</span>
  </li>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg text-center h-full">
    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ConsultationItem = ({ title, description }) => (
  <div className="border-l-4 border-blue-600 pl-4 py-2">
    <h4 className="font-bold text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default PreMoving;