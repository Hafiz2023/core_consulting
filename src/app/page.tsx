"use client";

import PartnersSection from "../app/PartnersSection/page";
import OurTeam from "./AboutUs/OurTeam/page";
import CoreServicesHero from "./CoreServicesHero/page";

import ServicesGrid from "./ServicesGrid/page";
import TestimonialsCarousel from "./TestimonialsCarousel/page";

export default function Home() {
  return (
    <div>
      <CoreServicesHero />
      <PartnersSection />

      <ServicesGrid />
      <OurTeam />
      <TestimonialsCarousel />
    </div>
  );
}
