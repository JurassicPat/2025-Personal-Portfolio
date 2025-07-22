// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-content min-vh-100 d-flex flex-column justify-content-center align-items-center text-light text-center">
      <div>
        <h1 className="display-4 fw-bold">Whoops</h1>
        <p className="lead">I think you made a wrong turn.</p>
        <a href="/" className="learn-more-link">
          Back to Home <ChevronRight className="chevron-icon" />
        </a>
      </div>
    </main>
  );
}
