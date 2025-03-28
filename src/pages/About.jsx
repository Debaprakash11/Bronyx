import React from 'react';
import pcc from '../assets/Banner4.jpg'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-24 px-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">About Us</h1>
        
        <p className="text-gray-600 text-lg mb-6">
          At <strong>BRONYX</strong>, we've been providing reliable packing and moving services for <strong>5</strong> years.
          Our team of experts is dedicated to making your relocation experience as smooth and stress-free as possible.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>
        <p className="text-gray-700 text-lg mb-6">
          Our mission is to deliver exceptional customer service, ensure the safe transportation of your belongings,
          and provide affordable solutions for all your packing and moving needs.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Values</h2>
        <ul className="text-gray-700 text-lg list-disc pl-6 space-y-2 text-left">
          <li><strong>Integrity:</strong> We operate with honesty and transparency in all our interactions.</li>
          <li><strong>Quality:</strong> We strive for excellence in every aspect of our services.</li>
          <li><strong>Customer Focus:</strong> We prioritize your needs and tailor our services to meet your unique requirements.</li>
        </ul>
        
        <div className="mt-8">
          <img
            src={pcc}
            alt="About Us"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
