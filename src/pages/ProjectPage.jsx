// src/pages/ProjectPage.jsx
import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import projects from "../data/projects";
import ProjectTemplate from "../components/ProjectTemplate";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    document.title = `${project.title} | Patrick's Portfolio`;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", project.metaDescription || project.overview);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = project.metaDescription || project.overview;
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
      prevLink={{ href: `/project/${prev.slug}`, title: prev.title }}
      nextLink={{ href: `/project/${next.slug}`, title: next.title }}
    />
  );
}
