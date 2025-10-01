"use client";

import React, { useState } from "react";

export default function Consulting() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-10 underline underline-offset-8 decoration-4 decoration-indigo-500">
        Consulting Services
      </h1>

      {/* Short Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
        At <span className="font-semibold">Core Consulting</span>, we deliver
        solutions that help organizations grow, adapt, and achieve measurable
        success. With deep expertise across industries, we combine strategy,
        innovation, and execution to empower businesses in a rapidly changing
        world.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
        <span className="border-b-4 border-indigo-500 pb-1">Strategy Consulting</span>
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        We guide organizations in defining long-term vision, setting actionable
        roadmaps, and implementing growth plans. From competitive positioning
        and market research to digital transformation roadmaps, our strategies
        are built to sustain success in global markets.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
        <span className="border-b-4 border-indigo-500 pb-1">Business Transformation</span>
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        Transformation is no longer optional. We support enterprises in
        redesigning processes, adopting technology, and building agile cultures.
        Our frameworks reduce disruption while maximizing value, enabling smooth
        and sustainable change.
      </p>

      {/* Conditionally Render More Content */}
      {showMore && (
        <>
          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
            <span className="border-b-4 border-indigo-500 pb-1">Risk & Compliance</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            Business resilience depends on effective risk management. We design
            governance frameworks, compliance structures, and regulatory
            safeguards. Our tailored solutions protect organizational reputation
            while ensuring operational stability and efficiency.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
            <span className="border-b-4 border-indigo-500 pb-1">Technology & Innovation</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            We help organizations harness emerging technologies—AI, data
            analytics, and cloud solutions—to innovate, adapt faster, and gain
            competitive advantage. Our team integrates cutting-edge tools with
            business goals for maximum impact.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
            <span className="border-b-4 border-indigo-500 pb-1">Leadership & Change Management</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            Leadership drives transformation. We equip executives and managers
            with the skills, strategies, and mindsets to lead through change.
            Our leadership development programs are built on real-world
            insights, ensuring long-term organizational growth.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
            <span className="border-b-4 border-indigo-500 pb-1">Sustainability Consulting</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            Sustainability is the future of business. We assist organizations in
            developing eco-friendly strategies, carbon reduction frameworks, and
            ESG (Environmental, Social, Governance) initiatives that create
            long-term value while protecting the planet.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
            <span className="border-b-4 border-indigo-500 pb-1">Why Choose Us?</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
            With proven expertise and global best practices, our consulting
            approach is practical, effective, and outcome-driven. Whether you are
            scaling your business, entering new markets, or driving innovation,
            we partner with you to deliver measurable impact and sustainable
            growth.
          </p>
        </>
      )}

      {/* Show More / Less Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105"
        >
          {showMore ? "Show Less" : "Get More"}
        </button>
      </div>
    </div>
  );
}
