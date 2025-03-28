import React from "react";
import picture1 from '../assets/Banner2.jpg'
import picture2 from '../assets/Banner 3.jpg'

const UnloadingService = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16 px-6"> {/* Adjusted padding-top to make space for the navbar */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Efficient and Safe Unloading Solutions
        </h1>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Our expert unloading team ensures your belongings are unloaded safely and efficiently from our trucks. We use specialized equipment and techniques to protect your goods during unloading.
        </p>
        
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Unloading Options</h2>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8 space-y-3 text-left">
          <li><strong>Standard Unloading:</strong> Our team unloads your packed boxes and furniture from our trucks.</li>
          <li><strong>Furniture Reassembly:</strong> We reassemble furniture, such as beds and tables, to their original state.</li>
          <li><strong>Specialty Item Unloading:</strong> We have expertise in unloading specialty items, such as pianos, motorcycles, and heavy machinery.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Unloading Equipment and Techniques</h2>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8 space-y-3 text-left">
          <li><strong>Specialized Trucks:</strong> Our trucks are equipped with lift gates, ramps, and tie-downs to ensure safe unloading.</li>
          <li><strong>Unloading Straps and Dollies:</strong> We use heavy-duty straps and dollies to safely unload your goods.</li>
          <li><strong>Furniture Blankets and Pads:</strong> We use furniture blankets and pads to protect your goods from scratches and damage.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Benefits of Our Unloading Services</h2>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8 space-y-3 text-left">
          <li>Reduced risk of damage during unloading.</li>
          <li>Saved time and effort.</li>
          <li>Customized unloading solutions to fit your needs.</li>
          <li>Expert unloading team with specialized equipment and techniques.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Additional Services</h2>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8 space-y-3 text-left">
          <li><strong>Placement of Goods:</strong> We can place your goods in the desired location within your new home or office.</li>
          <li><strong>Debris Removal:</strong> We can remove packing debris and materials after unloading.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Get a Quote</h2>
        <p className="text-gray-700 text-lg mb-8">
          Fill out our online quote form to get a free estimate for our unloading services. Contact us to schedule a consultation with one of our unloading experts.
        </p>
        
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Get a Quote
          </button>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Unloading Process in Action</h3>
          <div className="flex flex-wrap justify-between gap-6">
          <img
              src={picture1}
              alt="Unloading Process"
              className="rounded-lg shadow-md w-full md:w-1/2"
            />
            <img
              src={picture2}
              alt="Furniture Unloading"
              className="rounded-lg shadow-md w-full md:w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnloadingService;
