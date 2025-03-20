import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>Welcome to our logistics service. By accessing or using our platform, you agree to be bound by these terms and conditions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
          <p>We offer a range of logistics services including household shifting, packing, loading, unloading, and unpacking. The specific terms for each service are outlined in your service agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p>You are responsible for providing accurate information, ensuring your items are securely packed, and complying with all applicable laws.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Payments and Refunds</h2>
          <p>All payments must be completed before the service begins. Refund policies are applicable as per the agreed contract.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>We are not responsible for any indirect damages or loss arising from the use of our services, except as required by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>If you have any questions about these terms, please contact us at support@yourlogisticsapp.com.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;