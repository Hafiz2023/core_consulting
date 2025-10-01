"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CrisisManagement() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-red-700 mb-10 underline underline-offset-8 decoration-4 decoration-red-500">
        Crisis Management
      </h1>

      {/* Short Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
        Crisis Management refers to the strategies and measures an organization
        adopts to prepare for, respond to, and recover from unexpected events.
        Its goal is to minimize the impact of crises on people, reputation, and
        operations, while ensuring resilience and continuity. Effective crisis
        management builds trust, safeguards assets, and ensures organizational
        survival in challenging times.
      </p>

      {/* Toggleable Content */}
      {showMore && (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Our approach is based on global best practices and decades of
            hands-on experience in{" "}
            <span className="font-semibold">Crisis Response</span>,{" "}
            <span className="font-semibold">Business Continuity</span>,{" "}
            <span className="font-semibold">Disaster Recovery</span>, and{" "}
            <span className="font-semibold">Risk Management</span>. We help
            organizations prepare for natural disasters, technological failures,
            human errors, financial disruptions, and reputational crises.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Our consultants have led crisis response initiatives in diverse
            industries such as Telecom, Banking & Finance, Healthcare, Oil &
            Gas, Utilities, and Manufacturing. We design crisis frameworks,
            establish response teams, and create communication strategies that
            ensure timely decision-making and effective response during
            emergencies.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Key elements of our Crisis Management services include risk
            assessment, crisis simulation exercises, emergency communication
            planning, recovery strategies, and post-crisis evaluations. These
            help organizations learn, adapt, and strengthen their resilience
            against future challenges.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
            We also provide guidance on{" "}
            <span className="font-semibold">Crisis Communication Tools</span>,
            enabling organizations to reach employees and stakeholders quickly
            via multiple channels. Additionally, we support contingency
            solutions such as Work Area Recovery (WAR) and IT Disaster Recovery
            for critical operations.
          </p>
        </>
      )}

      {/* Show More / Less Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
        >
          {showMore ? "Show Less" : "Get More"}
        </button>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex justify-center gap-6">
        <Link
          href="https://facebook.com"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Facebook
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Twitter
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          className="text-red-600 hover:underline"
        >
          YouTube
        </Link>
      </div>
    </div>
  );
}
