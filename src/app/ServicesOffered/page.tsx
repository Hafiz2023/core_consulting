"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mic,
  Settings,
  Plane,
  Truck,
  Home,
  PenTool,
  CreditCard,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "FREE INITIAL COUNSELING",
    description:
      "We provide free counseling sessions to help students and professionals choose the right study or career path.",
  },
  {
    icon: Settings,
    title: "FAST PROCESSING",
    description:
      "Our team ensures smooth and fast document processing for all your visa and admission applications.",
  },
  {
    icon: Plane,
    title: "STUDYING ABROAD",
    description:
      "We guide students through university selection, admission, and visa process for studying abroad.",
  },
  {
    icon: Truck,
    title: "IMMIGRATION",
    description:
      "We help with immigration planning, documentation, and application tracking for multiple destinations.",
  },
  {
    icon: Clock,
    title: "VISITS/APPEALS",
    description:
      "Our experts assist with visit visa applications and appeal cases to improve your approval chances.",
  },
  {
    icon: Home,
    title: "MBBS IN EUROPE",
    description:
      "We help aspiring doctors get admission to top and affordable European medical universities.",
  },
  {
    icon: PenTool,
    title: "SCHOLARSHIP",
    description:
      "We assist in finding and applying for scholarships globally, ensuring financial support for your studies.",
  },
  {
    icon: CreditCard,
    title: "VISA INFORMATION AND ASSISTANCE",
    description:
      "We provide accurate and updated visa guidance and support throughout your journey.",
  },
];

export default function ServicesOffered() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
          Services Offered by Core Consultants
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-orange-400 mx-auto mt-3 rounded-full"></div>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && handleClick(index)
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className={`cursor-pointer bg-white relative border rounded-2xl shadow-sm p-8 flex flex-col justify-center items-center text-center min-h-[14rem] 
                transition-all duration-500 ease-in-out hover:shadow-xl focus:ring-2 focus:ring-indigo-400 outline-none
                ${
                  isActive
                    ? "border-indigo-500 shadow-indigo-200"
                    : "border-gray-200"
                }`}
            >
              {/* Animated border highlight */}
              {isActive && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 border-2 border-indigo-400 rounded-2xl shadow-md pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Toggle Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {!isActive ? (
                  <>
                    <Icon className="w-10 h-10 mb-4 text-indigo-600 transition-all duration-300" />
                    <h3 className="text-sm md:text-base font-semibold uppercase text-gray-800 leading-tight">
                      {service.title}
                    </h3>
                  </>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed mt-2 px-2">
                    {service.description}
                  </p>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
