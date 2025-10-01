// app/ITDRTools/page.tsx

"use client";
import React from "react";

const ITDRTools = () => {
return ( <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-4xl">
{/* 🔹 Heading */} <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
IT DR Tools </h1>

```
  {/* 🔹 Overview */}
  <section className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Overview
    </h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      Our <strong>IT Disaster Recovery (DR) Tools</strong> are designed to
      safeguard critical IT systems, minimize downtime, and ensure seamless
      recovery during unexpected disruptions. These solutions enable
      organizations to maintain business continuity and comply with global
      standards such as <strong>ISO 22301</strong>.
    </p>
  </section>

  {/* 🔹 Core Features */}
  <section className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Core Features
    </h2>
    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
      <li>
        <strong>Automated Backup & Recovery</strong> – Simplify data backup
        and accelerate recovery across systems and applications.
      </li>
      <li>
        <strong>Failover Systems</strong> – Enable instant switch-over to
        backup infrastructure during failures.
      </li>
      <li>
        <strong>Compliance Monitoring</strong> – Ensure readiness for ISO,
        GDPR, and regulatory audits.
      </li>
      <li>
        <strong>Testing & Simulation</strong> – Perform routine DR drills to
        validate recovery strategies.
      </li>
      <li>
        <strong>Cloud & Hybrid Integration</strong> – Protect workloads in
        on-premises, cloud, and hybrid environments.
      </li>
    </ul>
  </section>

  {/* 🔹 Benefits */}
  <section className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Benefits
    </h2>
    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
      <li>Reduced downtime during IT disruptions</li>
      <li>Faster recovery and restoration of critical services</li>
      <li>Improved compliance and audit readiness</li>
      <li>Cost-effective DR management with automation</li>
      <li>Peace of mind for stakeholders and customers</li>
    </ul>
  </section>

  {/* 🔹 Industries We Serve */}
  <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Industries We Serve
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Our IT DR Tools are widely adopted by organizations in{" "}
      <strong>banking, telecom, government, healthcare, energy, and
      manufacturing</strong> sectors. By combining automation and resilience
      strategies, we help enterprises minimize risks and achieve operational
      excellence even during crises.
    </p>
  </section>
</div>


);
};

export default ITDRTools;
