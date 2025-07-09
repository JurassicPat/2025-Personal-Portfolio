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
          <div className="col-md-8 text-light">
            <p className="lead">Hello! I’m</p>
            <h1 className="display-4 fw-bold">Patrick</h1>
            <p className="mb-4">I create user-driven designs and journeys</p>
            <a href="/about" className="btn btn-outline-light">
              Learn More About Me →
            </a>
          </div>

          {/* Right Side */}
          <div className="col-md-4 d-flex flex-row-reverse">
            <img
              src={profile}
              alt="Patrick smiling outdoors"
              className="hero-profile-img rounded-circle img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
