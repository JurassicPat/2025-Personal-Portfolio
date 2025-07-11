// src/components/SummarySection.jsx
import React, { useState } from "react";
import "../styles/SummarySection.css";
import { ChevronRight } from "lucide-react";
import ContactModal from "./ContactModal";

export default function SummarySection() {
  const [showContact, setShowContact] = useState(false); // ✅ must be inside the component

  return (
    <section className="summary-section">
      <div className="container text-light">
        <div className="row">
          <div className="col-md-8 offset-md-4">
            <h2 className="mb-3">Let’s Build Something Together</h2>
            <p className="lead">
              I design and develop human-centered interfaces and experiences that solve real-world problems.
            </p>

            <button
              className="btn btn-link text-light ps-0 chevron-link"
              onClick={() => setShowContact(true)}
            >
              Contact <ChevronRight className="chevron-icon" />
            </button>
          </div>
        </div>
      </div>

      <ContactModal show={showContact} onClose={() => setShowContact(false)} />
    </section>
  );
}
