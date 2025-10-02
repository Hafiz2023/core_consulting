"use client";
import React from "react";

const ProjectManagementTraining = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-4xl">
      {/* 🔹 Heading */}{" "}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        Project Management Training{" "}
      </h1>
      ```
      {/* 🔹 Overview */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our <strong>Project Management Training</strong> program is designed
          to equip professionals with the essential knowledge, tools, and
          techniques needed to successfully initiate, plan, execute, monitor,
          and close projects across diverse industries. This training aligns
          with internationally recognized frameworks such as PMP, PRINCE2,
          Agile, and ISO 21500, ensuring participants gain both theoretical
          knowledge and practical insights.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          <li>Fundamentals of Project Management</li>
          <li>Agile & Scrum Methodologies</li>
          <li>Risk & Quality Management in Projects</li>
          <li>Project Portfolio & Program Management</li>
          <li>Leadership & Communication in Projects</li>
        </ul>
      </section>
      {/* 🔹 Learning Outcomes */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Learning Outcomes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Upon successful completion, participants will be able to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          <li>Apply global best practices in project management</li>
          <li>
            Use project management tools to improve efficiency and productivity
          </li>
          <li>Identify, assess, and mitigate project risks</li>
          <li>
            Lead project teams effectively with enhanced communication and
            leadership skills
          </li>
          <li>
            Align project goals with organizational strategies for sustainable
            results
          </li>
        </ul>
      </section>
      {/* 🔹 Trainers */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Expert Trainers
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our trainers are internationally certified professionals with decades
          of real-world experience in managing complex projects globally. They
          bring a combination of academic knowledge, practical expertise, and
          engaging teaching methods to every session.
        </p>
      </section>
      {/* 🔹 Global Reach */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Global Reach & Industry Coverage
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This program has been successfully delivered across multiple
          industries, including Banking, IT, Telecom, Oil & Gas, Government,
          FMCG, and Manufacturing. Our global footprint covers North America,
          Europe, the Middle East, Africa, and Asia.
        </p>
      </section>
      {/* 🔹 Certification */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Certification
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Participants will receive a <strong>Certificate of Completion</strong>
          , demonstrating their competency in project management practices and
          enhancing their career prospects in leadership and project management
          roles worldwide.
        </p>
      </section>
    </div>
  );
};

export default ProjectManagementTraining;
