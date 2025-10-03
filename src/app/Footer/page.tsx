"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-100 via-blue-600 to-teal-500 text-blue-50">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ✅ Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 underline">
            Continuity & Resilience
          </h2>
          <p className="text-md leading-relaxed text-blue-100 hover:text-white transition-colors duration-300">
            Providing consulting, training, and digital solutions to help
            organizations achieve resilience, innovation, and sustainable
            success.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 underline">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/AboutUs" },
              { name: "Consulting", link: "/Consulting" },
              { name: "Training", link: "/Training" },
              { name: "Contact", link: "/Contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="relative inline-block hover:text-white transition duration-300 group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Contact + Social */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 underline">Get in Touch</h2>
          <p className="text-sm text-blue-100 hover:text-white transition">
            📍 123 Business Street, Lahore, Pakistan
          </p>
          <p className="text-sm text-blue-100 hover:text-white transition">
            ✉️ adilamin374@gmail.com
          </p>
          <p className="text-sm text-blue-100 hover:text-white transition">
            ☎️ +92 339 4078880
          </p>

          {/* ✅ Social Links */}
          <div className="flex space-x-4 mt-5">
            {[
              {
                icon: Facebook,
                color: "hover:bg-blue-500",
                link: "https://www.facebook.com/adilamin786",
              },
              {
                icon: Twitter,
                color: "hover:bg-sky-400",
                link: "https://www.twitter.com",
              },
              {
                icon: Linkedin,
                color: "hover:bg-blue-600",
                link: "https://www.linkedin.com/in/hafiz-muhammad-adil-281738277",
              },
              {
                icon: Mail,
                color: "hover:bg-rose-500",
                link: "mailto:adilamin374@gmail.com",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-blue-750/40 rounded-full transition transform hover:scale-110 ${social.color}`}
              >
                <social.icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="bg-blue-950/30 backdrop-blur-sm py-4 text-center text-sm text-blue-100 border-t border-blue-500/30">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-teal-200">
          Continuity & Resilience
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
