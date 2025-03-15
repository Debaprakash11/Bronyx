import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 p-8 md:p-16 rounded-3xl shadow-lg max-w-4xl mx-auto my-12 mt-20">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900 animate-fadeInUp">Contact Us</h1>
      <p className="text-xl text-center mb-8 text-gray-700 opacity-90 animate-fadeInUp animation-delay-300">
        We'd love to hear from you. Reach out to us through the following:
      </p>

      <div className="flex flex-col items-center md:flex-row justify-center space-y-6 md:space-x-12 md:space-y-0 animate-fadeInUp animation-delay-500">
        <div className="flex items-center space-x-4">
          <span className="text-3xl text-blue-600">📧</span>
          <p className="text-lg text-gray-800 font-semibold">support@logistics.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-3xl text-blue-600">📞</span>
          <p className="text-lg text-gray-800 font-semibold">+123 456 7890</p>
        </div>
      </div>

      {/* Animation for Contact Section */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};

export default Contact;
