"use client";
import React from "react";
import Link from "next/link";
const IntertekTrainings = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-4xl">
      {/* Page Title */}{" "}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        Intertek Trainings{" "}
      </h1>
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="font-bold">Intertek Trainings</strong> provides
          globally recognized training solutions that are designed to empower
          individuals and organizations. Our expertise covers a wide range of
          management systems, standards, and professional skills, helping
          businesses achieve excellence, compliance, and resilience.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          <li>ISO Management Systems Training</li>
          <li>Business Continuity & Resilience</li>
          <li>Risk and Crisis Management</li>
          <li>Information Security & Data Protection</li>
          <li>Project & Quality Management</li>
          <li>Leadership & Professional Development</li>
        </ul>
      </section>
      {/* Mission */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We aim to enhance professional competencies by offering practical,
          hands-on learning that aligns with global standards and industry best
          practices. Our mission is to enable professionals to drive improvement
          and ensure sustainable growth within their organizations.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          <li>Accredited and Certified Trainings</li>
          <li>Customized Corporate Programs</li>
          <li>Workshops, Webinars & E-learning</li>
          <li>Implementation & Advisory Support</li>
        </ul>
      </section>
      {/* Global Reach */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Our Global Presence
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Intertek Trainings has delivered programs to professionals across the
          globe, including North America, Europe, Asia, the Middle East, and
          Africa. Our trainers bring decades of cross-industry expertise,
          ensuring that learning is impactful, relevant, and practical.
        </p>
      </section>
      {/* Knowledge Sharing */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Knowledge Sharing & Development
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We actively contribute to industry development by organizing events,
          publishing thought leadership articles, and participating in global
          conferences. Our goal is not only to train but to build knowledge
          communities that inspire continuous improvement.
        </p>
      </section>
      {/* Links */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Explore More
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Learn more about our{" "}
          <Link href="/programs" className="text-blue-600 hover:underline">
            training programs
          </Link>
          , meet our{" "}
          <Link href="/trainers" className="text-blue-600 hover:underline">
            expert trainers
          </Link>
          , or read{" "}
          <Link href="/testimonials" className="text-blue-600 hover:underline">
            client success stories
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default IntertekTrainings;
