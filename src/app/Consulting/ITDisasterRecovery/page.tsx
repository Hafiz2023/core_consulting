// app/ITDisasterRecovery/page.tsx
"use client";

import React from "react";
import {
  Shield,
  Settings,
  AlertTriangle,
  Briefcase,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

export default function ITDisasterRecovery() {
  const sections = [
    {
      id: 1,
      title: "IT Disaster Recovery (IT DR)",
      description:
        "IT Disaster Recovery (IT DR) refers to the processes, policies and procedures related to preparing for recovery or continuation of technology infrastructure after a disruption or disaster. Most IT DR plans look to ensure that core, high-priority operations continue or at least resume within an acceptable time after a disaster.",
      icon: <Shield className="w-10 h-10 text-indigo-600" />,
    },
    {
      id: 2,
      title: "Implementation",
      description:
        "Implementation of IT Disaster Recovery involves resilience of the entire technology chain that supports critical applications, including:\n✔ Data Centres, Workstations, Desktops, Laptops and other computing equipment\n✔ Data and other information\n✔ Servers and routers\n✔ Networks and Telecom infrastructure",
      icon: <Settings className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "Why IT Disaster Recovery",
      description:
        "IT is the backbone of every business. An IT disaster can cause a company-wide disruption. Per Gartner, 2 out of 5 organizations that experience a severe disaster go out of business within five years.\n\nMost organizations are now critically dependent on IT. Disasters can strike at any time without prior notice. When IT fails, organizations may be unable to function. Severe disasters can incapacitate or even permanently cripple a business.\n\n⚠ Loss of data can bring the organization to a standstill – not to mention fines, regulatory sanctions, etc.\n\nIT Disaster Recovery is critical for any organization due to regulations and corporate governance implications. ICT continuity management supports overall Business Continuity Management (BCM), ensuring processes are protected and organizations can respond effectively.",
      icon: <AlertTriangle className="w-10 h-10 text-red-600" />,
    },
    {
      id: 4,
      title: "Consulting & Services",
      description:
        "Our expertise enables us to empower you with:\n✔ Implementation of IT DR in line with ISO 22301 Best Practices\n✔ Conducting IT DR BIA and obtaining signoff\n✔ Conducting IT DR Risk Analysis and obtaining signoff\n✔ Developing and signoff of the IT DR Recovery Strategy\n✔ IT DR Plan review\n✔ Conducting IT DR Tests and Exercises, including Exercise report\n✔ Internal Audit of IT DR\n✔ Third-party Audits of outsourced IT DR processes\n✔ Specialized IT DR manpower outsourcing\n✔ Annual/Periodic Maintenance and Assurance Audits\n✔ Conducting IT DR management Review\n✔ Configuration and implementation of IT DR Tools\n✔ Conducting Mock Certification and pre-assessment audits\n✔ IT Disaster Recovery Training and Consulting\n\n📩 For more information: info@coreconsulting.ae",
      icon: <Briefcase className="w-10 h-10 text-yellow-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
          IT Disaster Recovery & Risk Management
        </h1>

        {/* Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-14 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
          >
            <Facebook className="w-5 h-5" /> Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="flex items-center gap-2 bg-sky-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-sky-600 hover:scale-105 transition-transform duration-300"
          >
            <Twitter className="w-5 h-5" /> Twitter
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300"
          >
            <Youtube className="w-5 h-5" /> Youtube
          </a>
        </div>
      </div>
    </div>
  );
}
