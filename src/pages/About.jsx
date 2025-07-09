// src/pages/About.jsx
import React from "react";
import "../styles/About.css";
//import backgroundImg from "../assets/about-bg.png"; // Optional if you have one

export default function About() {
  return (
    <main className="about-page text-light">
      <section className="about-hero-section d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <p className="lead">I’m</p>
              <h1 className="display-4 fw-bold">Patrick</h1>
              <p className="mb-4">UX is a journey and I’m your guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-body-section container py-5">
        <div className="row mb-5">
          <div className="col-md-10">
            <h2 className="fw-bold">Patrick</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque diam...
            </p>
          </div>
        </div>

        <div className="row text-center mb-5">
          <div className="col-md-4">
            <h5 className="fw-bold">Skills</h5>
            <ul className="list-unstyled">
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Tools</h5>
            <ul className="list-unstyled">
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Technology</h5>
            <ul className="list-unstyled">
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
              <li>Tool Number 1</li>
            </ul>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <h5 className="fw-bold text-center">Companies I’ve Designed For</h5>
            <div className="row text-center pt-3">
              {[...Array(6)].map((_, i) => (
                <div className="col-6 col-md-2 mb-2" key={i}>
                  Tool Number 1
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10">
            <h2 className="fw-bold">Patrick</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque diam...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
