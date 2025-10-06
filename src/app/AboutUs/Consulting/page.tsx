"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Consulting() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="bg-gradient-to-br from-white via-indigo-50 to-blue-50 min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 mb-10 underline underline-offset-8 decoration-indigo-400"
        >
          Consulting
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-700 leading-relaxed mb-8 text-justify"
        >
          It is easy to “advise”. But in our opinion, what adds true value is
          not merely to “advise”, but to “implement”, to “hand-hold” and walk
          along with the customer till the finishing line. Our preferred
          approach is not just to “tell” or “advise” – but to “show how”, “do”
          and “hand-hold”. That way, we truly add value. Our success is to bring
          customer preparedness and competencies to a stage where you do not
          need us anymore — that’s when we know we’ve done justice to your
          faith in us.
        </motion.p>

        {/* Expandable Content */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                At{" "}
                <span className="font-semibold text-indigo-700">
                  Continuity and Resilience (CORE)
                </span>
                , we leverage our collective{" "}
                <span className="font-semibold">140+ man-years</span> of
                experience to assist clients in implementing Global Best
                Practices across domains like Sustainability, Crisis Management,
                Business Continuity, Disaster Recovery, Information Security, IT
                Service Management, Project Management, and Quality.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Time is money — and smart organizations save both by outsourcing
                their BCM initiatives to{" "}
                <span className="font-semibold text-indigo-700">CORE</span>. We
                are dedicated to helping BCM and DR practitioners raise their
                professional standards and competencies.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                What sets us apart is that our consultants have served as Domain
                Heads in global corporations — giving them real-world,
                hands-on experience. This allows us to anticipate challenges,
                address them proactively, and deliver results that truly matter.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                We also offer advisory services for{" "}
                <span className="font-semibold">
                  BCM / IT DR Tools, Notification Systems, and RaaS
                </span>{" "}
                (Recovery as a Service). Whether you need{" "}
                <span className="italic">Work Area Recovery (WAR)</span> or IT
                backup seats, we’ve got you covered.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Our consulting spans industries such as Telecom, Banking &
                Finance, Technology, Oil & Gas, Healthcare, Utilities, and
                Manufacturing. For real results, explore our{" "}
                <span className="text-indigo-700 font-semibold">
                  testimonials
                </span>{" "}
                and discover how we’ve made a difference.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowMore(!showMore)}
            className="flex items-center justify-center mx-auto gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            {showMore ? (
              <>
                <ChevronUp size={20} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                Get More
              </>
            )}
          </motion.button>
        </div>

        {/* Social Links */}
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
