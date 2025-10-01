"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn button

export function NCEMASection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", transition: { duration: 0.2 } },
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Awards Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* <Image
              src="/bci-middle-east-awards-2019-winner.png" // Award logo path
              alt="BCI Middle East Awards 2019 Winner"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            /> */}
            <p className="text-gray-600 text-sm">BCI MIDDLE EAST <br /> AWARDS 2019 <br /> WINNER</p>
          </motion.div>

          {/* NCEMA Buttons */}
          <div className="flex flex-col space-y-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
              {...hoverEffect}
            >
              <Button className="w-64 h-16 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors">
                NCEMA 7000 Book Extracts
              </Button>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: 0.6 }}
              {...hoverEffect}
            >
              <Button className="w-64 h-16 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-600 transition-colors">
                NCEMA 7000 SELF-ASSESSMENT CHECKLIST
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
