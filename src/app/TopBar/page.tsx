
"use client";

import { Phone, Mail, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function TopBar() {
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-white text-gray-800 py-2 text-sm shadow-sm"
    >
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center px-4">
        {/* Left Side: Welcome Message */}
        <motion.p
          variants={itemVariants}
          className="flex-grow text-center md:text-left mb-2 md:mb-0 font-medium"
        >
          Welcome to{" "}
          <span className="text-blue-600 font-semibold">
            CONTINUITY & RESILIENCE
          </span>{" "}
          - Empowering Your Future!
        </motion.p>

        {/* Right Side: Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* Phone UAE */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-1 group text-gray-700 hover:text-blue-600 transition-colors"
            {...hoverEffect}
          >
            <Phone className="w-4 h-4 text-blue-600 group-hover:text-blue-800" />
            <Link href="tel:+97126594006" className="hover:underline">
              UAE: +971 2 6594006
            </Link>
          </motion.div>

          {/* Mobile */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-1 group text-gray-700 hover:text-blue-600 transition-colors"
            {...hoverEffect}
          >
            <Smartphone className="w-4 h-4 text-blue-600 group-hover:text-blue-800" />
            <Link href="tel:+971505767804" className="hover:underline">
              Mob: +971 505767804
            </Link>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-1 group text-gray-700 hover:text-blue-600 transition-colors"
            {...hoverEffect}
          >
            <Mail className="w-4 h-4 text-blue-600 group-hover:text-blue-800" />
            <Link
              href="mailto:info@continuityandresilience.com"
              className="hover:underline"
            >
              info@continuityandresilience.com
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
