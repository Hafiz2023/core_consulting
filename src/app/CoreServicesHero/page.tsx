"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CoreConsultingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* 🔹 Darker but Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-100 to-purple-200" />

      {/* 🔹 Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40 flex flex-col lg:flex-row gap-10 items-center justify-between">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left backdrop-blur-md bg-white/80 p-10 rounded-2xl shadow-2xl border border-gray-200 hover:scale-105 hover:shadow-3xl transition-all duration-500"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            Core Consulting Services
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Helping businesses grow with strategic insights, digital transformation, 
            and innovative solutions. We combine expertise and technology to create 
            measurable success and long-term impact.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.div whileHover={{ scale: 1.08 }}>
              <Link
                href="/AboutUs/OurTeam"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }}>
              <Link
                href="/Contact"
                className="px-6 py-3 border-2 border-blue-500 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Illustration / Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full h-[350px] sm:h-[450px] lg:h-[520px] flex items-center justify-center"
        >
          {/* Glow Layer */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-blue-400/40 to-purple-400/40 rounded-full blur-3xl"
          />

          {/* Image with Zoom Hover */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/CoreConsulting.jpg"
              alt="Consulting Team"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
