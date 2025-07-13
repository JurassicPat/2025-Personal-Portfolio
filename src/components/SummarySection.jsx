// src/components/SummarySection.jsx
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import ContactModal from "./ContactModal";

export default function SummarySection() {
  const [showContact, setShowContact] = useState(false); 

  return (
    <section className="summary-section">
      <div className="container text-light">
        <div className="row">
          <div className="col-md-8 offset-md-3">
            <h2 className="mb-3">Let’s Build Something Together</h2>
            <p className="tagline">
              I design and develop human-centered interfaces and experiences that solve real-world problems.
            </p>

            <button
              className="btn btn-link text-light ps-0 chevron-link learn-more-link"
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
