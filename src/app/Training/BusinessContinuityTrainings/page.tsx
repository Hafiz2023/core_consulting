"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Trainer {
  id: string;
  name: string;
  title: string;
  description: string;
}

const trainers: Trainer[] = [
  {
    id: "1",
    name: "Khalid Bahabri",
    title: "Principal Consultant, BCCE",
    description:
      "Khalid Bahabri is recognized as one of the most influential figures in the Business Continuity Management (BCM) industry in the Middle East. With decades of hands-on experience, he has been instrumental in designing and implementing frameworks that align with global standards while being adaptable to regional needs. His achievements include winning the DRI International Strategy of the Year Award (USA), the BCI Asia Most Effective Recovery Award (Malaysia), and the BCM Middle East Award (Dubai). Khalid has mentored organizations across various sectors, helping them strengthen resilience strategies, build disaster recovery frameworks, and ensure that business-critical operations are safeguarded against disruptions. His contributions extend beyond consulting into capacity building and training programs that prepare professionals to manage risks effectively in volatile business environments.",
  },
  {
    id: "2",
    name: "John Robinson",
    title: "Principal Consultant, FBCI",
    description:
      "John Robinson, an FBCI and Fellow of the UK-based Business Continuity Institute, brings over 40 years of expertise in risk management, resilience, and continuity planning. As the founder and Managing Director of INONI Limited, he has pioneered automation tools that make BCM processes more efficient and globally accessible. His consulting footprint spans across industries such as telecom, banking, financial services, insurance, logistics, retail, energy, and transportation. John's approach combines deep technical expertise with practical, results-driven strategies. He is known for translating complex BCM frameworks into actionable plans, ensuring organizations achieve both compliance and operational resilience. His training sessions focus on developing leaders who can handle crises with clarity, confidence, and long-term vision.",
  },
  {
    id: "3",
    name: "Dhiraj Lal",
    title: "ISO31000 Risk Trainer, ISO 22301 & ISO27001 Lead Auditor",
    description:
      "Dhiraj Lal is an internationally recognized trainer and consultant in the fields of risk management, information security, and business continuity. As the Executive Director and Principal Consultant of Continuity and Resilience (CORE), he has built a reputation for delivering impactful training sessions and consultancy services. He was Asia’s first BSI-appointed Technical Expert for BS25999 and ISO 22301, providing specialized assessments and audits. His portfolio includes collaborations with Fortune 500 companies, government institutions, and multinational organizations, where he has successfully implemented ISO certifications and resilience frameworks. Dhiraj has delivered keynote addresses at international conferences, sharing insights on emerging risks, global compliance standards, and practical strategies for resilience. His expertise lies in enabling organizations to not only achieve compliance but to embed resilience into their culture.",
  },
  {
    id: "4",
    name: "CDR IC Singh",
    title: "MBCI, CBCP, BCCE, LA BS25999 / ISO 22301 / ISO 27001",
    description:
      "Commander IC Singh (Retd.) is a seasoned professional with over 34 years of experience in enterprise risk management, business continuity, disaster recovery, and crisis management. A former Commander of the Indian Navy, he has first-hand expertise in managing crises and leading recovery operations under extreme conditions. His transition into the corporate world has seen him advising organizations across industries such as IT, telecom, energy, and finance, where he has developed robust frameworks for IT continuity, crisis management, and enterprise resilience. CDR Singh’s training sessions are marked by real-world case studies, practical exercises, and a strong focus on leadership under pressure. His work has helped enterprises strengthen their governance structures, reduce operational risks, and build effective continuity management systems.",
  },
];

export default function BusinessContinuityTrainings() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer>(trainers[0]);

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16 max-w-7xl">
      {/* 🔹 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 underline decoration-blue-600 underline-offset-8"
      >
        Business Continuity <span className="text-blue-600">Trainings</span>
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* 🔹 Sidebar */}
        <nav className="w-full md:w-1/4 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <ul className="space-y-3">
            {trainers.map((trainer) => (
              <motion.li
                key={trainer.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setSelectedTrainer(trainer)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedTrainer?.id === trainer.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {trainer.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* 🔹 Trainer Detail Section */}
        <main className="w-full md:w-3/4 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          <AnimatePresence mode="wait">
            {selectedTrainer && (
              <motion.div
                key={selectedTrainer.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedTrainer.name}
                </h2>
                <h3 className="text-xl font-semibold text-blue-700">
                  {selectedTrainer.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                  {selectedTrainer.description}
                </p>

                {/* 🔹 Contact Buttons */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                    Contact
                  </button>
                  <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
                    View LinkedIn
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </section>
  );
}
