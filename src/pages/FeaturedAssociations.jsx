import React from 'react'
import { motion } from "framer-motion";
import Logo from "../assets/Logo3.png";

const FeaturedAssociations = () => {
    const partners = [
      { name: "Indian Packers Association", logo: Logo },
      { name: "Logistics India",  logo: Logo },
      { name: "Transport Guild",  logo: Logo },
      { name: "Transport Guild",  logo: Logo },
      { name: "Transport Guild",  logo: Logo },
      { name: "Transport Guild",  logo: Logo },
      { name: "Transport Guild",  logo: Logo },
      { name: "Safety First Movers",  logo: Logo }
    ];
  
    return (
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Trusted Partners
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Associated with leading organizations in the relocation industry
            </motion.p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="flex justify-center items-center"
              >
                <div className="group relative w-full max-w-[200px] p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-xl transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

export default FeaturedAssociations;