
"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, ArrowRight, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 font-sans">
            {/* Top Section with Gradient Border */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500"></div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            Continuity <span className="text-blue-500">&</span> Resilience
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering organizations with world-class consulting, training, and digital solutions to navigate uncertainty and achieve sustainable growth.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {[
                                { icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
                                { icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
                                { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
                                { icon: Mail, href: "mailto:info@coreconsulting.com", color: "hover:bg-red-500" },
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className={`p-2 bg-slate-800 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:text-white ${social.color}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-l-4 border-blue-500 pl-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/AboutUs" },
                                { name: "Our Services", href: "/Consulting" },
                                { name: "Training Programs", href: "/Training" },
                                { name: "E-Learning", href: "/Elearning" },
                                { name: "Contact Us", href: "/Contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center hover:text-blue-400 transition-colors duration-200"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-l-4 border-teal-500 pl-3">
                            Contact Info
                        </h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span>123 Business Avenue,<br />Lahore, Pakistan</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                <span>+92 339 4078880</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                <span>adilamin374@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-l-4 border-emerald-500 pl-3">
                            Newsletter
                        </h3>
                        <p className="text-slate-400 mb-4 text-sm">
                            Subscribe to our newsletter for the latest updates and industry insights.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 transition-all"
                            />
                            <button
                                type="button"
                                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 bg-slate-950">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Continuity & Resilience. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
