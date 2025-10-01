"use client";

import React from "react";
import {
  Shield,
  Lock,
  Globe,
  CheckCircle2,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";

export default function CyberSecurity() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12 underline underline-offset-8 decoration-4 decoration-indigo-500">
          Cyber Security
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
          Cyber Security is a critical aspect of protecting organizations,
          governments, and individuals from cyber threats. It involves
          practices, processes, and technologies designed to safeguard networks,
          devices, programs, and data from unauthorized access, attacks, or
          damage. As technology evolves, cyber security ensures trust,
          resilience, and business continuity in the digital age.
        </p>

        {/* Why Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-indigo-600" />
            Why Cyber Security
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            With rising cyber threats such as phishing, ransomware, and data
            breaches, organizations must protect critical assets and sensitive
            information. Cyber security not only prevents financial losses and
            regulatory penalties but also preserves reputation and builds
            customer trust in a connected world.
          </p>
        </div>

        {/* Key Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-green-600" />
            Core Areas of Cyber Security
          </h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              Network Security – securing internal networks from intrusions
            </li>
            <li>
              Cloud Security – safeguarding cloud applications and services
            </li>
            <li>
              Endpoint Security – protecting devices like laptops & mobiles
            </li>
            <li>Application Security – securing apps from vulnerabilities</li>
            <li>
              Identity & Access Management – ensuring only authorized access
            </li>
            <li>
              Incident Response & Recovery – minimizing cyberattack impact
            </li>
          </ul>
        </div>

        {/* CORE Services */}
        <div className="mb-12 bg-indigo-50 border border-indigo-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Offer in Cyber Security
          </h2>
          <p className="italic font-medium text-indigo-700 mb-6">
            Building cyber resilience with proactive defense
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <ClipboardCheck className="w-5 h-5 text-indigo-600" />
                Governance, Risk & Compliance (GRC)
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>ISO/NESA Cybersecurity Audits</li>
                <li>Operational & Risk Management</li>
                <li>Regulatory Compliance</li>
                <li>Cybersecurity Governance Frameworks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-red-600" />
                Managed Cyber Security Services
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Threat Intelligence & Monitoring</li>
                <li>Penetration Testing & Vulnerability Assessment</li>
                <li>Incident Detection & Response</li>
                <li>Advanced Endpoint Protection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trainings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-blue-600" />
            Cyber Security Trainings
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Certified Ethical Hacking (CEH) workshops</li>
            <li>Cyber awareness sessions for staff & management</li>
            <li>Simulation-based cyber attack defense training</li>
            <li>Customized enterprise security training programs</li>
          </ul>
        </div>

        {/* Risk Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            Risks in Cyber Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every organization faces cyber risks. Effective cyber security
            strategies balance protection, cost, and usability. Understanding
            threats early and preparing response strategies reduces the impact
            of cyberattacks and ensures resilience.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-indigo-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Need Cyber Security Consulting?
          </h3>
          <p className="mb-4">
            Contact us to learn more about our Cyber Security services and
            training programs.
          </p>
          <p className="font-medium">📧 info@coreconsulting.ae</p>
        </div>
      </div>
    </div>
  );
}
