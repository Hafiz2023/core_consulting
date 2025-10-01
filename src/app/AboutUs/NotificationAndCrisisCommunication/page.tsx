"use client";

import React, { useState } from "react";

export default function NotificationAndCrisisCommunication() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      {/* ✅ Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-10 underline underline-offset-8 decoration-4 decoration-indigo-500">
        Notification and Crisis Communication
      </h1>

      {/* ✅ Short Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
        In times of crisis, timely and effective communication can make the
        difference between chaos and control. Crisis communication ensures that
        stakeholders, employees, partners, and customers receive the right
        information at the right time, reducing panic and improving response.
        Our notification systems help organizations deliver critical alerts
        through multiple channels instantly, keeping everyone informed and safe.
      </p>

      {/* ✅ Toggleable Content */}
      {showMore && (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Our <span className="font-semibold">Notification and Crisis Communication Solutions</span> are
            designed to deliver mass alerts simultaneously via SMS, Email, Voice
            Calls, Mobile Apps, and Web Dashboards. With an intuitive interface,
            organizations can launch campaigns or emergency notifications within
            seconds, ensuring that critical stakeholders are updated without
            delays.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Features include real-time delivery tracking, acknowledgment
            receipts, escalation workflows, and geo-targeted messaging. In
            addition, our solutions integrate with Business Continuity and
            Disaster Recovery plans, ensuring seamless alignment between crisis
            planning and execution.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Whether it’s a natural disaster, IT outage, supply chain disruption,
            or reputational risk, our communication platforms help leaders
            maintain trust and transparency. Automation ensures faster response,
            while analytics provide insights for continuous improvement.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
            Industries we serve include Banking, Telecom, Government, Oil &
            Gas, Healthcare, Utilities, and Manufacturing. From small businesses
            to large enterprises, our solutions can be customized to meet the
            scale and sensitivity of your organization’s needs.
          </p>
        </>
      )}

      {/* ✅ Show More / Less Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105"
        >
          {showMore ? "Show Less" : "Get More"}
        </button>
      </div>

      {/* ✅ Social Links */}
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          className="text-red-600 hover:underline"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}
