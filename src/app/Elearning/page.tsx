"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Elearning = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:px-10 lg:px-20 max-w-6xl">
      {/* 🌟 Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wide underline underline-offset-8 decoration-cyan-600"
      >
        E-Learning
      </motion.h1>

      {/* 💡 Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-14 text-gray-700 text-lg md:text-xl leading-relaxed md:leading-8"
      >
        <p className="mb-6">
          <span className="font-semibold text-cyan-700">E-learning</span> is a
          modern method of training delivered through digital platforms such as
          computers, tablets, or mobile devices. It empowers learners to study
          <span className="text-blue-700 font-semibold"> anytime, anywhere, </span>
          making education accessible and engaging for all.
        </p>

        <p className="mb-6">
          This approach is{" "}
          <span className="font-semibold text-blue-700">highly cost-effective</span>
          , especially when training large audiences or delivering repetitive
          learning content. Learners can revisit modules at their own pace,
          improving retention and understanding.
        </p>

        <p className="mb-6">
          Another major benefit of eLearning is{" "}
          <span className="text-indigo-600 font-semibold">global accessibility</span>.
          Organizations can train employees across different countries
          simultaneously, ensuring uniform knowledge and consistency.
        </p>

        <p>
          You can{" "}
          <span className="text-cyan-700 font-semibold">click the image below</span>{" "}
          to view a demo of our eLearning capabilities. Our modules are
          available in{" "}
          <span className="text-indigo-700 font-semibold">English</span> and{" "}
          <span className="text-indigo-700 font-semibold">Arabic</span>{" "}
          languages.
        </p>
      </motion.section>

      {/* 🧠 BCM Awareness Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 underline underline-offset-8 decoration-cyan-700 mb-6">
          BCM Awareness
        </h2>

        {/* 📸 Image Card */}
        <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-lg group">
          {/* Top Label */}
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-gray-800 font-semibold px-4 py-1 rounded-md text-sm">
            English Version
          </div>

          {/* Image */}
          <Image
            src="/bcm-English.jpg"
            alt="BCM Awareness English Version"
            width={800}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
            <p className="text-white text-lg font-medium mb-6 px-6 text-center">
              Click to explore our BCM Awareness eLearning demo
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Elearning;
