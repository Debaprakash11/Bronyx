import React from "react";

const SmartMoveBudget = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Smart & Budget-Friendly Moving Solutions
        </h1>
        <p className="text-gray-700 text-lg">
          Moving doesn’t have to be expensive! Our Smart Move Budget 
          service offers cost-effective relocation options without 
          compromising on quality and safety. Get professional moving 
          services that fit your budget.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?moving,truck"
            alt="Budget-Friendly Moving"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get an Affordable Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartMoveBudget;
