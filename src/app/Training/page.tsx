"use client";

import React from "react";
import { BookOpen, Users, GraduationCap, Target, Award } from "lucide-react";

export default function RiskManagementTrainings() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12 underline underline-offset-8 decoration-4 decoration-indigo-500">
          Training
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
          Training is a critical element for building knowledge, skills, and
          competencies that empower individuals and organizations to adapt,
          innovate, and succeed in an ever-changing world. Effective training
          not only enhances technical proficiency but also develops leadership,
          communication, and problem-solving abilities.
        </p>

        {/* Why Training Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            Why Training Matters
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Organizations that invest in structured training programs experience
            improved performance, higher employee engagement, and stronger
            retention. Training fosters a culture of learning and growth, making
            businesses more agile and resilient in the face of challenges.
          </p>
        </div>

        {/* Types of Training */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Types of Training
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>Technical Training – enhancing domain-specific skills</li>
            <li>Leadership & Management Training – building future leaders</li>
            <li>
              Soft Skills Training – communication, teamwork, and critical
              thinking
            </li>
            <li>
              Compliance & Safety Training – ensuring regulatory alignment
            </li>
            <li>Onboarding Training – integrating new employees effectively</li>
            <li>Continuous Professional Development (CPD)</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mb-12 bg-indigo-50 border border-indigo-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-600" />
            Benefits of Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-indigo-600" />
                For Employees
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Boosts confidence and motivation</li>
                <li>Improves productivity and efficiency</li>
                <li>Opens pathways for career growth</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-pink-600" />
                For Organizations
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Enhances workforce capabilities</li>
                <li>Strengthens competitiveness in the market</li>
                <li>Reduces turnover and hiring costs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-gray-700 text-lg leading-relaxed text-center mt-10">
          Training is not just about imparting knowledge—it is about empowering
          people to achieve excellence, drive innovation, and create sustainable
          success for the future.
        </p>
      </div>
    </div>
  );
}
