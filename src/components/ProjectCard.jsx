// src/components/ProjectCard.jsx
import React from "react";
import "../styles/ProjectCard.css";

export default function ProjectCard({ number, title, image, flipped = false }) {
  return (
    <section className={`project-card-section py-5 ${flipped ? "flipped" : ""}`}>
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className={`col-md-6 ${flipped ? "order-md-2" : ""}`}>
            <img
              src={image}
              alt={`${title} website on laptop`}
              className="img-fluid project-image"
            />
          </div>

          {/* Text Column */}
          <div className={`col-md-6 ${flipped ? "order-md-1 text-md-end" : ""}`}>
            <div className="project-content text-light px-3 px-md-5">
              <h2 className="project-number mb-1">{number}</h2>
              <h3 className="fw-bold">{title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                neque diam, hendrerit at justo quis, viverra blandit ligula.
              </p>
              <a href="#" className="btn btn-outline-light mt-2">
                View Website →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
