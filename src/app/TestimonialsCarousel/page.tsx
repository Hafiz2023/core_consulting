// app/page.tsx
"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "were valuable and the trainer's practical experience was evident.",
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
    { loop: true, duration: 25, align: "start" },
    [Autoplay({ delay: 3000 })]
  ); // align: 'start' ताकि स्लाइडें बाएँ से शुरू हों
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
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-2 text-left">
          What people say about us
        </h1>
        <div className="w-48 h-1 bg-teal-500 mb-10"></div>
      </div>

      <div className="relative embla max-w-7xl mx-auto" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 pl-4"
            >
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 h-full flex flex-col justify-between text-left">
           
                <p className="text-gray-700 text-base mb-4">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-gray-900 mt-2">
                    {testimonial.author}
                  </p>
                  {testimonial.designation && (
                    <p className="text-xs text-gray-500">
                      {testimonial.designation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation (Tab Counter) */}
      <div className="flex justify-center mt-8 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === selectedIndex
                ? "bg-teal-500"
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
