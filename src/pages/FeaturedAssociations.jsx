import React from 'react'
import { motion } from "framer-motion";
import Tp from "../assets/Trusted Partner/TP_Blue.webp";
import Ts from "../assets/Trusted Partner/Tata-steel.jpeg";
import LT from "../assets/Trusted Partner/L&T.webp";

const FeaturedAssociations = () => {
    const partners = [
      { name: "Indian Packers Association", logo: Tp },
      { name: "Transport Guild",  logo: LT },
      { name: "Logistics India",  logo: Ts }
    ];

    const floatingVariants = {
      float: {
        y: [0, -15, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    };

    return (
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-gray-50 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Our Trusted Partners
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "backOut" }}
              className="w-48 h-1.5 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Associated with leading organizations in the relocation industry
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="flex justify-center items-center"
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    rotate: index % 2 === 0 ? 2 : -2,
                  }}
                  variants={floatingVariants}
                  animate="float"
                  className="group relative w-full max-w-[240px] p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                  </div>

                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300 pointer-events-none" />

                  <div className="aspect-square flex items-center justify-center relative z-10">
                    <motion.img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-8 h-8 bg-purple-300/30 rounded-full blur-sm"
            variants={floatingVariants}
            animate="float"
          />
          <motion.div
            className="absolute bottom-1/3 right-20 w-12 h-12 bg-blue-300/30 rounded-full blur-sm"
            variants={floatingVariants}
            animate="float"
          />
        </div>
      </motion.section>
    );
  };

export default FeaturedAssociations;