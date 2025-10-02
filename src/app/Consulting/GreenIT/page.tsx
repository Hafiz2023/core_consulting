"use client";

import React from "react";
import { Leaf, Battery, Recycle, Lightbulb } from "lucide-react";

export default function GreenIT() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12 underline underline-offset-8 decoration-4 decoration-green-500">
          Green IT & Energy Management
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
          Green IT & Energy Management focuses on sustainable use of technology
          and energy resources. It promotes environmentally responsible
          practices in IT operations, infrastructure, and energy consumption.
          The goal is to reduce carbon footprint, improve energy efficiency, and
          align IT strategies with global sustainability initiatives while
          maintaining business performance and innovation.
        </p>

        {/* Why Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            Why Green IT & Energy Management
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Organizations worldwide are recognizing the importance of reducing
            environmental impact. Green IT helps optimize data centers, minimize
            electronic waste, and implement renewable energy strategies.
            Effective energy management not only reduces costs but also meets
            regulatory requirements and enhances corporate social
            responsibility.
          </p>
        </div>

        {/* Key Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Recycle className="w-6 h-6 text-blue-600" />
            Key Practices of Green IT
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Energy-efficient data centers and cooling systems</li>
            <li>Cloud computing to optimize resource usage</li>
            <li>Virtualization to reduce hardware footprint</li>
            <li>Responsible e-waste recycling and disposal</li>
            <li>Renewable energy integration in IT operations</li>
            <li>Green procurement and sustainable sourcing</li>
          </ul>
        </div>

        {/* Energy Management */}
        <div className="mb-12 bg-green-50 border border-green-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Energy Management Solutions
          </h2>
          <p className="italic font-medium text-green-700 mb-6">
            Driving efficiency while reducing carbon footprint
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <Battery className="w-5 h-5 text-green-600" />
                Energy Efficiency
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Smart grids & energy monitoring</li>
                <li>Use of renewable energy sources</li>
                <li>Efficient power supply systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Sustainability Initiatives
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Carbon footprint analysis & reduction</li>
                <li>Green building certifications</li>
                <li>Awareness training on eco-friendly IT</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mt-10">
          Green IT & Energy Management is not just about saving energy—it’s
          about building a sustainable future where technology and environment
          work together in harmony.
        </p>
      </div>
    </div>
  );
}
