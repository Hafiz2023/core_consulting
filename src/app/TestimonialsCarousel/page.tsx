"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The leadership sessions helped us redefine goals and align the team with purpose. A game changer for us!",
    author: "Sarah Mitchell",
    designation: "Head of Operations, BrightWave Technologies",
  },
  {
    quote:
      "Their consulting approach is a mix of innovation and clarity. Every workshop was practical and insightful.",
    author: "Ahmed Khan",
    designation: "Founder, Apex Digital Solutions",
  },
  {
    quote:
      "The interactive sessions created real impact — our managers now lead with confidence and strategy.",
    author: "Linda Park",
    designation: "HR Director, InnovateX",
  },
  {
    quote:
      "Brilliant insights and engaging style! The team came back energized and motivated.",
    author: "David Roberts",
    designation: "CEO, NextVision Global",
  },
  {
    quote:
      "They bring real-world expertise. Our productivity and communication have improved drastically.",
    author: "Maria Gonzalez",
    designation: "Project Manager, TechSphere",
  },
  {
    quote:
      "I’ve attended many trainings, but this one stood out — deeply practical and results-oriented.",
    author: "James Walker",
    designation: "Operations Lead, Skyline Industries",
  },
  {
    quote:
      "Professional, powerful, and inspiring. We’ve already scheduled our next leadership retreat with them.",
    author: "Aisha Noor",
    designation: "Learning & Development Head, Horizon Group",
  },
  {
    quote:
      "The session delivered both strategy and empathy — perfect for teams navigating transformation.",
    author: "Ravi Patel",
    designation: "Training Coordinator, BlueOrbit Solutions",
  },
  {
    quote:
      "Every lesson was applicable from day one. The trainer’s depth of knowledge is impressive.",
    author: "Emily Carter",
    designation: "Corporate Trainer, DeltaEdge Systems",
  },
  {
    quote:
      "Highly engaging! Our participants walked away with clarity, tools, and confidence to lead.",
    author: "Michael Brown",
    designation: "Managing Partner, GrowthEdge Consulting",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
      containScroll: "trimSnaps",
      duration: 600,
    },
    [
      Autoplay({
        delay: 18000,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    handleSelect();

    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi]);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent mb-2"
        >
          What Our Clients Say
        </motion.h1>
        <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto mb-10 rounded-full"></div>
      </div>

      {/* Embla Carousel */}
      <div className="relative embla max-w-7xl mx-auto" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.6, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="embla__slide flex-none w-3/4 sm:w-1/2 lg:w-1/3 pl-4"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-500">
                <p className="text-gray-700 text-lg leading-relaxed italic mb-4 border-l-4 border-blue-400 pl-4">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-indigo-700 text-base">
                    {testimonial.author}
                  </p>
                  {testimonial.designation && (
                    <p className="text-sm text-gray-500 mt-1">
                      {testimonial.designation}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-gradient-to-r from-indigo-500 to-teal-400 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
