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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40 flex flex-col lg:flex-row gap-10 items-center justify-between">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left backdrop-blur-lg bg-white/80 p-10 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500"
        >
          {/* Heading with Scale Effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent"
          >
            Core Consulting Services
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Helping businesses grow with strategic insights, digital
            transformation, and innovative solutions. We combine expertise and
            technology to create measurable success and long-term impact.
          </motion.p>

          {/* Buttons with Shine Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="/AboutUs/OurTeam"
              className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <span className="relative">Explore Services</span>
            </Link>

            <Link
              href="/Contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Illustration / Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center"
        >
          {/* Gradient Glow Circle Behind Image */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -inset-10 bg-gradient-to-tr from-blue-300/40 via-purple-300/30 to-pink-200/30 rounded-full blur-3xl"
          />

          {/* Image Wrapper with Frame & Hover Animation */}
          <motion.div
            whileHover={{ scale: 1.07, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500"
          >
            {/* Decorative Gradient Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />

            <Image
              src="/CoreConsulting.jpg"
              alt="Consulting Team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
