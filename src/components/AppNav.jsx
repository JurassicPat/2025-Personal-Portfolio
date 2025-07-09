// src/components/AppNav.jsx
import React from "react";
import "../styles/AppNav.css";

export default function AppNav() {
  return (
  <div className="app-side-nav d-flex flex-row align-items-end">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="nav-link text-light"
      >
        LinkedIn
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        className="nav-link text-light"
      >
        Resume
      </a>
    </div>
  );
}
