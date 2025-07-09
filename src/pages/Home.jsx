// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import SummarySection from "../components/SummarySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ProjectCard />
      <section className="summary-footer-wrapper">
        <SummarySection />
        <Footer />
      </section>

    </main>
  );
}
