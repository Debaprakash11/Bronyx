import React from "react";
import { FaWallet, FaCalendarCheck, FaTruck, FaPiggyBank } from "react-icons/fa";
import budgetMovingImage from '../assets/Banner6.jpg';
import savingImage from '../assets/Banner.jpeg';

const SmartMoveBudget = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
          <FaWallet className="mr-2" />
          <span>Affordable Moving</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="text-blue-600">Smart Move Budget</span> Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Quality moving services designed to fit your budget without compromising on safety or reliability
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Value Proposition */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <img 
              src={budgetMovingImage} 
              alt="Budget-friendly moving" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              How We Make Moving <span className="text-blue-600">Affordable</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our budget-friendly approach combines smart logistics with flexible service options to deliver exceptional value.
            </p>
            <ul className="space-y-4">
              <FeatureItem 
                icon={<FaPiggyBank className="text-blue-600" />}
                title="Cost-Efficient Planning"
                description="Strategic move scheduling to reduce costs"
              />
              <FeatureItem 
                icon={<FaCalendarCheck className="text-blue-600" />}
                title="Flexible Timing"
                description="Discounts for mid-week and off-peak moves"
              />
              <FeatureItem 
                icon={<FaTruck className="text-blue-600" />}
                title="Right-Sized Vehicles"
                description="Perfectly matched trucks to avoid wasted space"
              />
            </ul>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Budget</span> Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingPlan 
              title="Basic Move"
              price="$499"
              features={[
                "1-2 bedroom home",
                "Local moving",
                "5 hours of service",
                "Basic liability coverage"
              ]}
            />
            <PricingPlan 
              title="Standard Move"
              price="$899"
              features={[
                "2-3 bedroom home",
                "Local/regional",
                "8 hours of service",
                "Enhanced coverage",
                "2 movers"
              ]}
              featured
            />
            <PricingPlan 
              title="Custom Move"
              price="Custom Quote"
              features={[
                "Tailored to your needs",
                "Any home size",
                "Flexible hours",
                "Premium coverage options",
                "Dedicated coordinator"
              ]}
            />
          </div>
        </div>

        {/* Money Saving Tips */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-blue-600">Save More</span> on Your Move
            </h2>
            <ul className="space-y-6">
              <TipItem 
                title="Declutter First"
                description="Reduce volume by donating/selling items you no longer need"
              />
              <TipItem 
                title="Pack Yourself"
                description="Save on packing services by handling it yourself"
              />
              <TipItem 
                title="Flexible Dates"
                description="Mid-month and weekday moves often cost less"
              />
              <TipItem 
                title="Combine Services"
                description="Bundle packing and storage for discounts"
              />
            </ul>
          </div>
          <div>
            <img 
              src={savingImage} 
              alt="Money saving tips for moving" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our <span className="text-blue-600">Budget-Conscious</span> Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Saved 30% compared to other quotes without sacrificing quality"
              name="Sarah K."
              rating={5}
            />
            <Testimonial 
              quote="The team worked efficiently to keep costs down - very impressed"
              name="Michael T."
              rating={5}
            />
            <Testimonial 
              quote="Honest pricing with no hidden fees, just as promised"
              name="The Johnson Family"
              rating={4}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full mb-4">
            <FaWallet className="mr-2" />
            <span>Limited Time Offer</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for an Affordable Move?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your personalized budget estimate today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Your Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg transition duration-300">
              Download Savings Guide
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

const PricingPlan = ({ title, price, features, featured = false }) => (
  <div className={`border rounded-xl p-6 h-full ${featured ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
    {featured && (
      <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
        BEST VALUE
      </div>
    )}
    <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{title}</h3>
    <div className="text-center mb-6">
      <span className="text-4xl font-bold text-blue-600">{price}</span>
      {price !== "Custom Quote" && <span className="text-gray-500"> starting at</span>}
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-bold ${featured ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
      Choose Plan
    </button>
  </div>
);

const TipItem = ({ title, description }) => (
  <div className="border-l-4 border-blue-600 pl-4 py-1">
    <h4 className="font-bold text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Testimonial = ({ quote, name, rating }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
      ))}
    </div>
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="font-medium text-gray-800">— {name}</p>
  </div>
);

export default SmartMoveBudget;