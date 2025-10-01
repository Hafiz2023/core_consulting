

"use client";
import React from "react";

const Tools = () => {
return ( <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-4xl">
{/* 🔹 Heading */} <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
Tools </h1>

```
  {/* 🔹 Overview */}
  <section className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Overview
    </h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      We provide specialized <strong>Business Continuity and Risk
      Management Tools</strong> that empower organizations to automate,
      monitor, and manage their resilience programs effectively. These tools
      integrate global best practices with modern technology, enabling
      real-time decision-making, reporting, and compliance management.
    </p>
  </section>

  {/* 🔹 Key Tools */}
  <section className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Key Tools & Solutions
    </h2>
    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
      <li>
        <strong>BCM Tools</strong> – Manage Business Continuity lifecycle,
        including Risk Assessments, Business Impact Analysis, Plans, and
        Testing.
      </li>
      <li>
        <strong>IT Disaster Recovery Tools</strong> – Automate IT DR
        processes, ensure quick recovery, and compliance with ISO 22301 and
        related standards.
      </li>
      <li>
        <strong>Notification Systems</strong> – Real-time communication
        platforms to alert employees, stakeholders, and customers during
        incidents.
      </li>
      <li>
        <strong>Risk Management Platforms</strong> – Identify, evaluate, and
        mitigate risks across enterprise systems.
      </li>
      <li>
        <strong>Compliance Dashboards</strong> – Track regulatory and
        certification requirements (ISO, GDPR, etc.).
      </li>
    </ul>
  </section>

  {/* 🔹 Benefits */}
  <section className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Benefits
    </h2>
    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
      <li>Improved operational efficiency and visibility</li>
      <li>Automated reporting and compliance management</li>
      <li>Faster incident response and recovery time</li>
      <li>Enhanced communication during crises</li>
      <li>Integration with enterprise applications (ERP, CRM, ITSM)</li>
    </ul>
  </section>

  {/* 🔹 Global Adoption */}
  <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Global Adoption
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Our tools are trusted and implemented by leading organizations across
      banking, telecom, energy, retail, government, and manufacturing
      sectors. With user-friendly interfaces and robust security features,
      these tools help businesses align with global standards and strengthen
      resilience worldwide.
    </p>
  </section>
</div>


);
};

export default Tools;
