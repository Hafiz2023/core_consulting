"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const stats = [
  { number: 2450, label: "PLACEMENT" },
  { number: 13, label: "YEARS EXPERIENCE", suffix: "+" },
  { number: 300, label: "UNIVERSITIES", suffix: "+" },
  { number: 22, label: "COUNTRIES", suffix: "+" },
];

export default function SomeFacts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;
    controls.start("visible");

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, idx) => {
          const target = stats[idx].number;
          const step = Math.ceil(target / 60);
          return val < target ? Math.min(val + step, target) : target;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_#c7d2fe,_transparent_70%)]"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={controls}
        variants={{ visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="inline-block px-8 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg md:text-xl rounded-lg shadow-md tracking-wide">
          SOME FACTS
        </h2>
        <div className="w-16 h-1 bg-orange-400 mx-auto mt-2 rounded-full"></div>
      </motion.div>

      {/* Stats */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } },
            }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 relative overflow-hidden"
          >
            {/* inner glow layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight drop-shadow-sm transition-all duration-300 group-hover:text-indigo-700">
              {counts[i]}
              {item.suffix && counts[i] >= item.number ? item.suffix : ""}
            </h3>

            <p className="uppercase text-gray-600 tracking-wider text-sm md:text-base font-medium">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
