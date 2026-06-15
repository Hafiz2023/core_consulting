
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    BookOpen,
    ShieldAlert,
    Activity,
    Server,
    Briefcase,
    Award,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

// Training Categories Data
const trainings = [
    {
        title: "Business Continuity",
        description:
            "Master the art of maintaining business operations during disruptions with ISO 22301 standards.",
        icon: Activity,
        link: "/Training/BusinessContinuityTrainings",
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Risk Management",
        description:
            "Identify, assess, and mitigate risks effectively using ISO 31000 frameworks.",
        icon: ShieldAlert,
        link: "/Training/RiskManagementTrainings",
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        title: "Crisis Management",
        description:
            "Prepare your leadership team to handle critical situations and protect reputation.",
        icon: BookOpen,
        link: "/Training/CrisisManagementTrainings",
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        title: "IT Disaster Recovery",
        description:
            "Ensure your IT infrastructure is resilient and recoverable in any disaster scenario.",
        icon: Server,
        link: "/Training/ITDRTrainings",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        title: "Project Management",
        description:
            "Deliver projects on time and within budget with proven PMP methodologies.",
        icon: Briefcase,
        link: "/Training/ProjectManagementTraining",
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        title: "Intertek Certification",
        description:
            "Achieve globally recognized certifications to validate your professional expertise.",
        icon: Award,
        link: "/Training/IntertekTrainings",
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
];

const benefits = [
    "Globally Recognized Certifications",
    "Expert Trainers with Industry Experience",
    "Hands-on Workshops & Case Studies",
    "Customized Corporate Training Programs",
    "Networking Opportunities with Peers",
    "Post-Training Support & Resources",
];

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 px-6 overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Elevate Your <span className="text-blue-400">Expertise</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Empowering professionals with world-class training in Business
                        Continuity, Risk Management, and Resilience.
                    </motion.p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Why Choose Our Training?
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Training is a critical element for building knowledge, skills, and
                        competencies that empower individuals and organizations to adapt,
                        innovate, and succeed in an ever-changing world. Our comprehensive
                        programs are designed to bridge the gap between theory and practice.
                    </p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {trainings.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <div
                                        className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.bg} ${item.color}`}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        Explore Course <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Key Learning Outcomes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-4"
                        >
                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <span className="text-lg text-gray-700">{benefit}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Upgrade Your Skills?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Join thousands of professionals who have advanced their careers with
                        CORE Consulting. Register for a course today.
                    </p>
                    <Link
                        href="/Contact/Register"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
                    >
                        Register Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
