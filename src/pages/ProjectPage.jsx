// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import projects from "../data/projects";
import ProjectTemplate from "../components/ProjectTemplate";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" />; // Handle invalid project ID

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

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
      prevLink={`/project/${prev.id}`}
      nextLink={`/project/${next.id}`}
    />
  );
}
