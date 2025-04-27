import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaTruck, FaBoxOpen, FaHome, FaBuilding, FaCalendarAlt, FaWarehouse , FaRupeeSign} from "react-icons/fa";
import PackImg from "../assets/Banner4.jpg";
import CarImg from "../assets/Car Shifting/WhatsApp Image 2025-03-29 at 00.53.07_4f6bf4a8.jpg";
import BikeImg from "../assets/Banner6.jpg";
import HomeImg from "../assets/Banner5.jpg";
import InsuranceImg from "../assets/Banner5.jpg";
import LoadingImg from "../assets/Banner5.jpg";
import OfficeImg from "../assets/Banner.jpeg";
import PreMoveImg from "../assets/Banner2.jpg";
import QuoteImg from "../assets/Car Shifting/WhatsApp Image 2025-03-29 at 00.53.08_100dc3d7.jpg";
import StorageImg from "../assets/Car Shifting/WhatsApp Image 2025-03-29 at 00.53.08_100dc3d7.jpg";
import BudgetImg from "../assets/Car Shifting/WhatsApp Image 2025-03-29 at 00.53.07_55f4170d.jpg";

const services = [
  { 
    name: "Packing & Moving", 
    img: PackImg, 
    path: "/services/packingandmoving",
    icon: <FaBoxOpen className="text-blue-500 text-2xl" />,
    desc: "Professional packing services with premium materials"
  },
  { 
    name: "Car Shifting", 
    img: CarImg, 
    path: "/services/carshifting",
    icon: <FaTruck className="text-blue-500 text-2xl" />,
    desc: "Safe and secure car transportation nationwide"
  },
  { 
    name: "Bike Shifting", 
    img: BikeImg, 
    path: "/services/bikeshifting",
    icon: <FaTruck className="text-blue-500 text-2xl" />,
    desc: "Specialized bike transport with damage protection"
  },
  { 
    name: "Home Shifting", 
    img: HomeImg, 
    path: "/services/householdshifting",
    icon: <FaHome className="text-blue-500 text-2xl" />,
    desc: "Stress-free residential relocation services"
  },
  { 
    name: "Insurance", 
    img: InsuranceImg, 
    path: "/services/insurance",
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
    desc: "Comprehensive coverage for your belongings"
  },
  { 
    name: "Loading & Unloading", 
    img: LoadingImg, 
    path: "/services/loadingandunloading",
    icon: <FaTruck className="text-blue-500 text-2xl" />,
    desc: "Expert handling with proper equipment"
  },
  { 
    name: "Office Moving", 
    img: OfficeImg, 
    path: "/services/officeshifting",
    icon: <FaBuilding className="text-blue-500 text-2xl" />,
    desc: "Minimal downtime business relocation"
  },
  { 
    name: "Pre-Moving", 
    img: PreMoveImg, 
    path: "/services/premoving",
    icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
    desc: "Strategic planning for seamless relocation"
  },
  { 
    name: "Quotation", 
    img: QuoteImg, 
    path: "/services/quotation",
    icon: <FaRupeeSign className="text-blue-500 text-2xl" />,
    desc: "Transparent pricing with no hidden costs"
  },
  { 
    name: "Safe Storage", 
    img: StorageImg, 
    path: "/services/safestorage",
    icon: <FaWarehouse className="text-blue-500 text-2xl" />,
    desc: "Climate-controlled secure storage solutions"
  },
  { 
    name: "Smart Move Budget", 
    img: BudgetImg, 
    path: "/services/smartmovebudget",
    icon: <FaRupeeSign className="text-blue-500 text-2xl" />,
    desc: "Affordable moving without compromising quality"
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4"
          >
            <FaTruck className="mr-2" />
            <span>Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Comprehensive <span className="text-blue-600">Moving Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Professional services tailored to meet all your relocation needs with care and precision
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white rounded-xl shadow-md overflow-hidden relative cursor-pointer h-full flex flex-col"
            >
              <div className="overflow-hidden relative h-48">
                <motion.img
                  variants={imageVariants}
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.desc}
                </p>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start"
                >
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn more <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/booking"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg 
                      font-bold text-lg transition-all hover:shadow-xl"
          >
            Get a Custom Quote for Your Move
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;