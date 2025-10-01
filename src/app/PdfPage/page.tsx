"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react"; // icon
import { motion } from "framer-motion";

const pdfFiles = [
  {
    id: 1,
    title: "Company Profile",
    file: "/pdfs/NCEMA-7000-Book-extract-by-Daman-Sood-and-Dhiraj-Lal-Annexure-Creating-a-framework-document.pdf",
  },
  {
    id: 2,
    title: "Training Brochure",
    file: "/pdfs/NCEMA-7000-Book-extract-by-Daman-Sood-and-Dhiraj-Lal-BCP-Chapter.pdf",
  },
  {
    id: 3,
    title: "Project Report",
    file: "/pdfs/NCEMA-7000-Book-extract-by-Daman-Sood-and-Dhiraj-Lal-BIA-Chapter-1.pdf",
  },
  {
    id: 4,
    title: "Case Study",
    file: "/pdfs/NCEMA-7000-Book-extract-by-Daman-Sood-and-Dhiraj-Lal-Risk-Assessment-Chapter.pdf",
  },
];

const PdfPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-12 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-12 drop-shadow-sm"
      >
        📂 PDF Downloads
      </motion.h1>

      {/* PDF Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pdfFiles.map((pdf, index) => (
          <motion.div
            key={pdf.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border border-gray-200">
              <CardHeader className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <FileText className="w-10 h-10 text-indigo-600" />
                </div>
                {/* Title */}
                <CardTitle className="text-lg font-semibold text-gray-800 text-center">
                  {pdf.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Click below to view or download
                </p>
                <Button
                  asChild
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all"
                >
                  <a href={pdf.file} target="_blank" rel="noopener noreferrer">
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

export default PdfPage;
