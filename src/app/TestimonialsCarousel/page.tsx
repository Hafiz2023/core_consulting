"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The leadership sessions helped us redefine goals and align the team with purpose. A game changer for us!",
    author: "Sarah Mitchell",
    designation: "Head of Operations, BrightWave Technologies",
  },
  {
    quote: "Their consulting approach is a mix of innovation and clarity. Every workshop was practical and insightful.",
    author: "Ahmed Khan",
    designation: "Founder, Apex Digital Solutions",
  },
  {
    quote: "The interactive sessions created real impact — our managers now lead with confidence and strategy.",
    author: "Linda Park",
    designation: "HR Director, InnovateX",
  },
  {
    quote: "Professional, powerful, and inspiring. We’ve already scheduled our next leadership retreat with them.",
    author: "Aisha Noor",
    designation: "Learning & Development Head, Horizon Group",
  },
  {
    quote: "Every lesson was applicable from day one. The trainer’s depth of knowledge is impressive.",
    author: "Emily Carter",
    designation: "Corporate Trainer, DeltaEdge Systems",
  },
  {
    quote: "Highly engaging! Our participants walked away with clarity, tools, and confidence to lead.",
    author: "Michael Brown",
    designation: "Managing Partner, GrowthEdge Consulting",
  },
];

export default function TestimonialsSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      duration: 800,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    handleSelect();

    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    // 🧠 Pause/resume autoplay
    emblaApi.on("pointerDown", () => autoplay.current.stop());
    emblaApi.on("pointerUp", () => autoplay.current.play());

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent mb-4">
          What Our Clients Say
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.8, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-none pl-4 w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3"
              >
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 h-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <Quote className="text-indigo-400 w-8 h-8 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-blue-400 pl-4 mb-6">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-indigo-700 text-lg">
                      {t.author}
                    </p>
                    <p className="text-gray-500 text-sm">{t.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-2 sm:px-4 pointer-events-none">
          <button
            onClick={scrollPrev}
            className="pointer-events-auto bg-white shadow-lg hover:shadow-2xl p-3 rounded-full border border-gray-100 text-indigo-600 hover:bg-indigo-50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="pointer-events-auto bg-white shadow-lg hover:shadow-2xl p-3 rounded-full border border-gray-100 text-indigo-600 hover:bg-indigo-50 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 space-x-3">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "bg-gradient-to-r from-indigo-500 to-teal-400 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
