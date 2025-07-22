// src/components/ProjectCard.jsx
import React from "react";
import projects from "../data/projects";
import { ChevronRight } from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function ProjectCardsSection() {
  return (
    <section className="project-card-section py-5">
      <div className="container-fluid">
        {projects.map((project, index) => (
          <FadeInWhenVisible key={project.id} delay={index * 0.2}>
            <div className="row align-items-center mb-5 gx-4 gy-4">
              {index === 1 ? (
                <>
                  {/* Image left on desktop, top on mobile */}
                  <div className="col-12 col-lg-6 text-center order-1 order-lg-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image middle-project-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="col-12 col-lg-5 offset-lg-1 project-content text-light d-flex flex-column text-lg-start text-center order-0 order-lg-1">
                    <div className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h1>{project.title}</h1>
                    <p className="tagline">{project.summary}</p>
                    <a
                      href={`/project/${project.slug}`}
                      className="chevron-link d-inline-flex align-items-center gap-2 justify-content-lg-start justify-content-center"
                    >
                      View Project <ChevronRight className="chevron-icon" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {/* Image right on desktop, top on mobile */}
                  <div className="col-12 col-lg-6 text-center order-1 order-lg-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-12 col-lg-4 offset-lg-2 project-content text-light d-flex flex-column text-lg-start text-center order-0 order-lg-0">
                    <div className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2>{project.title}</h2>
                    <p className="tagline">{project.summary}</p>
                    <a
                      href={`/project/${project.slug}`}
                      className="chevron-link d-inline-flex align-items-center gap-2 justify-content-lg-start justify-content-center"
                    >
                      View Project <ChevronRight className="chevron-icon" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
