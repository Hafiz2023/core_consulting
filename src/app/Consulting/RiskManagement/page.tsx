"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, Facebook, Twitter, Youtube } from "lucide-react";

export default function RiskManagement() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Data Sections
  const sections = [
    {
      title: "Risk Management",
      content: `Risk management is the identification, evaluation, and prioritization of risks (defined in ISO 31000 as the effect of uncertainty on objectives).

It is followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events or to maximize opportunities.  

🎯 The objective is to ensure uncertainty does not deflect the endeavor from business goals.`,
    },
    {
      title: "Core Focus Areas",
      content: `
- Risk Culture Assessments  
- Proactive Risk Management Projects  
- Enterprise Risk Management  
- Strategic Risks Identification & Preparation  
- Program Development Solutions  
- Third-Party Risk Profile Monitoring  
- Technology Enabling Solutions  
      `,
    },
    {
      title: "Operational Risk Management",
      content: `
- Robust Risk Appetite Framework  
- Risk & Control Assessments  
- Key Controls Testing  
- Remediation Advisory  
      `,
    },
    {
      title: "Compliance Management",
      content: `
- Regulatory Compliance Identification & Monitoring  
- Testing of Material Compliances  
- Compliance Risk Management Tools  
      `,
    },
    {
      title: "Internal Audit Services",
      content: `
- Internal Audit Functions (Co-sourcing & Outsourcing)  
- Audit Analytics  
- Continuous Monitoring & Auditing  
- Internal Controls Testing  
      `,
    },
    {
      title: "Risk & Compliance Training",
      content: `
- ISO 31000, Information Security, Regulatory Compliance  
- Data Loss Prevention, Health & Safety, Sustainability  
- Ethics & Governance  
      `,
    },
    {
      title: "Value-Added Projects",
      content: `
- Business Process Re-engineering  
- Cost Optimization Projects  
      `,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-blue-50 px-6 md:px-14 py-16">
      {/* ✅ Page Title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-600 to-teal-500 underline underline-offset-8 decoration-indigo-400 mb-16"
      >
        Risk Management
      </motion.h1>

      {/* ✅ Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500"
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 underline underline-offset-4 decoration-indigo-300">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base md:text-lg">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ✅ Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 bg-white p-10 rounded-2xl shadow-md border border-gray-100 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 underline underline-offset-8 decoration-indigo-400">
          Get in Touch
        </h2>

        <div className="space-y-3 text-gray-700 text-lg">
          <p className="flex items-center justify-center gap-2">
            <Phone className="text-indigo-600" size={20} />
            <span>
              Middle East: <strong>+971 2 6594006</strong>
            </span>
          </p>

          <p className="flex items-center justify-center gap-2">
            <Phone className="text-indigo-600" size={20} />
            <span>
              India: <strong>+91 11 41055534</strong>
            </span>
          </p>

          <p className="flex items-center justify-center gap-2">
            <Mail className="text-indigo-600" size={20} />
            <a
              href="mailto:risk@continuityandresilience.com"
              className="text-indigo-700 hover:underline"
            >
              risk@continuityandresilience.com
            </a>
          </p>
        </div>

        {/* ✅ Social Links */}
        <div className="flex justify-center gap-8 mt-8 text-lg">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-all"
          >
            <Facebook size={20} /> Facebook
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sky-500 hover:text-sky-700 transition-all"
          >
            <Twitter size={20} /> Twitter
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-all"
          >
            <Youtube size={20} /> YouTube
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
