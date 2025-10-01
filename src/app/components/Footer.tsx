// components/Footer.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const hoverEffect = {
    whileHover: { scale: 1.05, color: "#2563eb", transition: { duration: 0.2 } }, // blue-600
  };

  return (
    <footer className="bg-white py-6 shadow-md mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Continuity & Resilience. All rights reserved.
        </p>
        <motion.div {...hoverEffect} className="mt-2">
          <Link href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
