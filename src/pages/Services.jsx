import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HouseholdImg from "../assets/Banner4.jpg";
import LoadingImg from "../assets/Banner6.jpg";
import PackImg from "../assets/Banner2.jpg";

const services = [
  { name: "Packing And Moving", img: PackImg, path: "/services/packingandmoving" },
  { name: "Car Shifting", img: HouseholdImg, path: "/services/carshifting" },
  { name: "Bike Shifting", img: HouseholdImg, path: "/services/bikeshifting" },
  { name: "Home Shifting", img: HouseholdImg, path: "/services/householdshifting" },
  { name: "Insurance", img: HouseholdImg, path: "/services/insurance" },
  { name: "Loading & Unloading", img: LoadingImg, path: "/services/loadingandunloading" },
  { name: "Office Moving", img: HouseholdImg, path: "/services/officeshifting" },
  { name: "Pre-Moving", img: HouseholdImg, path: "/services/premoving" },
  { name: "Quotation", img: HouseholdImg, path: "/services/quotation" },
  { name: "Safe Storage", img: HouseholdImg, path: "/services/safestorage" },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our Professional Services
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-blue-600 mx-auto"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="group bg-white rounded-xl shadow-lg overflow-hidden relative cursor-pointer"
          >
            <div className="overflow-hidden relative h-56">
              <motion.img
                variants={imageVariants}
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>

            <div className="p-6 text-center absolute bottom-0 left-0 right-0 z-10">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                {service.name}
              </h3>
              <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                Reliable {service.name} services with professional care
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={service.path}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg 
                            shadow-md transition-colors duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;