

"use client";
import React from "react";
import Image from "next/image";

const Elearning = () => {
return ( <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-5xl">
{/* 🔹 Page Title */} <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
ELearning </h1>


  {/* 🔹 Introduction */}
  <section className="mb-8">
    <p className="text-gray-700 leading-relaxed mb-4">
      eLearning is training provided via a computer or other digital device,
      allowing technology to facilitate learning anytime, anywhere.
    </p>
    <p className="text-gray-700 leading-relaxed mb-4">
      The above itself talks about the benefits of eLearning. This medium of
      delivering training is highly cost effective. This is especially good
      when the audience is in large number or the content is repetitive.
    </p>
    <p className="text-gray-700 leading-relaxed mb-4">
      Another benefit of deploying eLearning systems is that the
      geographically disbursed audience can be catered to. The eLearning
      module can be integrated with your existing LMS (Learning Management
      System) or can be deployed in standalone mode.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Please click the image below to have a quick demo of our capabilities.
      We can deliver eLearning modules in English and Arabic languages.
    </p>
  </section>

  {/* 🔹 BCM Awareness Section */}
  <section className="mb-8">
    <h2 className="bg-cyan-700 text-white text-xl font-semibold px-4 py-2 mb-4">
      BCM Awareness
    </h2>

    {/* Image with text overlay */}
    <div className="relative border rounded-lg shadow-lg overflow-hidden">
      <div className="absolute top-2 left-2 bg-white/70 text-gray-800 font-semibold px-3 py-1 rounded">
        English Version
      </div>
      <Image
        src="/bcm-English.jpg" // Replace with actual image path
        alt="BCM Awareness English Version"
        width={800}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  </section>
</div>


);
};

export default Elearning;
