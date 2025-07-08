// src/components/HeroSection.jsx
import React from "react";
import "../styles/HeroSection.css";
import profile from "../assets/patrick.png";

export default function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 text-light">
            <p className="lead">Hello! I’m</p>
            <h1 className="display-4 fw-bold">Patrick</h1>
            <p className="mb-4">I create user-driven designs and journeys</p>
            <a href="/about" className="btn btn-outline-light">
              Learn More About Me →
            </a>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-center position-relative">
            <img
              src={profile}
              alt="Patrick smiling outdoors"
              className="hero-profile-img rounded-circle img-fluid"
            />
            <div className="hero-links position-absolute top-0 end-0 me-3 mt-3 d-flex flex-column align-items-end">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light mb-2">LinkedIn</a>
              <a href="/resume.pdf" target="_blank" className="text-light">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
