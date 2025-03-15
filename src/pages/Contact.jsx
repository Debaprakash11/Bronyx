import React from "react";

const Contact = () => {
  return (
    <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-12 mt-20">
      <h1 className="text-3xl font-semibold text-center mb-4 text-gray-800">Contact Us</h1>
      <p className="text-xl text-center mb-4 text-gray-600">We'd love to hear from you. Reach out to us through the following:</p>
      
      <div className="flex flex-col items-center md:flex-row justify-center space-y-4 md:space-x-8 md:space-y-0">
        <div className="flex items-center space-x-3">
          <span className="text-xl text-gray-800">📧</span>
          <p className="text-lg text-gray-600">support@logistics.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xl text-gray-800">📞</span>
          <p className="text-lg text-gray-600">+123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
