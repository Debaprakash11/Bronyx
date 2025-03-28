import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-14 m-1 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-600 text-sm text-center mb-6">Last updated: 25/12/2024</p>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
          <p className="text-gray-700 mt-2">
            At <strong>Bronyx Packers Movers</strong>, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
          </p>
        </section>

        {/* Collection of Personal Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">2. Collection of Personal Information</h2>
          <p className="text-gray-700 mt-2">We collect personal information when you:</p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Fill out a quote request form</li>
            <li>Contact us through our website or phone</li>
            <li>Use our services</li>
          </ul>
          <p className="text-gray-700 mt-2">The information we may collect includes:</p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Payment information</li>
          </ul>
        </section>

        {/* Use of Personal Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">3. Use of Personal Information</h2>
          <p className="text-gray-700 mt-2">We use your personal information to:</p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Provide service quotes</li>
            <li>Contact you about our services</li>
            <li>Process payments</li>
            <li>Improve our services</li>
          </ul>
          <p className="text-gray-700 mt-2">
            We may also send promotional emails or special offers, which you can opt out of at any time.
          </p>
        </section>

        {/* Data Protection */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">4. Protection of Personal Information</h2>
          <p className="text-gray-700 mt-2">We take security seriously and implement the following measures:</p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>SSL encryption for secure transactions</li>
            <li>Restricted access to personal data</li>
            <li>Security protocols to prevent unauthorized access</li>
          </ul>
        </section>

        {/* Disclosure of Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">5. Disclosure of Personal Information</h2>
          <p className="text-gray-700 mt-2">Your data may be shared with:</p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Employees and agents of Bronyx Packers Movers</li>
            <li>Third-party service providers</li>
            <li>Law enforcement authorities as required by law</li>
          </ul>
        </section>

        {/* Cookies & Tracking */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">6. Cookies and Tracking</h2>
          <p className="text-gray-700 mt-2">
            We use cookies and tracking technologies to improve your experience on our website.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">7. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mt-2">
            We may update this Privacy Policy from time to time. Changes take effect immediately upon posting.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">8. Contact Us</h2>
          <p className="text-gray-700 mt-2">
            If you have any questions, please contact us at <strong>bronyxpackers@gmail.com</strong>.
          </p>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>© {new Date().getFullYear()} Bronyx Packers Movers. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
