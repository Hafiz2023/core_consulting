"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants for smooth section entrance
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: ["easeOut"] as const },
  }),
};

// ✅ Type-safe section type (helps avoid prop issues)
interface Section {
  title: string;
  content: React.ReactNode;
}

const AboutUs: React.FC = () => {
  // ✅ Array of sections for clean looping
  const sections: Section[] = [
    {
      title: "Continuity and Resilience (CORE)",
      content: (
        <>
          <p className="mb-4">
            <strong>Continuity and Resilience (CORE)</strong> provides a
            comprehensive range of professional services, including customized
            Trainings, Workshops, Assessments, Implementation, and Certification
            in areas such as:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Risk Management</li>
            <li>Crisis Management and Communications</li>
            <li>Business Continuity</li>
            <li>Disaster Recovery</li>
            <li>Sustainability</li>
            <li>Information Security</li>
            <li>IT Service Management</li>
            <li>Project Management</li>
            <li>Quality</li>
          </ul>
          <p className="mt-4">
            We also help organizations align with corporate standards like{" "}
            <span className="text-indigo-600 font-semibold">
              ISO 27001, ISO 31000, ISO 22301, ISO 9001, ISO 14001
            </span>{" "}
            and more.
          </p>
        </>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <>
          <p className="mb-4">
            Our mission is to empower professionals and organizations by
            enhancing management systems and operational excellence through:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Assessment</li>
            <li>Training</li>
            <li>Consulting (Implementation / Advisory / Testing)</li>
            <li>Audit and Assurance</li>
            <li>Certification</li>
            <li>BCM / IT DR Tools & Notification Systems</li>
            <li>E-learning solutions for BCM and related domains</li>
          </ul>
        </>
      ),
    },
    {
      title: "Knowledge Enhancement & Visibility",
      content: (
        <>
          <p className="mb-4">
            CORE promotes visibility and knowledge growth by:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Organizing seminars and professional networking sessions</li>
            <li>Speaking and contributing at global conferences</li>
            <li>Publishing technical and research papers</li>
            <li>
              Hosting free in-house corporate networking events
              <span className="text-sm text-gray-500"> (conditions apply)</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Our Expertise & Global Reach",
      content: (
        <>
          <p className="mb-4">
            Our experts have delivered projects across{" "}
            <span className="font-semibold text-indigo-600">
              India, USA, Canada, UK, Europe, Africa, and the Middle East
            </span>
            , covering industries such as Banking, Telecom, Oil & Gas,
            Government, and FMCG.
          </p>
          <p>
            With over{" "}
            <span className="text-blue-700 font-semibold">
              100+ man-years of experience
            </span>
            , we bring deep expertise, deploying best practices tailored to each
            client’s unique needs.
          </p>
        </>
      ),
    },
    {
      title: "Clients, Partners & Testimonials",
      content: (
        <p>
          Explore the organizations we’ve partnered with in our{" "}
          <Link href="/clients" className="text-indigo-600 hover:underline">
            clients
          </Link>{" "}
          section. View our{" "}
          <Link href="/partners" className="text-indigo-600 hover:underline">
            partners
          </Link>{" "}
          and authentic{" "}
          <Link href="/testimonials" className="text-indigo-600 hover:underline">
            testimonials
          </Link>{" "}
          from satisfied customers.
        </p>
      ),
    },
  ];

  return (
    <main className="bg-gradient-to-br from-white via-indigo-50 to-blue-50 py-16 px-6 md:px-10 lg:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 bg-clip-text text-transparent underline underline-offset-8 decoration-indigo-400">
          About Us
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          Discover our mission, expertise, and commitment to empowering
          organizations globally.
        </p>
      </motion.div>

      {/* Dynamic Sections */}
      <div className="max-w-6xl mx-auto space-y-16">
        {sections.map((section, i) => (
          <motion.section
            key={i}
            variants={fadeInUp as never}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-8 transition-all duration-500"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 underline underline-offset-8 decoration-indigo-400 mb-6">
              {section.title}
            </h2>
            <div className="text-gray-700 text-base md:text-lg leading-relaxed">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
};

export default AboutUs;
