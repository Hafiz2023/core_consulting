
"use client";

import React from "react";
import {
  Shield,
  Lock,
  Database,
  CheckCircle2,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";

export default function InformationSecurity() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12 underline underline-offset-8 decoration-4 decoration-indigo-500">
          Information Security
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
          Information is one of the most important organizational assets. For an
          organization, information is valuable and should be appropriately
          protected. Security combines systems, operations, and internal
          controls to ensure integrity and confidentiality of data and operation
          procedures. Information security is crucial to protect information and
          enable the safe operation of applications and IT systems, safeguard
          assets, and ensure business continuity.
        </p>

        {/* Why Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-indigo-600" />
            Why Information Security
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Information security ensures organizations can protect their data,
            conduct their business safely, and safeguard both systems and
            hardware. It prevents misuse, data loss, and protects organizational
            technology assets. Security programs help organizations to withstand
            risks, regulatory sanctions, fines, and reputational damage.
          </p>
        </div>

        {/* Value of Data */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-green-600" />
            Your Company’s Value is its Data
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The key asset that a security program helps to protect is your data.
            For many businesses, data management is dictated by regulations.
            Protecting your data means protecting confidentiality, integrity,
            and availability. Loss of data may lead to legal implications,
            business failure, and reputational damage.
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              Product information, including designs, source code, and drawings
            </li>
            <li>
              Financial data, management assessments, and financial records
            </li>
            <li>
              Customer and confidential information
            </li>
            <li>
              Protecting data ensures compliance and resilience
            </li>
          </ul>
        </div>

        {/* CORE Mantra */}
        <div className="mb-12 bg-indigo-50 border border-indigo-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            CORE mantra for Information Security:
          </h2>
          <p className="italic font-medium text-indigo-700 mb-6">
            Security is built-in and not bolt-on
          </p>

          <h3 className="text-xl font-semibold mb-3">What CORE can help you with</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <ClipboardCheck className="w-5 h-5 text-indigo-600" />
                Governance, Risk & Compliance (GRC)
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>ISO/NESA Compliance, Audit & Governance</li>
                <li>Operational Risk Management</li>
                <li>Governance framework</li>
                <li>Enterprise Security Strategy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-red-600" />
                Managed Security Services (MSS)
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Vulnerability Assessments (VA PT)</li>
                <li>Mobile App Security</li>
                <li>Security Device Monitoring</li>
                <li>Real-time incident monitoring & reporting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trainings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-blue-600" />
            Information Security Trainings
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Aspirants workshops for CISSP, CISA, CISM, COBIT, LA, CRISC</li>
            <li>User awareness trainings (end users, management & staff)</li>
            <li>ISMS simulation exercises & trainings</li>
            <li>Customized trainings & workshops</li>
            <li>Security Simulation Games & Exercises</li>
            <li>IRCA ISO/27001 LA training</li>
          </ul>
        </div>

        {/* Risk Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            Risks need to be understood
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Security Management is the management of trade-offs between cost,
            risk, and usability. An effective strategy balances these elements
            to provide maximum protection without reducing operational
            efficiency.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-indigo-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Need Information Security Consulting?
          </h3>
          <p className="mb-4">
            Contact us to learn more about our offerings in Cyber Information
            Security Training and Consulting.
          </p>
          <p className="font-medium">📧 info@coreconsulting.ae</p>
        </div>
      </div>
    </div>
  );
}

