import React from "react";
import "../styles/ProjectTemplate.css";

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
    <section className="project-template">
      {/* Hero */}
      <div
        className="project-hero d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), #1a1a1a), url(${heroImage})`,
        }}
      >
        <div className="container text-light">
          <p className="lead">I’m</p>
          <h1 className="display-4 fw-bold">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5 text-light project-body">
        <div className="vertical-line"></div>

        {/* Overview */}
        <div className="mb-5">
          <h4>Overview</h4>
          <p>{overview}</p>
        </div>

        {/* Role/Platforms/Year */}
        <div className="row mb-5">
          <div className="col-md-4">
            <h5>Role</h5>
            <p>{role}</p>
          </div>
          <div className="col-md-4">
            <h5>Platforms</h5>
            <p>{platforms}</p>
          </div>
          <div className="col-md-4">
            <h5>Year</h5>
            <p>{year}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="mb-5">
          <h5>Problem</h5>
          <p>{problem}</p>
        </div>
        <div className="mb-5">
          <h5>Opportunity</h5>
          <p>{opportunity}</p>
        </div>
        <div className="mb-5">
          <h5>Process</h5>
          <p>{process}</p>
        </div>
        <div className="mb-5">
          <h5>Results</h5>
          <p>{results}</p>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between mt-5">
          <a href={prevLink} className="text-light text-decoration-none">Previous Project</a>
          <a href={nextLink} className="text-light text-decoration-none">Next Project</a>
        </div>
      </div>
    </section>
  );
}
