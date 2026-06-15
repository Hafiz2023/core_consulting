"use client";

import Partners from "@/components/sections/Partners";
import Team from "@/components/sections/Team";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesOffered from "@/components/sections/ServicesOffered";
import Facts from "@/components/sections/Facts";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <ServicesGrid />
      <Team />
      <Testimonials />
      <Facts />
      <Mission />
      <ServicesOffered />
    </div>
  );
}
