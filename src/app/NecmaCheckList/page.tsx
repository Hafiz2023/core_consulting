"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare } from "lucide-react"; // icon
import { motion } from "framer-motion";

const checklistFiles = [
  {
    id: 1,
    title: "NECMA Checklist - Business Continuity",
    file: "/pdfs/CORE_-_NCEMA_7000_Self_Assessment_Checklist.pdf",
  },
  {
    id: 2,
    title: "NECMA Checklist - Risk Assessment",
    file: "/pdfs/necma-checklist-risk-assessment.pdf",
  },
  {
    id: 3,
    title: "NECMA Checklist - Crisis Management",
    file: "/pdfs/necma-checklist-crisis-management.pdf",
  },
  {
    id: 4,
    title: "NECMA Checklist - Recovery Planning",
    file: "/pdfs/necma-checklist-recovery-planning.pdf",
  },
];

const NecmaCheckList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-12 drop-shadow-sm"
      >
        ✅ NECMA Checklist
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {checklistFiles.map((checklist, index) => (
          <motion.div
            key={checklist.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border border-gray-200">
              <CardHeader className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <CheckSquare className="w-10 h-10 text-green-600" />
                </div>
                {/* Title */}
                <CardTitle className="text-lg font-semibold text-gray-800 text-center">
                  {checklist.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Download / View Checklist
                </p>
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-all"
                >
                  <a
                    href={checklist.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NecmaCheckList;
