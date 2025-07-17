// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import SummarySection from "../components/SummarySection";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <HeroSection />
      <ProjectCard />
      <section className="summary-footer-wrapper">
        <SummarySection />
        <Footer className="homepage-footer" />
      </section>

    </motion.main>
  );
}
