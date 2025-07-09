import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import projects from "../data/projects";

export default function Project1() {
  const project = projects.find((p) => p.id === "project1");
  const prev = projects[2]; // Project 3
  const next = projects[1]; // Project 2

  return (
    <ProjectTemplate
      heroImage={project.image}
      title="Patrick"
      subtitle="UX is a journey and I’m your guide"
      overview={project.overview}
      role={project.role}
      platforms={project.platforms}
      year={project.year}
      problem={project.problem}
      opportunity={project.opportunity}
      process={project.process}
      results={project.results}
      prevLink={`/${prev.id}`}
      nextLink={`/${next.id}`}
    />
  );
}
