
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Bell, CheckCircle, Clock, Smartphone, ShieldCheck } from "lucide-react";

export default function ResiliencePlanning() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-24 px-6 overflow-hidden text-white">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        Resilience & <span className="text-sky-300">Response</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-blue-100 font-light"
                    >
                        From rapid BCP development to instant emergency notifications.
                    </motion.p>
                </div>
            </section>

            {/* Develop BCP in 7 Days */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                            <Rocket size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Develop BCP in 7 Days</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            For SMEs and startups, speed is critical. our &quot;BCP in 7 Days&quot; program delivers a fully compliant Business Continuity Plan tailored to your specific needs without the lengthy consulting timelines.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Compliant with ISO 22301",
                                "Tailored to your industry",
                                "Includes core policies and procedures",
                                "Ready for immediate implementation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle className="text-blue-500 w-5 h-5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-sky-100 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Clock className="text-blue-500" /> The 7-Day Sprint</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <span className="font-bold text-blue-600">Day 1-2:</span> <span>Discovery & Analysis</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-blue-600">Day 3-4:</span> <span>Strategy Formulation</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-blue-600">Day 5-6:</span> <span>Plan Documentation</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-blue-600">Day 7:</span> <span>Review & Handover</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Tools Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Rapid Emergency Tools</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            When disaster strikes, communication is your first line of defense.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Bell,
                                title: "Mass Notification",
                                desc: "Send alerts via SMS, Email, and App push simultaneously to 1000s of employees."
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile Command",
                                desc: "Manage incidents from your phone with our dedicated crisis response app."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Status Check",
                                desc: "Real-time safety roll-calls to verify staff safety during emergencies."
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto">
                                    <card.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{card.title}</h3>
                                <p className="text-gray-600 text-center leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-900 text-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Build Resilience Today</h2>
                    <p className="text-blue-200 text-lg mb-8">
                        Whether you need a plan in a week or tools for a lifetime, we have the solution.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 hover:shadow-blue-900/50 transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}
