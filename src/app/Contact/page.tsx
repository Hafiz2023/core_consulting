"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [popup, setPopup] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setPopup({ type: "success", message: data.message || "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setPopup({ type: "error", message: data.message || "❌ Failed to send message" });
      }
    } catch {
      setPopup({ type: "error", message: "⚠️ Something went wrong!" });
    }

    setTimeout(() => setPopup(null), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 lg:px-16 max-w-5xl">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 text-center"
      >
        Contact <span className="text-indigo-600">Us</span>
      </motion.h1>

      {/* ✅ Popup */}
      {popup && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`p-4 mb-6 rounded-lg text-center font-semibold ${
            popup.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {popup.message}
        </motion.div>
      )}

      {/* Offices Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {offices.map((office, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700">
              {office.city} – {office.country}
            </h3>
            {office.contactPerson && <p className="text-gray-700 mt-2">{office.contactPerson}</p>}
            {office.mobile && (
              <p>
                Mobile:{" "}
                <Link href={`tel:${office.mobile}`} className="text-blue-600 hover:underline">
                  {office.mobile}
                </Link>
              </p>
            )}
            {office.tel && (
              <p>
                Tel:{" "}
                <Link href={`tel:${office.tel}`} className="text-blue-600 hover:underline">
                  {office.tel}
                </Link>
              </p>
            )}
            <p>
              Email:{" "}
              <Link href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                {office.email}
              </Link>
            </p>
            {office.address && <p className="text-gray-700">{office.address}</p>}
          </motion.div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-indigo-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
          >
            Send Message
          </motion.button>
        </form>
      </section>
    </div>
  );
}
