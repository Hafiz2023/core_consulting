"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CoreConsultingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* 🔹 Gradient Background with Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-100 to-purple-200" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

      {/* 🔹 Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-28 flex flex-col lg:flex-row gap-10 items-center justify-between">
        
        {/* 🟦 Left Side - Text (Slide In From Left Slowly) */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left backdrop-blur-lg bg-white/80 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent"
          >
            Core Consulting Services
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
          >
            Helping businesses grow with strategic insights, digital
            transformation, and innovative solutions. We combine expertise and
            technology to create measurable success and long-term impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="/AboutUs/OurTeam"
              className="relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
              <span className="relative">Explore Services</span>
            </Link>

            <Link
              href="/Contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-500"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* 🟣 Right Side - Image (Slide In From Right Slowly) */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          {/* Glow Circle */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -inset-10 bg-gradient-to-tr from-blue-300/40 via-purple-300/30 to-pink-200/30 rounded-full blur-3xl"
          />

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
            <Image
              src="/CoreConsulting.jpg"
              alt="Consulting Team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
