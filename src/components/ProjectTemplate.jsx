// src/components/ProjectTemplate.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function ProjectTemplate({
  heroImage,
  title = "Patrick",
  subtitle = "UX is a journey and I'm your guide",
  overview,
  role,
  platforms,
  year,
  problem,
  opportunity,
  process,
  results,
  prevLink = "#",
  nextLink = "#",
}) {
  return (
    <motion.section
  className="project-template"
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.98 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
>

      {/* Hero */}
      <div
        className="project-hero d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), #1a1a1a), url(${heroImage})`,
        }}
      >
        <div className="container text-light">
          <p className="lead">I’m</p>
          <h1 className="display-4 fw-bold" aria-label={`Project by ${title}`}>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container text-light project-body">
        <div className="vertical-line"></div>

        {/* Overview */}
        <FadeInWhenVisible>
          <div className="mb-5">
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
        </FadeInWhenVisible>

        {/* Role/Platforms/Year */}
        <FadeInWhenVisible direction="left">
          <div className="row mb-5">
            <div className="col-md-4">
              <h3>Role</h3>
              <p>{role}</p>
            </div>
            <div className="col-md-4">
              <h3>Platforms</h3>
              <p>{platforms}</p>
            </div>
            <div className="col-md-4">
              <h3>Year</h3>
              <p>{year}</p>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Problem */}
        <FadeInWhenVisible>
          <div className="mb-5">
            <h3>Problem</h3>
            <p>{problem}</p>
          </div>
        </FadeInWhenVisible>

        {/* Opportunity */}
        <FadeInWhenVisible direction="right">
          <div className="mb-5">
            <h3>Opportunity</h3>
            <p>{opportunity}</p>
          </div>
        </FadeInWhenVisible>

        {/* Process */}
        <FadeInWhenVisible>
          <div className="mb-5">
            <h3>Process</h3>
            <p>{process}</p>
          </div>
        </FadeInWhenVisible>

        {/* Results */}
        <FadeInWhenVisible direction="left">
          <div className="mb-5">
            <h3>Results</h3>
            <p>{results}</p>
          </div>
        </FadeInWhenVisible>

        {/* Pagination */}
        <FadeInWhenVisible direction="bottom">
          <div className="d-flex justify-content-between mt-5">
            <a href={prevLink} className="text-light text-decoration-none">
              Previous Project
            </a>
            <a href={nextLink} className="text-light text-decoration-none">
              Next Project
            </a>
          </div>
        </FadeInWhenVisible>
      </div>

      <Footer />
    </motion.section>
  );
}
