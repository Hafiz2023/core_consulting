
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react"; 

export default function PartnersSection() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, 
        delayChildren: 0.3,
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 }, 
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }, 
    },
  };


  const logoHoverEffect = {
    whileHover: { scale: 1.15, transition: { duration: 0.3, ease: "easeOut" } }, // Increased duration for smoother hover
    whileTap: { scale: 0.95 },
  };

  return (
    <section className="py-20 bg-gray-100">
      <motion.div
        className="container mx-auto px-6 max-w-7xl" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {/* Title Section */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 pb-3 inline-block relative">
            Our <span className="text-blue-700">CORE Services</span>
            <span className="absolute left-1/2 bottom-0 w-24 h-1 bg-blue-500 transform -translate-x-1/2 rounded-full"></span>
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Certified Partners */}
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1" // Added transform hover effect
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-100 w-full px-4"> {/* Adjusted width for border */}
              Certified <span className="text-orange-600">Partners</span>
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-10 min-h-[150px] flex-grow"> {/* Min-height increased, flex-grow added */}
              <motion.div {...logoHoverEffect}>
                <Image
                  src="/p1.png"
                  alt="PECB Logo" // Ensure meaningful alt text
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
              <motion.div {...logoHoverEffect}>
                <Image
                  src="/p2.png"
                  alt="FQA Logo"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
              <motion.div {...logoHoverEffect}>
                <Image
                  src="/p3.png"
                  alt="Certification Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* NCEMA Partner */}
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-green-100 w-full px-4">
              NCEMA 7000 <span className="text-green-700">Training Partner</span>
            </h3>
            <div className="flex justify-center items-center py-4 min-h-[150px] flex-grow">
              <motion.div {...logoHoverEffect}>
                <Image
                  src="/p4.png"
                  alt="GCAS Logo"
                  width={150}
                  height={70}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* BCM & IT DR Partner */}
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-purple-100 w-full px-4">
              BCM & IT DR <span className="text-purple-700">Solutions</span>
            </h3>
            <div className="flex justify-center items-center py-4 min-h-[150px] flex-grow">
              <motion.div {...logoHoverEffect}>
                <Image
                  src="/p5.png"
                  alt="Kenja Logo"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
