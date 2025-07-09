import React from "react";
import projects from "../data/projects";
import "../styles/ProjectCard.css";

export default function ProjectCardsSection() {
  return (
    <section className="project-card-section py-5">
      <div className="container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`row align-items-center justify-content-center mb-5 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
          >
            <div className="col-md-6 text-light project-content d-flex flex-column align-items-center">
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <a href={`/project/${project.id}`} className="btn btn-link text-light ps-0">
                View Website →
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
