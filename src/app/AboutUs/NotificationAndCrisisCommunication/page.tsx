"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CrisisManagement() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="bg-gradient-to-br from-white via-red-50 to-orange-50 min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* ✅ Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 mb-10 underline underline-offset-8 decoration-red-400"
        >
          Crisis Management
        </motion.h1>

        {/* ✅ Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-700 leading-relaxed mb-8 text-justify"
        >
          Crisis Management is the process by which an organization deals with disruptive
          and unexpected events that threaten to harm people, property, reputation,
          or operations. An effective crisis management framework ensures preparedness,
          timely response, and structured recovery — safeguarding both brand and business continuity.
        </motion.p>

        {/* ✅ Expandable Content */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Our{" "}
                <span className="font-semibold text-red-700">
                  Crisis Management Solutions
                </span>{" "}
                are designed to strengthen your organization’s ability to anticipate,
                respond, and recover from crises. We help develop{" "}
                <span className="font-semibold">crisis response plans, escalation protocols, and leadership playbooks</span>{" "}
                that ensure clear accountability and communication across all levels.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                We specialize in{" "}
                <span className="font-semibold">
                  crisis scenario planning, simulation exercises, and command center setup
                </span>{" "}
                — enabling decision-makers to take confident, data-driven actions.
                Our experts ensure your teams are trained to handle high-pressure situations
                through regular rehearsals and awareness programs.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Integrated with{" "}
                <span className="font-semibold text-red-700">
                  Business Continuity and Risk Management Frameworks
                </span>
                , our solutions ensure that crisis response does not work in isolation.
                We align strategic, operational, and reputational risk mitigation to achieve a
                coordinated, enterprise-wide resilience model.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Industries we serve include{" "}
                <span className="font-semibold">
                  Banking, Energy, Public Sector, Healthcare, Manufacturing, and Technology
                </span>
                . Whether managing natural disasters, cyber incidents, or media crises,
                our team helps your organization emerge stronger and more trusted.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Show More / Less Button */}
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowMore(!showMore)}
            className="flex items-center justify-center mx-auto gap-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
          >
            {showMore ? (
              <>
                <ChevronUp size={20} /> Show Less
              </>
            ) : (
              <>
                <ChevronDown size={20} /> Get More
              </>
            )}
          </motion.button>
        </div>

        {/* ✅ Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex justify-center gap-8 text-lg"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-blue-700 hover:text-blue-900 hover:underline transition-all"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-sky-500 hover:text-sky-700 hover:underline transition-all"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="text-red-600 hover:text-red-800 hover:underline transition-all"
          >
            YouTube
          </a>
        </motion.div>
      </div>
    </main>
  );
}
