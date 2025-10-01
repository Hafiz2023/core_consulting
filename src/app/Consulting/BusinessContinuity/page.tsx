
"use client";

import React from "react";
import { ShieldCheck, RefreshCcw, Users, Database, Phone } from "lucide-react";

export default function BusinessContinuity() {
  const sections = [
    {
      id: 1,
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "What is Business Continuity Management (BCM)?",
      description:
        "Business Continuity Management (BCM) is a holistic management process that identifies potential threats to an organization and provides a framework for building resilience. It ensures the ability to respond effectively to protect stakeholders, reputation, and business operations during crises.",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Objectives of BCM",
      description:
        "• Maintain critical business operations during disruptions.\n• Safeguard customer trust and confidence.\n• Minimize financial and reputational loss.\n• Ensure compliance with legal and regulatory requirements.\n• Support rapid recovery after incidents.",
    },
    {
      id: 3,
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Key Components",
      description:
        "Effective BCM covers:\n\n• Business Impact Analysis (BIA)\n• Risk Assessment\n• Continuity & Recovery Strategies\n• IT Disaster Recovery\n• Crisis Management & Emergency Response\n• Training and Awareness Programs\n• Regular Testing & Simulations",
    },
    {
      id: 4,
      icon: <RefreshCcw className="w-8 h-8 text-orange-600" />,
      title: "Benefits of BCM",
      description:
        "• Improved resilience and preparedness.\n• Enhanced ability to protect employees and assets.\n• Competitive advantage by ensuring reliability.\n• Better stakeholder and customer confidence.\n• Reduced downtime and faster recovery.",
    },
    {
      id: 5,
      icon: <Phone className="w-8 h-8 text-red-600" />,
      title: "Consulting & Services",
      description:
        "Our BCM services include:\n\n• Development of BCM Framework & Policies\n• Conducting Business Impact Analysis (BIA)\n• Risk Analysis & Continuity Strategy Design\n• BCM Plan Development & Maintenance\n• Training & Simulation Exercises\n• Integration with IT Disaster Recovery & Crisis Management\n\n📧 Contact us: info@coreconsulting.ae",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 relative inline-block">
            Business Continuity Management
            <span className="block w-36 h-1 bg-green-500 mx-auto mt-3 rounded"></span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Ensuring organizational resilience and the ability to continue
            operations during and after disruptions.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {section.icon}
                <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

