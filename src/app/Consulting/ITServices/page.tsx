"use client";

import React from "react";
import { Server, Users, ClipboardList, LifeBuoy } from "lucide-react";

export default function ITServices() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12 underline underline-offset-8 decoration-4 decoration-blue-500">
          IT Service Management (ITSM)
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
          IT Service Management (ITSM) is the practice of designing, delivering,
          managing, and improving the IT services an organization provides to
          its users. ITSM focuses on aligning IT processes and services with
          business needs, ensuring value delivery, efficiency, and continuous
          improvement.
        </p>

        {/* Why Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Server className="w-6 h-6 text-blue-600" />
            Why IT Service Management
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            ITSM enables organizations to streamline IT operations, reduce
            costs, and enhance customer experience. By following best practices
            such as ITIL, ITSM ensures predictable, reliable, and high-quality
            IT service delivery while supporting digital transformation and
            innovation.
          </p>
        </div>

        {/* Core Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <ClipboardList className="w-6 h-6 text-green-600" />
            Core ITSM Practices
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              Incident Management – restoring services quickly after issues
            </li>
            <li>
              Problem Management – identifying root causes to prevent recurrence
            </li>
            <li>Change Management – ensuring controlled IT changes</li>
            <li>Service Desk – single point of contact for users</li>
            <li>
              Configuration & Asset Management – managing IT assets effectively
            </li>
            <li>
              Continual Service Improvement – refining services for better value
            </li>
          </ul>
        </div>

        {/* ITSM Benefits */}
        <div className="mb-12 bg-blue-50 border border-blue-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Benefits of IT Service Management
          </h2>
          <p className="italic font-medium text-blue-700 mb-6">
            Driving efficiency, reliability, and business alignment
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                Business Value
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Improved customer satisfaction</li>
                <li>Enhanced business-IT alignment</li>
                <li>Support for digital transformation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <LifeBuoy className="w-5 h-5 text-purple-600" />
                Operational Efficiency
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Reduced downtime and service disruptions</li>
                <li>Standardized processes and workflows</li>
                <li>Better resource utilization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mt-10">
          IT Service Management is the backbone of modern IT operations,
          ensuring organizations deliver high-quality, reliable, and
          value-driven services to meet evolving business and customer needs.
        </p>
      </div>
    </div>
  );
}
