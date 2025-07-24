// src/pages/Home.jsx
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

// Lazy-loaded components (appear below the fold)
const ProjectCard = lazy(() => import("../components/ProjectCard"));
const SummarySection = lazy(() => import("../components/SummarySection"));
const Footer = lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <HeroSection />

      <Suspense fallback={<div style={{ height: "200px" }}></div>}>
        <ProjectCard />
      </Suspense>

      <section className="summary-footer-wrapper">
        <Suspense fallback={<div style={{ height: "200px" }}></div>}>
          <SummarySection />
        </Suspense>
        <Suspense fallback={<div style={{ height: "100px" }}></div>}>
          <Footer className="homepage-footer" />
        </Suspense>
      </section>
    </motion.main>
  );
}
