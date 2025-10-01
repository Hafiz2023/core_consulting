// /AboutUs/page.js

"use client";
import React from "react";
import Link from "next/link"; // Import Link for better client-side navigation

// Change 'export const AboutUs' to 'export default AboutUs'
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-4xl">
      {" "}
      {/* Responsive container */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About</h1>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Continuity and Resilience (CORE)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="font-bold">Continuity and Resilience (CORE)</strong>{" "}
          offers a comprehensive range of professional services, including
          customized Trainings, Workshops, Assessments, Implementation,
          Certification, and other support services in the following critical
          areas:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          <li>Risk Management</li>
          <li>Crisis Management and Crisis Communications</li>
          <li>Business Continuity</li>
          <li>Disaster Recovery</li>
          <li>Sustainability</li>
          <li>Information Security</li>
          <li>IT Service Management</li>
          <li>Project Management</li>
          <li>Quality</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Furthermore, CORE assists organizations in implementing and conforming
          to various corporate standards, such as ISO 27001, ISO 31000, ISO 22301,
          ISO 9001, ISO 14001, and more.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to foster and empower professionals and organizations by
          equipping them with the essential skills and knowledge required to
          fortify their management systems and elevate operational excellence
          within their business processes. This pivotal mission is accomplished
          through a multi-faceted approach, including:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          <li>Assessment</li>
          <li>Training</li>
          <li>Consulting (Implementation/Advisory/Testing)</li>
          <li>Audit and Assurance</li>
          <li>Certification</li>
          <li>BCM/IT DR Tools and Notification Systems</li>
          <li>E-learning solutions for BCM and related domains</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Knowledge Enhancement & Visibility
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond the core services, CORE actively promotes visibility and
          knowledge enhancement within their domains of operation by:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          <li>Organizing seminars and networking sessions for professionals</li>
          <li>Contributing to Conferences as Speakers and Knowledge Partners</li>
          <li>Publishing articles, technical, and research papers</li>
          <li>
            Organizing free-of-cost in-house networking sessions for corporates,
            upon request (conditions apply)
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Our Expertise & Global Reach
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our highly experienced consultants and trainers have successfully
          conducted numerous assignments for organizations across various global
          locations, including India, the USA, Canada, UK, Europe, Africa, and the
          Middle East (specifically Dubai, Abu Dhabi, Bahrain, Saudi Arabia,
          Egypt, Oman, Mauritius, and Iran). We possess extensive experience and
          profound expertise in consulting and training across a diverse range of
          industry sectors, such as Banking, Insurance, Brokerage and Capital
          Markets, Telecom, Manufacturing, Airlines, Trading, Oil and Gas,
          Government Departments, and FMCG.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With a collective experience exceeding 100+ man-years, we have
          cultivated intimate knowledge and specialized capabilities across
          various industries, geographies, and cultures. This profound
          understanding empowers us to rapidly and effectively deploy global best
          practices and frameworks for our clients, precisely tailored to the
          unique context of their industries and cultures.
        </p>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
          Clients, Partners & Testimonials
        </h2>
        <p className="text-gray-700 leading-relaxed">
          An indicative list of organizations our consultants have engaged with on
          consulting, assessment, training, and certification projects can be
          found in our{" "}
          <Link href="/clients" className="text-blue-600 hover:underline">
            clients
          </Link>{" "}
          section. Details of our collaborative partners are presented in our{" "}
          <Link href="/partners" className="text-blue-600 hover:underline">
            partners
          </Link>{" "}
          section, and authentic customer feedback is available for review in our{" "}
          <Link href="/testimonials" className="text-blue-600 hover:underline">
            customer testimonials
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutUs; 
