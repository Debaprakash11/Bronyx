import React, { useState, useEffect } from 'react';

function GetQuotationModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // For animation

  useEffect(() => {
    // Show the modal after 5 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      setFadeIn(true);
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const handleCancel = () => {
    setFadeIn(false); // Fade out the modal
    setTimeout(() => setIsModalOpen(false), 300); // Hide after animation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
    setFadeIn(false); // Fade out the modal
    setTimeout(() => setIsModalOpen(false), 300); // Hide after animation
  };

  return (
    isModalOpen && (
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-white p-6 rounded-lg w-96 shadow-lg transition-transform transform scale-95 duration-300">
          <h2 className="text-xl mb-4">Get Your Quotation</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Service</label>
              <input
                type="text"
                name="service"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default GetQuotationModal;
