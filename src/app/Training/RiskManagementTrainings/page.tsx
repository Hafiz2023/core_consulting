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
    name: "Dr. Fatima Malik",
    title: "Enterprise Risk Consultant, ISO 31000 Lead Trainer",
    description:
      "Dr. Fatima Malik is a globally recognized authority in enterprise risk management with more than 18 years of consulting and training experience. She has guided multinational corporations and government entities in embedding ISO 31000 frameworks and building risk-aware cultures. Her training programs focus on integrating risk management into strategic decision-making, ensuring compliance, and enhancing organizational resilience. Dr. Fatima has spoken at numerous international conferences and authored publications on modern risk governance.",
  },
  {
    id: "2",
    name: "James Anderson",
    title: "Senior Risk Analyst, ERM & Governance Specialist",
    description:
      "James Anderson has over 20 years of expertise in financial risk, governance, and compliance. He has served as a consultant to banks, insurance companies, and investment firms, specializing in risk-based decision-making and regulatory frameworks. His workshops equip professionals with practical tools for identifying, analyzing, and mitigating risks in volatile markets. James emphasizes aligning enterprise risk management with corporate objectives to achieve sustainable growth.",
  },
  {
    id: "3",
    name: "Maria Gonzalez",
    title: "Risk & Compliance Trainer, ISO 27005 Expert",
    description:
      "Maria Gonzalez is a specialist in information risk management and compliance. She has trained IT leaders and compliance officers worldwide on managing cyber risks, conducting risk assessments, and implementing ISO 27005 and ISO 22301. Her interactive training sessions highlight emerging threats, cyber resilience, and governance models that ensure secure digital transformation. Maria has also contributed to global projects on regulatory compliance and IT risk integration.",
  },
  {
    id: "4",
    name: "Omar Farooq",
    title: "Corporate Risk Strategist, Crisis & ERM Specialist",
    description:
      "Omar Farooq has worked across the Middle East and Asia, advising organizations in oil & gas, telecom, and manufacturing sectors. With over 15 years of experience, he focuses on building enterprise risk frameworks, conducting scenario-based risk assessments, and creating integrated ERM systems. His training combines real-world examples with global best practices, empowering leaders to anticipate risks and respond effectively. Omar’s consulting has strengthened resilience in organizations facing complex and uncertain environments.",
  },
];

export default function RiskManagementTrainings() {
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
        Risk Management <span className="text-blue-600">Trainings</span>
      </motion.h1>
      ```
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
