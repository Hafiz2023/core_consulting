"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RiskManagement() {
  // Animation
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 px-6 md:px-16 py-16">
      {/* Page Title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-16 underline underline-offset-8 decoration-4 decoration-blue-600"
      >
        Risk Management
      </motion.h1>

      {/* Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 max-w-xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 underline underline-offset-4 decoration-blue-400">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base md:text-lg">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-blue-50 p-10 rounded-2xl shadow-md max-w-3xl mx-auto"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-2">
          📞 Middle East: <span className="font-semibold">+971 2 6594006</span>
        </p>
        <p className="text-gray-700 mb-2">
          📞 India: <span className="font-semibold">+91 11 41055534</span>
        </p>
        <p className="text-gray-700 mb-4">
          📧 Email:{" "}
          <a
            href="mailto:risk@continuityandresilience.com"
            className="text-blue-600 underline"
          >
            risk@continuityandresilience.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-4">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 text-lg font-medium"
          >
            Facebook
          </Link>
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 text-lg font-medium"
          >
            Twitter
          </Link>
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 text-lg font-medium"
          >
            YouTube
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
