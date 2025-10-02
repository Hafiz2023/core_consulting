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
    name: "Sarah Ahmed",
    title: "Disaster Recovery Strategist, CBCP",
    description:
      "Sarah Ahmed is a certified Disaster Recovery and Business Continuity expert with over 15 years of experience in developing IT disaster recovery strategies. She has led multiple large-scale IT DR implementations across banking, telecom, and healthcare sectors. Sarah specializes in designing recovery plans that minimize downtime, safeguard data, and ensure compliance with global standards such as ISO 22301 and ISO 27031.",
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Principal Consultant, IT Resilience",
    description:
      "Michael Chen has more than 20 years of expertise in IT continuity, infrastructure resilience, and cyber recovery. He has successfully built disaster recovery frameworks for Fortune 500 companies, focusing on cloud-based resilience, hybrid environments, and next-gen backup strategies. His training sessions emphasize practical labs and hands-on recovery exercises.",
  },
  {
    id: "3",
    name: "Ayesha Khan",
    title: "Lead Trainer, ISO 27031 & ISO 22301",
    description:
      "Ayesha Khan is a globally recognized trainer in IT disaster recovery and information security. She has conducted hundreds of workshops worldwide, enabling IT leaders to create structured and tested recovery frameworks. Her sessions combine theoretical insights with real-world case studies, preparing professionals to respond effectively to disruptions.",
  },
  {
    id: "4",
    name: "David Wilson",
    title: "Senior Consultant, Cloud DR & Cybersecurity",
    description:
      "David Wilson brings deep knowledge in cloud disaster recovery, virtualization, and cybersecurity. He has guided enterprises in implementing automated failover systems, data replication strategies, and resilient IT infrastructures. David’s workshops focus on building skills in disaster recovery planning, cyber resilience, and incident response.",
  },
];

export default function ITDRTrainings() {
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
        IT DR <span className="text-blue-600">Trainings</span>
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
