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
                Whether you're starting from scratch or need a fresh
                perspective, I’m here to help turn your ideas into digital
                realities that feel good to use — and look great doing it.
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
