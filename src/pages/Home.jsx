// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import laptopImage from "../assets/placeholder.png";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ProjectCard number="01" title="Eden Church" image={laptopImage} />
      <ProjectCard number="02" title="Eden Church" image={laptopImage} flipped />
      <ProjectCard number="03" title="Eden Church" image={laptopImage} />
    </main>
  );
}
