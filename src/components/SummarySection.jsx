// src/components/SummarySection.jsx
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import ContactModal from "./ContactModal";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function SummarySection() {
  const [showContact, setShowContact] = useState(false); 

  return (
    <section className="summary-section">
      <div className="container">
        <FadeInWhenVisible>
        <div className="row">
          <div className="col-md-8 offset-md-3">
            <h2 className="mb-3">Let’s Build Something Together</h2>
            <p className="tagline">
              I design and develop human-centered interfaces and experiences that solve real-world problems. In other words, I help build websites and applications with a personal touch.
            </p>

            <a
              className="learn-more-link chevron-link"
              onClick={() => setShowContact(true)}
            >
              Get in Touch <ChevronRight className="chevron-icon" />
            </a>
          </div>
        </div>
</FadeInWhenVisible>
      </div>

      <ContactModal show={showContact} onClose={() => setShowContact(false)} />
    </section>
  );
}
