"use client";

import React from "react";
import { motion } from "framer-motion";

// ✅ Interface for Partner data
interface Partner {
    id: number;
    name: string;
    category: string;
}

// ✅ Mock Data for Partners
const partners: Partner[] = [
    { id: 1, name: "Global Tech Solutions", category: "Technology" },
    { id: 2, name: "Innovate Finance", category: "Banking" },
    { id: 3, name: "SecureNet Systems", category: "Cybersecurity" },
    { id: 4, name: "EcoGreen Energy", category: "Energy" },
    { id: 5, name: "HealthPlus Care", category: "Healthcare" },
    { id: 6, name: "EduFuture Labs", category: "Education" },
];

export default function PartnersPage() {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            {/* 🔹 Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Our <span className="text-blue-600">Partners</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We collaborate with world-leading organizations to deliver top-tier solutions in business continuity, risk management, and resilience.
                </p>
            </motion.div>

            {/* 🔹 Partners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {partners.map((partner, index) => (
                    <motion.div
                        key={partner.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center justify-center text-center group"
                    >
                        {/* Placeholder Icon/Logo */}
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                            <span className="text-2xl font-bold text-blue-600">
                                {partner.name.charAt(0)}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {partner.name}
                        </h3>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">
                            {partner.category}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
