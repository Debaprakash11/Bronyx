import React from 'react';
import { FaShieldAlt, FaFileContract, FaHandHoldingUsd, FaHeadset } from 'react-icons/fa';
import insuranceImage from '../assets/Banner5.jpg';
import documentImage from '../assets/Banner6.jpg';

const Insurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
          <FaShieldAlt className="mr-2" />
          <span>Moving Protection</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Comprehensive <span className="text-blue-600">Moving Insurance</span> Coverage
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your belongings with our flexible insurance options during transit
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Coverage Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <img 
              src={insuranceImage} 
              alt="Moving insurance protection" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Peace of Mind <span className="text-blue-600">Protection</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We offer multiple coverage options to safeguard your possessions during the moving process. 
              Our policies are designed to provide the right level of protection for your specific needs.
            </p>
            <ul className="space-y-4">
              <FeatureItem 
                icon={<FaShieldAlt className="text-blue-600" />}
                text="Full Value Protection for complete coverage"
              />
              <FeatureItem 
                icon={<FaFileContract className="text-blue-600" />}
                text="Released Value Protection at no extra cost"
              />
              <FeatureItem 
                icon={<FaHandHoldingUsd className="text-blue-600" />}
                text="Third-party insurance options available"
              />
            </ul>
          </div>
        </div>

        {/* Insurance Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Insurance</span> Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <InsurancePlan 
              title="Basic Coverage"
              coverage="60¢ per pound per article"
              description="Included at no additional charge, covers minimal protection"
              bestFor="Low-value items"
            />
            <InsurancePlan 
              title="Enhanced Protection"
              coverage="$1.50 per $100 valuation"
              description="Mid-level coverage for typical household goods"
              bestFor="Standard moves"
              featured
            />
            <InsurancePlan 
              title="Full Value Protection"
              coverage="Complete replacement cost"
              description="Comprehensive coverage for high-value items"
              bestFor="Valuable possessions"
            />
          </div>
        </div>

        {/* Claims Process */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Simple <span className="text-blue-600">Claims</span> Process
            </h2>
            <ol className="space-y-6">
              <ProcessStep 
                number="1"
                title="Document Damage"
                description="Notify us immediately and provide photos"
              />
              <ProcessStep 
                number="2"
                title="Submit Claim"
                description="Complete our straightforward claim form"
              />
              <ProcessStep 
                number="3"
                title="Review Process"
                description="We evaluate your claim promptly"
              />
              <ProcessStep 
                number="4"
                title="Resolution"
                description="Repair, replacement, or compensation"
              />
            </ol>
          </div>
          <div>
            <img 
              src={documentImage} 
              alt="Insurance documentation" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Insurance <span className="text-blue-600">Questions</span> Answered
          </h2>
          <div className="space-y-4">
            <FAQItem 
              question="What's the difference between basic and full coverage?"
              answer="Basic coverage provides minimal protection (60¢ per pound), while full coverage offers complete replacement value for damaged items."
            />
            <FAQItem 
              question="Are high-value items automatically covered?"
              answer="Special items like jewelry, art, or electronics may require additional coverage - please declare these when booking."
            />
            <FAQItem 
              question="How long does the claims process take?"
              answer="Most claims are resolved within 7-10 business days after we receive all required documentation."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full mb-4">
            <FaHeadset className="mr-2" />
            <span>Need Help?</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions About Moving Insurance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our insurance specialists are ready to help you choose the right coverage
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Our Team
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Download Coverage Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const FeatureItem = ({ icon, text }) => (
  <li className="flex items-start">
    <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4 flex-shrink-0">
      {icon}
    </span>
    <span className="font-medium text-gray-700">{text}</span>
  </li>
);

const InsurancePlan = ({ title, coverage, description, bestFor, featured = false }) => (
  <div className={`border rounded-xl p-6 h-full ${featured ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
    {featured && (
      <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
        MOST POPULAR
      </div>
    )}
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <div className="bg-blue-50 p-4 rounded-lg mb-4">
      <p className="font-semibold text-blue-800">Coverage:</p>
      <p className="text-gray-700">{coverage}</p>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="bg-gray-50 p-3 rounded-lg">
      <p className="text-sm font-medium text-gray-500">Best for:</p>
      <p className="text-gray-700">{bestFor}</p>
    </div>
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

const FAQItem = ({ question, answer }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h4 className="font-bold text-lg text-gray-800 mb-2">{question}</h4>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Insurance;