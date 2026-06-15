
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Wifi, Coffee, MapPin, Server } from "lucide-react";

export default function BusinessRecovery() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 skew-x-12 transform origin-bottom"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        Workplace <span className="text-indigo-400">Recovery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-2xl"
                    >
                        Secure, fully equipped alternate workspaces to keep your business running when your primary office is inaccessible.
                    </motion.p>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">State-of-the-Art Facilities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Briefcase, title: "Ready Desks", desc: "Plug-and-play workstations." },
                            { icon: Wifi, title: "High-Speed Net", desc: "Redundant connectivity." },
                            { icon: Server, title: "Data Center", desc: "On-site server access." },
                            { icon: Coffee, title: "Amenities", desc: "Meeting rooms & break areas." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-6 rounded-xl shadow-md border-b-4 border-indigo-500 text-center"
                            >
                                <item.icon className="mx-auto w-10 h-10 text-slate-700 mb-4" />
                                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map / Locations Placeholder */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Locations</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Our recovery sites are strategically located outside major risk zones but easily accessible for your staff. We ensure geographic diversity to minimize concurrent risks.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MapPin className="text-indigo-500" /> <span>Downtown Hub</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="text-indigo-500" /> <span>Suburban Center</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="text-indigo-500" /> <span>Regional Backup Site</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-slate-100 h-64 w-full rounded-2xl flex items-center justify-center">
                        <span className="text-gray-400 font-semibold">[Map Placeholder]</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-indigo-600 text-white py-16 px-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Secure Your Backup Office Now</h2>
                <p className="mb-8 opacity-90">Don&apos;t wait for a disaster to find a place to work.</p>
                <Link href="/Contact" className="bg-white text-indigo-700 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition">
                    Get a Quote
                </Link>
            </section>
        </div>
    );
}
