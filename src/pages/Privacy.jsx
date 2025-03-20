import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our logistics services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p>We may collect personal information such as your name, contact details, and address, as well as payment and transaction details.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use your information to provide, manage, and improve our services. This includes processing bookings, communicating with you, and handling payments.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>We implement security measures to protect your data from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p>We may share your information with third-party providers to deliver our services. These providers are required to safeguard your information.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p>You have the right to access, update, or delete your information. Please contact us to make a request.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at support@yourlogisticsapp.com.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
