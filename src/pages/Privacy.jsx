// src/pages/Privacy.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import ContactModal from "../components/ContactModal";

import { ChevronRight } from "lucide-react";

export default function Privacy() {
  const [showContact, setShowContact] = useState(false);

  return (
    <motion.main
      className="privacy-page text-light"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <section className="privacy-hero-section d-flex align-items-center min-vh-100">
        <div className="container">
          <FadeInWhenVisible>
            <div className="row align-items-center">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
                <p className="lead">Privacy Policy</p>
                <h1 className="display-4 fw-bold">Your Data, Your Choice</h1>
                <p className="tagline">
                  Transparency matters. Here's how your information is handled on this site.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="privacy-body-section container py-5">
        <FadeInWhenVisible>
          <div className="row mb-5">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <h2 className="fw-bold">1. Introduction</h2>
              <p>
                This site (patrickwatertor.com) is a personal portfolio created and maintained by Patrick Watertor. This Privacy Policy outlines what data is collected, how it's used, and how you can control it.
              </p>

              <h2 className="fw-bold mt-5">2. What We Collect</h2>
              <p>
                This website uses Google Analytics to collect non-identifying, aggregated data such as:
              </p>
              <ul>
                <li>Pages visited</li>
                <li>Time spent on site</li>
                <li>Device/browser type</li>
                <li>Referral sources</li>
              </ul>
              <p>
                No personally identifiable information is collected unless you explicitly provide it via a contact form.
              </p>

              <h2 className="fw-bold mt-5">3. Cookies & Consent</h2>
              <p>
                Cookies are used solely to enhance your experience and track anonymized usage statistics. You can accept or decline cookies upon visiting the site. Your choice is saved locally in your browser.
              </p>

              <h2 className="fw-bold mt-5">4. Contact Form Data</h2>
              <p>
                If you send a message through the contact form, the name, email, and message content you provide are used only to respond to your inquiry. This data is not shared, sold, or stored for marketing.
              </p>

              <h2 className="fw-bold mt-5">5. Third-Party Services</h2>
              <p>
                The following tools are used:
              </p>
              <ul>
                <li>
                  <strong>Google Analytics</strong> — tracks site usage anonymously (IP anonymization is enabled).
                </li>
                <li>
                  <strong>Formspree</strong> — processes contact form submissions securely.
                </li>
              </ul>

              <h2 className="fw-bold mt-5">6. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Withdraw cookie consent at any time</li>
                <li>Request deletion of any personal data you’ve shared</li>
                <li>Contact me regarding privacy concerns</li>
              </ul>

              <h2 className="fw-bold mt-5">7. Contact</h2>
              <p>
                For privacy-related questions, please reach out.
              </p>
               <a
                className="learn-more-link chevron-link"
                onClick={() => setShowContact(true)}
              >
                Reach Out to Me<ChevronRight className="chevron-icon" />
              </a>
            </div>
          </div>
        </FadeInWhenVisible>

        <ContactModal
          show={showContact}
          onClose={() => setShowContact(false)}
        />
      </section>
    </motion.main>
  );
}
