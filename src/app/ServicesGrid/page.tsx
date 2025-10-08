"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  ShieldCheck,
  Users,
  BookOpen,
  Bell,
  Briefcase,
  Layers,
  Laptop,
  Award,
  GraduationCap,
} from "lucide-react";

// ✅ Services Data
const services = [
  {
    title: "Consulting & Implementation",
    description:
      "Leverage our expert consultants to design, develop, and implement robust business continuity strategies.",
    link: "/Consulting",
    icon: ShieldCheck,
    highlighted: true,
  },
  {
    title: "Develop BCP in 7 Days",
    description:
      "Launch a complete BCM framework within a week — perfect for SMEs and startups needing quick compliance.",
    link: "/services/resilience-planning",
    icon: Rocket,
  },
  {
    title: "Mandatory Annual Audits",
    description:
      "Fulfill regulatory, compliance, and certification requirements with seamless yearly BCM audits.",
    link: "/CoreonlineCertifications",
    icon: Award,
  },
  {
    title: "Staffing & Resource Support",
    description:
      "Hire experienced consultants or temporary staff to execute projects effectively and meet urgent needs.",
    link: "/services/risk-assessment",
    icon: Users,
  },
  {
    title: "Training Calendar",
    description:
      "Access instructor-led online training programs to upskill your teams and professionals globally.",
    link: "/services/training",
    icon: GraduationCap,
  },
  {
    title: "BCM Automation",
    description:
      "Integrate automation tools for a next-gen, efficient, and resilient Business Continuity Management System.",
    link: "/services/business-continuity",
    icon: Laptop,
    highlighted: true,
  },
  {
    title: "Rapid Emergency Tools",
    description:
      "Deliver critical updates instantly to your workforce, clients, and partners through our alert systems.",
    link: "/services/resilience-planning",
    icon: Bell,
  },
  {
    title: "Workplace Recovery",
    description:
      "Ensure business operations from secure alternate locations with flexible and reliable recovery spaces.",
    link: "/services/business-recovery",
    icon: Briefcase,
  },
  {
    title: "Interactive eLearning",
    description:
      "Empower employees with engaging 1-hour awareness modules covering BCM and emergency response.",
    link: "/services/risk-assessment",
    icon: BookOpen,
  },
  {
    title: "Learn More for Less",
    description:
      "Affordable, video-based self-learning paths for students and professionals seeking BCM knowledge.",
    link: "/services/training",
    icon: Layers,
  },
];

// ✅ Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

// ✅ Component
export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-sky-50 to-blue-50 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_30%_20%,#bae6fd_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#93c5fd_0%,transparent_40%)]"></div>

      <motion.div
        className="container mx-auto px-6 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* 🔹 Heading */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-700 via-sky-600 to-teal-500 text-transparent bg-clip-text drop-shadow-sm"
        >
          Our{" "}
          <span className="underline underline-offset-8 decoration-sky-300">
            Expert Services
          </span>
        </motion.h2>

        {/* 🔹 Service Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.04,
                  y: -6,
                  boxShadow: "0 15px 35px rgba(14, 165, 233, 0.15)",
                }}
                className={`relative group flex flex-col p-8 rounded-2xl border text-center transition-all duration-500 ${
                  service.highlighted
                    ? "border-sky-200 bg-white"
                    : "border-gray-200 bg-white"
                } hover:bg-gradient-to-br hover:from-[#f0f9ff] hover:to-[#e0f2fe]`}
              >
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-sky-100 via-blue-100 to-sky-200 opacity-0 group-hover:opacity-70 transition-all duration-700 pointer-events-none"></div>

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <Icon
                    size={44}
                    className={`transition-all duration-500 ${
                      service.highlighted
                        ? "text-sky-500 group-hover:text-sky-400"
                        : "text-blue-500 group-hover:text-sky-400"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-gray-900 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-grow mb-5 text-gray-700 group-hover:text-gray-800 transition-all duration-300">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.link}
                  aria-label={`Read more about ${service.title}`}
                  className="inline-block mt-auto text-sm font-semibold text-sky-600 hover:text-sky-800 transition-all duration-300"
                >
                  Click for more →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
