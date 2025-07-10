import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import "../styles/ProjectCard.css";
import { ChevronRight } from "lucide-react";

export default function ProjectCardsSection() {
  return (
    <section className="project-card-section py-5">
      <div className="container-fluid">
        {projects.map((project, index) => {
          return (
            <div key={project.id} className="row align-items-center mb-5">
              {index === 1 ? (
                // Project 2: Image left (offset-md-2), Text right
                <>
                  <div className="col-md-6 offset-md-1 text-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image middle-project-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-4 offset-md-1 project-content text-light d-flex flex-column">
                    <div className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="tagline">{project.summary}</p>
                    <a
                      href={`/project/${project.id}`}
                      className="btn btn-link text-light ps-0"
                    >
                      View Website <ChevronRight className="chevron-icon" />
                    </a>
                  </div>
                </>
              ) : (
                // Projects 1 and 3: Text center (offset-md-4), Image right
                <>
                  <div className="col-md-3 offset-md-3 project-content text-light d-flex flex-column">
                    <div className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="tagline">{project.summary}</p>
                    <a
                      href={`/project/${project.id}`}
                      className="btn btn-link text-light ps-0"
                    >
                      View Website <ChevronRight className="chevron-icon" />
                    </a>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
