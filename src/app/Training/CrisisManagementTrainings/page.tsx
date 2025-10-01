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
    name: "Dr. Ayesha Khan",
    title: "Global Crisis Response Specialist",
    description:
      "Dr. Ayesha Khan is an internationally recognized leader in crisis management and organizational resilience. With more than 25 years of experience, she has guided governments, multinational corporations, and humanitarian organizations through complex crises, including natural disasters, cyber-attacks, and reputational risks. Her training emphasizes real-world simulations, decision-making under pressure, and building collaborative response frameworks. She has authored multiple publications on emergency response and crisis leadership, making her a trusted voice in the resilience community.",
  },
  {
    id: "2",
    name: "Mark Henderson",
    title: "Crisis Communications Consultant",
    description:
      "Mark Henderson is a communication strategist specializing in high-stakes crisis scenarios. With a career spanning over 30 years, he has advised Fortune 500 companies and public institutions on managing media relations, stakeholder communication, and brand reputation during emergencies. His trainings highlight the importance of timely, transparent, and empathetic communication in crisis response. Mark’s workshops focus on preparing leaders and spokespersons to handle tough interviews, manage social media storms, and communicate effectively under pressure.",
  },
  {
    id: "3",
    name: "Sophia Martinez",
    title: "Emergency Preparedness & Risk Management Trainer",
    description:
      "Sophia Martinez has extensive expertise in designing emergency preparedness frameworks that integrate seamlessly into organizational structures. With her background in disaster risk reduction and urban resilience, she has trained city authorities, hospitals, and NGOs on proactive crisis planning. Her sessions cover scenario-based exercises, supply chain continuity, employee safety, and public-private collaboration during crises. Sophia believes in empowering organizations to anticipate risks, mitigate impact, and recover stronger from disruptions.",
  },
  {
    id: "4",
    name: "Brig. (Rtd.) Imran Sheikh",
    title: "Crisis Leadership & Security Expert",
    description:
      "Brigadier (Retd.) Imran Sheikh brings military precision and strategic decision-making to crisis management training. With decades of experience in command positions during national emergencies, his expertise lies in coordinating multi-agency crisis responses, ensuring operational resilience, and leading high-stress recovery operations. In the corporate sector, he has advised industries such as energy, aviation, and telecom on developing rapid-response teams, continuity plans, and integrated security strategies. His trainings are designed to cultivate leadership under pressure and instill discipline in managing crises.",
  },
];

export default function CrisisManagementTrainings() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer>(trainers[0]);

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16 max-w-7xl">
      {/* 🔹 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 underline decoration-red-600 underline-offset-8"
      >
        Crisis Management <span className="text-red-600">Trainings</span>
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
                      ? "bg-red-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-600"
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
                <h3 className="text-xl font-semibold text-red-700">
                  {selectedTrainer.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                  {selectedTrainer.description}
                </p>

                {/* 🔹 Contact Buttons */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <button className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
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
