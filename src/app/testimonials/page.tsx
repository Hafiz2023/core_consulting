"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// ✅ Interface for Testimonial data
interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    feedback: string;
}

// ✅ Mock Data for Testimonials
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Doe",
        role: "CTO",
        company: "Tech Corp",
        feedback:
            "Core Consulting transformed our disaster recovery strategy. Their expertise is unmatched, and the implementation was seamless.",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Risk Manager",
        company: "Global Bank",
        feedback:
            "The training sessions were incredibly insightful. Our team is now fully prepared to handle any crisis with confidence.",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Director of Operations",
        company: "Logistics Inc.",
        feedback:
            "A highly professional team that delivers results. Their BCM tools have streamlined our compliance processes significantly.",
    },
];

export default function TestimonialsPage() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-6 md:px-12 lg:px-20">
            {/* 🔹 Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Client <span className="text-indigo-600">Testimonials</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Hear from the leaders who trust us with their business continuity and resilience needs.
                </p>
            </motion.div>

            {/* 🔹 Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                    >
                        {/* Quote Icon */}
                        <Quote className="absolute top-6 right-6 text-indigo-100 w-10 h-10" />

                        <p className="text-gray-700 italic mb-6 leading-relaxed">
                            &quot;{item.feedback}&quot;
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{item.name}</h4>
                                <p className="text-sm text-gray-500">
                                    {item.role}, {item.company}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
