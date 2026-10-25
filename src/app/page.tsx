import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { DesignProcess } from "@/components/home/DesignProcess";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { MaterialStory } from "@/components/home/MaterialStory";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StudioIntroduction } from "@/components/home/StudioIntroduction";
import { Testimonials } from "@/components/home/Testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntroduction />
      <FeaturedProjects />
      <ServicesSection />
      <MaterialStory />
      <DesignProcess />
      <BeforeAfterSection />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
