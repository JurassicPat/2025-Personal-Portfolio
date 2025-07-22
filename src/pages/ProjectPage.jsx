// src/pages/ProjectPage.jsx
import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectTemplate from "../components/ProjectTemplate";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    document.title = `${project.title} | Patrick's Portfolio`;

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", project.overview);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = project.overview;
      document.head.appendChild(meta);
    }
  }, [project]);

  return (
    <ProjectTemplate
      heroImage={project.hero}
      image={project.image}
      website={project.website}
      title={project.title}
      subtitle={project.summary}
      overview={project.overview}
      role={project.role}
      platforms={project.platforms}
      year={project.year}
      problem={project.problem}
      opportunity={project.opportunity}
      process={project.process}
      results={project.results}
      prevLink={{ href: `/project/${prev.id}`, title: prev.title }}
      nextLink={{ href: `/project/${next.id}`, title: next.title }}
    />
  );
}
