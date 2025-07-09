// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import laptopImage from "../assets/placeholder.png";
import SummarySection from "../components/SummarySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ProjectCard number="01" title="Eden Church" image={laptopImage} flipped />
      <ProjectCard number="02" title="Eden Church" image={laptopImage} />
      <ProjectCard number="03" title="Eden Church" image={laptopImage} flipped />
      <section className="summary-footer-wrapper">
        <SummarySection />
        <Footer />
      </section>

    </main>
  );
}
