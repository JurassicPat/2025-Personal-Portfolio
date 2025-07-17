// src/components/ProjectTemplate.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";

function renderParagraphs(text) {
  return text?.split("\n\n").map((para, i) => <p key={i}>{para}</p>);
}

export default function ProjectTemplate({
  heroImage,
  image,
  title,
  subtitle,
  website,
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
      {/* Hero Section */}
      <div
        className="project-hero d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), #1a1a1a), url(${heroImage})`,
        }}
      >
        <div className="container text-light">
          <div className="row align-items-center">
            {/* Title and Subtitle */}
           <div className="col-md-7">
  <a
    href="/"
    className="learn-more-link"
    aria-label="Back to homepage"
  >
    <ChevronRight className="chevron-left-icon" style={{ transform: "rotate(180deg)" }} />Back to Home
  </a>

  <h1 className="display-4 fw-bold" aria-label={`Project by ${title}`}>
    {title}
  </h1>

              <p>{subtitle}</p>
              {website && (
                <a
                  href={website}
                  className="learn-more-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the Website <ChevronRight className="chevron-icon" />
                </a>
              )}
            </div>

            {/* Project Image */}
            <div className="col-md-5 text-center mt-4 mt-md-0">
              {image && (
                <img
                  src={image}
                  alt={`${title} preview`}
                  className="img-fluid rounded shadow-sm"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container project-body">
        {/* Overview */}
        <FadeInWhenVisible>
          <div className="mb-5">
            <h2>Overview</h2>
            {renderParagraphs(overview)}
          </div>
        </FadeInWhenVisible>

        {/* Role / Platforms / Year */}
        <FadeInWhenVisible direction="left">
          <div className="row mb-5">
            <div className="col-md-4">
              <h3>Role</h3>
              {renderParagraphs(role)}
            </div>
            <div className="col-md-4">
              <h3>Platforms</h3>
              {renderParagraphs(platforms)}
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
            {renderParagraphs(problem)}
          </div>
        </FadeInWhenVisible>

        {/* Opportunity */}
        <FadeInWhenVisible direction="right">
          <div className="mb-5">
            <h3>Opportunity</h3>
            {renderParagraphs(opportunity)}
          </div>
        </FadeInWhenVisible>

        {/* Process */}
        <FadeInWhenVisible>
          <div className="mb-5">
            <h3>Process</h3>
            {renderParagraphs(process)}
          </div>
        </FadeInWhenVisible>

        {/* Results */}
        <FadeInWhenVisible direction="left">
          <div className="mb-5">
            <h3>Results</h3>
            {renderParagraphs(results)}
          </div>
        </FadeInWhenVisible>

       {/* Pagination Links */}
<FadeInWhenVisible direction="bottom">
  <div className="d-flex justify-content-between mt-5">
   {/* Previous Project */}
{prevLink && (
  <a
    href={prevLink.href}
    className="chevron-link text-decoration-none d-flex align-items-center gap-2"
    aria-label={`Previous project: ${prevLink.title}`}
  >
    <ChevronRight className="chevron-left-icon" style={{ transform: "rotate(180deg)" }} />
    <div>
      <div className="">Previous Project</div>
      <div className="fw-semibold">{prevLink.title}</div>
    </div>
  </a>
)}

{/* Next Project */}
{nextLink && (
  <a
    href={nextLink.href}
    className="chevron-link text-decoration-none d-flex align-items-center gap-2 text-end"
    aria-label={`Next project: ${nextLink.title}`}
  >
    <div>
      <div className="">Next Project</div>
      <div className="fw-semibold">{nextLink.title}</div>
    </div>
    <ChevronRight className="chevron-icon" />
  </a>
)}

  </div>
</FadeInWhenVisible>


      </div>
    </motion.section>
  );
}
