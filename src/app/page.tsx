"use client";

import PartnersSection from "../app/PartnersSection/page";
import OurTeam from "./AboutUs/OurTeam/page";

import ServicesGrid from "./ServicesGrid/page";
import TestimonialsCarousel from "./TestimonialsCarousel/page";

export default function Home() {
  return (
    <div>
      <PartnersSection />
      <ServicesGrid />
      <OurTeam />
      <TestimonialsCarousel/>
    </div>
  );
}
