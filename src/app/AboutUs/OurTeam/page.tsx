"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Khalid Bahabri",
    title: "Principal Consultant, BCCE",
    image: "/pic1.png",
    description:
      "Middle East Business Continuity Industry Personality, The DRI International Strategy of the Year Award, USA, BCI Asia Most Effective Recovery of the Year, Malaysia, BCM Middle East Award, Dubai.",
  },
  {
    id: "2",
    name: "John Robinson",
    title: "Principal Consultant, FBCI",
    image: "/pic2.png",
    description:
      "An FBCI (Fellow of the UK-based Business Continuity Institute), John is a BCM professional who has a 40 years career rooted in risk and continuity, specialising in BCM technology, consultancy and software. He is the founder and Managing Director of INONI Limited, which provides advanced BCM automation and efficiency solutions to enable high-quality technology resilience globally. Over his 40 year career, he has worked across industries such as Telecom, Banking, insurance, Financial Services, Distribution and Logistics, Manufacturing, Retail, Energy/Oil and Gas, water and Power, Transportation and Trading, including a lot of work for Small and medium enterprises (SMEs)",
  },
  {
    id: "3",
    name: "Dhiraj Lal",
    title:
      "ISO31000 Risk Trainer, ISO 22301 and ISO27001 Lead Auditor, CISA, ITIL",
    image: "/pic3.png",
    description:
      "Dhiraj Lal is Executive Director and Principal Consultant of Continuity and Resilience(CORE). He is Asia’s first BSI appointed Technical Expert for BS25999 / ISO 22301, and is also a BS25999 / ISO 22301 assessor. He teaches the advanced level certification workshops in BCM and BS25999 / ISO 22301, and also consults in implementation of BCM and BS25999 / ISO 22301. He has also been invited by the British Standards Institute to participate in the audits of 2 of the first 10 organizations in the world to be awarded the BS25999 certification. He was recently invited to present the 2nd Middle East Crisis and Disaster Management Conference in Abu Dhabi, where he also ran a tabletop exercise on Crisis Management (Fire and Bomb scenario).",
  },
  {
    id: "4",
    name: "CDR IC Singh",
    title:
      "MBCI, CBCP, BCCE , LA BS25999 / ISO 22301 / ISO 27001/ ISO 9001, Winner of the BCI Continuity and Resilience Professional (Private Sector) Award for India – 2016",
    image: "/pic3.png",
    description:
      "IC is Principal Consultant at Continuity and Resilience(CORE). He is an expert Business Resilience and Disaster Recovery professional with over 34 years of professional experience and a distinguished career in enterprise risk management, business continuity, disaster recovery, continuity of operations, and crisis management programme. Earlier successes in making strategic executive decisions as Commander of the Indian Navy in dealing with crisis situations and natural disasters, have led to career achievements in the financial industry directing response teams, providing innovative and tactical solutions in the areas of emergency response management, threats and risk assessment, information security, business continuity planning, staff safety, and formulation of disaster recovery plans",
  },
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(
    teamMembers[0]
  );

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16 max-w-7xl">
      {/* 🔹 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 underline decoration-blue-600 underline-offset-8"
      >
        Meet Our <span className="text-blue-600">Professional Team</span>
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* 🔹 Sidebar */}
        <nav className="w-full md:w-1/4 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <ul className="space-y-3">
            {teamMembers.map((member) => (
              <motion.li
                key={member.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setSelectedMember(member)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedMember?.id === member.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {member.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* 🔹 Member Detail Section */}
        <main className="w-full md:w-3/4 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          <AnimatePresence mode="wait">
            {selectedMember && (
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                {/* 🔹 Profile Image */}
                <motion.div
                  className="w-full lg:w-1/3 flex justify-center lg:justify-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>

                {/* 🔹 Member Info */}
                <div className="w-full lg:w-2/3 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedMember.name}
                  </h2>
                  <h3 className="text-xl font-semibold text-blue-700">
                    {selectedMember.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                    {selectedMember.description}
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </section>
  );
}
