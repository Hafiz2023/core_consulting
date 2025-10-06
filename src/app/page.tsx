"use client";

import PartnersSection from "../app/PartnersSection/page";
import OurTeam from "./AboutUs/OurTeam/page";
import CoreConsultingHero from "./CoreConsultingHero/page";
import OurMission from "./OurMission/page";
import ServicesGrid from "./ServicesGrid/page";
import ServicesOffered from "./ServicesOffered/page";
import SomeFacts from "./SomeFacts/page";
import TestimonialsCarousel from "./TestimonialsCarousel/page";

export default function Home() {
  return (
    <div>
      <CoreConsultingHero />
      <PartnersSection />
      <ServicesGrid />
      <OurTeam />
      <TestimonialsCarousel />
      <SomeFacts/>
      <OurMission/>
      <ServicesOffered/>
    </div>
  );
}
