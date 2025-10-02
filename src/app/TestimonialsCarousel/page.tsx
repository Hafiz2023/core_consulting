"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Were valuable and the trainer's practical experience was evident.",
    author: "Mobinil",
    designation: "IT Firm Owner",
  },
  {
    quote:
      "Conceptually clear, highly experienced, and very effective as consultants.",
    author: "TCF (The Centennial Fund)",
    designation: "IT Firm Owner, Dubai.",
  },
  {
    quote: "Very effective.",
    author: "IT Firm Owner, Dubai.",
    designation: "",
  },
  {
    quote: "Excellent insights and practical advice, highly recommend!",
    author: "Global Tech Solutions",
    designation: "CEO",
  },
  {
    quote: "The training transformed our team's capabilities.",
    author: "Innovative Corp",
    designation: "HR Manager",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      duration: 40, // 🔹 smoother sliding
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })] // 🔹 Auto loop without stopping
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-gray-800 mb-2"
        >
          What People Say About Us
        </motion.h1>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-10 rounded-full"></div>
      </div>

      {/* Embla Carousel */}
      <div className="relative embla max-w-7xl mx-auto" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 pl-4"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
                <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    {testimonial.author}
                  </p>
                  {testimonial.designation && (
                    <p className="text-sm text-gray-500">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-gradient-to-r from-blue-500 to-teal-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
