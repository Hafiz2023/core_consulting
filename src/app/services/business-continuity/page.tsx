
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Laptop, Database, Activity, RefreshCw } from "lucide-react";

export default function BusinessContinuity() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-700 to-sky-600 text-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        BCM <span className="text-sky-200">Automation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-sky-100 max-w-3xl mx-auto"
                    >
                        Move beyond spreadsheets. Digitize your Business Continuity Management System for real-time resilience.
                    </motion.p>
                </div>
            </section>

            {/* Core Features */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Database,
                            title: "Centralized Data",
                            desc: "Store all BIAs, Risk Assessments, and Plans in a single, secure repository."
                        },
                        {
                            icon: Activity,
                            title: "Live Dashboards",
                            desc: "Monitor your organization's readiness and compliance status in real-time."
                        },
                        {
                            icon: RefreshCw,
                            title: "Automated Workflows",
                            desc: "Trigger automatic reminders for review cycles, updates, and testing schedules."
                        }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="bg-sky-50 w-14 h-14 rounded-full flex items-center justify-center text-sky-600 mb-6">
                                <card.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Integration Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <Laptop className="w-full h-auto text-sky-200 opacity-50" strokeWidth={1} />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless Integration</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Our BCM tools integrate seamlessly with your existing enterprise architecture. Whether you use SAP, Salesforce, or Microsoft 365, we ensure data flows smoothly to keep your continuity plans accurate and up-to-date.
                        </p>
                        <Link href="/Tool" className="text-sky-600 font-bold hover:underline text-lg">
                            Discover Our Tools &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Automate?</h2>
                <Link
                    href="/Contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Request a Demo
                </Link>
            </section>
        </div>
    );
}
