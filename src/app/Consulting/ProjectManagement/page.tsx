"use client";

import React from "react";
import { Target, Users, ClipboardCheck, TrendingUp } from "lucide-react";

export default function ProjectManagement() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12 underline underline-offset-8 decoration-4 decoration-indigo-500">
          Project Management
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
          Project Management is the practice of planning, executing, and closing
          projects to achieve specific objectives within defined scope, time,
          and budget constraints. It provides organizations with a structured
          approach to manage initiatives effectively, ensuring delivery of value
          and alignment with business goals.
        </p>

        {/* Why Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            Why Project Management
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Effective project management enables organizations to prioritize
            resources, minimize risks, and meet deadlines while ensuring quality
            standards. It creates accountability, improves communication, and
            provides a roadmap for successful project delivery.
          </p>
        </div>

        {/* Core Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <ClipboardCheck className="w-6 h-6 text-green-600" />
            Core Areas of Project Management
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              Project Planning – defining scope, objectives, and timelines
            </li>
            <li>
              Resource Management – allocating human, financial, and material
              resources
            </li>
            <li>Risk Management – identifying and mitigating project risks</li>
            <li>
              Quality Management – ensuring project deliverables meet standards
            </li>
            <li>
              Communication Management – facilitating effective stakeholder
              communication
            </li>
            <li>
              Performance Monitoring – tracking progress with KPIs and metrics
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-12 bg-indigo-50 border border-indigo-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Benefits of Project Management
          </h2>
          <p className="italic font-medium text-indigo-700 mb-6">
            Delivering value with structure, discipline, and collaboration
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Team Effectiveness
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Improved collaboration and coordination</li>
                <li>Clear roles and responsibilities</li>
                <li>Enhanced stakeholder engagement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-pink-600" />
                Business Impact
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Projects delivered on time and within budget</li>
                <li>Greater ROI and business alignment</li>
                <li>Reduced risks and failures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mt-10">
          Project Management ensures that organizations can consistently deliver
          successful projects that drive growth, innovation, and long-term
          sustainability.
        </p>
      </div>
    </div>
  );
}
