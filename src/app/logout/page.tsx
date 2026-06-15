"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem("user_session");
        // Simulate logout delay
        const timer = setTimeout(() => {
            router.push("/login");
        }, 1500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                <h1 className="text-2xl font-bold text-white mb-2">Logging Out...</h1>
                <p className="text-gray-400">Please wait while we securely sign you out.</p>
            </motion.div>
        </div>
    );
}
