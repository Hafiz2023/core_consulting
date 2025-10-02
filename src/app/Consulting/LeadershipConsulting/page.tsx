"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipConsulting() {
  const [showMore, setShowMore] = useState(false);

  const highlight = (text: string) => (
    <span className="text-blue-700 font-semibold">{text}</span>
  );

  const sections = [
    {
      id: 1,
      title: "Empowering Future Leaders",
      text: (
        <>
          In today’s fast-paced world, {highlight("leadership")} is not just
          about authority—it’s about {highlight("vision")},{" "}
          {highlight("influence")}, and {highlight("resilience")}. Our
          consulting empowers leaders to build{" "}
          {highlight("innovative organizations")} that can adapt and thrive in
          uncertain environments.
        </>
      ),
      extra: (
        <>
          We work with emerging and established leaders to strengthen
          confidence, sharpen communication skills, and embrace challenges as
          opportunities. Through mentorship and structured programs, we guide
          individuals to unlock their true potential.
        </>
      ),
      image: "/pic1.png",
    },
    {
      id: 2,
      title: "Our Approach",
      text: (
        <>
          We blend {highlight("executive coaching")},{" "}
          {highlight("leadership workshops")}, and{" "}
          {highlight("strategic frameworks")} that strengthen self-awareness,
          sharpen decision-making, and inspire effective leadership across all
          levels of your organization.
        </>
      ),
      extra: (
        <>
          Our unique methodology focuses on building long-term habits that drive
          growth. Leaders not only learn but also apply strategies in real
          scenarios, ensuring transformation is sustainable.
        </>
      ),
      image: "/pic2.png",
    },
    {
      id: 3,
      title: "Key Focus Areas",
      text: (
        <>
          We help leaders master {highlight("visionary thinking")},{" "}
          {highlight("emotional intelligence")},{" "}
          {highlight("change management")}, and {highlight("team empowerment")}.
        </>
      ),
      extra: (
        <>
          Additionally, we emphasize {highlight("conflict resolution")},{" "}
          {highlight("strategic planning")}, and fostering a culture of
          accountability. These skills ensure leaders are prepared to guide
          their organizations through dynamic challenges.
        </>
      ),
      image: "/pic2.png",
    },
    {
      id: 4,
      title: "Why Choose Us?",
      text: (
        <>
          Our team brings {highlight("global expertise")} and{" "}
          {highlight("proven methodologies")}. From one-on-one coaching to
          enterprise-wide programs, we help organizations build leaders who
          deliver {highlight("long-term value")}.
        </>
      ),
      extra: (
        <>
          With decades of collective experience, we bridge academic insights
          with practical solutions. Our consulting goes beyond theory—delivering
          measurable impact and lasting change.
        </>
      ),
      image: "/pic1.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 px-6 md:px-20 py-16">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-14 underline underline-offset-8 decoration-4 decoration-blue-600"
      >
        Leadership Consulting
      </motion.h1>

      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image (optional) */}
            {section.image && (
              <div className="relative w-full h-72 md:h-[380px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  style={{ objectFit: "contain" }} // 👈 face clear rakhne ke liye zoom fix
                  className="hover:scale-105 transition-transform duration-700"
                  priority={index === 0}
                />
              </div>
            )}

            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 underline underline-offset-4 decoration-blue-500">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                {section.text}
              </p>
              {showMore && (
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {section.extra}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-16 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
          className="px-8 py-3 bg-blue-700 text-white rounded-lg font-medium shadow-md hover:bg-blue-800 transition-all duration-300"
        >
          {showMore ? "Show Less" : "Read More"}
        </motion.button>
      </div>
    </div>
  );
}
