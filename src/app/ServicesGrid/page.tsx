"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 🚀 Services data
const services = [
  {
    title: "Consulting - Implementation",
    description:
      "Save money by inviting our experienced consultants to implement for you.",
    link: "/Consulting",
    highlighted: true,
  },
  {
    title: "Develop BCP in 7 Days",
    description:
      "Perfect for SMEs, vendors, and small corporates. Implement basic BCM readiness to meet minimum regulatory and customer expectations.",
    link: "/services/resilience-planning",
  },
  {
    title: "Mandatory Annual Audits",
    description:
      "Annual internal audits serve as an independent control to meet compliance, regulatory, and certification requirements.",
    link: "/CoreonlineCertifications",
  },
  {
    title: "Temporary & Permanent Staffing​",
    description:
      "Hire our competent staff to implement your urgent projects quickly and effectively.",
    link: "/services/risk-assessment",
  },
  {
    title: "Online Training Calendar",
    description:
      "High-quality, instructor-led training for all organizational levels or professionals looking to grow.",
    link: "/services/training",
  },
  {
    title: "BCM Automation",
    description:
      "Achieve world-class Business Continuity Management System efficiency with our automation tools.",
    link: "/services/business-continuity",
    highlighted: true,
  },
  {
    title: "Emergency Rapid Notification Tools",
    description:
      "Send critical communications in minutes to employees, customers, partners, and key stakeholders.",
    link: "/services/resilience-planning",
  },
  {
    title: "Workplace Recovery",
    description:
      "Operate flexibly from secure, nearby locations that adapt to your requirements.",
    link: "/services/business-recovery",
  },
  {
    title: "eLearning​",
    description:
      "Interactive 1-hour awareness modules on BCM, including pandemic response. Effective for employees, vendors, and partners.",
    link: "/services/risk-assessment",
  },
  {
    title: "Learn more for Less",
    description:
      "Affordable video-based learning programs for students and professionals.",
    link: "/services/training",
  },
];

// ✅ Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};



export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        className="container mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* 🔹 Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 underline decoration-blue-600 underline-offset-8"
         
        >
          Our <span className="text-blue-600">Expert Services</span>
        </motion.h2>

        {/* 🔹 Responsive Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col p-6 rounded-xl border-2 text-center h-full
                ${
                  service.highlighted
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white"
                } 
                shadow-sm transition-all duration-300 
                hover:bg-blue-50 hover:border-blue-500 hover:shadow-xl`}
            
              whileHover={{ scale: 1.05 }}
            >
              {/* Card Heading */}
              <h3
                className={`text-lg font-bold mb-3 tracking-wide
                  ${service.highlighted ? "text-blue-700" : "text-gray-800"}`}
              >
                {service.title}
              </h3>

              {/* Card Description */}
              <p
                className={`text-sm mb-5 flex-grow leading-relaxed
                  ${service.highlighted ? "text-blue-600" : "text-gray-600"}`}
              >
                {service.description}
              </p>

              {/* Card Link */}
              <Link
                href={service.link}
                className={`inline-block mt-auto text-sm font-semibold
                  ${
                    service.highlighted
                      ? "text-blue-700 hover:text-blue-900"
                      : "text-blue-500 hover:text-blue-700"
                  }`}
              >
                Click for more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
