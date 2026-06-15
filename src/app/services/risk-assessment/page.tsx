
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, GraduationCap, Laptop, Check, BookOpen } from "lucide-react";

export default function RiskAssessment() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        Staffing & <span className="text-indigo-400">eLearning</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-indigo-100 max-w-3xl mx-auto"
                    >
                        Agile resource solutions and interactive education to empower your workforce.
                    </motion.p>
                </div>
            </section>

            {/* Two Main Sections */}
            <div className="max-w-7xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-16">
                {/* Staffing */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-indigo-100 p-4 rounded-full text-indigo-600">
                            <Users size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Resource Support</h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Need specialized BCM expertise? Our staffing solutions provide you with experienced consultants, project managers, and coordinators on a temporary or permanent basis.
                    </p>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="font-bold text-xl mb-4">Why Hire Through Us?</h3>
                        <ul className="space-y-3">
                            {[
                                "Vetted industry experts",
                                "Flexible engagement models",
                                "Immediate deployment",
                                "Knowledge transfer assurance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <Check className="text-indigo-500 w-5 h-5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* eLearning */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                            <Laptop size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Interactive eLearning</h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Scalable, consistent, and engaging training for your entire organization. Our awareness modules cover essential BCM and Safety topics in bite-sized formats.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border hover:border-blue-300 transition-colors">
                            <BookOpen className="text-blue-500 w-8 h-8 mb-4" />
                            <h4 className="font-bold text-lg mb-2">BCM Awareness</h4>
                            <p className="text-sm text-gray-600">Fundamental concepts of business continuity for general staff.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border hover:border-blue-300 transition-colors">
                            <GraduationCap className="text-blue-500 w-8 h-8 mb-4" />
                            <h4 className="font-bold text-lg mb-2">Cyber Hygiene</h4>
                            <p className="text-sm text-gray-600">Best practices for information security and data protection.</p>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Link href="/Elearning" className="text-blue-600 font-semibold hover:underline">View Demo Modules &rarr;</Link>
                    </div>
                </motion.div>
            </div>

            {/* CTA */}
            <section className="bg-gray-50 py-16 px-6 text-center">
                <h2 className="text-2xl font-bold mb-6">Need Support or Content?</h2>
                <div className="flex justify-center gap-4">
                    <Link href="/Contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Contact Us</Link>
                </div>
            </section>
        </div>
    );
}
