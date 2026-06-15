"use client";

/**
 * page.tsx (Contact Page)
 * Displays contact information, an interactive map, and a contact form.
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

interface Office {
  city: string;
  country: string;
  contactPerson?: string;
  mobile?: string;
  tel?: string;
  email: string;
  address?: string;
}

const offices: Office[] = [
  {
    city: "ABU DHABI",
    country: "UAE",
    contactPerson: "Dhiraj Lal",
    mobile: "+971 52 9263933",
    tel: "+971 2 6594006",
    email: "dlal@continuityandresilience.com",
    address: "PO Box: 25722, Abu Dhabi, UAE",
  },
  {
    city: "DUBAI",
    country: "UAE",
    contactPerson: "Chanchal Sharma",
    mobile: "+971 505767804",
    tel: "+971 2 6594006",
    email: "info@continuityandresilience.com",
  },
  {
    city: "RIYADH",
    country: "KSA",
    email: "info@continuityandresilience.com",
  },
  {
    city: "BEIRUT",
    country: "LEBANON",
    email: "info@continuityandresilience.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", address: "", idCardNumber: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", address: "", idCardNumber: "", message: "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-10 pb-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-4 drop-shadow-sm">
            Get in Touch
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Have questions or need assistance? We&apos;re here to help. Reach out to one of our global offices or send us a message directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-blue-400" />
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">ID Card Number</label>
                <input
                  type="text"
                  name="idCardNumber"
                  value={formData.idCardNumber}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="National ID / Passport No"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="123 Street, City, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transform transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${status === 'success' ? 'bg-green-500/20 text-green-200 border border-green-500/30' : 'bg-red-500/20 text-red-200 border border-red-500/30'}`}
                >
                  {status === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <p className="text-sm font-medium">{message}</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Offices & Map Section */}
          <div className="space-y-8">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 h-64 md:h-80 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14529.56382098485!2d54.377343!3d24.453884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665b4c8d3d8f%3A0x6b8f3b0c6c1c6c1!2sAbu%20Dhabi%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1647890000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg)' }} // Dark mode map style filter
                allowFullScreen
                loading="lazy"
                title="Google Map"
                className="absolute inset-0"
              />
            </motion.div>

            {/* Offices List */}
            <div className="grid grid-cols-1 gap-6">
              {offices.map((office, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        {office.city}, {office.country}
                      </h3>
                      {office.address && (
                        <p className="text-blue-200/80 text-sm mt-1 ml-7">{office.address}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 ml-7 space-y-2 text-sm text-blue-100/70">
                    {office.contactPerson && (
                      <p className="font-medium text-white">{office.contactPerson}</p>
                    )}
                    {office.mobile && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <a href={`tel:${office.mobile}`} className="hover:text-white transition-colors">{office.mobile}</a>
                      </div>
                    )}
                    {office.tel && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <a href={`tel:${office.tel}`} className="hover:text-white transition-colors">{office.tel}</a>
                      </div>
                    )}
                    {office.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-400" />
                        <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">{office.email}</a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
