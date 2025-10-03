"use client";

import PartnersSection from "../app/PartnersSection/page";
import OurTeam from "./AboutUs/OurTeam/page";
import CoreConsultingHero from "./CoreConsultingHero/page";
import ServicesGrid from "./ServicesGrid/page";
import TestimonialsCarousel from "./TestimonialsCarousel/page";

export default function Home() {
  return (
    <div>
      <CoreConsultingHero />
      <PartnersSection />
      <ServicesGrid />
      <OurTeam />
      <TestimonialsCarousel />
    </div>
  );
}
