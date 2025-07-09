// src/components/SummarySection.jsx
import React from "react";
import "../styles/SummarySection.css";

export default function SummarySection() {
  return (
    <section className="summary-section">
      <div className="container text-center text-light">
        <h2 className="mb-3">Let’s Build Something Together</h2>
        <p className="lead mb-4">
          I design and develop human-centered interfaces and experiences that solve real-world problems.
        </p>
        <a href="/about" className="btn btn-outline-light">
          Learn More About Me →
        </a>
      </div>
    </section>
  );
}
